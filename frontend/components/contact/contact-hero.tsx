import Image from "next/image"

export default function ContactHero() {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-50 dark:bg-green-900/20 rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 dark:bg-blue-900/20 rounded-tr-full opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Get in <span className="text-green-600">Touch</span> With Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              Have questions or need assistance? Our team is here to help you with any inquiries about our healthcare
              services.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-green-800 dark:text-green-300 font-medium">24/7 Support Available</span>
              </div>
              <div className="flex items-center bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-blue-800 dark:text-blue-300 font-medium">Multiple Contact Channels</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Contact+Us"
                  alt="Contact ONE HEALTHLINE CONNECT"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-green-900/30"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h2 className="text-2xl font-bold text-white">We&apos;re Here For You</h2>
                <p className="text-white/90">Reach out through your preferred channel</p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
              Quick Response
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg">
              Professional Support
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
