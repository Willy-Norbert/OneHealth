import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Pill, Truck, Clock, CreditCard } from "lucide-react"

export default function PharmacyService() {
  const features = [
    "Order medications from partner pharmacies",
    "Upload prescriptions directly through the app",
    "Compare medication prices across pharmacies",
    "Home delivery options available",
    "Medication reminders and tracking",
    "Refill notifications for recurring prescriptions",
  ]

  const pharmacies = [
    "Kigali Pharmacy",
    "Rwanda Pharmaceuticals",
    "Kimironko Pharmacy",
    "Nyamirambo Health Center Pharmacy",
    "Remera Pharmacy",
    "Muhima Hospital Pharmacy",
  ]

  return (
    <section id="pharmacy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>

            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Pharmacy+Services"
                    alt="Pharmacy Services"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Overlaid feature cards */}
                <div className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Truck className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Home Delivery</h4>
                    <p className="text-gray-500 text-xs">Within 3 hours in Kigali</p>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Medication Reminders</h4>
                    <p className="text-gray-500 text-xs">Never miss a dose</p>
                  </div>
                </div>

                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CreditCard className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Multiple Payment Options</h4>
                    <p className="text-gray-500 text-xs">Mobile money, cards, cash</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full mb-6">
              <Pill className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Pharmacy Services</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Order Medications from Partner Pharmacies</h2>
            <p className="text-gray-600 mb-8">
              Our pharmacy service allows you to order prescription and over-the-counter medications from partner
              pharmacies across Rwanda. Upload your prescription, compare prices, and have your medications delivered to
              your doorstep or pick them up at your convenience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Partner Pharmacies</h3>
              <div className="grid grid-cols-2 gap-4">
                {pharmacies.map((pharmacy, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">{pharmacy}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Order Medications <Pill className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                View Pharmacies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
