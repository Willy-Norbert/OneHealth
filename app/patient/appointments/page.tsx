"use client";
import { useState } from "react";
import {
  MapPin,
  Check,
  Video,
  Calendar,
  Clock,
  User,
  FileText,
  CreditCard,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Clipboard,
} from "lucide-react";

// Component dependencies are implemented here to make the code self-contained.
const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
  >
    {children}
  </div>
);
const CardHeader = ({ children, className = "" }) => (
  <div
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
  >
    {children}
  </div>
);
const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);
const Button = ({ children, onClick, disabled = false, className = "" }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-green-900 text-green-400 hover:bg-green-800 ${className}`}
  >
    {children}
  </button>
);
const Input = ({ type, id, value, onChange, placeholder, className = "" }) => (
  <input
    type={type}
    id={id}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
  />
);
const Label = ({ children, htmlFor, className = "" }) => (
  <label
    htmlFor={htmlFor}
    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
  >
    {children}
  </label>
);
const Textarea = ({ id, placeholder, value, onChange, className = "" }) => (
  <textarea
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
  />
);
const Badge = ({ children, variant, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
      variant === "secondary"
        ? "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
        : variant === "outline"
        ? "text-foreground"
        : ""
    } ${className}`}
  >
    {children}
  </span>
);

const HealthCard = ({ children, className = "" }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

// ProgressIndicator component based on the user's provided code.
const ProgressIndicator = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((stepName, index) => (
        <div key={index} className={`flex items-center ${index !== steps.length - 1 ? 'flex-1' : ''}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
              currentStep >= index + 1 ? 'bg-green-900 text-green-400' : 'bg-muted text-muted-foreground'
            }`}
            onClick={() => onStepClick(index + 1)}
          >
            {currentStep > index + 1 ? <Check className="w-4 h-4" /> : index + 1}
          </div>
          {index !== steps.length - 1 && <div className={`flex-1 h-1 mx-2 ${currentStep > index + 1 ? 'bg-green-900' : 'bg-muted'}`} />}
        </div>
      ))}
    </div>
  );
};

