import { MapPin } from "lucide-react"

export default function EmergencyLocations() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Emergency Coverage Areas</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            ONE HEALTHLINE CONNECT provides emergency medical services across the country, with strategic locations to ensure
            rapid response times.
          </p>
        </div>

        <div className="mb-12 overflow-hidden rounded-lg bg-white shadow-md">
          <div className="relative h-[400px] w-full bg-gray-200">
            {/* This would be replaced with an actual map component in production */}
            <div className="absolute inset-0 flex items-center justify-center bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center">
              <div className="rounded-lg bg-white/80 p-4 text-center backdrop-blur-sm">
                <p className="text-lg font-semibold text-gray-900">Interactive Map Coming Soon</p>
                <p className="text-gray-600">View our emergency response units across Rwanda</p>
              </div>
            </div>

            {/* Sample location markers */}
            <div className="absolute left-[25%] top-[30%] flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="absolute left-[45%] top-[20%] flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="absolute left-[65%] top-[40%] flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="absolute left-[35%] top-[60%] flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="absolute left-[55%] top-[70%] flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
              <MapPin className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Location 1 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Kigali Central</h3>
            <div className="mb-4 flex items-center text-gray-600">
              <MapPin className="mr-2 h-5 w-5 text-red-600" />
              <p>KN 5 Ave, Kigali, Rwanda</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Coverage Area:</p>
              <p className="text-gray-600">Nyarugenge, Kicukiro, Gasabo</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Response Time:</p>
              <p className="text-gray-600">5-10 minutes</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Emergency Units:</p>
              <p className="text-gray-600">8 Ambulances, 4 Rapid Response Vehicles</p>
            </div>
          </div>

          {/* Location 2 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Butare Station</h3>
            <div className="mb-4 flex items-center text-gray-600">
              <MapPin className="mr-2 h-5 w-5 text-red-600" />
              <p>Huye District, Southern Province</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Coverage Area:</p>
              <p className="text-gray-600">Huye, Gisagara, Nyanza</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Response Time:</p>
              <p className="text-gray-600">10-15 minutes</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Emergency Units:</p>
              <p className="text-gray-600">5 Ambulances, 2 Rapid Response Vehicles</p>
            </div>
          </div>

          {/* Location 3 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Musanze Center</h3>
            <div className="mb-4 flex items-center text-gray-600">
              <MapPin className="mr-2 h-5 w-5 text-red-600" />
              <p>Musanze District, Northern Province</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Coverage Area:</p>
              <p className="text-gray-600">Musanze, Burera, Gakenke</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Response Time:</p>
              <p className="text-gray-600">10-20 minutes</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Emergency Units:</p>
              <p className="text-gray-600">4 Ambulances, 2 Rapid Response Vehicles</p>
            </div>
          </div>

          {/* Location 4 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Rubavu Station</h3>
            <div className="mb-4 flex items-center text-gray-600">
              <MapPin className="mr-2 h-5 w-5 text-red-600" />
              <p>Rubavu District, Western Province</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Coverage Area:</p>
              <p className="text-gray-600">Rubavu, Nyabihu, Rutsiro</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Response Time:</p>
              <p className="text-gray-600">10-20 minutes</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Emergency Units:</p>
              <p className="text-gray-600">4 Ambulances, 2 Rapid Response Vehicles</p>
            </div>
          </div>

          {/* Location 5 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Rwamagana Center</h3>
            <div className="mb-4 flex items-center text-gray-600">
              <MapPin className="mr-2 h-5 w-5 text-red-600" />
              <p>Rwamagana District, Eastern Province</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Coverage Area:</p>
              <p className="text-gray-600">Rwamagana, Kayonza, Ngoma</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Response Time:</p>
              <p className="text-gray-600">15-25 minutes</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Emergency Units:</p>
              <p className="text-gray-600">3 Ambulances, 2 Rapid Response Vehicles</p>
            </div>
          </div>

          {/* Location 6 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Nyagatare Station</h3>
            <div className="mb-4 flex items-center text-gray-600">
              <MapPin className="mr-2 h-5 w-5 text-red-600" />
              <p>Nyagatare District, Eastern Province</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Coverage Area:</p>
              <p className="text-gray-600">Nyagatare, Gatsibo</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Response Time:</p>
              <p className="text-gray-600">15-30 minutes</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Emergency Units:</p>
              <p className="text-gray-600">3 Ambulances, 1 Rapid Response Vehicle</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-gray-900">
            Our emergency services cover all 30 districts of Rwanda, with strategic locations to minimize response
            times.
          </p>
          <p className="mt-2 text-gray-600">
            In remote areas, we utilize helicopter medical evacuation when necessary to ensure timely care.
          </p>
        </div>
      </div>
    </section>
  )
}
