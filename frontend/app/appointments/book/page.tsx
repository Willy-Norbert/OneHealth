import AppointmentBooking from "@/components/appointments/appointment-booking"
import Navbar from "@/components/layouts/navbar"
import Footer from "@/components/layouts/footer"

export default function BookAppointmentPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Book an Appointment</h1>
            <p className="text-gray-600">Schedule your healthcare appointment in a few simple steps</p>
          </div>
          <AppointmentBooking />
        </div>
      </div>
      <Footer />
    </main>
  )
}