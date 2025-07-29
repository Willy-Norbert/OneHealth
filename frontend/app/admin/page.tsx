"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back, {user.name}. Manage your healthcare system from here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-2">User Management</h3>
            <p className="text-muted-foreground mb-4">Manage doctors, patients, and admin users</p>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Manage Users
            </button>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-2">System Settings</h3>
            <p className="text-muted-foreground mb-4">Configure system-wide settings and preferences</p>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Settings
            </button>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-2">Reports</h3>
            <p className="text-muted-foreground mb-4">View system analytics and reports</p>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}