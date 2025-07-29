import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HealthAnalysisHero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-green-600 py-20 md:py-28">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Comprehensive Health Analysis
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90 md:text-xl">
          Gain valuable insights into your health status with our advanced analysis tools and professional guidance.
          Track your health metrics, identify trends, and take proactive steps toward better health.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90">
            Start Health Analysis
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
