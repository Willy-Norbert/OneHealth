"use client";

import React, { useState } from "react";
import { Settings, Globe, Bell, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AdminSettings = () => {
  const { t } = useLanguage();

  const [settings, setSettings] = useState({
    siteName: "ONE HEALTHLINE CONNECT",
    siteDescription: "Comprehensive Healthcare Management System",
    primaryColor: "#3B82F6",
    language: "en",
    timezone: "UTC+02:00",

    // Notification Settings
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: true,
    appointmentReminders: true,

    // System Settings
    maintenanceMode: false,
    allowRegistration: true,
    requireEmailVerification: true,
    sessionTimeout: 30,

    // Contact Information
    hospitalName: "ONE HEALTHLINE CONNECT",
    hospitalAddress: "Kigali, Rwanda",
    hospitalPhone: "+250-XXX-XXXXXX",
    hospitalEmail: "info@healthline.rw",
    emergencyNumber: "912",

    // Payment Settings
    acceptInsurance: true,
    acceptCash: true,
    acceptMobileMoney: true,

    // Appointment Settings
    appointmentSlotDuration: 30,
    maxAdvanceBooking: 30,
    cancelationDeadline: 24,
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    // Save settings to backend
    console.log("Saving settings:", settings);
    alert(t("adminSettings.saveSuccess"));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">{t("adminSettings.title")}</h1>
        <p className="text-muted-foreground">{t("adminSettings.description")}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* General Settings */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5" />
            {t("adminSettings.generalSettings")}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">{t("adminSettings.siteName")}</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => handleSettingChange("siteName", e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">{t("adminSettings.siteDescription")}</label>
              <textarea
                value={settings.siteDescription}
                onChange={(e) => handleSettingChange("siteDescription", e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                rows={3}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">{t("adminSettings.primaryColor")}</label>
              <input
                type="color"
                value={settings.primaryColor}
                onChange={(e) => handleSettingChange("primaryColor", e.target.value)}
                className="w-full h-10 px-3 py-2 border border-input rounded-md bg-background"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">{t("adminSettings.language")}</label>
              <select
                value={settings.language}
                onChange={(e) => handleSettingChange("language", e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value="en">{t("languages.english")}</option>
                <option value="rw">{t("languages.kinyarwanda")}</option>
                <option value="fr">{t("languages.french")}</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">{t("adminSettings.timezone")}</label>
              <select
                value={settings.timezone}
                onChange={(e) => handleSettingChange("timezone", e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value="UTC+02:00">{t("timezones.caf")}</option>
                <option value="UTC+00:00">UTC</option>
                <option value="UTC+01:00">{t("timezones.cet")}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Bell className="h-5 w-5" />
            {t("adminSettings.notificationSettings")}
          </h2>

          <div className="space-y-4">
            {[
              {
                key: "emailNotifications",
                label: t("adminSettings.emailNotifications"),
                desc: t("adminSettings.emailNotificationsDesc"),
                value: settings.emailNotifications,
              },
              {
                key: "smsNotifications",
                label: t("adminSettings.smsNotifications"),
                desc: t("adminSettings.smsNotificationsDesc"),
                value: settings.smsNotifications,
              },
              {
                key: "pushNotifications",
                label: t("adminSettings.pushNotifications"),
                desc: t("adminSettings.pushNotificationsDesc"),
                value: settings.pushNotifications,
              },
              {
                key: "appointmentReminders",
                label: t("adminSettings.appointmentReminders"),
                desc: t("adminSettings.appointmentRemindersDesc"),
                value: settings.appointmentReminders,
              },
            ].map(({ key, label, desc, value }) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-foreground">{label}</label>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
                <button
                  onClick={() => handleSettingChange(key, !value)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? "bg-primary" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            {t("adminSettings.contactInformation")}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">{t("adminSettings.hospitalName")}</label>
              <input
                type="text"
                value={settings.hospitalName}
                onChange={(e) => handleSettingChange("hospitalName", e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">{t("adminSettings.hospitalAddress")}</label>
              <input
                type="text"
                value={settings.hospitalAddress}
                onChange={(e) => handleSettingChange("hospitalAddress", e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">{t("adminSettings.phoneNumber")}</label>
              <input
                type="tel"
                value={settings.hospitalPhone}
                onChange={(e) => handleSettingChange("hospitalPhone", e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">{t("adminSettings.emailAddress")}</label>
              <input
                type="email"
                value={settings.hospitalEmail}
                onChange={(e) => handleSettingChange("hospitalEmail", e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">{t("adminSettings.emergencyNumber")}</label>
              <input
                type="tel"
                value={settings.emergencyNumber}
                onChange={(e) => handleSettingChange("emergencyNumber", e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>
          </div>
        </div>

        {/* Appointment Settings */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            {t("adminSettings.appointmentSettings")}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                {t("adminSettings.appointmentSlotDuration")}
              </label>
              <select
                value={settings.appointmentSlotDuration}
                onChange={(e) => handleSettingChange("appointmentSlotDuration", parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                {[15, 30, 45, 60].map((mins) => (
                  <option key={mins} value={mins}>
                    {t("adminSettings.minutes", { count: mins })}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                {t("adminSettings.maxAdvanceBooking")}
              </label>
              <input
                type="number"
                value={settings.maxAdvanceBooking}
                onChange={(e) => handleSettingChange("maxAdvanceBooking", parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                min={1}
                max={90}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                {t("adminSettings.cancellationDeadline")}
              </label>
              <input
                type="number"
                value={settings.cancelationDeadline}
                onChange={(e) => handleSettingChange("cancelationDeadline", parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                min={1}
                max={72}
              />
            </div>

            {[
              {
                key: "acceptInsurance",
                label: t("adminSettings.acceptInsurance"),
                desc: t("adminSettings.acceptInsuranceDesc"),
                value: settings.acceptInsurance,
              },
              {
                key: "acceptMobileMoney",
                label: t("adminSettings.acceptMobileMoney"),
                desc: t("adminSettings.acceptMobileMoneyDesc"),
                value: settings.acceptMobileMoney,
              },
            ].map(({ key, label, desc, value }) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-foreground">{label}</label>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
                <button
                  onClick={() => handleSettingChange(key, !value)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? "bg-primary" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSave}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <Settings className="h-4 w-4" />
          {t("adminSettings.saveButton")}
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
