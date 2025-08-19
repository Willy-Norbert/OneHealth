import React from 'react';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  Activity,
  TrendingUp,
  UserCheck,
  Clock,
  Plus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Patients",
      value: "2,847",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Doctors",
      value: "156",
      change: "+3%", 
      trend: "up",
      icon: UserCheck,
      color: "text-green-600"
    },
    {
      title: "Appointments Today",
      value: "89",
      change: "+8%",
      trend: "up", 
      icon: Calendar,
      color: "text-orange-600"
    },
    {
      title: "Revenue",
      value: "$47,592",
      change: "+15%",
      trend: "up",
      icon: DollarSign,
      color: "text-purple-600"
    }
  ];

  const recentAppointments = [
    { id: 1, patient: "Sarah Johnson", doctor: "Dr. Smith", time: "09:00 AM", status: "Completed" },
    { id: 2, patient: "Mike Davis", doctor: "Dr. Brown", time: "10:30 AM", status: "In Progress" },
    { id: 3, patient: "Emma Wilson", doctor: "Dr. Garcia", time: "11:15 AM", status: "Scheduled" },
    { id: 4, patient: "James Lee", doctor: "Dr. Martinez", time: "02:00 PM", status: "Scheduled" },
    { id: 5, patient: "Lisa Chen", doctor: "Dr. Taylor", time: "03:30 PM", status: "Scheduled" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, Admin</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add New
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                      <span className="text-sm text-gray-500 ml-1">from last month</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Appointments */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Recent Appointments</span>
                <Button variant="outline" size="sm">View All</Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 rounded-lg border bg-white">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{appointment.patient}</p>
                        <p className="text-sm text-gray-600">{appointment.doctor}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Clock className="w-4 h-4 mr-1" />
                        {appointment.time}
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        appointment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        appointment.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Doctors
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Activity className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Billing Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Patient Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <Activity className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Revenue chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;