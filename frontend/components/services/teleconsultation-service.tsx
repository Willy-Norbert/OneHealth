
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Video, MessageSquare, FileText, Clock } from "lucide-react"

export default function TeleconsultationService() {
  const features = [
    "Consultations with specialists from multiple hospitals",
    "High-quality video and audio calls",
    "Secure messaging with healthcare providers",
    "Digital prescription services",
    "Medical record access and sharing",
    "Follow-up appointment scheduling",
  ]

  const specialties = [
    { name: "General Medicine", availability: "24/7" },
    { name: "Pediatrics", availability: "8AM - 8PM" },
    { name: "Cardiology", availability: "By appointment" },
    { name: "Dermatology", availability: "By appointment" },
    { name: "Psychiatry", availability: "9AM - 5PM" },
    { name: "Nutrition", availability: "9AM - 6PM" },
  ]

  const steps = [
    { number: 1, title: "Select Hospital/Clinic", desc: "Choose from our partner healthcare providers" },
    { number: 2, title: "Choose Consultation Type", desc: "General or Specialist consultation" },
    { number: 3, title: "Select Insurance", desc: "Choose your payment method" },
    { number: 4, title: "Register Patient Details", desc: "Fill in your information" },
    { number: 5, title: "Pay Consultation Fee", desc: "Via Bank Transfer or USSD" },
    { number: 6, title: "Attend Your Consultation", desc: "Secure video or phone call" },
    { number: 7, title: "Receive Follow-Up", desc: "Digital prescription and referrals" },
    { number: 8, title: "Review Medical History", desc: "Access your medical records" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-6">
            <Video className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Teleconsultation Service</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Connect with Healthcare Professionals from Home
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our teleconsultation service connects you with qualified healthcare professionals from various hospitals
            across Rwanda. Get quality care without the travel.
          </p>
        </div>

        {/* How It Works - 8 Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How Teleconsultation Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.number}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Quality Healthcare at Your Fingertips
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you need a quick consultation for a minor issue or specialist advice for a chronic
              condition, our platform makes it easy to get the care you need.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Available Specialties</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specialties.map((specialty, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{specialty.name}</span>
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {specialty.availability}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/teleconsultation/book">
                <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Start Consultation <Video className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/medical-records">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                  View Medical Records
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full z-0"></div>

            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Teleconsultation"
                    alt="Teleconsultation Service"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Secure Chat</h4>
                    <p className="text-gray-500 text-xs">Message your doctor</p>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Digital Prescriptions</h4>
                    <p className="text-gray-500 text-xs">Sent directly to pharmacy</p>
                  </div>
                </div>

                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Quick Access</h4>
                    <p className="text-gray-500 text-xs">Average wait: 15 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Hospitals */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Partner Healthcare Providers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Baho International Hospital",
              "Wiwo Specialized Hospital", 
              "Legacy Clinic",
              "Polyclinic de l'Étoile",
              "DEV Medical Center",
              "+ More Partner Clinics"
            ].map((hospital, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h4 className="font-medium text-gray-900">{hospital}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Consultation?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of Rwandans accessing quality healthcare from home</p>
          <Link href="/teleconsultation/book">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Book Consultation Now <Video className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
