"use client";

import React, { useState } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminDashboard from './AdminDashboard';
import DoctorsManagement from './DoctorsManagement';
import PatientsManagement from './PatientsManagement';
import AppointmentsManagement from './AppointmentsManagement';

const AdminLayout = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'patients':
        return <PatientsManagement />;
      case 'doctors':
        return <DoctorsManagement />;
      case 'appointments':
        return <AppointmentsManagement />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 ml-64">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminLayout;