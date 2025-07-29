import { Clock, User, Calendar } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

export default function RecentAppointments() {
  const appointments = [
    {
      id: 1,
      patient: "John Doe",
      doctor: "Dr. Smith",
      time: "09:00 AM",
      type: "General",
      status: "confirmed"
    },
    {
      id: 2,
      patient: "Jane Smith",
      doctor: "Dr. Johnson",
      time: "10:30 AM",
      type: "Cardiology",
      status: "pending"
    },
    {
      id: 3,
      patient: "Mike Wilson",
      doctor: "Dr. Brown",
      time: "02:00 PM",
      type: "Teleconsultation",
      status: "confirmed"
    },
    {
      id: 4,
      patient: "Sarah Davis",
      doctor: "Dr. Garcia",
      time: "03:30 PM",
      type: "Pediatrics",
      status: "cancelled"
    },
    {
      id: 5,
      patient: "Tom Anderson",
      doctor: "Dr. Lee",
      time: "04:00 PM",
      type: "Orthopedics",
      status: "confirmed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-success-100 text-success-700 dark:bg-success-500/20 dark:text-success-400";
      case "pending":
        return "bg-warning-100 text-warning-700 dark:bg-warning-500/20 dark:text-warning-400";
      case "cancelled":
        return "bg-error-100 text-error-700 dark:bg-error-500/20 dark:text-error-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-400";
    }
  };

  return (
    <HealthCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Appointments</h3>
        <Calendar className="h-5 w-5 text-brand-500" />
      </div>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-brand-100 dark:bg-brand-500/20 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-brand-500" />
              </div>
              <div>
                <p className="font-medium text-gray-800 dark:text-white">{appointment.patient}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.doctor}</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                <Clock className="h-4 w-4 mr-1" />
                {appointment.time}
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(appointment.status)}`}>
                {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </HealthCard>
  );
}