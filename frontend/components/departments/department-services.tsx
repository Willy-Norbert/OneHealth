import { Check } from "lucide-react"

export default function DepartmentServices() {
  const departmentServices = [
    {
      category: "Diagnostic Services",
      services: [
        "Advanced Medical Imaging (X-ray, CT, MRI)",
        "Laboratory Testing",
        "Electrocardiogram (ECG/EKG)",
        "Ultrasound",
        "Endoscopy",
        "Biopsy",
      ],
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      checkColor: "text-blue-600",
    },
    {
      category: "Treatment Services",
      services: [
        "Medication Management",
        "Surgical Procedures",
        "Physical Therapy",
        "Radiation Therapy",
        "Chemotherapy",
        "Rehabilitation Services",
      ],
      color: "bg-green-50",
      borderColor: "border-green-200",
      checkColor: "text-green-600",
    },
    {
      category: "Preventive Care",
      services: [
        "Health Screenings",
        "Vaccinations",
        "Wellness Check-ups",
        "Nutritional Counseling",
        "Lifestyle Modification Programs",
        "Preventive Education",
      ],
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      checkColor: "text-purple-600",
    },
    {
      category: "Specialized Care",
      services: [
        "Chronic Disease Management",
        "Maternal and Child Health",
        "Geriatric Care",
        "Mental Health Services",
        "Pain Management",
        "Emergency Care",
      ],
      color: "bg-amber-50",
      borderColor: "border-amber-200",
      checkColor: "text-amber-600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Services Across Departments</h2>
          <p className="text-gray-600">
            ONE HEALTHLINE CONNECT offers a comprehensive range of healthcare services through our various departments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departmentServices.map((category, index) => (
            <div
              key={index}
              className={`${category.color} rounded-xl p-6 border ${category.borderColor} transition-all duration-300 hover:shadow-md`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
              <ul className="space-y-3">
                {category.services.map((service, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-white p-1 rounded-full mr-3 mt-1">
                      <Check className={`h-4 w-4 ${category.checkColor}`} />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
