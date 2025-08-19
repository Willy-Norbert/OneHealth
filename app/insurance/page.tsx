import { Shield, Check, CreditCard, FileText, Phone, AlertCircle } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

const insuranceProviders = [
  {
    id: 1,
    name: "Mutuelle de Santé",
    type: "Community-based Health Insurance",
    logo: "🏥",
    coverage: "Basic healthcare services",
    features: ["Primary healthcare", "Maternity care", "Emergency services", "Basic medications"],
    premium: "3,000 RWF/year",
    copay: "200 RWF per visit",
    accepted: true,
    color: "success"
  },
  {
    id: 2,
    name: "RAMA (Rwanda Social Security Board)",
    type: "Social Security Health Insurance",
    logo: "🛡️",
    coverage: "Comprehensive healthcare for employees",
    features: ["Full medical coverage", "Specialist consultations", "Surgery", "Hospitalization", "Dental care"],
    premium: "7.5% of salary",
    copay: "10% of medical costs",
    accepted: true,
    color: "blue-light"
  },
  {
    id: 3,
    name: "MMI (Military Medical Insurance)",
    type: "Military Health Insurance",
    logo: "⭐",
    coverage: "Comprehensive care for military personnel",
    features: ["Full medical coverage", "Emergency care", "Specialist care", "International treatment"],
    premium: "Employer covered",
    copay: "Minimal fees",
    accepted: true,
    color: "warning"
  },
  {
    id: 4,
    name: "Radiant Insurance",
    type: "Private Health Insurance",
    logo: "💎",
    coverage: "Premium healthcare services",
    features: ["VIP treatment", "International coverage", "Specialist care", "Private rooms"],
    premium: "Starting 150,000 RWF/year",
    copay: "5% of medical costs",
    accepted: true,
    color: "healthcare-primary"
  },
  {
    id: 5,
    name: "UAP Insurance",
    type: "Private Health Insurance",
    logo: "🏛️",
    coverage: "Comprehensive private healthcare",
    features: ["Outpatient care", "Hospitalization", "Maternity", "Dental & Optical"],
    premium: "Starting 200,000 RWF/year",
    copay: "10% of medical costs",
    accepted: true,
    color: "blue-light"
  },
  {
    id: 6,
    name: "SANLAM",
    type: "Private Health Insurance",
    logo: "🌟",
    coverage: "Premium health and life insurance",
    features: ["Health coverage", "Life insurance", "Disability cover", "International treatment"],
    premium: "Starting 180,000 RWF/year",
    copay: "Variable by plan",
    accepted: true,
    color: "success"
  },
  {
    id: 7,
    name: "Britam Insurance",
    type: "Private Health Insurance",
    logo: "🏢",
    coverage: "Comprehensive health insurance",
    features: ["Medical coverage", "Dental care", "Optical care", "Wellness programs"],
    premium: "Starting 120,000 RWF/year",
    copay: "15% of medical costs",
    accepted: true,
    color: "warning"
  },
  {
    id: 8,
    name: "Prime Insurance",
    type: "Private Health Insurance",
    logo: "⚡",
    coverage: "Affordable health insurance",
    features: ["Basic medical care", "Emergency services", "Pharmacy benefits", "Telemedicine"],
    premium: "Starting 80,000 RWF/year",
    copay: "20% of medical costs",
    accepted: true,
    color: "blue-light"
  }
];

