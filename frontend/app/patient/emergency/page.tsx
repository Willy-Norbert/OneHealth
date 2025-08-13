"use client";

import { useState } from "react";
import { Phone, MapPin, Camera, Mic, AlertTriangle, Car } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";
import { useLanguage } from '@/contexts/LanguageContext';

const emergencyTypes = [
  { id: "accident", nameKey: "emergencyTypes.accident", color: "error" },
  { id: "maternal", nameKey: "emergencyTypes.maternal", color: "warning" },
  { id: "mental", nameKey: "emergencyTypes.mental", color: "blue-light" },
  { id: "respiratory", nameKey: "emergencyTypes.respiratory", color: "error" },
  { id: "covid", nameKey: "emergencyTypes.covid", color: "warning" },
  { id: "cardiac", nameKey: "emergencyTypes.cardiac", color: "error" },
];

const helpTypes = [
  { id: "ambulance", nameKey: "helpTypes.ambulance", icon: Car },
  { id: "doctor", nameKey: "helpTypes.doctor", icon: Phone },
  { id: "medicine", nameKey: "helpTypes.medicine", icon: AlertTriangle },
];

const severityLevels = [
  { id: "mild", nameKey: "severityLevels.mild", descKey: "severityLevels.mild_desc", color: "success" },
  { id: "intense", nameKey: "severityLevels.intense", descKey: "severityLevels.intense_desc", color: "warning" },
  { id: "severe", nameKey: "severityLevels.severe", descKey: "severityLevels.severe_desc", color: "error" },
];

