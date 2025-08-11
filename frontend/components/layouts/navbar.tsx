
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, LogOut } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { useState } from "react"
import { useLanguage } from '@/contexts/LanguageContext';
import UserDropdown from "../header/UserDropdown"
import { ThemeToggleButton } from "../common/ThemeToggleButton"
import LanguageSwitcher from "../LanguageSwitcher"

export default function Navbar() {
  const { user, logout, isAuthenticated, loading } = useAuth()
  const { t } = useLanguage();
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
            <img src="/irabaruta-logo.png" alt="irabaruta logo" width={80} height={80} />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 hover:text-green-600 font-medium">
              {t('nav.home')}
            </Link>
            <Link href="/services" className="text-gray-900 hover:text-green-600 font-medium">
              {t('nav.services')}
            </Link>
            <Link href="/departments" className="text-gray-900 hover:text-green-600 font-medium">
              {t('nav.departments')}
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-green-600 font-medium">
              {t('nav.about')}
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-green-600 font-medium">
              {t('nav.contact')}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher variant="header" className="hidden md:block" />
               
            {!loading && (
              <>
                {isAuthenticated ? (
                  <div className="hidden md:flex items-center space-x-2">
                    <UserDropdown />
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      size="sm"
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      {t('nav.logout')}
                    </Button>
                  </div>
                ) : (
                  <Link href="/auth">
                    <Button className="bg-green-600 hover:bg-green-700 hidden md:flex">
                      {t('register.buttons.signIn')}
                    </Button>
                  </Link>
                )}
              </>
            )}
            <ThemeToggleButton />
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
