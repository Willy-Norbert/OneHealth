"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ContactFaq() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: t("faq2.items.0.question"),
      answer: t("faq2.items.0.answer"),
    },
    {
      question: t("faq2.items.1.question"),
      answer: t("faq2.items.1.answer"),
    },
    {
      question: t("faq2.items.2.question"),
      answer: t("faq2.items.2.answer"),
    },
    {
      question: t("faq2.items.3.question"),
      answer: t("faq2.items.3.answer"),
    },
    {
      question: t("faq2.items.4.question"),
      answer: t("faq2.items.4.answer"),
    },
    {
      question: t("faq2.items.5.question"),
      answer: t("faq2.items.5.answer"),
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("faq2.heading")}</h2>
          <p className="text-gray-600">{t("faq2.description")}</p>
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
