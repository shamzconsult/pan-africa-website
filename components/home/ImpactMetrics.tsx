'use client'

import { useEffect, useRef, useState } from 'react'

interface Metric {
  value: number
  suffix: string
  label: string
  icon?: string
}

export default function ImpactMetrics() {
  const [counts, setCounts] = useState({ value1: 0, value2: 0, value3: 0, value4: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  const metrics: Metric[] = [
    { value: 50, suffix: '+', label: 'Communities Engaged' },
    { value: 15, suffix: '+', label: 'Years of Experience' },
    { value: 10000, suffix: '+', label: 'People Trained' },
    { value: 25, suffix: '+', label: 'Partner Organizations' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setCounts({
        value1: Math.floor(metrics[0].value * progress),
        value2: Math.floor(metrics[1].value * progress),
        value3: Math.floor(metrics[2].value * progress),
        value4: Math.floor(metrics[3].value * progress),
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted])

  const displayValues = [counts.value1, counts.value2, counts.value3, counts.value4]

  return (
    <section ref={sectionRef} className="py-16 px-4 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact by the Numbers</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Measurable progress towards climate resilience and sustainable urban development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <div className="text-5xl md:text-6xl font-bold">{displayValues[index]}</div>
                <div className="text-2xl font-semibold">{metric.suffix}</div>
              </div>
              <p className="text-primary-foreground/90 font-medium">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-primary-foreground/20">
          <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto">
            Since our formal incorporation in 2025, we have been scaling innovative solutions and engaging stakeholders across Africa. Our vision is to reach 100,000 community members by 2030 and influence global policies on climate resilience.
          </p>
        </div>
      </div>
    </section>
  )
}
