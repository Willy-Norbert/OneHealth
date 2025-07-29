import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare } from "lucide-react"

export default function DoctorsSection() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Jean Mugabo",
      specialty: "Cardiologist",
      hospital: "Kigali University Hospital",
      image: "/11.png",
      available: true,
    },
    {
      id: 2,
      name: "Dr. Marie Uwase",
      specialty: "Pediatrician",
      hospital: "Rwanda Children's Hospital",
      image: "/12.png",
      available: true,
    },
    {
      id: 3,
      name: "Dr. Eric Ndayishimiye",
      specialty: "Neurologist",
      hospital: "CHUK",
      image: "/13.png",
      available: false,
    },
    {
      id: 4,
      name: "Claire Mutesi",
      specialty: "Dentist",
      hospital: "Gakwerere's Dental Clinic",
      image: "/14.png",
      available: true,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Specialists </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Our network includes Rwanda&apos;s top medical professionals ready to provide you with exceptional care
            </p>
          </div>
          <Link
            href="/doctors"
            className="mt-4 md:mt-0 text-green-600 font-medium hover:text-green-700 flex items-center"
          >
            View all doctors
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative">
                  <div className="aspect-[3/4] relative">
                    <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                  </div>

                  {/* Availability badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                      doctor.available ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {doctor.available ? "Available Today" : "Unavailable"}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                          <Calendar className="h-4 w-4 mr-1" /> Book
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          <MessageSquare className="h-4 w-4 mr-1" /> Chat
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900">{doctor.name}</h3>
                  <p className="text-green-600 font-medium text-sm">{doctor.specialty}</p>
                  <p className="text-gray-500 text-sm mt-1">{doctor.hospital}</p>

                  <div className="mt-4 flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">4.9 (120 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
