"use client";

import React, { useState } from 'react';
import { Shield, Lock, Eye, AlertTriangle, Activity, Users, Key, Server } from 'lucide-react';

const SecurityPage = () => {
  const [securityLogs] = useState([
    {
      id: 1,
      type: "login",
      user: "admin@healthline.com",
      action: "Successful login",
      timestamp: "2024-01-20 10:30:00",
      ip: "192.168.1.100",
      status: "success"
    },
    {
      id: 2,
      type: "failed_login",
      user: "hacker@malicious.com",
      action: "Failed login attempt",
      timestamp: "2024-01-20 09:15:00",
      ip: "45.123.456.789",
      status: "blocked"
    },
    {
      id: 3,
      type: "permission",
      user: "dr.smith@healthline.com",
      action: "Accessed patient records",
      timestamp: "2024-01-20 08:45:00",
      ip: "192.168.1.105",
      status: "success"
    }
  ]);

  const [securitySettings, setSecuritySettings] = useState({
    mfaRequired: true,
    sessionTimeout: 30,
    passwordMinLength: 12,
    lockoutAttempts: 5,
    autoLogout: true,
    encryptionEnabled: true
  });

  const handleSettingChange = (setting: string, value: boolean | number) => {
    setSecuritySettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Security Management</h1>
        <p className="text-muted-foreground">Monitor and configure system security settings</p>
      </div>

      {/* Security Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-foreground">Secure</p>
              <p className="text-muted-foreground">System Status</p>
            </div>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-foreground">47</p>
              <p className="text-muted-foreground">Active Sessions</p>
            </div>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center">
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-foreground">3</p>
              <p className="text-muted-foreground">Security Alerts</p>
            </div>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-primary" />
            <div className="ml-4">
              <p className="text-2xl font-bold text-foreground">99.9%</p>
              <p className="text-muted-foreground">Uptime</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Security Settings */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Security Settings
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-foreground">Multi-Factor Authentication</label>
                <p className="text-xs text-muted-foreground">Require MFA for all users</p>
              </div>
              <button
                onClick={() => handleSettingChange('mfaRequired', !securitySettings.mfaRequired)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  securitySettings.mfaRequired ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    securitySettings.mfaRequired ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-foreground">Auto Logout</label>
                <p className="text-xs text-muted-foreground">Automatically log out inactive users</p>
              </div>
              <button
                onClick={() => handleSettingChange('autoLogout', !securitySettings.autoLogout)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  securitySettings.autoLogout ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    securitySettings.autoLogout ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-foreground">Data Encryption</label>
                <p className="text-xs text-muted-foreground">Encrypt sensitive data at rest</p>
              </div>
              <button
                onClick={() => handleSettingChange('encryptionEnabled', !securitySettings.encryptionEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  securitySettings.encryptionEnabled ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    securitySettings.encryptionEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Session Timeout (minutes)
              </label>
              <input
                type="number"
                value={securitySettings.sessionTimeout}
                onChange={(e) => handleSettingChange('sessionTimeout', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                min="5"
                max="120"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Minimum Password Length
              </label>
              <input
                type="number"
                value={securitySettings.passwordMinLength}
                onChange={(e) => handleSettingChange('passwordMinLength', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                min="8"
                max="32"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Account Lockout After Failed Attempts
              </label>
              <input
                type="number"
                value={securitySettings.lockoutAttempts}
                onChange={(e) => handleSettingChange('lockoutAttempts', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                min="3"
                max="10"
              />
            </div>
          </div>

          <button className="w-full mt-6 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Save Security Settings
          </button>
        </div>

        {/* Security Logs */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Security Logs
          </h2>
          
          <div className="space-y-3">
            {securityLogs.map((log) => (
              <div key={log.id} className="p-3 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    log.status === 'success' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                  </span>
                  <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                </div>
                <p className="text-sm text-foreground font-medium">{log.action}</p>
                <div className="text-xs text-muted-foreground mt-1">
                  <p>User: {log.user}</p>
                  <p>IP: {log.ip}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 bg-muted text-muted-foreground px-4 py-2 rounded-md hover:bg-muted/80 transition-colors">
            View All Logs
          </button>
        </div>
      </div>

      {/* Additional Security Tools */}
      <div className="mt-8 bg-card p-6 rounded-lg border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <Key className="h-5 w-5" />
          Security Tools
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-left">
            <Server className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-medium text-foreground">System Backup</h3>
            <p className="text-sm text-muted-foreground">Create secure system backup</p>
          </button>
          
          <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-left">
            <Shield className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-medium text-foreground">Security Scan</h3>
            <p className="text-sm text-muted-foreground">Run vulnerability assessment</p>
          </button>
          
          <button className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-left">
            <AlertTriangle className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-medium text-foreground">Incident Response</h3>
            <p className="text-sm text-muted-foreground">View security incidents</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;