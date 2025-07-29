import { Award, Users, Building, Calendar } from "lucide-react"

export default function Achievements() {
  const milestones = [
    {
      year: "2023",
      title: "ONE HEALTHLINE CONNECT Founded",
      description: "Launched with a mission to transform healthcare access in Rwanda.",
    },
    {
      year: "2023",
      title: "First Hospital Partnership",
      description: "Partnered with Kigali University Hospital to offer teleconsultation services.",
    },
    {
      year: "2024",
      title: "Mobile App Launch",
      description: "Released our mobile application for iOS and Android platforms.",
    },
    {
      year: "2024",
      title: "AI Health Assistant",
      description: "Introduced our AI-powered health monitoring and advice system.",
    },
    {
      year: "2024",
      title: "Expanded to 10 Hospitals",
      description: "Grew our network to include 10 major hospitals across Rwanda.",
    },
    {
      year: "2025",
      title: "5,000 Users Milestone",
      description: "Celebrated reaching 5,000 registered users on our platform.",
    },
  ]

  const awards = [
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Rwanda Innovation Award",
      year: "2024",
      description: "Recognized for our innovative approach to healthcare delivery.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Best Digital Health Solution",
      year: "2024",
      description: "Awarded by the Rwanda Information Society Authority.",
    },
    {
      icon: <Building className="h-8 w-8 text-green-500" />,
      title: "Healthcare Startup of the Year",
      year: "2024",
      description: "Named the top healthcare startup by Rwanda Business Magazine.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-purple-500" />,
      title: "Community Impact Award",
      year: "2025",
      description: "Recognized for our contribution to improving healthcare access in rural areas.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Milestones & Achievements</h2>
          <p className="text-gray-600">Our journey of growth and impact in the Rwandan healthcare landscape</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Milestones Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-200"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {milestone.year.slice(2)}
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="text-sm text-green-600 font-medium mb-1">{milestone.year}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Awards & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-xl mr-4">{award.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{award.title}</h4>
                      <p className="text-sm text-green-600 mb-2">{award.year}</p>
                      <p className="text-sm text-gray-600">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
