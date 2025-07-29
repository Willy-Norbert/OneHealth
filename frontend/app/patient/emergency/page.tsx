"use client";

import { useState } from "react";
import { Phone, MapPin, Camera, Mic, AlertTriangle, Car, Clock } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

const emergencyTypes = [
  { id: "accident", name: "Accident", color: "error" },
  { id: "maternal", name: "Maternal Emergency", color: "warning" },
  { id: "mental", name: "Mental Health Crisis", color: "blue-light" },
  { id: "respiratory", name: "Respiratory Emergency", color: "error" },
  { id: "covid", name: "COVID-19 Symptoms", color: "warning" },
  { id: "cardiac", name: "Heart Emergency", color: "error" },
];

const helpTypes = [
  { id: "ambulance", name: "Ambulance Dispatch", icon: Car },
  { id: "doctor", name: "Doctor on Call", icon: Phone },
  { id: "medicine", name: "Emergency Medicine", icon: AlertTriangle },
];

const severityLevels = [
  { id: "mild", name: "Mild", color: "success" },
  { id: "intense", name: "Intense", color: "warning" },
  { id: "severe", name: "Severe", color: "error" },
];

export default function EmergencyRequest() {
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
            <h1 className="text-2xl font-bold text-error-700">Emergency Request</h1>
            <p className="text-error-600">For life-threatening emergencies, call 912 immediately</p>
          </div>
        </div>
      </div>

      {/* Emergency Hotlines */}
      <HealthCard className="p-6">
        <h2 className="text-lg font-semibold mb-4">Emergency Hotlines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center p-3 bg-error-50 rounded-lg">
            <Phone className="h-5 w-5 text-error-500 mr-3" />
            <div>
              <p className="font-medium text-error-700">Emergency</p>
              <p className="text-error-600">912</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-warning-50 rounded-lg">
            <Phone className="h-5 w-5 text-warning-500 mr-3" />
            <div>
              <p className="font-medium text-warning-700">Police</p>
              <p className="text-warning-600">113</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-blue-light-50 rounded-lg">
            <Phone className="h-5 w-5 text-blue-light-500 mr-3" />
            <div>
              <p className="font-medium text-blue-light-700">Fire & Rescue</p>
              <p className="text-blue-light-600">114</p>
            </div>
          </div>
        </div>
      </HealthCard>

      {/* Step 1: Select Emergency Type */}
      {step === 1 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Select Emergency Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyTypes.map((type) => (
              <div
                key={type.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  emergencyData.type === type.id ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
                }`}
                onClick={() => setEmergencyData({...emergencyData, type: type.id})}
              >
                <h3 className="font-medium">{type.name}</h3>
              </div>
            ))}
          </div>
          <button
            onClick={nextStep}
            disabled={!emergencyData.type}
            className="mt-6 bg-error-500 text-white px-6 py-2 rounded-lg disabled:opacity-50"
          >
            Continue
          </button>
        </HealthCard>
      )}

      {/* Step 2: Choose Help Type */}
      {step === 2 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Choose Help Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {helpTypes.map((help) => (
              <div
                key={help.id}
                className={`p-6 border rounded-lg cursor-pointer transition-colors text-center ${
                  emergencyData.helpType === help.id ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
                }`}
                onClick={() => setEmergencyData({...emergencyData, helpType: help.id})}
              >
                <help.icon className="h-8 w-8 mx-auto mb-3 text-healthcare-primary" />
                <h3 className="font-medium">{help.name}</h3>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">Back</button>
            <button
              onClick={nextStep}
              disabled={!emergencyData.helpType}
              className="bg-error-500 text-white px-6 py-2 rounded-lg disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 3: Share Location */}
      {step === 3 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Share Your Location</h2>
          <div className="space-y-6">
            <button className="w-full p-4 border-2 border-dashed border-healthcare-primary rounded-lg text-center hover:bg-healthcare-primary/5">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-healthcare-primary" />
              <h3 className="font-medium">Use Current GPS Location</h3>
              <p className="text-sm text-muted-foreground">Automatically detect your location</p>
            </button>
            
            <div className="text-center text-muted-foreground">OR</div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Manually Enter Location</label>
              <textarea
                placeholder="Describe your location (address, landmarks, etc.)"
                className="w-full p-3 border border-border rounded-lg h-24"
                value={emergencyData.location}
                onChange={(e) => setEmergencyData({...emergencyData, location: e.target.value})}
              ></textarea>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">Back</button>
            <button onClick={nextStep} className="bg-error-500 text-white px-6 py-2 rounded-lg">Continue</button>
          </div>
        </HealthCard>
      )}

      {/* Step 4: Describe Emergency */}
      {step === 4 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Describe the Emergency</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                placeholder="Describe what happened and current symptoms..."
                className="w-full p-3 border border-border rounded-lg h-32"
                value={emergencyData.description}
                onChange={(e) => setEmergencyData({...emergencyData, description: e.target.value})}
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="flex items-center justify-center p-4 border border-border rounded-lg hover:border-healthcare-primary">
                <Camera className="h-5 w-5 mr-2" />
                Take Photo
              </button>
              <button className="flex items-center justify-center p-4 border border-border rounded-lg hover:border-healthcare-primary">
                <Mic className="h-5 w-5 mr-2" />
                Record Voice Note
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">Back</button>
            <button onClick={nextStep} className="bg-error-500 text-white px-6 py-2 rounded-lg">Continue</button>
          </div>
        </HealthCard>
      )}

      {/* Step 5: Severity Level */}
      {step === 5 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Severity Level</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {severityLevels.map((level) => (
              <div
                key={level.id}
                className={`p-6 border rounded-lg cursor-pointer transition-colors text-center ${
                  emergencyData.severity === level.id ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
                }`}
                onClick={() => setEmergencyData({...emergencyData, severity: level.id})}
              >
                <h3 className="font-medium text-lg">{level.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {level.id === "mild" && "Can wait for regular help"}
                  {level.id === "intense" && "Needs prompt attention"}
                  {level.id === "severe" && "Life-threatening emergency"}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">Back</button>
            <button
              onClick={nextStep}
              disabled={!emergencyData.severity}
              className="bg-error-500 text-white px-6 py-2 rounded-lg disabled:opacity-50"
            >
              Submit Emergency Request
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 6: Confirmation & Tracking */}
      {step === 6 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Emergency Request Submitted</h2>
          <div className="space-y-6">
            <div className="p-4 bg-success-50 border border-success-200 rounded-lg">
              <h3 className="font-medium text-success-700 mb-2">Request Confirmed</h3>
              <p className="text-sm text-success-600">Emergency ID: EMR-2024-001</p>
              <p className="text-sm text-success-600">Help is on the way!</p>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Response Status</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-success-500 rounded-full mr-3"></div>
                  <span className="text-sm">Emergency request received</span>
                  <span className="ml-auto text-xs text-muted-foreground">Just now</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-warning-500 rounded-full mr-3"></div>
                  <span className="text-sm">Dispatching help to your location</span>
                  <span className="ml-auto text-xs text-muted-foreground">2 mins</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-muted rounded-full mr-3"></div>
                  <span className="text-sm text-muted-foreground">Help arrival (estimated)</span>
                  <span className="ml-auto text-xs text-muted-foreground">15-20 mins</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-blue-light-50 border border-blue-light-200 rounded-lg">
              <h3 className="font-medium text-blue-light-700 mb-2">Nearest Facility</h3>
              <p className="text-sm text-blue-light-600">King Faisal Hospital - 3.2 km away</p>
              <p className="text-sm text-blue-light-600">Emergency Hotline: +250 788 123 456</p>
            </div>
            
            <div className="flex gap-4">
              <button className="flex-1 bg-error-500 text-white py-3 rounded-lg">
                Call Emergency Hotline
              </button>
              <button className="flex-1 border border-border py-3 rounded-lg">
                Track Response
              </button>
            </div>
          </div>
        </HealthCard>
      )}
    </div>
  );
}