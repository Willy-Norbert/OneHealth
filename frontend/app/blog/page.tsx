import type { Metadata } from "next"
import BlogHero from "@/components/blog/blog-hero"
import FeaturedPosts from "@/components/blog/featured-posts"
import BlogCategories from "@/components/blog/blog-categories"
import BlogListing from "@/components/blog/blog-listing"
import BlogSidebar from "@/components/blog/blog-sidebar"
import BlogCta from "@/components/blog/blog-cta"
import Newsletter from "@/components/blog/newsletter"

export const metadata: Metadata = {
  title: "Health Blog | ONE HEALTHLINE CONNECT",
  description:
    "Stay informed with the latest health tips, medical research, and wellness advice from ONE HEALTHLINE CONNECT's health experts.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen  m-10">
      <BlogHero />
      <FeaturedPosts />
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4">
            <BlogCategories />
            <BlogListing />
          </div>
          <div className="w-full lg:w-1/4">
            <BlogSidebar />
          </div>
        </div>
      </section>
      <Newsletter />
      <BlogCta />
    </main>
  )
}
