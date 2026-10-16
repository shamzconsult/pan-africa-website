import { NextResponse } from "next/server"
import { saveNewsletterSubscriber } from "@/lib/db"

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; lastReset: number }>()
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 6

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

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  // 1. Rate limiting
  const forwardedFor = req.headers.get("x-forwarded-for")
  const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown-ip"

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: "Too many subscription requests. Please try again in a few moments." },
      { status: 429 }
    )
  }

  // 2. Safely parse JSON body
  let body: any
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON request body" },
      { status: 400 }
    )
  }

  // Honeypot check
  if (body.bot_field) {
    return NextResponse.json({ success: true }, { status: 200 })
  }

  const { email } = body

  if (!email || typeof email !== "string") {
    return NextResponse.json(
      { error: "Valid email is required" },
      { status: 400 }
    )
  }

  const normalizedEmail = email.trim().toLowerCase()

  if (!isValidEmail(normalizedEmail) || normalizedEmail.length > 254) {
    return NextResponse.json(
      { error: "Please provide a valid email address" },
      { status: 400 }
    )
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
  const DC = process.env.MAILCHIMP_DATA_CENTER

  let mailchimpSuccess = false
  let isAlreadySubscribed = false

  // If Mailchimp is configured, attempt Mailchimp API call
  if (API_KEY && AUDIENCE_ID && DC) {
    const url = `https://${DC}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: normalizedEmail,
          status: "subscribed",
          tags: ["website"],
        }),
      })

      const data = await response.json()

      // HTTP 400 with title "Member Exists" means already subscribed.
      if (!response.ok) {
        if (data.title === "Member Exists") {
          isAlreadySubscribed = true
          mailchimpSuccess = true
        } else {
          console.error("Mailchimp API error:", data.title || "Failed")
          return NextResponse.json(
            { error: data.detail || "Subscription failed. Please try again." },
            { status: 400 }
          )
        }
      } else {
        mailchimpSuccess = true
      }
    } catch (err) {
      console.error("Mailchimp network error:", err instanceof Error ? err.message : "Error")
      // Continue to DB persistence
    }
  } else {
    // If Mailchimp credentials are not yet set in environment, still record in database!
    console.warn("Mailchimp credentials not fully configured; recording subscription locally.")
  }

  // Persist to Neon PostgreSQL database
  try {
    await saveNewsletterSubscriber(
      normalizedEmail,
      "subscribed",
      mailchimpSuccess
    )
  } catch (dbErr) {
    console.error("Database save warning:", dbErr instanceof Error ? dbErr.message : "DB error")
  }

  if (isAlreadySubscribed) {
    return NextResponse.json({
      success: true,
      alreadySubscribed: true,
      message: "You are already subscribed to our newsletter.",
    })
  }

  return NextResponse.json({
    success: true,
    message: "Thank you for subscribing to our newsletter!",
  })
}
