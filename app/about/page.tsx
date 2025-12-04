import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Signal, Users, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us - TelecomInsider",
  description:
    "Learn about TelecomInsider, our mission, team, and commitment to delivering quality telecommunications news and insights.",
}

const values = [
  {
    icon: Target,
    title: "Accuracy",
    description:
      "We prioritize factual, well-researched content that our readers can trust and rely on for their professional decisions.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We foster a community of telecom professionals, enthusiasts, and learners who share knowledge and insights.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every article, analysis, and resource we publish on our platform.",
  },
]

const team = [
  {
    name: "Sarah Chen",
    role: "Editor-in-Chief",
    bio: "Former telecommunications analyst with 15+ years of industry experience.",
    image: "/professional-woman-headshot.png",
  },
  {
    name: "Michael Roberts",
    role: "Senior Technology Writer",
    bio: "Specializes in 5G technology and network infrastructure developments.",
    image: "/professional-man-headshot.png",
  },
  {
    name: "Emily Watson",
    role: "Industry Analyst",
    bio: "Expert in telecommunications market trends and business strategy.",
    image: "/testimonial-person-3.png",
  },
]

export default function AboutPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Signal className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            About TelecomInsider
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Your trusted source for telecommunications news, analysis, and insights since 2020. We are dedicated to
            providing accurate, timely, and insightful coverage of the rapidly evolving telecom industry.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mt-20 bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Mission</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                At TelecomInsider, our mission is to democratize access to telecommunications industry knowledge. We
                believe that understanding the technology that connects our world should be accessible to everyone—from
                industry professionals to curious enthusiasts.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We cover the latest developments in 5G technology, network infrastructure, mobile communications, and
                emerging technologies that shape how we connect and communicate. Our team of experienced writers and
                analysts brings decades of combined industry experience to deliver content you can trust.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/modern-telecommunications-office-with-team-working.jpg" alt="TelecomInsider team at work" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Values</h2>
            <p className="mt-4 text-muted-foreground">The principles that guide everything we do at TelecomInsider</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Team</h2>
            <p className="mt-4 text-muted-foreground">Meet the experts behind TelecomInsider</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="relative aspect-square">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-center">Editorial Standards</h2>
          <div className="mt-8 prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground">
            <p className="text-muted-foreground leading-relaxed">
              At TelecomInsider, we are committed to maintaining the highest standards of journalistic integrity. Our
              editorial process includes:
            </p>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Fact-Checking:</strong> All articles undergo thorough fact-checking
                before publication.
              </li>
              <li>
                <strong className="text-foreground">Source Verification:</strong> We verify all sources and cite them
                appropriately.
              </li>
              <li>
                <strong className="text-foreground">Independence:</strong> Our editorial content is independent from our
                advertising relationships.
              </li>
              <li>
                <strong className="text-foreground">Corrections:</strong> We promptly correct any errors and maintain
                transparency about changes.
              </li>
              <li>
                <strong className="text-foreground">Disclosure:</strong> We clearly disclose any potential conflicts of
                interest.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Advertising Disclosure */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground text-center">Advertising Disclosure</h2>
          <div className="mt-6 text-center">
            <p className="text-muted-foreground leading-relaxed">
              TelecomInsider is supported by advertising revenue. We display third-party advertisements on our website
              to help fund our operations and continue providing free content to our readers. Our editorial content is
              produced independently of our advertising partners, and we maintain a clear separation between editorial
              and advertising content. Advertisements are clearly labeled as such.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              For more information about our data practices and how advertising works on our site, please review our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Have Questions?</h2>
            <p className="mt-4 text-muted-foreground">
              We would love to hear from you. Whether you have a question about our content, want to contribute, or have
              feedback to share, our team is here to help.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
