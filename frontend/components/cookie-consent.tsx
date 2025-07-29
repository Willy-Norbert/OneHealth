"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all")
    setIsVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential")
    setIsVisible(false)
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6 animate-slide-up">
      <div className="container mx-auto">
        <div className="flex justify-between items-start">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookie Consent</h3>
            <p className="text-gray-600 text-sm mb-4">
              We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of
              cookies.
            </p>

            {showDetails && (
              <div className="mb-4 text-sm bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium text-gray-900 mb-2">Cookie Types</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>
                    <span className="font-medium">Essential:</span> Required for basic website functionality
                  </li>
                  <li>
                    <span className="font-medium">Analytics:</span> Help us understand how you use our website
                  </li>
                  <li>
                    <span className="font-medium">Marketing:</span> Allow us to provide personalized content
                  </li>
                  <li>
                    <span className="font-medium">Preferences:</span> Remember your settings and choices
                  </li>
                </ul>
                <p className="mt-3">
                  For more information, please read our{" "}
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <Button onClick={acceptAll} className="bg-green-600 hover:bg-green-700 text-white">
                Accept All
              </Button>
              <Button
                onClick={acceptEssential}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Essential Only
              </Button>
              <Button
                onClick={toggleDetails}
                variant="ghost"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {showDetails ? "Hide Details" : "Cookie Settings"}
              </Button>
            </div>
          </div>
          <button
            onClick={acceptEssential}
            className="text-gray-400 hover:text-gray-600 p-1"
            aria-label="Close cookie consent banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
