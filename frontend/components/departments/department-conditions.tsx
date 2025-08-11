"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function DepartmentConditions() {
  const { t } = useLanguage()

  const departmentConditions = [
    {
      department: t("conditions.cardiology.title"),
      conditions: [
        t("conditions.cardiology.hypertension"),
        t("conditions.cardiology.coronaryArteryDisease"),
        t("conditions.cardiology.heartFailure"),
        t("conditions.cardiology.arrhythmias"),
        t("conditions.cardiology.valvularHeartDisease"),
      ],
      color: "bg-red-50",
      textColor: "text-red-800",
      borderColor: "border-red-200",
    },
    {
      department: t("conditions.neurology.title"),
      conditions: [
        t("conditions.neurology.stroke"),
        t("conditions.neurology.epilepsy"),
        t("conditions.neurology.parkinsons"),
        t("conditions.neurology.multipleSclerosis"),
        t("conditions.neurology.migraine"),
      ],
      color: "bg-purple-50",
      textColor: "text-purple-800",
      borderColor: "border-purple-200",
    },
    {
      department: t("conditions.orthopedics.title"),
      conditions: [
        t("conditions.orthopedics.arthritis"),
        t("conditions.orthopedics.fractures"),
        t("conditions.orthopedics.jointPain"),
        t("conditions.orthopedics.osteoporosis"),
        t("conditions.orthopedics.sportsInjuries"),
      ],
      color: "bg-blue-50",
      textColor: "text-blue-800",
      borderColor: "border-blue-200",
    },
    {
      department: t("conditions.dermatology.title"),
      conditions: [
        t("conditions.dermatology.eczema"),
        t("conditions.dermatology.psoriasis"),
        t("conditions.dermatology.acne"),
        t("conditions.dermatology.skinCancer"),
        t("conditions.dermatology.fungalInfections"),
      ],
      color: "bg-yellow-50",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-200",
    },
    {
      department: t("conditions.gastroenterology.title"),
      conditions: [
        t("conditions.gastroenterology.gerd"),
        t("conditions.gastroenterology.ibs"),
        t("conditions.gastroenterology.ulcerativeColitis"),
        t("conditions.gastroenterology.crohnsDisease"),
        t("conditions.gastroenterology.hepatitis"),
      ],
      color: "bg-green-50",
      textColor: "text-green-800",
      borderColor: "border-green-200",
    },
    {
      department: t("conditions.endocrinology.title"),
      conditions: [
        t("conditions.endocrinology.diabetes"),
        t("conditions.endocrinology.thyroidDisorders"),
        t("conditions.endocrinology.hormonalImbalances"),
        t("conditions.endocrinology.osteoporosis"),
        t("conditions.endocrinology.adrenalDisorders"),
      ],
      color: "bg-teal-50",
      textColor: "text-teal-800",
      borderColor: "border-teal-200",
    },
    {
      department: t("conditions.pulmonology.title"),
      conditions: [
        t("conditions.pulmonology.asthma"),
        t("conditions.pulmonology.copd"),
        t("conditions.pulmonology.pneumonia"),
        t("conditions.pulmonology.tuberculosis"),
        t("conditions.pulmonology.sleepApnea"),
      ],
      color: "bg-cyan-50",
      textColor: "text-cyan-800",
      borderColor: "border-cyan-200",
    },
    {
      department: t("conditions.gynecology.title"),
      conditions: [
        t("conditions.gynecology.menstrualDisorders"),
        t("conditions.gynecology.endometriosis"),
        t("conditions.gynecology.pcos"),
        t("conditions.gynecology.fibroids"),
        t("conditions.gynecology.infertility"),
      ],
      color: "bg-pink-50",
      textColor: "text-pink-800",
      borderColor: "border-pink-200",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("conditions.title")}</h2>
          <p className="text-gray-600">{t("conditions.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departmentConditions.map((dept, index) => (
            <div
              key={index}
              className={`${dept.color} rounded-xl p-6 border ${dept.borderColor} transition-all duration-300 hover:shadow-md`}
            >
              <h3 className={`text-lg font-bold ${dept.textColor} mb-4`}>{dept.department}</h3>
              <ul className="space-y-2">
                {dept.conditions.map((condition, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-gray-700 text-sm">{condition}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                className={`mt-4 p-0 h-auto ${dept.textColor} hover:bg-transparent hover:underline`}
              >
                {t("conditions.viewMore")} <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
