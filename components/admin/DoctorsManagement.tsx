"use client";

import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Mail,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react';

interface Doctor {
  _id: string;
  name: string;
  email: string;
  specialization: string;
  phone: string;
  department: string;
  experience: number;
  isActive: boolean;
  createdAt: string;
}

const DoctorsManagement = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockDoctors: Doctor[] = [
      {
        _id: '1',
        name: 'Dr. John Smith',
        email: 'john.smith@healthline.com',
        specialization: 'Cardiology',
        phone: '+1-555-0101',
        department: 'Cardiology',
        experience: 10,
        isActive: true,
        createdAt: '2024-01-15'
      },
      {
        _id: '2',
        name: 'Dr. Sarah Johnson',
        email: 'sarah.johnson@healthline.com',
        specialization: 'Pediatrics',
        phone: '+1-555-0102',
        department: 'Pediatrics',
        experience: 8,
        isActive: true,
        createdAt: '2024-02-20'
      },
      {
        _id: '3',
        name: 'Dr. Michael Brown',
        email: 'michael.brown@healthline.com',
        specialization: 'Neurology',
        phone: '+1-555-0103',
        department: 'Neurology',
        experience: 15,
        isActive: false,
        createdAt: '2024-01-10'
      }
    ];
    
    setTimeout(() => {
      setDoctors(mockDoctors);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddDoctor = () => {
    setSelectedDoctor(null);
    setShowAddModal(true);
  };

  const handleEditDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setShowAddModal(true);
  };

  const handleDeleteDoctor = (doctorId: string) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      setDoctors(doctors.filter(doctor => doctor._id !== doctorId));
    }
  };

  const handleToggleStatus = (doctorId: string) => {
    setDoctors(doctors.map(doctor => 
      doctor._id === doctorId 
        ? { ...doctor, isActive: !doctor.isActive }
        : doctor
    ));
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
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Doctors Management</h1>
        <p className="text-gray-600">Manage doctors and their information</p>
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>
          <button
            onClick={handleAddDoctor}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Doctor
          </button>
        </div>
      </div>

      {/* Doctors Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Specialization
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Experience
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDoctors.map((doctor) => (
                <tr key={doctor._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
                        <div className="text-sm text-gray-500">{doctor.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{doctor.specialization}</div>
                    <div className="text-sm text-gray-500">{doctor.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900 mb-1">
                      <Phone className="w-4 h-4 mr-1 text-gray-400" />
                      {doctor.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Mail className="w-4 h-4 mr-1 text-gray-400" />
                      {doctor.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {doctor.experience} years
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleToggleStatus(doctor._id)}
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        doctor.isActive
                          ? 'bg-green-100 text-green-800 hover:bg-green-200'
                          : 'bg-red-100 text-red-800 hover:bg-red-200'
                      }`}
                    >
                      {doctor.isActive ? 'Active' : 'Inactive'}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEditDoctor(doctor)}
                        className="text-green-600 hover:text-green-900"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteDoctor(doctor._id)}
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

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-lg font-semibold mb-4">
              {selectedDoctor ? 'Edit Doctor' : 'Add New Doctor'}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  defaultValue={selectedDoctor?.name || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  defaultValue={selectedDoctor?.email || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Specialization
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Cardiology</option>
                  <option>Pediatrics</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Dermatology</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  defaultValue={selectedDoctor?.phone || ''}
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  {selectedDoctor ? 'Update' : 'Add'} Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorsManagement;