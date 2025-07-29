"use client"

import { Button } from "@/components/ui/button"
import { WifiOff, RefreshCw } from "lucide-react"

export default function Offline() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <WifiOff className="h-12 w-12 text-gray-500" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">You&apos;re offline</h1>

        <p className="text-gray-600 mb-8">
          It seems you&apos;ve lost your internet connection. Please check your connection and try again.
        </p>

        <div className="flex justify-center">
          <Button onClick={() => window.location.reload()} className="bg-green-600 hover:bg-green-700 gap-2">
            <RefreshCw className="h-4 w-4" />
            Retry
          </Button>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">While you&apos;re offline, you can:</h2>
          <ul className="space-y-3 text-left text-gray-600">
            <li className="flex items-start">
              <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-0.5">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Review your previously loaded health information
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-0.5">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Access cached emergency information
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-0.5">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              View your saved appointments
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
