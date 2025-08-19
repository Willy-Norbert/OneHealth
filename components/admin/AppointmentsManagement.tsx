"use client";

import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  Clock,
  User,
  UserCheck,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

interface Appointment {
  _id: string;
  patient: {
    _id: string;
    name: string;
    email: string;
  };
  doctor?: {
    _id: string;
    name: string;
    specialization: string;
  };
  hospital: {
    _id: string;
    name: string;
    location: string;
  };
  department: string;
  appointmentDate: string;
  appointmentTime: string;
  appointmentType: 'virtual' | 'in-person';
  reasonForVisit: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no-show';
  consultationFee: number;
  paymentStatus: 'pending' | 'paid' | 'failed';
  createdAt: string;
}

const AppointmentsManagement = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockAppointments: Appointment[] = [
      {
        _id: '1',
        patient: {
          _id: 'p1',
          name: 'Alice Johnson',
          email: 'alice.johnson@email.com'
        },
        doctor: {
          _id: 'd1',
          name: 'Dr. John Smith',
          specialization: 'Cardiology'
        },
        hospital: {
          _id: 'h1',
          name: 'Central Hospital',
          location: 'Downtown'
        },
        department: 'Cardiology',
        appointmentDate: '2024-07-30',
        appointmentTime: '09:00 AM',
        appointmentType: 'in-person',
        reasonForVisit: 'Regular checkup',
        status: 'confirmed',
        consultationFee: 150,
        paymentStatus: 'paid',
        createdAt: '2024-07-25'
      },
      {
        _id: '2',
        patient: {
          _id: 'p2',
          name: 'Robert Smith',
          email: 'robert.smith@email.com'
        },
        doctor: {
          _id: 'd2',
          name: 'Dr. Sarah Johnson',
          specialization: 'Pediatrics'
        },
        hospital: {
          _id: 'h1',
          name: 'Central Hospital',
          location: 'Downtown'
        },
        department: 'Pediatrics',
        appointmentDate: '2024-07-30',
        appointmentTime: '02:30 PM',
        appointmentType: 'virtual',
        reasonForVisit: 'Follow-up consultation',
        status: 'pending',
        consultationFee: 120,
        paymentStatus: 'pending',
        createdAt: '2024-07-26'
      },
      {
        _id: '3',
        patient: {
          _id: 'p3',
          name: 'Emma Davis',
          email: 'emma.davis@email.com'
        },
        hospital: {
          _id: 'h2',
          name: 'City Medical Center',
          location: 'Uptown'
        },
        department: 'General Medicine',
        appointmentDate: '2024-07-29',
        appointmentTime: '11:15 AM',
        appointmentType: 'in-person',
        reasonForVisit: 'Routine examination',
        status: 'completed',
        consultationFee: 100,
        paymentStatus: 'paid',
        createdAt: '2024-07-20'
      }
    ];
    
    setTimeout(() => {
      setAppointments(mockAppointments);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = 
      appointment.patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.doctor?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.reasonForVisit.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleEditAppointment = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setShowEditModal(true);
  };

  const handleUpdateStatus = (appointmentId: string, newStatus: string) => {
    setAppointments(appointments.map(appointment => 
      appointment._id === appointmentId 
        ? { ...appointment, status: newStatus as any }
        : appointment
    ));
  };

  const handleDeleteAppointment = (appointmentId: string) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      setAppointments(appointments.filter(appointment => appointment._id !== appointmentId));
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-blue-500" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'no-show':
        return <AlertCircle className="w-4 h-4 text-orange-500" />;
      default:
        return <Clock className="w-4 h-4 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'no-show':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  if (loading) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Appointments Management</h1>
        <p className="text-gray-600">Manage and track all patient appointments</p>
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search appointments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
              <option value="no-show">No Show</option>
            </select>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            New Appointment
          </button>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor/Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAppointments.map((appointment) => (
                <tr key={appointment._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {appointment.patient.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {appointment.patient.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {appointment.doctor ? appointment.doctor.name : 'Not Assigned'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {appointment.department}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900 mb-1">
                      <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                      {new Date(appointment.appointmentDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1 text-gray-400" />
                      {appointment.appointmentTime}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      appointment.appointmentType === 'virtual' 
                        ? 'bg-purple-100 text-purple-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {appointment.appointmentType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(appointment.status)}
                      <select
                        value={appointment.status}
                        onChange={(e) => handleUpdateStatus(appointment._id, e.target.value)}
                        className={`ml-2 text-xs font-semibold rounded-full px-2 py-1 border-0 ${getStatusColor(appointment.status)}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="no-show">No Show</option>
                      </select>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${appointment.consultationFee}
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      appointment.paymentStatus === 'paid' 
                        ? 'bg-green-100 text-green-800' 
                        : appointment.paymentStatus === 'failed'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {appointment.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEditAppointment(appointment)}
                        className="text-green-600 hover:text-green-900"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteAppointment(appointment._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-screen overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Edit Appointment</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                    defaultValue={selectedAppointment.appointmentDate}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Appointment Time
                  </label>
                  <input
                    type="time"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                    defaultValue={selectedAppointment.appointmentTime}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>General Medicine</option>
                    <option>Cardiology</option>
                    <option>Pediatrics</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Appointment Type
                  </label>
                  <select 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                    defaultValue={selectedAppointment.appointmentType}
                  >
                    <option value="in-person">In-Person</option>
                    <option value="virtual">Virtual</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                    defaultValue={selectedAppointment.status}
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="no-show">No Show</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Consultation Fee
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                    defaultValue={selectedAppointment.consultationFee}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reason for Visit
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={3}
                  defaultValue={selectedAppointment.reasonForVisit}
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  Update Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsManagement;