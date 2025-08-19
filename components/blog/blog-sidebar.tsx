import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { blogCategories, popularPosts, blogTags } from "@/lib/blog-data"

export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-bold mb-4">Search</h3>
        <div className="relative">
          <Input type="text" placeholder="Search articles..." className="w-full pr-10" />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-bold mb-4">Categories</h3>
        <ul className="space-y-2">
          {blogCategories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/blog/category/${category.slug}`}
                className="flex justify-between items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>{category.name}</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-bold mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <div key={post.id} className="flex gap-3">
              <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-medium text-gray-800 hover:text-blue-600 transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-bold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {blogTags.map((tag) => (
            <Link
              key={tag.slug}
              href={`/blog/tag/${tag.slug}`}
              className="bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 px-3 py-1 rounded-full text-sm transition-colors"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
