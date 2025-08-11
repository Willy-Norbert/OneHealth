// app\blog\[slug]\page.tsx
 
 
import { Input } from "@/components/ui/input"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, Facebook, Twitter, Linkedin, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import BlogSidebar from "@/components/blog/blog-sidebar"
import RelatedPosts from "@/components/blog/related-posts"
import BlogCta from "@/components/blog/blog-cta"
import { blogPosts } from "@/lib/blog-data"


interface PageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<any>
}

async function getBlogFromParams(params: Promise<{ slug: string }>) {
  const { slug } = await params
  const post = blogPosts.find((post) => post.slug === slug)
  if (!post) notFound()
  return post
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getBlogFromParams(params)
  return {
    title: `${post.title} | ONE HEALTHLINE CONNECT Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getBlogFromParams(params)

  return (
    <main className="min-h-screen">
      <article>
        {/* Hero */}
        <div className="relative h-[40vh] md:h-[60vh] w-full">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <Badge className="mb-4 bg-green-600 hover:bg-green-700">{post.category}</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl">{post.title}</h1>
              <div className="flex items-center text-white/90 gap-6">
                <div className="flex items-center">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-3/4">
              {/* Social Share */}
              <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
                <span className="font-medium">Share this article:</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="lead">{post.excerpt}</p>

                <h2>Understanding {post.title.split(" ").slice(0, 2).join(" ")}</h2>

                <p>
                  Healthcare in Rwanda has seen remarkable progress over the past two decades. The country has
                  implemented innovative solutions to address healthcare challenges, making it a model for other
                  developing nations. From community health workers to digital health initiatives, Rwanda's approach to
                  healthcare delivery is comprehensive and forward-thinking.
                </p>

                <p>
                  The integration of technology in healthcare delivery has been a game-changer for Rwanda. Mobile health
                  applications, telemedicine, and electronic health records have improved access to healthcare services,
                  especially in rural areas. These technological advancements have also enhanced the efficiency of
                  healthcare delivery and improved patient outcomes.
                </p>

                <h2>Key Considerations for Rwandan Healthcare</h2>

                <p>
                  When discussing healthcare in Rwanda, it's important to consider the unique challenges and
                  opportunities that exist. The country's geography, demographics, and economic context all influence
                  how healthcare is delivered and accessed. Understanding these factors is crucial for developing
                  effective healthcare solutions.
                </p>

                <ul>
                  <li>
                    <strong>Accessibility:</strong> Ensuring healthcare services are accessible to all Rwandans,
                    regardless of location or socioeconomic status.
                  </li>
                  <li>
                    <strong>Quality:</strong> Maintaining high standards of care across all healthcare facilities.
                  </li>
                  <li>
                    <strong>Affordability:</strong> Making healthcare services affordable for all Rwandans.
                  </li>
                  <li>
                    <strong>Sustainability:</strong> Developing healthcare systems that are sustainable in the long
                    term.
                  </li>
                </ul>

                <h2>The Future of Healthcare in Rwanda</h2>

                <p>
                  The future of healthcare in Rwanda looks promising. With continued investment in healthcare
                  infrastructure, technology, and human resources, the country is well-positioned to achieve its
                  healthcare goals. The integration of artificial intelligence, big data, and other emerging
                  technologies will further enhance healthcare delivery and improve patient outcomes.
                </p>

                <p>
                  As Rwanda continues to develop its healthcare system, it's important to maintain a focus on equity,
                  quality, and sustainability. By addressing these key areas, Rwanda can build on its healthcare
                  successes and continue to improve the health and wellbeing of its population.
                </p>

                <blockquote>
                  "The progress we've made in healthcare is a testament to our commitment to the wellbeing of all
                  Rwandans. But our work is not done. We must continue to innovate and improve to ensure that every
                  Rwandan has access to quality healthcare services." - Rwandan Health Official
                </blockquote>

                <h2>Conclusion</h2>

                <p>
                  Healthcare in Rwanda has come a long way, but there's still work to be done. By continuing to invest
                  in healthcare infrastructure, technology, and human resources, Rwanda can build on its successes and
                  address remaining challenges. With a commitment to equity, quality, and sustainability, Rwanda can
                  achieve its vision of universal health coverage and improved health outcomes for all its citizens.
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8">
                <h3 className="font-bold mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase().replace(" ", "-")}`}
                      className="bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">About {post.author.name}</h3>
                    <p className="text-gray-600 mt-2">
                      {post.author.bio ||
                        `${post.author.name} is a healthcare professional with expertise in ${post.category.toLowerCase()} and related fields. With years of experience in the Rwandan healthcare system, they provide valuable insights and practical advice for better health outcomes.`}
                    </p>
                    <Link
                      href={`/blog/author/${post.author.name.toLowerCase().replace(" ", "-")}`}
                      className="text-blue-600 hover:text-blue-800 font-medium mt-2 inline-block"
                    >
                      View all posts by {post.author.name}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Comments Section Placeholder */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Comments (3)</h3>
                <div className="space-y-6">
                  {/* Comment placeholders */}
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">Jean Mutesi</h4>
                          <span className="text-xs text-gray-500">2 days ago</span>
                        </div>
                        <p className="mt-2 text-gray-700">
                          This article was very informative. I've been looking for clear information about healthcare
                          options in Rwanda, and this really helped me understand what's available.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">Emmanuel Hakizimana</h4>
                          <span className="text-xs text-gray-500">1 week ago</span>
                        </div>
                        <p className="mt-2 text-gray-700">
                          I appreciate the detailed explanation of how the healthcare system works. It's made me more
                          confident about seeking medical care when needed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">Alice Uwimana</h4>
                          <span className="text-xs text-gray-500">2 weeks ago</span>
                        </div>
                        <p className="mt-2 text-gray-700">
                          Thank you for addressing the challenges in rural healthcare access. As someone living outside
                          Kigali, I've experienced these issues firsthand. It's good to see them being discussed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment Form */}
                <div className="mt-8">
                  <h4 className="font-bold mb-4">Leave a Comment</h4>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Your Name" required />
                      <Input type="email" placeholder="Your Email" required />
                    </div>
                    <textarea
                      className="w-full p-3 border rounded-md min-h-[120px]"
                      placeholder="Your Comment"
                      required
                    ></textarea>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                      Post Comment
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </article>

      <Separator />

      <RelatedPosts currentPostId={post.id} category={post.category} />

      <BlogCta />
    </main>
  )
}
