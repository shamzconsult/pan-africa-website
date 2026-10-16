import { neon, NeonQueryFunction } from "@neondatabase/serverless"

// Helper to determine if Neon database is configured
export function isDatabaseConfigured(): boolean {
  return !!process.env.DATABASE_URL && process.env.DATABASE_URL.trim() !== ""
}

// Get Neon SQL client safely
function getSqlClient(): NeonQueryFunction<false, false> | null {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl || databaseUrl.trim() === "") {
    return null
  }
  try {
    return neon(databaseUrl)
  } catch (err) {
    console.error("Failed to initialize Neon database client:", err instanceof Error ? err.message : "Unknown error")
    return null
  }
}

// Initialize tables if they do not exist
let schemaInitialized = false

export async function initDatabaseSchema(): Promise<boolean> {
  if (schemaInitialized) return true

  const sql = getSqlClient()
  if (!sql) {
    return false
  }

  try {
    // 1. Contact Enquiries Table
    await sql`
      CREATE TABLE IF NOT EXISTS contact_enquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100),
        address TEXT,
        website VARCHAR(255),
        message TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'received',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `

    await sql`
      CREATE INDEX IF NOT EXISTS idx_contact_enquiries_email 
      ON contact_enquiries(email);
    `
    await sql`
      CREATE INDEX IF NOT EXISTS idx_contact_enquiries_created 
      ON contact_enquiries(created_at);
    `

    // 2. Newsletter Subscribers Table
    await sql`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        status VARCHAR(50) DEFAULT 'subscribed',
        source VARCHAR(100) DEFAULT 'website',
        mailchimp_synced BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `

    await sql`
      CREATE UNIQUE INDEX IF NOT EXISTS idx_newsletter_subscribers_email 
      ON newsletter_subscribers(email);
    `

    // 3. Media Assets Table (for Cloudinary metadata storage)
    await sql`
      CREATE TABLE IF NOT EXISTS media_assets (
        id SERIAL PRIMARY KEY,
        public_id VARCHAR(255) NOT NULL,
        url TEXT NOT NULL,
        secure_url TEXT NOT NULL,
        format VARCHAR(50),
        resource_type VARCHAR(50) DEFAULT 'image',
        folder VARCHAR(255),
        width INTEGER,
        height INTEGER,
        bytes INTEGER,
        category VARCHAR(100) DEFAULT 'general',
        title VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `

    await sql`
      CREATE INDEX IF NOT EXISTS idx_media_assets_public_id 
      ON media_assets(public_id);
    `
    await sql`
      CREATE INDEX IF NOT EXISTS idx_media_assets_folder 
      ON media_assets(folder);
    `

    schemaInitialized = true
    return true
  } catch (error) {
    console.error("Neon schema initialization error:", error instanceof Error ? error.message : "Database error")
    return false
  }
}

export interface ContactEnquiryData {
  name: string
  email: string
  phone?: string | null
  address?: string | null
  website?: string | null
  message: string
}

export async function saveContactEnquiry(data: ContactEnquiryData) {
  const sql = getSqlClient()
  if (!sql) {
    return { success: false, reason: "Database not configured" }
  }

  try {
    await initDatabaseSchema()

    const result = await sql`
      INSERT INTO contact_enquiries (name, email, phone, address, website, message)
      VALUES (
        ${data.name.slice(0, 255)},
        ${data.email.slice(0, 255)},
        ${data.phone ? data.phone.slice(0, 100) : null},
        ${data.address || null},
        ${data.website ? data.website.slice(0, 255) : null},
        ${data.message}
      )
      RETURNING id, created_at;
    `

    return { success: true, record: result[0] }
  } catch (error) {
    console.error("Database enquiry save error:", error instanceof Error ? error.message : "Unknown error")
    return { success: false, error: "Database record could not be saved" }
  }
}

export async function saveNewsletterSubscriber(
  email: string,
  status: string = "subscribed",
  mailchimpSynced: boolean = false
) {
  const sql = getSqlClient()
  if (!sql) {
    return { success: false, reason: "Database not configured" }
  }

  try {
    await initDatabaseSchema()

    const normalizedEmail = email.trim().toLowerCase()

    const result = await sql`
      INSERT INTO newsletter_subscribers (email, status, source, mailchimp_synced, updated_at)
      VALUES (${normalizedEmail}, ${status}, 'website', ${mailchimpSynced}, CURRENT_TIMESTAMP)
      ON CONFLICT (email) 
      DO UPDATE SET 
        status = EXCLUDED.status,
        mailchimp_synced = EXCLUDED.mailchimp_synced,
        updated_at = CURRENT_TIMESTAMP
      RETURNING id, email, status, created_at;
    `

    return { success: true, record: result[0] }
  } catch (error) {
    console.error("Database newsletter save error:", error instanceof Error ? error.message : "Unknown error")
    return { success: false, error: "Database subscriber could not be saved" }
  }
}

export interface MediaAssetRecord {
  public_id: string
  url: string
  secure_url: string
  format?: string
  resource_type?: string
  folder?: string
  width?: number
  height?: number
  bytes?: number
  category?: string
  title?: string
}

export async function saveMediaAsset(asset: MediaAssetRecord) {
  const sql = getSqlClient()
  if (!sql) {
    return { success: false, reason: "Database not configured" }
  }

  try {
    await initDatabaseSchema()

    const result = await sql`
      INSERT INTO media_assets (
        public_id, url, secure_url, format, resource_type, folder, width, height, bytes, category, title
      )
      VALUES (
        ${asset.public_id},
        ${asset.url},
        ${asset.secure_url},
        ${asset.format || null},
        ${asset.resource_type || "image"},
        ${asset.folder || "paccms"},
        ${asset.width || null},
        ${asset.height || null},
        ${asset.bytes || null},
        ${asset.category || "general"},
        ${asset.title || null}
      )
      RETURNING id, public_id, secure_url, created_at;
    `

    return { success: true, record: result[0] }
  } catch (error) {
    console.error("Database media asset save error:", error instanceof Error ? error.message : "Unknown error")
    return { success: false, error: "Media record could not be saved" }
  }
}

export async function getMediaAssets(folder?: string, limit: number = 20) {
  const sql = getSqlClient()
  if (!sql) {
    return []
  }

  try {
    await initDatabaseSchema()

    if (folder) {
      return await sql`
        SELECT * FROM media_assets 
        WHERE folder = ${folder}
        ORDER BY created_at DESC 
        LIMIT ${limit};
      `
    }

    return await sql`
      SELECT * FROM media_assets 
      ORDER BY created_at DESC 
      LIMIT ${limit};
    `
  } catch (error) {
    console.error("Database media list error:", error instanceof Error ? error.message : "Unknown error")
    return []
  }
}
