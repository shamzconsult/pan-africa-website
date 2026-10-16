import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { saveContactEnquiry } from "@/lib/db"

// Simple in-memory rate limiting for spam protection
const rateLimitMap = new Map<string, { count: number; lastReset: number }>()
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5

function isRateLimited(identifier: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(identifier, { count: 1, lastReset: now })
    return false
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true
  }

  record.count += 1
  return false
}

// Sanitize user input to prevent HTML injection in emails
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  // 1. Rate limiting
  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown-ip"
  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute before submitting again." },
      { status: 429 }
    )
  }

  // 2. Parse request body safely
  let body: any
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON format in request payload" },
      { status: 400 }
    )
  }

  // 3. Honeypot bot protection
  if (body.bot_field) {
    // Silently reject bots
    return NextResponse.json({ success: true }, { status: 200 })
  }

  const { name, email, phone, address, website, message } = body

  // 4. Validate types and required fields
  if (
    !name ||
    !email ||
    !message ||
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    )
  }

  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedMessage = message.trim()
  const trimmedPhone = typeof phone === "string" ? phone.trim() : ""
  const trimmedAddress = typeof address === "string" ? address.trim() : ""
  const trimmedWebsite = typeof website === "string" ? website.trim() : ""

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    )
  }

  if (!isValidEmail(trimmedEmail)) {
    return NextResponse.json(
      { error: "Please provide a valid email address" },
      { status: 400 }
    )
  }

  // Length constraints to prevent buffer/payload abuse
  if (
    trimmedName.length > 200 ||
    trimmedEmail.length > 254 ||
    trimmedMessage.length > 10000 ||
    trimmedPhone.length > 50 ||
    trimmedAddress.length > 500 ||
    trimmedWebsite.length > 300
  ) {
    return NextResponse.json(
      { error: "Input exceeds permissible length limits" },
      { status: 400 }
    )
  }

  // 5. Persist enquiry to Neon PostgreSQL database (graceful handling if DB is not configured)
  try {
    await saveContactEnquiry({
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone || null,
      address: trimmedAddress || null,
      website: trimmedWebsite || null,
      message: trimmedMessage,
    })
  } catch (dbError) {
    console.error("Database persistence warning:", dbError instanceof Error ? dbError.message : "Error")
  }

  // 6. Check SMTP credentials
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT) || 587
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const receiverEmail = process.env.RECEIVER_EMAIL

  if (!smtpHost || !smtpUser || !smtpPass || !receiverEmail) {
    console.error("SMTP Configuration missing:", {
      hasHost: !!smtpHost,
      hasUser: !!smtpUser,
      hasPass: !!smtpPass,
      hasReceiver: !!receiverEmail,
    })
    return NextResponse.json(
      {
        error: "Mail server connection failed. Check SMTP credentials.",
      },
      { status: 500 }
    )
  }

  // Configure transporter according to specifications
  const isSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: isSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === "production" ? true : false,
    },
  })

  try {
    await transporter.verify()
  } catch (verifyError) {
    console.error("SMTP connection failed:", verifyError instanceof Error ? verifyError.message : "Verify failed")

    return NextResponse.json(
      {
        error: "Mail server connection failed. Check SMTP credentials.",
      },
      { status: 500 }
    )
  }

  // Escape fields for HTML email table to prevent injection
  const safeName = escapeHtml(trimmedName)
  const safeEmail = escapeHtml(trimmedEmail)
  const safePhone = trimmedPhone ? escapeHtml(trimmedPhone) : "N/A"
  const safeAddress = trimmedAddress ? escapeHtml(trimmedAddress) : "N/A"
  const safeWebsite = trimmedWebsite ? escapeHtml(trimmedWebsite) : "N/A"
  const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, "<br/>")

  const mailOptions = {
    from: `"Enquiry from Website" <${smtpUser}>`,
    to: receiverEmail,
    replyTo: trimmedEmail,
    subject: `New Enquiry Message from ${trimmedName}`,
    html: `
      <h2>New Enquiry from website</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr>
          <td style="padding:8px;border:1px solid #ddd">
            <strong>Name</strong>
          </td>
          <td style="padding:8px;border:1px solid #ddd">
            ${safeName}
          </td>
        </tr>
        <tr>
          <td style="padding:8px;border:1px solid #ddd">
            <strong>Email</strong>
          </td>
          <td style="padding:8px;border:1px solid #ddd">
            ${safeEmail}
          </td>
        </tr>
        <tr>
          <td style="padding:8px;border:1px solid #ddd">
            <strong>Phone</strong>
          </td>
          <td style="padding:8px;border:1px solid #ddd">
            ${safePhone}
          </td>
        </tr>
        <tr>
          <td style="padding:8px;border:1px solid #ddd">
            <strong>Address</strong>
          </td>
          <td style="padding:8px;border:1px solid #ddd">
            ${safeAddress}
          </td>
        </tr>
        <tr>
          <td style="padding:8px;border:1px solid #ddd">
            <strong>Website</strong>
          </td>
          <td style="padding:8px;border:1px solid #ddd">
            ${safeWebsite}
          </td>
        </tr>
        <tr>
          <td style="padding:8px;border:1px solid #ddd">
            <strong>Message</strong>
          </td>
          <td style="padding:8px;border:1px solid #ddd">
            ${safeMessage}
          </td>
        </tr>
      </table>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error("Mail send error:", error instanceof Error ? error.message : "Send failed")

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
