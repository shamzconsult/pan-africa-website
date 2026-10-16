'use client'

import React, { useState } from 'react'
import { toast } from 'sonner'
import { Loader2, Mail, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NewsletterFormProps {
  variant?: 'footer' | 'card' | 'inline'
  showConsent?: boolean
  className?: string
}

export default function NewsletterForm({
  variant = 'footer',
  showConsent = false,
  className = '',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const trimmed = email.trim()
    if (!trimmed) {
      toast.error('Please enter your email address.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmed)) {
      toast.error('Please enter a valid email address.')
      return
    }

    if (showConsent && !consent) {
      toast.error('Please agree to receive communications from PACCMS.')
      return
    }

    setIsSubmitting(true)
    const toastId = toast.loading('Subscribing to newsletter...')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: trimmed, bot_field: '' }),
      })

      const data = await response.json()

      if (!response.ok) {
        toast.error(data.error || 'Subscription failed. Please try again.', {
          id: toastId,
        })
        return
      }

      if (data.alreadySubscribed) {
        toast.info(data.message || 'You are already subscribed to our newsletter.', {
          id: toastId,
        })
      } else {
        toast.success(
          data.message || 'Thank you for subscribing! Check your inbox for confirmation.',
          {
            id: toastId,
          }
        )
        setIsSuccess(true)
        setEmail('')
      }
    } catch (err) {
      toast.error('Network error. Please check your connection and try again.', {
        id: toastId,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === 'footer') {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                disabled={isSubmitting}
                required
                className="w-full px-5 py-3.5 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl text-base text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:border-transparent transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3.5 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl text-base font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending</span>
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  <span>Subscribed</span>
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
          {showConsent && (
            <label className="flex items-start gap-2 text-sm text-primary-foreground/75 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 rounded border-primary-foreground/30 text-accent focus:ring-accent"
              />
              <span>I consent to receiving climate insights and newsletters from PACCMS.</span>
            </label>
          )}
        </form>
      </div>
    )
  }

  // Card or Inline variant
  return (
    <div className={`p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Mail className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Stay Informed on Climate Action</h3>
          <p className="text-sm text-muted-foreground">
            Get quarterly policy briefs, research reports, and sustainable city project updates.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <label htmlFor="card-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="card-newsletter-email"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.org"
              disabled={isSubmitting}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 font-semibold flex items-center justify-center gap-2 h-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Subscribing...</span>
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed!</span>
              </>
            ) : (
              'Subscribe to Updates'
            )}
          </Button>
        </div>

        <label className="flex items-start gap-2.5 text-xs text-muted-foreground cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 rounded border-border text-primary focus:ring-primary"
          />
          <span>
            I agree to receive communications from PanAfrican Centre for Climate Change, Cities,
            Mobility and Sustainability. Unsubscribe at any time.
          </span>
        </label>
      </form>
    </div>
  )
}
