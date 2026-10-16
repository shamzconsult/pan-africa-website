'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const slides = [
    {
      title: 'Building Climate-Smart African Cities',
      subtitle: 'Innovative solutions for climate resilience and sustainable urban development',
      cta: 'Explore Our Impact',
      href: '/projects',
      image: '/hero-climate-city.jpg',
    },
    {
      title: 'Sustainable Mobility for All',
      subtitle: 'Creating equitable human mobility systems while addressing climate-induced migration',
      cta: 'Learn About Programs',
      href: '/programs#mobility',
      image: '/hero-mobility.jpg',
    },
    {
      title: 'Building Resilience & Community',
      subtitle: 'Empowering African communities to thrive in a sustainable, climate-adapted future',
      cta: 'Discover Solutions',
      href: '/programs#climate',
      image: '/hero-resilience.jpg',
    },
  ]

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay, slides.length])

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
  }

  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${index === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          {/* Multi-layer overlay for dramatic effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
          
          {/* Content overlay */}
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in duration-1000 delay-300">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg leading-tight">
                  {slide.title}
                </h1>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
              </div>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
                {slide.subtitle}
              </p>
              <div className="flex gap-4 justify-center pt-6">
                <Link href={slide.href}>
                  <Button 
                    size="lg" 
                    className="group bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 bg-black/40 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoPlay(false)
            }}
            className={`transition-all duration-300 rounded-full ${
              index === current ? 'bg-primary w-8 h-3' : 'bg-white/40 hover:bg-white/60 w-3 h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Resume autoplay on hover end */}
      <div
        className="absolute inset-0"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      />
    </div>
  )
}
