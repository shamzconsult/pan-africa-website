import React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1a5336",
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://paccms.org"),
  title: "PanAfrican Centre for Climate Change, Cities, Mobility & Sustainability | PACCMS",
  description:
    "PanAfrican Centre for Climate Change, Cities, Mobility and Sustainability (PACCMS). Shaping knowledge, inspiring sustainable action. Catalyzing transformative climate resilience, smart urban systems, and dignified human mobility across Africa.",
  keywords: [
    "PACCMS",
    "PanAfrican Centre",
    "Climate Change Africa",
    "Urban Sustainability",
    "Human Mobility",
    "Climate Migration",
    "Smart Cities Africa",
    "Renewable Energy",
    "Dr. Jimoh Musa Yusuf",
  ],
  authors: [{ name: "PanAfrican Centre for Climate Change, Cities, Mobility and Sustainability" }],
  icons: {
    icon: [
      {
        url: "/images/logo/emblem.png",
      },
      {
        url: "/images/logo/image1.png",
      },
    ],
    apple: "/images/logo/emblem.png",
  },
  openGraph: {
    title: "PanAfrican Centre for Climate Change, Cities, Mobility and Sustainability",
    description: "Shaping knowledge, inspiring sustainable action across African cities and communities.",
    url: "https://paccms.org",
    siteName: "PACCMS",
    images: [
      {
        url: "/images/logo/panafrican-logo-full.png",
        width: 1200,
        height: 630,
        alt: "PanAfrican Centre Official Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        {children}
        <Toaster richColors position="top-right" closeButton />
        <Analytics />
      </body>
    </html>
  )
}
