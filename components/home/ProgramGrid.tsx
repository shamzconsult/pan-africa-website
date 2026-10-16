import { Cloud, Building2, Users2, Zap, Database, Hand } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function ProgramGrid() {
  const programs = [
    {
      id: 'climate',
      title: 'Climate Resilience & Adaptation',
      description: 'Building capacity for communities to effectively adapt to climate change impacts through research and innovation',
      icon: Cloud,
      color: 'text-primary',
    },
    {
      id: 'urban',
      title: 'Sustainable Urban Planning',
      description: 'Green infrastructure and climate-smart urban development integrating resilience principles across cities',
      icon: Building2,
      color: 'text-accent',
    },
    {
      id: 'mobility',
      title: 'Human Mobility & Migration',
      description: 'Supporting climate-displaced populations with comprehensive legal, social, and economic support',
      icon: Users2,
      color: 'text-primary',
    },
    {
      id: 'smart',
      title: 'Smart Cities & Technology',
      description: 'IoT, data analytics, and digital platforms for efficient energy management and urban services',
      icon: Zap,
      color: 'text-accent',
    },
    {
      id: 'data',
      title: 'Data & Monitoring',
      description: 'Collecting and analyzing urban climate risks, migration trends, and sustainability metrics',
      icon: Database,
      color: 'text-primary',
    },
    {
      id: 'engagement',
      title: 'Community Engagement',
      description: 'Participatory planning and capacity building ensuring vulnerable populations lead resilience efforts',
      icon: Hand,
      color: 'text-accent',
    },
  ]

  return (
    <section className="py-20 px-4 md:py-32 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/30">
              Our Focus Areas
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Core Program Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Integrated solutions addressing climate, urbanization, and human mobility challenges across Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <div
                key={program.id}
                className="group relative overflow-hidden rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <Card className="relative p-8 border-0 shadow-sm group-hover:shadow-md transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <div className="mb-6 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className={`w-8 h-8 ${program.color} transition-transform group-hover:scale-110 duration-300`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {program.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {program.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-0.5 w-0 bg-primary group-hover:w-12 transition-all duration-300" />
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
