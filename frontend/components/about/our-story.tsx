import Image from "next/image"

export default function OurStory() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600">
            The journey of ONE HEALTHLINE CONNECT from an idea to Rwanda&apos;s leading healthcare platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Beginning</h3>
                <p className="text-gray-700">
                  ONE HEALTHLINE CONNECT was born out of a personal experience of our founder, Dr. Jean Mugabo, who witnessed
                  firsthand the challenges faced by rural communities in accessing quality healthcare. After losing a
                  family member due to delayed medical attention, he was determined to find a solution that would bridge
                  the gap between patients and healthcare providers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Challenge</h3>
                <p className="text-gray-700">
                  In Rwanda, many people still struggle to access healthcare services due to geographical barriers,
                  limited resources, and a shortage of healthcare professionals. This is particularly true for those
                  living in rural areas, who often have to travel long distances to reach the nearest healthcare
                  facility.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Solution</h3>
                <p className="text-gray-700">
                  Leveraging the high mobile phone penetration in Rwanda, we created a digital platform that connects
                  patients with healthcare providers, allowing them to access medical consultations, book appointments,
                  order medications, and receive emergency assistance—all from their mobile devices. By integrating
                  artificial intelligence, we&apos;ve also been able to provide personalized health monitoring and advice.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Today</h3>
                <p className="text-gray-700">
                  Today, ONE HEALTHLINE CONNECT serves thousands of patients across the country, partnering with major
                  hospitals, clinics, and pharmacies to provide comprehensive healthcare services. Our team has grown to
                  include healthcare professionals, technology experts, and business leaders, all united by a common
                  mission to improve healthcare access in Rwanda.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400&text=Founding+Team"
                        alt="Founding Team"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400&text=First+Office"
                        alt="First Office"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400&text=Early+Prototype"
                        alt="Early Prototype"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400&text=Current+Team"
                        alt="Current Team"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
