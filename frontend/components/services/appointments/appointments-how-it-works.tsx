import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AppointmentsHowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create an Account",
      description: "Sign up with your basic information to get started. It only takes a minute.",
      image: "/placeholder.svg?height=300&width=400&text=Create+Account",
    },
    {
      number: "02",
      title: "Find a Specialist",
      description: "Search for specialists by name, specialty, location, or availability.",
      image: "/placeholder.svg?height=300&width=400&text=Find+Specialist",
    },
    {
      number: "03",
      title: "Select Date & Time",
      description: "Choose from available time slots that work with your schedule.",
      image: "/placeholder.svg?height=300&width=400&text=Select+Date+Time",
    },
    {
      number: "04",
      title: "Confirm & Pay",
      description: "Review your appointment details, add any notes, and complete payment if required.",
      image: "/placeholder.svg?height=300&width=400&text=Confirm+Pay",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Book Your <span className="text-green-600">Appointment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple 4-step process makes booking healthcare appointments quick and hassle-free.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl z-10">
                    {step.number}
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-lg text-gray-600">{step.description}</p>
                {index === steps.length - 1 && (
                  <Button className="mt-4 bg-green-600 hover:bg-green-700">
                    Book Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Need help booking your appointment? Our support team is available to assist you.
          </p>
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  )
}
