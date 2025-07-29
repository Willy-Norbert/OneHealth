import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Phone, Ambulance, HeartPulse, MapPin } from "lucide-react"

export default function EmergencyService() {
  const features = [
    "24/7 emergency assistance hotline",
    "Ambulance dispatch services",
    "GPS location tracking for faster response",
    "Direct connection to emergency rooms",
    "First aid guidance over the phone",
    "Emergency contact notification",
  ]

  const emergencyTypes = [
    "Medical Emergencies",
    "Accidents & Injuries",
    "Cardiac Events",
    "Respiratory Distress",
    "Severe Allergic Reactions",
    "Pregnancy Complications",
  ]

  return (
    <section id="emergency" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full mb-6">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Emergency Services</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Immediate Assistance When Every Minute Counts</h2>
            <p className="text-gray-600 mb-8">
              Our emergency services provide immediate assistance during critical situations. With just a tap on your
              phone, you can request emergency medical help, dispatch an ambulance, and receive guidance while help is
              on the way.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-red-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Emergency Types We Handle</h3>
              <div className="grid grid-cols-2 gap-4">
                {emergencyTypes.map((type, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                Emergency Assistance <Phone className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Learn More
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-100 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>

            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Emergency+Services"
                    alt="Emergency Services"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Overlaid feature cards */}
                <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Ambulance className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Ambulance Dispatch</h4>
                    <p className="text-gray-500 text-xs">Average arrival: 15 min</p>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <HeartPulse className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Medical Guidance</h4>
                    <p className="text-gray-500 text-xs">First aid instructions</p>
                  </div>
                </div>

                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">GPS Tracking</h4>
                    <p className="text-gray-500 text-xs">Precise location sharing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
