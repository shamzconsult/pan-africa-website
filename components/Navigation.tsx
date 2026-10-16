'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Heart, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Programs',
      href: '/programs',
      submenu: [
        { label: 'Climate Resilience', href: '/programs#climate' },
        { label: 'Urban Sustainability', href: '/programs#urban' },
        { label: 'Human Mobility', href: '/programs#mobility' },
        { label: 'Smart Cities', href: '/programs#smart' },
      ],
    },
    { label: 'Projects', href: '/projects' },
    { label: 'Research', href: '/research' },
    { label: 'Partnerships', href: '/partnerships' },
    { label: 'Media', href: '/media' },
    { label: 'Support Us', href: '/get-involved' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Official Company Logo */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group py-2"
            title="PanAfrican Centre for Climate Change, Cities, Mobility and Sustainability"
          >
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/images/logo/emblem.png"
                alt="PanAfrican Centre Official Emblem"
                width={64}
                height={64}
                className="w-16 h-16 object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors leading-none">
                  PanAfrican
                </span>
              </div>
              <span className="text-[10.5px] font-semibold text-muted-foreground tracking-tight leading-tight hidden sm:block mt-1 max-w-[280px]">
                Centre for Climate Change, Cities, Mobility & Sustainability
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/15 transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />}
                </Link>

                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-52 bg-card border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/15 transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <Link href="/get-involved">
              <Button variant="outline" size="sm" className="gap-1.5">
                <span>Support Us</span>
              </Button>
            </Link> */}
            <Link href="/contact">
              <Button size="sm" className="gap-1.5 shadow-sm">
                <span>Partner with Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/15 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navLinks.map((item) => (
              <div key={item.label} className="border-b border-border/40 last:border-none">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => setDropdownOpen(dropdownOpen === item.label ? null : item.label)}
                      className="w-full text-left py-2.5 text-sm font-semibold text-foreground flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                          dropdownOpen === item.label ? 'rotate-180 text-primary' : ''
                        }`}
                      />
                    </button>
                    {dropdownOpen === item.label && (
                      <div className="pl-4 pb-2 space-y-1 bg-secondary/5 rounded-lg mb-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 bg-secondary/10 border-t border-border flex flex-col gap-2">
            <Link href="/get-involved" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full bg-background justify-center gap-2">
                <Heart className="w-4 h-4 text-accent" />
                Support Our Mission
              </Button>
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full justify-center">Contact & Partner</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
