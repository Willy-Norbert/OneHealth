import { CheckCircle } from "lucide-react"
import type { Doctor } from "@/lib/doctor-data"

export default function DoctorExpertise({ doctor }: { doctor: Doctor }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {doctor.expertise.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {doctor.publications && doctor.publications.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Publications</h3>
                <ul className="space-y-3">
                  {doctor.publications.map((publication, index) => (
                    <li key={index} className="border-l-2 border-green-600 pl-4 py-1">
                      <p className="text-gray-900 font-medium">{publication.title}</p>
                      <p className="text-gray-600 text-sm">
                        {publication.journal}, {publication.year}
                      </p>
                      {publication.url && (
                        <a
                          href={publication.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm"
                        >
                          View Publication
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
