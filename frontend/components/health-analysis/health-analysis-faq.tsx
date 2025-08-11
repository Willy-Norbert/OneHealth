import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HealthAnalysisFaq() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How often should I get a health analysis?</AccordionTrigger>
              <AccordionContent>
                We recommend getting a comprehensive health analysis annually for most individuals. However, if you have
                chronic conditions or specific health concerns, more frequent analyses may be beneficial. Your
                healthcare provider can recommend an appropriate schedule based on your individual health needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What types of health metrics are analyzed?</AccordionTrigger>
              <AccordionContent>
                Our health analysis includes a wide range of metrics, including vital signs (blood pressure, heart rate,
                etc.), body composition, blood work (cholesterol, glucose, etc.), cardiovascular health indicators,
                respiratory function, and more. We also consider lifestyle factors, medical history, and family history
                in our analysis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do I need to provide previous medical records?</AccordionTrigger>
              <AccordionContent>
                While not required, providing previous medical records can enhance the accuracy and comprehensiveness of
                your health analysis. Historical data allows our healthcare professionals to identify trends and changes
                in your health metrics over time, providing more valuable insights.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How is my health data protected?</AccordionTrigger>
              <AccordionContent>
                We take data security and privacy very seriously. All your health information is protected with advanced
                encryption and security measures that comply with healthcare privacy regulations. We do not share your
                personal health information with third parties without your explicit consent.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can I get a health analysis remotely?</AccordionTrigger>
              <AccordionContent>
                Yes, many aspects of our health analysis can be conducted remotely. You can submit your health
                questionnaire and existing health metrics online. For certain measurements that require in-person
                assessment, we can arrange for you to visit a local partner facility or send a healthcare professional
                to your location, depending on availability in your area.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Is the health analysis covered by insurance?</AccordionTrigger>
              <AccordionContent>
                Coverage varies depending on your insurance provider and plan. Some preventive health assessments may be
                covered, especially if recommended by your primary care physician. We recommend checking with your
                insurance provider regarding coverage for specific components of the health analysis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>What happens after I receive my health analysis results?</AccordionTrigger>
              <AccordionContent>
                After receiving your results, you&apos;ll have the opportunity to schedule a consultation with one of our
                healthcare providers to discuss your analysis in detail. They will explain your results, answer any
                questions, and provide personalized recommendations. You&apos;ll also receive access to resources and tools
                to help you implement the recommended actions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
