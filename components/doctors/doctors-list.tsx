"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Calendar, Video, MapPin, Clock, Award, GraduationCap, Languages } from "lucide-react"

interface Doctor {
  id: number
  name: string
  specialty: string
  hospital: string
  image: string
  rating: number
  reviewCount: number
  experience: string
  education: string
  languages: string[]
  consultationFee: string
  availableToday: boolean
  nextAvailable: string
}

export default function DoctorsList() {
  const [viewMode, setViewMode] = useState("grid") // grid or list

  const doctors = [
    {
      id: 1,
      name: "Dr. Claire Mutesi",
      specialty: "Dermatology",
      hospital: "CHUK",
      image: "/placeholder.svg?height=400&width=300&text=Dr.+Mutesi",
      rating: 4.9,
      reviewCount: 112,
      experience: "14+ years",
      education: "MD, University of Rwanda",
      languages: ["English", "Kinyarwanda"],
      consultationFee: "30,000 RWF",
      availableToday: true,
      nextAvailable: "Today at 2:00 PM",
    },
    {
      id: 2,
      name: "Dr. Patrick Habimana",
      specialty: "General Medicine",
      hospital: "King Faisal Hospital",
      image: "/placeholder.svg?height=400&width=300&text=Dr.+Habimana",
      rating: 4.6,
      reviewCount: 75,
      experience: "8+ years",
      education: "MD, University of Rwanda",
      languages: ["English", "Kinyarwanda", "Swahili"],
      consultationFee: "20,000 RWF",
      availableToday: true,
      nextAvailable: "Today at 4:30 PM",
    },
    {
      id: 3,
      name: "Dr. Diane Karenzi",
      specialty: "Orthopedics",
      hospital: "Rwanda Military Hospital",
      image: "/placeholder.svg?height=400&width=300&text=Dr.+Karenzi",
      rating: 4.8,
      reviewCount: 92,
      experience: "11+ years",
      education: "MD, University of Cape Town",
      languages: ["English", "Kinyarwanda", "French"],
      consultationFee: "35,000 RWF",
      availableToday: false,
      nextAvailable: "Tomorrow at 10:00 AM",
    },
    {
      id: 4,
      name: "Dr. Emmanuel Nkusi",
      specialty: "Ophthalmology",
      hospital: "CHUK Eye Center",
      image: "/placeholder.svg?height=400&width=300&text=Dr.+Nkusi",
      rating: 4.7,
      reviewCount: 88,
      experience: "9+ years",
      education: "MD, Makerere University",
      languages: ["English", "Kinyarwanda"],
      consultationFee: "28,000 RWF",
      availableToday: false,
      nextAvailable: "Friday at 1:00 PM",
    },
    {
      id: 5,
      name: "Dr. Alice Mukamana",
      specialty: "Obstetrics & Gynecology",
      hospital: "Kigali University Hospital",
      image: "/placeholder.svg?height=400&width=300&text=Dr.+Mukamana",
      rating: 4.9,
      reviewCount: 136,
      experience: "16+ years",
      education: "MD, University of Nairobi",
      languages: ["English", "Kinyarwanda", "French"],
      consultationFee: "32,000 RWF",
      availableToday: true,
      nextAvailable: "Today at 11:30 AM",
    },
    {
      id: 6,
      name: "Dr. James Gasana",
      specialty: "Psychiatry",
      hospital: "Ndera Neuropsychiatric Hospital",
      image: "/placeholder.svg?height=400&width=300&text=Dr.+Gasana",
      rating: 4.8,
      reviewCount: 104,
      experience: "12+ years",
      education: "MD, University of Rwanda",
      languages: ["English", "Kinyarwanda"],
      consultationFee: "30,000 RWF",
      availableToday: false,
      nextAvailable: "Monday at 9:00 AM",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Healthcare Professionals</h2>
          <p className="text-gray-600">
            Browse our network of qualified doctors and specialists available for consultations and appointments
          </p>
        </div>

        <div className="mb-8 flex justify-between items-center">
          <div className="text-gray-500">Showing {doctors.length} doctors</div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">View:</span>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md ${
                viewMode === "grid" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"
              }`}
              aria-label="Grid view"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md ${
                viewMode === "list" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"
              }`}
              aria-label="List view"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <DoctorGridCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {doctors.map((doctor) => (
              <DoctorListCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="py-2 px-4 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-l-md"
            >
              Previous
            </a>
            <a href="#" className="py-2 px-4 bg-green-600 text-white border border-green-600">
              1
            </a>
            <a href="#" className="py-2 px-4 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50">
              2
            </a>
            <a href="#" className="py-2 px-4 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50">
              3
            </a>
            <a
              href="#"
              className="py-2 px-4 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-r-md"
            >
              Next
            </a>
          </nav>
        </div>
      </div>
    </section>
  )
}

function DoctorGridCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
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
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-md">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-1">{doctor.hospital}</p>

        <div className="mt-4 flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>Next available: {doctor.nextAvailable}</span>
        </div>

        <div className="mt-4 flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span>
            {doctor.consultationFee} · {doctor.languages.join(", ")}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button className="bg-green-600 hover:bg-green-700">
            <Calendar className="mr-2 h-4 w-4" /> Book
          </Button>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Video className="mr-2 h-4 w-4" /> Consult
          </Button>
        </div>
      </div>
    </div>
  )
}

function DoctorListCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
      <div className="p-6 flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <div className="relative h-48 md:h-full w-full md:w-48 rounded-lg overflow-hidden">
            <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
            {doctor.availableToday && (
              <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                Available Today
              </div>
            )}
          </div>
        </div>

        <div className="md:w-2/4 md:px-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
              <p className="text-green-600 font-medium">{doctor.specialty}</p>
              <p className="text-gray-500 text-sm mt-1">{doctor.hospital}</p>
            </div>
            <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-md">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
              <span className="ml-1 text-xs text-gray-500">({doctor.reviewCount})</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex items-center text-sm">
              <Award className="h-4 w-4 text-gray-400 mr-2" />
              <span>{doctor.experience}</span>
            </div>
            <div className="flex items-center text-sm">
              <GraduationCap className="h-4 w-4 text-gray-400 mr-2" />
              <span>{doctor.education}</span>
            </div>
            <div className="flex items-center text-sm">
              <Languages className="h-4 w-4 text-gray-400 mr-2" />
              <span>{doctor.languages.join(", ")}</span>
            </div>
          </div>

          <div className="mt-4 flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>Next available: {doctor.nextAvailable}</span>
          </div>
        </div>

        <div className="md:w-1/4 mt-4 md:mt-0 flex flex-col justify-between">
          <div className="text-right">
            <p className="text-gray-900 font-bold">{doctor.consultationFee}</p>
            <p className="text-gray-500 text-sm">Consultation Fee</p>
          </div>

          <div className="mt-6 space-y-3">
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
  )
}
