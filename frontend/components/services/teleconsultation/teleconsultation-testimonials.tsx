import Image from "next/image"
import { Star } from "lucide-react"

export default function TeleconsultationTestimonials() {
  const testimonials = [
    {
      name: "Jean Mutesi",
      location: "Kigali",
      image: "/placeholder.svg?height=100&width=100&text=JM",
      rating: 5,
      testimonial:
        "The teleconsultation service saved me so much time. I was able to speak with a doctor within 15 minutes for my child's fever, and received a prescription that was delivered to my home. Excellent service!",
      service: "Pediatric Consultation",
    },
    {
      name: "Emmanuel Hakizimana",
      location: "Musanze",
      image: "/placeholder.svg?height=100&width=100&text=EH",
      rating: 5,
      testimonial:
        "Living in a rural area, it's difficult to access specialist care. Through ONE HEALTHLINE CONNECT, I was able to consult with a cardiologist without traveling to Kigali. The video quality was excellent and the doctor was very thorough.",
      service: "Cardiology Consultation",
    },
    {
      name: "Marie Claire Uwamahoro",
      location: "Huye",
      image: "/placeholder.svg?height=100&width=100&text=MCU",
      rating: 4,
      testimonial:
        "I've been using the monthly plan for my chronic condition management. Being able to speak with my doctor regularly without visiting the hospital has made managing my health so much easier. Highly recommended!",
      service: "Chronic Disease Management",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-gray-600">
            Hear from patients who have experienced our teleconsultation services firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">&quot;{testimonial.testimonial}&quot;</p>
              <div className="text-sm text-blue-600 font-medium">{testimonial.service}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
            Read more patient testimonials →
          </a>
        </div>
      </div>
    </section>
  )
}
