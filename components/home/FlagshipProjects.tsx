'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function FlagshipProjects() {
  const [current, setCurrent] = useState(0)

  const projects = [
    {
      title: 'Urban Climate Resilience Pilots',
      description: 'Implementing nature-based solutions and green infrastructure in vulnerable urban neighborhoods across Africa',
      focus: 'Infrastructure • Community',
      status: 'Active',
    },
    {
      title: 'Climate Migration Support Network',
      description: 'Providing comprehensive resources and legal, social, and economic support to climate-displaced populations',
      focus: 'Human Rights • Support',
      status: 'Active',
    },
    {
      title: 'Sustainable City Innovation Hubs',
      description: 'Facilitating technology and knowledge exchange for clean energy, water management, and sustainable transport',
      focus: 'Innovation • Technology',
      status: 'Active',
    },
    {
      title: 'Participatory Urban Planning Workshops',
      description: 'Engaging communities in climate-smart decision-making processes for inclusive urban development',
      focus: 'Engagement • Planning',
      status: 'Ongoing',
    },
    {
      title: 'Climate Policy Impact Dialogues',
      description: 'Multi-stakeholder forums shaping local, national, and global climate and migration policies',
      focus: 'Policy • Advocacy',
      status: 'Active',
    },
    {
      title: 'Urban Climate Data Observatory',
      description: 'Collecting and analyzing data on urban climate risks and human mobility trends for evidence-based decisions',
      focus: 'Data • Analytics',
      status: 'Development',
    },
  ]

  const next = () => {
    setCurrent((prev) => (prev + 1) % projects.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const getVisibleProjects = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(current + i) % projects.length])
    }
    return visible
  }

  return (
    <section className="py-20 px-4 md:py-32 bg-gradient-to-b from-muted/20 via-background to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full border border-accent/30">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Flagship Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transformative initiatives driving climate action and sustainable development across Africa
          </p>
        </div>

        <div className="relative">
          {/* Desktop carousel */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {getVisibleProjects().map((project, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <Card className="relative p-8 flex flex-col h-full hover:shadow-2xl hover:border-primary/50 transition-all duration-300 bg-card/80 backdrop-blur-sm border border-border/50">
                  <div className="mb-6 flex items-start justify-between">
                    <span className="inline-block px-3 py-1 bg-primary/15 text-primary text-xs font-bold rounded-full uppercase tracking-wide">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-border/50">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">{project.focus}</span>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="lg:hidden">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg opacity-20 blur-sm" />
              <Card className="relative p-8 mb-6 bg-card/80 backdrop-blur-sm border border-border/50">
                <div className="mb-6 flex items-start justify-between">
                  <span className="inline-block px-3 py-1 bg-primary/15 text-primary text-xs font-bold rounded-full uppercase tracking-wide">
                    {projects[current].status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{projects[current].title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {projects[current].description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-border/50">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wide">{projects[current].focus}</span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {current + 1} / {projects.length}
                  </span>
                </div>
              </Card>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-between mt-12">
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-3 rounded-lg border border-border hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-lg border border-border hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === current ? 'bg-primary w-8 h-3' : 'bg-border hover:bg-primary/60 w-3 h-3'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <Link href="/projects">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
