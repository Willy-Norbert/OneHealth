import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { featuredPosts } from "@/lib/blog-data"

export default function FeaturedPosts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
          <Link href="/blog/featured" className="text-blue-600 hover:text-blue-800 font-medium">
            View All Featured
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 hover:bg-green-700">{post.category}</Badge>
                </div>
              </div>

              <div className="p-6">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
