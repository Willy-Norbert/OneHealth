/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import BlogListing from "@/components/blog/blog-listing"
import BlogSidebar from "@/components/blog/blog-sidebar"
import BlogCta from "@/components/blog/blog-cta"
import Newsletter from "@/components/blog/newsletter"
import { blogAuthors } from "@/lib/blog-data"

interface PageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<any>
}

async function getAuthorFromParams(params: Promise<{ slug: string }>) {
  const { slug } = await params
  const author = blogAuthors.find((a) => a.name.toLowerCase().replace(" ", "-") === slug)
  if (!author) notFound()
  return author
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const author = await getAuthorFromParams(params)
  return {
    title: `Articles by ${author.name} | ONE HEALTHLINE CONNECT Blog`,
    description: `Browse articles written by ${author.name}, ${author.specialties.join(", ")} specialist at ONE HEALTHLINE CONNECT.`,
  }
}

export default async function BlogAuthorPage({ params }: PageProps) {
  const author = await getAuthorFromParams(params)

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-white">
              <Image src={author.avatar || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{author.name}</h1>
              <p className="text-lg opacity-90 mb-4">{author.specialties.join(" • ")}</p>
              <p className="opacity-90">{author.bio}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Articles by {author.name}</h2>
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
