"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Search, 
  Filter, 
  MoreHorizontal, 
  UserCheck, 
  UserX, 
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Trash2
} from "lucide-react";

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");
  const [expandedUser, setExpandedUser] = useState<string | null>(null);

  const users = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@irabaruta.com",
      role: "doctor",
      status: "active",
      phone: "+250 788 123 456",
      location: "Kigali",
      joinDate: "2023-01-15",
      specialty: "Cardiology",
      patients: 127
    },
    {
      id: "2", 
      name: "John Doe",
      email: "john.doe@email.com",
      role: "patient",
      status: "active",
      phone: "+250 788 987 654",
      location: "Butare",
      joinDate: "2023-03-22",
      lastVisit: "2023-12-01"
    },
    {
      id: "3",
      name: "Admin User",
      email: "admin@irabaruta.com", 
      role: "admin",
      status: "active",
      phone: "+250 788 555 111",
      location: "Kigali",
      joinDate: "2022-12-01"
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = selectedTab === "all" || user.role === selectedTab;
    return matchesSearch && matchesTab;
  });

  const toggleUserExpansion = (userId: string) => {
    setExpandedUser(expandedUser === userId ? null : userId);
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "doctor": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "patient": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "admin": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "active" 
      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Management</h1>
          <p className="text-muted-foreground">Manage doctors, patients, and administrators</p>
        </div>
        <Button className="gap-2">
          <Users className="w-4 h-4" />
          Add New User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </CardHeader>
        
        <CardContent>
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Users ({users.length})</TabsTrigger>
              <TabsTrigger value="doctor">Doctors ({users.filter(u => u.role === 'doctor').length})</TabsTrigger>
              <TabsTrigger value="patient">Patients ({users.filter(u => u.role === 'patient').length})</TabsTrigger>
              <TabsTrigger value="admin">Admins ({users.filter(u => u.role === 'admin').length})</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedTab} className="mt-6">
              <div className="space-y-4">
                {filteredUsers.map((user) => (
                  <Card 
                    key={user.id}
                    className="transition-all duration-200 hover:shadow-md"
                  >
                    <CardContent className="p-4">
                      <div 
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleUserExpansion(user.id)}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <Users className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-foreground">{user.name}</h3>
                              <Badge className={getRoleColor(user.role)}>
                                {user.role}
                              </Badge>
                              <Badge className={getStatusColor(user.status)}>
                                {user.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {expandedUser === user.id && (
                        <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{user.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{user.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">Joined {user.joinDate}</span>
                            </div>
                          </div>
                          
                          {user.role === "doctor" && (
                            <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="text-sm font-medium">Specialty: {user.specialty}</p>
                                  <p className="text-sm text-muted-foreground">Active Patients: {user.patients}</p>
                                </div>
                                <Button size="sm" variant="outline">
                                  View Profile
                                </Button>
                              </div>
                            </div>
                          )}
                          
                          {user.role === "patient" && user.lastVisit && (
                            <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                              <p className="text-sm">
                                <span className="font-medium">Last Visit:</span> {user.lastVisit}
                              </p>
                            </div>
                          )}

                          <div className="flex gap-2 mt-4">
                            <Button size="sm" variant="outline" className="gap-2">
                              <Mail className="w-3 h-3" />
                              Send Message
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className={user.status === 'active' ? 'text-red-600 hover:text-red-700' : 'text-green-600 hover:text-green-700'}
                            >
                              {user.status === 'active' ? (
                                <>
                                  <UserX className="w-3 h-3 mr-1" />
                                  Deactivate
                                </>
                              ) : (
                                <>
                                  <UserCheck className="w-3 h-3 mr-1" />
                                  Activate
                                </>
                              )}
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                              <Trash2 className="w-3 h-3 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}