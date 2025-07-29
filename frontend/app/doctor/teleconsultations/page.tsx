import { Video, Clock, User } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

export default function DoctorTeleconsultations() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Teleconsultations</h1>
        <p className="text-muted-foreground">Manage virtual consultations and video calls</p>
      </div>

      <HealthCard className="p-6">
        <h2 className="text-xl font-semibold mb-4">Virtual Consultations</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Video className="w-5 h-5 text-healthcare-primary mr-3" />
                <div>
                  <p className="font-medium">Jane Smith - Mental Health</p>
                  <p className="text-sm text-muted-foreground">Scheduled: 10:30 AM</p>
                </div>
              </div>
              <button className="bg-healthcare-primary text-black px-4 py-2 rounded-lg">Start Call</button>
            </div>
          </div>
        </div>
      </HealthCard>
    </div>
  );
}