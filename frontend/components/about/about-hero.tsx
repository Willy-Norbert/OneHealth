import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-50 rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-full opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">HEALTHLINE</span> RWANDA
          </h1>
          <p className="text-xl text-gray-600">
            Transforming healthcare access in Rwanda through innovative digital solutions
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-[18/9] relative">
            <Image
              src="/about-hero.png"
              alt="ONE HEALTHLINE CONNECT Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Bridging the Gap in Healthcare Access</h2>
              <p className="text-white/90 text-lg">
                Founded in 2025, ONE HEALTHLINE CONNECT is dedicated to making quality healthcare accessible to all Rwandans
                through technology and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
