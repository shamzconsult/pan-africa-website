import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Heart, Users, BookOpen } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'

export default function CTASection() {
  return (
    <section className="py-16 px-4 md:py-24 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Be Part of the Solution</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in building climate-smart, resilient African cities and supporting equitable development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow hover:border-primary flex flex-col justify-between">
            <div>
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Donate & Support</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Support our programs and help fund climate adaptation projects across African communities.
              </p>
            </div>
            <Link href="/get-involved">
              <Button className="w-full">Support Our Mission</Button>
            </Link>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow hover:border-accent flex flex-col justify-between">
            <div>
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Volunteer</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Contribute your skills and expertise to our community engagement and capacity building initiatives.
              </p>
            </div>
            <Link href="/get-involved">
              <Button variant="outline" className="w-full bg-transparent">Join Community</Button>
            </Link>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow hover:border-primary flex flex-col justify-between">
            <div>
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Partner</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Collaborate with us to amplify impact and scale innovative climate and mobility solutions.
              </p>
            </div>
            <Link href="/contact">
              <Button variant="outline" className="w-full bg-transparent">Explore Partnership</Button>
            </Link>
          </Card>
        </div>

        {/* Functional Newsletter Signup via shared NewsletterForm */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-md">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Stay Updated on Climate Action</h3>
          <p className="text-primary-foreground/80 mb-6 text-sm max-w-xl mx-auto">
            Get the latest policy briefs, sustainable city updates, and verified research reports delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm variant="footer" showConsent />
          </div>
        </div>
      </div>
    </section>
  )
}
