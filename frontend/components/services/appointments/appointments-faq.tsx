import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AppointmentsFaq() {
  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment through our website or mobile app. Simply create an account, search for a doctor or specialty, select your preferred date and time, and confirm your booking. You'll receive an immediate confirmation via email and SMS.",
    },
    {
      question: "Can I book an appointment for someone else?",
      answer:
        "Yes, you can book appointments for family members or others. During the booking process, you'll have the option to specify who the appointment is for. You'll need to provide their basic information to complete the booking.",
    },
    {
      question: "How far in advance can I book an appointment?",
      answer:
        "Most specialists allow bookings up to 3 months in advance. Some high-demand specialists may have shorter booking windows. Emergency appointments can often be booked for the same day or next day depending on availability.",
    },
    {
      question: "What if I need to cancel or reschedule my appointment?",
      answer:
        "You can cancel or reschedule your appointment through your account up to 24 hours before the scheduled time without any penalty. For cancellations less than 24 hours in advance, a small fee may apply depending on the specialist's policy.",
    },
    {
      question: "Do I need to pay when booking an appointment?",
      answer:
        "Some specialists require a deposit or full payment at the time of booking, while others allow payment at the time of the appointment. The payment requirements will be clearly indicated during the booking process.",
    },
    {
      question: "What insurance providers do you accept?",
      answer:
        "We work with most major insurance providers in Rwanda. During the booking process, you can enter your insurance information to see which specialists accept your specific insurance plan.",
    },
    {
      question: "How long before my appointment will I receive a reminder?",
      answer:
        "We send appointment reminders 48 hours and 2 hours before your scheduled appointment via SMS and email. You can adjust your reminder preferences in your account settings.",
    },
    {
      question: "What should I bring to my appointment?",
      answer:
        "Please bring your ID, insurance card (if applicable), any relevant medical records or test results, a list of current medications, and any referral documents if required. For first-time visits, please arrive 15 minutes early to complete registration.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our appointment booking service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions about our appointment booking service?</p>
          <div className="inline-flex items-center justify-center bg-green-50 rounded-full px-6 py-3">
            <span className="text-green-800 font-medium">Contact our support team at</span>
            <a href="tel:+250788123456" className="ml-2 text-green-600 font-bold hover:underline">
              +250 788 123 456
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
