"use client";

import { useSidebar } from "@/context/SidebarContext";
import { Calendar, Video, Pill, Heart, Phone, Clock, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const menuItems = [
  { icon: Calendar, label: "Dashboard", href: "/patient" },
  { icon: Calendar, label: "Book Appointment", href: "/patient/appointments" },
  { icon: Video, label: "Teleconsultation", href: "/patient/teleconsultation" },
  { icon: Pill, label: "Pharmacy Orders", href: "/patient/pharmacy" },
  { icon: Heart, label: "AI Assistant", href: "/patient/ai-assistant" },
  { icon: Phone, label: "Emergency", href: "/patient/emergency" },
  { icon: Clock, label: "Medical History", href: "/patient/history" },
];

export default function PatientSidebar() {
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
          <div className="fixed left-0 top-0 bottom-0 w-[290px] bg-card border-r border-border">
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div
        className={`fixed left-0 top-0 bottom-0 z-40 hidden lg:block transition-all duration-300 ease-in-out bg-card border-r border-border ${
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
        <div className="p-6 border-b border-border">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-healthcare-primary" />
            {isVisible && (
              <div className="ml-3">
                <h2 className="text-lg font-bold text-healthcare-primary">HealthLine</h2>
                <p className="text-xs text-muted-foreground">Patient Portal</p>
              </div>
            )}
          </div>
        </div>

        {/* User Info */}
        {isVisible && user && (
          <div className="p-4 border-b border-border">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-healthcare-primary/20 rounded-full flex items-center justify-center">
                <span className="text-healthcare-primary font-medium">
                  {user.name.charAt(0)}
                </span>
              </div>
              <div className="ml-3">
                <p className="font-medium text-sm">{user.name}</p>
                <p className="text-xs text-muted-foreground">Patient</p>
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
                        ? "bg-healthcare-primary text-white"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
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
        <div className="p-4 border-t border-border">
          <button
            onClick={logout}
            className="flex items-center w-full px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />
            {isVisible && <span className="ml-3 text-sm">Logout</span>}
          </button>
        </div>
      </div>
    );
  }
}