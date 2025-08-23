"use client";
import { User, Search, FileText, Calendar, Phone, Video, ChevronDown } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";
import { useLanguage } from "@/contexts/LanguageContext";

const patients = [
  {
    id: 1,
    name: "Alice Uwimana",
    age: 34,
    gender: "Female",
    contact: "+250 788 123 456",
    lastVisit: "March 15, 2024",
    condition: "Hypertension",
    status: "Active Treatment",
    nextAppointment: "March 25, 2024"
  },
  {
    id: 2,
    name: "Bob Nkurunziza",
    age: 28,
    gender: "Male",
    contact: "+250 788 654 321",
    lastVisit: "March 10, 2024",
    condition: "Anxiety Disorder",
    status: "Follow-up Required",
    nextAppointment: "March 22, 2024"
  },
  {
    id: 3,
    name: "Carol Ntamushobora",
    age: 45,
    gender: "Female",
    contact: "+250 788 987 654",
    lastVisit: "March 18, 2024",
    condition: "Diabetes Type 2",
    status: "Stable",
    nextAppointment: "April 2, 2024"
  },
  {
    id: 4,
    name: "David Rurangwa",
    age: 52,
    gender: "Male",
    contact: "+250 788 456 789",
    lastVisit: "March 12, 2024",
    condition: "Chronic Back Pain",
    status: "Active Treatment",
    nextAppointment: "March 26, 2024"
  },
  {
    id: 5,
    name: "Eve Mukamana",
    age: 29,
    gender: "Female",
    contact: "+250 788 321 654",
    lastVisit: "March 16, 2024",
    condition: "Pregnancy Monitoring",
    status: "Regular Checkup",
    nextAppointment: "March 30, 2024"
  },
  {
    id: 6,
    name: "Frank Nsengimana",
    age: 41,
    gender: "Male",
    contact: "+250 788 789 123",
    lastVisit: "March 14, 2024",
    condition: "Heart Disease",
    status: "Critical Monitoring",
    nextAppointment: "March 21, 2024"
  }
];

export default function DoctorPatients() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">{t("patients.title")}</h1>
        <p className="text-muted-foreground">{t("patients.subtitle")}</p>
      </div>

      {/* Search and Filter */}
      <HealthCard className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t("patients.searchPlaceholder")}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:border-bg-green-500 focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-border rounded-lg">
              <option>{t("patients.filters.conditions.all")}</option>
              <option>{t("patients.filters.conditions.hypertension")}</option>
              <option>{t("patients.filters.conditions.diabetes")}</option>
              <option>{t("patients.filters.conditions.heartDisease")}</option>
              <option>{t("patients.filters.conditions.mentalHealth")}</option>
            </select>
            <select className="px-4 py-2 border border-border rounded-lg">
              <option>{t("patients.filters.statuses.all")}</option>
              <option>{t("patients.filters.statuses.activeTreatment")}</option>
              <option>{t("patients.filters.statuses.followUpRequired")}</option>
              <option>{t("patients.filters.statuses.stable")}</option>
              <option>{t("patients.filters.statuses.critical")}</option>
            </select>
          </div>
        </div>
      </HealthCard>

      {/* Patient Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient) => (
          <HealthCard key={patient.id} className="p-6 hover:shadow-theme-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-bg-green-500/10 rounded-full flex items-center justify-center mr-3">
                  <User className="h-6 w-6 text-bg-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{patient.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {patient.age} {t("years")}, {patient.gender}
                  </p>
                </div>
              </div>
              <div className="relative">
                <button className="p-1 hover:bg-muted rounded">
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium">{t("patients.primaryCondition")}</p>
                <p className="text-sm text-muted-foreground">{patient.condition}</p>
              </div>

              <div>
                <p className="text-sm font-medium">{t("patients.status")}</p>
                <span
                  className={`inline-block px-2 py-1 rounded text-xs ${
                    patient.status === t("patients.filters.statuses.activeTreatment")
                      ? "bg-warning-100 text-warning-700"
                      : patient.status === t("patients.filters.statuses.followUpRequired")
                      ? "bg-blue-light-100 text-blue-light-700"
                      : patient.status === t("patients.filters.statuses.stable")
                      ? "bg-success-100 text-success-700"
                      : "bg-error-100 text-error-700"
                  }`}
                >
                  {patient.status}
                </span>
              </div>

              <div>
                <p className="text-sm font-medium">{t("patients.lastVisit")}</p>
                <p className="text-sm text-muted-foreground">{patient.lastVisit}</p>
              </div>

              <div>
                <p className="text-sm font-medium">{t("patients.nextAppointment")}</p>
                <p className="text-sm text-muted-foreground">{patient.nextAppointment}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t border-border">
              <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-bg-green-500 text-white rounded-lg text-sm">
                <FileText className="h-4 w-4" />
                {t("patients.actions.viewFile")}
              </button>
              <button className="flex items-center justify-center gap-1 px-3 py-2 border border-border rounded-lg text-sm hover:border-bg-green-500">
                <Phone className="h-4 w-4" />
                {t("patients.actions.call")}
              </button>
              <button className="flex items-center justify-center gap-1 px-3 py-2 border border-border rounded-lg text-sm hover:border-bg-green-500">
                <Video className="h-4 w-4" />
                {t("patients.actions.video")}
              </button>
            </div>
          </HealthCard>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 border border-border rounded-lg hover:border-bg-green-500">
            {t("patients.pagination.previous")}
          </button>
          <span className="px-3 py-2">
            {t("patients.pagination.pageInfo")}
          </span>
          <button className="px-3 py-2 border border-border rounded-lg hover:border-bg-green-500">
            {t("patients.pagination.next")}
          </button>
        </div>
      </div>
    </div>
  );
}
