"use client";

import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Download,
  Calendar,
  Users,
  Activity,
  DollarSign,
  FileText,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ReportsPage = () => {
  const { t } = useLanguage();

  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [selectedReport, setSelectedReport] = useState("overview");

  const reportData = {
    overview: {
      totalPatients: 2840,
      totalAppointments: 1256,
      totalRevenue: 45600000, // in RWF
      satisfactionRate: 96.5,
    },
    appointments: {
      completed: 1103,
      cancelled: 89,
      noShow: 64,
      rescheduled: 156,
    },
    departments: [
      { name: "Cardiology", patients: 320, revenue: 12500000 },
      { name: "Pediatrics", patients: 280, revenue: 8900000 },
      { name: "Gynecology", patients: 250, revenue: 9800000 },
      { name: "Emergency", patients: 190, revenue: 15400000 },
    ],
    insurance: [
      { provider: "RSSB", claims: 890, amount: 28900000 },
      { provider: "MMI", claims: 450, amount: 15600000 },
      { provider: "Radiant", claims: 230, amount: 8900000 },
      { provider: "UAP", claims: 180, amount: 7200000 },
    ],
  };

  const exportReport = (format: string) => {
    alert(t("reports.exporting", { format }));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {t("reports.title")}
        </h1>
        <p className="text-muted-foreground">{t("reports.description")}</p>
      </div>

      {/* Controls */}
      <div className="bg-card p-6 rounded-lg border border-border mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex gap-2">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-input rounded-md bg-background text-foreground"
            >
              <option value="week">{t("reports.period.week")}</option>
              <option value="month">{t("reports.period.month")}</option>
              <option value="quarter">{t("reports.period.quarter")}</option>
              <option value="year">{t("reports.period.year")}</option>
            </select>

            <select
              value={selectedReport}
              onChange={(e) => setSelectedReport(e.target.value)}
              className="px-4 py-2 border border-input rounded-md bg-background text-foreground"
            >
              <option value="overview">{t("reports.type.overview")}</option>
              <option value="appointments">{t("reports.type.appointments")}</option>
              <option value="financial">{t("reports.type.financial")}</option>
              <option value="patients">{t("reports.type.patients")}</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => exportReport("PDF")}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              {t("reports.export.pdf")}
            </button>
            <button
              onClick={() => exportReport("Excel")}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              {t("reports.export.excel")}
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                {t("reports.metrics.totalPatients")}
              </p>
              <p className="text-2xl font-bold text-foreground">
                {reportData.overview.totalPatients.toLocaleString()}
              </p>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                {t("reports.metrics.increase", { percent: 12 })}
              </p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                {t("reports.metrics.appointments")}
              </p>
              <p className="text-2xl font-bold text-foreground">
                {reportData.overview.totalAppointments.toLocaleString()}
              </p>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                {t("reports.metrics.increase", { percent: 8 })}
              </p>
            </div>
            <Calendar className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                {t("reports.metrics.revenue")}
              </p>
              <p className="text-2xl font-bold text-foreground">
                {(reportData.overview.totalRevenue / 1000000).toFixed(1)}M
              </p>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                {t("reports.metrics.increase", { percent: 15 })}
              </p>
            </div>
            <DollarSign className="h-8 w-8 text-primary" />
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                {t("reports.metrics.satisfactionRate")}
              </p>
              <p className="text-2xl font-bold text-foreground">
                {reportData.overview.satisfactionRate}%
              </p>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                {t("reports.metrics.increase", { percent: 2 })}
              </p>
            </div>
            <Activity className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Department Performance */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            {t("reports.sections.departmentPerformance")}
          </h2>

          <div className="space-y-4">
            {reportData.departments.map((dept, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div>
                  <h3 className="font-medium text-foreground">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {dept.patients} {t("reports.labels.patients")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">
                    {(dept.revenue / 1000000).toFixed(1)}M RWF
                  </p>
                  <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${(dept.patients / 320) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Appointment Status */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            {t("reports.sections.appointmentStatus")}
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <span className="text-sm font-medium text-foreground">
                {t("reports.appointmentStatus.completed")}
              </span>
              <span className="text-lg font-bold text-green-600">
                {reportData.appointments.completed}
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <span className="text-sm font-medium text-foreground">
                {t("reports.appointmentStatus.cancelled")}
              </span>
              <span className="text-lg font-bold text-red-600">
                {reportData.appointments.cancelled}
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <span className="text-sm font-medium text-foreground">
                {t("reports.appointmentStatus.noShow")}
              </span>
              <span className="text-lg font-bold text-yellow-600">
                {reportData.appointments.noShow}
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <span className="text-sm font-medium text-foreground">
                {t("reports.appointmentStatus.rescheduled")}
              </span>
              <span className="text-lg font-bold text-blue-600">
                {reportData.appointments.rescheduled}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Claims */}
      <div className="bg-card p-6 rounded-lg border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <FileText className="h-5 w-5" />
          {t("reports.sections.insuranceClaimsSummary")}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                  {t("reports.insurance.provider")}
                </th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                  {t("reports.insurance.claimsCount")}
                </th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                  {t("reports.insurance.totalAmount")}
                </th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                  {t("reports.insurance.avgClaim")}
                </th>
              </tr>
            </thead>
            <tbody>
              {reportData.insurance.map((insurance, index) => (
                <tr key={index} className="border-b border-border">
                  <td className="py-3 px-4 font-medium text-foreground">
                    {insurance.provider}
                  </td>
                  <td className="py-3 px-4 text-foreground">{insurance.claims}</td>
                  <td className="py-3 px-4 text-foreground">
                    {(insurance.amount / 1000000).toFixed(1)}M
                  </td>
                  <td className="py-3 px-4 text-foreground">
                    {(insurance.amount / insurance.claims / 1000).toFixed(0)}K
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Report Templates */}
      <div className="mt-8 bg-card p-6 rounded-lg border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          {t("reports.sections.reportTemplates")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-left">
            <BarChart3 className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-medium text-foreground">
              {t("reports.templates.monthlySummary.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("reports.templates.monthlySummary.desc")}
            </p>
          </button>

          <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-left">
            <Users className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-medium text-foreground">
              {t("reports.templates.patientAnalytics.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("reports.templates.patientAnalytics.desc")}
            </p>
          </button>

          <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-left">
            <DollarSign className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-medium text-foreground">
              {t("reports.templates.financialReport.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("reports.templates.financialReport.desc")}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
