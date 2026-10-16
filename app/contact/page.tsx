'use client'

import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  Building,
  Globe,
  Instagram,
  Linkedin,
} from 'lucide-react'
import { toast } from 'sonner'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    message: '',
    bot_field: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 1. Client-side validation
    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedMessage = formData.message.trim()

    if (!trimmedName) {
      toast.error('Please provide your name.')
      return
    }

    if (!trimmedEmail) {
      toast.error('Please provide your email address.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      toast.error('Please provide a valid email address.')
      return
    }

    if (!trimmedMessage) {
      toast.error('Please enter your message.')
      return
    }

    setIsSubmitting(true)
    const toastId = toast.loading('Sending your message...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: formData.phone.trim() || undefined,
          address: formData.address.trim() || undefined,
          website: formData.website.trim() || undefined,
          message: trimmedMessage,
          bot_field: formData.bot_field,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        toast.error(
          data.error || 'We could not send your message. Please try again.',
          { id: toastId }
        )
        return
      }

      toast.success('Your enquiry has been sent successfully.', {
        id: toastId,
      })

      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        website: '',
        message: '',
        bot_field: '',
      })
    } catch (err) {
      toast.error('We could not send your message. Please try again.', {
        id: toastId,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const officeLocations = [
    {
      title: 'Head Office',
      location: 'Abuja, Nigeria',
      address:
        'Major Oil Complex, Mbora Service, Plot 1524, Cadastral Zone, Co6, Jabi Airport Road, Abuja.',
      phone: '+234 (0) 8065273880',
      email: 'panafricccms@gmail.com',
      badge: 'Headquarters',
    },
    {
      title: 'Branch Office',
      location: 'Ilorin, Kwara State',
      address:
        'Flat C44, Ministerial Housing Estate, Arafat Road, off Tunde Idiagbon Road, Tanke, Ilorin, Kwara State, Nigeria.',
      phone: '+234 (0) 8065273880',
      email: 'eemayusuf@gmail.com',
      badge: 'Regional Operations',
    },
  ]

  const contactOptions = [
    {
      icon: Mail,
      title: 'Official Emails',
      value: 'panafricccms@gmail.com',
      secondary: 'eemayusuf@gmail.com',
      description: 'Enquiries, partnerships, and program collaboration',
      link: 'mailto:panafricccms@gmail.com',
    },
    {
      icon: Phone,
      title: 'Telephone & WhatsApp',
      value: '+234 (0) 8065273880',
      description: 'Available Monday to Friday (8am - 5pm WAT)',
      link: 'tel:+2348065273880',
    },
    {
      icon: MapPin,
      title: 'Location Headquarters',
      value: 'Jabi Airport Road, Abuja',
      description: 'Mbora Service, Plot 1524, Cadastral Zone',
      link: '#locations',
    },
    {
      icon: Clock,
      title: 'Official Response Time',
      value: 'Within 24 to 48 Hours',
      description: 'Prompt review by our resilience team',
      link: '#contact-form',
    },
  ]

  return (
    <main className="w-full">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 md:py-24 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <span>Direct Enquiries & Partnerships</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Reach out to our leadership, program directors, and research team to discuss
            collaborations, donor linkages, consultancy, or urban climate resilience projects.
          </p>
        </div>
      </section>

      {/* Contact Quick Options */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-md hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-1">{option.title}</h3>
                  <a
                    href={option.link}
                    className="text-primary hover:underline font-semibold text-sm block mb-1 break-words"
                  >
                    {option.value}
                  </a>
                  {option.secondary && (
                    <a
                      href={`mailto:${option.secondary}`}
                      className="text-muted-foreground hover:text-primary text-xs block mb-2"
                    >
                      {option.secondary}
                    </a>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-2 border-t border-border pt-3">
                  {option.description}
                </p>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Contact Form & Office Locations */}
      <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 shadow-sm border border-border">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Send an Official Enquiry
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  All fields marked with an asterisk (<span className="text-destructive">*</span>) are required.
                </p>
              </div>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Your enquiry has been sent successfully.
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Thank you for reaching out to PACCMS. A member of our team will review your message and reply promptly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot field for bot spam prevention */}
                <input
                  type="text"
                  name="bot_field"
                  value={formData.bot_field}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name field (required) */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-foreground mb-1.5"
                    >
                      Your Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Dr. John Doe / Organization Name"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email field (required) */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-foreground mb-1.5"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.org"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Phone field (optional) */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-semibold text-foreground mb-1.5"
                    >
                      Phone Number <span className="text-xs text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 ..."
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Website field (optional) */}
                  <div>
                    <label
                      htmlFor="contact-website"
                      className="block text-sm font-semibold text-foreground mb-1.5"
                    >
                      Website <span className="text-xs text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <input
                      id="contact-website"
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://..."
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Address field (optional) */}
                <div>
                  <label
                    htmlFor="contact-address"
                    className="block text-sm font-semibold text-foreground mb-1.5"
                  >
                    Mailing Address / Organization Location{' '}
                    <span className="text-xs text-muted-foreground font-normal">(Optional)</span>
                  </label>
                  <input
                    id="contact-address"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="City, State, Country"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Message field (required) */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-foreground mb-1.5"
                  >
                    Your Message / Project Enquiry <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your enquiry, program collaboration, or request for information..."
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y transition-all"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-base font-semibold flex items-center justify-center gap-2 shadow-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending your message…</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Office Details & Verified Address Cards */}
          <div id="locations" className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Official Offices
            </h2>

            {officeLocations.map((office, index) => (
              <Card
                key={index}
                className="p-6 border-l-4 border-l-primary hover:shadow-md transition-shadow space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{office.title}</h3>
                    <p className="text-xs font-semibold text-accent">{office.location}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-primary/10 text-primary">
                    {office.badge}
                  </span>
                </div>

                <div className="space-y-2.5 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {office.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-primary hover:underline text-xs font-medium"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-primary hover:underline text-xs font-medium"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </Card>
            ))}

            {/* Social & Official Links */}
            <Card className="p-6 bg-secondary/10 border-border">
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-3">
                Official Channels
              </h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-primary" />
                  <a
                    href="https://instagram.com/panafricancentre4climate_ccms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-medium text-foreground"
                  >
                    @panafricancentre4climate_ccms
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">
                    PanAfrican Centre for Climate Change, Cities, Mobility and Sustainability
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-accent/5 border-border">
              <div className="flex items-start gap-3">
                <Building className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground text-sm">Formal Incorporation</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Official registration and incorporation as an NGO championing climate resilience,
                    sustainable cities, and equitable development across the African continent.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
