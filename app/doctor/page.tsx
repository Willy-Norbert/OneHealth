"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import InteractiveStatsCard from "@/components/dashboard/InteractiveStatsCard";
import QuickActionCard from "@/components/dashboard/QuickActionCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Users, 
  FileText, 
  Clock, 
  Video, 
  Activity,
  Bell,
  MessageSquare,
  Stethoscope,
  Pill,
  ChevronRight
} from "lucide-react";

export default function DoctorPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { t } = useLanguage();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (!loading && (!user || user.role !== "doctor")) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user || user.role !== "doctor") {
    return null;
  }

  const stats = [
    {
      title: "Today's Appointments",
      value: 12,
      change: "+2",
      trend: "up" as const,
      icon: Calendar,
      color: "text-blue-600",
      onClick: () => router.push("/doctor/appointments")
    },
    {
      title: "Total Patients",
      value: 287,
      change: "+5%",
      trend: "up" as const,
      icon: Users,
      color: "text-green-600",
      onClick: () => router.push("/doctor/patients")
    },
    {
      title: "Teleconsultations",
      value: 8,
      change: "+3",
      trend: "up" as const,
      icon: Video,
      color: "text-purple-600",
      onClick: () => router.push("/doctor/teleconsultations")
    },
    {
      title: "Prescriptions",
      value: 23,
      change: "+7",
      trend: "up" as const,
      icon: FileText,
      color: "text-orange-600",
      onClick: () => router.push("/doctor/prescriptions")
    }
  ];

  const quickActions = [
    {
      icon: Users,
      title: "Patient Records",
      description: "View and manage patient medical records",
      onClick: () => router.push("/doctor/patients"),
      variant: "primary" as const
    },
    {
      icon: Calendar,
      title: "Schedule Management",
      description: "Manage your appointments and availability",
      onClick: () => router.push("/doctor/appointments"),
      variant: "secondary" as const
    },
    {
      icon: Pill,
      title: "Write Prescription",
      description: "Create and manage patient prescriptions",
      onClick: () => router.push("/doctor/prescriptions"),
      variant: "default" as const
    },
    {
      icon: Video,
      title: "Start Teleconsultation",
      description: "Begin video consultation with patients",
      onClick: () => router.push("/doctor/teleconsultations"),
      variant: "default" as const,
      badge: "Live"
    }
  ];

  const todaysSchedule = [
    {
      id: 1,
      time: "09:00 AM",
      patient: "John Doe",
      type: "General Consultation",
      status: "confirmed",
      avatar: "JD"
    },
    {
      id: 2,
      time: "10:30 AM",
      patient: "Jane Smith",
      type: "Teleconsultation",
      status: "pending",
      avatar: "JS"
    },
    {
      id: 3,
      time: "11:15 AM",
      patient: "Michael Brown",
      type: "Follow-up",
      status: "confirmed",
      avatar: "MB"
    },
    {
      id: 4,
      time: "02:00 PM",
      patient: "Emily Johnson",
      type: "Specialist Consultation",
      status: "confirmed",
      avatar: "EJ"
    }
  ];

  return (
    <div className="p-6 space-y-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Welcome back, Dr. {user.name?.split(' ')[1] || user.name}
            </h1>
            <p className="text-muted-foreground text-lg">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} • {currentTime.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Bell className="w-4 h-4" />
              Notifications
              <Badge variant="destructive" className="ml-1">3</Badge>
            </Button>
            <Button className="gap-2">
              <MessageSquare className="w-4 h-4" />
              Patient Messages
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
          {/* Today's Schedule */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Today's Schedule
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={() => router.push("/doctor/appointments")}>
                  View All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {todaysSchedule.map((appointment, index) => (
                  <div 
                    key={appointment.id} 
                    className="flex items-center p-4 rounded-lg border border-border hover:bg-muted/50 transition-all duration-200 cursor-pointer group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                        {appointment.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-foreground">{appointment.patient}</p>
                          <Badge 
                            variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {appointment.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{appointment.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-foreground">{appointment.time}</p>
                        {appointment.type === "Teleconsultation" && (
                          <Button size="sm" variant="outline" className="mt-2">
                            <Video className="w-3 h-3 mr-1" />
                            Join
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <QuickActionCard {...action} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Patient Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-center justify-center bg-muted/30 rounded-lg">
                <div className="text-center">
                  <Stethoscope className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Patient analytics dashboard</p>
                  <Button variant="ghost" size="sm" className="mt-2">View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Recent Prescriptions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded border">
                  <div>
                    <p className="font-medium">Antibiotics - John Doe</p>
                    <p className="text-sm text-muted-foreground">Prescribed 2 hours ago</p>
                  </div>
                  <Badge variant="outline">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded border">
                  <div>
                    <p className="font-medium">Pain Relief - Jane Smith</p>
                    <p className="text-sm text-muted-foreground">Prescribed 5 hours ago</p>
                  </div>
                  <Badge variant="outline">Active</Badge>
                </div>
                <Button variant="ghost" size="sm" className="w-full">
                  View All Prescriptions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}