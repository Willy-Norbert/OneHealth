import { Target, TrendingUp } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

export default function HealthcareTarget() {
  return (
    <HealthCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Monthly Targets</h3>
        <Target className="h-5 w-5 text-brand-500" />
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Appointments</span>
            <span className="text-sm font-medium text-gray-800 dark:text-white">85%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-success-500 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Patient Satisfaction</span>
            <span className="text-sm font-medium text-gray-800 dark:text-white">92%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-brand-500 h-2 rounded-full" style={{ width: '92%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Revenue</span>
            <span className="text-sm font-medium text-gray-800 dark:text-white">78%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-warning-500 h-2 rounded-full" style={{ width: '78%' }}></div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center text-success-600 dark:text-success-400">
            <TrendingUp className="h-4 w-4 mr-2" />
            <span className="text-sm">+12% from last month</span>
          </div>
        </div>
      </div>
    </HealthCard>
  );
}