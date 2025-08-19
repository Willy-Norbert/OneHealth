"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Video,
  MapPin,
  Filter,
  Search,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AppointmentsManagement = () => {
  const { t } = useLanguage();

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "John Doe",
      doctorName: "Dr. Sarah Johnson",
      date: "2024-01-25",
      time: "10:00",
      type: "in-person",
      status: "confirmed",
      department: "Cardiology",
      reason: "Regular checkup",
      phone: "+250-XXX-XXXX01",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      doctorName: "Dr. Michael Brown",
      date: "2024-01-25",
      time: "14:30",
      type: "video",
      status: "pending",
      department: "Pediatrics",
      reason: "Follow-up consultation",
      phone: "+250-XXX-XXXX02",
    },
    {
      id: 3,
      patientName: "Robert Wilson",
      doctorName: "Dr. Emily Davis",
      date: "2024-01-26",
      time: "09:15",
      type: "phone",
      status: "completed",
      department: "Gynecology",
      reason: "Test results discussion",
      phone: "+250-XXX-XXXX03",
    },
    {
      id: 4,
      patientName: "Mary Johnson",
      doctorName: "Dr. James Wilson",
      date: "2024-01-26",
      time: "11:45",
      type: "in-person",
      status: "cancelled",
      department: "Emergency",
      reason: "Emergency consultation",
      phone: "+250-XXX-XXXX04",
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesFilter = filter === "all" || appointment.status === filter;
    const matchesSearch =
      appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleStatusChange = (appointmentId: number, newStatus: string) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === appointmentId
          ? { ...appointment, status: newStatus }
          : appointment
      )
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />;
      case "phone":
        return <Phone className="h-4 w-4" />;
      default:
        return <MapPin className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {t("appointments.management")}
        </h1>
        <p className="text-muted-foreground">{t("appointments.description")}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-primary" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-foreground">
                {appointments.length}
              </p>
              <p className="text-muted-foreground">{t("appointments.stats.total")}</p>
            </div>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-foreground">
                {appointments.filter((a) => a.status === "confirmed").length}
              </p>
              <p className="text-muted-foreground">{t("appointments.stats.confirmed")}</p>
            </div>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center">
            <User className="h-8 w-8 text-yellow-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-foreground">
                {appointments.filter((a) => a.status === "pending").length}
              </p>
              <p className="text-muted-foreground">{t("appointments.stats.pending")}</p>
            </div>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center">
            <Video className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-foreground">
                {appointments.filter((a) => a.type === "video").length}
              </p>
              <p className="text-muted-foreground">{t("appointments.stats.teleconsultations")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-card p-6 rounded-lg border border-border mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {t("appointments.filters.all")}
            </button>
            <button
              onClick={() => setFilter("confirmed")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "confirmed"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {t("appointments.filters.confirmed")}
            </button>
            <button
              onClick={() => setFilter("pending")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "pending"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {t("appointments.filters.pending")}
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "completed"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {t("appointments.filters.completed")}
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t("appointments.searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-input rounded-md bg-background text-foreground w-64"
            />
          </div>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {t("appointments.table.patient")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {t("appointments.table.doctor")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {t("appointments.table.dateTime")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {t("appointments.table.type")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {t("appointments.table.status")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {t("appointments.table.actions")}
                </th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-muted/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {appointment.patientName}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {appointment.phone}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {appointment.reason}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {appointment.doctorName}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {appointment.department}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-foreground">
                      {new Date(appointment.date).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-muted-foreground">{appointment.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getTypeIcon(appointment.type)}
                      <span className="ml-2 text-sm text-foreground capitalize">
                        {appointment.type.replace("-", " ")}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        appointment.status
                      )}`}
                    >
                      {t(`appointments.statusOptions.${appointment.status}`)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <select
                      value={appointment.status}
                      onChange={(e) =>
                        handleStatusChange(appointment.id, e.target.value)
                      }
                      className="px-2 py-1 border border-input rounded bg-background text-foreground text-xs"
                    >
                      <option value="pending">{t("appointments.statusOptions.pending")}</option>
                      <option value="confirmed">{t("appointments.statusOptions.confirmed")}</option>
                      <option value="completed">{t("appointments.statusOptions.completed")}</option>
                      <option value="cancelled">{t("appointments.statusOptions.cancelled")}</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-card p-6 rounded-lg border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          {t("appointments.quickActions.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-left">
            <Calendar className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-medium text-foreground">
              {t("appointments.quickActions.schedule.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("appointments.quickActions.schedule.desc")}
            </p>
          </button>

          <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-left">
            <Clock className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-medium text-foreground">
              {t("appointments.quickActions.viewSchedule.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("appointments.quickActions.viewSchedule.desc")}
            </p>
          </button>

          <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-left">
            <Filter className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-medium text-foreground">
              {t("appointments.quickActions.filters.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("appointments.quickActions.filters.desc")}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsManagement;
