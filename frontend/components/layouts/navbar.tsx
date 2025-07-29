
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Globe, User, LogOut } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { useState } from "react"

export default function Navbar() {
  const { user, logout, isAuthenticated, loading } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white border-b border-gray-100 p-3 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="" width={80} height={80} />
            {/* <span className="font-bold text-xl text-gray-900">
              ONE HEALTHLINE <span className="text-green-600">CONNECT</span>
            </span> */}
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-900 hover:text-green-600 font-medium">
              Services
            </Link>
            <Link href="/departments" className="text-gray-900 hover:text-green-600 font-medium">
              Departments
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-green-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-green-600 font-medium">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex items-center border-gray-200">
              <Globe className="mr-2 h-4 w-4 text-blue-600" />
              EN | KIN
            </Button>

            {!loading && (
              <>
                {isAuthenticated ? (
                  <div className="hidden md:flex items-center space-x-2">
                    <div className="flex items-center space-x-2 px-3 py-1 bg-green-50 rounded-md">
                      <User className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">
                        {user?.name}
                      </span>
                    </div>
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      size="sm"
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Link href="/auth">
                    <Button className="bg-green-600 hover:bg-green-700 hidden md:flex">
                      Sign In
                    </Button>
                  </Link>
                )}
              </>
            )}

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
