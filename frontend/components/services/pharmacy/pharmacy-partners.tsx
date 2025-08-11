import Image from "next/image"

export default function PharmacyPartners() {
  const partners = [
    {
      name: "Kigali Pharmacy Network",
      logo: "/placeholder.svg?height=100&width=200&text=Kigali+Pharmacy",
      description:
        "A network of 20+ pharmacies across Kigali providing a wide range of medications and healthcare products.",
      locations: "Kigali City",
      specialties: "Prescription medications, Chronic disease management",
    },
    {
      name: "Butare Medical Supplies",
      logo: "/placeholder.svg?height=100&width=200&text=Butare+Medical",
      description:
        "Specialized in hospital-grade medications and supplies with extensive inventory of rare medications.",
      locations: "Southern Province",
      specialties: "Specialized medications, Hospital supplies",
    },
    {
      name: "Musanze Health Pharmacy",
      logo: "/placeholder.svg?height=100&width=200&text=Musanze+Health",
      description:
        "Serving the Northern Province with focus on rural healthcare needs and affordable medication options.",
      locations: "Northern Province",
      specialties: "Rural healthcare, Affordable medications",
    },
    {
      name: "Rubavu Medication Center",
      logo: "/placeholder.svg?height=100&width=200&text=Rubavu+Center",
      description: "Western Rwanda's largest pharmacy network with international medication sourcing capabilities.",
      locations: "Western Province",
      specialties: "International medications, Specialty drugs",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Trusted <span className="text-purple-600">Pharmacy Partners</span>
          </h2>
          <p className="text-xl text-gray-600">
            We&apos;ve partnered with Rwanda&apos;s most reliable pharmacies to ensure you receive authentic medications with
            professional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={200}
                      height={100}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>

                  <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Locations</p>
                      <p className="text-purple-600 font-medium">{partner.locations}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Specialties</p>
                      <p className="text-purple-600 font-medium">{partner.specialties}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-purple-50 px-6 py-3 rounded-full">
            <p className="text-purple-800 font-medium">
              All partner pharmacies are licensed by the Rwanda Pharmacy Council and follow strict quality standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
