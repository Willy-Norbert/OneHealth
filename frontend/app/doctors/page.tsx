import Navbar from "@/components/layouts/navbar"
import Footer from "@/components/layouts/footer"
import DoctorsHero from "@/components/doctors/doctors-hero"
import DoctorsSearch from "@/components/doctors/doctors-search"
import FeaturedDoctors from "@/components/doctors/featured-doctors"
import DoctorsList from "@/components/doctors/doctors-list"
import DoctorSpecialties from "@/components/doctors/doctor-specialties"
import DoctorTestimonials from "@/components/doctors/doctor-testimonials"
import DoctorsFaq from "@/components/doctors/doctors-faq"
import DoctorsCta from "@/components/doctors/doctors-cta"

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <DoctorsHero />
      <DoctorsSearch />
      <FeaturedDoctors />
      <DoctorsList />
      <DoctorSpecialties />
      <DoctorTestimonials />
      <DoctorsFaq />
      <DoctorsCta />
      <Footer />
    </main>
  )
}
