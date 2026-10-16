import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function NewsSection() {
  const articles = [
    {
      title: 'Advancing Climate Adaptation in Urban Centers',
      date: 'February 2025',
      category: 'Research',
      excerpt: 'New findings show innovative approaches to building climate-resilient cities are gaining traction across Africa.',
    },
    {
      title: 'Building Partnerships for Sustainable Mobility',
      date: 'January 2025',
      category: 'Policy',
      excerpt: 'Strategic alliances with international organizations accelerate our mission to support climate-displaced communities.',
    },
    {
      title: 'Community Champions in Climate Action',
      date: 'December 2024',
      category: 'Impact',
      excerpt: 'Our grassroots programs empower local leaders to drive sustainable development in their neighborhoods.',
    },
  ]

  return (
    <section className="py-16 px-4 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Updates</h2>
            <p className="text-lg text-muted-foreground">
              News, research, and insights from our teams
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex bg-transparent">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow hover:border-primary cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                Read Article
                <ArrowRight className="ml-1 w-4 h-4" />
              </div>
            </Card>
          ))}
        </div>

        <Button className="w-full md:hidden">
          View All Articles
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </section>
  )
}
