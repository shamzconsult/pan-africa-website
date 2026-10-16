import { v2 as cloudinary, UploadApiResponse } from "cloudinary"

// Configure Cloudinary server-side SDK safely
export function isCloudinaryConfigured(): boolean {
  return !!(
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
  )
}

function getCloudinary() {
  if (!isCloudinaryConfigured()) {
    return null
  }

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  })

  return cloudinary
}

export interface CloudinaryUploadOptions {
  folder?: string
  tags?: string[]
  transformation?: Record<string, any>[]
  resource_type?: "image" | "raw" | "auto" | "video"
}

export async function uploadToCloudinary(
  fileBuffer: Buffer,
  options: CloudinaryUploadOptions = {}
): Promise<UploadApiResponse> {
  const cld = getCloudinary()
  if (!cld) {
    throw new Error("Cloudinary credentials are not configured on the server")
  }

  const { folder = "paccms/media", tags = ["paccms"], resource_type = "auto" } = options

  return new Promise((resolve, reject) => {
    const uploadStream = cld.uploader.upload_stream(
      {
        folder,
        tags,
        resource_type,
        transformation: [
          { quality: "auto" },
          { fetch_format: "auto" }
        ],
      },
      (error, result) => {
        if (error) {
          console.error("Cloudinary upload failed:", error.message || error)
          reject(new Error(error.message || "Failed to upload file to Cloudinary"))
        } else if (!result) {
          reject(new Error("Empty response received from Cloudinary"))
        } else {
          resolve(result)
        }
      }
    )

    uploadStream.end(fileBuffer)
  })
}

export async function deleteFromCloudinary(publicId: string): Promise<boolean> {
  const cld = getCloudinary()
  if (!cld) {
    throw new Error("Cloudinary credentials are not configured on the server")
  }

  try {
    const result = await cld.uploader.destroy(publicId)
    return result.result === "ok"
  } catch (error) {
    console.error("Cloudinary deletion failed:", error instanceof Error ? error.message : "Unknown error")
    return false
  }
}

export function getOptimizedImageUrl(
  publicIdOrUrl: string,
  transformations: {
    width?: number
    height?: number
    crop?: string
    quality?: string | number
    format?: string
  } = {}
): string {
  const cld = getCloudinary()
  if (!cld) {
    return publicIdOrUrl
  }

  try {
    // If it's already a full cloudinary url, return or transform
    return cld.url(publicIdOrUrl, {
      secure: true,
      quality: transformations.quality || "auto",
      fetch_format: transformations.format || "auto",
      width: transformations.width,
      height: transformations.height,
      crop: transformations.crop || "limit",
    })
  } catch (e) {
    return publicIdOrUrl
  }
}
