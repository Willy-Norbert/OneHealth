import { Clock, Truck, Shield, CreditCard, Pill, MessageSquare, RefreshCw, FileText } from "lucide-react"

export default function PharmacyFeatures() {
  const features = [
    {
      icon: <Clock className="h-10 w-10 text-purple-600" />,
      title: "24/7 Ordering",
      description: "Order medications anytime, day or night, through our online platform or mobile app.",
    },
    {
      icon: <Truck className="h-10 w-10 text-purple-600" />,
      title: "Fast Delivery",
      description:
        "Get medications delivered to your doorstep within 3 hours in urban areas and same-day in rural areas.",
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-600" />,
      title: "Verified Medications",
      description: "All medications are sourced from licensed pharmacies and verified for authenticity.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-purple-600" />,
      title: "Secure Payments",
      description: "Multiple payment options including mobile money, credit cards, and insurance coverage.",
    },
    {
      icon: <Pill className="h-10 w-10 text-purple-600" />,
      title: "Medication Reminders",
      description: "Set up reminders to take your medications on time and never miss a dose.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-purple-600" />,
      title: "Pharmacist Consultation",
      description: "Chat with licensed pharmacists for advice on medications and potential side effects.",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-purple-600" />,
      title: "Easy Refills",
      description: "Quickly reorder your prescriptions with one-click refills and automatic renewals.",
    },
    {
      icon: <FileText className="h-10 w-10 text-purple-600" />,
      title: "Digital Prescriptions",
      description: "Upload your prescription digitally or have your doctor send it directly to our platform.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our <span className="text-purple-600">Pharmacy Service</span>
          </h2>
          <p className="text-xl text-gray-600">
            ONE HEALTHLINE CONNECT offers a comprehensive medication service designed to make healthcare more accessible and
            convenient for all Rwandans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-purple-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
