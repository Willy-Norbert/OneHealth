/* eslint-disable react/no-unescaped-entities */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function EmergencyFaq() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Find answers to common questions about our emergency medical services.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-medium">
                What number do I call for emergency services?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                For emergency medical services, call our dedicated emergency number: 912. This number is available 24/7
                and will connect you directly to our emergency dispatch center. In case you cannot reach this number,
                you can also call our alternative emergency line at 0788-HEALTH (0788-432584).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-medium">
                How quickly will an ambulance arrive?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our target response times are 5-15 minutes in urban areas and 15-30 minutes in rural areas. Actual
                response times may vary based on traffic conditions, weather, and the specific location. Our dispatch
                system sends the closest available emergency unit to minimize wait times.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-medium">
                What should I do while waiting for the ambulance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our emergency operators will provide specific instructions based on the situation. Generally: stay calm,
                keep the patient still, clear space for emergency responders to access the patient, gather any relevant
                medical information or medications, and if possible, send someone to direct the ambulance to your exact
                location.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-medium">
                How much does the emergency service cost?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                ONE HEALTHLINE CONNECT works with all major insurance providers in Rwanda. For patients with insurance, most
                or all costs are typically covered depending on your plan. For uninsured patients, we have a standard
                emergency response fee, but we never delay care due to payment concerns. Our financial counselors can
                work with you on payment plans if needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-medium">
                What types of emergencies do you respond to?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We respond to all types of medical emergencies including but not limited to: cardiac events (heart
                attacks, chest pain), strokes, severe injuries, difficulty breathing, severe allergic reactions, burns,
                poisoning, seizures, and any situation where there is an immediate threat to life or long-term health.
                If you're unsure if a situation qualifies as an emergency, it's always better to call.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-lg font-medium">
                Which hospital will I be taken to?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our emergency teams will transport patients to the most appropriate medical facility based on the nature
                of the emergency, the patient's condition, and proximity. We coordinate with all major hospitals in
                Rwanda and will consider your preferences when possible, but the primary consideration is always getting
                you the right care as quickly as possible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left text-lg font-medium">
                Can I request a specific hospital?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                You can request a specific hospital, and we will try to accommodate your preference when medically
                appropriate. However, in critical emergencies, our teams will take you to the nearest facility that can
                provide the specialized care you need. For example, stroke or trauma patients may need to go to specific
                centers with specialized capabilities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left text-lg font-medium">
                What information should I provide when calling?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                When calling emergency services, try to provide: your exact location (address, landmarks), the nature of
                the emergency, the patient's condition, the patient's age and gender, any relevant medical history, and
                any actions already taken. Our operators will guide you through the necessary questions to ensure the
                right response is dispatched.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-gray-900">Have more questions about our emergency services?</p>
          <p className="mt-2 text-gray-600">
            Contact our customer service team at <span className="font-semibold">info@healthlinerwanda.com</span> or
            call <span className="font-semibold">+250 788 123 456</span>
          </p>
        </div>
      </div>
    </section>
  )
}
