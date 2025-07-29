import { Calendar, FileText, Pill, User, Download, Eye } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

const medicalHistory = [
  {
    id: 1,
    date: "March 15, 2024",
    doctor: "Dr. Jean Mugabo",
    hospital: "King Faisal Hospital",
    department: "Cardiology",
    diagnosis: "Hypertension monitoring",
    medications: ["Amlodipine 5mg daily", "Lisinopril 10mg daily"],
    notes: "Blood pressure stable. Continue current medication. Follow-up in 3 months.",
    type: "teleconsultation"
  },
  {
    id: 2,
    date: "February 28, 2024",
    doctor: "Dr. Mukamana Grace",
    hospital: "Rwanda Military Hospital",
    department: "Gynecology",
    diagnosis: "Routine check-up",
    medications: ["Folic acid supplements"],
    notes: "All tests normal. Recommended annual screening.",
    type: "in-person"
  },
  {
    id: 3,
    date: "January 20, 2024",
    doctor: "Dr. Ndahiro Eric",
    hospital: "University Teaching Hospital",
    department: "Mental Health",
    diagnosis: "Anxiety management",
    medications: ["Sertraline 50mg daily"],
    notes: "Patient showing improvement. Continue therapy sessions.",
    type: "teleconsultation"
  },
  {
    id: 4,
    date: "December 10, 2023",
    doctor: "Dr. Uwimana Paul",
    hospital: "Kibagabaga Hospital",
    department: "General Medicine",
    diagnosis: "Upper respiratory infection",
    medications: ["Amoxicillin 500mg 3x daily", "Paracetamol as needed"],
    notes: "Complete antibiotic course. Return if symptoms persist.",
    type: "in-person"
  }
];

export default function MedicalHistory() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Medical History</h1>
        <p className="text-muted-foreground">Your complete medical records and consultation history</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <HealthCard className="p-4">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-healthcare-primary mr-3" />
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">Total Visits</p>
            </div>
          </div>
        </HealthCard>
        <HealthCard className="p-4">
          <div className="flex items-center">
            <User className="h-8 w-8 text-success-500 mr-3" />
            <div>
              <p className="text-2xl font-bold">6</p>
              <p className="text-sm text-muted-foreground">Doctors Seen</p>
            </div>
          </div>
        </HealthCard>
        <HealthCard className="p-4">
          <div className="flex items-center">
            <Pill className="h-8 w-8 text-warning-500 mr-3" />
            <div>
              <p className="text-2xl font-bold">8</p>
              <p className="text-sm text-muted-foreground">Prescriptions</p>
            </div>
          </div>
        </HealthCard>
        <HealthCard className="p-4">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-blue-light-500 mr-3" />
            <div>
              <p className="text-2xl font-bold">15</p>
              <p className="text-sm text-muted-foreground">Lab Reports</p>
            </div>
          </div>
        </HealthCard>
      </div>

      {/* Filter Options */}
      <HealthCard className="p-6">
        <h2 className="text-lg font-semibold mb-4">Filter History</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select className="p-3 border border-border rounded-lg">
            <option>All Doctors</option>
            <option>Dr. Jean Mugabo</option>
            <option>Dr. Mukamana Grace</option>
            <option>Dr. Ndahiro Eric</option>
          </select>
          <select className="p-3 border border-border rounded-lg">
            <option>All Departments</option>
            <option>Cardiology</option>
            <option>Gynecology</option>
            <option>Mental Health</option>
            <option>General Medicine</option>
          </select>
          <select className="p-3 border border-border rounded-lg">
            <option>All Types</option>
            <option>In-Person</option>
            <option>Teleconsultation</option>
          </select>
          <input type="date" className="p-3 border border-border rounded-lg" />
        </div>
      </HealthCard>

      {/* Medical Records */}
      <div className="space-y-4">
        {medicalHistory.map((record) => (
          <HealthCard key={record.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold mr-3">{record.doctor}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    record.type === 'teleconsultation' 
                      ? 'bg-blue-light-100 text-blue-light-700' 
                      : 'bg-success-100 text-success-700'
                  }`}>
                    {record.type === 'teleconsultation' ? 'Teleconsultation' : 'In-Person'}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>{record.hospital} - {record.department}</p>
                  <p>{record.date}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-healthcare-primary hover:bg-healthcare-primary/10 rounded">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="p-2 text-healthcare-primary hover:bg-healthcare-primary/10 rounded">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-sm mb-2">Diagnosis</h4>
                <p className="text-sm text-muted-foreground">{record.diagnosis}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Medications</h4>
                <div className="space-y-1">
                  {record.medications.map((med, index) => (
                    <p key={index} className="text-sm text-muted-foreground">• {med}</p>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Doctor's Notes</h4>
                <p className="text-sm text-muted-foreground">{record.notes}</p>
              </div>
            </div>

            <div className="flex gap-3 mt-4 pt-4 border-t border-border">
              <button className="text-sm text-healthcare-primary hover:underline">
                View Full Report
              </button>
              <button className="text-sm text-healthcare-primary hover:underline">
                Download PDF
              </button>
              <button className="text-sm text-healthcare-primary hover:underline">
                Share with Doctor
              </button>
            </div>
          </HealthCard>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="bg-healthcare-primary text-white px-6 py-3 rounded-lg hover:bg-healthcare-primary/90 transition-colors">
          Load More Records
        </button>
      </div>

      {/* Export Options */}
      <HealthCard className="p-6">
        <h2 className="text-lg font-semibold mb-4">Export Medical History</h2>
        <p className="text-muted-foreground mb-4">
          Download your complete medical history for personal records or sharing with healthcare providers.
        </p>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-healthcare-primary text-white px-4 py-2 rounded-lg">
            <Download className="h-4 w-4" />
            Download PDF
          </button>
          <button className="flex items-center gap-2 border border-border px-4 py-2 rounded-lg hover:border-healthcare-primary">
            <FileText className="h-4 w-4" />
            Email Summary
          </button>
        </div>
      </HealthCard>
    </div>
  );
}