"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, CreditCard, Check } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

const hospitals = [
  { id: 1, name: "King Faisal Hospital", location: "Kacyiru", departments: ["General", "Cardiology", "Pediatrics"] },
  { id: 2, name: "Rwanda Military Hospital", location: "Kanombe", departments: ["General", "Surgery", "Emergency"] },
  { id: 3, name: "University Teaching Hospital", location: "Butare", departments: ["General", "Gynecology", "Mental Health"] },
];

const departments = ["General Medicine", "Pediatrics", "Gynecology", "Cardiology", "Mental Health", "Emergency"];

export default function BookAppointments() {
  const [step, setStep] = useState(1);
  const [appointmentData, setAppointmentData] = useState({
    type: "",
    hospital: "",
    department: "",
    patientInfo: {},
    dateTime: "",
    payment: ""
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Book Appointment</h1>
        <p className="text-muted-foreground">Schedule your medical consultation</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className={`flex items-center ${num !== 6 ? 'flex-1' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= num ? 'bg-healthcare-primary text-white' : 'bg-muted text-muted-foreground'
            }`}>
              {step > num ? <Check className="w-4 h-4" /> : num}
            </div>
            {num !== 6 && <div className={`flex-1 h-1 mx-2 ${step > num ? 'bg-healthcare-primary' : 'bg-muted'}`} />}
          </div>
        ))}
      </div>

      {/* Step 1: Choose Appointment Type */}
      {step === 1 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Choose Appointment Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["In-Clinic", "Teleconsultation", "Follow-up"].map((type) => (
              <div
                key={type}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  appointmentData.type === type ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
                }`}
                onClick={() => setAppointmentData({...appointmentData, type})}
              >
                <h3 className="font-medium">{type}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {type === "In-Clinic" && "Visit the hospital in person"}
                  {type === "Teleconsultation" && "Virtual consultation from home"}
                  {type === "Follow-up" && "Follow-up on previous consultation"}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={nextStep}
            disabled={!appointmentData.type}
            className="mt-6 bg-healthcare-primary text-white px-6 py-2 rounded-lg disabled:opacity-50"
          >
            Continue
          </button>
        </HealthCard>
      )}

      {/* Step 2: Select Hospital */}
      {step === 2 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Select Hospital/Clinic</h2>
          <div className="space-y-4">
            {hospitals.map((hospital) => (
              <div
                key={hospital.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  appointmentData.hospital === hospital.name ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
                }`}
                onClick={() => setAppointmentData({...appointmentData, hospital: hospital.name})}
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
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">Back</button>
            <button
              onClick={nextStep}
              disabled={!appointmentData.hospital}
              className="bg-healthcare-primary text-white px-6 py-2 rounded-lg disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 3: Choose Department */}
      {step === 3 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Choose Department</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {departments.map((dept) => (
              <div
                key={dept}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  appointmentData.department === dept ? 'border-healthcare-primary bg-healthcare-primary/10' : 'border-border hover:border-healthcare-primary/50'
                }`}
                onClick={() => setAppointmentData({...appointmentData, department: dept})}
              >
                <h3 className="font-medium text-sm">{dept}</h3>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">Back</button>
            <button
              onClick={nextStep}
              disabled={!appointmentData.department}
              className="bg-healthcare-primary text-white px-6 py-2 rounded-lg disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 4: Patient Details */}
      {step === 4 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="p-3 border border-border rounded-lg" />
            <input type="text" placeholder="National ID" className="p-3 border border-border rounded-lg" />
            <input type="email" placeholder="Email Address" className="p-3 border border-border rounded-lg" />
            <input type="tel" placeholder="Phone Number" className="p-3 border border-border rounded-lg" />
            <input type="text" placeholder="Address" className="p-3 border border-border rounded-lg md:col-span-2" />
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">Back</button>
            <button onClick={nextStep} className="bg-healthcare-primary text-white px-6 py-2 rounded-lg">Continue</button>
          </div>
        </HealthCard>
      )}

      {/* Step 5: Date & Time */}
      {step === 5 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Date</label>
              <input type="date" className="w-full p-3 border border-border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Time</label>
              <select className="w-full p-3 border border-border rounded-lg">
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
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">Back</button>
            <button onClick={nextStep} className="bg-healthcare-primary text-white px-6 py-2 rounded-lg">Continue</button>
          </div>
        </HealthCard>
      )}

      {/* Step 6: Payment & Confirmation */}
      {step === 6 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Payment & Confirmation</h2>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Appointment Summary</h3>
              <p>Type: {appointmentData.type}</p>
              <p>Hospital: {appointmentData.hospital}</p>
              <p>Department: {appointmentData.department}</p>
              <p>Fee: 15,000 RWF</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Payment Method</h4>
              <div className="space-y-2">
                {["Mobile Money", "Bank Transfer", "Insurance", "USSD"].map((method) => (
                  <label key={method} className="flex items-center">
                    <input type="radio" name="payment" className="mr-2" />
                    {method}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">Back</button>
            <button className="bg-healthcare-primary text-white px-6 py-2 rounded-lg">Confirm & Pay</button>
          </div>
        </HealthCard>
      )}
    </div>
  );
}