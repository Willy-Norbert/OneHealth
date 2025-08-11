import { Video, MessageSquare, FileText, Clock, Shield, SmartphoneIcon as DeviceMobile } from "lucide-react"

export default function TeleconsultationFeatures() {
  const features = [
    {
      icon: <Video className="h-10 w-10 text-blue-600" />,
      title: "High-Quality Video Consultations",
      description:
        "Connect with doctors through high-definition video calls that provide a clear and personal consultation experience.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
      title: "Secure Messaging",
      description: "Send and receive secure messages with your healthcare provider before and after your consultation.",
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "Digital Prescriptions",
      description:
        "Receive digital prescriptions that can be sent directly to our partner pharmacies for medication delivery.",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "Quick Access",
      description:
        "Get medical attention quickly with an average wait time of just 15 minutes for urgent consultations.",
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Private & Secure",
      description:
        "All consultations are conducted through encrypted connections to ensure your medical information remains private.",
    },
    {
      icon: <DeviceMobile className="h-10 w-10 text-blue-600" />,
      title: "Multi-Device Access",
      description: "Access teleconsultation services from any device - smartphone, tablet, or computer.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Teleconsultation Features</h2>
          <p className="text-gray-600">
            Our teleconsultation service offers a complete virtual healthcare experience with features designed to make
            remote healthcare accessible, convenient, and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
