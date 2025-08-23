"use client";
import { Calendar, Clock, Video, User, Phone } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";
import { useLanguage } from "@/contexts/LanguageContext";

const appointments = [
  {
    id: 1,
    patientName: "John Doe",
    time: "09:00 AM",
    type: "In-Person",
    contact: "+250 788 123 456",
    reason: "General Consultation",
    status: "confirmed"
  },
  {
    id: 2,
    patientName: "Jane Smith",
    time: "10:30 AM",
    type: "Teleconsultation",
    contact: "+250 788 654 321",
    reason: "Follow-up",
    status: "pending"
  },
  {
    id: 3,
    patientName: "Michael Brown",
    time: "02:00 PM",
    type: "In-Person",
    contact: "+250 788 987 654",
    reason: "Specialist Consultation",
    status: "confirmed"
  }
];

export default function DoctorAppointments() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">{t("appointments1.title")}</h1>
        <p className="text-muted-foreground">{t("appointments1.subtitle")}</p>
      </div>

      <div className="grid gap-4">
        {appointments.map((appointment) => (
          <HealthCard key={appointment.id} className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold mr-3">{appointment.patientName}</h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      appointment.status === "confirmed"
                        ? "bg-success-100 text-success-700"
                        : "bg-warning-100 text-warning-700"
                    }`}
                  >
                    {t(`appointments1.status.${appointment.status}`)}
                  </span>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {appointment.time}
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {appointment.contact}
                  </div>
                  <p>
                    {t("appointments1.reason")}: {appointment.reason}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                {appointment.type === "Teleconsultation" ? (
                  <button className="bg-bg-green-500 text-black px-4 py-2 rounded-lg flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    {t("appointments1.joinCall")}
                  </button>
                ) : (
                  <button className="bg-bg-green-500 text-black px-4 py-2 rounded-lg">
                    {t("appointments1.viewDetails")}
                  </button>
                )}
              </div>
            </div>
          </HealthCard>
        ))}
      </div>
    </div>
  );
}
