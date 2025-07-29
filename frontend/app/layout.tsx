import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/AuthContext"
import CookieConsent from "@/components/cookie-consent"
import BackToTop from "@/components/back-to-top"

// 👇 Add this import
import { ThemeProvider } from "next-themes"

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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="container">
            <AuthProvider>
              {children}
              <CookieConsent />
              <BackToTop />
            </AuthProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
