import { Briefcase } from "lucide-react"
import type { Doctor } from "@/lib/doctor-data"

export default function DoctorExperience({ doctor }: { doctor: Doctor }) {
  // This is a simplified experience section
  // In a real app, you would have more detailed experience data
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {doctor.experienceYears}+ Years of Clinical Experience
                </h3>
                <p className="text-gray-600 mt-2">
                  Dr. {doctor.name.split(" ")[1]} has been practicing medicine for over {doctor.experienceYears} years,
                  specializing in {doctor.specialty.toLowerCase()} for most of that time. Throughout this career, the
                  doctor has gained extensive experience in diagnosing and treating a wide range of conditions related
                  to {doctor.specialty.toLowerCase()}.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Current Positions</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-gray-900 font-medium">
                      {doctor.specialty} Specialist at {doctor.hospital}
                    </p>
                    <p className="text-gray-500 text-sm">Present</p>
                  </div>
                </div>
                {doctor.locations.length > 1 && (
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="text-gray-900 font-medium">
                        Consulting {doctor.specialty} Specialist at {doctor.locations[1].name}
                      </p>
                      <p className="text-gray-500 text-sm">Present</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
