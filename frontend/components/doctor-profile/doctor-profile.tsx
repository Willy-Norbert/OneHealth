import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Video, Star, MapPin, Languages, Award, FileText, Clock } from "lucide-react"
import type { Doctor } from "@/lib/doctor-data"

export default function DoctorProfile({ doctor }: { doctor: Doctor }) {
  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Doctor Image and Quick Actions */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <div className="relative">
                <div className="aspect-square relative">
                  <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                </div>
                {doctor.availableToday && (
                  <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    Available Today
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-bold text-gray-900">{doctor.rating}</span>
                    <span className="ml-1 text-gray-500">({doctor.reviewCount} reviews)</span>
                  </div>
                  <div className="text-gray-500 text-sm">{doctor.experience}</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                    <div>
                      <p className="text-gray-900 font-medium">Primary Location</p>
                      <p className="text-gray-600 text-sm">{doctor.locations[0].name}</p>
                      <p className="text-gray-600 text-sm">{doctor.locations[0].address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Languages className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                    <div>
                      <p className="text-gray-900 font-medium">Languages</p>
                      <p className="text-gray-600 text-sm">{doctor.languages.join(", ")}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                    <div>
                      <p className="text-gray-900 font-medium">Next Available</p>
                      <p className="text-gray-600 text-sm">{doctor.nextAvailable}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FileText className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                    <div>
                      <p className="text-gray-900 font-medium">Consultation Fee</p>
                      <p className="text-gray-600 text-sm">{doctor.consultationFee}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                  </Button>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Video className="mr-2 h-4 w-4" /> Virtual Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Doctor Information */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {doctor.specialty}
                  </span>
                  {doctor.subspecialties?.map((subspecialty, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {subspecialty}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mt-2">{doctor.hospital}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-3">About</h2>
                <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
              </div>

              {doctor.awards && doctor.awards.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Awards & Recognition</h2>
                  <ul className="space-y-2">
                    {doctor.awards.map((award, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-5 w-5 text-yellow-500 mt-0.5 mr-3" />
                        <div>
                          <p className="text-gray-900">{award.title}</p>
                          <p className="text-gray-500 text-sm">{award.year}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Professional Memberships</h2>
                <ul className="space-y-1">
                  {doctor.professionalMemberships.map((membership, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                      <span className="text-gray-700">{membership}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Insurance Accepted</h2>
                <div className="flex flex-wrap gap-2">
                  {doctor.insuranceAccepted.map((insurance, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {insurance}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
