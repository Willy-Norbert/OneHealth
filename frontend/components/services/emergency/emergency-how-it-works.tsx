import { Phone, Ambulance, Hospital, ClipboardCheck } from "lucide-react"

export default function EmergencyHowItWorks() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">How Our Emergency Service Works</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            When every second counts, our streamlined emergency response process ensures you get the care you need as
            quickly as possible.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-red-200 md:block"></div>

          {/* Step 1 */}
          <div className="relative mb-16">
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-8 flex w-full flex-col items-center text-center md:mb-0 md:w-1/2 md:items-end md:pr-8 md:text-right">
                <div className="mb-4 rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">Call Emergency Number</h3>
                  <p className="text-gray-600">
                    Dial our emergency number (912) to reach our 24/7 dispatch center. Our trained operators will ask
                    key questions to assess the situation.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-red-600 text-white">
                <Phone className="h-6 w-6" />
              </div>
              <div className="w-full md:w-1/2 md:pl-8"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-16">
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-8 flex w-full flex-col items-center text-center md:mb-0 md:w-1/2 md:items-end md:pr-8 md:text-right"></div>
              <div className="absolute left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-red-600 text-white">
                <Ambulance className="h-6 w-6" />
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">Rapid Dispatch</h3>
                  <p className="text-gray-600">
                    Based on your location and emergency type, we dispatch the nearest appropriate emergency response
                    unit to your location.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative mb-16">
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-8 flex w-full flex-col items-center text-center md:mb-0 md:w-1/2 md:items-end md:pr-8 md:text-right">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">On-Site Treatment</h3>
                  <p className="text-gray-600">
                    Our emergency medical team arrives and provides immediate on-site assessment and treatment to
                    stabilize the patient.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-red-600 text-white">
                <ClipboardCheck className="h-6 w-6" />
              </div>
              <div className="w-full md:w-1/2 md:pl-8"></div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-8 flex w-full flex-col items-center text-center md:mb-0 md:w-1/2 md:items-end md:pr-8 md:text-right"></div>
              <div className="absolute left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-red-600 text-white">
                <Hospital className="h-6 w-6" />
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">Hospital Transport</h3>
                  <p className="text-gray-600">
                    If needed, we transport the patient to the most appropriate medical facility, communicating with the
                    hospital to ensure seamless care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-lg bg-red-50 p-6 text-center">
          <p className="text-lg font-medium text-red-800">
            In life-threatening situations, every minute matters. Don&apos;t hesitate to call our emergency number:{" "}
            <span className="font-bold">912</span>
          </p>
        </div>
      </div>
    </section>
  )
}
