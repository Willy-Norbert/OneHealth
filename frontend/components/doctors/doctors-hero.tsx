import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function DoctorsHero() {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-50 dark:bg-green-900/20 rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 dark:bg-blue-900/20 rounded-tr-full opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Meet Our <span className="text-green-600 dark:text-green-400">Expert</span> Healthcare Professionals
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              Connect with Rwanda&apos;s top medical specialists for consultations, appointments, and personalized care.
            </p>

            {/* Quick Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for a doctor or specialty..."
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:text-white dark:placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button variant="outline" className="border-gray-200 hover:border-green-600 hover:text-green-600">
                Cardiologists
              </Button>
              <Button variant="outline" className="border-gray-200 hover:border-green-600 hover:text-green-600">
                Pediatricians
              </Button>
              <Button variant="outline" className="border-gray-200 hover:border-green-600 hover:text-green-600">
                Neurologists
              </Button>
              <Button variant="outline" className="border-gray-200 hover:border-green-600 hover:text-green-600">
                General Practitioners
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Healthcare+Professionals"
                  alt="Healthcare Professionals"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-green-900/30"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h2 className="text-2xl font-bold text-white">Expert Care</h2>
                <p className="text-white/90">100+ specialists available</p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
              Verified Specialists
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg">
              Book Instantly
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
