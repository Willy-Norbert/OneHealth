import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Pill, ArrowRight, Search } from "lucide-react"

export default function PharmacyHero() {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-50 rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-full opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full mb-4">
              <Pill className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Pharmacy Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Medications <span className="text-purple-600">Delivered</span> To Your Doorstep
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Order prescription and over-the-counter medications from partner pharmacies across Rwanda. Upload your
              prescription, compare prices, and have your medications delivered to your home.
            </p>

            {/* Search bar */}
            <div className="relative mt-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                placeholder="Search for medications..."
              />
              <Button className="absolute right-1.5 top-1.5 bg-purple-600 hover:bg-purple-700">Search</Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Order Medications <Pill className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                Upload Prescription <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>

            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Pharmacy+Services"
                    alt="Pharmacy and medication delivery services"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-white text-2xl font-bold">50+</p>
                      <p className="text-white/80 text-sm">Pharmacies</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white text-2xl font-bold">3 hrs</p>
                      <p className="text-white/80 text-sm">Delivery Time</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white text-2xl font-bold">1000+</p>
                      <p className="text-white/80 text-sm">Medications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg">
              Free Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
