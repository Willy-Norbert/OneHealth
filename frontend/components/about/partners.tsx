import Image from "next/image"

export default function Partners() {
  const partners = [
    {
      name: "Kigali University Hospital",
      logo: "/placeholder.svg?height=100&width=200&text=KUH",
      type: "Hospital",
    },
    {
      name: "Rwanda Ministry of Health",
      logo: "/placeholder.svg?height=100&width=200&text=RMoH",
      type: "Government",
    },
    {
      name: "Rwanda Biomedical Center",
      logo: "/placeholder.svg?height=100&width=200&text=RBC",
      type: "Research",
    },
    {
      name: "Butaro Hospital",
      logo: "/placeholder.svg?height=100&width=200&text=Butaro",
      type: "Hospital",
    },
    {
      name: "Kigali Pharmaceuticals",
      logo: "/placeholder.svg?height=100&width=200&text=KP",
      type: "Pharmacy",
    },
    {
      name: "Rwanda Telecom",
      logo: "/placeholder.svg?height=100&width=200&text=RT",
      type: "Technology",
    },
    {
      name: "African Health Network",
      logo: "/placeholder.svg?height=100&width=200&text=AHN",
      type: "NGO",
    },
    {
      name: "Digital Rwanda Initiative",
      logo: "/placeholder.svg?height=100&width=200&text=DRI",
      type: "Technology",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-gray-600">
            Collaborating with leading healthcare providers and organizations to deliver exceptional care
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center h-full transition-all duration-300 hover:shadow-md hover:bg-gray-100">
                <div className="relative h-16 w-full mb-4">
                  <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </div>
                <h3 className="font-medium text-gray-900 text-center">{partner.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{partner.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
