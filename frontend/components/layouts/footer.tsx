import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HeartPulse,  ArrowRight } from "lucide-react"
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6"


export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <HeartPulse className="h-8 w-8 text-green-500" />
              <span className="font-bold text-xl">
                HEALTHLINE <span className="text-green-500">RWANDA</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming healthcare access in Rwanda through innovative digital solutions. Our mission is to make
              quality healthcare accessible to all Rwandans.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-green-600 transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-green-600 transition-colors p-2 rounded-full"
                aria-label="Twitter"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-green-600 transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-green-600 transition-colors p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-green-500 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-gray-400 hover:text-green-500 transition-colors">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-gray-400 hover:text-green-500 transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-green-500 transition-colors">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/teleconsultation" className="text-gray-400 hover:text-green-500 transition-colors">
                  Teleconsultation
                </Link>
              </li>
              <li>
                <Link href="/services/appointments" className="text-gray-400 hover:text-green-500 transition-colors">
                  Appointment Booking
                </Link>
              </li>
              <li>
                <Link href="/services/emergency" className="text-gray-400 hover:text-green-500 transition-colors">
                  Emergency Services
                </Link>
              </li>
              <li>
                <Link href="/services/pharmacy" className="text-gray-400 hover:text-green-500 transition-colors">
                  Medication Ordering
                </Link>
              </li>
              <li>
                <Link href="/services/ai-assistant" className="text-gray-400 hover:text-green-500 transition-colors">
                  AI Health Assistant
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-400 hover:text-green-500 transition-colors">
                  Medical Departments
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for health tips, updates on our services, and special offers.
            </p>
            <div className="flex mb-4">
              <Input
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white rounded-r-none focus-visible:ring-green-500"
              />
              <Button className="bg-green-600 hover:bg-green-700 rounded-l-none">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-gray-500 text-sm">
              By subscribing, you agree to our{" "}
              <Link href="/privacy-policy" className="text-green-500 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <hr className="border-gray-800 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {currentYear} ONE HEALTHLINE CONNECT. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms-of-service" className="text-gray-500 hover:text-green-500 text-sm">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-gray-500 hover:text-green-500 text-sm">
              Privacy Policy
            </Link>
            <Link href="/faq" className="text-gray-500 hover:text-green-500 text-sm">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
