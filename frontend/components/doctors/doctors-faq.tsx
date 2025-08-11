"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function DoctorsFaq() {
  const faqs = [
    {
      question: "How do I choose the right doctor for my condition?",
      answer:
        "To choose the right doctor, consider their specialty related to your condition, their experience, qualifications, and patient reviews. You can use our search filters to narrow down specialists by these criteria. If you're unsure which specialty you need, start with a general practitioner who can provide a referral, or use our AI Health Assistant for guidance based on your symptoms.",
    },
    {
      question: "What information do I need to book an appointment?",
      answer:
        "To book an appointment, you'll need your personal information (name, contact details), health insurance information (if applicable), a brief description of your medical concern, and your preferred date and time. If you're a new patient, you may need to create an account on our platform first. For certain specialists, you might also need a referral from another doctor.",
    },
    {
      question: "How do virtual consultations work?",
      answer:
        "Virtual consultations take place through our secure video platform. After booking, you'll receive a confirmation with a link to join the video call at the scheduled time. Ensure you have a stable internet connection, a device with a camera and microphone, and a quiet, private space. You can upload any relevant medical records before the consultation for the doctor to review.",
    },
    {
      question: "Can I change my doctor after booking an appointment?",
      answer:
        "Yes, you can change your doctor after booking an appointment. Log in to your account, go to 'Your Appointments', select the appointment you wish to change, and click on 'Change Doctor'. You can then select a new doctor based on availability. Please note that changes made less than 24 hours before the appointment may incur a rescheduling fee.",
    },
    {
      question: "What happens if I miss my appointment?",
      answer:
        "If you miss your appointment without canceling at least 6 hours in advance, you may be charged a missed appointment fee (typically 50% of the consultation fee). We understand emergencies happen, so you can contact our customer support team if you missed an appointment due to unavoidable circumstances. We encourage rescheduling rather than missing appointments to ensure continuity of care.",
    },
    {
      question: "How are the doctors on ONE HEALTHLINE CONNECT verified?",
      answer:
        "All doctors on our platform undergo a rigorous verification process. We verify their medical licenses, professional certifications, educational background, and practice history. We also conduct interviews and check references. Additionally, we continuously monitor patient feedback and reviews to ensure our doctors maintain high standards of care. Only doctors who meet our strict criteria are allowed to join the ONE HEALTHLINE CONNECT network.",
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
            Find answers to common questions about our doctors and the appointment process
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
