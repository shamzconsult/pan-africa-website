'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Video, ImageIcon, Download, Sparkles } from 'lucide-react'
import CloudinaryMediaManager from '@/components/media/CloudinaryMediaManager'
import NewsletterForm from '@/components/NewsletterForm'

export default function Media() {
  const news = [
    {
      title: 'Pan African Center for Climate Change Formally Launches Continental Climate Resilience Agenda',
      date: '2025',
      category: 'Official Launch',
      summary:
        'Culminating 15 years in the making, the PanAfrican Centre for Climate Change, Cities, Mobility and Sustainability announces its formal incorporation.',
    },
    {
      title: 'Initiative for Urban Climate Data Observatory Announced',
      date: '2025',
      category: 'Flagship Project',
      summary:
        'Targeting 2027 completion, the observatory will collect and analyze critical data on urban climate vulnerabilities and human mobility trends across African metros.',
    },
    {
      title: 'Community Engagement Program Targets 10,000 Trained by 2030',
      date: '2025',
      category: 'Capacity Building',
      summary:
        'Grassroots training workshops in participatory urban planning, green infrastructure, and climate migration adaptation to expand across regional centers.',
    },
  ]

  const pressResources = [
    {
      title: 'Official PanAfrican Centre Profile Document (Full)',
      type: 'PDF',
      size: '9.8 MB',
      icon: FileText,
      link: '/Pan-African-Centre-Profile.pdf',
      downloadName: 'PanAfrican-Centre-Profile.pdf',
    },
    {
      title: 'Official Brand Emblem (High-Resolution)',
      type: 'PNG',
      size: '77 KB',
      icon: ImageIcon,
      link: '/images/logo/emblem.png',
      downloadName: 'PACCMS-Official-Emblem.png',
    },
    {
      title: 'Official Horizontal Logo & Tagline',
      type: 'PNG',
      size: '111 KB',
      icon: ImageIcon,
      link: '/images/logo/wordmark.png',
      downloadName: 'PACCMS-Logo-Tagline.png',
    },
    {
      title: 'Founder Dr. Jimoh Musa Yusuf Portrait',
      type: 'PNG',
      size: '466 KB',
      icon: ImageIcon,
      link: '/images/team/founder-dr-jimoh-musa-yusuf.png',
      downloadName: 'Dr-Jimoh-Musa-Yusuf-Founder.png',
    },
  ]

  return (
    <main className="w-full">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center py-16 px-4 md:py-24 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('/hero-mobility.jpg')",
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-xs font-semibold uppercase tracking-wider">
            <span>Press, Multimedia & Communications</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Media & Asset Center
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-2xl mx-auto">
            Official announcements, brand media assets, Cloudinary-powered media storage, and press downloads from PACCMS.
          </p>
        </div>
      </section>

      {/* Cloudinary Media Storage & Delivery Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Cloud Storage & Content Delivery
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Cloudinary Media Hub
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mt-1">
            Browse and manage newsletter campaign banners, press photographs, and project media.
            Files are served through Cloudinary's dynamic CDN and cataloged in the Neon PostgreSQL database.
          </p>
        </div>

        <CloudinaryMediaManager />
      </section>

      {/* Official Press Kit & Downloads */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-secondary/5 rounded-3xl my-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Official Press Kit & Brand Assets
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            Download our authentic organization profile, official logos, and leadership portraits.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pressResources.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="p-6 border-border hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-foreground mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    {item.type} • {item.size}
                  </p>
                </div>

                <a
                  href={item.link}
                  download={item.downloadName}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            News & Statements
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            Official announcements regarding programs, partnerships, and publications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {news.map((item, index) => (
            <Card key={index} className="p-6 border-border hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-primary px-2 py-0.5 rounded bg-primary/10">
                    {item.category}
                  </span>
                  <span className="text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription Card */}
        <div className="max-w-3xl mx-auto">
          <NewsletterForm variant="card" showConsent />
        </div>
      </section>

      <Footer />
    </main>
  )
}
