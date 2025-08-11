import { Plus, Search, Download, Send, Edit, Trash2, FileText } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

const prescriptions = [
  {
    id: 1,
    patient: "Alice Uwimana",
    date: "March 15, 2024",
    medications: [
      { name: "Amlodipine", dosage: "5mg", frequency: "Once daily", duration: "30 days" },
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", duration: "30 days" }
    ],
    diagnosis: "Hypertension",
    notes: "Monitor blood pressure weekly",
    status: "Active"
  },
  {
    id: 2,
    patient: "Bob Nkurunziza",
    date: "March 10, 2024",
    medications: [
      { name: "Sertraline", dosage: "50mg", frequency: "Once daily", duration: "60 days" }
    ],
    diagnosis: "Anxiety Disorder",
    notes: "Follow up in 2 weeks for side effects",
    status: "Active"
  },
  {
    id: 3,
    patient: "Carol Ntamushobora",
    date: "March 18, 2024",
    medications: [
      { name: "Metformin", dosage: "500mg", frequency: "Twice daily", duration: "90 days" },
      { name: "Glipizide", dosage: "5mg", frequency: "Once daily", duration: "90 days" }
    ],
    diagnosis: "Type 2 Diabetes",
    notes: "Check blood sugar levels daily",
    status: "Active"
  },
  {
    id: 4,
    patient: "David Rurangwa",
    date: "March 12, 2024",
    medications: [
      { name: "Ibuprofen", dosage: "400mg", frequency: "As needed", duration: "14 days" }
    ],
    diagnosis: "Chronic Back Pain",
    notes: "Physical therapy recommended",
    status: "Completed"
  },
  {
    id: 5,
    patient: "Eve Mukamana",
    date: "March 16, 2024",
    medications: [
      { name: "Folic Acid", dosage: "5mg", frequency: "Once daily", duration: "Until delivery" },
      { name: "Iron Tablets", dosage: "200mg", frequency: "Once daily", duration: "Until delivery" }
    ],
    diagnosis: "Pregnancy - 24 weeks",
    notes: "Next ultrasound in 4 weeks",
    status: "Active"
  },
  {
    id: 6,
    patient: "Frank Nsengimana",
    date: "March 14, 2024",
    medications: [
      { name: "Atorvastatin", dosage: "20mg", frequency: "Once daily", duration: "Ongoing" },
      { name: "Metoprolol", dosage: "50mg", frequency: "Twice daily", duration: "Ongoing" }
    ],
    diagnosis: "Heart Disease",
    notes: "Strict diet and exercise required",
    status: "Active"
  }
];

export default function DoctorPrescriptions() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Prescriptions</h1>
          <p className="text-muted-foreground">Manage patient prescriptions and medications</p>
        </div>
        <button className="bg-healthcare-primary text-white px-6 py-3 rounded-lg flex items-center gap-2">
          <Plus className="h-5 w-5" />
          New Prescription
        </button>
      </div>

      {/* Search and Filter */}
      <HealthCard className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by patient name or medication..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:border-healthcare-primary focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-border rounded-lg">
              <option>All Status</option>
              <option>Active</option>
              <option>Completed</option>
              <option>Expired</option>
            </select>
            <input type="date" className="px-4 py-2 border border-border rounded-lg" />
          </div>
        </div>
      </HealthCard>

      {/* Prescriptions List */}
      <div className="space-y-4">
        {prescriptions.map((prescription) => (
          <HealthCard key={prescription.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold">{prescription.patient}</h3>
                  <span className={`px-2 py-1 rounded text-xs ${
                    prescription.status === 'Active' ? 'bg-success-100 text-success-700' : 'bg-muted text-muted-foreground'
                  }`}>
                    {prescription.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Date: {prescription.date}</p>
                <p className="text-sm text-muted-foreground">Diagnosis: {prescription.diagnosis}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-blue-light-500 hover:bg-blue-light-100 rounded">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-2 text-success-500 hover:bg-success-100 rounded">
                  <Download className="h-4 w-4" />
                </button>
                <button className="p-2 text-healthcare-primary hover:bg-healthcare-primary/10 rounded">
                  <Send className="h-4 w-4" />
                </button>
                <button className="p-2 text-error-500 hover:bg-error-100 rounded">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Medications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {prescription.medications.map((med, index) => (
                    <div key={index} className="p-3 bg-muted rounded-lg">
                      <p className="font-medium">{med.name} {med.dosage}</p>
                      <p className="text-sm text-muted-foreground">{med.frequency}</p>
                      <p className="text-sm text-muted-foreground">Duration: {med.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Doctor's Notes</h4>
                <p className="text-sm text-muted-foreground p-3 bg-muted rounded-lg">{prescription.notes}</p>
              </div>

              <div className="flex gap-3 pt-3 border-t border-border">
                <button className="text-sm text-healthcare-primary hover:underline">
                  View Full Prescription
                </button>
                <button className="text-sm text-healthcare-primary hover:underline">
                  Export as PDF
                </button>
                <button className="text-sm text-healthcare-primary hover:underline">
                  Send to Pharmacy
                </button>
                <button className="text-sm text-healthcare-primary hover:underline">
                  Duplicate Prescription
                </button>
              </div>
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