import { User, Search, FileText, Calendar, Phone, Video, ChevronDown } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

const patients = [
  {
    id: 1,
    name: "Alice Uwimana",
    age: 34,
    gender: "Female",
    contact: "+250 788 123 456",
    lastVisit: "March 15, 2024",
    condition: "Hypertension",
    status: "Active Treatment",
    nextAppointment: "March 25, 2024"
  },
  {
    id: 2,
    name: "Bob Nkurunziza",
    age: 28,
    gender: "Male",
    contact: "+250 788 654 321",
    lastVisit: "March 10, 2024",
    condition: "Anxiety Disorder",
    status: "Follow-up Required",
    nextAppointment: "March 22, 2024"
  },
  {
    id: 3,
    name: "Carol Ntamushobora",
    age: 45,
    gender: "Female",
    contact: "+250 788 987 654",
    lastVisit: "March 18, 2024",
    condition: "Diabetes Type 2",
    status: "Stable",
    nextAppointment: "April 2, 2024"
  },
  {
    id: 4,
    name: "David Rurangwa",
    age: 52,
    gender: "Male",
    contact: "+250 788 456 789",
    lastVisit: "March 12, 2024",
    condition: "Chronic Back Pain",
    status: "Active Treatment",
    nextAppointment: "March 26, 2024"
  },
  {
    id: 5,
    name: "Eve Mukamana",
    age: 29,
    gender: "Female",
    contact: "+250 788 321 654",
    lastVisit: "March 16, 2024",
    condition: "Pregnancy Monitoring",
    status: "Regular Checkup",
    nextAppointment: "March 30, 2024"
  },
  {
    id: 6,
    name: "Frank Nsengimana",
    age: 41,
    gender: "Male",
    contact: "+250 788 789 123",
    lastVisit: "March 14, 2024",
    condition: "Heart Disease",
    status: "Critical Monitoring",
    nextAppointment: "March 21, 2024"
  }
];

export default function DoctorPatients() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">My Patients</h1>
        <p className="text-muted-foreground">Manage and track your assigned patients</p>
      </div>

      {/* Search and Filter */}
      <HealthCard className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search patients by name or condition..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:border-healthcare-primary focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-border rounded-lg">
              <option>All Conditions</option>
              <option>Hypertension</option>
              <option>Diabetes</option>
              <option>Heart Disease</option>
              <option>Mental Health</option>
            </select>
            <select className="px-4 py-2 border border-border rounded-lg">
              <option>All Status</option>
              <option>Active Treatment</option>
              <option>Follow-up Required</option>
              <option>Stable</option>
              <option>Critical</option>
            </select>
          </div>
        </div>
      </HealthCard>

      {/* Patient Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient) => (
          <HealthCard key={patient.id} className="p-6 hover:shadow-theme-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-healthcare-primary/10 rounded-full flex items-center justify-center mr-3">
                  <User className="h-6 w-6 text-healthcare-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{patient.name}</h3>
                  <p className="text-sm text-muted-foreground">{patient.age} years, {patient.gender}</p>
                </div>
              </div>
              <div className="relative">
                <button className="p-1 hover:bg-muted rounded">
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium">Primary Condition</p>
                <p className="text-sm text-muted-foreground">{patient.condition}</p>
              </div>

              <div>
                <p className="text-sm font-medium">Status</p>
                <span className={`inline-block px-2 py-1 rounded text-xs ${
                  patient.status === 'Active Treatment' ? 'bg-warning-100 text-warning-700' :
                  patient.status === 'Follow-up Required' ? 'bg-blue-light-100 text-blue-light-700' :
                  patient.status === 'Stable' ? 'bg-success-100 text-success-700' :
                  'bg-error-100 text-error-700'
                }`}>
                  {patient.status}
                </span>
              </div>

              <div>
                <p className="text-sm font-medium">Last Visit</p>
                <p className="text-sm text-muted-foreground">{patient.lastVisit}</p>
              </div>

              <div>
                <p className="text-sm font-medium">Next Appointment</p>
                <p className="text-sm text-muted-foreground">{patient.nextAppointment}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t border-border">
              <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-healthcare-primary text-white rounded-lg text-sm">
                <FileText className="h-4 w-4" />
                View File
              </button>
              <button className="flex items-center justify-center gap-1 px-3 py-2 border border-border rounded-lg text-sm hover:border-healthcare-primary">
                <Phone className="h-4 w-4" />
                Call
              </button>
              <button className="flex items-center justify-center gap-1 px-3 py-2 border border-border rounded-lg text-sm hover:border-healthcare-primary">
                <Video className="h-4 w-4" />
                Video
              </button>
            </div>
          </HealthCard>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 border border-border rounded-lg hover:border-healthcare-primary">Previous</button>
          <span className="px-3 py-2">Page 1 of 1</span>
          <button className="px-3 py-2 border border-border rounded-lg hover:border-healthcare-primary">Next</button>
        </div>
      </div>
    </div>
  );
}