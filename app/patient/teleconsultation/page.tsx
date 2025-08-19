"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import ProgressIndicator from "@/components/dashboard/ProgressIndicator";
import { 
  Video, 
  Calendar, 
  Clock, 
  User, 
  FileText, 
  CreditCard,
  CheckCircle,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

export default function TeleconsultationPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    specialty: '',
    doctor: '',
    date: '',
    time: '',
    symptoms: '',
    urgency: 'routine',
    paymentMethod: ''
  });

  const steps = [
    'Doctor Selection',
    'Appointment Details', 
    'Medical Information',
    'Payment & Confirmation'
  ];

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

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step: number) => {
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-medium mb-4 block">Select Specialty</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specialties.map((specialty) => (
                  <Card 
                    key={specialty.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      formData.specialty === specialty.id ? 'ring-2 ring-primary bg-primary/5' : ''
                    }`}
                    onClick={() => setFormData({...formData, specialty: specialty.id})}
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
                      formData.doctor === doctor.id ? 'ring-2 ring-primary bg-primary/5' : ''
                    }`}
                    onClick={() => setFormData({...formData, doctor: doctor.id})}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <User className="w-6 h-6 text-primary" />
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
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="date">Preferred Date</Label>
                <Input 
                  type="date" 
                  id="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="time">Preferred Time</Label>
                <Input 
                  type="time" 
                  id="time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="mt-2"
                />
              </div>
            </div>
            
            <div>
              <Label className="text-base font-medium mb-4 block">Urgency Level</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'routine', name: 'Routine', desc: 'Within next week' },
                  { id: 'urgent', name: 'Urgent', desc: 'Within 24 hours' },
                  { id: 'emergency', name: 'Emergency', desc: 'Immediate attention' }
                ].map((urgency) => (
                  <Card 
                    key={urgency.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      formData.urgency === urgency.id ? 'ring-2 ring-primary bg-primary/5' : ''
                    }`}
                    onClick={() => setFormData({...formData, urgency: urgency.id})}
                  >
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">{urgency.name}</h3>
                      <p className="text-sm text-muted-foreground">{urgency.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="symptoms">Describe your symptoms</Label>
              <Textarea 
                id="symptoms"
                placeholder="Please describe your symptoms, concerns, or reason for consultation..."
                value={formData.symptoms}
                onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
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
                    <Button variant="outline" size="sm">
                      Upload Files
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Consultation Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Doctor</Label>
                    <p className="font-medium">Dr. Sarah Johnson</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Specialty</Label>
                    <p className="font-medium">General Medicine</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Date & Time</Label>
                    <p className="font-medium">{formData.date} at {formData.time}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Consultation Fee</Label>
                    <p className="font-medium">$75.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <Label className="text-base font-medium mb-4 block">Payment Method</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
                  { id: 'insurance', name: 'Insurance', icon: FileText }
                ].map((payment) => (
                  <Card 
                    key={payment.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      formData.paymentMethod === payment.id ? 'ring-2 ring-primary bg-primary/5' : ''
                    }`}
                    onClick={() => setFormData({...formData, paymentMethod: payment.id})}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <payment.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium">{payment.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        
        <div className="flex items-center gap-4 mb-2">
          <Video className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Book Teleconsultation</h1>
        </div>
        <p className="text-muted-foreground">Connect with healthcare professionals from anywhere</p>
      </div>

      <ProgressIndicator 
        steps={steps} 
        currentStep={currentStep}
        onStepClick={handleStepClick}
      />

      <Card>
        <CardContent className="p-6">
          {renderStepContent()}
        </CardContent>
      </Card>

      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        
        <Button 
          onClick={currentStep === steps.length ? () => router.push('/patient/appointments') : handleNext}
          disabled={
            (currentStep === 1 && (!formData.specialty || !formData.doctor)) ||
            (currentStep === 2 && (!formData.date || !formData.time)) ||
            (currentStep === 3 && !formData.symptoms) ||
            (currentStep === 4 && !formData.paymentMethod)
          }
        >
          {currentStep === steps.length ? 'Book Consultation' : 'Next'}
          {currentStep !== steps.length && <ArrowRight className="w-4 h-4 ml-2" />}
        </Button>
      </div>
    </div>
  );
}