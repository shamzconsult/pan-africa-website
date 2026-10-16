import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Building2, Award, TrendingUp, Handshake, FileDown } from 'lucide-react'

export default function Partnerships() {
  const coreProjectsPartners = [
    {
      project: 'Urban Climate Resilience Pilots',
      focus: 'Implementing nature-based solutions and green infrastructure in vulnerable urban neighborhoods.',
      partners: 'Local governments, urban planning agencies, environmental NGOs',
      funders: 'Multilateral development banks (e.g., World Bank), climate funds (e.g., Green Climate Fund)',
    },
    {
      project: 'Climate Migration Support Network',
      focus: 'Providing resources and legal, social, and economic support to climate-displaced populations.',
      partners: 'Humanitarian organizations, migration agencies (e.g., IOM), legal aid groups',
      funders: 'UN agencies, international foundations focused on migration and human rights',
    },
    {
      project: 'Sustainable City Innovation Hubs',
      focus: 'Facilitating technology and knowledge exchange for clean energy, water, poverty alleviation, and sustainable transport.',
      partners: 'Universities, tech startups, clean energy companies',
      funders: 'Research grants, private sector innovation funds, government innovation programs',
    },
    {
      project: 'Participatory Urban Planning Workshops',
      focus: 'Engaging communities in climate-smart decision-making processes.',
      partners: 'Community-based organizations, local authorities, civil society coalitions',
      funders: 'Local government grants, international donors supporting civic engagement',
    },
    {
      project: 'Climate Policy Impact Dialogues',
      focus: 'Multi-stakeholder forums shaping local and national climate and migration policies.',
      partners: 'Policy think tanks, advocacy networks, governmental climate offices',
      funders: 'Policy-oriented foundations, international cooperation funds',
    },
    {
      project: 'Urban Climate Data Observatory',
      focus: 'Collecting and analyzing data on urban climate risks and human mobility trends.',
      partners: 'Data analytics firms, meteorological agencies, academic institutions',
      funders: 'Tech philanthropy, research councils, climate data funds',
    },
  ]

  const partnerCategories = [
    {
      title: 'Multilateral Development Partners',
      icon: Building2,
      partners: ['World Bank', 'African Development Bank', 'UNDP', 'UN-Habitat'],
      description: 'International organizations providing funding and technical support.',
    },
    {
      title: 'Climate Finance & Funds',
      icon: TrendingUp,
      partners: ['Green Climate Fund', 'Climate Investment Funds', 'Global Environment Facility'],
      description: 'Funding mechanisms for climate adaptation and mitigation projects.',
    },
    {
      title: 'Academic & Research Institutions',
      icon: Award,
      partners: ['Universities across Africa', 'Data & Meteorological Centers', 'Urban Institutes'],
      description: 'Institutions contributing research, climate modelling, and capacity building.',
    },
    {
      title: 'Community & Civil Society',
      icon: Users,
      partners: ['Local NGOs', 'Urban Community Coalitions', 'Grassroots Climate Groups'],
      description: 'Frontline community leaders ensuring participatory impact and accountability.',
    },
  ]

  const partnershipModels = [
    {
      title: 'Financial & Grant Partnerships',
      description: 'Program grants, co-financing mechanisms, and institutional sponsorships.',
      benefits: ['Transparent fiduciary reporting', 'Measurable field metrics', 'Direct community impact'],
    },
    {
      title: 'Technical & Research Collaborations',
      description: 'Knowledge exchange, urban observatory analytics, and joint policy studies.',
      benefits: ['Evidence-based models', 'Open-access publications', 'Technology transfer'],
    },
    {
      title: 'Implementation Coalitions',
      description: 'Pilot rollouts, nature-based infrastructure, and community training.',
      benefits: ['Ground-level execution', 'Local government alignment', 'Long-term sustainability'],
    },
    {
      title: 'Policy & Advocacy Networks',
      description: 'Regional policy dialogues on climate displacement, urban heritage, and green cities.',
      benefits: ['National policy inputs', 'Continental representation', 'Multi-stakeholder consensus'],
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
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('/hero-mobility.jpg')",
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-xs font-semibold uppercase tracking-wider">
            <span>Continental & Global Collaborations</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Strategic Partnerships & Funders
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-2xl mx-auto">
            Effective collaboration with partners and securing diversified funding aligns resources
            with project goals, enhances impact, and drives sustainability across Africa.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="gap-2 shadow-sm cursor-pointer">
                <span>Become a Partner</span>
                <Handshake className="w-4 h-4" />
              </Button>
            </Link>
            <a
              href="/Pan-African-Centre-Profile.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-sm font-semibold transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Profile PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Key Partner Organizations & Funders For Each Core Project (From Official Profile) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
            Program Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Partner Organizations & Funders by Core Project
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Targeted alignment of institutional stakeholders, technical partners, and funding mechanisms for each flagship project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreProjectsPartners.map((item, index) => (
            <Card key={index} className="p-6 border-border hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 text-primary">
                  {item.project}
                </h3>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  {item.focus}
                </p>

                <div className="space-y-3 pt-3 border-t border-border text-xs">
                  <div>
                    <strong className="block text-foreground font-semibold uppercase tracking-wider text-[11px] mb-1">
                      Target Partners:
                    </strong>
                    <span className="text-muted-foreground leading-relaxed">{item.partners}</span>
                  </div>

                  <div>
                    <strong className="block text-foreground font-semibold uppercase tracking-wider text-[11px] mb-1">
                      Key Funders:
                    </strong>
                    <span className="text-muted-foreground leading-relaxed">{item.funders}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Partner Network Categories */}
      <section className="py-16 px-4 md:py-20 bg-secondary/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground">Our Multi-Sector Coalition</h2>
            <p className="text-muted-foreground text-sm mt-2">
              Bringing together governance, finance, science, and community leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partnerCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{category.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border mt-3">
                    {category.partners.map((partner, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-secondary/20 text-foreground text-xs font-medium"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-16 px-4 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground">Partnership Models</h2>
            <p className="text-muted-foreground text-sm mt-2">
              Flexible, transparent avenues for bilateral and multilateral cooperation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partnershipModels.map((model, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-primary hover:shadow-sm transition-shadow">
                <h3 className="text-lg font-bold text-foreground mb-2">{model.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{model.description}</p>
                <div className="pt-2 border-t border-border">
                  <ul className="space-y-1">
                    {model.benefits.map((b, i) => (
                      <li key={i} className="text-xs text-foreground/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Collaborate for Climate Impact?</h2>
          <p className="text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Contact our executive leadership and partnerships directorate to establish project linkages, co-design interventions, or fund climate adaptation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 h-auto cursor-pointer">
                Initiate Partnership Dialogue
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent px-8 py-3 h-auto cursor-pointer"
              >
                Learn About Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
