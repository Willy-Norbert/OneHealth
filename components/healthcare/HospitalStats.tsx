import { Building, MapPin, Star } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

export default function HospitalStats() {
  const hospitals = [
    {
      name: "Kigali Central Hospital",
      location: "Kigali",
      patients: 1250,
      rating: 4.8,
      departments: 12
    },
    {
      name: "Butare University Hospital",
      location: "Huye",
      patients: 890,
      rating: 4.6,
      departments: 10
    },
    {
      name: "Ruhengeri Regional Hospital",
      location: "Musanze",
      patients: 650,
      rating: 4.5,
      departments: 8
    },
    {
      name: "Kibungo Hospital",
      location: "Ngoma",
      patients: 520,
      rating: 4.3,
      departments: 7
    }
  ];

  return (
    <HealthCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Hospital Statistics</h3>
        <Building className="h-5 w-5 text-brand-500" />
      </div>

      <div className="space-y-4">
        {hospitals.map((hospital, index) => (
          <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-800 dark:text-white">{hospital.name}</h4>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-warning-500 mr-1" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{hospital.rating}</span>
              </div>
            </div>
            
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              {hospital.location}
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600 dark:text-gray-400">Patients: </span>
                <span className="font-medium text-gray-800 dark:text-white">{hospital.patients}</span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Departments: </span>
                <span className="font-medium text-gray-800 dark:text-white">{hospital.departments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </HealthCard>
  );
}