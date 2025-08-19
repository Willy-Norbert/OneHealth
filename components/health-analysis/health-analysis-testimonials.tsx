/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function HealthAnalysisTestimonials() {
  const testimonials = [
    {
      name: "Jean Mutesi",
      role: "Teacher",
      content:
        "The health analysis service provided me with valuable insights about my cardiovascular health that I wasn't aware of. The recommendations were practical and easy to implement in my daily routine.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emmanuel Hakizimana",
      role: "Business Owner",
      content:
        "As someone with a busy schedule, I appreciate how comprehensive yet straightforward the health analysis was. The follow-up consultation helped me understand exactly what steps to take to improve my health.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Marie Uwimana",
      role: "Healthcare Worker",
      content:
        "Even as a healthcare professional, I found the health analysis incredibly thorough and informative. It helped me identify subtle patterns in my health metrics that I had overlooked.",
      rating: 4,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">What Our Clients Say</h2>
          <p className="mb-12 text-lg text-gray-600">
            Hear from individuals who have benefited from our health analysis service and taken proactive steps toward
            better health.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-6 text-gray-600">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="mr-4 h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
