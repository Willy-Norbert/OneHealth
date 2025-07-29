"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function DepartmentFaq() {
  const faqs = [
    {
      question: "How do I know which department I need to visit?",
      answer:
        "If you're unsure which department you need, you can start with a general practitioner who can assess your condition and refer you to the appropriate specialist. Alternatively, you can use our AI Health Assistant in the app to get guidance based on your symptoms. For emergencies, always use our Emergency Services option.",
    },
    {
      question: "Can I request a specific doctor within a department?",
      answer:
        "Yes, you can request a specific doctor when booking an appointment. Our platform allows you to browse through specialists in each department, view their profiles, ratings, and availability, and select the one you prefer. However, availability may vary based on the doctor's schedule.",
    },
    {
      question: "What should I bring to my department appointment?",
      answer:
        "For your appointment, please bring your identification, insurance information (if applicable), a list of current medications, any relevant medical records or test results, and a list of questions or concerns you want to discuss. For virtual consultations, ensure you have a stable internet connection and a quiet, private space.",
    },
    {
      question: "How long does a typical specialist appointment last?",
      answer:
        "The duration varies by department and the nature of your visit. Initial consultations typically last 30-45 minutes, while follow-up appointments are usually 15-30 minutes. Complex cases may require longer appointments. The estimated duration will be shown when you book your appointment.",
    },
    {
      question: "Can I get a second opinion from another specialist in the same department?",
      answer:
        "Yes, we encourage patients to seek second opinions when they feel it's necessary. You can book an appointment with another specialist in the same department through our platform. Your medical records can be shared between providers with your consent to ensure continuity of care.",
    },
    {
      question: "Are all departments available for virtual consultations?",
      answer:
        "Most departments offer virtual consultation options, but some conditions may require in-person visits for proper diagnosis and treatment. When booking, you'll see which appointment types are available for each department and specialist. Some departments may offer initial consultations virtually with follow-up in-person visits if needed.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to common questions about our medical departments and specialists
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden transition-all duration-300 border border-gray-200 ${
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
