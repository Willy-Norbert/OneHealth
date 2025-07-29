import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Download } from "lucide-react"

export default function CtaSection() {
  const features = [
    "24/7 access to healthcare professionals",
    "Book appointments with specialists",
    "Order medications with home delivery",
    "Emergency assistance when you need it most",
    "AI-powered health monitoring and advice",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Download the ONE HEALTHLINE CONNECT App Today</h2>
            <p className="text-white/80 text-lg">
              Take control of your healthcare journey with our comprehensive mobile application. Access all our services
              anytime, anywhere.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-green-400" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-900 hover:bg-white/90 h-14 px-6">
                <Download className="mr-2 h-5 w-5" /> Download for iOS
              </Button>
              <Button variant="outline" className="border-white text-green-700 hover:bg-white/90 h-14 px-6">
                <Download className="mr-2 h-5 w-5" /> Download for Android
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full filter blur-3xl"></div>

            <div className="relative z-10">
              <div className="relative h-[36rem] w-[18rem] mx-auto">
                 <Image
                      src="/app.png"
                      alt="ONE HEALTHLINE CONNECT App"
                      fill
                      className="object-cover"
                    />
                {/* <div className="absolute inset-0 bg-black rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-gray-800">
                  <div className="absolute top-0 left-0 right-0 h-[30px] bg-black">
                    <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-[100px] h-[10px] bg-gray-800 rounded-full"></div>
                  </div>
                  <div className="absolute top-[30px] bottom-0 left-0 right-0">
                   
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
