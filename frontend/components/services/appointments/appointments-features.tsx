import { Check, Calendar, Clock, Users, MapPin, CreditCard, Phone, Laptop } from "lucide-react"

export default function AppointmentsFeatures() {
  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-green-600" />,
      title: "24/7 Booking",
      description: "Schedule appointments any time of day or night, weekends and holidays included.",
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Instant Confirmation",
      description: "Receive immediate confirmation of your appointment with all details.",
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Specialist Selection",
      description: "Choose from over 200 healthcare specialists across multiple disciplines.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: "Multiple Locations",
      description: "Book at any of our partner hospitals and clinics throughout Rwanda.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-green-600" />,
      title: "Secure Payment",
      description: "Pay for your appointment securely online with multiple payment options.",
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "SMS Reminders",
      description: "Receive timely SMS reminders before your scheduled appointment.",
    },
    {
      icon: <Laptop className="h-6 w-6 text-green-600" />,
      title: "Virtual Options",
      description: "Choose between in-person or virtual consultations based on your needs.",
    },
    {
      icon: <Check className="h-6 w-6 text-green-600" />,
      title: "Easy Rescheduling",
      description: "Reschedule or cancel appointments with just a few clicks when needed.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our <span className="text-green-600">Appointment Service</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our appointment booking system is designed to make healthcare access simple, efficient, and convenient for
            all Rwandans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to experience the difference?</h3>
            <p className="text-gray-600">
              Join thousands of satisfied patients who have simplified their healthcare journey.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mr-3 shadow-sm">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">50,000+</p>
                <p className="text-sm text-gray-600">Appointments Booked</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mr-3 shadow-sm">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">98%</p>
                <p className="text-sm text-gray-600">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
