import { Button } from "@/components/ui/button"
import { Video, ArrowRight } from "lucide-react"

export default function TeleconsultationCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Healthcare from Home?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of Rwandans who are accessing quality healthcare through our teleconsultation service. Your
            first consultation is just a few clicks away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-900 hover:bg-white/90 h-12 px-6 text-base">
              <Video className="mr-2 h-5 w-5" /> Start Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-6 text-base">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
