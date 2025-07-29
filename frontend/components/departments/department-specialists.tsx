import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Calendar } from "lucide-react"
import Link from "next/link"

export default function DepartmentSpecialists() {
  const specialists = [
    {
      id: 1,
      name: "Dr. Jean Mugabo",
      specialty: "Cardiology",
      hospital: "Kigali University Hospital",
      image: "/placeholder.svg?height=400&width=300&text=Dr.+Mugabo",
      rating: 4.9,
      reviewCount: 124,
      experience: "15+ years",
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
    },
    {
      id: 4,
      name: "Dr. Claire Mutesi",
      specialty: "Dermatology",
      hospital: "CHUK",
      image: "/placeholder.svg?height=400&width=300&text=Dr.+Mutesi",
      rating: 4.9,
      reviewCount: 112,
      experience: "14+ years",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Doctors</h2>
          <p className="text-gray-600">
            Our departments are staffed by experienced healthcare professionals dedicated to providing exceptional care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((specialist) => (
            <div
              key={specialist.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={specialist.image || "/placeholder.svg"}
                    alt={specialist.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-green-600 shadow-md">
                  {specialist.experience}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{specialist.name}</h3>
                <p className="text-green-600 font-medium">{specialist.specialty}</p>
                <p className="text-gray-500 text-sm">{specialist.hospital}</p>

                <div className="flex items-center mt-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-700 font-medium">{specialist.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-500 text-sm">{specialist.reviewCount} reviews</span>
                </div>

                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/doctors" className="inline-block">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            View All Doctors
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
