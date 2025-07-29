import Link from "next/link"
import Image from "next/image"

export default function DepartmentsOverview() {
  const departments = [
    {
      id: "cardiology",
      name: "Cardiology",
      icon: "❤️",
      image: "/placeholder.svg?height=100&width=100&text=Cardiology",
      description: "Diagnosis and treatment of heart diseases and cardiovascular conditions",
    },
    {
      id: "pediatrics",
      name: "Pediatrics",
      icon: "👶",
      image: "/placeholder.svg?height=100&width=100&text=Pediatrics",
      description: "Medical care for infants, children, and adolescents",
    },
    {
      id: "orthopedics",
      name: "Orthopedics",
      icon: "🦴",
      image: "/placeholder.svg?height=100&width=100&text=Orthopedics",
      description: "Treatment of musculoskeletal system including bones, joints, and muscles",
    },
    {
      id: "neurology",
      name: "Neurology",
      icon: "🧠",
      image: "/placeholder.svg?height=100&width=100&text=Neurology",
      description: "Diagnosis and treatment of disorders of the nervous system",
    },
    {
      id: "dermatology",
      name: "Dermatology",
      icon: "🧬",
      image: "/placeholder.svg?height=100&width=100&text=Dermatology",
      description: "Medical care for skin, hair, and nail conditions",
    },
    {
      id: "ophthalmology",
      name: "Ophthalmology",
      icon: "👁️",
      image: "/placeholder.svg?height=100&width=100&text=Ophthalmology",
      description: "Diagnosis and treatment of eye disorders and vision problems",
    },
    {
      id: "ent",
      name: "ENT",
      icon: "👂",
      image: "/placeholder.svg?height=100&width=100&text=ENT",
      description: "Treatment of ear, nose, throat, head and neck disorders",
    },
    {
      id: "gynecology",
      name: "Gynecology",
      icon: "👩",
      image: "/placeholder.svg?height=100&width=100&text=Gynecology",
      description: "Women's reproductive health and pregnancy care",
    },
    {
      id: "urology",
      name: "Urology",
      icon: "🔬",
      image: "/placeholder.svg?height=100&width=100&text=Urology",
      description: "Diagnosis and treatment of urinary tract and male reproductive system",
    },
    {
      id: "psychiatry",
      name: "Psychiatry",
      icon: "🧠",
      image: "/placeholder.svg?height=100&width=100&text=Psychiatry",
      description: "Mental health care including therapy and medication management",
    },
    {
      id: "dentistry",
      name: "Dentistry",
      icon: "😁",
      image: "/placeholder.svg?height=100&width=100&text=Dentistry",
      description: "Oral health care, preventive and restorative dental treatments",
    },
    {
      id: "nutrition",
      name: "Nutrition",
      icon: "🥗",
      image: "/placeholder.svg?height=100&width=100&text=Nutrition",
      description: "Dietary guidance and nutritional therapy for various health conditions",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Medical Departments</h2>
          <p className="text-gray-600">
            ONE HEALTHLINE CONNECT offers access to a wide range of medical specialties to address all your healthcare needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <Link href={`/departments/${dept.id}`} key={dept.id} className="group">
              <div className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="relative w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={dept.image || "/placeholder.svg"}
                    alt={dept.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                  {dept.name}
                </h3>
                <p className="text-sm text-gray-500 mt-auto">{dept.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
