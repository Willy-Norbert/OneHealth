import Image from "next/image"
import { Star, Quote } from "lucide-react"

export default function PharmacyTestimonials() {
  const testimonials = [
    {
      name: "Jean Mutesi",
      location: "Kigali",
      image: "/placeholder.svg?height=100&width=100&text=JM",
      quote:
        "The medication delivery service has been life-changing for my mother who has diabetes. We no longer worry about running out of insulin as it's delivered right to our doorstep every month.",
      rating: 5,
    },
    {
      name: "Emmanuel Hakizimana",
      location: "Butare",
      image: "/placeholder.svg?height=100&width=100&text=EH",
      quote:
        "I was skeptical at first, but after using the service for my blood pressure medication, I'm impressed with the reliability and speed. The pharmacist consultation was also very helpful.",
      rating: 4,
    },
    {
      name: "Marie Claire Uwamahoro",
      location: "Musanze",
      image: "/placeholder.svg?height=100&width=100&text=MCU",
      quote:
        "Even though I live in a rural area, ONE HEALTHLINE CONNECT delivers my family's medications consistently. The packaging is secure and the delivery person is always professional.",
      rating: 5,
    },
  ]

  const stats = [
    { value: "98%", label: "On-time delivery" },
    { value: "50,000+", label: "Monthly deliveries" },
    { value: "4.8/5", label: "Customer satisfaction" },
    { value: "100%", label: "Medication authenticity" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-purple-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Thousands of Rwandans rely on our pharmacy service for their medication needs. Here&apos;s what they have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-purple-100" />

              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>

              <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-purple-600 rounded-xl p-10 text-white">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">Our Pharmacy Service in Numbers</h3>
            <p className="text-purple-100">We&apos;re committed to providing reliable medication services across Rwanda</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-purple-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
