/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Brain, Activity, Clipboard, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function AiDoctorService() {
  const features = [
    "Personalized health monitoring and tracking",
    "AI-powered symptom assessment",
    "Lifestyle and wellness recommendations",
    "Medication reminders and adherence tracking",
    "Health data analysis and insights",
    "Seamless integration with other HEALTHLINE services",
  ]

  const capabilities = [
    "General health inquiries",
    "Chronic disease management",
    "Nutrition and diet advice",
    "Mental health support",
    "Sleep improvement tips",
    "Physical activity recommendations",
  ]

  return (
    <section id="ai-doctor" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full mb-6">
              <Brain className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI Health Assistant</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Personal Health Companion Powered by AI</h2>
            <p className="text-gray-600 mb-8">
              Our AI Health Assistant provides personalized health monitoring, advice, and guidance based on your health
              data and concerns. It's like having a healthcare professional in your pocket, available 24/7 to answer
              questions and provide support for your health journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-teal-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">AI Assistant Capabilities</h3>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-teal-600 hover:bg-teal-700" >
                <Link href="/services/ai-assistant#demo">Try AI Assistant Try AI Assistant <Brain className="ml-2 h-4 w-4" /></Link>
            
              </Button>
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                <Link href="/services/ai-assistant">Learn More</Link>             
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-100 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>

            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=AI+Health+Assistant"
                    alt="AI Health Assistant"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Overlaid feature cards */}
                <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <Activity className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Health Monitoring</h4>
                    <p className="text-gray-500 text-xs">Track vital signs & symptoms</p>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clipboard className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Personalized Plans</h4>
                    <p className="text-gray-500 text-xs">Custom health recommendations</p>
                  </div>
                </div>

                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">24/7 Assistance</h4>
                    <p className="text-gray-500 text-xs">Always available to help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
