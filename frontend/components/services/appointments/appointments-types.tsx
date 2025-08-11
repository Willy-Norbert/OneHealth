import { Button } from "@/components/ui/button"
import { Stethoscope, Brain, Heart, Eye, Bone, Baby, Pill, Microscope, ArrowRight } from "lucide-react"

export default function AppointmentsTypes() {
  const appointmentTypes = [
    {
      icon: <Stethoscope className="h-8 w-8 text-green-600" />,
      title: "General Consultation",
      description: "Regular check-ups and general health concerns with primary care physicians.",
      popular: true,
    },
    {
      icon: <Brain className="h-8 w-8 text-green-600" />,
      title: "Specialist Consultation",
      description: "Focused care from specialists in various medical fields.",
      popular: false,
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Cardiology",
      description: "Heart health assessments and treatments with cardiologists.",
      popular: true,
    },
    {
      icon: <Eye className="h-8 w-8 text-green-600" />,
      title: "Ophthalmology",
      description: "Eye examinations and treatments with eye specialists.",
      popular: false,
    },
    {
      icon: <Bone className="h-8 w-8 text-green-600" />,
      title: "Orthopedics",
      description: "Bone and joint care with orthopedic specialists.",
      popular: false,
    },
    {
      icon: <Baby className="h-8 w-8 text-green-600" />,
      title: "Pediatrics",
      description: "Healthcare for infants, children, and adolescents.",
      popular: true,
    },
    {
      icon: <Pill className="h-8 w-8 text-green-600" />,
      title: "Pharmacy Consultation",
      description: "Medication reviews and advice from pharmacists.",
      popular: false,
    },
    {
      icon: <Microscope className="h-8 w-8 text-green-600" />,
      title: "Laboratory Tests",
      description: "Schedule laboratory tests and diagnostics.",
      popular: false,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Appointment <span className="text-green-600">Types</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of appointment types to address all your healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {appointmentTypes.map((type, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${
                type.popular
                  ? "border-2 border-green-500 bg-green-50"
                  : "border border-gray-200 bg-white hover:border-green-200"
              }`}
            >
              {type.popular && (
                <div className="bg-green-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-full inline-block mb-4">
                  Popular
                </div>
              )}
              <div className="mb-4">{type.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <Button
                variant={type.popular ? "default" : "outline"}
                className={
                  type.popular
                    ? "bg-green-600 hover:bg-green-700 w-full"
                    : "border-green-600 text-green-600 hover:bg-green-50 w-full"
                }
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Don&apos;t see the appointment type you need? We offer many more specialized services.
          </p>
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            View All Specialties <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
