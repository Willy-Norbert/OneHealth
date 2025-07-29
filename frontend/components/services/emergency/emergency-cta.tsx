import { Button } from "@/components/ui/button"
import { PhoneCall, Info } from "lucide-react"

export default function EmergencyCta() {
  return (
    <section className="bg-red-600 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Emergency Medical Care When You Need It Most</h2>
          <p className="mb-8 text-lg md:text-xl">
            ONE HEALTHLINE CONNECT&apos;s emergency services are available 24/7 across the country. Save our emergency number for
            when you need immediate medical assistance.
          </p>

          <div className="mb-10 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
            <div className="mb-4 text-center">
              <h3 className="text-2xl font-bold">Emergency Hotline</h3>
              <p className="text-4xl font-bold md:text-5xl">912</p>
            </div>
            <p className="text-center">Available 24 hours a day, 7 days a week, 365 days a year</p>
          </div>

          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <PhoneCall className="mr-2 h-5 w-5" />
              Save Emergency Number
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              <Info className="mr-2 h-5 w-5" />
              Learn About Our Services
            </Button>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <h4 className="mb-2 font-semibold">Download Our App</h4>
              <p className="text-sm">Get one-touch emergency calling and share your location automatically</p>
            </div>

            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <h4 className="mb-2 font-semibold">Emergency Training</h4>
              <p className="text-sm">Learn basic first aid and CPR through our community training programs</p>
            </div>

            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <h4 className="mb-2 font-semibold">Emergency Preparedness</h4>
              <p className="text-sm">Create an emergency plan for your family with our free resources</p>
            </div>
          </div>

          <p className="mt-10 text-sm">Remember: In case of emergency, call 912 immediately. Every second counts.</p>
        </div>
      </div>
    </section>
  )
}
