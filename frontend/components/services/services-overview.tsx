"use client";

import { Video, Calendar, Phone, Pill, Brain } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesOverview() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Video className="h-8 w-8 text-white" />,
      title: t("services.teleconsultation.title"),
      description: t("services.teleconsultation.description"),
      color: "bg-blue-600",
      href: "#teleconsultation",
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: t("services.appointments.title"),
      description: t("services.appointments.description"),
      color: "bg-green-600",
      href: "#appointments",
    },
    {
      icon: <Phone className="h-8 w-8 text-white" />,
      title: t("services.emergency.title"),
      description: t("services.emergency.description"),
      color: "bg-red-600",
      href: "#emergency",
    },
    {
      icon: <Pill className="h-8 w-8 text-white" />,
      title: t("services.pharmacy.title"),
      description: t("services.pharmacy.description"),
      color: "bg-purple-600",
      href: "#pharmacy",
    },
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      title: t("services.ai.title"),
      description: t("services.ai.description"),
      color: "bg-teal-600",
      href: "#ai-doctor",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("servicesOverview.title")}</h2>
          <p className="text-gray-600">{t("servicesOverview.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                <div className={`${service.color} p-6`}>
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    {t("servicesOverview.learnMore")}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
