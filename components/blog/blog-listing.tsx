import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-data"

export default function BlogListing() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 mb-12">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row">
            <div className="relative h-64 md:h-auto md:w-1/3">
              <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <div className="p-6 md:w-2/3">
              <div className="mb-3">
                <Badge className="bg-green-600 hover:bg-green-700">{post.category}</Badge>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
              </Link>

              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              <div className="flex items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
                    <Image
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <Button variant="outline" size="icon" disabled>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          4
        </Button>
        <Button variant="outline" size="sm">
          5
        </Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
