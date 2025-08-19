
import MedicalRecords from "@/components/teleconsultation/medical-records"
import Navbar from "@/components/layouts/navbar"
import Footer from "@/components/layouts/footer"

export default function MedicalRecordsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-12">
        <MedicalRecords />
      </div>
      <Footer />
    </main>
  )
}
