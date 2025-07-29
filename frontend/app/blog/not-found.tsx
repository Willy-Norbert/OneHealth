/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogNotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4 py-16">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Blog Post Not Found</h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
          The blog post you're looking for doesn't exist or has been moved to another location.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/blog">Return to Blog</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
