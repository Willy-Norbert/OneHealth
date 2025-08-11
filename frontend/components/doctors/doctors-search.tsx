"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, Filter, MapPin, Clock } from "lucide-react"

export default function DoctorsSearch() {
  const [activeView, setActiveView] = useState("grid")

  const specialties = [
    "All Specialties",
    "Cardiology",
    "Dermatology",
    "Endocrinology",
    "Gastroenterology",
    "General Medicine",
    "Neurology",
    "Obstetrics & Gynecology",
    "Ophthalmology",
    "Orthopedics",
    "Pediatrics",
    "Psychiatry",
    "Urology",
  ]

  const locations = ["All Locations", "Kigali", "Butaro", "Muhima", "Remera", "Nyamirambo"]

  const availabilities = ["Any Time", "Today", "Tomorrow", "This Week", "Next Week", "Weekends Only"]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search by name */}
            <div className="relative">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="search"
                  type="text"
                  placeholder="Doctor name or keyword"
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Specialty filter */}
            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                Specialty
              </label>
              <select
                id="specialty"
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty.toLowerCase().replace(/\s+/g, "-")}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>

            {/* Location filter */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  id="location"
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {locations.map((location) => (
                    <option key={location} value={location.toLowerCase().replace(/\s+/g, "-")}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Availability filter */}
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                Availability
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  id="availability"
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {availabilities.map((availability) => (
                    <option key={availability} value={availability.toLowerCase().replace(/\s+/g, "-")}>
                      {availability}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <div className="flex items-center">
                <input
                  id="virtual-only"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="virtual-only" className="ml-2 block text-sm text-gray-700">
                  Virtual consultations only
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="top-rated"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="top-rated" className="ml-2 block text-sm text-gray-700">
                  Top rated (4.5+)
                </label>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">View:</span>
              <button
                onClick={() => setActiveView("grid")}
                className={`p-2 rounded-md ${
                  activeView === "grid" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"
                }`}
                aria-label="Grid view"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
              <button
                onClick={() => setActiveView("list")}
                className={`p-2 rounded-md ${
                  activeView === "list" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"
                }`}
                aria-label="List view"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <Button className="bg-green-600 hover:bg-green-700">
                <Filter className="mr-2 h-4 w-4" /> Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
