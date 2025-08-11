"use client";

import React, { useState } from 'react';
import { Settings, Globe, Bell, MapPin, Calendar } from 'lucide-react';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteName: "ONE HEALTHLINE CONNECT",
    siteDescription: "Comprehensive Healthcare Management System",
    primaryColor: "#3B82F6",
    language: "en",
    timezone: "UTC+02:00",
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: true,
    appointmentReminders: true,
    
    // System Settings
    maintenanceMode: false,
    allowRegistration: true,
    requireEmailVerification: true,
    sessionTimeout: 30,
    
    // Contact Information
    hospitalName: "ONE HEALTHLINE CONNECT",
    hospitalAddress: "Kigali, Rwanda",
    hospitalPhone: "+250-XXX-XXXXXX",
    hospitalEmail: "info@healthline.rw",
    emergencyNumber: "912",
    
    // Payment Settings
    acceptInsurance: true,
    acceptCash: true,
    acceptMobileMoney: true,
    
    // Appointment Settings
    appointmentSlotDuration: 30,
    maxAdvanceBooking: 30,
    cancelationDeadline: 24
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    // Save settings to backend
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">System Settings</h1>
        <p className="text-muted-foreground">Configure system-wide settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* General Settings */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5" />
            General Settings
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Site Name
              </label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => handleSettingChange('siteName', e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Site Description
              </label>
              <textarea
                value={settings.siteDescription}
                onChange={(e) => handleSettingChange('siteDescription', e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                rows={3}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Primary Color
              </label>
              <input
                type="color"
                value={settings.primaryColor}
                onChange={(e) => handleSettingChange('primaryColor', e.target.value)}
                className="w-full h-10 px-3 py-2 border border-input rounded-md bg-background"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Language
              </label>
              <select
                value={settings.language}
                onChange={(e) => handleSettingChange('language', e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value="en">English</option>
                <option value="rw">Kinyarwanda</option>
                <option value="fr">French</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Timezone
              </label>
              <select
                value={settings.timezone}
                onChange={(e) => handleSettingChange('timezone', e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value="UTC+02:00">Central Africa Time (UTC+2)</option>
                <option value="UTC+00:00">UTC</option>
                <option value="UTC+01:00">Central European Time (UTC+1)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notification Settings
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-foreground">Email Notifications</label>
                <p className="text-xs text-muted-foreground">Send notifications via email</p>
              </div>
              <button
                onClick={() => handleSettingChange('emailNotifications', !settings.emailNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.emailNotifications ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-foreground">SMS Notifications</label>
                <p className="text-xs text-muted-foreground">Send notifications via SMS</p>
              </div>
              <button
                onClick={() => handleSettingChange('smsNotifications', !settings.smsNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.smsNotifications ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-foreground">Push Notifications</label>
                <p className="text-xs text-muted-foreground">Send browser push notifications</p>
              </div>
              <button
                onClick={() => handleSettingChange('pushNotifications', !settings.pushNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.pushNotifications ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-foreground">Appointment Reminders</label>
                <p className="text-xs text-muted-foreground">Automatic appointment reminders</p>
              </div>
              <button
                onClick={() => handleSettingChange('appointmentReminders', !settings.appointmentReminders)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.appointmentReminders ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.appointmentReminders ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Contact Information
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Hospital Name
              </label>
              <input
                type="text"
                value={settings.hospitalName}
                onChange={(e) => handleSettingChange('hospitalName', e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Hospital Address
              </label>
              <input
                type="text"
                value={settings.hospitalAddress}
                onChange={(e) => handleSettingChange('hospitalAddress', e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={settings.hospitalPhone}
                onChange={(e) => handleSettingChange('hospitalPhone', e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={settings.hospitalEmail}
                onChange={(e) => handleSettingChange('hospitalEmail', e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Emergency Number
              </label>
              <input
                type="tel"
                value={settings.emergencyNumber}
                onChange={(e) => handleSettingChange('emergencyNumber', e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>
          </div>
        </div>

        {/* Appointment Settings */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Appointment Settings
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Appointment Slot Duration (minutes)
              </label>
              <select
                value={settings.appointmentSlotDuration}
                onChange={(e) => handleSettingChange('appointmentSlotDuration', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
              >
                <option value={15}>15 minutes</option>
                <option value={30}>30 minutes</option>
                <option value={45}>45 minutes</option>
                <option value={60}>60 minutes</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Maximum Advance Booking (days)
              </label>
              <input
                type="number"
                value={settings.maxAdvanceBooking}
                onChange={(e) => handleSettingChange('maxAdvanceBooking', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                min="1"
                max="90"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Cancellation Deadline (hours)
              </label>
              <input
                type="number"
                value={settings.cancelationDeadline}
                onChange={(e) => handleSettingChange('cancelationDeadline', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                min="1"
                max="72"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-foreground">Accept Insurance</label>
                <p className="text-xs text-muted-foreground">Allow insurance payments</p>
              </div>
              <button
                onClick={() => handleSettingChange('acceptInsurance', !settings.acceptInsurance)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.acceptInsurance ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.acceptInsurance ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-foreground">Accept Mobile Money</label>
                <p className="text-xs text-muted-foreground">Allow mobile money payments</p>
              </div>
              <button
                onClick={() => handleSettingChange('acceptMobileMoney', !settings.acceptMobileMoney)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.acceptMobileMoney ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.acceptMobileMoney ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSave}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <Settings className="h-4 w-4" />
          Save All Settings
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;