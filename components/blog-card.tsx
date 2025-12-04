import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  date: string
  slug: string
  image: string
}

export function BlogCard({ title, excerpt, category, date, slug, image }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/blog/${slug}`}>
        <div className="relative aspect-video">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{category}</Badge>
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>
          <h3 className="mt-2 text-lg font-semibold text-foreground line-clamp-2">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
        </CardContent>
      </Link>
    </Card>
  )
}
