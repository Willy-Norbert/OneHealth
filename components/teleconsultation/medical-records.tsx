
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FileText, Calendar, User, Hospital, Pill, Clock } from "lucide-react"

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

interface MedicalRecord {
  _id: string
  hospital: {
    name: string
    location: string
  }
  consultationType: {
    name: string
    category: string
    speciality?: string
  }
  consultation: {
    status: string
    doctorNotes?: string
    diagnosis?: string
    prescription?: string
    referral?: string
  }
  createdAt: string
  updatedAt: string
}

export default function MedicalRecords() {
  const [records, setRecords] = useState<MedicalRecord[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMedicalRecords()
  }, [])

  const fetchMedicalRecords = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${API_URL}/teleconsultation/my-consultations`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setRecords(data.data.teleconsultations || [])
      } else {
        console.error('Failed to fetch medical records')
      }
    } catch (error) {
      console.error('Error fetching medical records:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800'
      case 'In Progress': return 'bg-blue-100 text-blue-800'
      case 'Scheduled': return 'bg-yellow-100 text-yellow-800'
      case 'Cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
          <FileText className="mr-2 h-6 w-6 text-blue-600" />
          My Medical Records
        </h1>
        <p className="text-gray-600 mt-2">
          View your complete consultation history and medical records
        </p>
      </div>

      {records.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Medical Records</h3>
            <p className="text-gray-600">
              You haven't had any consultations yet. Book your first teleconsultation to start building your medical history.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {records.map((record) => (
            <Card key={record._id} className="overflow-hidden">
              <CardHeader className="bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">
                      {record.consultationType.name}
                    </CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Hospital className="mr-1 h-4 w-4" />
                      {record.hospital.name}
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(record.consultation.status)}>
                    {record.consultation.status}
                  </Badge>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mt-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  {new Date(record.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <User className="mr-2 h-4 w-4 text-blue-600" />
                      Consultation Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">Type:</span> {record.consultationType.category}
                        {record.consultationType.speciality && (
                          <span> - {record.consultationType.speciality}</span>
                        )}
                      </div>
                      <div>
                        <span className="font-medium">Hospital:</span> {record.hospital.name}
                      </div>
                      <div>
                        <span className="font-medium">Location:</span> {record.hospital.location}
                      </div>
                    </div>
                  </div>

                  {record.consultation.status === 'Completed' && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-green-600" />
                        Medical Information
                      </h4>
                      <div className="space-y-3 text-sm">
                        {record.consultation.diagnosis && (
                          <div>
                            <span className="font-medium text-gray-700">Diagnosis:</span>
                            <p className="mt-1 text-gray-600">{record.consultation.diagnosis}</p>
                          </div>
                        )}
                        
                        {record.consultation.prescription && (
                          <div>
                            <span className="font-medium text-gray-700 flex items-center">
                              <Pill className="mr-1 h-4 w-4" />
                              Prescription:
                            </span>
                            <p className="mt-1 text-gray-600">{record.consultation.prescription}</p>
                          </div>
                        )}
                        
                        {record.consultation.doctorNotes && (
                          <div>
                            <span className="font-medium text-gray-700">Doctor's Notes:</span>
                            <p className="mt-1 text-gray-600">{record.consultation.doctorNotes}</p>
                          </div>
                        )}
                        
                        {record.consultation.referral && (
                          <div>
                            <span className="font-medium text-gray-700">Referral:</span>
                            <p className="mt-1 text-gray-600">{record.consultation.referral}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {record.consultation.status === 'Scheduled' && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-blue-600" />
                      <span className="text-blue-800 font-medium">Upcoming Consultation</span>
                    </div>
                    <p className="text-blue-700 text-sm mt-1">
                      Your consultation is scheduled. You will receive SMS notification with joining details.
                    </p>
                  </div>
                )}

                <Separator className="my-4" />
                
                <div className="text-xs text-gray-500">
                  Record ID: {record._id} • Last updated: {new Date(record.updatedAt).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
