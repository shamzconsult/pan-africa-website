'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Users,
  Target,
  Award,
  Zap,
  ShieldCheck,
  HeartHandshake,
  FileDown,
  CheckCircle,
  Building,
  TrendingUp,
  GraduationCap,
  Sparkles,
} from 'lucide-react'

export default function About() {
  const principles = [
    {
      title: 'Collaboration',
      description:
        'Foster inclusive partnerships among governments, communities, academia, and the private sector.',
      icon: Users,
    },
    {
      title: 'Equity',
      description:
        'Prioritize vulnerable populations and ensure fair access to resources and opportunities.',
      icon: Target,
    },
    {
      title: 'Innovation',
      description:
        'Embrace science, technology, and creative approaches to solve complex challenges.',
      icon: Zap,
    },
    {
      title: 'Transparency',
      description:
        'Maintain open communication, accountability, and ethical governance across all initiatives.',
      icon: Award,
    },
    {
      title: 'Sustainability',
      description:
        'Promote long-term environmental, economic, and social wellbeing for African cities.',
      icon: ShieldCheck,
    },
    {
      title: 'Empowerment',
      description:
        'Build local ownership and grassroots leadership in climate resilience and adaptation efforts.',
      icon: HeartHandshake,
    },
  ]

  const timeline = [
    {
      year: '2010',
      title: 'Idea Conception',
      desc: 'Initial discussions and informal research on urban climate resilience and sustainable city planning begin among a core group of environmentalists and urban planners.',
    },
    {
      year: '2012',
      title: 'Network Formation',
      desc: 'Early partnerships formed with academic institutions, NGOs, and community organizations focused on climate and urban sustainability.',
    },
    {
      year: '2015',
      title: 'Pilot Projects',
      desc: 'Launch of small local initiatives testing sustainable urban interventions and climate adaptation strategies in vulnerable city areas.',
    },
    {
      year: '2017',
      title: 'Strategic Planning',
      desc: 'Development of a formal vision and mission, drafting of a strategic framework to guide future activities.',
    },
    {
      year: '2019',
      title: 'Funding Challenges',
      desc: 'Attempts to secure consistent funding face hurdles, prompting revisions in organizational approach and outreach.',
    },
    {
      year: '2021',
      title: 'Policy Engagement',
      desc: 'Increased advocacy efforts with local governments and international climate forums to elevate urban sustainability on the agenda.',
    },
    {
      year: '2023',
      title: 'Capacity Building',
      desc: 'Expansion of community training programs and stakeholder workshops in climate adaptation and sustainable urban development.',
    },
    {
      year: '2025',
      title: 'Formal Incorporation',
      desc: 'Official registration and incorporation as an NGO with a clear mandate to champion climate resilience, sustainable cities, and equitable development.',
    },
  ]

  const futureTargets = [
    {
      year: '2027',
      title: 'Urban Climate Data Platform',
      desc: 'Develop a comprehensive urban climate data platform accessible to policymakers, researchers, and communities.',
      icon: TrendingUp,
    },
    {
      year: '2028',
      title: 'Policy Integration',
      desc: 'Influence global and national policies to integrate climate resilience and equitable migration frameworks.',
      icon: Building,
    },
    {
      year: '2030',
      title: 'Resilient Urban Communities',
      desc: 'Establish resilient urban communities that effectively adapt to climate change impacts.',
      icon: Target,
    },
    {
      year: '2030',
      title: 'Local Capacity Building',
      desc: 'Build strong local capacities through training and knowledge-sharing programs engaging at least 10,000 community members.',
      icon: GraduationCap,
    },
  ]

  const resilienceTeam = [
    {
      role: 'Executive Director',
      desc: 'Oversees overall strategy, operations, and governance; leads external relations.',
      skills: 'Strategic leadership, communication, stakeholder engagement, decision-making, financial acumen.',
    },
    {
      role: 'Resilience Program Manager',
      desc: 'Manages program design, implementation, and reporting across resilience projects.',
      skills: 'Project management, climate adaptation expertise, team leadership, monitoring & evaluation.',
    },
    {
      role: 'Climate Adaptation Specialist',
      desc: 'Provides technical expertise on climate risks, adaptation strategies, and resilience measures.',
      skills: 'Climate science, risk assessment, environmental planning, data analysis.',
    },
    {
      role: 'Urban Planning Coordinator',
      desc: 'Coordinates sustainable urban development initiatives integrating resilience principles.',
      skills: 'Urban planning, GIS skills, stakeholder coordination, regulatory knowledge.',
    },
    {
      role: 'Human Mobility and Migration Officer',
      desc: 'Manages programs addressing climate-induced migration and displacement.',
      skills: 'Migration policy, social science research, community engagement, advocacy.',
    },
    {
      role: 'Data and Monitoring Analyst',
      desc: 'Collects, analyzes, and reports climate and project-related data for decision-making.',
      skills: 'Data analytics, statistics, database management, visualization.',
    },
    {
      role: 'Partnerships and Communications Manager',
      desc: 'Builds and manages partnerships; leads communications and outreach efforts.',
      skills: 'Networking, communication strategy, marketing, public relations.',
    },
    {
      role: 'Community Engagement Officer',
      desc: 'Facilitates participatory processes and empowers local stakeholders.',
      skills: 'Facilitation, cultural sensitivity, conflict resolution, grassroots mobilization.',
    },
    {
      role: 'Finance and Administration Manager',
      desc: 'Oversees budgeting, financial reporting, and administrative support.',
      skills: 'Financial management, organizational skills, compliance, bookkeeping.',
    },
    {
      role: 'Monitoring & Evaluation Officer',
      desc: 'Designs and implements M&E frameworks to assess program effectiveness.',
      skills: 'Evaluation methods, indicators design, reporting, impact analysis.',
    },
  ]

  const keyAudiences = [
    {
      title: 'Local & Regional Governments',
      desc: 'Seeking expertise and solutions for urban resilience, climate adaptation planning, and migration management.',
    },
    {
      title: 'Multilateral Donors & Development Agencies',
      desc: 'Funding climate resilience, green infrastructure, and sustainable urbanization projects.',
    },
    {
      title: 'Private Sector & SMEs',
      desc: 'Engaged in climate risk management, sustainable supply chains, and corporate social responsibility.',
    },
    {
      title: 'Humanitarian & Migration Organizations',
      desc: 'Implementing programs for climate-induced displacement and dignified human mobility.',
    },
    {
      title: 'Academic & Research Institutions',
      desc: 'Partners for climate data analytics, urban modeling, and evidence-based innovations.',
    },
    {
      title: 'Community-Based Organizations & Civil Society',
      desc: 'Grassroots end-users and collaborators in participatory resilience building.',
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
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/team/founder-dr-jimoh-musa-yusuf.png')",
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-xs font-semibold uppercase tracking-wider">
            <span>Official Profile & Governance</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            About Our Organization
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Founded after 15 years of conception and formally incorporated in 2025 as a dedicated
            pan-African NGO committed to climate-smart, resilient cities and dignified human mobility.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="/Pan-African-Centre-Profile.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-all shadow-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Official Company Profile (PDF)</span>
            </a>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent text-sm"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder's Statement Section with Photo */}
      <section className="py-16 px-4 md:py-20 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-border shadow-md">
            <div className="grid md:grid-cols-12 gap-0 items-center">
              {/* Founder Photo */}
              <div className="md:col-span-5 relative h-80 md:h-full min-h-[420px] bg-muted">
                <Image
                  src="/images/team/founder-dr-jimoh-musa-yusuf.png"
                  alt="Jimoh Musa Yusuf, Ph.D - Founder and Chief Executive Officer"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:hidden" />
                <div className="absolute bottom-4 left-4 right-4 text-white md:hidden">
                  <h3 className="font-bold text-lg">Jimoh Musa Yusuf, Ph.D</h3>
                  <p className="text-xs text-white/80">Founder / Chief Executive Officer</p>
                </div>
              </div>

              {/* Founder Statement Content */}
              <div className="md:col-span-7 p-8 md:p-12 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Founder's Statement</span>
                </div>

                <blockquote className="text-muted-foreground text-base md:text-lg leading-relaxed italic border-l-4 border-primary pl-4">
                  "As we formally launch our NGO in 2025, we stand at a pivotal moment filled with hope
                  and determination. Over 15 years in the making, this organization embodies a vision
                  for resilient and sustainable cities where people and the planet thrive together. While
                  the challenges posed by climate change and urbanization are immense, we believe in
                  the power of innovation, collaboration, and community to create meaningful change.
                  <br />
                  <br />
                  Our journey here was shaped by many obstacles that strengthened our resolve and
                  deepened our commitment. Today, we look forward with optimism, knowing that every
                  action taken, every partnership built, and every policy influenced brings us closer to a
                  healthier, more equitable future. Together, we will transform cities into beacons of
                  sustainability, innovation, and justice—for current and future generations. The best
                  is yet to come, and we are ready to build it."
                </blockquote>

                <div className="pt-2 hidden md:block">
                  <h4 className="text-xl font-bold text-foreground">Jimoh Musa Yusuf, Ph.D</h4>
                  <p className="text-sm text-primary font-medium">Founder / Chief Executive Officer</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    PanAfrican Centre for Climate Change, Cities, Mobility and Sustainability
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Vision, Mission, Purpose */}
      <section className="py-16 px-4 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Core Mandate</h2>
            <p className="text-muted-foreground text-base">
              Shaping knowledge and inspiring sustainable action across urban landscapes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-t-4 border-t-primary shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
                Vision Statement
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-4">A Resilient, Climate-Smart Africa</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                “To be a leading organization that promote a Climate-smart and sustainable future
                where cities thrive, human mobility is dignified, and African communities adapt to
                climate change with opportunities.”
              </p>
            </Card>

            <Card className="p-8 border-t-4 border-t-accent shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                Mission Statement
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-4">Transformative Action in Cities</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                “To catalyze transformative action in building knowledge, policies, and practices that
                address climate pressure, promote inclusive urban system and sustainable mobility, and
                equitable opportunity for people on the move.”
              </p>
            </Card>
          </div>

          {/* Organizational Purpose */}
          <Card className="p-8 md:p-10 bg-secondary/5 border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Purpose</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Advance Climate Resilience:</strong> Through research, promotion of innovative
                  indigenous knowledge and strategies, capacity development, and advocacy for sustainable
                  Mobility/Migration, Urban Heritage, and Leadership in Africa.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Mentorship & Practice:</strong> Create the network of leadership/mentorship
                  opportunities and build a community of practice to solve peculiar African migration,
                  climate, and city heritage issues.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Global Collaboration:</strong> Collaborate for action on sustainable climate
                  safety, sustainable migration, and urban resilience globally with relevant stakeholders.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Resource Mobilization:</strong> Mobilise globally and expend resources through
                  linkages, grants, collaborations, sponsorships, and donations from legitimate sources.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Consultancy & Scholarships:</strong> Undertake consultancy, training,
                  conferences, projects, programmes, and promote scholarships to uncover potentials for
                  regional development.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Youth & Inclusion:</strong> Advocate for entrepreneurial opportunities for job
                  creation and access to funding/scholarship for youths, gender, and people with special
                  needs in thematic areas.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 md:py-20 bg-secondary/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Core Principles</h2>
            <p className="text-muted-foreground text-base">
              These principles guide our operations, field interventions, and institutional governance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 15-Year Evolution Timeline */}
      <section className="py-16 px-4 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Chronological Milestones
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our 15-Year Journey (2010 – 2025)
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              From initial idea conception to pan-African network formation and formal incorporation.
            </p>
          </div>

          <div className="relative border-l-2 border-primary/30 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
            {timeline.map((item, index) => (
              <div key={index} className="relative group">
                {/* Milestone dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background ring-2 ring-primary/20 group-hover:scale-125 transition-transform" />

                <div className="bg-card p-6 rounded-xl border border-border shadow-xs hover:shadow-md transition-shadow">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold text-xs mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Targets */}
      <section className="py-16 px-4 md:py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Target Horizons
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Future Targets</h2>
            <p className="text-muted-foreground text-base">
              Actionable, measurable milestones shaping our continental operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureTargets.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="p-6 border-t-4 border-t-primary flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-black text-primary">{item.year}</span>
                      <Icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-bold text-base text-foreground mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Organizational Governance & Chart */}
      <section className="py-16 px-4 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Management & Structure
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Governance & Organizational Structure
            </h2>
            <p className="text-muted-foreground text-base">
              Governed by a Board of Trustees and Board of Directors with executive management heading thematic directorates.
            </p>
          </div>

          {/* Org Chart Image from Profile */}
          <div className="bg-card p-6 sm:p-8 rounded-2xl border border-border shadow-sm text-center">
            <h3 className="text-lg font-bold text-foreground mb-4">Official Organizational Chart</h3>
            <div className="relative w-full max-w-3xl mx-auto aspect-[16/10] bg-muted rounded-xl overflow-hidden">
              <Image
                src="/images/team/organizational-chart.jpg"
                alt="PanAfrican Centre Organizational Chart"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-4 max-w-2xl mx-auto">
              Clear reporting lines balancing specialized technical expertise, program delivery, and adaptive task teams across Africa.
            </p>
          </div>

          {/* All 10 Role Descriptions */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Resilience Team Positions & Key Competencies
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {resilienceTeam.map((member, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-primary/70 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold text-foreground mb-1.5">{member.role}</h4>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{member.desc}</p>
                  <div className="pt-3 border-t border-border">
                    <span className="text-[11px] font-bold text-accent uppercase tracking-wider block mb-1">
                      Key Competencies:
                    </span>
                    <p className="text-xs text-foreground/85 font-medium">{member.skills}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Clients & Audience */}
      <section className="py-16 px-4 md:py-20 bg-secondary/5">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Key Clients & Target Audience
            </h2>
            <p className="text-muted-foreground text-base">
              Providing tailored solutions addressing climate risks, urban development, and mobility challenges.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyAudiences.map((aud, index) => (
              <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
                <h3 className="font-bold text-foreground text-base mb-2">{aud.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{aud.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
