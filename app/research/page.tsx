'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, FileText, TrendingUp, BarChart3, PieChart as PieChartIcon } from 'lucide-react'

export default function Research() {
  const [selectedYear, setSelectedYear] = useState('2025')

  const publications = [
    {
      title: 'Climate Resilience in African Cities: A Comparative Analysis',
      type: 'Policy Brief',
      date: '2025-01',
      author: 'PACCMS Research Team',
      summary: 'Comprehensive analysis of climate adaptation strategies across 50 African cities',
      download: 'climate-resilience-brief.pdf',
    },
    {
      title: 'Human Mobility and Climate Change: The African Perspective',
      type: 'Research Report',
      date: '2024-12',
      author: 'Migration Studies Division',
      summary: 'In-depth study on climate-induced migration patterns and policy recommendations',
      download: 'human-mobility-report.pdf',
    },
    {
      title: 'Green Infrastructure Solutions for Urban Heat Island Effect',
      type: 'Technical Guide',
      date: '2024-11',
      author: 'Urban Planning Unit',
      summary: 'Practical guide for implementing nature-based solutions in cities',
      download: 'green-infrastructure-guide.pdf',
    },
    {
      title: 'Data-Driven Climate Action: Monitoring and Evaluation Framework',
      type: 'Framework Document',
      date: '2024-10',
      author: 'Data Analytics Team',
      summary: 'M&E framework for tracking climate adaptation project outcomes',
      download: 'me-framework.pdf',
    },
    {
      title: 'Youth Engagement in Climate Action: Best Practices',
      type: 'White Paper',
      date: '2024-09',
      author: 'Community Engagement Unit',
      summary: 'Evidence-based strategies for meaningful youth participation',
      download: 'youth-engagement-paper.pdf',
    },
    {
      title: 'Financing Climate Resilience: Innovative Mechanisms for Africa',
      type: 'Research Paper',
      date: '2024-08',
      author: 'Partnerships & Funding Division',
      summary: 'Novel financing approaches for scaling climate solutions',
      download: 'financing-mechanisms.pdf',
    },
  ]

  const datasets = [
    {
      title: 'Urban Climate Risk Assessment Data',
      description: 'Real-time climate risk indicators for 50+ African cities',
      records: '500K+',
      lastUpdated: '2025-02-01',
    },
    {
      title: 'Climate Migration Trends Dataset',
      description: 'Comprehensive data on climate-induced migration patterns',
      records: '100K+',
      lastUpdated: '2025-01-15',
    },
    {
      title: 'Green Infrastructure Inventory',
      description: 'Database of sustainable infrastructure projects across regions',
      records: '5K+',
      lastUpdated: '2025-01-20',
    },
    {
      title: 'Urban Sustainability Metrics',
      description: 'Key performance indicators for sustainable city development',
      records: '50K+',
      lastUpdated: '2025-02-05',
    },
  ]

  const stats = [
    { label: 'Publications', value: '50+', color: 'text-primary' },
    { label: 'Research Studies', value: '25+', color: 'text-accent' },
    { label: 'Data Points', value: '50M+', color: 'text-primary' },
    { label: 'Cities Analyzed', value: '50+', color: 'text-accent' },
  ]

  return (
    <main className="w-full">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center py-16 px-4 md:py-24 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('/hero-resilience.jpg')",
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Research & Data
          </h1>
          <p className="text-xl md:text-2xl text-white/85 leading-relaxed">
            Evidence-based insights driving climate action and sustainable development across Africa
          </p>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 px-4 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <p className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16 px-4 md:py-24 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Research Focus Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Climate Trends Analysis',
                desc: 'Monitoring climate patterns, precipitation changes, and temperature trends affecting African cities',
              },
              {
                icon: BarChart3,
                title: 'Urban Sustainability Metrics',
                desc: 'Tracking key indicators for green infrastructure, energy efficiency, and livability',
              },
              {
                icon: PieChartIcon,
                title: 'Migration Pattern Mapping',
                desc: 'Analyzing climate-induced migration flows and demographic changes across regions',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="p-6 border-t-4 border-primary hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 px-4 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Publications</h2>
              <p className="text-muted-foreground mt-2">Policy briefs, research reports, and technical guides</p>
            </div>
            <Button variant="outline" className="hidden md:flex bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Download All
            </Button>
          </div>

          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow hover:border-primary group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {pub.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{pub.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{pub.summary}</p>
                    <p className="text-xs text-muted-foreground">By {pub.author}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-shrink-0 group-hover:border-primary group-hover:text-primary bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button>View All Publications</Button>
          </div>
        </div>
      </section>

      {/* Datasets Section */}
      <section className="py-16 px-4 md:py-24 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Open Data Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {datasets.map((dataset, index) => (
              <Card key={index} className="p-6 border-l-4 border-accent hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-foreground mb-2">{dataset.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{dataset.description}</p>
                <div className="space-y-2 mb-4 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Records:</span>
                    <span className="font-semibold text-foreground">{dataset.records}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <span className="font-semibold text-foreground">{dataset.lastUpdated}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Download className="w-4 h-4 mr-1" />
                    CSV
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Download className="w-4 h-4 mr-1" />
                    JSON
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Visualization Dashboard Preview */}
      <section className="py-16 px-4 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Urban Climate Data Observatory
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interactive dashboards providing real-time climate data, migration trends, and sustainability metrics
            </p>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-dashed border-primary/20">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Real-time climate risk indicators for 50+ cities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Interactive mapping of climate migration patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Sustainability performance benchmarking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Custom reports and data export capabilities</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button>Launch Observatory Dashboard</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:py-24 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Our Research</h2>
          <p className="text-lg text-accent-foreground/80 mb-8">
            Our publications and datasets are freely available for use in policy-making, planning, and advocacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-background hover:bg-background/90 text-accent font-semibold">
              Explore Publications
            </Button>
            <Button
              variant="outline"
              className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
            >
              Access Open Data
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
