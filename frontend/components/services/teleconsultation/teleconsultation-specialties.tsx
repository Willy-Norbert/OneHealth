import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function TeleconsultationSpecialties() {
  const specialties = [
    {
      name: "General Medicine",
      description: "Consultations for common illnesses, preventive care, and health assessments.",
      availability: "24/7",
      image: "/placeholder.svg?height=200&width=200&text=General+Medicine",
    },
    {
      name: "Pediatrics",
      description: "Child healthcare, from newborn care to adolescent health issues.",
      availability: "8AM - 8PM",
      image: "/placeholder.svg?height=200&width=200&text=Pediatrics",
    },
    {
      name: "Dermatology",
      description: "Skin conditions, rashes, acne, and other dermatological concerns.",
      availability: "By appointment",
      image: "/placeholder.svg?height=200&width=200&text=Dermatology",
    },
    {
      name: "Psychiatry",
      description: "Mental health support, including anxiety, depression, and stress management.",
      availability: "9AM - 5PM",
      image: "/placeholder.svg?height=200&width=200&text=Psychiatry",
    },
    {
      name: "Cardiology",
      description: "Heart health consultations, including hypertension management.",
      availability: "By appointment",
      image: "/placeholder.svg?height=200&width=200&text=Cardiology",
    },
    {
      name: "Nutrition",
      description: "Dietary advice, weight management, and nutritional planning.",
      availability: "9AM - 6PM",
      image: "/placeholder.svg?height=200&width=200&text=Nutrition",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Medical Specialties</h2>
          <p className="text-gray-600">
            Our platform connects you with specialists across various medical fields to address your specific healthcare
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 relative">
                <Image src={specialty.image || "/placeholder.svg"} alt={specialty.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{specialty.name}</h3>
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {specialty.availability}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{specialty.description}</p>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 mt-2">
                  Find Specialists <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700">
            View All Specialties <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
