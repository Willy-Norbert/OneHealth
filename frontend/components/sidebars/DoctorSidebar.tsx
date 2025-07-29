"use client";

import { useSidebar } from "@/context/SidebarContext";
import { Calendar, Users, FileText, Video, Activity, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const menuItems = [
  { icon: Activity, label: "Dashboard", href: "/doctor" },
  { icon: Calendar, label: "Appointments", href: "/doctor/appointments" },
  { icon: Users, label: "Patients", href: "/doctor/patients" },
  { icon: Video, label: "Teleconsultations", href: "/doctor/teleconsultations" },
  { icon: FileText, label: "Prescriptions", href: "/doctor/prescriptions" },
  { icon: Settings, label: "Settings", href: "/doctor/settings" },
];

export default function DoctorSidebar() {
  const { isExpanded, isHovered, isMobileOpen, setIsHovered, toggleMobileSidebar } = useSidebar();
  const pathname = usePathname();
  const { user, logout } = useAuth();

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
    return (
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-brand-500" />
            {isVisible && (
              <div className="ml-3">
                <h2 className="text-lg font-bold text-brand-500">HealthLine</h2>
                <p className="text-xs text-gray-600 dark:text-gray-400">Doctor Portal</p>
              </div>
            )}
          </div>
        </div>

        {/* User Info */}
        {isVisible && user && (
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-brand-100 dark:bg-brand-500/20 rounded-full flex items-center justify-center">
                <span className="text-brand-500 font-medium">
                  {user.name.charAt(0)}
                </span>
              </div>
              <div className="ml-3">
                <p className="font-medium text-sm text-gray-800 dark:text-white">{user.name}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Doctor</p>
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
            onClick={logout}
            className="flex items-center w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />
            {isVisible && <span className="ml-3 text-sm">Logout</span>}
          </button>
        </div>
      </div>
    );
  }
}