"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/layout/AppHeader";
import PatientSidebar from "@/components/sidebars/PatientSidebar";
import Backdrop from "@/layout/Backdrop";

function PatientLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const { t } = useLanguage();

  useEffect(() => {
    if (!isLoading && (!user || user.role !== "patient")) {
      router.push("/auth/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">{t("common.loading")}</div>;
  }

  if (!user || user.role !== "patient") {
    return null;
  }

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  return (
    <div className="min-h-screen xl:flex">
      <PatientSidebar />
      <Backdrop />
      <div className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}>
        <AppHeader />
        <div className="p-4 mx-auto max-w-7xl md:p-6">{children}</div>
      </div>
    </div>
  );
}

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <PatientLayoutContent>{children}</PatientLayoutContent>
    </SidebarProvider>
  );
}