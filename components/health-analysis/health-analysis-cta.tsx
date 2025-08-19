import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HealthAnalysisCta() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-green-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Take the first step toward better health
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
          Get a comprehensive analysis of your health status and personalized recommendations from our healthcare
          professionals.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90">
            Schedule Health Analysis
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Learn More About Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}
