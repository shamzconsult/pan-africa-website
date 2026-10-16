'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  Loader2,
  Copy,
  ExternalLink,
  FolderOpen,
  Filter,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

interface MediaAsset {
  id?: number
  public_id: string
  url: string
  secure_url: string
  format?: string
  width?: number
  height?: number
  bytes?: number
  category?: string
  title?: string
  folder?: string
}

export default function CloudinaryMediaManager() {
  const [assets, setAssets] = useState<MediaAsset[]>([])
  const [selectedFolder, setSelectedFolder] = useState<string>('all')
  const [isUploading, setIsUploading] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Default seed assets from official company profile
  const defaultAssets: MediaAsset[] = [
    {
      public_id: 'paccms/logo/emblem',
      url: '/images/logo/emblem.png',
      secure_url: '/images/logo/emblem.png',
      format: 'png',
      width: 359,
      height: 370,
      bytes: 77332,
      category: 'branding',
      folder: 'paccms/branding',
      title: 'Official PanAfrican Centre Emblem',
    },
    {
      public_id: 'paccms/logo/wordmark',
      url: '/images/logo/wordmark.png',
      secure_url: '/images/logo/wordmark.png',
      format: 'png',
      width: 903,
      height: 384,
      bytes: 111088,
      category: 'branding',
      folder: 'paccms/branding',
      title: 'Official PACCMS Wordmark & Motto',
    },
    {
      public_id: 'paccms/newsletter/smart-cities-graphic',
      url: '/images/pdf_assets/Im26.jpg',
      secure_url: '/images/pdf_assets/Im26.jpg',
      format: 'jpg',
      width: 1241,
      height: 602,
      bytes: 51519,
      category: 'newsletter',
      folder: 'paccms/newsletter',
      title: 'Smart Cities & Clean Mobility Campaign Banner',
    },
    {
      public_id: 'paccms/team/founder-dr-jimoh-musa-yusuf',
      url: '/images/team/founder-dr-jimoh-musa-yusuf.png',
      secure_url: '/images/team/founder-dr-jimoh-musa-yusuf.png',
      format: 'png',
      width: 853,
      height: 1280,
      bytes: 466787,
      category: 'press',
      folder: 'paccms/press',
      title: 'Founder Dr. Jimoh Musa Yusuf Official Portrait',
    },
  ]

  // Fetch persisted assets from Neon DB
  useEffect(() => {
    async function loadAssets() {
      try {
        const res = await fetch('/api/media')
        if (res.ok) {
          const data = await res.json()
          if (data.assets && data.assets.length > 0) {
            setAssets([...data.assets, ...defaultAssets])
          } else {
            setAssets(defaultAssets)
          }
        } else {
          setAssets(defaultAssets)
        }
      } catch (e) {
        setAssets(defaultAssets)
      } finally {
        setIsLoading(false)
      }
    }
    loadAssets()
  }, [])

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Client-side validations
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'application/pdf']
    if (!allowedTypes.includes(file.type)) {
      toast.error('Only image files (JPG, PNG, WEBP, SVG) and PDFs are supported.')
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error('File size exceeds the 10MB limit.')
      return
    }

    setIsUploading(true)
    const toastId = toast.loading('Uploading asset to Cloudinary & saving to Neon database...')

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('folder', selectedFolder === 'all' ? 'paccms/newsletter' : selectedFolder)
      formData.append('category', selectedFolder === 'all' ? 'newsletter' : selectedFolder.replace('paccms/', ''))
      formData.append('title', file.name.replace(/\.[^/.]+$/, ''))

      const res = await fetch('/api/media/upload', {
        method: 'POST',
        body: formData,
      })

      const result = await res.json()

      if (!res.ok) {
        toast.error(result.error || 'Failed to upload media to Cloudinary.', { id: toastId })
        return
      }

      toast.success('Asset uploaded to Cloudinary & saved to Neon database!', { id: toastId })

      // Prepend newly uploaded asset
      setAssets((prev) => [result.asset, ...prev])
      e.target.value = ''
    } catch (err) {
      toast.error('Network error during asset upload. Check your connection.', { id: toastId })
    } finally {
      setIsUploading(false)
    }
  }

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url)
    toast.success('Asset URL copied to clipboard!')
  }

  const filteredAssets = selectedFolder === 'all'
    ? assets
    : assets.filter((a) => a.folder === selectedFolder || a.category === selectedFolder)

  return (
    <div className="space-y-8">
      {/* Upload Controls & Folder Filter */}
      <Card className="p-6 border-border shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <FolderOpen className="w-5 h-5 text-primary" />
              Cloudinary Media Storage & Delivery
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Securely stored in Cloudinary, cataloged in Neon PostgreSQL with automated optimization (f_auto, q_auto).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* Folder Filter */}
            <div className="flex items-center gap-1.5 bg-secondary/10 px-3 py-1.5 rounded-lg border border-border text-xs">
              <Filter className="w-3.5 h-3.5 text-muted-foreground" />
              <select
                value={selectedFolder}
                onChange={(e) => setSelectedFolder(e.target.value)}
                className="bg-transparent text-foreground focus:outline-none font-medium cursor-pointer"
              >
                <option value="all">All Folders</option>
                <option value="paccms/newsletter">paccms/newsletter</option>
                <option value="paccms/branding">paccms/branding</option>
                <option value="paccms/press">paccms/press</option>
                <option value="paccms/projects">paccms/projects</option>
              </select>
            </div>

            {/* Upload Button */}
            <label className="relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs transition-colors cursor-pointer disabled:opacity-50 shadow-xs">
              {isUploading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Uploading...</span>
                </>
              ) : (
                <>
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Asset</span>
                </>
              )}
              <input
                type="file"
                onChange={handleFileUpload}
                disabled={isUploading}
                accept="image/*,application/pdf"
                className="sr-only"
              />
            </label>
          </div>
        </div>
      </Card>

      {/* Media Assets Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center p-12 text-muted-foreground">
          <Loader2 className="w-6 h-6 animate-spin mr-2" />
          <span>Loading media catalog...</span>
        </div>
      ) : filteredAssets.length === 0 ? (
        <Card className="p-12 text-center text-muted-foreground">
          <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p className="text-sm">No media assets in this folder.</p>
        </Card>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAssets.map((asset, index) => (
            <Card
              key={asset.public_id + index}
              className="overflow-hidden border-border hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-muted/60 overflow-hidden flex items-center justify-center p-2">
                <Image
                  src={asset.secure_url || asset.url}
                  alt={asset.title || 'Media asset'}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[10px] text-white uppercase font-bold">
                  {asset.format || 'img'}
                </span>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <h4 className="font-semibold text-sm text-foreground line-clamp-1" title={asset.title}>
                    {asset.title || asset.public_id}
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5 truncate" title={asset.folder}>
                    {asset.folder || 'paccms/media'}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-muted-foreground border-t border-border pt-2">
                  <span>
                    {asset.width && asset.height ? `${asset.width}×${asset.height}` : 'Responsive'}
                  </span>
                  <span>
                    {asset.bytes ? `${Math.round(asset.bytes / 1024)} KB` : 'Optimized'}
                  </span>
                </div>

                <div className="flex gap-2 pt-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyUrl(asset.secure_url || asset.url)}
                    className="flex-1 text-xs gap-1 h-8"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copy URL</span>
                  </Button>
                  <a
                    href={asset.secure_url || asset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-border hover:bg-secondary/15 text-muted-foreground hover:text-foreground transition-colors"
                    title="View Full Asset"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
