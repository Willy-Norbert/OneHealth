"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Star, 
  Users, 
  Clock, 
  Phone, 
  Mail, 
  Calendar,
  ArrowLeft,
  Shield,
  Award,
  Activity
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function HospitalDetailPage() {
  const { t } = useLanguage();
  const params = useParams();
  const hospitalId = params.id;

  // Mock hospital data - in real app, fetch by ID
  const hospitalData = {
    1: {
      id: 1,
      name: "Kigali University Hospital",
      type: "University Hospital",
      location: "Kigali",
      address: "Kimisagara, Nyarugenge District, Kigali",
      image: "/11.png",
      available: true,
      services: ["Emergency", "Surgery", "ICU", "Outpatient", "Research", "Training", "Radiology", "Laboratory"],
      specialties: ["Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Gynecology", "Internal Medicine"],
      rating: 4.9,
      totalDoctors: 120,
      totalBeds: 400,
      phone: "+250 788 123 456",
      email: "info@kuh.rw",
      operatingHours: "24/7",
      description: "Kigali University Hospital is Rwanda's leading healthcare institution providing comprehensive medical services, medical education, and cutting-edge research. We are committed to delivering exceptional patient care while training the next generation of healthcare professionals.",
      facilities: [
        "24/7 Emergency Department",
        "Advanced ICU Units",
        "Modern Operating Theaters",
        "Digital Radiology Center",
        "Comprehensive Laboratory Services",
        "Pharmacy Services",
        "Ambulance Services",
        "Patient Accommodation"
      ],
      accreditations: [
        "Ministry of Health Certification",
        "WHO International Standards",
        "Joint Commission International",
        "Medical Education Accreditation"
      ],
      achievements: [
        "Best Hospital in Rwanda 2023",
        "Excellence in Medical Education",
        "Research Innovation Award",
        "Patient Safety Recognition"
      ]
    },
    2: {
      id: 2,
      name: "Rwanda Children's Hospital",
      type: "Specialized Hospital",
      location: "Kigali",
      address: "Muhima, Nyarugenge District, Kigali",
      image: "/12.png",
      available: true,
      services: ["Pediatrics", "NICU", "Child Surgery", "Vaccinations", "Emergency Pediatrics", "Child Psychology"],
      specialties: ["Neonatology", "Pediatric Surgery", "Child Cardiology", "Pediatric Oncology", "Child Neurology"],
      rating: 4.8,
      totalDoctors: 85,
      totalBeds: 200,
      phone: "+250 788 234 567",
      email: "info@rch.rw",
      operatingHours: "24/7",
      description: "Rwanda Children's Hospital is dedicated to providing specialized pediatric care with a focus on child-friendly environments and family-centered care. We are the premier destination for children's healthcare in the region.",
      facilities: [
        "Pediatric Emergency Department",
        "Neonatal Intensive Care Unit",
        "Child-Friendly Operating Rooms",
        "Pediatric Radiology",
        "Play Therapy Rooms",
        "Family Accommodation",
        "Pediatric Pharmacy",
        "Child Development Center"
      ],
      accreditations: [
        "Pediatric Care Certification",
        "UNICEF Child-Friendly Hospital",
        "Neonatal Care Excellence",
        "Child Safety Standards"
      ],
      achievements: [
        "Best Children's Hospital 2023",
        "Excellence in Neonatal Care",
        "Child Safety Award",
        "Family-Centered Care Recognition"
      ]
    }
  };

  const hospital = hospitalData[Number(hospitalId) as keyof typeof hospitalData] || hospitalData[1];

  const departments = [
    { name: "Emergency Department", head: "Dr. Jean Mukamana", available: true },
    { name: "Surgery Department", head: "Dr. Paul Nzeyimana", available: true },
    { name: "Internal Medicine", head: "Dr. Marie Uwimana", available: true },
    { name: "Pediatrics", head: "Dr. Eric Ndayisaba", available: false },
    { name: "Radiology", head: "Dr. Grace Uwase", available: true },
    { name: "Laboratory", head: "Dr. David Habimana", available: true },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Jean Mukamana",
      specialty: "Emergency Medicine",
      experience: "15 years",
      rating: 4.9,
      image: "/11.png",
      available: true,
    },
    {
      id: 2,
      name: "Dr. Paul Nzeyimana",
      specialty: "General Surgery",
      experience: "20 years",
      rating: 4.8,
      image: "/12.png",
      available: true,
    },
    {
      id: 3,
      name: "Dr. Marie Uwimana",
      specialty: "Internal Medicine",
      experience: "12 years",
      rating: 4.7,
      image: "/13.png",
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Back Navigation */}
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/hospitals" 
            className="flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("hospital.backToHospitals", "Back to Hospitals")}
          </Link>
        </div>
      </div>

      {/* Hospital Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-6">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src={hospital.image}
                    alt={hospital.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div
                    className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-medium ${
                      hospital.available
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {hospital.available
                      ? t("hospital.available", "Available")
                      : t("hospital.unavailable", "Unavailable")}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {hospital.name}
                  </h1>
                  <p className="text-green-600 dark:text-green-400 font-medium text-lg mb-2">
                    {hospital.type}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <span className="font-medium">{hospital.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-1" />
                      <span>{hospital.totalDoctors} doctors</span>
                    </div>
                    <div className="flex items-center">
                      <Activity className="h-5 w-5 mr-1" />
                      <span>{hospital.totalBeds} beds</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400">
                    {hospital.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                  {t("hospital.contactInfo", "Contact Information")}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-300">{hospital.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-300">{hospital.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-300">{hospital.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-300">{hospital.operatingHours}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Link href={`/appointments/book?hospital=${hospital.id}`}>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      {t("hospital.bookAppointment", "Book Appointment")}
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900">
                    <Phone className="h-4 w-4 mr-2" />
                    {t("hospital.callNow", "Call Now")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Services & Specialties */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t("hospital.servicesSpecialties", "Services & Specialties")}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {t("hospital.services", "Services")}
                  </h3>
                  <div className="space-y-2">
                    {hospital.services.map((service, idx) => (
                      <div key={idx} className="flex items-center">
                        <Shield className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-gray-600 dark:text-gray-300">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {t("hospital.specialties", "Specialties")}
                  </h3>
                  <div className="space-y-2">
                    {hospital.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center">
                        <Award className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-gray-600 dark:text-gray-300">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t("hospital.departments", "Departments")}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {departments.map((dept, idx) => (
                  <div key={idx} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{dept.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        dept.available 
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                          : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      }`}>
                        {dept.available ? t("hospital.available", "Available") : t("hospital.unavailable", "Unavailable")}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {t("hospital.headedBy", "Headed by")}: {dept.head}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Doctors */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t("hospital.ourDoctors", "Our Doctors")}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="relative w-12 h-12">
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{doctor.name}</h3>
                        <p className="text-green-600 dark:text-green-400 text-sm">{doctor.specialty}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>{doctor.experience} experience</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>{doctor.rating}</span>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full mt-3 bg-green-600 hover:bg-green-700"
                      disabled={!doctor.available}
                    >
                      {doctor.available 
                        ? t("hospital.bookWithDoctor", "Book Appointment") 
                        : t("hospital.unavailable", "Unavailable")
                      }
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Link href={`/doctors?hospital=${hospital.id}`}>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900">
                    {t("hospital.viewAllDoctors", "View All Doctors")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {/* Facilities */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {t("hospital.facilities", "Facilities")}
              </h3>
              <div className="space-y-2">
                {hospital.facilities.map((facility, idx) => (
                  <div key={idx} className="flex items-center">
                    <Shield className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accreditations */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {t("hospital.accreditations", "Accreditations")}
              </h3>
              <div className="space-y-2">
                {hospital.accreditations.map((accreditation, idx) => (
                  <div key={idx} className="flex items-center">
                    <Award className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{accreditation}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {t("hospital.achievements", "Achievements")}
              </h3>
              <div className="space-y-2">
                {hospital.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}