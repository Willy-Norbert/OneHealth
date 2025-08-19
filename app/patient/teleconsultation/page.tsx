"use client";

import { useState } from "react";
import { Video, Phone, Calendar, CreditCard, FileText, History } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";
import { useLanguage } from "@/contexts/LanguageContext";

const consultationTypes = [
  { id: "general", nameKey: "consultations.general", fee: "10,000 RWF" },
  { id: "cardiology", nameKey: "consultations.cardiology", fee: "25,000 RWF" },
  { id: "gynecology", nameKey: "consultations.gynecology", fee: "20,000 RWF" },
  { id: "mental-health", nameKey: "consultations.mentalHealth", fee: "18,000 RWF" },
  { id: "pediatrics", nameKey: "consultations.pediatrics", fee: "15,000 RWF" },
];

const insuranceOptions = [
  "Mutuelle de Santé", "RAMA", "MMI", "RSSB", "Radiant Insurance",
  "UAP Insurance", "SANLAM", "Britam", "Prime Insurance", "Cash Payment"
];

const paymentMethods = [
  "mobileMoney",
  "bankTransfer",
  "ussdPayment"
];

export default function Teleconsultation() {
  const { t } = useLanguage();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    hospital: "",
    consultationType: "",
    insurance: "",
    patientInfo: {
      fullName: "",
      age: "",
      nationalId: "",
      phone: "",
      weight: "",
      gender: "",
      symptoms: "",
    },
    paymentMethod: "",
    callType: "video"
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Controlled input change handler for patient info
  const handlePatientInfoChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      patientInfo: {
        ...prev.patientInfo,
        [field]: value
      }
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">{t("teleconsultation.title")}</h1>
        <p className="text-muted-foreground">{t("teleconsultation.subtitle")}</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <div key={num} className={`flex items-center ${num !== 8 ? 'flex-1' : ''}`}>
            <div
              onClick={() => {
                if (num <= step) setStep(num);
              }}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm cursor-pointer ${
                step >= num ? 'bg-healthcare-primary text-black' : 'bg-muted text-muted-foreground'
              }`}
            >
              {num}
            </div>
            {num !== 8 && (
              <div className={`flex-1 h-1 mx-1 ${step > num ? 'bg-healthcare-primary' : 'bg-muted'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Select Hospital/Clinic */}
      {step === 1 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("teleconsultation.steps.selectHospital")}</h2>
          <div className="space-y-3">
            {[
              "King Faisal Hospital",
              "Rwanda Military Hospital",
              "University Teaching Hospital",
              "Kibagabaga Hospital"
            ].map((hospital) => (
              <div
                key={hospital}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  formData.hospital === hospital ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
                }`}
                onClick={() => setFormData(prev => ({ ...prev, hospital }))}
              >
                <h3 className="font-medium">{hospital}</h3>
                <p className="text-sm text-muted-foreground">{t("teleconsultation.available")}</p>
              </div>
            ))}
          </div>
          <button
            onClick={nextStep}
            disabled={!formData.hospital}
            className="mt-6 bg-healthcare-primary text-black px-6 py-2 rounded-lg disabled:opacity-50"
          >
            {t("common.continue")}
          </button>
        </HealthCard>
      )}

      {/* Step 2: Choose Consultation Type */}
      {step === 2 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("teleconsultation.steps.chooseConsultationType")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  formData.consultationType === type.id ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
                }`}
                onClick={() => setFormData({...formData, consultationType: type.id})}
              >
                <h3 className="font-medium">{t(type.nameKey)}</h3>
                <p className="text-sm text-muted-foreground">{t("teleconsultation.fee")}: {type.fee}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">{t("common.back")}</button>
            <button
              onClick={nextStep}
              disabled={!formData.consultationType}
              className="bg-healthcare-primary text-black px-6 py-2 rounded-lg disabled:opacity-50"
            >
              {t("common.continue")}
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 3: Select Insurance */}
      {step === 3 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("teleconsultation.steps.selectInsurance")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {insuranceOptions.map((insurance) => (
              <div
                key={insurance}
                className={`p-3 border rounded-lg cursor-pointer transition-colors text-center ${
                  formData.insurance === insurance ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
                }`}
                onClick={() => setFormData({...formData, insurance})}
              >
                <span className="text-sm font-medium">{insurance}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">{t("common.back")}</button>
            <button
              onClick={nextStep}
              disabled={!formData.insurance}
              className="bg-healthcare-primary text-black px-6 py-2 rounded-lg disabled:opacity-50"
            >
              {t("common.continue")}
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 4: Patient Information */}
      {step === 4 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("teleconsultation.steps.patientInfo")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder={t("teleconsultation.patientInfo.fullName")}
              className="p-3 border border-border rounded-lg"
              value={formData.patientInfo.fullName}
              onChange={e => handlePatientInfoChange("fullName", e.target.value)}
            />
            <input
              type="number"
              placeholder={t("teleconsultation.patientInfo.age")}
              className="p-3 border border-border rounded-lg"
              value={formData.patientInfo.age}
              onChange={e => handlePatientInfoChange("age", e.target.value)}
            />
            <input
              type="text"
              placeholder={t("teleconsultation.patientInfo.nationalId")}
              className="p-3 border border-border rounded-lg"
              value={formData.patientInfo.nationalId}
              onChange={e => handlePatientInfoChange("nationalId", e.target.value)}
            />
            <input
              type="tel"
              placeholder={t("teleconsultation.patientInfo.phone")}
              className="p-3 border border-border rounded-lg"
              value={formData.patientInfo.phone}
              onChange={e => handlePatientInfoChange("phone", e.target.value)}
            />
            <input
              type="number"
              placeholder={t("teleconsultation.patientInfo.weight")}
              className="p-3 border border-border rounded-lg"
              value={formData.patientInfo.weight}
              onChange={e => handlePatientInfoChange("weight", e.target.value)}
            />
            <select
              className="p-3 border border-border rounded-lg"
              value={formData.patientInfo.gender}
              onChange={e => handlePatientInfoChange("gender", e.target.value)}
            >
              <option value="">{t("teleconsultation.patientInfo.selectGender")}</option>
              <option value="male">{t("teleconsultation.patientInfo.male")}</option>
              <option value="female">{t("teleconsultation.patientInfo.female")}</option>
            </select>
          </div>
          <div className="mt-4">
            <textarea
              placeholder={t("teleconsultation.patientInfo.symptoms")}
              className="w-full p-3 border border-border rounded-lg h-24"
              value={formData.patientInfo.symptoms}
              onChange={e => handlePatientInfoChange("symptoms", e.target.value)}
            ></textarea>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">{t("common.back")}</button>
            <button onClick={nextStep} className="bg-healthcare-primary text-black px-6 py-2 rounded-lg">{t("common.continue")}</button>
          </div>
        </HealthCard>
      )}

      {/* Step 5: Payment */}
      {step === 5 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("teleconsultation.steps.paymentMethod")}</h2>
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div
                key={method}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  formData.paymentMethod === method ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
                }`}
                onClick={() => setFormData({...formData, paymentMethod: method})}
              >
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-3" />
                  <span>{t(`teleconsultation.paymentMethods.${method}`)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">{t("common.back")}</button>
            <button
              onClick={nextStep}
              disabled={!formData.paymentMethod}
              className="bg-healthcare-primary text-black px-6 py-2 rounded-lg disabled:opacity-50"
            >
              {t("teleconsultation.payAndContinue")}
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 6: Join Consultation */}
      {step === 6 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("teleconsultation.steps.joinConsultation")}</h2>
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setFormData({...formData, callType: "video"})}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg border ${
                    formData.callType === "video" ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border'
                  }`}
                >
                  <Video className="w-5 h-5" />
                  {t("teleconsultation.callTypes.video")}
                </button>
                <button
                  onClick={() => setFormData({...formData, callType: "phone"})}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg border ${
                    formData.callType === "phone" ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border'
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  {t("teleconsultation.callTypes.phone")}
                </button>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm">{t("teleconsultation.joinInstructions")}</p>
              </div>
            </div>
            <button className="bg-success-500 text-black px-8 py-3 rounded-lg">
              {t("teleconsultation.joinNow")}
            </button>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">{t("common.back")}</button>
            <button onClick={nextStep} className="bg-healthcare-primary text-black px-6 py-2 rounded-lg">{t("common.continue")}</button>
          </div>
        </HealthCard>
      )}

      {/* Step 7: Follow-up Options */}
      {step === 7 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("teleconsultation.steps.followUpOptions")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg text-center">
              <FileText className="w-8 h-8 mx-auto mb-2 text-healthcare-primary" />
              <h3 className="font-medium">{t("teleconsultation.followUp.digitalPrescription")}</h3>
              <p className="text-sm text-muted-foreground">{t("teleconsultation.followUp.receiveMedications")}</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-healthcare-primary" />
              <h3 className="font-medium">{t("teleconsultation.followUp.scheduleFollowUp")}</h3>
              <p className="text-sm text-muted-foreground">{t("teleconsultation.followUp.bookNextAppointment")}</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <History className="w-8 h-8 mx-auto mb-2 text-healthcare-primary" />
              <h3 className="font-medium">{t("teleconsultation.followUp.medicalRecords")}</h3>
              <p className="text-sm text-muted-foreground">{t("teleconsultation.followUp.viewNotes")}</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">{t("common.back")}</button>
            <button onClick={nextStep} className="bg-healthcare-primary text-black px-6 py-2 rounded-lg">{t("common.continue")}</button>
          </div>
        </HealthCard>
      )}

      {/* Step 8: Medical History */}
      {step === 8 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("teleconsultation.steps.medicalHistory")}</h2>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{t("teleconsultation.history.doctorName", { name: "Dr. Jean Mugabo" })} - {t("teleconsultation.history.department.cardiology")}</h3>
                  <p className="text-sm text-muted-foreground">King Faisal Hospital</p>
                  <p className="text-sm text-muted-foreground">{t("teleconsultation.history.date", { date: "March 15, 2024" })}</p>
                </div>
                <span className="px-2 py-1 bg-success-100 text-success-700 text-xs rounded">{t("teleconsultation.history.status.completed")}</span>
              </div>
              <div className="mt-3">
                <p className="text-sm"><strong>{t("teleconsultation.history.diagnosis")}:</strong> Hypertension monitoring</p>
                <p className="text-sm"><strong>{t("teleconsultation.history.medications")}:</strong> Amlodipine 5mg daily</p>
                <p className="text-sm"><strong>{t("teleconsultation.history.notes")}:</strong> Blood pressure stable, continue medication</p>
              </div>
            </div>
          </div>
          <button className="mt-6 bg-healthcare-primary text-black px-6 py-2 rounded-lg">
            {t("teleconsultation.completeConsultation")}
          </button>
        </HealthCard>
      )}
    </div>
  );
}
