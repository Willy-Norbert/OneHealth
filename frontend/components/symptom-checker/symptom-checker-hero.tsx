import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SymptomCheckerHero() {
  return (
    <section className="relative bg-gradient-to-r from-green-600 to-blue-700 py-20 md:py-28">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Symptom Checker</h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90 md:text-xl">
          Answer a few questions about your symptoms and get preliminary insights about possible conditions. Our
          AI-powered tool helps you make informed decisions about your health.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90">
            Start Symptom Check
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Learn How It Works
          </Button>
        </div>
      </div>
    </section>
  )
}
