import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogCta() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Personalized Health Advice?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Our healthcare professionals are ready to assist you with your specific health concerns and questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
            <Link href="/services/teleconsultation">Book a Teleconsultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href="/services/ai-assistant">Try AI Health Assistant</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
