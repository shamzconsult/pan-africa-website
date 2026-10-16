'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Cloud, Building2, Users2, Zap, Database, Hand, ChevronDown } from 'lucide-react'

export default function Programs() {
  const [expandedId, setExpandedId] = useState<string | null>('climate')

  const programs = [
    {
      id: 'climate',
      title: 'Climate Resilience & Adaptation',
      icon: Cloud,
      shortDesc: 'Building capacity for climate-resilient African communities',
      fullDesc:
        'Our flagship program focuses on advancing climate resilience through research, promotion of innovative indigenous knowledge and strategies, capacity development, and advocacy for sustainable mobility and urban heritage.',
      metrics: [
        { label: 'Communities Engaged', value: '50+' },
        { label: 'Training Programs', value: '25+' },
        { label: 'Studies Conducted', value: '15+' },
      ],
      activities: [
        'Climate risk assessments and vulnerability mapping',
        'Community-based adaptation planning',
        'Climate-smart agriculture and water management',
        'Disaster risk reduction programs',
        'Green infrastructure development',
      ],
      partners: 'World Bank, Green Climate Fund, Academic Institutions',
    },
    {
      id: 'urban',
      title: 'Sustainable Urban Planning',
      icon: Building2,
      shortDesc: 'Green infrastructure and climate-smart urban development',
      fullDesc:
        'We coordinate sustainable urban development initiatives that integrate climate resilience principles. This includes nature-based solutions, green infrastructure, sustainable transport systems, and inclusive urban planning processes.',
      metrics: [
        { label: 'Cities Supported', value: '12+' },
        { label: 'Projects Implemented', value: '8+' },
        { label: 'Green Areas Created', value: '5000+ ha' },
      ],
      activities: [
        'Participatory urban planning workshops',
        'Green building certification and monitoring',
        'Sustainable transport solutions',
        'Urban heat island mitigation',
        'Waste management systems',
      ],
      partners: 'UN-Habitat, Local Governments, Urban Development Agencies',
    },
    {
      id: 'mobility',
      title: 'Human Mobility & Climate Migration',
      icon: Users2,
      shortDesc: 'Supporting climate-displaced populations with comprehensive support',
      fullDesc:
        'Our migration support program manages initiatives addressing climate-induced migration and displacement. We provide resources and legal, social, and economic support to affected populations while promoting dignified human mobility.',
      metrics: [
        { label: 'Beneficiaries Supported', value: '10,000+' },
        { label: 'Support Programs', value: '18+' },
        { label: 'Countries Reached', value: '15+' },
      ],
      activities: [
        'Legal aid and policy advocacy',
        'Skills training and income generation',
        'Social protection programs',
        'Community relocation support',
        'Migration governance frameworks',
      ],
      partners: 'IOM, UNHCR, International Humanitarian Organizations',
    },
    {
      id: 'smart',
      title: 'Smart Cities & Technology',
      icon: Zap,
      shortDesc: 'Digital solutions for sustainable urban management',
      fullDesc:
        'This program facilitates technology and knowledge exchange for clean energy, water management, poverty alleviation, and sustainable transport. We implement IoT solutions and data analytics for efficient city management.',
      metrics: [
        { label: 'Tech Platforms', value: '6+' },
        { label: 'Smart Projects', value: '12+' },
        { label: 'Data Points Generated', value: '1M+' },
      ],
      activities: [
        'IoT sensors and smart meters deployment',
        'Real-time air quality monitoring',
        'Traffic and mobility optimization',
        'Smart energy management systems',
        'Citizen engagement platforms',
      ],
      partners: 'Tech Companies, Universities, Innovation Hubs',
    },
    {
      id: 'data',
      title: 'Data & Monitoring',
      icon: Database,
      shortDesc: 'Evidence-based decision-making through data analytics',
      fullDesc:
        'We collect, analyze, and report climate and project-related data for decision-making. The Urban Climate Data Observatory provides climate risk assessments, migration trend analyses, and sustainability metrics.',
      metrics: [
        { label: 'Data Points', value: '50M+' },
        { label: 'Reports Published', value: '30+' },
        { label: 'Researchers', value: '40+' },
      ],
      activities: [
        'Climate data collection and analysis',
        'Migration trend monitoring',
        'Sustainability metrics tracking',
        'Early warning systems',
        'Impact assessment and evaluation',
      ],
      partners: 'Meteorological Agencies, Research Councils, Data Analytics Firms',
    },
    {
      id: 'engagement',
      title: 'Community Engagement & Capacity',
      icon: Hand,
      shortDesc: 'Empowering communities through training and participation',
      fullDesc:
        'We facilitate grassroots involvement, participatory planning, and awareness campaigns. Our capacity-building programs ensure vulnerable populations are included in resilience and sustainability efforts.',
      metrics: [
        { label: 'People Trained', value: '10,000+' },
        { label: 'Workshops Conducted', value: '200+' },
        { label: 'Community Groups', value: '150+' },
      ],
      activities: [
        'Climate literacy training',
        'Leadership development programs',
        'Women and youth empowerment',
        'Community exchange programs',
        'Advocacy and awareness campaigns',
      ],
      partners: 'Community NGOs, Civil Society, Local Organizations',
    },
  ]

  const objectives = [
    {
      year: '2025-2026',
      goals: [
        'Expand climate adaptation programs to 20 new communities',
        'Launch 5 sustainable city pilot projects',
        'Train 5,000 community members in climate resilience',
      ],
    },
    {
      year: '2027',
      goals: [
        'Develop comprehensive urban climate data platform',
        'Establish 10 climate migration support centers',
        'Influence integration of climate resilience in 5 national policies',
      ],
    },
    {
      year: '2028-2030',
      goals: [
        'Reach 100,000 trained community members',
        'Support climate-smart development in 50 cities',
        'Scale innovative solutions across the African continent',
      ],
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
            Our Programs
          </h1>
          <p className="text-xl md:text-2xl text-white/85 leading-relaxed">
            Integrated solutions across climate resilience, urban sustainability, human mobility, and technology
          </p>
        </div>
      </section>

      {/* Program Details - Accordion */}
      <section className="py-16 px-4 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Core Program Areas</h2>

          <div className="space-y-4">
            {programs.map((program) => {
              const Icon = program.icon
              const isExpanded = expandedId === program.id

              return (
                <Card
                  key={program.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : program.id)}
                    className="w-full px-6 py-6 flex items-start justify-between hover:bg-secondary/5 transition-colors text-left"
                  >
                    <div className="flex items-start gap-4 flex-grow">
                      <Icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-foreground">{program.title}</h3>
                        <p className="text-muted-foreground mt-1">{program.shortDesc}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-foreground flex-shrink-0 ml-4 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="border-t border-border px-6 py-6 space-y-6 bg-secondary/2">
                      <p className="text-muted-foreground leading-relaxed">{program.fullDesc}</p>

                      {/* Metrics */}
                      <div>
                        <h4 className="font-bold text-foreground mb-3">Impact Metrics</h4>
                        <div className="grid grid-cols-3 gap-4">
                          {program.metrics.map((metric, index) => (
                            <div key={index} className="text-center p-3 bg-background rounded-lg border border-border">
                              <p className="text-2xl font-bold text-primary">{metric.value}</p>
                              <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Activities */}
                      <div>
                        <h4 className="font-bold text-foreground mb-3">Key Activities</h4>
                        <ul className="space-y-2">
                          {program.activities.map((activity, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Partners */}
                      <div>
                        <h4 className="font-bold text-foreground mb-2">Key Partners</h4>
                        <p className="text-muted-foreground">{program.partners}</p>
                      </div>

                      <div className="pt-4">
                        <Button variant="outline">Learn More</Button>
                      </div>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-16 px-4 md:py-24 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Strategic Objectives</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="p-6 border-t-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-4">{objective.year}</h3>
                <ul className="space-y-3">
                  {objective.goals.map((goal, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Message */}
      <section className="py-16 px-4 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Integrated Approach</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              All our programs work together synergistically. Climate adaptation informs urban planning. Data guides decision-making. Community engagement ensures accountability. Technology amplifies impact. This integrated approach addresses the complex nexus of climate change, urbanization, and human mobility with evidence-based, inclusive solutions that create lasting change.
            </p>
          </Card>
        </div>
      </section>

      {/* Smart, Inclusive & Sustainable Cities Engagement (Official Profile Page 16) */}
      <section className="py-16 px-4 md:py-20 bg-secondary/5 border-t border-border">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Urban Solutions Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Smart, Inclusive, and Sustainable Cities Engagement
            </h2>
            <p className="text-muted-foreground text-sm">
              Integrated actions across technology, governance, and community empowerment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Promote Participatory Planning', desc: 'Involve diverse community groups in decision-making to ensure inclusive urban development meeting all residents’ needs.' },
              { title: 'Implement Smart Technologies', desc: 'Use IoT, data analytics, and digital platforms for efficient energy management, traffic control, waste reduction, and public services.' },
              { title: 'Foster Sustainable Infrastructure', desc: 'Develop green buildings, renewable energy systems, efficient public transit, and accessible green spaces to reduce environmental impacts.' },
              { title: 'Encourage Policy Integration', desc: 'Advocate for policies aligning urban growth with sustainability goals, social equity, and climate adaptation.' },
              { title: 'Build Cross-Sector Partnerships', desc: 'Collaborate with governments, private sector, academia, and civil society to share knowledge, resources, and innovations.' },
              { title: 'Support Capacity Building', desc: 'Provide education and training for local authorities and communities on sustainable urban practices and technology use.' },
              { title: 'Prioritize Equity & Accessibility', desc: 'Design urban services and infrastructure to be accessible and beneficial to vulnerable and marginalized populations.' },
              { title: 'Monitor and Adapt', desc: 'Use data-driven monitoring to assess urban sustainability indicators and adapt strategies dynamically.' },
            ].map((item, index) => (
              <Card key={index} className="p-5 hover:border-primary transition-colors flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-primary mb-2 block">Action 0{index + 1}</span>
                  <h3 className="font-bold text-base text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Renewable Energy Engagement (Official Profile Page 17) */}
      <section className="py-16 px-4 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Clean Energy Transition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Engagement in Renewable Energy
            </h2>
            <p className="text-muted-foreground text-sm">
              Accelerating renewable energy adoption to drive sustainable continental development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Increase Awareness & Education', desc: 'Promote awareness through seminars, workshops, and informational campaigns on solar, wind, hydro, and biomass.' },
              { title: 'Develop Strategic Partnerships', desc: 'Collaborate with government agencies, private clean energy companies, research institutions, and communities.' },
              { title: 'Invest in Renewable Projects', desc: 'Allocate funding or seek grants and incentives for renewable energy installations such as solar panels and wind turbines.' },
              { title: 'Incorporate Policy Advocacy', desc: 'Support policies that incentivize renewables, like tax credits, subsidies, and feed-in tariffs, to accelerate adoption.' },
              { title: 'Implement Pilot Projects', desc: 'Start small-scale renewable energy projects to demonstrate viability, reliability, and local community benefits.' },
              { title: 'Utilize Technology & Innovation', desc: 'Adopt cutting-edge renewable technologies, battery storage, and participate in practical research and development.' },
              { title: 'Engage Local Communities', desc: 'Mobilize local communities through education, employment opportunities, and participatory decision-making.' },
              { title: 'Measure Real-World Impact', desc: 'Track energy savings, emissions reductions, and economic benefits to demonstrate success and attract further support.' },
            ].map((item, index) => (
              <Card key={index} className="p-5 border-t-4 border-t-accent hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-accent mb-2 block">Initiative 0{index + 1}</span>
                <h3 className="font-bold text-base text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:py-24 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Programs</h2>
          <p className="text-lg text-accent-foreground/80 mb-8">
            Your contribution directly supports our work in building climate-smart, resilient African cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <Button className="bg-background hover:bg-background/90 text-accent font-semibold cursor-pointer w-full sm:w-auto">
                Donate Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent cursor-pointer w-full sm:w-auto"
              >
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
