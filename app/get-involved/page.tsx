import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Users, Briefcase, Handshake } from 'lucide-react'

export default function GetInvolved() {
  const opportunities = [
    {
      icon: Heart,
      title: 'Donate',
      description: 'Support our programs and help fund climate adaptation projects across Africa',
      details: [
        'One-time donations',
        'Monthly giving programs',
        'Corporate sponsorships',
        'In-kind contributions',
      ],
      cta: 'Make a Donation',
    },
    {
      icon: Users,
      title: 'Volunteer',
      description: 'Contribute your skills and time to our community engagement and capacity building initiatives',
      details: [
        'Local volunteer opportunities',
        'Virtual volunteering',
        'Internship programs',
        'Professional expertise',
      ],
      cta: 'Learn About Volunteering',
    },
    {
      icon: Briefcase,
      title: 'Partner',
      description: 'Collaborate with us to amplify impact and scale innovative climate solutions',
      details: [
        'Financial partnerships',
        'Technical collaboration',
        'Implementation partnerships',
        'Research partnerships',
      ],
      cta: 'Explore Partnership',
    },
    {
      icon: Handshake,
      title: 'Advocate',
      description: 'Join our advocacy efforts to influence climate and migration policies',
      details: [
        'Policy advocacy campaigns',
        'Social media engagement',
        'Community mobilization',
        'Research collaboration',
      ],
      cta: 'Get Involved in Advocacy',
    },
  ]

  const careers = [
    {
      title: 'Climate Resilience Program Officer',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      posted: 'Feb 2025',
    },
    {
      title: 'Urban Planning Coordinator',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      posted: 'Feb 2025',
    },
    {
      title: 'Data Analytics Specialist',
      location: 'Remote',
      type: 'Full-time',
      posted: 'Jan 2025',
    },
    {
      title: 'Community Engagement Officer',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      posted: 'Jan 2025',
    },
    {
      title: 'Communications Intern',
      location: 'Abuja, Nigeria',
      type: 'Internship',
      posted: 'Feb 2025',
    },
    {
      title: 'Research Assistant',
      location: 'Remote',
      type: 'Internship',
      posted: 'Feb 2025',
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
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('/hero-climate-city.jpg')",
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Get Involved
          </h1>
          <p className="text-xl md:text-2xl text-white/85 leading-relaxed">
            Join us in building climate-smart, resilient African cities. There are many ways to contribute.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 px-4 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-t-4 border-primary">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">{opportunity.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {opportunity.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-accent mb-3 uppercase">Ways to participate</p>
                    <ul className="space-y-2">
                      {opportunity.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="w-full">
                    <Button className="w-full cursor-pointer">{opportunity.cta}</Button>
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      {/* <section className="py-16 px-4 md:py-24 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join Our Team</h2>
            <p className="text-lg text-muted-foreground">
              We're looking for passionate individuals to join our mission of building sustainable, climate-resilient
              African cities.
            </p>
          </div>

          <div className="space-y-4">
            {careers.map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow hover:border-primary group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        📍 {job.location}
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        💼 {job.type}
                      </span>
                      <span className="text-xs text-muted-foreground ml-auto">{job.posted}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="flex-shrink-0 group-hover:border-primary group-hover:text-primary bg-transparent">
                    View
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button>View All Positions</Button>
          </div>
        </div>
      </section> */}

      {/* Why Join Us */}
      <section className="py-16 px-4 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Why Partner With PACCMS</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-primary/5">
              <h3 className="font-bold text-foreground mb-2">Impact at Scale</h3>
              <p className="text-sm text-muted-foreground">
                Your contribution directly supports work reaching thousands of people and influencing continental
                policies.
              </p>
            </Card>

            <Card className="p-6 bg-accent/5">
              <h3 className="font-bold text-foreground mb-2">Professional Growth</h3>
              <p className="text-sm text-muted-foreground">
                Work with experienced professionals on cutting-edge climate and sustainability solutions.
              </p>
            </Card>

            <Card className="p-6 bg-primary/5">
              <h3 className="font-bold text-foreground mb-2">Network Access</h3>
              <p className="text-sm text-muted-foreground">
                Connect with leading organizations, researchers, and policymakers across Africa.
              </p>
            </Card>

            <Card className="p-6 bg-accent/5">
              <h3 className="font-bold text-foreground mb-2">Mission-Driven Work</h3>
              <p className="text-sm text-muted-foreground">
                Be part of building sustainable, equitable, resilient African cities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Let's discuss how you can contribute to our mission of building climate-smart African cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold cursor-pointer w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent cursor-pointer w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
