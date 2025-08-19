import { Shield, Clock, AlertCircle, CheckCircle } from "lucide-react"

export default function SymptomCheckerIntro() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            How Our Symptom Checker Works
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Our symptom checker uses advanced algorithms to analyze your symptoms and provide preliminary insights. It&apos;s
            designed to help you understand potential causes of your symptoms and guide your next steps.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-gray-50 p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-medium">Input Symptoms</h3>
            <p className="text-gray-600">Tell us about your symptoms, their severity, and duration.</p>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-medium">Quick Analysis</h3>
            <p className="text-gray-600">Our AI analyzes your symptoms against thousands of conditions.</p>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              <AlertCircle className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-medium">Get Insights</h3>
            <p className="text-gray-600">Receive information about possible conditions and next steps.</p>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-medium">Take Action</h3>
            <p className="text-gray-600">Connect with healthcare providers based on your results.</p>
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-center">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> This tool provides preliminary information only and is not a substitute for
            professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider
            for medical concerns.
          </p>
        </div>
      </div>
    </section>
  )
}
