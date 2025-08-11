"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ServicesFaq() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: t("faq.teleconsultation.question"),
      answer: t("faq.teleconsultation.answer"),
    },
    {
      question: t("faq.specialists.question"),
      answer: t("faq.specialists.answer"),
    },
    {
      question: t("faq.emergency.question"),
      answer: t("faq.emergency.answer"),
    },
    {
      question: t("faq.prescriptionOrder.question"),
      answer: t("faq.prescriptionOrder.answer"),
    },
    {
      question: t("faq.aiAssistantAccuracy.question"),
      answer: t("faq.aiAssistantAccuracy.answer"),
    },
    {
      question: t("faq.dataSecurity.question"),
      answer: t("faq.dataSecurity.answer"),
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("faq.title")}</h2>
          <p className="text-gray-600">{t("faq.subtitle")}</p>
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
