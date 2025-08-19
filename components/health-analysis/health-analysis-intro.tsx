import { Activity, Heart, Brain, TreesIcon as Lungs } from "lucide-react"

export default function HealthAnalysisIntro() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Understanding Your Health Status
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Our health analysis service combines advanced technology with medical expertise to provide you with a
            comprehensive understanding of your health status. We analyze various health metrics to identify potential
            issues and provide personalized recommendations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-gray-50 p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-medium">General Health</h3>
            <p className="text-gray-600">Comprehensive assessment of your overall health status and vital signs.</p>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-medium">Cardiovascular</h3>
            <p className="text-gray-600">Analysis of heart health metrics and cardiovascular risk factors.</p>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Brain className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-medium">Mental Health</h3>
            <p className="text-gray-600">Evaluation of mental wellbeing and stress management indicators.</p>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Lungs className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-medium">Respiratory</h3>
            <p className="text-gray-600">Assessment of lung function and respiratory health indicators.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
