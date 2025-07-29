import { Calendar, Clock, Video, Pill, Heart, Phone } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

export default function PatientDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Patient Dashboard</h1>
        <p className="text-muted-foreground">Manage your health and appointments</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <HealthCard className="p-6">
          <div className="flex items-center">
            <Calendar className="h-12 w-12 text-success-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">3</p>
              <p className="text-gray-600 dark:text-gray-400">Upcoming Appointments</p>
            </div>
          </div>
        </HealthCard>

        <HealthCard className="p-6">
          <div className="flex items-center">
            <Pill className="h-12 w-12 text-warning-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">2</p>
              <p className="text-gray-600 dark:text-gray-400">Active Prescriptions</p>
            </div>
          </div>
        </HealthCard>

        <HealthCard className="p-6">
          <div className="flex items-center">
            <Heart className="h-12 w-12 text-error-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">98%</p>
              <p className="text-gray-600 dark:text-gray-400">Health Score</p>
            </div>
          </div>
        </HealthCard>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Calendar className="h-8 w-8 text-success-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Book Appointment</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Schedule a visit with your healthcare provider</p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Video className="h-8 w-8 text-blue-light-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Teleconsultation</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Connect with doctors virtually</p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Pill className="h-8 w-8 text-warning-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Pharmacy Orders</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Order medications from partner pharmacies</p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Phone className="h-8 w-8 text-error-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Emergency Request</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Request immediate medical assistance</p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Clock className="h-8 w-8 text-gray-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Medical History</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">View your complete medical records</p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Heart className="h-8 w-8 text-success-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">AI Health Assistant</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Get health advice and symptom checker</p>
        </HealthCard>
      </div>

      {/* Recent Activity */}
      <HealthCard className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
            <Calendar className="h-5 w-5 text-success-500 mr-3" />
            <div>
              <p className="font-medium text-gray-800 dark:text-white">Appointment with Dr. Smith</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tomorrow at 2:00 PM</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
            <Pill className="h-5 w-5 text-warning-500 mr-3" />
            <div>
              <p className="font-medium text-gray-800 dark:text-white">Prescription filled</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Medication ready for pickup</p>
            </div>
          </div>
        </div>
      </HealthCard>
    </div>
  );
}