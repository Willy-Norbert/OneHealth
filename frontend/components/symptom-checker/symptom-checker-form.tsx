/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { ChevronRight, ChevronLeft, User, Clock } from "lucide-react"
import BodySelector from "./body-selector"
import SymptomResults from "./symptom-results"

export default function SymptomCheckerForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<{
    age: number
    gender: string
    mainSymptom: string
    bodyPart: string
    duration: string
    severity: number
    additionalSymptoms: string[]
    medicalHistory: string
    medications: string
  }>({
    age: 0,
    gender: "",
    mainSymptom: "",
    bodyPart: "",
    duration: "",
    severity: 5,
    additionalSymptoms: [],
    medicalHistory: "",
    medications: "",
  })

  const [showResults, setShowResults] = useState(false)

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? parseInt(value, 10) || 0 : value,
    }))
  }

  const handleSliderChange = (value: any[]) => {
    setFormData((prev) => ({ ...prev, severity: value[0] }))
  }

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleReset = () => {
    setFormData({
      age: 0,
      gender: "",
      mainSymptom: "",
      bodyPart: "",
      duration: "",
      severity: 5,
      additionalSymptoms: [],
      medicalHistory: "",
      medications: "",
    })
    setStep(1)
    setShowResults(false)
  }

  if (showResults) {
    return <SymptomResults formData={formData} onReset={handleReset} />
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <div className="mb-4 flex justify-between">
              {[1, 2, 3, 4, 5].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    stepNumber === step
                      ? "bg-blue-600 text-white"
                      : stepNumber < step
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {stepNumber < step ? "✓" : stepNumber}
                </div>
              ))}
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-blue-600 transition-all duration-300"
                style={{ width: `${(step - 1) * 25}%` }}
              ></div>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              {step === 1 && (
                <div>
                  <h3 className="mb-6 text-2xl font-bold">Basic Information</h3>

                  <div className="mb-6">
                    <Label htmlFor="age" className="mb-2 block">
                      Age
                    </Label>
                    <div className="flex items-center">
                      <User className="mr-2 h-5 w-5 text-gray-500" />
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="max-w-[200px]"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label className="mb-2 block">Gender</Label>
                    <RadioGroup
                      name="gender"
                      value={formData.gender}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, gender: value }))}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="mb-6 text-2xl font-bold">Primary Symptom</h3>

                  <div className="mb-6">
                    <Label htmlFor="mainSymptom" className="mb-2 block">
                      What&apos;s your main symptom?
                    </Label>
                    <Input
                      id="mainSymptom"
                      name="mainSymptom"
                      placeholder="e.g., Headache, Fever, Cough"
                      value={formData.mainSymptom}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-6">
                    <Label className="mb-4 block">Where is this symptom located?</Label>
                    <BodySelector
                      selectedPart={formData.bodyPart}
                      onSelectPart={(part) => setFormData((prev) => ({ ...prev, bodyPart: part }))}
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="mb-6 text-2xl font-bold">Symptom Details</h3>

                  <div className="mb-6">
                    <Label htmlFor="duration" className="mb-2 block">
                      How long have you had this symptom?
                    </Label>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-gray-500" />
                      <Input
                        id="duration"
                        name="duration"
                        placeholder="e.g., 2 days, 1 week"
                        value={formData.duration}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label className="mb-2 block">How severe is this symptom? (1-10)</Label>
                    <div className="flex items-center">
                      <span className="mr-4 text-sm text-gray-500">Mild</span>
                      <Slider
                        defaultValue={[5]}
                        max={10}
                        min={1}
                        step={1}
                        value={[formData.severity]}
                        onValueChange={handleSliderChange}
                        className="mx-4 w-full"
                      />
                      <span className="ml-4 text-sm text-gray-500">Severe</span>
                    </div>
                    <div className="mt-2 text-center text-2xl font-bold text-blue-600">{formData.severity}</div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 className="mb-6 text-2xl font-bold">Additional Symptoms</h3>

                  <div className="mb-6">
                    <Label className="mb-2 block">Do you have any of these additional symptoms?</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Fever",
                        "Fatigue",
                        "Nausea",
                        "Dizziness",
                        "Shortness of breath",
                        "Chest pain",
                        "Rash",
                        "Sore throat",
                      ].map((symptom) => (
                        <div key={symptom} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={symptom}
                            value={symptom}
                            checked={formData.additionalSymptoms.includes(symptom)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFormData((prev) => ({
                                  ...prev,
                                  additionalSymptoms: [...prev.additionalSymptoms, symptom],
                                }))
                              } else {
                                setFormData((prev) => ({
                                  ...prev,
                                  additionalSymptoms: prev.additionalSymptoms.filter((s) => s !== symptom),
                                }))
                              }
                            }}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <Label htmlFor={symptom}>{symptom}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h3 className="mb-6 text-2xl font-bold">Medical Background</h3>

                  <div className="mb-6">
                    <Label htmlFor="medicalHistory" className="mb-2 block">
                      Do you have any pre-existing medical conditions?
                    </Label>
                    <Textarea
                      id="medicalHistory"
                      name="medicalHistory"
                      placeholder="e.g., Diabetes, Hypertension, Asthma"
                      value={formData.medicalHistory}
                      onChange={handleInputChange}
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="medications" className="mb-2 block">
                      Are you currently taking any medications?
                    </Label>
                    <Textarea
                      id="medications"
                      name="medications"
                      placeholder="List any medications you're currently taking"
                      value={formData.medications}
                      onChange={handleInputChange}
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={handleBack}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                )}
                {step === 1 && <div></div>}

                <Button type="button" onClick={handleNext}>
                  {step < 5 ? "Next" : "Get Results"}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
