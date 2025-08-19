import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function BlogHero() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Health Knowledge Hub</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Stay informed with the latest health tips, medical research, and wellness advice from Rwanda&apos;s leading
            healthcare experts.
          </p>

          <div className="relative max-w-xl mx-auto">
            <div className="flex">
              <Input
                type="text"
                placeholder="Search for health topics..."
                className="w-full h-12 pl-4 pr-12 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="h-12 rounded-l-none bg-blue-800 hover:bg-blue-900">
                <Search className="h-5 w-5" />
                <span className="ml-2 hidden md:inline">Search</span>
              </Button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="text-sm font-medium mr-2">Popular Topics:</span>
            <Link
              href="/blog/category/covid-19"
              className="text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition"
            >
              COVID-19
            </Link>
            <Link
              href="/blog/category/mental-health"
              className="text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition"
            >
              Mental Health
            </Link>
            <Link
              href="/blog/category/nutrition"
              className="text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition"
            >
              Nutrition
            </Link>
            <Link
              href="/blog/category/maternal-health"
              className="text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition"
            >
              Maternal Health
            </Link>
            <Link
              href="/blog/category/fitness"
              className="text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition"
            >
              Fitness
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
