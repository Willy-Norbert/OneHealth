"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ContactFaq() {
  const faqs = [
    {
      question: "What are the best ways to contact ONE HEALTHLINE CONNECT?",
      answer:
        "You can contact us through multiple channels: phone (+250 788 123 456), email (info@healthlinerwanda.com), the contact form on our website, or through the messaging feature in our mobile app. For emergencies, please use our emergency hotline (+250 788 999 911) or the Emergency Assistance feature in the app.",
    },
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer:
        "For general inquiries submitted through our contact form or email, we aim to respond within 24 hours during business days. Phone calls are typically answered immediately during business hours. For urgent medical matters, please use our emergency services for immediate assistance.",
    },
    {
      question: "Can I visit your offices without an appointment?",
      answer:
        "Yes, you can visit our offices during regular business hours without an appointment for general inquiries or assistance with the app. However, for meetings with specific team members or for detailed discussions about partnerships or services, we recommend scheduling an appointment in advance to ensure the relevant staff are available.",
    },
    {
      question: "How do I provide feedback about your services?",
      answer:
        "We welcome your feedback! You can provide feedback through our contact form (select 'Feedback' from the department dropdown), email us at feedback@healthlinerwanda.com, or use the feedback feature in our mobile app. Your insights help us improve our services and better meet the healthcare needs of our users.",
    },
    {
      question: "Who should I contact for technical issues with the app?",
      answer:
        "For technical support with the ONE HEALTHLINE CONNECT app, please contact our technical support team at support@healthlinerwanda.com or call +250 788 123 456 and select the technical support option. You can also submit a support ticket through our contact form by selecting 'Technical Support' from the department dropdown.",
    },
    {
      question: "How can I report an emergency situation?",
      answer:
        "For medical emergencies, please call our 24/7 emergency hotline at +250 788 999 911 or use the Emergency Assistance button in the ONE HEALTHLINE CONNECT app. Our emergency response team will assess your situation and dispatch appropriate help immediately.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to common questions about contacting and communicating with ONE HEALTHLINE CONNECT
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
