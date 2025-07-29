import React from 'react';
import { 
  Home,
  Users,
  Calendar,
  Settings,
  BarChart3,
  UserCheck,
  MessageSquare,
  FileText,
  Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface AdminSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Home,
      href: '/admin'
    },
    {
      id: 'patients',
      label: 'Patients',
      icon: Users,
      href: '/admin/patients'
    },
    {
      id: 'doctors',
      label: 'Doctors',
      icon: UserCheck,
      href: '/admin/doctors'
    },
    {
      id: 'appointments',
      label: 'Appointments',
      icon: Calendar,
      href: '/admin/appointments'
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: MessageSquare,
      href: '/admin/messages'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart3,
      href: '/admin/analytics'
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: FileText,
      href: '/admin/reports'
    },
    {
      id: 'security',
      label: 'Security',
      icon: Shield,
      href: '/admin/security'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      href: '/admin/settings'
    }
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0 z-50">
      {/* Logo */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <span className="text-xl font-bold text-gray-900">ONE HEALTHLINE CONNECT</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Admin Panel</p>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        <div className="px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={cn(
                  "w-full flex items-center px-3 py-3 rounded-lg text-left text-sm font-medium transition-colors mb-1",
                  isActive 
                    ? "bg-primary text-white shadow-md" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <Icon className={cn(
                  "w-5 h-5 mr-3",
                  isActive ? "text-white" : "text-gray-500"
                )} />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* User Profile */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">AD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
            <p className="text-xs text-gray-500 truncate">admin@healtheease.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;