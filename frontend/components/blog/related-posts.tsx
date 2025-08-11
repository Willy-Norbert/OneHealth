import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-data"

interface RelatedPostsProps {
  currentPostId: string
  category: string
}

export default function RelatedPosts({ currentPostId, category }: RelatedPostsProps) {
  // Get posts in the same category, excluding the current post
  const relatedPosts = blogPosts.filter((post) => post.category === category && post.id !== currentPostId).slice(0, 3)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Related Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            View All Articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