export default function Insurance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Accepted Insurance Plans</h1>
        <p className="text-muted-foreground">We accept a wide range of insurance providers to make healthcare accessible</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <HealthCard className="p-4">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-healthcare-primary mr-3" />
            <div>
              <p className="text-2xl font-bold">8</p>
              <p className="text-sm text-muted-foreground">Insurance Partners</p>
            </div>
          </div>
        </HealthCard>
        <HealthCard className="p-4">
          <div className="flex items-center">
            <Check className="h-8 w-8 text-success-500 mr-3" />
            <div>
              <p className="text-2xl font-bold">95%</p>
              <p className="text-sm text-muted-foreground">Coverage Rate</p>
            </div>
          </div>
        </HealthCard>
        <HealthCard className="p-4">
          <div className="flex items-center">
            <CreditCard className="h-8 w-8 text-warning-500 mr-3" />
            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm text-muted-foreground">Claims Processing</p>
            </div>
          </div>
        </HealthCard>
        <HealthCard className="p-4">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-blue-light-500 mr-3" />
            <div>
              <p className="text-2xl font-bold">instant</p>
              <p className="text-sm text-muted-foreground">Verification</p>
            </div>
          </div>
        </HealthCard>
      </div>

      {/* Insurance Providers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insuranceProviders.map((provider) => (
          <HealthCard key={provider.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="text-4xl mr-4">{provider.logo}</div>
                <div>
                  <h3 className="text-lg font-semibold">{provider.name}</h3>
                  <p className="text-sm text-muted-foreground">{provider.type}</p>
                </div>
              </div>
              {provider.accepted && (
                <div className="flex items-center text-success-500">
                  <Check className="h-5 w-5 mr-1" />
                  <span className="text-sm font-medium">Accepted</span>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <p className="font-medium text-sm mb-1">Coverage</p>
                <p className="text-sm text-muted-foreground">{provider.coverage}</p>
              </div>

              <div>
                <p className="font-medium text-sm mb-2">Key Features</p>
                <div className="space-y-1">
                  {provider.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <Check className="h-3 w-3 text-success-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="font-medium text-sm">Premium</p>
                  <p className="text-sm text-muted-foreground">{provider.premium}</p>
                </div>
                <div>
                  <p className="font-medium text-sm">Co-pay</p>
                  <p className="text-sm text-muted-foreground">{provider.copay}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button className="flex-1 bg-healthcare-primary text-white py-2 rounded-lg text-sm">
                Use This Insurance
              </button>
              <button className="flex-1 border border-border py-2 rounded-lg text-sm hover:border-healthcare-primary">
                Learn More
              </button>
            </div>
          </HealthCard>
        ))}
      </div>

      {/* How to Use Insurance */}
      <HealthCard className="p-6">
        <h2 className="text-xl font-semibold mb-4">How to Use Your Insurance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-healthcare-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <FileText className="h-6 w-6 text-healthcare-primary" />
            </div>
            <h3 className="font-medium mb-2">1. Verify Coverage</h3>
            <p className="text-sm text-muted-foreground">Present your insurance card during appointment booking or check-in</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Check className="h-6 w-6 text-success-500" />
            </div>
            <h3 className="font-medium mb-2">2. Get Treatment</h3>
            <p className="text-sm text-muted-foreground">Receive medical care with your approved insurance coverage</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CreditCard className="h-6 w-6 text-warning-500" />
            </div>
            <h3 className="font-medium mb-2">3. Pay Co-pay</h3>
            <p className="text-sm text-muted-foreground">Pay only your insurance co-payment amount, if applicable</p>
          </div>
        </div>
      </HealthCard>

      {/* Contact Insurance */}
      <HealthCard className="p-6 bg-blue-light-50 border border-blue-light-200">
        <div className="flex items-start">
          <AlertCircle className="h-6 w-6 text-blue-light-500 mr-3 mt-1" />
          <div className="flex-1">
            <h3 className="font-semibold text-blue-light-700 mb-2">Insurance Questions?</h3>
            <p className="text-blue-light-600 text-sm mb-4">
              Our insurance team is here to help you understand your coverage and benefits.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-light-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Insurance Help
              </button>
              <button className="border border-blue-light-300 text-blue-light-700 px-4 py-2 rounded-lg">
                Email Support
              </button>
            </div>
          </div>
        </div>
      </HealthCard>
    </div>
  );
}