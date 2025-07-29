import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Calendar, Clock, MapPin, Building } from "lucide-react"

export default function AppointmentService() {
  const features = [
    "Book appointments with specialists across Rwanda",
    "Choose between in-person or virtual appointments",
    "Receive appointment reminders via SMS and email",
    "Reschedule or cancel appointments with ease",
    "View doctor availability in real-time",
    "Access your appointment history",
  ]

  const hospitals = [
    "Kigali University Hospital",
    "Rwanda Military Hospital",
    "King Faisal Hospital",
    "Butaro Hospital",
    "Kibagabaga Hospital",
    "CHUK",
  ]

  return (
    <section id="appointments" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-100 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>

            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Appointment+Booking"
                    alt="Appointment Booking Service"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Overlaid feature cards */}
                <div className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Real-time Availability</h4>
                    <p className="text-gray-500 text-xs">See open slots instantly</p>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Location Options</h4>
                    <p className="text-gray-500 text-xs">In-person or virtual</p>
                  </div>
                </div>

                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Multiple Facilities</h4>
                    <p className="text-gray-500 text-xs">Hospitals across Rwanda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Appointment Booking</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Schedule Appointments with Top Healthcare Providers
            </h2>
            <p className="text-gray-600 mb-8">
              Our appointment booking service allows you to schedule visits with healthcare providers at your
              convenience. Whether you need a routine check-up or a specialist consultation, our platform makes it easy
              to find and book appointments with the right healthcare professional.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Partner Hospitals</h3>
              <div className="grid grid-cols-2 gap-4">
                {hospitals.map((hospital, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">{hospital}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700">
                Book an Appointment <Calendar className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                View Specialties
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
