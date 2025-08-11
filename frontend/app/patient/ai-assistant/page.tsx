"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, FileText, Calendar, Heart, BookOpen, Shield } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

export default function AIAssistant() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">{t("aiAssistant.title")}</h1>
        <p className="text-muted-foreground">{t("aiAssistant.subtitle")}</p>
      </div>

      {/* Quick Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Heart className="h-8 w-8 text-error-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{t("aiAssistant.quickFeatures.symptomChecker.title")}</h3>
          <p className="text-muted-foreground text-sm">{t("aiAssistant.quickFeatures.symptomChecker.description")}</p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Calendar className="h-8 w-8 text-success-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{t("aiAssistant.quickFeatures.appointmentHelp.title")}</h3>
          <p className="text-muted-foreground text-sm">{t("aiAssistant.quickFeatures.appointmentHelp.description")}</p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <FileText className="h-8 w-8 text-blue-light-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{t("aiAssistant.quickFeatures.prescriptionGuide.title")}</h3>
          <p className="text-muted-foreground text-sm">{t("aiAssistant.quickFeatures.prescriptionGuide.description")}</p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <MessageCircle className="h-8 w-8 text-warning-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{t("aiAssistant.quickFeatures.referralSupport.title")}</h3>
          <p className="text-muted-foreground text-sm">{t("aiAssistant.quickFeatures.referralSupport.description")}</p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <BookOpen className="h-8 w-8 text-healthcare-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">{t("aiAssistant.quickFeatures.healthEducation.title")}</h3>
          <p className="text-muted-foreground text-sm">{t("aiAssistant.quickFeatures.healthEducation.description")}</p>
        </HealthCard>

        <HealthCard className="p-6 hover:shadow-theme-lg transition-shadow cursor-pointer">
          <Shield className="h-8 w-8 text-gray-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{t("aiAssistant.quickFeatures.privacySafety.title")}</h3>
          <p className="text-muted-foreground text-sm">{t("aiAssistant.quickFeatures.privacySafety.description")}</p>
        </HealthCard>
      </div>

      {/* Chat Interface */}
      <HealthCard className="p-6">
        <h2 className="text-xl font-semibold mb-4">{t("aiAssistant.chat.title")}</h2>
        <div className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-healthcare-primary rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-black" />
              </div>
              <div>
                <p className="font-medium text-sm">{t("aiAssistant.chat.assistantName")}</p>
                <p className="text-sm">{t("aiAssistant.chat.welcomeMessage")}</p>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button className="p-3 text-left border border-border rounded-lg hover:border-healthcare-primary transition-colors">
              <span className="text-sm">{t("aiAssistant.chat.quickActions.checkSymptoms")}</span>
            </button>
            <button className="p-3 text-left border border-border rounded-lg hover:border-healthcare-primary transition-colors">
              <span className="text-sm">{t("aiAssistant.chat.quickActions.bookAppointment")}</span>
            </button>
            <button className="p-3 text-left border border-border rounded-lg hover:border-healthcare-primary transition-colors">
              <span className="text-sm">{t("aiAssistant.chat.quickActions.understandPrescription")}</span>
            </button>
            <button className="p-3 text-left border border-border rounded-lg hover:border-healthcare-primary transition-colors">
              <span className="text-sm">{t("aiAssistant.chat.quickActions.findSpecialist")}</span>
            </button>
          </div>

          {/* Chat Input */}
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder={t("aiAssistant.chat.inputPlaceholder")}
              className="flex-1 p-3 border border-border rounded-lg focus:border-healthcare-primary focus:outline-none"
            />
            <button className="bg-healthcare-primary text-black px-6 py-3 rounded-lg hover:bg-healthcare-primary/90 transition-colors">
              {t("aiAssistant.chat.sendButton")}
            </button>
          </div>
        </div>
      </HealthCard>

      {/* Health Tips */}
      <HealthCard className="p-6">
        <h2 className="text-xl font-semibold mb-4">{t("aiAssistant.healthTips.title")}</h2>
        <div className="space-y-4">
          <div className="p-4 bg-success-50 border border-success-200 rounded-lg">
            <h3 className="font-medium text-success-700 mb-2">{t("aiAssistant.healthTips.tips.stayHydrated.title")}</h3>
            <p className="text-sm text-success-600">{t("aiAssistant.healthTips.tips.stayHydrated.description")}</p>
          </div>
          <div className="p-4 bg-blue-light-50 border border-blue-light-200 rounded-lg">
            <h3 className="font-medium text-blue-light-700 mb-2">{t("aiAssistant.healthTips.tips.exerciseRegularly.title")}</h3>
            <p className="text-sm text-blue-light-600">{t("aiAssistant.healthTips.tips.exerciseRegularly.description")}</p>
          </div>
          <div className="p-4 bg-warning-50 border border-warning-200 rounded-lg">
            <h3 className="font-medium text-warning-700 mb-2">{t("aiAssistant.healthTips.tips.balancedDiet.title")}</h3>
            <p className="text-sm text-warning-600">{t("aiAssistant.healthTips.tips.balancedDiet.description")}</p>
          </div>
        </div>
      </HealthCard>

      {/* Privacy Notice */}
      <HealthCard className="p-6 bg-muted/50">
        <div className="flex items-start space-x-3">
          <Shield className="w-6 h-6 text-muted-foreground mt-1" />
          <div>
            <h3 className="font-medium mb-2">{t("aiAssistant.privacyNotice.title")}</h3>
            <p className="text-sm text-muted-foreground">{t("aiAssistant.privacyNotice.description")}</p>
          </div>
        </div>
      </HealthCard>
    </div>
  );
}
