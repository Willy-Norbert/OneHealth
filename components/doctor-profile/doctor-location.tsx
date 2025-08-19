import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink } from "lucide-react"
import type { Doctor } from "@/lib/doctor-data"

export default function DoctorLocation({ doctor }: { doctor: Doctor }) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Locations</h2>
          <div className="space-y-8">
            {doctor.locations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{location.name}</h3>
                    <div className="flex items-start mb-4">
                      <MapPin className="h-5 w-5 text-green-600 mt-0.5 mr-2" />
                      <div>
                        <p className="text-gray-700">{location.address}</p>
                        <p className="text-gray-700">{location.city}, Rwanda</p>
                      </div>
                    </div>
                    <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                        View on Map <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                  <div className="md:w-1/2 h-48 md:h-auto relative rounded-lg overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&text=${location.name.replace(/\s+/g, "+")}`}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
