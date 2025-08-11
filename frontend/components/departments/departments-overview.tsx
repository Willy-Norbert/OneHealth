"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DepartmentsOverview() {
  const { t } = useLanguage();

  const departments = [
    { id: "cardiology", image: "/placeholder.svg?height=100&width=100&text=Cardiology" },
    { id: "pediatrics", image: "/placeholder.svg?height=100&width=100&text=Pediatrics" },
    { id: "orthopedics", image: "/placeholder.svg?height=100&width=100&text=Orthopedics" },
    { id: "neurology", image: "/placeholder.svg?height=100&width=100&text=Neurology" },
    { id: "dermatology", image: "/placeholder.svg?height=100&width=100&text=Dermatology" },
    { id: "ophthalmology", image: "/placeholder.svg?height=100&width=100&text=Ophthalmology" },
    { id: "ent", image: "/placeholder.svg?height=100&width=100&text=ENT" },
    { id: "gynecology", image: "/placeholder.svg?height=100&width=100&text=Gynecology" },
    { id: "urology", image: "/placeholder.svg?height=100&width=100&text=Urology" },
    { id: "psychiatry", image: "/placeholder.svg?height=100&width=100&text=Psychiatry" },
    { id: "dentistry", image: "/placeholder.svg?height=100&width=100&text=Dentistry" },
    { id: "nutrition", image: "/placeholder.svg?height=100&width=100&text=Nutrition" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("departments.title")}
          </h2>
          <p className="text-gray-600">{t("departments.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <Link href={`/departments/${dept.id}`} key={dept.id} className="group">
              <div className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="relative w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={dept.image}
                    alt={t(`departmentss.${dept.id}.name`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                  {t(`departmentss.${dept.id}.name`)}
                </h3>
                <p className="text-sm text-gray-500 mt-auto">
                  {t(`departmentss.${dept.id}.description`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
