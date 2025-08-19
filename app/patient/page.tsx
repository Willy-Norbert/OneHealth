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
  Clock, 
  Video, 
  Pill, 
  Heart, 
  Phone,
  Activity,
  Bell,
  MessageSquare,
  User,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Zap
} from "lucide-react";

export default function PatientPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { t } = useLanguage();
  const [healthScore, setHealthScore] = useState(98);

  useEffect(() => {
    if (!loading && (!user || user.role !== "patient")) {
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

  if (!user || user.role !== "patient") {
    return null;
  }

  const stats = [
    {
      title: "Upcoming Appointments",
      value: 3,
      change: "+1",
      trend: "up" as const,
      icon: Calendar,
      color: "text-blue-600",
      onClick: () => router.push("/patient/appointments")
    },
    {
      title: "Active Prescriptions",
      value: 2,
      change: "unchanged",
      trend: "neutral" as const,
      icon: Pill,
      color: "text-orange-600",
      onClick: () => router.push("/patient/pharmacy")
    },
    {
      title: "Health Score",
      value: `${healthScore}%`,
      change: "+2%",
      trend: "up" as const,
      icon: Heart,
      color: "text-green-600",
      onClick: () => router.push("/patient/ai-assistant")
    },
    {
      title: "Emergency Contacts",
      value: 5,
      change: "Ready",
      trend: "neutral" as const,
      icon: Phone,
      color: "text-red-600",
      onClick: () => router.push("/patient/emergency")
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Book Appointment",
      description: "Schedule a consultation with available doctors",
      onClick: () => router.push("/patient/appointments"),
      variant: "primary" as const
    },
    {
      icon: Video,
      title: "Start Teleconsultation",
      description: "Connect with your doctor via video call",
      onClick: () => router.push("/patient/teleconsultation"),
      variant: "secondary" as const,
      badge: "Available"
    },
    {
      icon: Heart,
      title: "AI Health Assistant",
      description: "Get personalized health insights and recommendations",
      onClick: () => router.push("/patient/ai-assistant"),
      variant: "default" as const,
      badge: "New"
    },
    {
      icon: Pill,
      title: "Order Medications",
      description: "Refill prescriptions and order medications",
      onClick: () => router.push("/patient/pharmacy"),
      variant: "default" as const
    },
    {
      icon: Phone,
      title: "Emergency Services",
      description: "Access emergency contacts and services",
      onClick: () => router.push("/patient/emergency"),
      variant: "default" as const
    },
    {
      icon: Clock,
      title: "Medical History",
      description: "View your complete medical records and history",
      onClick: () => router.push("/patient/history"),
      variant: "default" as const
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      date: "Today",
      time: "2:30 PM",
      doctor: "Dr. Sarah Johnson",
      department: "Cardiology",
      type: "Follow-up",
      status: "confirmed"
    },
    {
      id: 2,
      date: "Tomorrow", 
      time: "10:00 AM",
      doctor: "Dr. Michael Brown",
      department: "General Medicine",
      type: "Teleconsultation",
      status: "confirmed"
    },
    {
      id: 3,
      date: "Dec 25",
      time: "3:15 PM", 
      doctor: "Dr. Emily Davis",
      department: "Dermatology",
      type: "Consultation",
      status: "pending"
    }
  ];

  const recentActivity = [
    { id: 1, activity: "Prescription filled", details: "Antibiotics - King Faisal Hospital", time: "2 hours ago", type: "medication", icon: Pill },
    { id: 2, activity: "Appointment confirmed", details: "Dr. Sarah Johnson - Cardiology", time: "1 day ago", type: "appointment", icon: Calendar },
    { id: 3, activity: "Health report generated", details: "AI Health Assistant analysis", time: "3 days ago", type: "health", icon: Activity },
    { id: 4, activity: "Teleconsultation completed", details: "Dr. Michael Brown - 30 minutes", time: "1 week ago", type: "consultation", icon: Video }
  ];

  return (
    <div className="p-6 space-y-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Welcome back, {user.name}!
            </h1>
            <p className="text-muted-foreground text-lg">
              Your health journey with Irabaruta continues. Stay healthy, stay informed.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Bell className="w-4 h-4" />
              Alerts
              <Badge variant="secondary" className="ml-1">2</Badge>
            </Button>
            <Button className="gap-2" onClick={() => router.push("/patient/ai-assistant")}>
              <Zap className="w-4 h-4" />
              AI Assistant
            </Button>
          </div>
        </div>

        {/* Health Alert Banner */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div className="flex-1">
              <p className="font-medium text-green-900 dark:text-green-100">Your health is looking great!</p>
              <p className="text-sm text-green-700 dark:text-green-300">Your health score improved by 2% this week. Keep up the good work!</p>
            </div>
            <Button variant="ghost" size="sm" className="text-green-700 dark:text-green-300">
              View Details
              <ChevronRight className="w-4 h-4 ml-1" />
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
          {/* Upcoming Appointments */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Upcoming Appointments
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={() => router.push("/patient/appointments")}>
                  View All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingAppointments.map((appointment, index) => (
                  <div 
                    key={appointment.id} 
                    className="flex items-center p-4 rounded-lg border border-border hover:bg-muted/50 transition-all duration-200 cursor-pointer group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-foreground">{appointment.doctor}</p>
                          <Badge 
                            variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {appointment.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{appointment.department} • {appointment.type}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{appointment.date} at {appointment.time}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        {appointment.type === "Teleconsultation" && (
                          <Button size="sm" variant="outline" className="mb-2">
                            <Video className="w-3 h-3 mr-1" />
                            Join
                          </Button>
                        )}
                        {appointment.date === "Today" && (
                          <Badge variant="secondary" className="text-xs">
                            Today
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{item.activity}</p>
                      <p className="text-xs text-muted-foreground">{item.details}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                <QuickActionCard {...action} />
              </div>
            ))}
          </div>
        </div>

        {/* Health Insights */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Health Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-muted/30">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 mx-auto mb-3 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="font-medium text-foreground">Heart Rate</p>
                  <p className="text-2xl font-bold text-green-600">72 BPM</p>
                  <p className="text-xs text-muted-foreground">Normal range</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/30">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/20 mx-auto mb-3 flex items-center justify-center">
                    <Activity className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="font-medium text-foreground">Steps Today</p>
                  <p className="text-2xl font-bold text-blue-600">8,540</p>
                  <p className="text-xs text-muted-foreground">Goal: 10,000</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/30">
                  <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/20 mx-auto mb-3 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="font-medium text-foreground">Sleep Quality</p>
                  <p className="text-2xl font-bold text-purple-600">85%</p>
                  <p className="text-xs text-muted-foreground">7.5 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}