"use client";

import { useState } from "react";
import { MapPin, Check } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";
import { useLanguage } from "@/contexts/LanguageContext";

const hospitals = [
  { id: 1, name: "King Faisal Hospital", location: "Kacyiru", departments: ["General", "Cardiology", "Pediatrics"] },
  { id: 2, name: "Rwanda Military Hospital", location: "Kanombe", departments: ["General", "Surgery", "Emergency"] },
  { id: 3, name: "University Teaching Hospital", location: "Butare", departments: ["General", "Gynecology", "Mental Health"] },
];

const departments = ["General Medicine", "Pediatrics", "Gynecology", "Cardiology", "Mental Health", "Emergency"];

export default function BookAppointments() {
  const { t } = useLanguage();

  const [step, setStep] = useState(1);
  const [appointmentData, setAppointmentData] = useState({
    type: "",
    hospital: "",
    department: "",
    patientInfo: {
      fullName: "",
      nationalId: "",
      email: "",
      phone: "",
      address: "",
    },
    date: "",
    time: "",
    payment: ""
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">{t("bookAppointments.title")}</h1>
        <p className="text-muted-foreground">{t("bookAppointments.subtitle")}</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className={`flex items-center ${num !== 6 ? 'flex-1' : ''}`}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                step >= num ? 'bg-green-900 text-green-400' : 'bg-muted text-muted-foreground'
              }`}
            >
              {step > num ? <Check className="w-4 h-4" /> : num}
            </div>
            {num !== 6 && <div className={`flex-1 h-1 mx-2 ${step > num ? 'bg-green-900' : 'bg-muted'}`} />}
          </div>
        ))}
      </div>

      {/* Step 1: Choose Appointment Type */}
      {step === 1 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("bookAppointments.steps.chooseType")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["In-Clinic", "Teleconsultation", "Follow-up"].map((type) => (
              <div
                key={type}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  appointmentData.type === type
                    ? "border-healthcare-primary bg-green-900/20 ring-2 ring-healthcare-primary"
                    : "border-border hover:border-healthcare-primary/50"
                }`}
                onClick={() => setAppointmentData({ ...appointmentData, type })}
              >
                <h3 className="font-medium">{t(`bookAppointments.types.${type.replace(/-/, "").toLowerCase()}`)}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {type === "In-Clinic" && t("bookAppointments.typeDescriptions.inClinic")}
                  {type === "Teleconsultation" && t("bookAppointments.typeDescriptions.teleconsultation")}
                  {type === "Follow-up" && t("bookAppointments.typeDescriptions.followUp")}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={nextStep}
            disabled={!appointmentData.type}
            className={`mt-6 px-6 py-2 rounded-lg transition-colors ${
              !appointmentData.type
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-900 hover:bg-green-900/90 text-green-400"
            }`}
          >
            {t("common.continue")}
          </button>
        </HealthCard>
      )}

      {/* Step 2: Select Hospital */}
      {step === 2 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("bookAppointments.steps.selectHospital")}</h2>
          <div className="space-y-4">
            {hospitals.map((hospital) => (
              <div
                key={hospital.id}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  appointmentData.hospital === hospital.name
                    ? "border-healthcare-primary bg-green-900/20 ring-2 ring-healthcare-primary"
                    : "border-border hover:border-healthcare-primary/50"
                }`}
                onClick={() => setAppointmentData({ ...appointmentData, hospital: hospital.name })}
              >
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-muted-foreground mr-2" />
                  <div>
                    <h3 className="font-medium">{hospital.name}</h3>
                    <p className="text-sm text-muted-foreground">{hospital.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              {t("common.back")}
            </button>
            <button
              onClick={nextStep}
              disabled={!appointmentData.hospital}
              className={`px-6 py-2 rounded-lg transition-colors ${
                !appointmentData.hospital
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-900 hover:bg-green-900/90 text-green-400"
              }`}
            >
              {t("common.continue")}
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 3: Choose Department */}
      {step === 3 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("bookAppointments.steps.chooseDepartment")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {departments.map((dept) => (
              <div
                key={dept}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  appointmentData.department === dept
                    ? "border-healthcare-primary bg-green-900/20 ring-2 ring-healthcare-primary"
                    : "border-border hover:border-healthcare-primary/50"
                }`}
                onClick={() => setAppointmentData({ ...appointmentData, department: dept })}
              >
                <h3 className="font-medium text-sm">{t(`departments.${dept.replace(/\s+/g, "").toLowerCase()}`)}</h3>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              {t("common.back")}
            </button>
            <button
              onClick={nextStep}
              disabled={!appointmentData.department}
              className={`px-6 py-2 rounded-lg transition-colors ${
                !appointmentData.department
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-900 hover:bg-green-900/90 text-green-400"
              }`}
            >
              {t("common.continue")}
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 4: Patient Details */}
      {step === 4 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("bookAppointments.steps.patientInfo")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { key: "fullName", type: "text", placeholder: t("bookAppointments.patientInfo.fullName") },
              { key: "nationalId", type: "text", placeholder: t("bookAppointments.patientInfo.nationalId") },
              { key: "email", type: "email", placeholder: t("bookAppointments.patientInfo.email") },
              { key: "phone", type: "tel", placeholder: t("bookAppointments.patientInfo.phone") },
              { key: "address", type: "text", placeholder: t("bookAppointments.patientInfo.address"), colSpan: 2 },
            ].map((field) => (
              <input
                key={field.key}
                type={field.type}
                placeholder={field.placeholder}
                value={appointmentData.patientInfo[field.key as keyof typeof appointmentData.patientInfo]}
                onChange={(e) =>
                  setAppointmentData({
                    ...appointmentData,
                    patientInfo: { ...appointmentData.patientInfo, [field.key]: e.target.value } as any,
                  })
                }
                className={`p-3 border border-border rounded-lg ${field.colSpan ? "md:col-span-2" : ""}`}
              />
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              {t("common.back")}
            </button>
            <button
              onClick={nextStep}
              disabled={!appointmentData.patientInfo.fullName || !appointmentData.patientInfo.phone}
              className={`px-6 py-2 rounded-lg transition-colors ${
                !appointmentData.patientInfo.fullName || !appointmentData.patientInfo.phone
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-900 hover:bg-green-900/90 text-green-400"
              }`}
            >
              {t("common.continue")}
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 5: Date & Time */}
      {step === 5 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("bookAppointments.steps.selectDateTime")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">{t("bookAppointments.dateTime.preferredDate")}</label>
              <input
                type="date"
                value={appointmentData.date}
                onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                className="w-full p-3 border border-border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t("bookAppointments.dateTime.preferredTime")}</label>
              <select
                value={appointmentData.time}
                onChange={(e) => setAppointmentData({ ...appointmentData, time: e.target.value })}
                className="w-full p-3 border border-border rounded-lg"
              >
                <option value="">--</option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              {t("common.back")}
            </button>
            <button
              onClick={nextStep}
              disabled={!appointmentData.date || !appointmentData.time}
              className={`px-6 py-2 rounded-lg transition-colors ${
                !appointmentData.date || !appointmentData.time
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-900 hover:bg-green-900/90 text-green-400"
              }`}
            >
              {t("common.continue")}
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 6: Payment & Confirmation */}
      {step === 6 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("bookAppointments.steps.paymentConfirmation")}</h2>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">{t("bookAppointments.paymentSummary")}</h3>
              <p>{t("bookAppointments.type")}: {appointmentData.type}</p>
              <p>{t("bookAppointments.hospital")}: {appointmentData.hospital}</p>
              <p>{t("bookAppointments.department")}: {appointmentData.department}</p>
              <p>{t("bookAppointments.date")}: {appointmentData.date} {appointmentData.time}</p>
              <p>{t("bookAppointments.fee")}: 15,000 RWF</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">{t("bookAppointments.paymentMethod")}</h4>
              <div className="space-y-2">
                {["Mobile Money", "Bank Transfer", "Insurance", "USSD"].map((method) => (
                  <label key={method} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      checked={appointmentData.payment === method}
                      onChange={() => setAppointmentData({ ...appointmentData, payment: method })}
                      className="mr-2"
                    />
                    {t(`bookAppointments.paymentMethods.${method.replace(/\s+/g, "").toLowerCase()}`)}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              {t("common.back")}
            </button>
            <button
              disabled={!appointmentData.payment}
              className={`px-6 py-2 rounded-lg transition-colors ${
                !appointmentData.payment
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-900 hover:bg-green-900/90 text-green-400"
              }`}
            >
              {t("bookAppointments.confirmPay")}
            </button>
          </div>
        </HealthCard>
      )}
    </div>
  );
}
