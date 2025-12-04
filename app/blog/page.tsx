import { BlogCard } from "@/components/blog-card"
import { Badge } from "@/components/ui/badge"

const categories = ["All", "5G Technology", "Infrastructure", "Security", "Mobile Networks", "Industry News"]

const posts = [
  {
    title: "The Future of 5G: What to Expect in 2025",
    excerpt:
      "Exploring the next generation of mobile connectivity and its impact on telecommunications infrastructure worldwide.",
    category: "5G Technology",
    date: "Dec 2, 2024",
    slug: "future-of-5g-2025",
    image: "/5g-tower-network-technology.jpg",
  },
  {
    title: "Network Security Best Practices for Telecom",
    excerpt:
      "Essential security measures every telecommunications company should implement to protect their infrastructure.",
    category: "Security",
    date: "Dec 1, 2024",
    slug: "network-security-best-practices",
    image: "/network-security-cybersecurity.jpg",
  },
  {
    title: "Understanding Fiber Optic Infrastructure",
    excerpt: "A comprehensive guide to fiber optic networks and their role in modern telecommunications.",
    category: "Infrastructure",
    date: "Nov 28, 2024",
    slug: "fiber-optic-infrastructure-guide",
    image: "/fiber-optic-cables-technology.jpg",
  },
  {
    title: "Mobile Network Optimization Strategies",
    excerpt: "Learn how telecom providers optimize their networks for better performance and user experience.",
    category: "Mobile Networks",
    date: "Nov 25, 2024",
    slug: "mobile-network-optimization",
    image: "/mobile-network-optimization.jpg",
  },
  {
    title: "The Rise of Private 5G Networks",
    excerpt: "How enterprises are deploying private 5G networks to enhance their operations and security.",
    category: "5G Technology",
    date: "Nov 22, 2024",
    slug: "private-5g-networks",
    image: "/private-5g-network-enterprise.jpg",
  },
  {
    title: "Telecom Industry Trends for 2025",
    excerpt: "Key trends shaping the telecommunications industry and what they mean for businesses and consumers.",
    category: "Industry News",
    date: "Nov 20, 2024",
    slug: "telecom-trends-2025",
    image: "/telecom-industry-trends.jpg",
  },
]

export const metadata = {
  title: "Blog - TelecomInsider",
  description:
    "Latest telecommunications news, analysis, and insights on 5G, network infrastructure, and industry trends.",
}

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Latest news, insights, and analysis from the telecommunications industry
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}
