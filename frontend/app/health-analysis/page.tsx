import HealthAnalysisHero from "@/components/health-analysis/health-analysis-hero"
import HealthAnalysisIntro from "@/components/health-analysis/health-analysis-intro"
import HealthAnalysisFeatures from "@/components/health-analysis/health-analysis-features"
import HealthAnalysisSteps from "@/components/health-analysis/health-analysis-steps"
import HealthAnalysisTestimonials from "@/components/health-analysis/health-analysis-testimonials"
import HealthAnalysisFaq from "@/components/health-analysis/health-analysis-faq"
import HealthAnalysisCta from "@/components/health-analysis/health-analysis-cta"

export const metadata = {
  title: "Health Analysis | ONE HEALTHLINE CONNECT",
  description:
    "Get a comprehensive analysis of your health status with ONE HEALTHLINE CONNECT's advanced health analysis tools and professional guidance.",
}

export default function HealthAnalysisPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HealthAnalysisHero />
      <HealthAnalysisIntro />
      <HealthAnalysisFeatures />
      <HealthAnalysisSteps />
      <HealthAnalysisTestimonials />
      <HealthAnalysisFaq />
      <HealthAnalysisCta />
    </main>
  )
}
