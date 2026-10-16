'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Urban Climate Resilience Pilot - Lagos',
      category: 'infrastructure',
      location: 'Lagos, Nigeria',
      country: 'Nigeria',
      status: 'Active',
      date: '2024-2026',
      description:
        'Implementing nature-based solutions including mangrove restoration and green corridors in vulnerable neighborhoods to reduce urban flooding and improve air quality.',
      impact: '50,000+ residents benefiting',
      partners: ['Lagos State Government', 'Environmental NGOs'],
      image: '/images/pdf_assets/Im1.jpg',
      imageAlt: 'Urban flooding mitigation with green infrastructure in Lagos',
    },
    {
      id: 2,
      title: 'Climate Migration Support Network - Sahel',
      category: 'migration',
      location: 'Sahelian Region',
      country: 'Mali, Niger, Burkina Faso',
      status: 'Active',
      date: '2023-2027',
      description:
        'Providing legal, social, and economic support to climate-displaced populations with livelihood training and resettlement assistance.',
      impact: '5,000+ people supported',
      partners: ['IOM', 'UNHCR', 'Local Communities'],
      image: '/images/pdf_assets/Im28.jpg',
      imageAlt: 'Community support center for climate-displaced populations',
    },
    {
      id: 3,
      title: 'Sustainable City Innovation Hub - Nairobi',
      category: 'innovation',
      location: 'Nairobi, Kenya',
      country: 'Kenya',
      status: 'Active',
      date: '2024-2025',
      description:
        'Technology and knowledge exchange platform for clean energy, water management, and sustainable transport solutions for East African cities.',
      impact: '30 startups engaged',
      partners: ['Technology Companies', 'Universities'],
      image: '/images/pdf_assets/Im27.jpg',
      imageAlt: 'Innovation hub with clean energy and water management technology',
    },
    {
      id: 4,
      title: 'Participatory Urban Planning Workshop - Accra',
      category: 'engagement',
      location: 'Accra, Ghana',
      country: 'Ghana',
      status: 'Active',
      date: '2023-2026',
      description:
        'Community-led urban planning process engaging diverse stakeholders in climate-smart decision-making for sustainable neighborhood development.',
      impact: '1,000+ community members',
      partners: ['Accra Metropolitan Assembly', 'Community Groups'],
      image: '/images/pdf_assets/Im24.jpg',
      imageAlt: 'Community members participating in urban planning workshop',
    },
    {
      id: 5,
      title: 'Climate Policy Impact Dialogue',
      category: 'policy',
      location: 'Regional (Multiple Cities)',
      country: 'Pan-African',
      status: 'Ongoing',
      date: '2023-Ongoing',
      description:
        'Multi-stakeholder forums at regional and continental levels shaping climate and migration policies for Africa.',
      impact: '500+ policymakers engaged',
      partners: ['AU, Regional Organizations', 'Governments'],
      image: '/images/pdf_assets/Im25.png',
      imageAlt: 'Policy dialogue session with government officials and stakeholders',
    },
    {
      id: 6,
      title: 'Urban Climate Data Observatory',
      category: 'data',
      location: 'Pan-African',
      country: 'Multiple Countries',
      status: 'Development',
      date: '2024-2027',
      description:
        'Real-time data platform for urban climate risks, migration trends, and sustainability metrics to guide evidence-based decision-making.',
      impact: '50M+ data points',
      partners: ['Data Analytics Firms', 'Research Councils'],
      image: '/images/pdf_assets/Im26.jpg',
      imageAlt: 'Data visualization dashboard showing urban climate metrics',
    },
  ]

  return (
    <main className="w-full">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center py-16 px-4 md:py-24 min-h-[500px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/hero-resilience.jpg')",
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Transformative initiatives driving climate action and sustainable development across Africa
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8">
            Showing {projects.length} project{projects.length !== 1 ? 's' : ''}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        project.status === 'Active'
                          ? 'bg-primary/20 text-primary-foreground'
                          : project.status === 'Ongoing'
                            ? 'bg-accent/20 text-accent-foreground'
                            : 'bg-muted/20 text-muted-foreground'
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-xs text-primary-foreground/80">{project.date}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-3 mb-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg
                        className="w-4 h-4 text-accent flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16l-4-4m0 0l-4 4m4-4v1M3 10h18M3 10l2-2m-2 2l2 2"
                        />
                      </svg>
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg
                        className="w-4 h-4 text-accent flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a11.979 11.979 0 01-8.096 3.047C3.715 8.29 3.5 9.12 3.5 10c0 5.384 4.146 9.915 9.817 10.609l-.32.498A.75.75 0 0013 21h7a.75.75 0 00.667-1.05l-2-4a.75.75 0 00-1.05-.285l-.317.397A9.973 9.973 0 016 9.5c0-.561-.23-1.084-.61-1.473A9.973 9.973 0 0112 5c2.483.001 4.786.887 6.632 2.386l-.317-.397a.75.75 0 00-.285-1.05z"
                        />
                      </svg>
                      <span>{project.impact}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/contact?project=${encodeURIComponent(project.title)}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-200 shadow-sm hover:shadow"
                  >
                    Request Full Report
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Support our projects and help build climate-smart, resilient African cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold cursor-pointer w-full sm:w-auto">
                Donate to a Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent cursor-pointer w-full sm:w-auto"
              >
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
