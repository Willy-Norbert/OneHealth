import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function NotFound() {
  return (
    <>
  
      <main className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center">
          <div className="relative mx-auto w-32 h-32 mb-8">
            <div className="absolute inset-0 bg-green-600 rounded-tl-xl rounded-br-xl opacity-20"></div>
            <div className="absolute inset-4 bg-blue-600 rounded-tr-xl rounded-bl-xl opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-gray-900">404</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>

          <p className="text-gray-600 mb-8">The page you are looking for doesn&apos;t exist or has been moved.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/">Return Home</Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>

          <div className="mt-12">
            <h2 className="text-lg font-medium text-gray-900 mb-4">You might be looking for:</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-blue-600 hover:underline">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-blue-600 hover:underline">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-blue-600 hover:underline">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-blue-600 hover:underline">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
