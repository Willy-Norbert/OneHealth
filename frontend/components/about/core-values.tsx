"use client"

import { Heart, Shield, Users, Lightbulb, Zap, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function CoreValues() {
  const { t } = useLanguage()

  const values = [
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: t("coreValues.compassion.title"),
      description: t("coreValues.compassion.description"),
      color: "bg-red-50",
      iconBg: "bg-red-100",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: t("coreValues.integrity.title"),
      description: t("coreValues.integrity.description"),
      color: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: t("coreValues.inclusivity.title"),
      description: t("coreValues.inclusivity.description"),
      color: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      title: t("coreValues.innovation.title"),
      description: t("coreValues.innovation.description"),
      color: "bg-yellow-50",
      iconBg: "bg-yellow-100",
    },
    {
      icon: <Zap className="h-6 w-6 text-green-500" />,
      title: t("coreValues.excellence.title"),
      description: t("coreValues.excellence.description"),
      color: "bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      icon: <Globe className="h-6 w-6 text-teal-500" />,
      title: t("coreValues.community.title"),
      description: t("coreValues.community.description"),
      color: "bg-teal-50",
      iconBg: "bg-teal-100",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("coreValues.heading")}</h2>
          <p className="text-gray-600">{t("coreValues.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className={`${value.color} rounded-xl p-6 relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full -mr-12 -mt-12 opacity-50"></div>
              <div className="relative z-10">
                <div className={`${value.iconBg} p-3 rounded-xl inline-flex mb-4`}>{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
