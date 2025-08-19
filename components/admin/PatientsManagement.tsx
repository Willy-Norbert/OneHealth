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
  Calendar,
  User
} from 'lucide-react';

interface Patient {
  _id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: 'Male' | 'Female';
  address: string;
  bloodType: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  isActive: boolean;
  createdAt: string;
  lastVisit?: string;
}

const PatientsManagement = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockPatients: Patient[] = [
      {
        _id: '1',
        name: 'Alice Johnson',
        email: 'alice.johnson@email.com',
        phone: '+1-555-0201',
        age: 32,
        gender: 'Female',
        address: '123 Main St, City, State',
        bloodType: 'A+',
        emergencyContact: {
          name: 'Bob Johnson',
          phone: '+1-555-0202',
          relationship: 'Spouse'
        },
        isActive: true,
        createdAt: '2024-01-15',
        lastVisit: '2024-03-10'
      },
      {
        _id: '2',
        name: 'Robert Smith',
        email: 'robert.smith@email.com',
        phone: '+1-555-0203',
        age: 45,
        gender: 'Male',
        address: '456 Oak Ave, City, State',
        bloodType: 'O-',
        emergencyContact: {
          name: 'Mary Smith',
          phone: '+1-555-0204',
          relationship: 'Wife'
        },
        isActive: true,
        createdAt: '2024-02-01',
        lastVisit: '2024-03-15'
      },
      {
        _id: '3',
        name: 'Emma Davis',
        email: 'emma.davis@email.com',
        phone: '+1-555-0205',
        age: 28,
        gender: 'Female',
        address: '789 Pine St, City, State',
        bloodType: 'B+',
        emergencyContact: {
          name: 'John Davis',
          phone: '+1-555-0206',
          relationship: 'Father'
        },
        isActive: false,
        createdAt: '2024-01-20'
      }
    ];
    
    setTimeout(() => {
      setPatients(mockPatients);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm)
  );

  const handleAddPatient = () => {
    setSelectedPatient(null);
    setShowAddModal(true);
  };

  const handleEditPatient = (patient: Patient) => {
    setSelectedPatient(patient);
    setShowAddModal(true);
  };

  const handleDeletePatient = (patientId: string) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      setPatients(patients.filter(patient => patient._id !== patientId));
    }
  };

  const handleToggleStatus = (patientId: string) => {
    setPatients(patients.map(patient => 
      patient._id === patientId 
        ? { ...patient, isActive: !patient.isActive }
        : patient
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
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Patients Management</h1>
        <p className="text-gray-600">Manage patient records and information</p>
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search patients..."
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
            onClick={handleAddPatient}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Patient
          </button>
        </div>
      </div>

      {/* Patients Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Demographics
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Visit
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
              {filteredPatients.map((patient) => (
                <tr key={patient._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                        <div className="text-sm text-gray-500">ID: {patient._id.slice(-6)}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900 mb-1">
                      <Phone className="w-4 h-4 mr-1 text-gray-400" />
                      {patient.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Mail className="w-4 h-4 mr-1 text-gray-400" />
                      {patient.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {patient.age} years, {patient.gender}
                    </div>
                    <div className="text-sm text-gray-500">
                      Blood Type: {patient.bloodType}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.lastVisit ? (
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                        {new Date(patient.lastVisit).toLocaleDateString()}
                      </div>
                    ) : (
                      <span className="text-gray-400">No visits</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleToggleStatus(patient._id)}
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        patient.isActive
                          ? 'bg-green-100 text-green-800 hover:bg-green-200'
                          : 'bg-red-100 text-red-800 hover:bg-red-200'
                      }`}
                    >
                      {patient.isActive ? 'Active' : 'Inactive'}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEditPatient(patient)}
                        className="text-green-600 hover:text-green-900"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeletePatient(patient._id)}
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
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-screen overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">
              {selectedPatient ? 'Edit Patient' : 'Add New Patient'}
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                    defaultValue={selectedPatient?.name || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                    defaultValue={selectedPatient?.email || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                    defaultValue={selectedPatient?.phone || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                    defaultValue={selectedPatient?.age || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <select 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                    defaultValue={selectedPatient?.gender || ''}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Blood Type
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={2}
                  defaultValue={selectedPatient?.address || ''}
                />
              </div>
              <div className="border-t pt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Emergency Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                      defaultValue={selectedPatient?.emergencyContact.name || ''}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                      defaultValue={selectedPatient?.emergencyContact.phone || ''}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Relationship
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                      defaultValue={selectedPatient?.emergencyContact.relationship || ''}
                    />
                  </div>
                </div>
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
                  {selectedPatient ? 'Update' : 'Add'} Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientsManagement;