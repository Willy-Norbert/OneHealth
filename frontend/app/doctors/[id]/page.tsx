
import DoctorProfile from "@/components/doctor-profile/doctor-profile"
import DoctorExpertise from "@/components/doctor-profile/doctor-expertise"
import DoctorEducation from "@/components/doctor-profile/doctor-education"
import DoctorExperience from "@/components/doctor-profile/doctor-experience"
import DoctorAvailability from "@/components/doctor-profile/doctor-availability"
import DoctorReviews from "@/components/doctor-profile/doctor-reviews"
import DoctorLocation from "@/components/doctor-profile/doctor-location"
import SimilarDoctors from "@/components/doctor-profile/similar-doctors"
import DoctorCta from "@/components/doctor-profile/doctor-cta"
import DefaultLayout from "@/components/layouts/DefaultLayout"

// This would normally come from a database
import { getDoctorData } from "@/lib/doctor-data"

interface PageProps {
  params: Promise<{ id: string }>
}

async function getDoctorFromParams(params: Promise<{ id: string }>) {
  const { id } = await params
  const doctor = await getDoctorData(id)
  return doctor
}

export default async function DoctorProfilePage({ params }: PageProps) {
  const doctor = await getDoctorFromParams(params)

  if (!doctor) {
    return (
      <DefaultLayout>
      <main className="min-h-screen bg-white">
       
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Doctor Not Found</h1>
          <p className="text-gray-600">The doctor you are looking for does not exist or has been removed.</p>
        </div>
      </main>
      </DefaultLayout>
    )
  }

  return (
    <DefaultLayout>
    <main className="min-h-screen bg-white">
      <DoctorProfile doctor={doctor} />
      <DoctorExpertise doctor={doctor} />
      <DoctorEducation doctor={doctor} />
      <DoctorExperience doctor={doctor} />
      <DoctorAvailability doctor={doctor} />
      <DoctorReviews doctor={doctor} />
      <DoctorLocation doctor={doctor} />
      <SimilarDoctors specialty={doctor.specialty} currentDoctorId={doctor.id} />
      <DoctorCta doctor={doctor} />
     
    </main>
    </DefaultLayout>
  )
}
