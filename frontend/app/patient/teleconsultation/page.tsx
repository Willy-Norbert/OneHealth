"use client";

import { useState } from "react";
import { Video, Phone, Calendar, CreditCard, FileText, History } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

const consultationTypes = [
  { id: "general", name: "General Consultation", fee: "10,000 RWF" },
  { id: "cardiology", name: "Cardiology", fee: "25,000 RWF" },
  { id: "gynecology", name: "Gynecology", fee: "20,000 RWF" },
  { id: "mental-health", name: "Mental Health", fee: "18,000 RWF" },
  { id: "pediatrics", name: "Pediatrics", fee: "15,000 RWF" },
];

const insuranceOptions = [
  "Mutuelle de Santé", "RAMA", "MMI", "RSSB", "Radiant Insurance", 
  "UAP Insurance", "SANLAM", "Britam", "Prime Insurance", "Cash Payment"
];

export default function Teleconsultation() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    hospital: "",
    consultationType: "",
    insurance: "",
    patientInfo: {},
    paymentMethod: "",
    callType: "video"
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Teleconsultation</h1>
        <p className="text-muted-foreground">Connect with healthcare professionals remotely</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
  <div
    key={num}
    className={`flex items-center ${num !== 8 ? 'flex-1' : ''}`}
  >
    <div
      onClick={() => {
        // Optional: prevent skipping ahead to incomplete steps
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
          <h2 className="text-xl font-semibold mb-4">Select Hospital/Clinic</h2>
          <div className="space-y-3">
          {["King Faisal Hospital", "Rwanda Military Hospital", "University Teaching Hospital", "Kibagabaga Hospital"].map((hospital) => (
  <div
    key={hospital}
    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
      formData.hospital === hospital ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
    }`}
    onClick={() => {
      setFormData(prev => ({ ...prev, hospital }));
      console.log("Hospital selected:", hospital);
    }}
  >
    <h3 className="font-medium">{hospital}</h3>
    <p className="text-sm text-muted-foreground">Available for teleconsultation</p>
  </div>
))}

          </div>
          <button
            onClick={nextStep}
            disabled={!formData.hospital}
            className="mt-6 bg-healthcare-primary text-black px-6 py-2 rounded-lg disabled:opacity-50"
          >
            Continue
          </button>
        </HealthCard>
      )}

      {/* Step 2: Choose Consultation Type */}
      {step === 2 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Choose Consultation Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  formData.consultationType === type.id ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
                }`}
                onClick={() => setFormData({...formData, consultationType: type.id})}
              >
                <h3 className="font-medium">{type.name}</h3>
                <p className="text-sm text-muted-foreground">Fee: {type.fee}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">Back</button>
            <button
              onClick={nextStep}
              disabled={!formData.consultationType}
              className="bg-healthcare-primary text-black px-6 py-2 rounded-lg disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 3: Select Insurance */}
      {step === 3 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Select Payment/Insurance</h2>
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
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">Back</button>
            <button
              onClick={nextStep}
              disabled={!formData.insurance}
              className="bg-healthcare-primary text-black px-6 py-2 rounded-lg disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 4: Patient Information */}
      {step === 4 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="p-3 border border-border rounded-lg" />
            <input type="number" placeholder="Age" className="p-3 border border-border rounded-lg" />
            <input type="text" placeholder="National ID" className="p-3 border border-border rounded-lg" />
            <input type="tel" placeholder="Phone Number" className="p-3 border border-border rounded-lg" />
            <input type="number" placeholder="Weight (kg)" className="p-3 border border-border rounded-lg" />
            <select className="p-3 border border-border rounded-lg">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="mt-4">
            <textarea
              placeholder="Describe your symptoms or reason for consultation"
              className="w-full p-3 border border-border rounded-lg h-24"
            ></textarea>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">Back</button>
            <button onClick={nextStep} className="bg-healthcare-primary text-black px-6 py-2 rounded-lg">Continue</button>
          </div>
        </HealthCard>
      )}

      {/* Step 5: Payment */}
      {step === 5 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="space-y-4">
            {["Mobile Money (MTN/Airtel)", "Bank Transfer", "USSD Payment"].map((method) => (
              <div
                key={method}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  formData.paymentMethod === method ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
                }`}
                onClick={() => setFormData({...formData, paymentMethod: method})}
              >
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-3" />
                  <span>{method}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">Back</button>
            <button
              onClick={nextStep}
              disabled={!formData.paymentMethod}
              className="bg-healthcare-primary text-black px-6 py-2 rounded-lg disabled:opacity-50"
            >
              Pay & Continue
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 6: Join Consultation */}
      {step === 6 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Join Consultation</h2>
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
                  Video Call
                </button>
                <button
                  onClick={() => setFormData({...formData, callType: "phone"})}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg border ${
                    formData.callType === "phone" ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border'
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  Phone Call
                </button>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm">Your doctor will join shortly. Please ensure you have a stable internet connection.</p>
              </div>
            </div>
            <button className="bg-success-500 text-black px-8 py-3 rounded-lg">
              Join Now
            </button>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">Back</button>
            <button onClick={nextStep} className="bg-healthcare-primary text-black px-6 py-2 rounded-lg">Continue</button>
          </div>
        </HealthCard>
      )}

      {/* Step 7: Follow-up Options */}
      {step === 7 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Follow-up Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg text-center">
              <FileText className="w-8 h-8 mx-auto mb-2 text-healthcare-primary" />
              <h3 className="font-medium">Digital Prescription</h3>
              <p className="text-sm text-muted-foreground">Receive medications digitally</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-healthcare-primary" />
              <h3 className="font-medium">Schedule Follow-up</h3>
              <p className="text-sm text-muted-foreground">Book next appointment</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <History className="w-8 h-8 mx-auto mb-2 text-healthcare-primary" />
              <h3 className="font-medium">Medical Records</h3>
              <p className="text-sm text-muted-foreground">View consultation notes</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">Back</button>
            <button onClick={nextStep} className="bg-healthcare-primary text-black px-6 py-2 rounded-lg">Continue</button>
          </div>
        </HealthCard>
      )}

      {/* Step 8: Medical History */}
      {step === 8 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Medical History</h2>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Dr. Jean Mugabo - Cardiology</h3>
                  <p className="text-sm text-muted-foreground">King Faisal Hospital</p>
                  <p className="text-sm text-muted-foreground">Date: March 15, 2024</p>
                </div>
                <span className="px-2 py-1 bg-success-100 text-success-700 text-xs rounded">Completed</span>
              </div>
              <div className="mt-3">
                <p className="text-sm"><strong>Diagnosis:</strong> Hypertension monitoring</p>
                <p className="text-sm"><strong>Medications:</strong> Amlodipine 5mg daily</p>
                <p className="text-sm"><strong>Notes:</strong> Blood pressure stable, continue medication</p>
              </div>
            </div>
          </div>
          <button className="mt-6 bg-healthcare-primary text-black px-6 py-2 rounded-lg">
            Complete Consultation
          </button>
        </HealthCard>
      )}
    </div>
  );
}