 
 
"use client"

import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertTriangle,
  Info,
  CheckCircle,
  ArrowRight,
  RefreshCw,
  Calendar,
  PhoneCall,
  MessageSquare,
  Pill,
} from "lucide-react"


// Mock data for demonstration purposes
const mockConditions = {
  Headache: [
    {
      name: "Tension headache",
      probability: "High",
      urgency: "Low",
      description:
        "Common headache with mild to moderate pain, often described as feeling like a tight band around the head.",
    },
    {
      name: "Migraine",
      probability: "Medium",
      urgency: "Medium",
      description:
        "Recurring headaches that often cause throbbing pain on one side of the head, sometimes with nausea and sensitivity to light and sound.",
    },
    {
      name: "Cluster headache",
      probability: "Low",
      urgency: "Medium",
      description: "Extremely painful headaches occurring in clusters or cyclical patterns.",
    },
  ],
  Fever: [
    {
      name: "Common cold",
      probability: "High",
      urgency: "Low",
      description: "Viral infection causing mild fever, runny nose, sore throat, and general discomfort.",
    },
    {
      name: "Influenza",
      probability: "Medium",
      urgency: "Medium",
      description: "Viral infection with sudden onset of fever, muscle aches, fatigue, and respiratory symptoms.",
    },
    {
      name: "COVID-19",
      probability: "Medium",
      urgency: "High",
      description: "Viral infection that can cause fever, cough, fatigue, and loss of taste or smell.",
    },
  ],
  Cough: [
    {
      name: "Common cold",
      probability: "High",
      urgency: "Low",
      description: "Viral infection causing cough, runny nose, sore throat, and mild fever.",
    },
    {
      name: "Bronchitis",
      probability: "Medium",
      urgency: "Medium",
      description: "Inflammation of the bronchial tubes causing cough with mucus, chest discomfort, and fatigue.",
    },
    {
      name: "Pneumonia",
      probability: "Low",
      urgency: "High",
      description:
        "Infection causing inflammation in the air sacs of the lungs, with symptoms including cough, fever, and difficulty breathing.",
    },
  ],
  "Abdominal pain": [
    {
      name: "Indigestion",
      probability: "High",
      urgency: "Low",
      description: "Discomfort or pain in the upper abdomen, often after eating.",
    },
    {
      name: "Gastritis",
      probability: "Medium",
      urgency: "Medium",
      description: "Inflammation of the stomach lining causing pain, nausea, and sometimes vomiting.",
    },
    {
      name: "Appendicitis",
      probability: "Low",
      urgency: "High",
      description:
        "Inflammation of the appendix causing pain that typically begins around the navel and shifts to the lower right abdomen.",
    },
  ],
  Fatigue: [
    {
      name: "Stress",
      probability: "High",
      urgency: "Low",
      description: "Physical and emotional exhaustion due to prolonged stress.",
    },
    {
      name: "Anemia",
      probability: "Medium",
      urgency: "Medium",
      description:
        "Condition where you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues.",
    },
    {
      name: "Chronic fatigue syndrome",
      probability: "Low",
      urgency: "Medium",
      description:
        "Complex disorder characterized by extreme fatigue that can't be explained by any underlying medical condition.",
    },
  ],
}

type FormData = {
  age: number
  gender: string
  mainSymptom: string
  bodyPart: string
  duration: string
  severity: number
  additionalSymptoms: string[]
}

