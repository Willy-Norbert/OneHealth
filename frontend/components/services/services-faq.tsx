/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ServicesFaq() {
  const faqs = [
    {
      question: "How do I book a teleconsultation?",
      answer:
        "To book a teleconsultation, download the ONE HEALTHLINE CONNECT app, create an account, and navigate to the Teleconsultation section. Select your preferred specialist, choose an available time slot, and confirm your booking. You'll receive a confirmation notification and a reminder before your appointment.",
    },
    {
      question: "What types of specialists are available on the platform?",
      answer:
        "ONE HEALTHLINE CONNECT partners with a wide range of specialists including general practitioners, pediatricians, cardiologists, dermatologists, psychiatrists, nutritionists, and more. The availability of specialists may vary based on your location and the time of day.",
    },
    {
      question: "How does the emergency service work?",
      answer:
        "In case of an emergency, open the ONE HEALTHLINE CONNECT app and tap the Emergency button. You'll be connected to our emergency response team who will assess your situation and dispatch appropriate help. The app also shares your GPS location to ensure help reaches you quickly.",
    },
    {
      question: "Can I order prescription medications through the app?",
      answer:
        "Yes, you can order prescription medications through the app. After a consultation, your doctor can send a digital prescription directly to our partner pharmacies. Alternatively, you can upload a physical prescription through the app. Select your preferred pharmacy, review your order, and choose delivery or pickup.",
    },
    {
      question: "How accurate is the AI Health Assistant?",
      answer:
        "Our AI Health Assistant is designed to provide general health information and guidance based on the data you provide. While it uses advanced algorithms to analyze symptoms and health data, it is not a replacement for professional medical advice. Always consult with a healthcare professional for diagnosis and treatment.",
    },
    {
      question: "Is my health data secure on the platform?",
      answer:
        "Yes, we take data security very seriously. All health data is encrypted and stored securely in compliance with data protection regulations. We do not share your personal health information with third parties without your explicit consent, except when required by law or in emergency situations.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to common questions about our services. If you don't see your question here, feel free to
            contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "shadow-md" : "shadow-sm"
                }`}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
