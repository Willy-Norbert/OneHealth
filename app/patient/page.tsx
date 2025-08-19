"use client";

import { Calendar, Clock, Video, Pill, Heart, Phone } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PatientDashboard() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {t("patient1.dashboard.title")}
        </h1>
        <p className="text-muted-foreground">
          {t("patient1.dashboard.subtitle")}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <HealthCard className="p-6">
          <div className="flex items-center">
            <Calendar className="h-12 w-12 text-success-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">3</p>
              <p className="text-gray-600 dark:text-gray-400">
                {t("patient1.dashboard.quickStats.upcomingAppointments")}
              </p>
            </div>
          </div>
        </HealthCard>

        <HealthCard className="p-6">
          <div className="flex items-center">
            <Pill className="h-12 w-12 text-warning-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">2</p>
              <p className="text-gray-600 dark:text-gray-400">
                {t("patient1.dashboard.quickStats.activePrescriptions")}
              </p>
            </div>
          </div>
        </HealthCard>

        <HealthCard className="p-6">
          <div className="flex items-center">
            <Heart className="h-12 w-12 text-error-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">98%</p>
              <p className="text-gray-600 dark:text-gray-400">
                {t("patient1.dashboard.quickStats.healthScore")}
              </p>
            </div>
          </div>
        </HealthCard>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Calendar className="h-8 w-8 text-success-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            {t("patient1.dashboard.quickActions.bookAppointment.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t("patient1.dashboard.quickActions.bookAppointment.description")}
          </p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Video className="h-8 w-8 text-blue-light-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            {t("patient1.dashboard.quickActions.teleconsultation.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t("patient1.dashboard.quickActions.teleconsultation.description")}
          </p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Pill className="h-8 w-8 text-warning-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            {t("patient1.dashboard.quickActions.pharmacyOrders.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t("patient1.dashboard.quickActions.pharmacyOrders.description")}
          </p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Phone className="h-8 w-8 text-error-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            {t("patient1.dashboard.quickActions.emergencyRequest.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t("patient1.dashboard.quickActions.emergencyRequest.description")}
          </p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Clock className="h-8 w-8 text-gray-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            {t("patient1.dashboard.quickActions.medicalHistory.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t("patient1.dashboard.quickActions.medicalHistory.description")}
          </p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Heart className="h-8 w-8 text-success-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            {t("patient1.dashboard.quickActions.aiHealthAssistant.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t("patient1.dashboard.quickActions.aiHealthAssistant.description")}
          </p>
        </HealthCard>
      </div>

      {/* Recent Activity */}
      <HealthCard className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          {t("patient1.dashboard.recentActivity.title")}
        </h3>
        <div className="space-y-4">
          <div className="flex items-center p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
            <Calendar className="h-5 w-5 text-success-500 mr-3" />
            <div>
              <p className="font-medium text-gray-800 dark:text-white">
                {t("patient1.dashboard.recentActivity.appointment.title")}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t("patient1.dashboard.recentActivity.appointment.time")}
              </p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
            <Pill className="h-5 w-5 text-warning-500 mr-3" />
            <div>
              <p className="font-medium text-gray-800 dark:text-white">
                {t("patient1.dashboard.recentActivity.prescription.title")}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t("patient1.dashboard.recentActivity.prescription.status")}
              </p>
            </div>
          </div>
        </div>
      </HealthCard>
    </div>
  );
}
