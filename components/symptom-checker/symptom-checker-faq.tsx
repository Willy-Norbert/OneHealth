 
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SymptomCheckerFaq() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How accurate is the symptom checker?</AccordionTrigger>
              <AccordionContent>
                Our symptom checker uses advanced algorithms to analyze your symptoms and provide preliminary insights.
                However, it's important to understand that it's not a diagnostic tool and cannot replace professional
                medical advice. The accuracy depends on the information provided and the complexity of your symptoms.
                Always consult with a healthcare professional for proper diagnosis and treatment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Is my health information kept private?</AccordionTrigger>
              <AccordionContent>
                Yes, we take your privacy seriously. All information you provide is encrypted and stored securely. We
                comply with healthcare privacy regulations and do not share your personal health information with third
                parties without your consent. You can review our privacy policy for more details on how we handle your
                data.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What should I do if my symptoms are severe?</AccordionTrigger>
              <AccordionContent>
                If you're experiencing severe symptoms such as difficulty breathing, chest pain, severe bleeding, or
                loss of consciousness, please seek emergency medical care immediately. Do not wait for the symptom
                checker results. Call emergency services or go to the nearest emergency room.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can I use the symptom checker for someone else?</AccordionTrigger>
              <AccordionContent>
                Yes, you can use the symptom checker on behalf of someone else, such as a child or an elderly family
                member. Just make sure to provide accurate information about their symptoms and medical history.
                However, remember that the results are preliminary and should be followed up with professional medical
                advice.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How often should I check my symptoms?</AccordionTrigger>
              <AccordionContent>
                If your symptoms persist or worsen over time, you can use the symptom checker again to reassess.
                However, if you've already used the symptom checker and your condition isn't improving, we recommend
                consulting with a healthcare provider rather than repeatedly using the tool. Persistent symptoms should
                be evaluated by a medical professional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                How does the symptom checker work with ONE HEALTHLINE CONNECT's other services?
              </AccordionTrigger>
              <AccordionContent>
                Our symptom checker is integrated with our other healthcare services. After receiving your results, you
                can easily book a teleconsultation, schedule an in-person appointment, chat with our AI health
                assistant, or access our pharmacy services. This creates a seamless healthcare experience where you can
                take immediate action based on your symptom analysis.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
