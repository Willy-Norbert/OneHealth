
"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/irabaruta-logo.png" alt="logo" width={120} height={60} />
            </Link>
            <p className="text-gray-300">
              {t('footer.description') || "Your trusted healthcare partner providing quality medical services across Rwanda."}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.departments')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/teleconsultation" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.teleconsultation')}
                </Link>
              </li>
              <li>
                <Link href="/services/appointments" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.appointments')}
                </Link>
              </li>
              <li>
                <Link href="/services/emergency" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.emergency')}
                </Link>
              </li>
              <li>
                <Link href="/services/pharmacy" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.pharmacy')}
                </Link>
              </li>
              <li>
                <Link href="/services/ai-assistant" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.aiAssistant')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.support')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.termsOfService')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
