import { LineChart, BarChart, PieChart, Smartphone, FileText, Users, Shield, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function HealthAnalysisFeatures() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Key Features of Our Health Analysis
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Our comprehensive health analysis service offers a range of features designed to provide you with valuable
            insights and actionable recommendations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <LineChart className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-center text-xl font-medium">Trend Analysis</h3>
              <p className="text-center text-gray-600">
                Track changes in your health metrics over time to identify patterns and trends that may indicate
                potential health issues.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-center text-xl font-medium">Detailed Reports</h3>
              <p className="text-center text-gray-600">
                Receive comprehensive reports with detailed analysis of your health metrics, including explanations and
                recommendations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-center text-xl font-medium">Comparative Analysis</h3>
              <p className="text-center text-gray-600">
                Compare your health metrics with standard ranges and population averages to understand your relative
                health status.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-center text-xl font-medium">Expert Consultation</h3>
              <p className="text-center text-gray-600">
                Discuss your health analysis results with our healthcare professionals to get personalized advice and
                recommendations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <PieChart className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-center text-xl font-medium">Risk Assessment</h3>
              <p className="text-center text-gray-600">
                Identify potential health risks based on your metrics, lifestyle factors, and medical history to take
                preventive measures.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-center text-xl font-medium">Mobile Integration</h3>
              <p className="text-center text-gray-600">
                Access your health analysis results and track your progress on-the-go with our mobile app integration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-center text-xl font-medium">Data Security</h3>
              <p className="text-center text-gray-600">
                Your health data is protected with advanced encryption and security measures to ensure privacy and
                confidentiality.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-center text-xl font-medium">Regular Updates</h3>
              <p className="text-center text-gray-600">
                Receive regular updates and reminders to track your health metrics and monitor your progress over time.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-center text-xl font-medium">Personalized Recommendations</h3>
              <p className="text-center text-gray-600">
                Get tailored recommendations for lifestyle changes, preventive measures, and follow-up actions based on
                your analysis results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
