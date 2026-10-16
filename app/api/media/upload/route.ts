import { NextRequest, NextResponse } from "next/server"
import { uploadToCloudinary, isCloudinaryConfigured } from "@/lib/cloudinary"
import { saveMediaAsset } from "@/lib/db"

const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
  "application/pdf",
]
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get("file") as File | null
    const folder = (formData.get("folder") as string) || "paccms/media"
    const category = (formData.get("category") as string) || "general"
    const title = (formData.get("title") as string) || file?.name || "Media Asset"

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: `Unsupported file type: ${file.type}. Allowed: JPG, PNG, WEBP, GIF, SVG, PDF.` },
        { status: 400 }
      )
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File exceeds 10MB limit." },
        { status: 400 }
      )
    }

    if (!isCloudinaryConfigured()) {
      return NextResponse.json(
        {
          error: "Cloudinary credentials are not configured on the server. Please check environment variables.",
        },
        { status: 503 }
      )
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Upload to Cloudinary
    const uploadResult = await uploadToCloudinary(buffer, {
      folder,
      tags: ["paccms", category],
      resource_type: file.type === "application/pdf" ? "raw" : "auto",
    })

    // Store in Neon database
    try {
      await saveMediaAsset({
        public_id: uploadResult.public_id,
        url: uploadResult.url,
        secure_url: uploadResult.secure_url,
        format: uploadResult.format,
        resource_type: uploadResult.resource_type,
        folder,
        width: uploadResult.width,
        height: uploadResult.height,
        bytes: uploadResult.bytes,
        category,
        title,
      })
    } catch (dbErr) {
      console.error("Failed to save media metadata to database:", dbErr instanceof Error ? dbErr.message : "Error")
    }

    return NextResponse.json({
      success: true,
      asset: {
        public_id: uploadResult.public_id,
        secure_url: uploadResult.secure_url,
        format: uploadResult.format,
        width: uploadResult.width,
        height: uploadResult.height,
        bytes: uploadResult.bytes,
        title,
        folder,
      },
    })
  } catch (error) {
    console.error("Media upload error:", error instanceof Error ? error.message : "Error")
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed" },
      { status: 500 }
    )
  }
}
