/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function DoctorTestimonials() {
  const testimonials = [
    {
      id: 1,
      patient: "Claudine Niyonzima",
      doctor: "Dr. Jean Mugabo",
      specialty: "Cardiology",
      image: "/placeholder.svg?height=100&width=100&text=CN",
      quote:
        "Dr. Mugabo is an exceptional cardiologist. He took the time to explain my condition in detail and made me feel at ease throughout my treatment. His expertise and compassionate care have significantly improved my heart health.",
      rating: 5,
    },
    {
      id: 2,
      patient: "Emmanuel Habimana",
      doctor: "Dr. Marie Uwase",
      specialty: "Pediatrics",
      image: "/placeholder.svg?height=100&width=100&text=EH",
      quote:
        "Dr. Uwase has been caring for my children for years. She is patient, knowledgeable, and has a wonderful way with kids. My children actually look forward to their doctor visits because of her friendly approach.",
      rating: 5,
    },
    {
      id: 3,
      patient: "Diane Mukasine",
      doctor: "Dr. Eric Ndayishimiye",
      specialty: "Neurology",
      image: "/placeholder.svg?height=100&width=100&text=DM",
      quote:
        "After suffering from migraines for years, Dr. Ndayishimiye finally helped me find relief. His thorough approach to diagnosis and treatment has made a tremendous difference in my quality of life.",
      rating: 4,
    },
    {
      id: 4,
      patient: "Jean-Paul Mugisha",
      doctor: "Dr. Claire Mutesi",
      specialty: "Dermatology",
      image: "/placeholder.svg?height=100&width=100&text=JM",
      quote:
        "Dr. Mutesi is a skilled dermatologist who helped clear my persistent skin condition after years of struggling. She is professional, attentive, and truly cares about her patients' well-being.",
      rating: 5,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-gray-600">
            Read testimonials from patients who have received care from our healthcare professionals
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Quote icon */}
            <div className="absolute -top-6 -left-6 bg-green-600 text-white p-4 rounded-full shadow-lg">
              <Quote className="h-6 w-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-green-100">
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].patient}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mt-4">{testimonials[activeIndex].patient}</h3>
                <p className="text-gray-500 text-sm">Patient of {testimonials[activeIndex].doctor}</p>
                <p className="text-green-600 text-sm">{testimonials[activeIndex].specialty}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ${
                        i < testimonials[activeIndex].rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <blockquote className="text-gray-700 text-lg italic leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full ${index === activeIndex ? "bg-green-600" : "bg-gray-300"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
