import Image from "next/image"
import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6"

export default function OurTeam() {
  const executives = [
    {
      name: "Dr. Jean Mugabo",
      role: "Founder & CEO",
      bio: "Cardiologist with over 15 years of experience. Passionate about leveraging technology to improve healthcare access.",
      image: "/placeholder.svg?height=400&width=400&text=Dr.+Jean+Mugabo",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Marie Uwase",
      role: "Chief Technology Officer",
      bio: "Former Google engineer with expertise in AI and mobile applications. Led the development of our core platform.",
      image: "/placeholder.svg?height=400&width=400&text=Marie+Uwase",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Eric Ndayishimiye",
      role: "Chief Medical Officer",
      bio: "Experienced healthcare administrator who oversees our medical partnerships and ensures quality of care.",
      image: "/placeholder.svg?height=400&width=400&text=Eric+Ndayishimiye",
      social: {
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Claire Mutesi",
      role: "Chief Operations Officer",
      bio: "Business strategist with a background in healthcare management. Ensures smooth day-to-day operations.",
      image: "/placeholder.svg?height=400&width=400&text=Claire+Mutesi",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-gray-600">
            Meet the dedicated professionals behind ONE HEALTHLINE CONNECT&apos;s mission to transform healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.map((executive, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative">
                  <div className="aspect-square relative">
                    <Image
                      src={executive.image || "/placeholder.svg"}
                      alt={executive.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-center space-x-4">
                        {executive.social.facebook && (
                          <a
                            href={executive.social.facebook}
                            className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                          >
                            <FaFacebook className="h-5 w-5 text-white" />
                          </a>
                        )}
                        {executive.social.twitter && (
                          <a
                            href={executive.social.twitter}
                            className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                          >
                            <FaXTwitter className="h-5 w-5 text-white" />
                          </a>
                        )}
                        {executive.social.linkedin && (
                          <a
                            href={executive.social.linkedin}
                            className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                          >
                            <FaLinkedin className="h-5 w-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900">{executive.name}</h3>
                  <p className="text-green-600 font-medium text-sm">{executive.role}</p>
                  <p className="text-gray-600 mt-3 text-sm">{executive.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
