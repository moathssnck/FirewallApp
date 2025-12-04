import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const postContent = {
  "future-of-5g-2025": {
    title: "The Future of 5G: What to Expect in 2025",
    category: "5G Technology",
    date: "December 2, 2024",
    readTime: "8 min read",
    author: "TelecomInsider Team",
    image: "/5g-tower-network-technology-futuristic.jpg",
    content: `
      <p>The telecommunications industry is on the cusp of a major transformation as 5G technology continues to evolve and expand. As we look ahead to 2025, several key developments are set to reshape how we connect, communicate, and conduct business.</p>

      <h2>Enhanced Network Coverage</h2>
      <p>By 2025, 5G coverage is expected to reach over 60% of the global population. This expansion will bring high-speed connectivity to previously underserved areas, enabling new applications and services that were previously impossible.</p>

      <h2>Network Slicing Becomes Mainstream</h2>
      <p>Network slicing technology will enable telecom operators to create multiple virtual networks within a single physical infrastructure. This will allow for customized connectivity solutions tailored to specific industry needs, from healthcare to manufacturing.</p>

      <h2>Edge Computing Integration</h2>
      <p>The combination of 5G and edge computing will dramatically reduce latency, enabling real-time applications in autonomous vehicles, remote surgery, and augmented reality. This convergence represents one of the most significant technological advances of the decade.</p>

      <h2>Private 5G Networks</h2>
      <p>Enterprises will increasingly deploy private 5G networks to enhance their operations. These dedicated networks offer improved security, reliability, and control over connectivity, making them ideal for industrial applications.</p>

      <h2>Sustainability Focus</h2>
      <p>Telecom operators are prioritizing energy efficiency in their 5G deployments. New technologies and practices will reduce the environmental impact of network infrastructure while maintaining high performance standards.</p>

      <h2>Conclusion</h2>
      <p>The future of 5G is bright, with continued innovation and expansion set to transform industries and improve connectivity for billions of people worldwide. As we move into 2025, the telecommunications industry will play a crucial role in shaping the digital future.</p>
    `,
  },
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = postContent[params.slug as keyof typeof postContent]
  return {
    title: post ? `${post.title} - TelecomInsider` : "Article - TelecomInsider",
    description: post ? `Read about ${post.title} on TelecomInsider` : "Read the latest telecom news",
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = postContent[slug as keyof typeof postContent]

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Button asChild className="mt-4">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <article className="py-12">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <header className="mb-8">
          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground text-balance">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </header>

        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div
          className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            <strong>Disclaimer:</strong> The information provided in this article is for educational and informational
            purposes only. It does not constitute professional advice. Always consult with qualified professionals for
            specific guidance.
          </p>
        </div>
      </div>
    </article>
  )
}
