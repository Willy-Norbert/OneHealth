import { Users, Calendar, DollarSign, Activity } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

export function HealthcareMetrics() {
  const metrics = [
    {
      title: "Total Patients",
      value: "2,543",
      change: "+12.5%",
      icon: Users,
      color: "text-success-500",
      bgColor: "bg-success-50 dark:bg-success-500/10"
    },
    {
      title: "Appointments Today",
      value: "187",
      change: "+8.2%",
      icon: Calendar,
      color: "text-brand-500",
      bgColor: "bg-brand-50 dark:bg-brand-500/10"
    },
    {
      title: "Revenue",
      value: "$23,890",
      change: "+15.3%",
      icon: DollarSign,
      color: "text-warning-500",
      bgColor: "bg-warning-50 dark:bg-warning-500/10"
    },
    {
      title: "Active Doctors",
      value: "89",
      change: "+3.1%",
      icon: Activity,
      color: "text-blue-light-500",
      bgColor: "bg-blue-light-50 dark:bg-blue-light-500/10"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <HealthCard key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {metric.title}
                </p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                  {metric.value}
                </p>
                <p className="text-sm text-success-600 dark:text-success-400">
                  {metric.change}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                <Icon className={`h-6 w-6 ${metric.color}`} />
              </div>
            </div>
          </HealthCard>
        );
      })}
    </div>
  );
}