"use client";

import { useSidebar } from "@/context/SidebarContext";
import { Users, Calendar, FileText, Settings, BarChart3, Shield, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";


export default function AdminSidebar() {
  const { isExpanded, isHovered, isMobileOpen, setIsHovered, toggleMobileSidebar } = useSidebar();
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { t } = useLanguage();

  const menuItems = [
    { icon: BarChart3, label: t("admin.menu.dashboard"), href: "/admin" },
    { icon: Users, label: t("admin.menu.userManagement"), href: "/admin/users" },
    { icon: Calendar, label: t("admin.menu.appointments"), href: "/admin/appointments" },
    { icon: FileText, label: t("admin.menu.reports"), href: "/admin/reports" },
    { icon: Shield, label: t("admin.menu.security"), href: "/admin/security" },
    { icon: Settings, label: t("admin.menu.settings"), href: "/admin/settings" },
  ];
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
            <Link href="/" className="lg:hidden">
            <Image
              width={154}
              height={32}
              className="dark:hidden"
              src="/logo.png"
              alt="Logo"
            />
            <Image
              width={154}
              height={32}
              className="hidden dark:block"
              src="/logo.png"
              alt="Logo"
            />
          </Link>
            {isVisible && (
              <div className="ml-3">
                <img 
                  src="/irabaruta-logo.png" 
                  alt="Irabaruta" 
                  className="h-8 w-auto" 
                />
                <p className="text-xs text-muted-foreground">{t("admin.header.panel")}</p>
              </div>
            )}
          </div>
        </div>

        {/* User Info */}
        {isVisible && user && (
          <div className="p-4 border-b border-border">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-medium">
                  {user.name.charAt(0)}
                </span>
              </div>
              <div className="ml-3">
                <p className="font-medium text-sm">{user.name}</p>
                <p className="text-xs text-muted-foreground">Administrator</p>
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
                        ? "bg-primary text-primary-foreground"
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
            {isVisible && <span className="ml-3 text-sm">{t("nav.logout")}</span>}
          </button>
        </div>
      </div>
    );
  }
}