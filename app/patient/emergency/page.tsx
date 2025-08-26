"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, MapPin, Camera, Mic, AlertTriangle, Car, Plus, Minus, Search } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from "framer-motion";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // <-- REPLACE WITH YOUR API KEY

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

// Mock Data
const mockMapData = {
  userLocation: { lat: -1.95, lng: 30.06 },
  ambulances: [
    { id: "amb-1", lat: -1.94, lng: 30.05, status: "available" },
    { id: "amb-2", lat: -1.96, lng: 30.07, status: "en route" },
  ],
  hospitals: [
    { id: "hosp-1", lat: -1.955, lng: 30.065, name: "King Faisal Hospital", type: "private", cost: { min: 20000, max: 800000 }, postedBy: "KF Hospital" },
    { id: "hosp-2", lat: -1.945, lng: 30.06, name: "CHUK Hospital", type: "public", cost: { min: 5000, max: 250000 }, postedBy: "CHUK" },
    { id: "hosp-3", lat: -1.95, lng: 30.055, name: "La Croix du Sud Hospital", type: "private", cost: { min: 15000, max: 500000 }, postedBy: "La Croix du Sud" },
  ]
};

// MapComponent now uses Google Maps
const MapComponent = ({ userLocation, ambulances, hospitals, activeFilters, t }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const mapRef = useRef(null);

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Map...</div>;

  const filteredHospitals = hospitals.filter(hosp => activeFilters.includes(hosp.type));

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-border dark:border-gray-600">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userLocation}
        zoom={14}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
        onLoad={map => mapRef.current = map}
      >
        {/* User Marker */}
        <Marker position={userLocation} icon={{ url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" }} />

        {/* Ambulance Markers */}
        {ambulances.map(amb => (
          <Marker
            key={amb.id}
            position={{ lat: amb.lat, lng: amb.lng }}
            icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
          />
        ))}

        {/* Hospital Markers */}
        {filteredHospitals.map(hosp => (
          <Marker
            key={hosp.id}
            position={{ lat: hosp.lat, lng: hosp.lng }}
            icon={{ url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png" }}
          />
        ))}
      </GoogleMap>

      {/* Map Legend */}
      <div className="absolute top-2 left-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md flex flex-col space-y-2 text-xs">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span>Your Location</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          <span>Ambulances ({ambulances.length})</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span>Hospitals ({filteredHospitals.length})</span>
        </div>
        <div className="mt-2 text-gray-700 dark:text-gray-300">
          {filteredHospitals.map(hosp => (
            <div key={hosp.id} className="text-xs border-l border-gray-300 pl-2">
              <p className="font-medium">{hosp.name}</p>
              <p className="text-muted-foreground">{t('emergency1.cost_range', { min: hosp.cost.min.toLocaleString(), max: hosp.cost.max.toLocaleString() })}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// Main Emergency Request Component
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
    voice: null,
  });
  const [hospitalFilters, setHospitalFilters] = useState(["public", "private"]);

  const nextStep = () => {
    // A simple check to ensure we don't go past the final step
    if (step < 7) {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    // Ensure we can't go back from the first step
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleHospitalFilterChange = (type) => {
    setHospitalFilters((prev) => {
      if (prev.includes(type)) {
        return prev.filter(f => f !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  // Step names for the progress indicator
  const stepNames = [
    { name: t('emergency1.select_emergency_type'), step: 1 },
    { name: t('emergency1.choose_help_type'), step: 2 },
    { name: t('emergency1.find_nearest'), step: 3 },
    { name: t('emergency1.share_location'), step: 4 },
    { name: t('emergency1.describe_emergency'), step: 5 },
    { name: t('emergency1.severity_level'), step: 6 },
    { name: t('emergency1.request_submitted'), step: 7 },
  ];

  return (
    <div className="space-y-6 dark:bg-gray-900 min-h-screen p-4">
      {/* Emergency Alert Banner */}
      <div className="bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 rounded-lg p-4">
        <div className="flex items-center">
          <AlertTriangle className="h-6 w-6 text-error-500 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-error-700 dark:text-error-400">{t('emergency1.title')}</h1>
            <p className="text-error-600 dark:text-error-500">{t('emergency1.call_now')}</p>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <HealthCard className="p-6 bg-white dark:bg-gray-800">
        <div className="flex justify-between items-center text-center">
          {stepNames.map((stepItem, index) => (
            <div key={index} className={`flex-1 flex flex-col items-center relative ${index > 0 ? 'ml-2' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                step >= stepItem.step
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
              }`}>
                {step >= stepItem.step ? '✓' : stepItem.step}
              </div>
              <p className={`mt-2 text-xs font-medium text-center ${
                step >= stepItem.step
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}>{stepItem.name}</p>
              {index < stepNames.length - 1 && (
                <div className={`absolute top-4 left-[calc(50%+16px)] w-full h-0.5 transition-colors duration-300 z-[-1] ${
                  step > stepItem.step
                    ? 'bg-green-600'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </HealthCard>

      {/* Main Content Area with conditional rendering based on 'step' */}
      <div className="space-y-6">
        {step === 1 && (
          <HealthCard className="p-6 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t('emergency1.select_emergency_type')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emergencyTypes.map((type) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors dark:text-white ${
                    emergencyData.type === type.id ? 'border-green-900 dark:border-green-600 bg-green-900/10' : 'border-gray-200 dark:border-gray-700 hover:border-green-900/50 dark:hover:border-green-600/50'
                  }`}
                  onClick={() => setEmergencyData({ ...emergencyData, type: type.id })}
                >
                  <h3 className="font-medium">{t(type.nameKey)}</h3>
                </motion.div>
              ))}
            </div>
          </HealthCard>
        )}

        {step === 2 && (
          <HealthCard className="p-6 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t('emergency1.choose_help_type')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {helpTypes.map((help) => (
                <motion.div
                  key={help.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-6 border rounded-lg cursor-pointer transition-colors text-center dark:text-white ${
                    emergencyData.helpType === help.id ? 'border-green-900 dark:border-green-600 bg-green-900/10' : 'border-gray-200 dark:border-gray-700 hover:border-green-900/50 dark:hover:border-green-600/50'
                  }`}
                  onClick={() => setEmergencyData({ ...emergencyData, helpType: help.id })}
                >
                  <help.icon className="h-8 w-8 mx-auto mb-3 text-green-600 dark:text-green-500" />
                  <h3 className="font-medium">{t(help.nameKey)}</h3>
                </motion.div>
              ))}
            </div>
          </HealthCard>
        )}

        {step === 3 && (
          <HealthCard className="p-6 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t('emergency1.find_nearest')}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{t('emergency1.map_description')}</p>

            <MapComponent
              userLocation={mockMapData.userLocation}
              ambulances={mockMapData.ambulances}
              hospitals={mockMapData.hospitals}
              activeFilters={hospitalFilters}
              t={t}
            />

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{t('emergency1.filter_hospitals')}</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleHospitalFilterChange("public")}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    hospitalFilters.includes("public")
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  {t('emergency1.hospital_type.public')}
                </button>
                <button
                  onClick={() => handleHospitalFilterChange("private")}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    hospitalFilters.includes("private")
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  {t('emergency1.hospital_type.private')}
                </button>
              </div>
            </div>
          </HealthCard>
        )}

        {step === 4 && (
          <HealthCard className="p-6 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t('emergency1.share_location')}</h2>
            <div className="space-y-6">
              <button className="w-full p-4 border-2 border-dashed border-green-600 dark:border-green-500 rounded-lg text-center hover:bg-green-600/5 dark:hover:bg-green-500/5">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-green-600 dark:text-green-500" />
                <h3 className="font-medium text-gray-900 dark:text-white">{t('emergency1.use_gps')}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('emergency1.gps_description')}</p>
              </button>

              <div className="text-center text-gray-400 dark:text-gray-500">OR</div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('emergency1.manual_location')}</label>
                <textarea
                  placeholder={t('emergency1.manual_location_placeholder')}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg h-24 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={emergencyData.location}
                  onChange={(e) => setEmergencyData({ ...emergencyData, location: e.target.value })}
                ></textarea>
              </div>
            </div>
          </HealthCard>
        )}

        {step === 5 && (
          <HealthCard className="p-6 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t('emergency1.describe_emergency')}</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('emergency1.description_label')}</label>
                <textarea
                  placeholder={t('emergency1.description_placeholder')}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg h-32 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={emergencyData.description}
                  onChange={(e) => setEmergencyData({ ...emergencyData, description: e.target.value })}
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center justify-center p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-green-600 dark:hover:border-green-500 text-gray-700 dark:text-gray-300">
                  <Camera className="h-5 w-5 mr-2" />
                  {t('emergency1.take_photo')}
                </button>
                <button className="flex items-center justify-center p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-green-600 dark:hover:border-green-500 text-gray-700 dark:text-gray-300">
                  <Mic className="h-5 w-5 mr-2" />
                  {t('emergency1.record_voice_note')}
                </button>
              </div>
            </div>
          </HealthCard>
        )}

        {step === 6 && (
          <HealthCard className="p-6 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t('emergency1.severity_level')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {severityLevels.map((level) => (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-6 border rounded-lg cursor-pointer transition-colors text-center dark:text-white ${
                    emergencyData.severity === level.id ? 'border-green-900 dark:border-green-600 bg-green-900/10' : 'border-gray-200 dark:border-gray-700 hover:border-green-900/50 dark:hover:border-green-600/50'
                  }`}
                  onClick={() => setEmergencyData({ ...emergencyData, severity: level.id })}
                >
                  <h3 className="font-medium text-lg">{t(level.nameKey)}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {t(level.descKey)}
                  </p>
                </motion.div>
              ))}
            </div>
          </HealthCard>
        )}

        {step === 7 && (
          <HealthCard className="p-6 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t('emergency1.request_submitted')}</h2>
            <div className="space-y-6">
              <div className="p-4 bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 rounded-lg">
                <h3 className="font-medium text-success-700 dark:text-success-400 mb-2">{t('emergency1.request_confirmed')}</h3>
                <p className="text-sm text-success-600 dark:text-success-500">Emergency ID: EMR-2024-001</p>
                <p className="text-sm text-success-600 dark:text-success-500">{t('emergency1.help_on_way')}</p>
              </div>

              <div>
                <h3 className="font-medium mb-3 text-gray-900 dark:text-white">{t('emergency1.response_status')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-success-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-900 dark:text-white">{t('emergency1.request_received')}</span>
                    <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">Just now</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-warning-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-900 dark:text-white">{t('emergency1.dispatching_help')}</span>
                    <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">2 mins</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{t('emergency1.help_arrival')}</span>
                    <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">15-20 mins</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-light-50 dark:bg-blue-light-900/20 border border-blue-light-200 dark:border-blue-light-800 rounded-lg">
                <h3 className="font-medium text-blue-light-700 dark:text-blue-light-400 mb-2">{t('emergency1.nearest_facility')}</h3>
                <p className="text-sm text-blue-light-600 dark:text-blue-light-500">King Faisal Hospital - 3.2 km away</p>
                <p className="text-sm text-blue-light-600 dark:text-blue-light-500">Emergency Hotline: +250 788 123 456</p>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
                  {t('emergency1.call_hotline')}
                </button>
                <button className="flex-1 border border-gray-300 dark:border-gray-600 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                  {t('emergency1.track_response')}
                </button>
              </div>
            </div>
          </HealthCard>
        )}
      </div>

      {/* Navigation Buttons (always visible) */}
      {step < 7 && (
        <div className="flex gap-4 mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          {step > 1 && (
            <button onClick={prevStep} className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              {t('emergency1.back')}
            </button>
          )}
          <button
            onClick={nextStep}
            disabled={
              (step === 1 && !emergencyData.type) ||
              (step === 2 && !emergencyData.helpType) ||
              (step === 6 && !emergencyData.severity)
            }
            className="flex-1 bg-green-600 text-white px-6 py-2 rounded-lg disabled:opacity-50 hover:bg-green-700 transition"
          >
            {step === 6 ? t('emergency1.submit_request') : t('emergency1.continue')}
          </button>
        </div>
      )}
    </div>
  );
}