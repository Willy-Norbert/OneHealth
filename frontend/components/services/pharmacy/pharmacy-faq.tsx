import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PharmacyFaq() {
  const faqs = [
    {
      question: "How do I upload my prescription?",
      answer:
        "You can upload your prescription by taking a clear photo of it through our mobile app or website. Simply navigate to the 'Upload Prescription' section, take a photo or select an image from your gallery, and submit it. Our pharmacists will review it and process your order.",
    },
    {
      question: "What types of medications can I order?",
      answer:
        "You can order both prescription and over-the-counter medications through our platform. We offer a wide range of products including chronic disease medications, antibiotics, pain relievers, vitamins, supplements, and medical devices. All medications are sourced from licensed pharmacies.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery times vary based on your location. In Kigali urban areas, deliveries typically arrive within 1-3 hours. Provincial cities receive same-day delivery, while rural areas may take up to 24 hours. Express delivery options are available in most areas for urgent medication needs.",
    },
    {
      question: "Is there a minimum order amount?",
      answer:
        "There is no minimum order amount for medication orders. However, orders below RWF 10,000 may incur the standard delivery fee based on your location. Orders above RWF 10,000 qualify for free delivery in most urban areas.",
    },
    {
      question: "How do I pay for my medications?",
      answer:
        "We offer multiple payment options including mobile money (MTN MoMo, Airtel Money), credit/debit cards, and cash on delivery. For insurance coverage, you can upload your insurance card along with your prescription, and we'll process the claim directly with your provider.",
    },
    {
      question: "Are the medications authentic and safe?",
      answer:
        "Yes, all medications are sourced directly from licensed pharmacies and authorized distributors in Rwanda. We maintain strict quality control standards and proper storage conditions. Each medication comes with verification seals and batch numbers that can be verified.",
    },
    {
      question: "Can I get a refund if I receive the wrong medication?",
      answer:
        "Yes, if you receive incorrect medications or if there are quality issues, we offer a full refund or replacement. Please report any issues within 24 hours of receiving your order by contacting our customer support team.",
    },
    {
      question: "Do you deliver temperature-sensitive medications?",
      answer:
        "Yes, we deliver temperature-sensitive medications like insulin using specialized temperature-controlled packaging. Our delivery personnel are trained to handle such medications properly, ensuring they maintain their efficacy throughout the delivery process.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our pharmacy and medication delivery services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-purple-50 px-6 py-4 rounded-lg">
            <p className="text-gray-700 mb-2">Still have questions about our pharmacy services?</p>
            <p className="text-purple-600 font-medium">
              Contact our pharmacist team at <span className="font-bold">pharmacy@healthlinerwanda.com</span> or call{" "}
              <span className="font-bold">+250 788 123 456</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
