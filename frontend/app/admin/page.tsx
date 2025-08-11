"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { t } = useLanguage();

  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">{t("admin.dashboard.title")}</h1>
          <p className="text-muted-foreground mt-2">
            {t("admin.dashboard.welcome", { name: user.name })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-2">{t("admin.dashboard.cards.users.title")}</h3>
            <p className="text-muted-foreground mb-4">{t("admin.dashboard.cards.users.desc")}</p>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              {t("admin.dashboard.cards.users.action")}
            </button>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-2">{t("admin.dashboard.cards.settings.title")}</h3>
            <p className="text-muted-foreground mb-4">{t("admin.dashboard.cards.settings.desc")}</p>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              {t("admin.dashboard.cards.settings.action")}
            </button>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-2">{t("admin.dashboard.cards.reports.title")}</h3>
            <p className="text-muted-foreground mb-4">{t("admin.dashboard.cards.reports.desc")}</p>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              {t("admin.dashboard.cards.reports.action")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}