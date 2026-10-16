'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function PartnerCarousel() {
  const [rotation, setRotation] = useState(0)

  const partners = [
    { name: 'World Bank', type: 'Multilateral Development' },
    { name: 'Green Climate Fund', type: 'Climate Finance' },
    { name: 'UN Agencies', type: 'International Organization' },
    { name: 'IOM', type: 'Migration Support' },
    { name: 'Academic Institutions', type: 'Research & Innovation' },
    { name: 'Tech Partners', type: 'Digital Solutions' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev - 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Partners</h2>
          <p className="text-lg text-muted-foreground">
            Collaborating with leading organizations to drive climate action and sustainable development
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Carousel visualization */}
          <div className="relative w-72 h-72 hidden md:block">
            <div className="absolute inset-0 rounded-full border-2 border-border" />
            <div className="absolute inset-8 rounded-full border-2 border-primary/20" />
            <div className="absolute inset-16 rounded-full border-2 border-accent/20" />

            {/* Partner items in circle */}
            {partners.map((partner, index) => {
              const angle = (index / partners.length) * 360
              const x = Math.cos((angle * Math.PI) / 180) * 120
              const y = Math.sin((angle * Math.PI) / 180) * 120

              return (
                <div
                  key={index}
                  className="absolute w-24 h-24 flex items-center justify-center bg-card border border-border rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div className="text-center text-xs font-semibold px-2">
                    <p className="text-foreground mb-1">{partner.name}</p>
                    <p className="text-muted-foreground text-xs">{partner.type}</p>
                  </div>
                </div>
              )
            })}

            {/* Center node with official emblem */}
            <div className="absolute inset-1/2 w-14 h-14 -ml-7 -mt-7 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary/40 p-1">
              <Image
                src="/images/logo/emblem.png"
                alt="PACCMS"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>

          {/* Grid view for mobile */}
          <div className="md:hidden grid grid-cols-2 gap-4 w-full">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow text-center"
              >
                <p className="font-semibold text-foreground text-sm mb-1">{partner.name}</p>
                <p className="text-muted-foreground text-xs">{partner.type}</p>
              </div>
            ))}
          </div>

          {/* Partner stats */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Building Global Partnerships</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We collaborate with governments, international development agencies, academic institutions, and private sector
                organizations to amplify our impact and scale innovative solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-sm text-muted-foreground">Partner Organizations</p>
              </div>
              <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                <p className="text-3xl font-bold text-accent">6</p>
                <p className="text-sm text-muted-foreground">Focus Sectors</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-3xl font-bold text-primary">$M</p>
                <p className="text-sm text-muted-foreground">Funding Mobilized</p>
              </div>
              <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                <p className="text-3xl font-bold text-accent">15+</p>
                <p className="text-sm text-muted-foreground">Countries Reached</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
