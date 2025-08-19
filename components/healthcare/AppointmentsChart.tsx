import { Calendar } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

export default function AppointmentsChart() {
  const data = [
    { day: 'Mon', appointments: 45 },
    { day: 'Tue', appointments: 52 },
    { day: 'Wed', appointments: 48 },
    { day: 'Thu', appointments: 61 },
    { day: 'Fri', appointments: 55 },
    { day: 'Sat', appointments: 32 },
    { day: 'Sun', appointments: 28 },
  ];

  const maxValue = Math.max(...data.map(d => d.appointments));

  return (
    <HealthCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Weekly Appointments</h3>
        <Calendar className="h-5 w-5 text-brand-500" />
      </div>

      <div className="h-64 flex items-end justify-between">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className="w-8 bg-brand-500 rounded-t-md transition-all duration-300 hover:bg-brand-600"
              style={{ 
                height: `${(item.appointments / maxValue) * 200}px`,
                minHeight: '10px'
              }}
            ></div>
            <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">{item.day}</span>
            <span className="text-xs font-medium text-gray-800 dark:text-white">{item.appointments}</span>
          </div>
        ))}
      </div>
    </HealthCard>
  );
}