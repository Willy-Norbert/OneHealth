"use client";
import { User, Clock, Bell, Globe, Shield, Save } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DoctorSettings() {
  const { t } = useLanguage();

  // Working hours schedule data
  const workingHours = [
    { day: "Monday", start: "08:00", end: "17:00", enabled: true },
    { day: "Tuesday", start: "08:00", end: "17:00", enabled: true },
    { day: "Wednesday", start: "08:00", end: "17:00", enabled: true },
    { day: "Thursday", start: "08:00", end: "17:00", enabled: true },
    { day: "Friday", start: "08:00", end: "17:00", enabled: true },
    { day: "Saturday", start: "09:00", end: "13:00", enabled: true },
    { day: "Sunday", start: "00:00", end: "00:00", enabled: false },
  ];

  // Specialty options
  const specialties = [
    "Cardiology",
    "General Medicine",
    "Pediatrics",
    "Gynecology",
    "Mental Health",
  ];

  // Hospital/Clinic options
  const hospitals = [
    "King Faisal Hospital",
    "Rwanda Military Hospital",
    "University Teaching Hospital",
    "Kibagabaga Hospital",
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">{t("settings.title")}</h1>
        <p className="text-muted-foreground">{t("settings.subtitle")}</p>
      </div>

      {/* Profile Information */}
      <HealthCard className="p-6">
        <div className="flex items-center mb-6">
          <User className="h-6 w-6 text-healthcare-primary mr-3" />
          <h2 className="text-xl font-semibold">{t("settings.profileInformation")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">{t("settings.fullName")}</label>
            <input
              type="text"
              defaultValue="Dr. Jean Mugabo"
              className="w-full p-3 border border-border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t("settings.email")}</label>
            <input
              type="email"
              defaultValue="jean.mugabo@hospital.rw"
              className="w-full p-3 border border-border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t("settings.phoneNumber")}</label>
            <input
              type="tel"
              defaultValue="+250 788 123 456"
              className="w-full p-3 border border-border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t("settings.specialty")}</label>
            <select className="w-full p-3 border border-border rounded-lg" defaultValue={specialties[0]}>
              {specialties.map((spec) => (
                <option key={spec}>{spec}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t("settings.hospitalClinic")}</label>
            <select className="w-full p-3 border border-border rounded-lg" defaultValue={hospitals[0]}>
              {hospitals.map((hospital) => (
                <option key={hospital}>{hospital}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t("settings.licenseNumber")}</label>
            <input
              type="text"
              defaultValue="MD-12345-RW"
              className="w-full p-3 border border-border rounded-lg"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">{t("settings.bio")}</label>
          <textarea
            className="w-full p-3 border border-border rounded-lg h-24"
            defaultValue="Experienced cardiologist with 15 years of practice. Specialized in heart disease prevention and treatment."
          />
        </div>
      </HealthCard>

      {/* Working Hours */}
      <HealthCard className="p-6">
        <div className="flex items-center mb-6">
          <Clock className="h-6 w-6 text-healthcare-primary mr-3" />
          <h2 className="text-xl font-semibold">{t("settings.workingHours")}</h2>
        </div>
        <div className="space-y-4">
          {workingHours.map((schedule) => (
            <div key={schedule.day} className="flex items-center gap-4">
              <div className="w-20">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked={schedule.enabled} />
                  {t(`days.${schedule.day.toLowerCase()}`)}
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="time"
                  defaultValue={schedule.start}
                  className="p-2 border border-border rounded"
                  disabled={!schedule.enabled}
                />
                <span>{t("settings.to")}</span>
                <input
                  type="time"
                  defaultValue={schedule.end}
                  className="p-2 border border-border rounded"
                  disabled={!schedule.enabled}
                />
              </div>
            </div>
          ))}
        </div>
      </HealthCard>

      {/* Notification Preferences */}
      <HealthCard className="p-6">
        <div className="flex items-center mb-6">
          <Bell className="h-6 w-6 text-healthcare-primary mr-3" />
          <h2 className="text-xl font-semibold">{t("settings.notificationPreferences")}</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              key: "newAppointmentRequests",
              enabled: true,
            },
            {
              key: "teleconsultationReminders",
              enabled: true,
            },
            {
              key: "emergencyAlerts",
              enabled: true,
            },
            {
              key: "patientMessages",
              enabled: false,
            },
          ].map(({ key, enabled }) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{t(`settings.${key}.title`)}</p>
                <p className="text-sm text-muted-foreground">{t(`settings.${key}.description`)}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={enabled} />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-healthcare-primary"></div>
              </label>
            </div>
          ))}
        </div>
      </HealthCard>

      {/* Language & Region */}
      <HealthCard className="p-6">
        <div className="flex items-center mb-6">
          <Globe className="h-6 w-6 text-healthcare-primary mr-3" />
          <h2 className="text-xl font-semibold">{t("settings.languageRegion")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">{t("settings.language")}</label>
            <select className="w-full p-3 border border-border rounded-lg" defaultValue="English">
              <option>English</option>
              <option>Kinyarwanda</option>
              <option>French</option>
              <option>Swahili</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t("settings.timeZone")}</label>
            <select className="w-full p-3 border border-border rounded-lg" defaultValue="Central Africa Time (CAT)">
              <option>Central Africa Time (CAT)</option>
              <option>East Africa Time (EAT)</option>
            </select>
          </div>
        </div>
      </HealthCard>

      {/* Security */}
      <HealthCard className="p-6">
        <div className="flex items-center mb-6">
          <Shield className="h-6 w-6 text-healthcare-primary mr-3" />
          <h2 className="text-xl font-semibold">{t("settings.security")}</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">{t("settings.currentPassword")}</label>
            <input
              type="password"
              placeholder={t("settings.currentPasswordPlaceholder")}
              className="w-full p-3 border border-border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t("settings.newPassword")}</label>
            <input
              type="password"
              placeholder={t("settings.newPasswordPlaceholder")}
              className="w-full p-3 border border-border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t("settings.confirmNewPassword")}</label>
            <input
              type="password"
              placeholder={t("settings.confirmNewPasswordPlaceholder")}
              className="w-full p-3 border border-border rounded-lg"
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm">{t("settings.enableTwoFactorAuth")}</label>
          </div>
        </div>
      </HealthCard>

      {/* Save Changes */}
      <div className="flex justify-end">
        <button className="bg-healthcare-primary text-white px-8 py-3 rounded-lg flex items-center gap-2">
          <Save className="h-5 w-5" />
          {t("settings.saveChanges")}
        </button>
      </div>
    </div>
  );
}
