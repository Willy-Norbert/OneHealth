import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, ExternalLink } from "lucide-react"

export default function ContactLocations() {
  const locations = [
    {
      id: 1,
      name: "ONE HEALTHLINE CONNECT Headquarters",
      address: "KG 123 St, Kigali, Rwanda",
      phone: "+250 788 123 456",
      image: "/placeholder.svg?height=300&width=500&text=Kigali+Headquarters",
      mapUrl: "https://maps.google.com",
    },
    {
      id: 2,
      name: "Butaro Branch Office",
      address: "Near Butaro Hospital, Burera District, Rwanda",
      phone: "+250 788 234 567",
      image: "/placeholder.svg?height=300&width=500&text=Butaro+Branch",
      mapUrl: "https://maps.google.com",
    },
    {
      id: 3,
      name: "Muhima Service Center",
      address: "KN 2 Ave, Muhima, Kigali, Rwanda",
      phone: "+250 788 345 678",
      image: "/placeholder.svg?height=300&width=500&text=Muhima+Center",
      mapUrl: "https://maps.google.com",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2>
          <p className="text-gray-600">
            Visit one of our physical locations for in-person assistance with our healthcare services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image src={location.image || "/placeholder.svg"} alt={location.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{location.name}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">{location.address}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">{location.phone}</span>
                  </div>
                </div>
                <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    View on Map <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
