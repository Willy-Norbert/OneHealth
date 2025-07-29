import { Heart, Brain, Bone, Thermometer, Droplets, Pill, LigatureIcon as Bandage, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EmergencyTypes() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Emergency Situations We Handle</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Our emergency teams are trained and equipped to respond to a wide range of medical emergencies across
            Rwanda.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-red-100">
            <CardHeader className="pb-2">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Heart className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl">Cardiac Emergencies</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Heart attacks, chest pain, cardiac arrest, and other heart-related emergencies requiring immediate
                attention.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-red-100">
            <CardHeader className="pb-2">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Brain className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl">Neurological Emergencies</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Strokes, seizures, severe headaches, and other neurological conditions requiring rapid response.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-red-100">
            <CardHeader className="pb-2">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Bone className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl">Trauma & Injuries</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Serious injuries from accidents, falls, or violence requiring immediate medical intervention.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-red-100">
            <CardHeader className="pb-2">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Thermometer className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl">Respiratory Distress</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Severe asthma attacks, difficulty breathing, choking, and other respiratory emergencies.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-red-100">
            <CardHeader className="pb-2">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Droplets className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl">Severe Bleeding</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Uncontrolled bleeding from injuries, wounds, or medical conditions requiring immediate treatment.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-red-100">
            <CardHeader className="pb-2">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Pill className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl">Poisoning & Overdose</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Accidental or intentional poisoning, drug overdoses, and adverse reactions requiring urgent care.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-red-100">
            <CardHeader className="pb-2">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Bandage className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl">Burns & Scalds</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Serious burns from fire, chemicals, electricity, or hot liquids requiring specialized treatment.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-red-100">
            <CardHeader className="pb-2">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl">Other Emergencies</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Allergic reactions, diabetic emergencies, pregnancy complications, and other urgent medical situations.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 rounded-lg bg-red-50 p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">When to Call Emergency Services</h3>
          <p className="mb-4 text-gray-700">
            Call our emergency number (912) immediately if you or someone around you experiences:
          </p>
          <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-center text-gray-700">
              <span className="mr-2 text-red-600">•</span> Chest pain or pressure
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2 text-red-600">•</span> Difficulty breathing
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2 text-red-600">•</span> Sudden weakness or numbness
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2 text-red-600">•</span> Severe bleeding
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2 text-red-600">•</span> Severe burns
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2 text-red-600">•</span> Poisoning or overdose
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2 text-red-600">•</span> Serious injuries
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2 text-red-600">•</span> Seizures
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2 text-red-600">•</span> Unconsciousness
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
