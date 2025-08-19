import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function SymptomCheckerCta() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-700 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Need to speak with a healthcare professional?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
          Our healthcare providers are available for teleconsultations and in-person appointments to address your health
          concerns.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90">
            Book an Appointment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Start Teleconsultation
          </Button>
        </div>
      </div>
    </section>
  )
}
