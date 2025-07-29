"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function TeleconsultationFaq() {
  const faqs = [
    {
      question: "What equipment do I need for a teleconsultation?",
      answer:
        "You'll need a device with a camera and microphone (smartphone, tablet, or computer), a stable internet connection, and the ONE HEALTHLINE CONNECT app installed. For the best experience, we recommend using headphones and finding a quiet, well-lit space for your consultation.",
    },
    {
      question: "How long does a typical teleconsultation last?",
      answer:
        "A standard teleconsultation typically lasts 15-30 minutes, depending on the complexity of your health concern. Specialist consultations may last longer. You can see the expected duration when booking your appointment.",
    },
    {
      question: "Can doctors prescribe medication through teleconsultation?",
      answer:
        "Yes, doctors can prescribe medications during teleconsultations when appropriate. The prescription will be digital and can be sent directly to our partner pharmacies for delivery or pickup. However, certain controlled medications may require an in-person visit.",
    },
    {
      question: "What if I need lab tests or imaging?",
      answer:
        "If your doctor determines you need laboratory tests or imaging, they can provide a digital referral. You can visit any of our partner facilities to have these tests done. The results will be uploaded to your ONE HEALTHLINE CONNECT account and shared with your doctor for follow-up.",
    },
    {
      question: "Is teleconsultation covered by insurance?",
      answer:
        "Many insurance providers in Rwanda now cover teleconsultation services. We work with major insurance companies including RSSB, MMI, SORAS, and others. You can verify coverage by entering your insurance details in your profile or contacting your insurance provider directly.",
    },
    {
      question: "What if I need to see a doctor in person after my teleconsultation?",
      answer:
        "If your doctor determines that an in-person examination is necessary, they can refer you to an appropriate healthcare facility or specialist. Your teleconsultation records will be shared with the referred provider to ensure continuity of care.",
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
            Find answers to common questions about our teleconsultation services. If you don&apos;t see your question here,
            please contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 ${
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
