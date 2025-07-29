import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ServicesPricing() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Essential healthcare services for individuals",
      features: [
        "Teleconsultation with general practitioners",
        "Basic appointment booking",
        "Emergency assistance",
        "Medication ordering (delivery fees apply)",
        "Limited AI health assistant features",
      ],
      color: "border-gray-200",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      popular: false,
    },
    {
      name: "Premium",
      price: "5,000 RWF",
      period: "per month",
      description: "Advanced healthcare services for individuals and families",
      features: [
        "Unlimited teleconsultations with all specialists",
        "Priority appointment booking",
        "Emergency assistance with priority dispatch",
        "Medication ordering with free delivery",
        "Full AI health assistant features",
        "Family accounts (up to 4 members)",
        "Health records storage and sharing",
      ],
      color: "border-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700",
      popular: true,
    },
    {
      name: "Business",
      price: "Custom",
      description: "Healthcare solutions for organizations and businesses",
      features: [
        "Custom healthcare plans for employees",
        "Dedicated account manager",
        "Bulk appointment scheduling",
        "Employee health monitoring dashboard",
        "Corporate wellness programs",
        "Integration with existing health benefits",
      ],
      color: "border-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600">
            Choose the plan that best fits your healthcare needs. All plans include access to our core services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 border-2 ${plan.color} ${
                plan.popular ? "shadow-xl relative" : "shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-sm font-bold rounded-bl-xl rounded-tr-xl">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-500 text-sm ml-1">{plan.period}</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className={`w-full ${plan.buttonColor}`}>
                {plan.name === "Business" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-gray-500 text-sm">
            All plans include access to our mobile app and web platform. Prices are in Rwandan Francs (RWF). For
            business plans, please contact our sales team for a customized quote.
          </p>
        </div>
      </div>
    </section>
  )
}
