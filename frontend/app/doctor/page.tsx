"use client";
import { Calendar, Users, FileText, Clock, Video, Activity } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";
import { useLanguage } from "@/contexts/LanguageContext"; // assumed

export default function DoctorDashboard() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          {t("doctorDashboard.title")}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">{t("doctorDashboard.subtitle")}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <HealthCard className="p-6">
          <div className="flex items-center">
            <Calendar className="h-12 w-12 text-brand-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">12</p>
              <p className="text-gray-600 dark:text-gray-400">
                {t("doctorDashboard.stats.appointmentsToday")}
              </p>
            </div>
          </div>
        </HealthCard>

        <HealthCard className="p-6">
          <div className="flex items-center">
            <Users className="h-12 w-12 text-success-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">87</p>
              <p className="text-gray-600 dark:text-gray-400">{t("doctorDashboard.stats.totalPatients")}</p>
            </div>
          </div>
        </HealthCard>

        <HealthCard className="p-6">
          <div className="flex items-center">
            <Video className="h-12 w-12 text-blue-light-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">5</p>
              <p className="text-gray-600 dark:text-gray-400">{t("doctorDashboard.stats.teleconsultations")}</p>
            </div>
          </div>
        </HealthCard>

        <HealthCard className="p-6">
          <div className="flex items-center">
            <FileText className="h-12 w-12 text-warning-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">23</p>
              <p className="text-gray-600 dark:text-gray-400">{t("doctorDashboard.stats.prescriptions")}</p>
            </div>
          </div>
        </HealthCard>
      </div>

      {/* Today's Schedule */}
      <HealthCard className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          {t("doctorDashboard.todaysSchedule")}
        </h3>
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-brand-50 dark:bg-brand-500/10 rounded-lg border border-brand-200 dark:border-brand-500/20">
            <Clock className="h-5 w-5 text-brand-500 mr-3" />
            <div className="flex-1">
              <p className="font-medium text-gray-800 dark:text-white">09:00 AM - John Doe</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t("doctorDashboard.appointments.generalConsultation")}</p>
            </div>
            <span className="px-2 py-1 bg-success-100 text-success-700 dark:bg-success-500/20 dark:text-success-400 text-xs rounded-full">
              {t("doctorDashboard.status.confirmed")}
            </span>
          </div>

          <div className="flex items-center p-4 bg-blue-light-50 dark:bg-blue-light-500/10 rounded-lg border border-blue-light-200 dark:border-blue-light-500/20">
            <Video className="h-5 w-5 text-blue-light-500 mr-3" />
            <div className="flex-1">
              <p className="font-medium text-gray-800 dark:text-white">10:30 AM - Jane Smith</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t("doctorDashboard.appointments.teleconsultation")}</p>
            </div>
            <span className="px-2 py-1 bg-warning-100 text-warning-700 dark:bg-warning-500/20 dark:text-warning-400 text-xs rounded-full">
              {t("doctorDashboard.status.pending")}
            </span>
          </div>

          <div className="flex items-center p-4 bg-gray-50 dark:bg-white/5 rounded-lg">
            <Calendar className="h-5 w-5 text-gray-500 mr-3" />
            <div className="flex-1">
              <p className="font-medium text-gray-800 dark:text-white">02:00 PM - Michael Brown</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t("doctorDashboard.appointments.followUpConsultation")}</p>
            </div>
            <span className="px-2 py-1 bg-success-100 text-success-700 dark:bg-success-500/20 dark:text-success-400 text-xs rounded-full">
              {t("doctorDashboard.status.confirmed")}
            </span>
          </div>
        </div>
      </HealthCard>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Users className="h-8 w-8 text-success-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            {t("doctorDashboard.quickActions.patientRecords.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t("doctorDashboard.quickActions.patientRecords.desc")}
          </p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <FileText className="h-8 w-8 text-warning-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            {t("doctorDashboard.quickActions.prescriptions.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t("doctorDashboard.quickActions.prescriptions.desc")}
          </p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Activity className="h-8 w-8 text-brand-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            {t("doctorDashboard.quickActions.analytics.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t("doctorDashboard.quickActions.analytics.desc")}
          </p>
        </HealthCard>
      </div>
    </div>
  );
}
