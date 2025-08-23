import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/AuthContext"
import CookieConsent from "@/components/cookie-consent"
import BackToTop from "@/components/back-to-top"
import { ThemeProvider } from "next-themes"

// Import LanguageProvider
import { LanguageProvider } from "@/contexts/LanguageContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ONE HEALTHLINE CONNECT - Your Healthcare Partner",
  description:
    "Access healthcare services virtually including teleconsultation, appointment booking, emergency services, medication ordering, and AI health monitoring.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} 
          bg-gray-50 text-gray-800 
        suppressHydrationWarning
          dark:bg-gray-900 dark:text-gray-100
          transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Wrap the whole app in LanguageProvider */}
          <LanguageProvider>
            <AuthProvider>
              {children}
              <CookieConsent />
              <BackToTop />
            </AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