export default function SymptomResults({ formData, onReset }: { formData: FormData; onReset: () => void }) {
  const [activeTab, setActiveTab] = useState("conditions")

  // Get mock results based on main symptom
  const getResults = () => {
    const symptom = formData.mainSymptom
    // Find closest match in our mock data
    const matchingSymptom = Object.keys(mockConditions).find(
      (key) => key.toLowerCase().includes(symptom.toLowerCase()) || symptom.toLowerCase().includes(key.toLowerCase()),
    )

    return matchingSymptom ? mockConditions[matchingSymptom as keyof typeof mockConditions] : mockConditions["Headache"] // Default to headache if no match
  }

  const results = getResults()

  // Determine overall urgency based on highest urgency condition
  const getOverallUrgency = () => {
    if (results.some((r: { urgency: string }) => r.urgency === "High")) return "high"
    if (results.some((r: { urgency: string }) => r.urgency === "Medium")) return "medium"
    return "low"
  }

  const urgency = getOverallUrgency()

  const urgencyConfig = {
    high: {
      color: "bg-red-100 text-red-800 border-red-200",
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
      text: "Seek medical attention soon",
      description: "Based on your symptoms, we recommend consulting with a healthcare provider within 24-48 hours.",
    },
    medium: {
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      icon: <Info className="h-6 w-6 text-yellow-600" />,
      text: "Consider medical advice",
      description:
        "Your symptoms suggest you should consider speaking with a healthcare provider in the next few days.",
    },
    low: {
      color: "bg-green-100 text-green-800 border-green-200",
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      text: "Self-care may be appropriate",
      description:
        "Your symptoms appear to be mild. Self-care measures may be appropriate, but monitor for any changes.",
    },
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Your Symptom Analysis</h2>
            <p className="text-lg text-gray-600">
              Based on the information you provided, here's our preliminary analysis.
            </p>
          </div>

          <div className={`mb-8 rounded-lg border p-6 ${urgencyConfig[urgency].color}`}>
            <div className="flex items-start">
              <div className="mr-4 flex-shrink-0">{urgencyConfig[urgency].icon}</div>
              <div>
                <h3 className="mb-2 text-xl font-bold">{urgencyConfig[urgency].text}</h3>
                <p>{urgencyConfig[urgency].description}</p>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Symptom Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-500">Age:</span>
                    <span>{formData.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-500">Gender:</span>
                    <span className="capitalize">{formData.gender}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-500">Main Symptom:</span>
                    <span>{formData.mainSymptom}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-500">Location:</span>
                    <span>{formData.bodyPart}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-500">Duration:</span>
                    <span>{formData.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-500">Severity:</span>
                    <span>{formData.severity}/10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-500">Additional Symptoms:</span>
                    <span>
                      {formData.additionalSymptoms.length > 0 ? formData.additionalSymptoms.join(", ") : "None"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="conditions">Possible Conditions</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              <TabsTrigger value="next-steps">Next Steps</TabsTrigger>
            </TabsList>

            <TabsContent value="conditions" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Possible Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {results.map((condition: { name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; probability: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; urgency: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }, index: Key | null | undefined) => (
                      <div key={index} className="rounded-lg border p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <h4 className="text-lg font-bold">{condition.name}</h4>
                          <div
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              condition.probability === "High"
                                ? "bg-blue-100 text-blue-800"
                                : condition.probability === "Medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {condition.probability} probability
                          </div>
                        </div>
                        <p className="text-gray-600">{condition.description}</p>
                        <div className="mt-2 flex justify-between">
                          <span className="text-sm font-medium text-gray-500">Urgency:</span>
                          <span
                            className={`text-sm font-medium ${
                              condition.urgency === "High"
                                ? "text-red-600"
                                : condition.urgency === "Medium"
                                  ? "text-yellow-600"
                                  : "text-green-600"
                            }`}
                          >
                            {condition.urgency}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Disclaimer:</strong> This analysis is based on the symptoms you reported and is not a
                      medical diagnosis. The list of possible conditions is not exhaustive, and the probability
                      estimates are approximate.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {urgency === "high" && (
                      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                        <h4 className="mb-2 text-lg font-bold text-red-800">Medical Attention Recommended</h4>
                        <p className="text-red-700">
                          Based on your symptoms, we recommend you seek medical attention within 24-48 hours. Your
                          symptoms could indicate a condition that requires professional evaluation.
                        </p>
                      </div>
                    )}

                    {urgency === "medium" && (
                      <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                        <h4 className="mb-2 text-lg font-bold text-yellow-800">Medical Advice Suggested</h4>
                        <p className="text-yellow-700">
                          Your symptoms suggest you should consider speaking with a healthcare provider in the next few
                          days. While not urgent, professional evaluation would be beneficial.
                        </p>
                      </div>
                    )}

                    {urgency === "low" && (
                      <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                        <h4 className="mb-2 text-lg font-bold text-green-800">Self-Care Appropriate</h4>
                        <p className="text-green-700">
                          Your symptoms appear to be mild. Self-care measures may be appropriate, but monitor for any
                          changes or worsening of symptoms.
                        </p>
                      </div>
                    )}

                    <div className="rounded-lg border p-4">
                      <h4 className="mb-2 text-lg font-bold">General Recommendations</h4>
                      <ul className="ml-6 list-disc space-y-2">
                        <li>Monitor your symptoms and note any changes</li>
                        <li>Stay hydrated and get adequate rest</li>
                        <li>Avoid activities that worsen your symptoms</li>
                        <li>
                          Consider over-the-counter medications appropriate for your symptoms (consult a pharmacist if
                          unsure)
                        </li>
                        <li>If symptoms worsen or new symptoms develop, seek medical advice</li>
                      </ul>
                    </div>

                    {formData.mainSymptom.toLowerCase().includes("head") && (
                      <div className="rounded-lg border p-4">
                        <h4 className="mb-2 text-lg font-bold">Specific Recommendations for Headache</h4>
                        <ul className="ml-6 list-disc space-y-2">
                          <li>Rest in a quiet, dark room</li>
                          <li>Apply a cold or warm compress to your head</li>
                          <li>Practice relaxation techniques</li>
                          <li>Consider over-the-counter pain relievers like acetaminophen or ibuprofen</li>
                          <li>Stay hydrated and maintain regular meals</li>
                        </ul>
                      </div>
                    )}

                    {formData.mainSymptom.toLowerCase().includes("fever") && (
                      <div className="rounded-lg border p-4">
                        <h4 className="mb-2 text-lg font-bold">Specific Recommendations for Fever</h4>
                        <ul className="ml-6 list-disc space-y-2">
                          <li>Rest and stay hydrated</li>
                          <li>Take acetaminophen or ibuprofen to reduce fever</li>
                          <li>Use a lukewarm compress to cool down</li>
                          <li>Dress in lightweight clothing</li>
                          <li>Monitor your temperature regularly</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="next-steps" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4 transition-colors hover:bg-gray-50">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <h4 className="mb-2 text-lg font-bold">Book an Appointment</h4>
                      <p className="mb-4 text-gray-600">
                        Schedule an in-person or virtual appointment with one of our healthcare providers.
                      </p>
                      <Button className="w-full">
                        Book Appointment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="rounded-lg border p-4 transition-colors hover:bg-gray-50">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <PhoneCall className="h-6 w-6" />
                      </div>
                      <h4 className="mb-2 text-lg font-bold">Teleconsultation</h4>
                      <p className="mb-4 text-gray-600">
                        Speak with a healthcare provider via video call for immediate advice.
                      </p>
                      <Button className="w-full">
                        Start Teleconsultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="rounded-lg border p-4 transition-colors hover:bg-gray-50">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <h4 className="mb-2 text-lg font-bold">Chat with AI Assistant</h4>
                      <p className="mb-4 text-gray-600">
                        Get more information about your symptoms from our AI health assistant.
                      </p>
                      <Button className="w-full">
                        Chat with AI
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="rounded-lg border p-4 transition-colors hover:bg-gray-50">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <Pill className="h-6 w-6" />
                      </div>
                      <h4 className="mb-2 text-lg font-bold">Pharmacy Services</h4>
                      <p className="mb-4 text-gray-600">
                        Order medications or consult with a pharmacist about over-the-counter options.
                      </p>
                      <Button className="w-full">
                        Explore Pharmacy
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center">
            <Button variant="outline" onClick={onReset}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Start New Symptom Check
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
