"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function DepartmentFaq() {
  const { t } = useLanguage()
  
  const faqs = [
    {
      question: t("faq1.q1"),
      answer: t("faq1.a1"),
    },
    {
      question: t("faq1.q2"),
      answer: t("faq1.a2"),
    },
    {
      question: t("faq1.q3"),
      answer: t("faq1.a3"),
    },
    {
      question: t("faq1.q4"),
      answer: t("faq1.a4"),
    },
    {
      question: t("faq1.q5"),
      answer: t("faq1.a5"),
    },
    {
      question: t("faq1.q6"),
      answer: t("faq1.a6"),
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("faq1.title")}</h2>
          <p className="text-gray-600">{t("faq1.subtitle")}</p>
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