export default function BookAppointments() {
  const [step, setStep] = useState(1);
  const [appointmentData, setAppointmentData] = useState({
    type: "",
    hospital: "",
    doctor: "",
    insurance: "",
    department: "",
    patientInfo: {
      fullName: "",
      nationalId: "",
      email: "",
      phone: "",
      address: "",
    },
    symptoms: "",
    urgency: "routine",
    date: "",
    time: "",
    payment: "",
  });

  // Sample data for a realistic user experience
  const hospitals = [
    { id: 1, name: "King Faisal Hospital", location: "Kacyiru", departments: ["General Medicine", "Cardiology", "Pediatrics"] },
    { id: 2, name: "Rwanda Military Hospital", location: "Kanombe", departments: ["General Medicine", "Surgery", "Emergency"] },
    { id: 3, name: "University Teaching Hospital", location: "Butare", departments: ["General Medicine", "Gynecology", "Mental Health"] },
  ];

  const previousDoctors = [
    { id: 1, name: "Dr. Sarah Johnson", hospital: "King Faisal Hospital", department: "Cardiology" },
    { id: 2, name: "Dr. Michael Brown", hospital: "Rwanda Military Hospital", department: "General Medicine" },
    { id: 3, name: "Dr. Emily Davis", hospital: "University Teaching Hospital", department: "Dermatology" },
  ];

  const insurances = ["RAMA", "Mutuelle de Santé", "Military Medical Insurance", "Radiant", "Sanlam", "Other"];
  const departments = ["General Medicine", "Pediatrics", "Gynecology", "Cardiology", "Mental Health", "Emergency"];
  const paymentMethods = ["Mobile Money", "Bank Transfer", "Insurance", "USSD"];

  const specialties = [
    { id: 'general', name: 'General Medicine', available: 12 },
    { id: 'cardiology', name: 'Cardiology', available: 5 },
    { id: 'dermatology', name: 'Dermatology', available: 8 },
    { id: 'pediatrics', name: 'Pediatrics', available: 6 }
  ];

  const availableDoctors = [
    { 
      id: '1', 
      name: 'Dr. Sarah Johnson', 
      specialty: 'General Medicine', 
      rating: 4.8, 
      experience: '12 years',
      nextAvailable: 'Today, 2:30 PM'
    },
    { 
      id: '2', 
      name: 'Dr. Michael Brown', 
      specialty: 'Cardiology', 
      rating: 4.9, 
      experience: '15 years',
      nextAvailable: 'Tomorrow, 10:00 AM'
    }
  ];

  // Helper function to navigate to the next step, with special logic for teleconsultations and follow-ups.
  const nextStep = () => {
    // Logic to skip steps based on appointment type
    if (appointmentData.type === "Teleconsultation" && step === 2) {
      setStep(step + 1); // Next step is 'Medical Information' after doctor selection
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (appointmentData.type === "Teleconsultation" && step === 3) {
      setStep(step - 1); // Go back to doctor selection
    } else {
      setStep((s) => s - 1);
    }
  };

  const handleStepClick = (s) => setStep(s);

  // The steps are dynamic based on the appointment type
  const steps = (() => {
    switch (appointmentData.type) {
      case "Teleconsultation":
        return ["Type", "Doctor Selection", "Medical Info", "Date & Time", "Payment"];
      case "Follow-up":
        return ["Type", "Insurance", "Previous Doctor", "Date & Time", "Payment"];
      default: // In-Clinic
        return ["Type", "Insurance", "Hospital", "Department", "Patient Info", "Date & Time", "Payment"];
    }
  })();
    
  // Unified flow, no separate TeleconsultationFlow component
  return (
    <div className="space-y-6 p-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Book an Appointment</h1>
        <p className="text-muted-foreground">
          Follow the steps to book your appointment.
        </p>
      </div>

      <ProgressIndicator steps={steps} currentStep={step} onStepClick={handleStepClick} />

      {/* Step 1: Choose Appointment Type */}
      {step === 1 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Choose Appointment Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["In-Clinic", "Teleconsultation", "Follow-up"].map((type) => (
              <div
                key={type}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  appointmentData.type === type
                    ? "border-green-900 bg-green-900/20 ring-2 ring-green-900"
                    : "border-border hover:border-green-900/50"
                }`}
                onClick={() => setAppointmentData({ ...appointmentData, type })}
              >
                <h3 className="font-medium">{type}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {type === "In-Clinic" && "Physical visit to a hospital."}
                  {type === "Teleconsultation" && "Virtual consultation via video call."}
                  {type === "Follow-up" && "Revisit your doctor for a check-up."}
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
            Continue
          </button>
        </HealthCard>
      )}

      {/* Step 2: Teleconsultation Doctor Selection or In-Clinic/Follow-up Insurance */}
      {step === 2 && (
        <HealthCard className="p-6">
          {appointmentData.type === "Teleconsultation" ? (
            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-4 block">Select Specialty</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specialties.map((specialty) => (
                    <Card 
                      key={specialty.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        appointmentData.department === specialty.name ? 'ring-2 ring-green-900 bg-green-900/5' : ''
                      }`}
                      onClick={() => setAppointmentData({...appointmentData, department: specialty.name})}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">{specialty.name}</h3>
                            <p className="text-sm text-muted-foreground">{specialty.available} doctors available</p>
                          </div>
                          <Badge variant="secondary">{specialty.available}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <Label className="text-base font-medium mb-4 block">Choose Doctor</Label>
                <div className="space-y-4">
                  {availableDoctors.map((doctor) => (
                    <Card 
                      key={doctor.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        appointmentData.doctor === doctor.name ? 'ring-2 ring-green-900 bg-green-900/5' : ''
                      }`}
                      onClick={() => setAppointmentData({...appointmentData, doctor: doctor.name})}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-green-900/20 flex items-center justify-center">
                            <User className="w-6 h-6 text-green-900" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">{doctor.name}</h3>
                            <p className="text-sm text-muted-foreground">{doctor.specialty} • {doctor.experience}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline">★ {doctor.rating}</Badge>
                              <span className="text-xs text-muted-foreground">Next: {doctor.nextAvailable}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-4">Choose Insurance</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {insurances.map((insurance) => (
                  <div
                    key={insurance}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      appointmentData.insurance === insurance
                        ? "border-green-900 bg-green-900/20 ring-2 ring-green-900"
                        : "border-border hover:border-green-900/50"
                    }`}
                    onClick={() => setAppointmentData({ ...appointmentData, insurance })}
                  >
                    <h3 className="font-medium text-sm">{insurance}</h3>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              Back
            </button>
            <button
              onClick={nextStep}
              disabled={
                appointmentData.type === "Teleconsultation"
                  ? !appointmentData.doctor
                  : !appointmentData.insurance
              }
              className={`px-6 py-2 rounded-lg transition-colors ${
                (appointmentData.type === "Teleconsultation" && !appointmentData.doctor) ||
                (appointmentData.type !== "Teleconsultation" && !appointmentData.insurance)
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-900 hover:bg-green-900/90 text-green-400"
              }`}
            >
              Continue
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 3: In-Clinic/Follow-up Hospital/Doctor Selection or Teleconsultation Medical Info */}
      {step === 3 && (
        <HealthCard className="p-6">
          {appointmentData.type === "In-Clinic" && (
            <>
              <h2 className="text-xl font-semibold mb-4">Select Hospital</h2>
              <div className="space-y-4">
                {hospitals.map((hospital) => (
                  <div
                    key={hospital.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      appointmentData.hospital === hospital.name
                        ? "border-green-900 bg-green-900/20 ring-2 ring-green-900"
                        : "border-border hover:border-green-900/50"
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
            </>
          )}

          {appointmentData.type === "Follow-up" && (
            <>
              <h2 className="text-xl font-semibold mb-4">Select Previous Doctor</h2>
              <div className="space-y-4">
                {previousDoctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      appointmentData.doctor === doctor.name
                        ? "border-green-900 bg-green-900/20 ring-2 ring-green-900"
                        : "border-border hover:border-green-900/50"
                    }`}
                    onClick={() =>
                      setAppointmentData({
                        ...appointmentData,
                        doctor: doctor.name,
                        hospital: doctor.hospital,
                        department: doctor.department
                      })
                    }
                  >
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-muted-foreground mr-2" />
                      <div>
                        <h3 className="font-medium">{doctor.name}</h3>
                        <p className="text-sm text-muted-foreground">{doctor.department} at {doctor.hospital}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {appointmentData.type === "Teleconsultation" && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="symptoms">Describe your symptoms</Label>
                <Textarea 
                  id="symptoms"
                  placeholder="Please describe your symptoms, concerns, or reason for consultation..."
                  value={appointmentData.symptoms}
                  onChange={(e) => setAppointmentData({...appointmentData, symptoms: e.target.value})}
                  className="mt-2 min-h-32"
                />
              </div>
              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium mb-2">Medical History Upload (Optional)</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Upload relevant medical records, test results, or previous prescriptions to help your doctor.
                      </p>
                      <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300">
                        Upload Files
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              Back
            </button>
            <button
              onClick={nextStep}
              disabled={
                (appointmentData.type === "In-Clinic" && !appointmentData.hospital) ||
                (appointmentData.type === "Follow-up" && !appointmentData.doctor) ||
                (appointmentData.type === "Teleconsultation" && !appointmentData.symptoms)
              }
              className={`px-6 py-2 rounded-lg transition-colors ${
                ((appointmentData.type === "In-Clinic" && !appointmentData.hospital) ||
                 (appointmentData.type === "Follow-up" && !appointmentData.doctor) ||
                 (appointmentData.type === "Teleconsultation" && !appointmentData.symptoms))
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-900 hover:bg-green-900/90 text-green-400"
              }`}
            >
              Continue
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 4: In-Clinic Department and Patient Info, or Teleconsultation Date & Time, or Follow-up Date & Time */}
      {step === 4 && (
        <HealthCard className="p-6">
          {appointmentData.type === "In-Clinic" && (
            <>
              <h2 className="text-xl font-semibold mb-4">Choose Department</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {departments.map((dept) => (
                  <div
                    key={dept}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      appointmentData.department === dept
                        ? "border-green-900 bg-green-900/20 ring-2 ring-green-900"
                        : "border-border hover:border-green-900/50"
                    }`}
                    onClick={() => setAppointmentData({ ...appointmentData, department: dept })}
                  >
                    <h3 className="font-medium text-sm">{dept}</h3>
                  </div>
                ))}
              </div>
              <h2 className="text-xl font-semibold mb-4">Patient Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { key: "fullName", type: "text", placeholder: "Full Name" },
                  { key: "nationalId", type: "text", placeholder: "National ID" },
                  { key: "email", type: "email", placeholder: "Email" },
                  { key: "phone", type: "tel", placeholder: "Phone" },
                  { key: "address", type: "text", placeholder: "Address", colSpan: 2 },
                ].map((field) => (
                  <Input
                    key={field.key}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={
                      appointmentData.patientInfo[
                        field.key as keyof typeof appointmentData.patientInfo
                      ]
                    }
                    onChange={(e) =>
                      setAppointmentData({
                        ...appointmentData,
                        patientInfo: {
                          ...appointmentData.patientInfo,
                          [field.key]: e.target.value,
                        },
                      })
                    }
                    className={`${field.colSpan ? "md:col-span-2" : ""}`}
                  />
                ))}
              </div>
            </>
          )}

          {appointmentData.type !== "In-Clinic" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="block text-sm font-medium mb-2">Preferred Date</Label>
                  <input
                    type="date"
                    value={appointmentData.date}
                    onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                    className="w-full p-3 border border-border rounded-lg"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium mb-2">Preferred Time</Label>
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
              {appointmentData.type === "Teleconsultation" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'routine', name: 'Routine', desc: 'Within next week' },
                    { id: 'urgent', name: 'Urgent', desc: 'Within 24 hours' },
                    { id: 'emergency', name: 'Emergency', desc: 'Immediate attention' }
                  ].map((urgency) => (
                    <Card 
                      key={urgency.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        appointmentData.urgency === urgency.id ? 'ring-2 ring-green-900 bg-green-900/5' : ''
                      }`}
                      onClick={() => setAppointmentData({...appointmentData, urgency: urgency.id})}
                    >
                      <CardContent className="p-4 text-center">
                        <h3 className="font-medium">{urgency.name}</h3>
                        <p className="text-sm text-muted-foreground">{urgency.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              Back
            </button>
            <button
              onClick={nextStep}
              disabled={
                (appointmentData.type === "In-Clinic" && (!appointmentData.department || !appointmentData.patientInfo.fullName)) ||
                (appointmentData.type !== "In-Clinic" && (!appointmentData.date || !appointmentData.time))
              }
              className={`px-6 py-2 rounded-lg transition-colors ${
                ((appointmentData.type === "In-Clinic" && (!appointmentData.department || !appointmentData.patientInfo.fullName)) ||
                 (appointmentData.type !== "In-Clinic" && (!appointmentData.date || !appointmentData.time)))
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-900 hover:bg-green-900/90 text-green-400"
              }`}
            >
              Continue
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 5: In-Clinic Date & Time, or Teleconsultation/Follow-up Payment */}
      {step === 5 && (
        <HealthCard className="p-6">
          {appointmentData.type === "In-Clinic" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="block text-sm font-medium mb-2">Preferred Date</Label>
                  <input
                    type="date"
                    value={appointmentData.date}
                    onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                    className="w-full p-3 border border-border rounded-lg"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium mb-2">Preferred Time</Label>
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
            </div>
          )}

          {appointmentData.type !== "In-Clinic" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Payment & Confirmation</h2>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-medium mb-2">Appointment Summary</h3>
                  <p>Type: {appointmentData.type}</p>
                  {appointmentData.type === "Follow-up" && <p>Doctor: {appointmentData.doctor}</p>}
                  <p>Insurance: {appointmentData.insurance}</p>
                  <p>Department: {appointmentData.department}</p>
                  <p>Date: {appointmentData.date} at {appointmentData.time}</p>
                  <p>Fee: 15,000 RWF</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Payment Method</h4>
                  <div className="space-y-2">
                    {paymentMethods.map((method) => (
                      <label key={method} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          checked={appointmentData.payment === method}
                          onChange={() => setAppointmentData({ ...appointmentData, payment: method })}
                          className="mr-2"
                        />
                        {method}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              Back
            </button>
            <button
              onClick={nextStep}
              disabled={
                (appointmentData.type === "In-Clinic" && (!appointmentData.date || !appointmentData.time)) ||
                (appointmentData.type !== "In-Clinic" && !appointmentData.payment)
              }
              className={`px-6 py-2 rounded-lg transition-colors ${
                ((appointmentData.type === "In-Clinic" && (!appointmentData.date || !appointmentData.time)) ||
                 (appointmentData.type !== "In-Clinic" && !appointmentData.payment))
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-900 hover:bg-green-900/90 text-green-400"
              }`}
            >
              Continue
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 6: In-Clinic Payment & Confirmation */}
      {step === 6 && appointmentData.type === "In-Clinic" && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">Payment & Confirmation</h2>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Appointment Summary</h3>
              <p>Type: {appointmentData.type}</p>
              <p>Hospital: {appointmentData.hospital}</p>
              <p>Insurance: {appointmentData.insurance}</p>
              <p>Department: {appointmentData.department}</p>
              <p>Date: {appointmentData.date} at {appointmentData.time}</p>
              <p>Fee: 15,000 RWF</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Payment Method</h4>
              <div className="space-y-2">
                {paymentMethods.map((method) => (
                  <label key={method} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      checked={appointmentData.payment === method}
                      onChange={() => setAppointmentData({ ...appointmentData, payment: method })}
                      className="mr-2"
                    />
                    {method}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              Back
            </button>
            <button
              onClick={nextStep}
              disabled={!appointmentData.payment}
              className={`px-6 py-2 rounded-lg transition-colors ${
                !appointmentData.payment
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-900 hover:bg-green-900/90 text-green-400"
              }`}
            >
              Confirm & Pay
            </button>
          </div>
        </HealthCard>
      )}

      {/* Final Step: Confirmation */}
      {step > 5 && appointmentData.type !== "In-Clinic" && (
        <HealthCard className="p-6 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Appointment Confirmed!</h2>
          <p className="text-muted-foreground mb-4">
            You will receive a confirmation message with your appointment details shortly.
          </p>
          <div className="space-y-2 text-left">
            <p><strong>Type:</strong> {appointmentData.type}</p>
            <p><strong>Date & Time:</strong> {appointmentData.date} at {appointmentData.time}</p>
            <p><strong>Doctor:</strong> {appointmentData.doctor || 'Not specified'}</p>
            <p><strong>Department:</strong> {appointmentData.department || 'Not specified'}</p>
          </div>
        </HealthCard>
      )}
      {step > 6 && appointmentData.type === "In-Clinic" && (
        <HealthCard className="p-6 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Appointment Confirmed!</h2>
          <p className="text-muted-foreground mb-4">
            You will receive a confirmation message with your appointment details shortly.
          </p>
          <div className="space-y-2 text-left">
            <p><strong>Type:</strong> {appointmentData.type}</p>
            <p><strong>Date & Time:</strong> {appointmentData.date} at {appointmentData.time}</p>
            <p><strong>Hospital:</strong> {appointmentData.hospital || 'Not specified'}</p>
            <p><strong>Department:</strong> {appointmentData.department || 'Not specified'}</p>
          </div>
        </HealthCard>
      )}
    </div>
  );
}
