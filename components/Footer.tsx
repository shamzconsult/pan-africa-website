import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Instagram, FileDown, ShieldCheck } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Organization Info & Official Logo */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 flex-shrink-0 bg-white/10 rounded-xl p-1 backdrop-blur-xs">
                  <Image
                    src="/images/logo/emblem.png"
                    alt="PanAfrican Centre Emblem"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                    PanAfrican
                  </h3>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-primary-foreground/70 font-semibold">
                    Centre for Climate Change & Cities
                  </p>
                </div>
              </div>
            </Link>

            <p className="text-primary-foreground/80 text-sm italic font-serif">
              "...shaping knowledge, inspiring sustainable action."
            </p>

            <p className="text-primary-foreground/75 text-sm leading-relaxed">
              Catalyzing transformative action in climate resilience, inclusive urban systems, and dignified human mobility across Africa.
            </p>

            {/* Download Profile Button */}
            <div className="pt-1">
              <a
                href="/Pan-African-Centre-Profile.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/30 text-sm text-white transition-colors"
              >
                <FileDown className="w-4 h-4 text-accent" />
                <span>Download Profile PDF</span>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-base tracking-wide border-b border-primary-foreground/20 pb-2">
              Our Locations
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <div>
                  <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                    Head Office:
                  </strong>
                  <span className="text-primary-foreground/80 text-xs leading-relaxed">
                    Major Oil Complex, Mbora Service, Plot 1524, Cadastral Zone, Co6, Jabi Airport Road, Abuja, Nigeria.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 mt-1 text-accent/80 flex-shrink-0" />
                <div>
                  <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                    Branch Office:
                  </strong>
                  <span className="text-primary-foreground/80 text-xs leading-relaxed">
                    Flat C44, Ministerial Housing Estate, Arafat Road, off Tunde Idiagbon Road, Tanke, Ilorin, Kwara State.
                  </span>
                </div>
              </div>

              <div className="pt-1 space-y-2">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <a
                    href="tel:+2348065273880"
                    className="text-primary-foreground/80 hover:text-white transition-colors text-sm"
                  >
                    +234 (0) 8065273880
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <a
                    href="mailto:panafricccms@gmail.com"
                    className="text-primary-foreground/80 hover:text-white transition-colors text-sm truncate"
                  >
                    panafricccms@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-base tracking-wide border-b border-primary-foreground/20 pb-2">
              Quick Links
            </h4>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <Link
                href="/"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/programs"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                Programs
              </Link>
              <Link
                href="/projects"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/research"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                Research
              </Link>
              <Link
                href="/media"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                Media
              </Link>
              <Link
                href="/partnerships"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                Partnerships
              </Link>
              <Link
                href="/contact"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Functional Newsletter & Connect */}
          <div className="space-y-6">
            <h4 className="font-bold text-white text-base tracking-wide border-b border-primary-foreground/20 pb-2">
              Stay Connected
            </h4>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Subscribe to receive verified reports, project announcements, and policy briefings directly from our team.
            </p>

            {/* Newsletter Subscription Component */}
            <NewsletterForm variant="footer" showConsent />

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-primary-foreground/60 font-semibold block">
                Official Channels
              </span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/panafrican-centre"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PanAfrican Centre LinkedIn"
                  className="w-11 h-11 bg-primary-foreground/10 hover:bg-primary/40 rounded-xl flex items-center justify-center text-primary-foreground hover:text-white transition-all border border-primary-foreground/15"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/panafricancentre4climate_ccms"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PanAfrican Centre Instagram"
                  className="w-11 h-11 bg-primary-foreground/10 hover:bg-primary/40 rounded-xl flex items-center justify-center text-primary-foreground hover:text-white transition-all border border-primary-foreground/15"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="mailto:panafricccms@gmail.com"
                  aria-label="Email PanAfrican Centre"
                  className="w-11 h-11 bg-primary-foreground/10 hover:bg-primary/40 rounded-xl flex items-center justify-center text-primary-foreground hover:text-white transition-all border border-primary-foreground/15"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <p>
              &copy; {currentYear} PanAfrican Centre for Climate Change, Cities, Mobility and Sustainability. Incorporated NGO.
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Governance
            </Link>
            <Link href="/media" className="hover:text-white transition-colors">
              Media Kit
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
