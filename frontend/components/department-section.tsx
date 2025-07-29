import Link from "next/link"
import Image from "next/image"

export default function DepartmentSection() {
  const departments = [
    { name: "Cardiology", icon: "❤️", image: "/cardiology.jpg" },
    { name: "Ophthalmology", icon: "👁️", image: "/ophtamology.jpg" },
    { name: "Dentistry", icon: "🔬", image: "/dentistry.png" },
    { name: "Antenatal", icon: "👶", image: "/antenatal.jpg" },
    { name: "Neurology", icon: "🧠", image: "/neurology.png" },
    { name: "Orthopedics", icon: "🦴", image: "/orthopedic.jpg" },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Medical Departments</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Access specialized care across multiple medical fields from Rwanda&apos;s top specialists
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {departments.map((dept, index) => (
            <Link href={`/departments/${dept.name.toLowerCase()}`} key={index} className="group">
              <div className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="relative w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={dept.image || "/placeholder.svg"}
                    alt={dept.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                  {dept.name}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/departments"
            className="inline-flex items-center text-green-600 font-medium hover:text-green-800"
          >
            View All Departments
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
