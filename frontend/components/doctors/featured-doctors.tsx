import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Calendar, Video, MapPin } from "lucide-react"

export default function FeaturedDoctors() {
  const featuredDoctors = [
    {
      id: 1,
      name: "Dr. Jean Mugabo",
      specialty: "Cardiology",
      hospital: "Kigali University Hospital",
      image: "/placeholder.svg?height=400&width=300&text=Dr.+Mugabo",
      rating: 4.9,
      reviewCount: 124,
      experience: "15+ years",
      education: "MD, University of Rwanda",
      languages: ["English", "Kinyarwanda", "French"],
      consultationFee: "30,000 RWF",
      availableToday: true,
    },
    {
      id: 2,
      name: "Dr. Marie Uwase",
      specialty: "Pediatrics",
      hospital: "Rwanda Children's Hospital",
      image: "/placeholder.svg?height=400&width=300&text=Dr.+Uwase",
      rating: 4.8,
      reviewCount: 98,
      experience: "12+ years",
      education: "MD, University of Nairobi",
      languages: ["English", "Kinyarwanda"],
      consultationFee: "25,000 RWF",
      availableToday: true,
    },
    {
      id: 3,
      name: "Dr. Eric Ndayishimiye",
      specialty: "Neurology",
      hospital: "Butaro Hospital",
      image: "/placeholder.svg?height=400&width=300&text=Dr.+Ndayishimiye",
      rating: 4.7,
      reviewCount: 86,
      experience: "10+ years",
      education: "MD, University of Rwanda",
      languages: ["English", "Kinyarwanda", "French"],
      consultationFee: "35,000 RWF",
      availableToday: false,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Specialists</h2>
          <p className="text-gray-600">
            Meet our top-rated healthcare professionals with exceptional expertise and patient satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <div className="relative">
                <div className="aspect-[3/4] relative">
                  <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                </div>
                {doctor.availableToday && (
                  <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    Available Today
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                    <p className="text-green-600 font-medium">{doctor.specialty}</p>
                  </div>
                  <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-md">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mt-1">{doctor.hospital}</p>

                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Experience</span>
                    <span className="text-gray-900 font-medium">{doctor.experience}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Education</span>
                    <span className="text-gray-900 font-medium">{doctor.education}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Languages</span>
                    <span className="text-gray-900 font-medium">{doctor.languages.join(", ")}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Consultation Fee</span>
                    <span className="text-gray-900 font-medium">{doctor.consultationFee}</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Calendar className="mr-2 h-4 w-4" /> Book
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Video className="mr-2 h-4 w-4" /> Consult
                  </Button>
                </div>

                <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" /> Available for in-person & virtual
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            View All Featured Specialists
          </Button>
        </div>
      </div>
    </section>
  )
}
