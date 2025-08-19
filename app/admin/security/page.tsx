"use client";

import React, { useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Activity,
  Users,
  Key,
  Server,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SecurityPage = () => {
  const { t } = useLanguage();

  const [securityLogs] = useState([
    {
      id: 1,
      type: "login",
      user: "admin@healthline.com",
      action: "Successful login",
      timestamp: "2024-01-20 10:30:00",
      ip: "192.168.1.100",
      status: "success",
    },
    {
      id: 2,
      type: "failed_login",
      user: "hacker@malicious.com",
      action: "Failed login attempt",
      timestamp: "2024-01-20 09:15:00",
      ip: "45.123.456.789",
      status: "blocked",
    },
    {
      id: 3,
      type: "permission",
      user: "dr.smith@healthline.com",
      action: "Accessed patient records",
      timestamp: "2024-01-20 08:45:00",
      ip: "192.168.1.105",
      status: "success",
    },
  ]);

  const [securitySettings, setSecuritySettings] = useState({
    mfaRequired: true,
    sessionTimeout: 30,
    passwordMinLength: 12,
    lockoutAttempts: 5,
    autoLogout: true,
    encryptionEnabled: true,
  });

  const handleSettingChange = (setting: string, value: boolean | number) => {
    setSecuritySettings((prev) => ({
      ...prev,
      [setting]: value,
    }));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {t("security.pageTitle")}
        </h1>
        <p className="text-muted-foreground">
          {t("security.pageDescription")}
        </p>
      </div>

      {/* Security Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-foreground">
                {t("security.status.secure")}
              </p>
              <p className="text-muted-foreground">
                {t("security.status.systemStatus")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-foreground">47</p>
              <p className="text-muted-foreground">
                {t("security.status.activeSessions")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center">
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-foreground">3</p>
              <p className="text-muted-foreground">
                {t("security.status.securityAlerts")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-primary" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-foreground">99.9%</p>
              <p className="text-muted-foreground">{t("security.status.uptime")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Security Settings */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Lock className="h-5 w-5" />
            {t("security.settings.title")}
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-foreground">
                  {t("security.settings.mfa")}
                </label>
                <p className="text-xs text-muted-foreground">
                  {t("security.settings.mfaDesc")}
                </p>
              </div>
              <button
                onClick={() =>
                  handleSettingChange("mfaRequired", !securitySettings.mfaRequired)
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  securitySettings.mfaRequired ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    securitySettings.mfaRequired ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-foreground">
                  {t("security.settings.autoLogout")}
                </label>
                <p className="text-xs text-muted-foreground">
                  {t("security.settings.autoLogoutDesc")}
                </p>
              </div>
              <button
                onClick={() =>
                  handleSettingChange("autoLogout", !securitySettings.autoLogout)
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  securitySettings.autoLogout ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    securitySettings.autoLogout ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-foreground">
                  {t("security.settings.encryption")}
                </label>
                <p className="text-xs text-muted-foreground">
                  {t("security.settings.encryptionDesc")}
                </p>
              </div>
              <button
                onClick={() =>
                  handleSettingChange(
                    "encryptionEnabled",
                    !securitySettings.encryptionEnabled
                  )
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  securitySettings.encryptionEnabled ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    securitySettings.encryptionEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                {t("security.settings.sessionTimeout")}
              </label>
              <input
                type="number"
                value={securitySettings.sessionTimeout}
                onChange={(e) =>
                  handleSettingChange("sessionTimeout", parseInt(e.target.value))
                }
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                min={5}
                max={120}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                {t("security.settings.passwordMinLength")}
              </label>
              <input
                type="number"
                value={securitySettings.passwordMinLength}
                onChange={(e) =>
                  handleSettingChange("passwordMinLength", parseInt(e.target.value))
                }
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                min={8}
                max={32}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                {t("security.settings.lockoutAttempts")}
              </label>
              <input
                type="number"
                value={securitySettings.lockoutAttempts}
                onChange={(e) =>
                  handleSettingChange("lockoutAttempts", parseInt(e.target.value))
                }
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                min={3}
                max={10}
              />
            </div>
          </div>

          <button className="w-full mt-6 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            {t("security.settings.saveButton")}
          </button>
        </div>

        {/* Security Logs */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Eye className="h-5 w-5" />
            {t("security.logs.title")}
          </h2>

          <div className="space-y-3">
            {securityLogs.map((log) => (
              <div key={log.id} className="p-3 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      log.status === "success"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    {t(`security.logs.status.${log.status}`)}
                  </span>
                  <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                </div>
                <p className="text-sm text-foreground font-medium">{t(`security.logs.action.${log.type}`, log.action)}</p>
                <div className="text-xs text-muted-foreground mt-1">
                  <p>
                    {t("security.logs.user")}: {log.user}
                  </p>
                  <p>
                    {t("security.logs.ip")}: {log.ip}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 bg-muted text-muted-foreground px-4 py-2 rounded-md hover:bg-muted/80 transition-colors">
            {t("security.logs.viewAll")}
          </button>
        </div>
      </div>

      {/* Additional Security Tools */}
      <div className="mt-8 bg-card p-6 rounded-lg border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <Key className="h-5 w-5" />
          {t("security.tools.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-left">
            <Server className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-medium text-foreground">
              {t("security.tools.systemBackup.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("security.tools.systemBackup.desc")}
            </p>
          </button>

          <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-left">
            <Shield className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-medium text-foreground">
              {t("security.tools.securityScan.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("security.tools.securityScan.desc")}
            </p>
          </button>

          <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-left">
            <AlertTriangle className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-medium text-foreground">
              {t("security.tools.incidentResponse.title")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("security.tools.incidentResponse.desc")}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
