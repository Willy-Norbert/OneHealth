"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function OurStory() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("ourStory1.heading")}</h2>
          <p className="text-gray-600">{t("ourStory1.subheading")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t("ourStory1.beginning.title")}</h3>
                <p className="text-gray-700">{t("ourStory1.beginning.text")}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t("ourStory1.challenge.title")}</h3>
                <p className="text-gray-700">{t("ourStory1.challenge.text")}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t("ourStory1.solution.title")}</h3>
                <p className="text-gray-700">{t("ourStory1.solution.text")}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t("ourStory1.today.title")}</h3>
                <p className="text-gray-700">{t("ourStory1.today.text")}</p>
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
                        alt={t("ourStory1.images.foundingTeamAlt")}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400&text=First+Office"
                        alt={t("ourStory1.images.firstOfficeAlt")}
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
                        alt={t("ourStory1.images.earlyPrototypeAlt")}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400&text=Current+Team"
                        alt={t("ourStory1.images.currentTeamAlt")}
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