export default function EmergencyRequest() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [emergencyData, setEmergencyData] = useState({
    type: "",
    helpType: "",
    location: "",
    description: "",
    severity: "",
    photo: null,
    voice: null
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="space-y-6">
      <div className="bg-error-50 border border-error-200 rounded-lg p-4">
        <div className="flex items-center">
          <AlertTriangle className="h-6 w-6 text-error-500 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-error-700">{t('emergency1.title')}</h1>
            <p className="text-error-600">{t('emergency1.call_now')}</p>
          </div>
        </div>
      </div>

      {/* Emergency Hotlines */}
      <HealthCard className="p-6">
        <h2 className="text-lg font-semibold mb-4">{t('emergency1.hotlines')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center p-3 bg-error-50 rounded-lg">
            <Phone className="h-5 w-5 text-error-500 mr-3" />
            <div>
              <p className="font-medium text-error-700">{t('emergency1.emergency')}</p>
              <p className="text-error-600">912</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-warning-50 rounded-lg">
            <Phone className="h-5 w-5 text-warning-500 mr-3" />
            <div>
              <p className="font-medium text-warning-700">{t('emergency1.police')}</p>
              <p className="text-warning-600">113</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-blue-light-50 rounded-lg">
            <Phone className="h-5 w-5 text-blue-light-500 mr-3" />
            <div>
              <p className="font-medium text-blue-light-700">{t('emergency1.fire_rescue')}</p>
              <p className="text-blue-light-600">114</p>
            </div>
          </div>
        </div>
      </HealthCard>

      {/* Step 1: Select Emergency Type */}
      {step === 1 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t('emergency1.select_emergency_type')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyTypes.map((type) => (
              <div
                key={type.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  emergencyData.type === type.id ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
                }`}
                onClick={() => setEmergencyData({ ...emergencyData, type: type.id })}
              >
                <h3 className="font-medium">{t(type.nameKey)}</h3>
              </div>
            ))}
          </div>
          <button
            onClick={nextStep}
            disabled={!emergencyData.type}
            className="mt-6 bg-error-500 text-white px-6 py-2 rounded-lg disabled:opacity-50"
          >
            {t('emergency1.continue')}
          </button>
        </HealthCard>
      )}

      {/* Step 2: Choose Help Type */}
      {step === 2 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t('emergency1.choose_help_type')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {helpTypes.map((help) => (
              <div
                key={help.id}
                className={`p-6 border rounded-lg cursor-pointer transition-colors text-center ${
                  emergencyData.helpType === help.id ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
                }`}
                onClick={() => setEmergencyData({ ...emergencyData, helpType: help.id })}
              >
                <help.icon className="h-8 w-8 mx-auto mb-3 text-healthcare-primary" />
                <h3 className="font-medium">{t(help.nameKey)}</h3>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">{t('emergency1.back')}</button>
            <button
              onClick={nextStep}
              disabled={!emergencyData.helpType}
              className="bg-error-500 text-white px-6 py-2 rounded-lg disabled:opacity-50"
            >
              {t('emergency1.continue')}
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 3: Share Location */}
      {step === 3 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t('emergency1.share_location')}</h2>
          <div className="space-y-6">
            <button className="w-full p-4 border-2 border-dashed border-healthcare-primary rounded-lg text-center hover:bg-healthcare-primary/5">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-healthcare-primary" />
              <h3 className="font-medium">{t('emergency1.use_gps')}</h3>
              <p className="text-sm text-muted-foreground">{t('emergency1.gps_description')}</p>
            </button>

            <div className="text-center text-muted-foreground">OR</div>

            <div>
              <label className="block text-sm font-medium mb-2">{t('emergency1.manual_location')}</label>
              <textarea
                placeholder={t('emergency1.manual_location_placeholder')}
                className="w-full p-3 border border-border rounded-lg h-24"
                value={emergencyData.location}
                onChange={(e) => setEmergencyData({ ...emergencyData, location: e.target.value })}
              ></textarea>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">{t('emergency1.back')}</button>
            <button onClick={nextStep} className="bg-error-500 text-white px-6 py-2 rounded-lg">{t('emergency1.continue')}</button>
          </div>
        </HealthCard>
      )}

      {/* Step 4: Describe Emergency */}
      {step === 4 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t('emergency1.describe_emergency')}</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">{t('emergency1.description_label')}</label>
              <textarea
                placeholder={t('emergency1.description_placeholder')}
                className="w-full p-3 border border-border rounded-lg h-32"
                value={emergencyData.description}
                onChange={(e) => setEmergencyData({ ...emergencyData, description: e.target.value })}
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="flex items-center justify-center p-4 border border-border rounded-lg hover:border-healthcare-primary">
                <Camera className="h-5 w-5 mr-2" />
                {t('emergency1.take_photo')}
              </button>
              <button className="flex items-center justify-center p-4 border border-border rounded-lg hover:border-healthcare-primary">
                <Mic className="h-5 w-5 mr-2" />
                {t('emergency1.record_voice_note')}
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">{t('emergency1.back')}</button>
            <button onClick={nextStep} className="bg-error-500 text-white px-6 py-2 rounded-lg">{t('emergency1.continue')}</button>
          </div>
        </HealthCard>
      )}

      {/* Step 5: Severity Level */}
      {step === 5 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t('emergency1.severity_level')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {severityLevels.map((level) => (
              <div
                key={level.id}
                className={`p-6 border rounded-lg cursor-pointer transition-colors text-center ${
                  emergencyData.severity === level.id ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
                }`}
                onClick={() => setEmergencyData({ ...emergencyData, severity: level.id })}
              >
                <h3 className="font-medium text-lg">{t(level.nameKey)}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {t(level.descKey)}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">{t('emergency1.back')}</button>
            <button
              onClick={nextStep}
              disabled={!emergencyData.severity}
              className="bg-error-500 text-white px-6 py-2 rounded-lg disabled:opacity-50"
            >
              {t('emergency1.submit_request')}
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 6: Confirmation & Tracking */}
      {step === 6 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t('emergency1.request_submitted')}</h2>
          <div className="space-y-6">
            <div className="p-4 bg-success-50 border border-success-200 rounded-lg">
              <h3 className="font-medium text-success-700 mb-2">{t('emergency1.request_confirmed')}</h3>
              <p className="text-sm text-success-600">Emergency ID: EMR-2024-001</p>
              <p className="text-sm text-success-600">{t('emergency1.help_on_way')}</p>
            </div>

            <div>
              <h3 className="font-medium mb-3">{t('emergency1.response_status')}</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-success-500 rounded-full mr-3"></div>
                  <span className="text-sm">{t('emergency1.request_received')}</span>
                  <span className="ml-auto text-xs text-muted-foreground">Just now</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-warning-500 rounded-full mr-3"></div>
                  <span className="text-sm">{t('emergency1.dispatching_help')}</span>
                  <span className="ml-auto text-xs text-muted-foreground">2 mins</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-muted rounded-full mr-3"></div>
                  <span className="text-sm text-muted-foreground">{t('emergency1.help_arrival')}</span>
                  <span className="ml-auto text-xs text-muted-foreground">15-20 mins</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-light-50 border border-blue-light-200 rounded-lg">
              <h3 className="font-medium text-blue-light-700 mb-2">{t('emergency1.nearest_facility')}</h3>
              <p className="text-sm text-blue-light-600">King Faisal Hospital - 3.2 km away</p>
              <p className="text-sm text-blue-light-600">Emergency Hotline: +250 788 123 456</p>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-error-500 text-white py-3 rounded-lg">
                {t('emergency1.call_hotline')}
              </button>
              <button className="flex-1 border border-border py-3 rounded-lg">
                {t('emergency1.track_response')}
              </button>
            </div>
          </div>
        </HealthCard>
      )}
    </div>
  );
}
