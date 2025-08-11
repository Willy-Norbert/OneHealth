
"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import Navbar from "@/components/layouts/navbar"
import Footer from "@/components/layouts/footer"
import LoginForm from "@/components/auth/login-form"
import RegisterForm from "@/components/auth/register-form"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const { isAuthenticated, loading, user } = useAuth()
  const { t } = useLanguage()
  const router = useRouter()

  useEffect(() => {
    if (!loading && isAuthenticated) {
      // Navigation is now handled in login/register functions based on role
      const userRole = user?.role
      if (userRole === 'admin') {
        router.push('/admin')
      } else if (userRole === 'doctor') {
        router.push('/doctor')
      } else if (userRole === 'patient') {
        router.push('/patient')
      } else {
        router.push('/')
      }
    }
  }, [isAuthenticated, loading, router, user])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4 py-12">
        <div className="w-full max-w-md">
          {isLogin ? (
            <LoginForm onToggleForm={() => setIsLogin(false)} />
          ) : (
            <RegisterForm onToggleForm={() => setIsLogin(true)} />
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
