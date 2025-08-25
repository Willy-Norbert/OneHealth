"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Search, Filter, MapPin, Star, Users, Clock, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HospitalsPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const hospitals = [
    {
      id: 1,
      name: "Kigali University Hospital",
      type: "University Hospital",
      location: "Kigali",
      address: "Kimisagara, Nyarugenge District",
      image: "/11.png",
      available: true,
      services: ["Emergency", "Surgery", "ICU", "Outpatient", "Research", "Training"],
      rating: 4.9,
      totalDoctors: 120,
      phone: "+250 788 123 456",
      operatingHours: "24/7",
      description: "Leading healthcare institution providing comprehensive medical services and medical education.",
    },
    {
      id: 2,
      name: "Rwanda Children's Hospital",
      type: "Specialized Hospital",
      location: "Kigali",
      address: "Muhima, Nyarugenge District",
      image: "/12.png",
      available: true,
      services: ["Pediatrics", "NICU", "Child Surgery", "Vaccinations", "Emergency Pediatrics"],
      rating: 4.8,
      totalDoctors: 85,
      phone: "+250 788 234 567",
      operatingHours: "24/7",
      description: "Specialized pediatric care facility dedicated to children's health and wellbeing.",
    },
    {
      id: 3,
      name: "CHUK (Centre Hospitalier Universitaire)",
      type: "University Hospital",
      location: "Kigali",
      address: "Kicukiro District",
      image: "/13.png",
      available: false,
      services: ["Neurology", "Cardiology", "Research", "Training", "Emergency", "Surgery"],
      rating: 4.7,
      totalDoctors: 150,
      phone: "+250 788 345 678",
      operatingHours: "24/7",
      description: "Premier university hospital offering advanced medical care and medical research.",
    },
    {
      id: 4,
      name: "Butare University Hospital",
      type: "University Hospital",
      location: "Butare",
      address: "Butare, Southern Province",
      image: "/14.png",
      available: true,
      services: ["General Medicine", "Surgery", "Maternity", "Emergency", "Orthopedics"],
      rating: 4.6,
      totalDoctors: 95,
      phone: "+250 788 456 789",
      operatingHours: "24/7",
      description: "Comprehensive healthcare services serving the Southern Province region.",
    },
    {
      id: 5,
      name: "Musanze District Hospital",
      type: "District Hospital",
      location: "Musanze",
      address: "Musanze, Northern Province",
      image: "/placeholder.svg",
      available: true,
      services: ["General Medicine", "Surgery", "Maternity", "Emergency"],
      rating: 4.5,
      totalDoctors: 60,
      phone: "+250 788 567 890",
      operatingHours: "24/7",
      description: "Quality healthcare services for Northern Province communities.",
    },
    {
      id: 6,
      name: "Rubavu District Hospital",
      type: "District Hospital",
      location: "Rubavu",
      address: "Rubavu, Western Province",
      image: "/placeholder.svg",
      available: true,
      services: ["General Medicine", "Surgery", "Maternity", "Emergency"],
      rating: 4.4,
      totalDoctors: 55,
      phone: "+250 788 678 901",
      operatingHours: "24/7",
      description: "Comprehensive healthcare services for Western Province region.",
    },
  ];

  const locations = ["all", "Kigali", "Butare", "Musanze", "Rubavu"];
  const types = ["all", "University Hospital", "Specialized Hospital", "District Hospital"];

  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hospital.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hospital.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLocation = selectedLocation === "all" || hospital.location === selectedLocation;
    const matchesType = selectedType === "all" || hospital.type === selectedType;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {t("hospitals.title", "Our Partner Hospitals")}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {t("hospitals.subtitle", "Find and connect with Rwanda's leading healthcare institutions")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={t("hospitals.searchPlaceholder", "Search hospitals...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="all">{t("hospitals.allLocations", "All Locations")}</option>
              {locations.slice(1).map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="all">{t("hospitals.allTypes", "All Types")}</option>
              {types.slice(1).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {/* Results Count */}
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Filter className="h-5 w-5 mr-2" />
              {filteredHospitals.length} {t("hospitals.results", "hospitals found")}
            </div>
          </div>
        </div>

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={hospital.image}
                    alt={hospital.name}
                    fill
                    className="object-cover rounded-t-lg"
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
                    ? t("hospitals.available", "Available")
                    : t("hospitals.unavailable", "Unavailable")}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                      {hospital.name}
                    </h3>
                    <p className="text-green-600 dark:text-green-400 font-medium text-sm">
                      {hospital.type}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {hospital.rating}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    {hospital.address}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                    {hospital.totalDoctors} {t("hospitals.doctors", "doctors")}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    {hospital.operatingHours}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                    {hospital.phone}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {hospital.description}
                </p>

                {/* Services */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {hospital.services.slice(0, 3).map((service, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                    {hospital.services.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        +{hospital.services.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/hospitals/${hospital.id}`} className="flex-1">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      {t("hospitals.viewDetails", "View Details")}
                    </Button>
                  </Link>
                  <Link href={`/appointments/book?hospital=${hospital.id}`} className="flex-1">
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900">
                      {t("hospitals.bookAppointment", "Book Appointment")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t("hospitals.noResults", "No hospitals found")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t("hospitals.noResultsMessage", "Try adjusting your search criteria or filters")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}