import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"

export default function EmergencyHero() {
  return (
    <section className="relative bg-red-800 py-20 text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold text-red-600">
              24/7 EMERGENCY SERVICES
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Immediate Medical Response When Every Second Counts
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Our emergency medical team is available 24/7 across Rwanda to provide rapid response and life-saving care
              during critical situations.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <PhoneCall className="mr-2 h-5 w-5" />
                Call Emergency: 912
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-96">
              <div className="absolute inset-0 flex items-center justify-center bg-red-500/10">
                <div className="grid grid-cols-2 gap-4 p-6 text-center">
                  <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-3xl font-bold md:text-4xl">5-15</p>
                    <p className="text-sm font-medium">Minute Response Time</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-3xl font-bold md:text-4xl">24/7</p>
                    <p className="text-sm font-medium">Service Availability</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-3xl font-bold md:text-4xl">30+</p>
                    <p className="text-sm font-medium">Emergency Vehicles</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-3xl font-bold md:text-4xl">100%</p>
                    <p className="text-sm font-medium">Trained Responders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
