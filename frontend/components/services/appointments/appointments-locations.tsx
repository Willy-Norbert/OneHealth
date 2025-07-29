import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react"

export default function AppointmentsLocations() {
  const locations = [
    {
      name: "HEALTHLINE Kigali Center",
      address: "KN 5 Rd, Kigali, Rwanda",
      phone: "+250 788 123 456",
      hours: "Mon-Sat: 8am-8pm, Sun: 9am-5pm",
      image: "/placeholder.svg?height=200&width=300&text=Kigali+Center",
      featured: true,
    },
    {
      name: "HEALTHLINE Butare Clinic",
      address: "Huye District, Southern Province, Rwanda",
      phone: "+250 788 234 567",
      hours: "Mon-Fri: 8am-6pm, Sat: 9am-3pm",
      image: "/placeholder.svg?height=200&width=300&text=Butare+Clinic",
      featured: false,
    },
    {
      name: "HEALTHLINE Musanze Hospital",
      address: "Musanze District, Northern Province, Rwanda",
      phone: "+250 788 345 678",
      hours: "24/7 Emergency Services",
      image: "/placeholder.svg?height=200&width=300&text=Musanze+Hospital",
      featured: false,
    },
    {
      name: "HEALTHLINE Rubavu Center",
      address: "Rubavu District, Western Province, Rwanda",
      phone: "+250 788 456 789",
      hours: "Mon-Sat: 8am-7pm, Sun: 10am-4pm",
      image: "/placeholder.svg?height=200&width=300&text=Rubavu+Center",
      featured: false,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Locations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book appointments at any of our state-of-the-art facilities across Rwanda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
                location.featured ? "ring-2 ring-green-500" : ""
              }`}
            >
              <div className="relative h-48">
                <Image src={location.image || "/placeholder.svg"} alt={location.name} fill className="object-cover" />
                {location.featured && (
                  <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{location.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">{location.phone}</p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                </div>
                <Button
                  variant={location.featured ? "default" : "outline"}
                  className={
                    location.featured
                      ? "bg-green-600 hover:bg-green-700 w-full"
                      : "border-green-600 text-green-600 hover:bg-green-50 w-full"
                  }
                >
                  Book at this Location
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Find a Location Near You</h3>
              <p className="text-gray-600">We have partner facilities throughout Rwanda to serve you better.</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              View All Locations <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
