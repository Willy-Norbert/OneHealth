import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Calendar } from "lucide-react"
import { getSimilarDoctors } from "@/lib/doctor-data"

export default function SimilarDoctors({
  specialty,
  currentDoctorId,
}: {
  specialty: string
  currentDoctorId: string
}) {
  const similarDoctors = getSimilarDoctors(specialty, currentDoctorId)

  if (similarDoctors.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar {specialty} Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
                <div className="relative">
                  <div className="aspect-[3/2] relative">
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
                      <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                      <p className="text-green-600 font-medium text-sm">{doctor.specialty}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm mt-1">{doctor.hospital}</p>

                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <span>Next available: {doctor.nextAvailable}</span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Link href={`/doctors/${doctor.id}`}>
                      <Button variant="outline" className="w-full border-gray-200 hover:border-green-600">
                        View Profile
                      </Button>
                    </Link>
                    <Link href={`/doctors/${doctor.id}#appointment`}>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Calendar className="mr-2 h-4 w-4" /> Book
                      </Button>
                    </Link>
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
