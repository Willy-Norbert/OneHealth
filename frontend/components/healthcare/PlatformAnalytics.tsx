import { Activity, TrendingUp, TrendingDown } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

export default function PlatformAnalytics() {
  const metrics = [
    {
      title: "Total Consultations",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      period: "vs last month"
    },
    {
      title: "Average Response Time",
      value: "3.2 min",
      change: "-12%",
      trend: "down",
      period: "vs last month"
    },
    {
      title: "Doctor Utilization",
      value: "89%",
      change: "+5.1%",
      trend: "up",
      period: "vs last month"
    },
    {
      title: "Patient Retention",
      value: "94%",
      change: "+2.3%",
      trend: "up",
      period: "vs last month"
    }
  ];

  return (
    <HealthCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Platform Analytics</h3>
        <Activity className="h-5 w-5 text-brand-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <p className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              {metric.value}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {metric.title}
            </p>
            <div className="flex items-center justify-center">
              {metric.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-success-500 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-error-500 mr-1" />
              )}
              <span className={`text-sm ${
                metric.trend === "up" ? "text-success-600 dark:text-success-400" : "text-error-600 dark:text-error-400"
              }`}>
                {metric.change}
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {metric.period}
            </p>
          </div>
        ))}
      </div>
    </HealthCard>
  );
}