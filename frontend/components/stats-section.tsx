"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    { value: "10+", label: t("stats.partnerHospitals"), color: "bg-blue-100 text-blue-800" },
    { value: "50+", label: t("stats.medicalSpecialists"), color: "bg-green-100 text-green-800" },
    { value: "24/7", label: t("stats.availability"), color: "bg-purple-100 text-purple-800" },
    { value: "5000+", label: t("stats.patientsServed"), color: "bg-amber-100 text-amber-800" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className={`p-8 ${index > 0 ? "border-l border-gray-100" : ""} text-center`}>
                <div className={`inline-block px-3 py-1 rounded-full ${stat.color} text-sm font-medium mb-4`}>
                  {stat.label}
                </div>
                <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
