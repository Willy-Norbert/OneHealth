import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react"
import { JSX } from "react";

export default function ContactInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-600">
            Reach out to us through any of the following channels for assistance with our healthcare services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ContactCard
            icon={<MapPin className="h-6 w-6 text-white" />}
            title="Our Location"
            details={["KG 123 St, Kigali", "Rwanda"]}
            color="bg-blue-600"
          />

          <ContactCard
            icon={<Phone className="h-6 w-6 text-white" />}
            title="Phone Numbers"
            details={["+250 788 123 456", "Emergency: +250 788 999 911"]}
            color="bg-green-600"
          />

          <ContactCard
            icon={<Mail className="h-6 w-6 text-white" />}
            title="Email Addresses"
            details={["info@healthlinerwanda.com", "support@healthlinerwanda.com"]}
            color="bg-purple-600"
          />

          <ContactCard
            icon={<Clock className="h-6 w-6 text-white" />}
            title="Working Hours"
            details={["Mon-Fri: 8:00 AM - 8:00 PM", "Sat-Sun: 9:00 AM - 5:00 PM"]}
            color="bg-amber-600"
            footer="* Emergency services available 24/7"
          />
        </div>

        <div className="max-w-3xl mx-auto mt-12 bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-start">
            <div className="bg-red-100 p-2 rounded-lg mr-4">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Emergency Contact</h3>
              <p className="text-gray-700 mb-2">
                For medical emergencies, please call our 24/7 emergency hotline or use the Emergency Assistance feature
                in the ONE HEALTHLINE CONNECT app.
              </p>
              <p className="text-red-600 font-bold">Emergency Hotline: +250 788 999 911</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, title, details, color, footer = null }: { icon: JSX.Element; title: string; details: string[]; color: string; footer?: string | null }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
      <div className={`${color} p-6 flex items-center`}>
        <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">{icon}</div>
        <h3 className="text-xl font-bold text-white ml-4">{title}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="text-gray-700">
              {detail}
            </li>
          ))}
        </ul>
        {footer && <p className="text-sm text-gray-500 mt-4">{footer}</p>}
      </div>
    </div>
  )
}
