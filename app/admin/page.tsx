"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import InteractiveStatsCard from "@/components/dashboard/InteractiveStatsCard";
import QuickActionCard from "@/components/dashboard/QuickActionCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  DollarSign, 
  Activity,
  TrendingUp,
  UserCheck,
  Clock,
  Plus,
  Bell,
  Settings,
  FileText,
  Shield
} from 'lucide-react';

export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { t } = useLanguage();
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');

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

  const stats = [
    {
      title: "Total Patients",
      value: "2,847",
      change: "+12.5%",
      trend: "up" as const,
      icon: Users,
      color: "text-blue-600",
      onClick: () => router.push("/admin/users?filter=patient")
    },
    {
      title: "Active Doctors",
      value: "156",
      change: "+3.2%", 
      trend: "up" as const,
      icon: UserCheck,
      color: "text-green-600",
      onClick: () => router.push("/admin/users?filter=doctor")
    },
    {
      title: "Today's Appointments",
      value: "89",
      change: "+8.7%",
      trend: "up" as const, 
      icon: Calendar,
      color: "text-orange-600",
      onClick: () => router.push("/admin/appointments")
    },
    {
      title: "Monthly Revenue",
      value: "$47,592",
      change: "+15.3%",
      trend: "up" as const,
      icon: DollarSign,
      color: "text-purple-600",
      onClick: () => router.push("/admin/reports")
    }
  ];

  const quickActions = [
    {
      icon: Users,
      title: "User Management",
      description: "Manage doctors, patients, and admin accounts",
      onClick: () => router.push("/admin/users"),
      variant: "primary" as const
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "View and manage all appointments",
      onClick: () => router.push("/admin/appointments"),
      variant: "secondary" as const
    },
    {
      icon: FileText,
      title: "Generate Reports",
      description: "Create comprehensive analytics reports",
      onClick: () => router.push("/admin/reports"),
      variant: "default" as const
    },
    {
      icon: Shield,
      title: "Security Settings",
      description: "Configure security and access controls",
      onClick: () => router.push("/admin/security"),
      variant: "default" as const,
      badge: "Important"
    },
    {
      icon: Settings,
      title: "System Settings",
      description: "Configure application settings",
      onClick: () => router.push("/admin/settings"),
      variant: "default" as const
    },
    {
      icon: Activity,
      title: "Platform Analytics",
      description: "View detailed platform performance metrics",
      onClick: () => router.push("/admin/reports"),
      variant: "default" as const
    }
  ];

  const recentActivities = [
    { id: 1, action: "New doctor registered", user: "Dr. Sarah Johnson", time: "5 min ago", type: "user" },
    { id: 2, action: "Emergency appointment scheduled", user: "Michael Chen", time: "12 min ago", type: "urgent" },
    { id: 3, action: "System backup completed", user: "System", time: "1 hour ago", type: "system" },
    { id: 4, action: "New patient registration", user: "Emma Wilson", time: "2 hours ago", type: "user" },
    { id: 5, action: "Monthly report generated", user: "Admin", time: "3 hours ago", type: "report" }
  ];

  return (
    <div className="p-6 space-y-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Welcome back, {user.name}! Here's what's happening with Irabaruta today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <select 
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-3 py-2 border border-border rounded-lg bg-card text-foreground"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Quick Add
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
              <InteractiveStatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickActions.map((action, index) => (
                <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <QuickActionCard {...action} />
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="h-fit">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-primary" />
                  Recent Activity
                </CardTitle>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'urgent' ? 'bg-red-500' :
                      activity.type === 'user' ? 'bg-blue-500' :
                      activity.type === 'system' ? 'bg-green-500' :
                      'bg-gray-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.user}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Patient Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
                <div className="text-center">
                  <Activity className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Patient growth chart</p>
                  <p className="text-sm text-muted-foreground mt-2">Chart visualization will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Revenue Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Revenue trends</p>
                  <p className="text-sm text-muted-foreground mt-2">Revenue chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}