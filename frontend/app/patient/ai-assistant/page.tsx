import { MessageCircle, FileText, Calendar, Heart, BookOpen, Shield } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

export default function AIAssistant() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">AI Health Assistant</h1>
        <p className="text-muted-foreground">Get personalized health guidance and support</p>
      </div>

      {/* Quick Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Heart className="h-8 w-8 text-error-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Symptom Checker</h3>
          <p className="text-muted-foreground text-sm">Describe your symptoms and get preliminary health insights</p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Calendar className="h-8 w-8 text-success-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Appointment Help</h3>
          <p className="text-muted-foreground text-sm">Get assistance with booking appointments and choosing doctors</p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <FileText className="h-8 w-8 text-blue-light-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Prescription Guide</h3>
          <p className="text-muted-foreground text-sm">Understand your prescriptions and medication instructions</p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <MessageCircle className="h-8 w-8 text-warning-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Referral Support</h3>
          <p className="text-muted-foreground text-sm">Get help finding the right specialists and clinics</p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <BookOpen className="h-8 w-8 text-healthcare-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Health Education</h3>
          <p className="text-muted-foreground text-sm">Learn about nutrition, hygiene, and disease prevention</p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Shield className="h-8 w-8 text-gray-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Privacy & Safety</h3>
          <p className="text-muted-foreground text-sm">Your data is secure and conversations are confidential</p>
        </HealthCard>
      </div>

      {/* Chat Interface */}
      <HealthCard className="p-6">
        <h2 className="text-xl font-semibold mb-4">Chat with AI Assistant</h2>
        <div className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-healthcare-primary rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-black" />
              </div>
              <div>
                <p className="font-medium text-sm">AI Assistant</p>
                <p className="text-sm">Hello! I'm here to help you with your health questions. How can I assist you today?</p>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button className="p-3 text-left border border-border rounded-lg hover:border-healthcare-primary transition-colors">
              <span className="text-sm">Check symptoms</span>
            </button>
            <button className="p-3 text-left border border-border rounded-lg hover:border-healthcare-primary transition-colors">
              <span className="text-sm">Book appointment</span>
            </button>
            <button className="p-3 text-left border border-border rounded-lg hover:border-healthcare-primary transition-colors">
              <span className="text-sm">Understand prescription</span>
            </button>
            <button className="p-3 text-left border border-border rounded-lg hover:border-healthcare-primary transition-colors">
              <span className="text-sm">Find specialist</span>
            </button>
          </div>

          {/* Chat Input */}
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Type your health question here..."
              className="flex-1 p-3 border border-border rounded-lg focus:border-healthcare-primary focus:outline-none"
            />
            <button className="bg-healthcare-primary text-black px-6 py-3 rounded-lg hover:bg-healthcare-primary/90 transition-colors">
              Send
            </button>
          </div>
        </div>
      </HealthCard>

      {/* Health Tips */}
      <HealthCard className="p-6">
        <h2 className="text-xl font-semibold mb-4">Today's Health Tips</h2>
        <div className="space-y-4">
          <div className="p-4 bg-success-50 border border-success-200 rounded-lg">
            <h3 className="font-medium text-success-700 mb-2">💧 Stay Hydrated</h3>
            <p className="text-sm text-success-600">Drink at least 8 glasses of water daily to maintain optimal health.</p>
          </div>
          <div className="p-4 bg-blue-light-50 border border-blue-light-200 rounded-lg">
            <h3 className="font-medium text-blue-light-700 mb-2">🏃‍♂️ Exercise Regularly</h3>
            <p className="text-sm text-blue-light-600">Aim for 30 minutes of physical activity 5 times a week.</p>
          </div>
          <div className="p-4 bg-warning-50 border border-warning-200 rounded-lg">
            <h3 className="font-medium text-warning-700 mb-2">🍎 Balanced Diet</h3>
            <p className="text-sm text-warning-600">Include fruits, vegetables, and whole grains in your daily meals.</p>
          </div>
        </div>
      </HealthCard>

      {/* Privacy Notice */}
      <HealthCard className="p-6 bg-muted/50">
        <div className="flex items-start space-x-3">
          <Shield className="w-6 h-6 text-muted-foreground mt-1" />
          <div>
            <h3 className="font-medium mb-2">Privacy & Data Safety</h3>
            <p className="text-sm text-muted-foreground">
              Your conversations with our AI assistant are confidential and encrypted. 
              We do not share your personal health information with third parties. 
              For serious medical emergencies, please contact emergency services immediately.
            </p>
          </div>
        </div>
      </HealthCard>
    </div>
  );
}