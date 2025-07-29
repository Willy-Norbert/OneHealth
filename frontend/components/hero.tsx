import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-10 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">24/7 Healthcare Services</span>
            </div>

            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Healthcare <span className="text-green-600">Reimagined</span> for Rwanda
            </h1>

            <p className="text-lg text-gray-700 max-w-xl">
              ONE HEALTHLINE CONNECT brings advanced healthcare to your fingertips. Connect with specialists, book
              appointments, access emergency services, and manage your health journey—all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700 h-12 px-6 text-base">Get Started</Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 h-12 px-6 text-base">
                Emergency Assistance
              </Button>
            </div>


            {/* <div className="flex items-center space-x-4 mt-6">
              <div className="bg-blue-100 text-blue-800 rounded-full p-2">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">24/7 Availability</h3>
                <p className="text-gray-600">Always here for you, day or night</p>
              </div>
            </div> */}

            {/* Avatars */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
              {["/avatar1.png", "/avatar2.png", "/avatar3.png", "/avatar4.png"].map((src, index) => (
                <div
                key={index}
                className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden"
                >
                <Image src={src} alt={`User ${index + 1}`} width={40} height={40} />
                </div>
              ))}
              </div>
              <div>
              <div className="font-bold text-gray-900">1,200+ Users</div>
              <div className="text-sm text-gray-600">Trust our services</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-100 rounded-full z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-green-100 rounded-full z-0"></div>

            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/hero.png"
                  alt="Doctor consulting with patient"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay info card */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">Virtual Consultations</h3>
                <p className="text-white/80 text-sm mt-2">Connect with specialists from the comfort of your home</p>
              </div>

              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                NEW
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
