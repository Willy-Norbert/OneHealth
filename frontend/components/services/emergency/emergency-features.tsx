import { CheckCircle2, Clock, MapPin, HeartPulse, Stethoscope, Truck, Phone, Shield } from "lucide-react"

export default function EmergencyFeatures() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Emergency Service Features</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            ONE HEALTHLINE CONNECT provides comprehensive emergency medical services designed to deliver rapid, professional
            care when you need it most.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Rapid Response</h3>
            <p className="text-gray-600">
              Our emergency teams aim to reach you within 5-15 minutes in urban areas and 15-30 minutes in rural
              locations.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Nationwide Coverage</h3>
            <p className="text-gray-600">
              With emergency response units strategically located across Rwanda, we ensure help is always nearby.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <HeartPulse className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Advanced Life Support</h3>
            <p className="text-gray-600">
              Our ambulances are equipped with advanced life support equipment and staffed by trained paramedics.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Stethoscope className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Medical Professionals</h3>
            <p className="text-gray-600">
              Our emergency teams include doctors, nurses, and paramedics trained in emergency medicine.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Modern Ambulance Fleet</h3>
            <p className="text-gray-600">
              Our fleet of modern ambulances is equipped with the latest medical technology for on-site treatment.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">24/7 Dispatch Center</h3>
            <p className="text-gray-600">
              Our emergency dispatch center is staffed around the clock to coordinate rapid response to emergencies.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Hospital Network</h3>
            <p className="text-gray-600">
              Direct coordination with hospitals ensures seamless transfer and immediate care upon arrival.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Insurance Coordination</h3>
            <p className="text-gray-600">
              We work with all major insurance providers to ensure your emergency care is covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
