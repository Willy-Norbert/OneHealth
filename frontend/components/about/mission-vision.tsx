import { Target, Eye } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-green-50 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="bg-green-600 text-white p-4 rounded-xl inline-flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To revolutionize healthcare delivery in Rwanda by providing accessible, affordable, and high-quality
                healthcare services through innovative digital solutions. We aim to connect patients with healthcare
                providers seamlessly, ensuring that every Rwandan has access to the care they need, when they need it.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-blue-50 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="bg-blue-600 text-white p-4 rounded-xl inline-flex items-center justify-center mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the leading digital healthcare platform in Rwanda and East Africa, creating a healthcare ecosystem
                where technology bridges the gap between patients and healthcare providers. We envision a future where
                every Rwandan, regardless of location or economic status, has equal access to quality healthcare
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
