"use client";

import { useSidebar } from "@/context/SidebarContext";
import {
  Calendar,
  Users as UsersIcon,
  FileText,
  Video,
  Activity,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DoctorSidebar() {
  const { isExpanded, isHovered, isMobileOpen, setIsHovered, toggleMobileSidebar } = useSidebar();
  const pathname = usePathname();
  const { t } = useLanguage();

  const menuItems = [
    { icon: Activity, label: t("doctor1.menu.dashboard"), href: "/doctor" },
    { icon: Calendar, label: t("doctor1.menu.appointments"), href: "/doctor/appointments" },
    { icon: UsersIcon, label: t("doctor1.menu.patients"), href: "/doctor/patients" },
    { icon: Video, label: t("doctor1.menu.teleconsultations"), href: "/doctor/teleconsultations" },
    { icon: FileText, label: t("doctor1.menu.prescriptions"), href: "/doctor/prescriptions" },
    { icon: Settings, label: t("doctor1.menu.settings"), href: "/doctor/settings" },
  ];

  const isVisible = isExpanded || isHovered;

  return (
    <>
      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMobileSidebar} />
          <div className="fixed left-0 top-0 bottom-0 w-[290px] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div
        className={`fixed left-0 top-0 bottom-0 z-40 hidden lg:block transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 ${
          isVisible ? "w-[290px]" : "w-[90px]"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <SidebarContent />
      </div>
    </>
  );

  function SidebarContent() {
    const { user } = useAuth();

    return (
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-brand-500" />
            {isVisible && (
              <div className="ml-3">
                <img 
                  src="/irabaruta-logo.png" 
                  alt="Irabaruta" 
                  className="h-8 w-auto" 
                />
                <p className="text-xs text-muted-foreground">{t("doctor1.header.panel")}</p>
              </div>
            )}
          </div>
        </div>

        {/* User Info */}
        {isVisible && user && (
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-brand-100 dark:bg-brand-500/20 rounded-full flex items-center justify-center">
                <span className="text-brand-500 font-medium">{user.name?.charAt(0)}</span>
              </div>
              <div className="ml-3">
                <p className="font-medium text-sm text-gray-800 dark:text-white">{user.name}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{t("doctor1.user.role")}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-brand-500 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {isVisible && <span className="ml-3 text-sm">{item.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={() => console.log("Log out logic here")} // TODO: replace with real logout function
            className="flex items-center w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />
            {isVisible && <span className="ml-3 text-sm">{t("nav.logout")}</span>}
          </button>
        </div>
      </div>
    );
  }
}
