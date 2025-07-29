import { Button } from "@/components/ui/button"
import { Pill, ArrowRight, Phone } from "lucide-react"

export default function PharmacyCta() {
  return (
    <section className="py-20 bg-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Medications Delivered Today</h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Never run out of essential medications again. Order now and experience the convenience of having your
            prescriptions delivered right to your doorstep.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Easy Ordering</h3>
              <p className="text-purple-100">
                Upload your prescription or select from our wide range of over-the-counter medications.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-purple-100">
                Receive your medications within hours in urban areas and same-day in most locations.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-purple-100">
                Get advice from licensed pharmacists about your medications and potential interactions.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Order Medications <Pill className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-700">
              Upload Prescription <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-700">
              <Phone className="mr-2 h-5 w-5" /> Call a Pharmacist
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
