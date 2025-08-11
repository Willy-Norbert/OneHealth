import { Heart, Brain, Eye, Bone, Stethoscope, Baby, Pill, Microscope, Thermometer } from "lucide-react"

export default function DoctorSpecialties() {
  const specialties = [
    {
      name: "Cardiology",
      icon: <Heart className="h-6 w-6 text-red-500" />,
      description: "Diagnosis and treatment of heart diseases and cardiovascular conditions",
      doctorCount: 12,
      color: "bg-red-50",
    },
    {
      name: "Neurology",
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      description: "Diagnosis and treatment of disorders of the nervous system",
      doctorCount: 8,
      color: "bg-purple-50",
    },
    {
      name: "Ophthalmology",
      icon: <Eye className="h-6 w-6 text-blue-500" />,
      description: "Diagnosis and treatment of eye disorders and vision problems",
      doctorCount: 6,
      color: "bg-blue-50",
    },
    {
      name: "Orthopedics",
      icon: <Bone className="h-6 w-6 text-amber-500" />,
      description: "Treatment of musculoskeletal system including bones, joints, and muscles",
      doctorCount: 10,
      color: "bg-amber-50",
    },
    {
      name: "General Medicine",
      icon: <Stethoscope className="h-6 w-6 text-green-500" />,
      description: "Primary healthcare for adults, including diagnosis and treatment of various diseases",
      doctorCount: 15,
      color: "bg-green-50",
    },
    {
      name: "Pediatrics",
      icon: <Baby className="h-6 w-6 text-cyan-500" />,
      description: "Medical care for infants, children, and adolescents",
      doctorCount: 14,
      color: "bg-cyan-50",
    },
    {
      name: "Dermatology",
      icon: <Microscope className="h-6 w-6 text-pink-500" />,
      description: "Medical care for skin, hair, and nail conditions",
      doctorCount: 7,
      color: "bg-pink-50",
    },
    {
      name: "Internal Medicine",
      icon: <Thermometer className="h-6 w-6 text-indigo-500" />,
      description: "Diagnosis and treatment of adult diseases not requiring surgery",
      doctorCount: 11,
      color: "bg-indigo-50",
    },
    {
      name: "Pharmacy",
      icon: <Pill className="h-6 w-6 text-teal-500" />,
      description: "Medication management and pharmaceutical care",
      doctorCount: 9,
      color: "bg-teal-50",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical Specialties</h2>
          <p className="text-gray-600">
            Explore our wide range of medical specialties and find the right healthcare professional for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className={`${specialty.color} rounded-xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-md`}
            >
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg mr-4 shadow-sm">{specialty.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{specialty.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{specialty.description}</p>
                  <p className="text-gray-500 text-sm mt-3">{specialty.doctorCount} specialists available</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
