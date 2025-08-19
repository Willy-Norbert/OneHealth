"use client";
import { Video, Clock, User } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DoctorTeleconsultations() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">{t("teleconsultations1.title")}</h1>
        <p className="text-muted-foreground">{t("teleconsultations1.subtitle")}</p>
      </div>

      <HealthCard className="p-6">
        <h2 className="text-xl font-semibold mb-4">{t("teleconsultations1.virtualConsultations")}</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Video className="w-5 h-5 text-healthcare-primary mr-3" />
                <div>
                  <p className="font-medium">Jane Smith - Mental Health</p>
                  <p className="text-sm text-muted-foreground">
                    {t("teleconsultations1.scheduled")}: 10:30 AM
                  </p>
                </div>
              </div>
              <button className="bg-healthcare-primary text-black px-4 py-2 rounded-lg">
                {t("teleconsultations1.startCall")}
              </button>
            </div>
          </div>
        </div>
      </HealthCard>
    </div>
  );
}
