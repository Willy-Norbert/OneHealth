import Image from "next/image"
import { Truck, Clock, MapPin, Shield, ThermometerSnowflake, CheckCircle, AlertTriangle } from "lucide-react"

export default function PharmacyDelivery() {
  const deliveryZones = [
    {
      zone: "Kigali Urban",
      time: "1-3 hours",
      fee: "RWF 1,500",
      express: "Available (1 hour)",
    },
    {
      zone: "Kigali Suburbs",
      time: "2-4 hours",
      fee: "RWF 2,000",
      express: "Available (1.5 hours)",
    },
    {
      zone: "Provincial Cities",
      time: "Same day",
      fee: "RWF 3,000",
      express: "Available (3 hours)",
    },
    {
      zone: "Rural Areas",
      time: "Next day",
      fee: "RWF 4,000",
      express: "Not available",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fast & Reliable <span className="text-purple-600">Medication Delivery</span>
          </h2>
          <p className="text-xl text-gray-600">
            We deliver medications safely and promptly to your doorstep, ensuring you never run out of essential
            treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 rounded-full z-0"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Medication+Delivery"
                alt="Medication delivery service"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full z-0"></div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nationwide Coverage</h3>
                <p className="text-gray-600">
                  We deliver to all provinces in Rwanda, including remote areas, ensuring everyone has access to
                  essential medications.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Express Delivery</h3>
                <p className="text-gray-600">
                  Need medications urgently? Our express delivery service ensures you receive critical medications
                  within 1-3 hours in urban areas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Packaging</h3>
                <p className="text-gray-600">
                  All medications are securely packaged to maintain integrity, protect privacy, and ensure they reach
                  you in perfect condition.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <ThermometerSnowflake className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Temperature Control</h3>
                <p className="text-gray-600">
                  Sensitive medications are transported in temperature-controlled containers to maintain their efficacy
                  and safety.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Zones Table */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Delivery Zones & Timeframes</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-4 text-left text-gray-600 font-medium">Zone</th>
                  <th className="py-4 px-4 text-left text-gray-600 font-medium">Standard Delivery</th>
                  <th className="py-4 px-4 text-left text-gray-600 font-medium">Delivery Fee</th>
                  <th className="py-4 px-4 text-left text-gray-600 font-medium">Express Option</th>
                </tr>
              </thead>
              <tbody>
                {deliveryZones.map((zone, index) => (
                  <tr key={index} className={index < deliveryZones.length - 1 ? "border-b border-gray-200" : ""}>
                    <td className="py-4 px-4 font-medium text-gray-900">{zone.zone}</td>
                    <td className="py-4 px-4 text-gray-600">{zone.time}</td>
                    <td className="py-4 px-4 text-gray-600">{zone.fee}</td>
                    <td className="py-4 px-4">
                      {zone.express.includes("Available") ? (
                        <span className="inline-flex items-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" /> {zone.express}
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-gray-500">
                          <AlertTriangle className="h-4 w-4 mr-1" /> {zone.express}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Delivery Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-[16/9] relative">
            <Image
              src="/placeholder.svg?height=600&width=1200&text=Rwanda+Delivery+Coverage+Map"
              alt="Rwanda medication delivery coverage map"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 p-6 rounded-lg max-w-md text-center">
                <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nationwide Coverage</h3>
                <p className="text-gray-600">
                  Our delivery network covers all 30 districts of Rwanda, ensuring medication access for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
