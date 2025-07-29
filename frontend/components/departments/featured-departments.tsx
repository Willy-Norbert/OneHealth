import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Brain, User } from "lucide-react"
import Link from "next/link"

export default function FeaturedDepartments() {
  const featuredDepartments = [
    {
      id: "cardiology",
      name: "Cardiology",
      description:
        "Our Cardiology department provides comprehensive care for heart and cardiovascular conditions. From diagnostic tests to advanced treatments, our cardiologists are equipped to handle everything from routine check-ups to complex heart conditions.",
      image: "/placeholder.svg?height=600&width=800&text=Cardiology",
      icon: <Heart className="h-6 w-6 text-red-500" />,
      color: "bg-red-50",
      services: ["Echocardiography", "ECG", "Cardiac Stress Testing", "Heart Disease Management", "Hypertension Care"],
      specialists: 8,
    },
    {
      id: "neurology",
      name: "Neurology",
      description:
        "The Neurology department specializes in disorders of the nervous system, including the brain, spinal cord, and peripheral nerves. Our neurologists use advanced diagnostic tools and treatments to address conditions ranging from headaches to complex neurological disorders.",
      image: "/placeholder.svg?height=600&width=800&text=Neurology",
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      color: "bg-purple-50",
      services: [
        "EEG Testing",
        "Neurological Examinations",
        "Headache Management",
        "Stroke Care",
        "Movement Disorder Treatment",
      ],
      specialists: 6,
    },
    {
      id: "pediatrics",
      name: "Pediatrics",
      description:
        "Our Pediatrics department is dedicated to the health and well-being of children from birth through adolescence. Our pediatricians provide preventive care, treat childhood illnesses, and monitor developmental milestones to ensure your child grows healthy and strong.",
      image: "/placeholder.svg?height=600&width=800&text=Pediatrics",
      icon: <User className="h-6 w-6 text-blue-500" />,
      color: "bg-blue-50",
      services: [
        "Well-Child Visits",
        "Vaccinations",
        "Growth Monitoring",
        "Developmental Assessments",
        "Pediatric Consultations",
      ],
      specialists: 10,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Departments</h2>
          <p className="text-gray-600">
            Explore our most sought-after medical departments, offering specialized care with experienced healthcare
            professionals
          </p>
        </div>

        <div className="space-y-20">
          {featuredDepartments.map((dept, index) => (
            <div
              key={dept.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-[4/3] relative">
                    <Image src={dept.image || "/placeholder.svg"} alt={dept.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                  </div>
                  <div className="absolute top-6 left-6 flex items-center space-x-2">
                    <div className={`${dept.color} p-3 rounded-lg`}>{dept.icon}</div>
                    <h3 className="text-white text-xl font-bold">{dept.name}</h3>
                  </div>
                  <div className="absolute bottom-6 right-6 bg-white/90 px-4 py-2 rounded-full text-sm font-medium">
                    {dept.specialists} Specialists Available
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{dept.name} Department</h3>
                <p className="text-gray-600 mb-6">{dept.description}</p>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Services Offered:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {dept.services.map((service, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={`/departments/${dept.id}`}>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
