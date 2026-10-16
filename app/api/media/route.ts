import { NextRequest, NextResponse } from "next/server"
import { getMediaAssets } from "@/lib/db"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const folder = searchParams.get("folder") || undefined
    const limit = Number(searchParams.get("limit")) || 30

    const assets = await getMediaAssets(folder, limit)

    return NextResponse.json({ success: true, assets })
  } catch (error) {
    console.error("Fetch media assets error:", error instanceof Error ? error.message : "Error")
    return NextResponse.json(
      { error: "Failed to fetch media assets" },
      { status: 500 }
    )
  }
}
