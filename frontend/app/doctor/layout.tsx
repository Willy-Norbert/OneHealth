"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/layout/AppHeader";
import DoctorSidebar from "@/components/sidebars/DoctorSidebar";
import Backdrop from "@/layout/Backdrop";

function DoctorLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const { t } = useLanguage();

  useEffect(() => {
    if (!isLoading && (!user || user.role !== "doctor")) {
      router.push("/auth/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">{t("common.loading")}</div>;
  }

  if (!user || user.role !== "doctor") {
    return null;
  }

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  return (
    <div className="min-h-screen xl:flex">
      <DoctorSidebar />
      <Backdrop />
      <div className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}>
        <AppHeader />
        <div className="p-4 mx-auto max-w-7xl md:p-6">{children}</div>
      </div>
    </div>
  );
}

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DoctorLayoutContent>{children}</DoctorLayoutContent>
    </SidebarProvider>
  );
}