import { Button } from "@/components/ui/button"
import { Calendar, Phone, ArrowRight } from "lucide-react"

export default function DepartmentCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Specialized Medical Care?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Connect with our specialists across various departments for expert diagnosis and treatment tailored to your
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-900 hover:bg-white/90 h-12 px-6 text-base">
              <Calendar className="mr-2 h-5 w-5" /> Book a Specialist
            </Button>
            <Button variant="outline" className="border-white text-green-600 hover:bg-white/90 h-12 px-6 text-base">
              <Phone className="mr-2 h-5 w-5" /> Emergency Assistance
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p>
              Not sure which department you need?{" "}
              <a href="#" className="text-white underline hover:text-white/90">
                Try our symptom checker <ArrowRight className="inline h-4 w-4" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
