import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help you with any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={20}  className="md:min-h-60"/>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <div className="bg-blue-600 text-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500/30 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="text-white/80 mt-1">KG 123 St, Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500/30 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone Number</h4>
                    <p className="text-white/80 mt-1">+250 788 123 456</p>
                    <p className="text-white/80">Emergency: +250 788 999 911</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500/30 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Address</h4>
                    <p className="text-white/80 mt-1">info@healthlinerwanda.com</p>
                    {/* <p className="text-white/80">support@healthlinerwanda.com</p> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-600 text-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start">
                <div className="bg-green-500/30 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Working Hours</h4>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="pt-2 text-white/80">
                      <p>* Emergency services available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
