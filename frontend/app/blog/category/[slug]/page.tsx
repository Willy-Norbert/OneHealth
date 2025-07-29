/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogHero from "@/components/blog/blog-hero"
import BlogListing from "@/components/blog/blog-listing"
import BlogSidebar from "@/components/blog/blog-sidebar"
import BlogCta from "@/components/blog/blog-cta"
import Newsletter from "@/components/blog/newsletter"
import { blogCategories } from "@/lib/blog-data"

interface PageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<any>
}

async function getCategoryFromParams(params: Promise<{ slug: string }>) {
  const { slug } = await params
  const category = blogCategories.find((cat) => cat.slug === slug)
  if (!category) notFound()
  return category
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = await getCategoryFromParams(params)

  return {
    title: `${category.name} Articles | ONE HEALTHLINE CONNECT Blog`,
    description: `Browse our collection of articles about ${category.name.toLowerCase()} from ONE HEALTHLINE CONNECT's health experts.`,
  }
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const category = await getCategoryFromParams(params)

  return (
    <main className="min-h-screen">
      <BlogHero />
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Category: {category.name}</h2>
          <p className="text-gray-600 mt-2">
            Browse our collection of articles about {category.name.toLowerCase()} from ONE HEALTHLINE CONNECT&apos;s health
            experts.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4">
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
