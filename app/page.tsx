import { Globe, Leaf, Zap, Users, MapPin } from 'lucide-react'
import { Card } from '@/components/ui/card'
import HeroSlider from '@/components/home/HeroSlider'
import ImpactMetrics from '@/components/home/ImpactMetrics'
import ProgramGrid from '@/components/home/ProgramGrid'
import FlagshipProjects from '@/components/home/FlagshipProjects'
import PartnerCarousel from '@/components/home/PartnerCarousel'
import NewsSection from '@/components/home/NewsSection'
import CTASection from '@/components/home/CTASection'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {

  return (
    <main className="w-full">
      <Navigation />

      {/* Hero Section */}
      <HeroSlider />

      {/* Mission & Vision Cards */}
      <section className="py-16 px-4 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Purpose</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leading transformative action for climate resilience, sustainable cities, and equitable development across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading organization that promotes a climate-smart and sustainable future where cities thrive, human mobility is dignified, and African communities adapt to climate change with opportunities.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To catalyze transformative action in building knowledge, policies, and practices that address climate pressure, promote inclusive urban systems and sustainable mobility.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <ImpactMetrics />

      {/* Core Program Areas */}
      <ProgramGrid />

      {/* Flagship Projects */}
      <FlagshipProjects />

      {/* Engagement Focus */}
      <section className="py-16 px-4 md:py-24 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Focus Areas</h2>
            <p className="text-lg text-muted-foreground">Integrated solutions across technology, governance, and community empowerment</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:border-primary transition-colors">
              <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Smart Technologies</h3>
              <p className="text-sm text-muted-foreground">IoT, data analytics, and digital platforms for efficient urban management</p>
            </Card>

            <Card className="p-6 text-center hover:border-accent transition-colors">
              <Users className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Community Driven</h3>
              <p className="text-sm text-muted-foreground">Inclusive participatory planning ensuring all voices are heard</p>
            </Card>

            <Card className="p-6 text-center hover:border-primary transition-colors">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Sustainable Infrastructure</h3>
              <p className="text-sm text-muted-foreground">Green buildings, renewable energy, and accessible green spaces</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">From conception to formal incorporation and beyond</p>
          </div>

          <div className="space-y-8">
            {[
              { year: '2010', title: 'Idea Conception', desc: 'Initial discussions on urban climate resilience begin' },
              { year: '2015', title: 'Pilot Projects', desc: 'Launch of local sustainability initiatives' },
              { year: '2021', title: 'Policy Engagement', desc: 'Advocacy efforts with governments and international forums' },
              { year: '2025', title: 'Formal Incorporation', desc: 'Official NGO registration with clear climate resilience mandate' },
            ].map((milestone, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  {i < 3 && <div className="w-1 h-16 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-semibold text-primary">{milestone.year}</p>
                  <h3 className="text-lg font-bold text-foreground">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnerCarousel />

      {/* News & Updates */}
      <NewsSection />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  )
}
