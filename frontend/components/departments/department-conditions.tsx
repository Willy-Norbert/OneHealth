import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function DepartmentConditions() {
  const departmentConditions = [
    {
      department: "Cardiology",
      conditions: ["Hypertension", "Coronary Artery Disease", "Heart Failure", "Arrhythmias", "Valvular Heart Disease"],
      color: "bg-red-50",
      textColor: "text-red-800",
      borderColor: "border-red-200",
    },
    {
      department: "Neurology",
      conditions: ["Stroke", "Epilepsy", "Parkinson's Disease", "Multiple Sclerosis", "Migraine"],
      color: "bg-purple-50",
      textColor: "text-purple-800",
      borderColor: "border-purple-200",
    },
    {
      department: "Orthopedics",
      conditions: ["Arthritis", "Fractures", "Joint Pain", "Osteoporosis", "Sports Injuries"],
      color: "bg-blue-50",
      textColor: "text-blue-800",
      borderColor: "border-blue-200",
    },
    {
      department: "Dermatology",
      conditions: ["Eczema", "Psoriasis", "Acne", "Skin Cancer", "Fungal Infections"],
      color: "bg-yellow-50",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-200",
    },
    {
      department: "Gastroenterology",
      conditions: ["GERD", "Irritable Bowel Syndrome", "Ulcerative Colitis", "Crohn's Disease", "Hepatitis"],
      color: "bg-green-50",
      textColor: "text-green-800",
      borderColor: "border-green-200",
    },
    {
      department: "Endocrinology",
      conditions: ["Diabetes", "Thyroid Disorders", "Hormonal Imbalances", "Osteoporosis", "Adrenal Disorders"],
      color: "bg-teal-50",
      textColor: "text-teal-800",
      borderColor: "border-teal-200",
    },
    {
      department: "Pulmonology",
      conditions: ["Asthma", "COPD", "Pneumonia", "Tuberculosis", "Sleep Apnea"],
      color: "bg-cyan-50",
      textColor: "text-cyan-800",
      borderColor: "border-cyan-200",
    },
    {
      department: "Gynecology",
      conditions: ["Menstrual Disorders", "Endometriosis", "PCOS", "Fibroids", "Infertility"],
      color: "bg-pink-50",
      textColor: "text-pink-800",
      borderColor: "border-pink-200",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Conditions We Treat</h2>
          <p className="text-gray-600">
            Our departments are equipped to diagnose and treat a wide range of medical conditions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departmentConditions.map((dept, index) => (
            <div
              key={index}
              className={`${dept.color} rounded-xl p-6 border ${dept.borderColor} transition-all duration-300 hover:shadow-md`}
            >
              <h3 className={`text-lg font-bold ${dept.textColor} mb-4`}>{dept.department}</h3>
              <ul className="space-y-2">
                {dept.conditions.map((condition, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-gray-700 text-sm">{condition}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                className={`mt-4 p-0 h-auto ${dept.textColor} hover:bg-transparent hover:underline`}
              >
                View More <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
