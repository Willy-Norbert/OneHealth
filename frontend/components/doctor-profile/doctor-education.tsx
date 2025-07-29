import { GraduationCap, Award } from "lucide-react"
import type { Doctor } from "@/lib/doctor-data"

export default function DoctorEducation({ doctor }: { doctor: Doctor }) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education & Training</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-green-600" />
                Education
              </h3>
              <div className="space-y-4">
                {doctor.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-4 py-1">
                    <p className="text-gray-900 font-medium">{edu.degree}</p>
                    <p className="text-gray-600">
                      {edu.institution}, {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-blue-600" />
                Training & Residency
              </h3>
              <div className="space-y-4">
                {doctor.training.map((training, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-4 py-1">
                    <p className="text-gray-900 font-medium">{training.program}</p>
                    <p className="text-gray-600">
                      {training.institution}, {training.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
              <ul className="space-y-2">
                {doctor.certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
