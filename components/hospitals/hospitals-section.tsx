"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext"; // Adjust path as needed

export default function DoctorsSection() {
  const { t } = useLanguage();

  const hospitals = [
    {
      id: 1,
      name: "Kigali University Hospital",
      type: t("hospitalsSection.types.university", "University Hospital"),
      location: "Kigali",
      image: "/11.png",
      available: true,
      services: ["Emergency", "Surgery", "ICU", "Outpatient"],
      rating: 4.9,
      totalDoctors: 120,
    },
    {
      id: 2,
      name: "Rwanda Children's Hospital",
      type: t("hospitalsSection.types.specialized", "Specialized Hospital"),
      location: "Kigali",
      image: "/12.png",
      available: true,
      services: ["Pediatrics", "NICU", "Child Surgery", "Vaccinations"],
      rating: 4.8,
      totalDoctors: 85,
    },
    {
      id: 3,
      name: "CHUK (Centre Hospitalier Universitaire)",
      type: t("hospitalsSection.types.university", "University Hospital"),
      location: "Kigali",
      image: "/13.png",
      available: false,
      services: ["Neurology", "Cardiology", "Research", "Training"],
      rating: 4.7,
      totalDoctors: 150,
    },
    {
      id: 4,
      name: "Butare University Hospital",
      type: t("hospitalsSection.types.university", "University Hospital"),
      location: "Butare",
      image: "/14.png",
      available: true,
      services: ["General Medicine", "Surgery", "Maternity", "Emergency"],
      rating: 4.6,
      totalDoctors: 95,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t("hospitalsSection.title", "View Our Specialist Hospitals")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl">
              {t(
                "hospitalsSection.description",
                "Our network includes Rwanda's top healthcare institutions ready to provide you with exceptional medical care"
              )}
            </p>
          </div>
          <Link
            href="/hospitals"
            className="mt-4 md:mt-0 text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300 flex items-center"
          >
            {t("hospitalsSection.viewAll", "View all hospitals")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={hospital.image || "/placeholder.svg"}
                      alt={hospital.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Availability badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                      hospital.available
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {hospital.available
                      ? t("hospitalsSection.available", "Available")
                      : t("hospitalsSection.unavailable", "Unavailable")}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex gap-2">
                        <Link href={`/hospitals/${hospital.id}`} className="flex-1">
                          <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                            <Calendar className="h-4 w-4 mr-1" /> {t("hospitalsSection.book", "Book")}
                          </Button>
                        </Link>
                        <Link href={`/hospitals/${hospital.id}`} className="flex-1">
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                          >
                            <MessageSquare className="h-4 w-4 mr-1" /> {t("hospitalsSection.view", "View")}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">{hospital.name}</h3>
                  <p className="text-green-600 dark:text-green-400 font-medium text-sm">{hospital.type}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{hospital.location}</p>
                  
                  {/* Services */}
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-1">
                      {hospital.services.slice(0, 2).map((service, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                      {hospital.services.length > 2 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          +{hospital.services.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 text-xs ml-1">
                        {hospital.rating}
                      </span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      {hospital.totalDoctors} {t("hospitalsSection.doctors", "doctors")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
