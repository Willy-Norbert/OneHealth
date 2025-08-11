import { User, Clock, Bell, Globe, Shield, Save } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

export default function DoctorSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your profile and preferences</p>
      </div>

      {/* Profile Information */}
      <HealthCard className="p-6">
        <div className="flex items-center mb-6">
          <User className="h-6 w-6 text-healthcare-primary mr-3" />
          <h2 className="text-xl font-semibold">Profile Information</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input type="text" defaultValue="Dr. Jean Mugabo" className="w-full p-3 border border-border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" defaultValue="jean.mugabo@hospital.rw" className="w-full p-3 border border-border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input type="tel" defaultValue="+250 788 123 456" className="w-full p-3 border border-border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Specialty</label>
            <select className="w-full p-3 border border-border rounded-lg">
              <option>Cardiology</option>
              <option>General Medicine</option>
              <option>Pediatrics</option>
              <option>Gynecology</option>
              <option>Mental Health</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Hospital/Clinic</label>
            <select className="w-full p-3 border border-border rounded-lg">
              <option>King Faisal Hospital</option>
              <option>Rwanda Military Hospital</option>
              <option>University Teaching Hospital</option>
              <option>Kibagabaga Hospital</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">License Number</label>
            <input type="text" defaultValue="MD-12345-RW" className="w-full p-3 border border-border rounded-lg" />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">Bio</label>
          <textarea 
            className="w-full p-3 border border-border rounded-lg h-24"
            defaultValue="Experienced cardiologist with 15 years of practice. Specialized in heart disease prevention and treatment."
          ></textarea>
        </div>
      </HealthCard>

      {/* Working Hours */}
      <HealthCard className="p-6">
        <div className="flex items-center mb-6">
          <Clock className="h-6 w-6 text-healthcare-primary mr-3" />
          <h2 className="text-xl font-semibold">Working Hours</h2>
        </div>
        <div className="space-y-4">
          {[
            { day: "Monday", start: "08:00", end: "17:00", enabled: true },
            { day: "Tuesday", start: "08:00", end: "17:00", enabled: true },
            { day: "Wednesday", start: "08:00", end: "17:00", enabled: true },
            { day: "Thursday", start: "08:00", end: "17:00", enabled: true },
            { day: "Friday", start: "08:00", end: "17:00", enabled: true },
            { day: "Saturday", start: "09:00", end: "13:00", enabled: true },
            { day: "Sunday", start: "00:00", end: "00:00", enabled: false }
          ].map((schedule) => (
            <div key={schedule.day} className="flex items-center gap-4">
              <div className="w-20">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked={schedule.enabled} />
                  {schedule.day}
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="time" 
                  defaultValue={schedule.start} 
                  className="p-2 border border-border rounded"
                  disabled={!schedule.enabled}
                />
                <span>to</span>
                <input 
                  type="time" 
                  defaultValue={schedule.end} 
                  className="p-2 border border-border rounded"
                  disabled={!schedule.enabled}
                />
              </div>
            </div>
          ))}
        </div>
      </HealthCard>

      {/* Notification Preferences */}
      <HealthCard className="p-6">
        <div className="flex items-center mb-6">
          <Bell className="h-6 w-6 text-healthcare-primary mr-3" />
          <h2 className="text-xl font-semibold">Notification Preferences</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">New Appointment Requests</p>
              <p className="text-sm text-muted-foreground">Get notified when patients book appointments</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-healthcare-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Teleconsultation Reminders</p>
              <p className="text-sm text-muted-foreground">Reminders 10 minutes before virtual appointments</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-healthcare-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Emergency Alerts</p>
              <p className="text-sm text-muted-foreground">Critical alerts for emergency consultations</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-healthcare-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Patient Messages</p>
              <p className="text-sm text-muted-foreground">Messages from patients through the platform</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-healthcare-primary"></div>
            </label>
          </div>
        </div>
      </HealthCard>

      {/* Language & Region */}
      <HealthCard className="p-6">
        <div className="flex items-center mb-6">
          <Globe className="h-6 w-6 text-healthcare-primary mr-3" />
          <h2 className="text-xl font-semibold">Language & Region</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Language</label>
            <select className="w-full p-3 border border-border rounded-lg">
              <option>English</option>
              <option>Kinyarwanda</option>
              <option>French</option>
              <option>Swahili</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Time Zone</label>
            <select className="w-full p-3 border border-border rounded-lg">
              <option>Central Africa Time (CAT)</option>
              <option>East Africa Time (EAT)</option>
            </select>
          </div>
        </div>
      </HealthCard>

      {/* Security */}
      <HealthCard className="p-6">
        <div className="flex items-center mb-6">
          <Shield className="h-6 w-6 text-healthcare-primary mr-3" />
          <h2 className="text-xl font-semibold">Security</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Current Password</label>
            <input type="password" placeholder="Enter current password" className="w-full p-3 border border-border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">New Password</label>
            <input type="password" placeholder="Enter new password" className="w-full p-3 border border-border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Confirm New Password</label>
            <input type="password" placeholder="Confirm new password" className="w-full p-3 border border-border rounded-lg" />
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm">Enable two-factor authentication</label>
          </div>
        </div>
      </HealthCard>

      {/* Save Changes */}
      <div className="flex justify-end">
        <button className="bg-healthcare-primary text-white px-8 py-3 rounded-lg flex items-center gap-2">
          <Save className="h-5 w-5" />
          Save Changes
        </button>
      </div>
    </div>
  );
}