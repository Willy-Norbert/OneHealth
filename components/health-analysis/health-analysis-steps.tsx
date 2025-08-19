import { ClipboardCheck, Stethoscope, FileText, MessageSquare, Calendar } from "lucide-react"

export default function HealthAnalysisSteps() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            How Our Health Analysis Works
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Our health analysis process is designed to be comprehensive, accurate, and convenient. Follow these simple
            steps to get started.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gray-200 md:block"></div>

          <div className="space-y-12">
            <div className="relative md:flex md:items-center">
              <div className="hidden md:block md:w-1/2 md:pr-8 md:text-right">
                <h3 className="text-xl font-bold text-gray-900">Complete Health Questionnaire</h3>
                <p className="mt-2 text-gray-600">
                  Fill out our comprehensive health questionnaire to provide information about your medical history,
                  lifestyle, and current health concerns.
                </p>
              </div>

              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white md:left-1/2 md:-translate-x-1/2">
                <ClipboardCheck className="h-5 w-5" />
              </div>

              <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8">
                <h3 className="text-xl font-bold text-gray-900 md:hidden">Complete Health Questionnaire</h3>
                <p className="mt-2 text-gray-600 md:hidden">
                  Fill out our comprehensive health questionnaire to provide information about your medical history,
                  lifestyle, and current health concerns.
                </p>
              </div>
            </div>

            <div className="relative md:flex md:items-center">
              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                <h3 className="text-xl font-bold text-gray-900">Submit Health Metrics</h3>
                <p className="mt-2 text-gray-600">
                  Upload your recent health metrics, lab results, and other relevant medical data for analysis. You can
                  also schedule tests if needed.
                </p>
              </div>

              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white md:left-1/2 md:-translate-x-1/2">
                <Stethoscope className="h-5 w-5" />
              </div>

              <div className="hidden md:block md:w-1/2 md:pl-8">
                <h3 className="text-xl font-bold text-gray-900">Submit Health Metrics</h3>
                <p className="mt-2 text-gray-600">
                  Upload your recent health metrics, lab results, and other relevant medical data for analysis. You can
                  also schedule tests if needed.
                </p>
              </div>
            </div>

            <div className="relative md:flex md:items-center">
              <div className="hidden md:block md:w-1/2 md:pr-8 md:text-right">
                <h3 className="text-xl font-bold text-gray-900">Receive Detailed Analysis</h3>
                <p className="mt-2 text-gray-600">
                  Our healthcare professionals analyze your data and provide a comprehensive report with insights, risk
                  assessments, and recommendations.
                </p>
              </div>

              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white md:left-1/2 md:-translate-x-1/2">
                <FileText className="h-5 w-5" />
              </div>

              <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8">
                <h3 className="text-xl font-bold text-gray-900 md:hidden">Receive Detailed Analysis</h3>
                <p className="mt-2 text-gray-600 md:hidden">
                  Our healthcare professionals analyze your data and provide a comprehensive report with insights, risk
                  assessments, and recommendations.
                </p>
              </div>
            </div>

            <div className="relative md:flex md:items-center">
              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                <h3 className="text-xl font-bold text-gray-900">Consultation with Healthcare Provider</h3>
                <p className="mt-2 text-gray-600">
                  Schedule a consultation with one of our healthcare providers to discuss your analysis results and get
                  personalized advice.
                </p>
              </div>

              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white md:left-1/2 md:-translate-x-1/2">
                <MessageSquare className="h-5 w-5" />
              </div>

              <div className="hidden md:block md:w-1/2 md:pl-8">
                <h3 className="text-xl font-bold text-gray-900">Consultation with Healthcare Provider</h3>
                <p className="mt-2 text-gray-600">
                  Schedule a consultation with one of our healthcare providers to discuss your analysis results and get
                  personalized advice.
                </p>
              </div>
            </div>

            <div className="relative md:flex md:items-center">
              <div className="hidden md:block md:w-1/2 md:pr-8 md:text-right">
                <h3 className="text-xl font-bold text-gray-900">Follow-up and Monitoring</h3>
                <p className="mt-2 text-gray-600">
                  Implement the recommended actions and schedule follow-up assessments to monitor your progress and make
                  adjustments as needed.
                </p>
              </div>

              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white md:left-1/2 md:-translate-x-1/2">
                <Calendar className="h-5 w-5" />
              </div>

              <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8">
                <h3 className="text-xl font-bold text-gray-900 md:hidden">Follow-up and Monitoring</h3>
                <p className="mt-2 text-gray-600 md:hidden">
                  Implement the recommended actions and schedule follow-up assessments to monitor your progress and make
                  adjustments as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
