import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function PharmacyHowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Prescription or Select Medications",
      description: "Take a photo of your prescription or browse our catalog to select over-the-counter medications.",
      image: "/placeholder.svg?height=300&width=400&text=Upload+Prescription",
    },
    {
      number: "02",
      title: "Review Order and Payment",
      description: "Confirm your medication order, delivery address, and complete payment through our secure system.",
      image: "/placeholder.svg?height=300&width=400&text=Review+Order",
    },
    {
      number: "03",
      title: "Pharmacist Verification",
      description: "A licensed pharmacist reviews your order and prescription to ensure accuracy and safety.",
      image: "/placeholder.svg?height=300&width=400&text=Pharmacist+Verification",
    },
    {
      number: "04",
      title: "Delivery to Your Location",
      description:
        "Your medications are packaged securely and delivered directly to your doorstep by our trusted couriers.",
      image: "/placeholder.svg?height=300&width=400&text=Medication+Delivery",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our <span className="text-purple-600">Pharmacy Service</span> Works
          </h2>
          <p className="text-xl text-gray-600">
            Getting your medications has never been easier. Follow these simple steps to order and receive your
            prescriptions.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full z-0"></div>
                  <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      width={500}
                      height={375}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full z-0"></div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-xl text-gray-600">{step.description}</p>

                {index === steps.length - 1 && (
                  <Button className="mt-6 bg-purple-600 hover:bg-purple-700">
                    Order Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Need help with your medication order? Our support team is available 24/7.
          </p>
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  )
}
