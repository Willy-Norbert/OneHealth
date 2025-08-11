"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video, MapPin } from "lucide-react"
import type { Doctor } from "@/lib/doctor-data"

export default function DoctorAvailability({ doctor }: { doctor: Doctor }) {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedLocation, setSelectedLocation] = useState<string>(doctor.locations[0].name)
  const [appointmentType, setAppointmentType] = useState<"in-person" | "virtual">("in-person")

  // Generate available time slots (this would come from an API in a real app)
  const availableTimeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
  ]

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Working Hours</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {doctor.workingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      schedule.available ? "border-green-200 bg-green-50" : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <p className="font-medium text-gray-900">{schedule.day}</p>
                    <p className={`text-sm ${schedule.available ? "text-green-700" : "text-gray-500"}`}>
                      {schedule.hours}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Schedule Your Appointment</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Appointment Type</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      className={`flex items-center p-4 rounded-lg border-2 ${
                        appointmentType === "in-person"
                          ? "border-green-600 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setAppointmentType("in-person")}
                    >
                      <MapPin className="h-5 w-5 text-gray-700 mr-3" />
                      <span className="font-medium">In-Person Visit</span>
                    </button>

                    <button
                      className={`flex items-center p-4 rounded-lg border-2 ${
                        appointmentType === "virtual"
                          ? "border-green-600 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setAppointmentType("virtual")}
                    >
                      <Video className="h-5 w-5 text-gray-700 mr-3" />
                      <span className="font-medium">Virtual Consultation</span>
                    </button>
                  </div>
                </div>

                {appointmentType === "in-person" && (
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <select
                      id="location"
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                      {doctor.locations.map((location, index) => (
                        <option key={index} value={location.name}>
                          {location.name} - {location.address}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        id="date"
                        type="date"
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        min={today}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Time
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <select
                        id="time"
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        disabled={!selectedDate}
                      >
                        <option value="">Select a time</option>
                        {availableTimeSlots.map((time, index) => (
                          <option key={index} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-green-600 hover:bg-green-700 mt-4"
                  disabled={!selectedDate || !selectedTime}
                >
                  {appointmentType === "in-person" ? "Book In-Person Appointment" : "Book Virtual Consultation"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
