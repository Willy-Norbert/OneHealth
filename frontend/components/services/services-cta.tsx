import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export default function ServicesCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Healthcare Experience?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Download the ONE HEALTHLINE CONNECT app today and gain access to comprehensive healthcare services at your
            fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-900 hover:bg-white/90 h-12 px-6 text-base">
              <Download className="mr-2 h-5 w-5" /> Download Our App
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-6 text-base">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
