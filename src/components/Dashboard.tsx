import React from 'react';
import { BarChart3, PieChart, Activity } from 'lucide-react';

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Threat Analytics Dashboard</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time insights into malicious advertising activities
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Threats Blocked</h3>
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
            <p className="text-sm text-gray-600 mt-2">Last 30 days</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Risk Level</h3>
              <PieChart className="h-6 w-6 text-teal-600" />
            </div>
            <p className="text-3xl font-bold text-teal-600">Medium</p>
            <p className="text-sm text-gray-600 mt-2">Current Status</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Active Scans</h3>
              <Activity className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600">24/7</p>
            <p className="text-sm text-gray-600 mt-2">Monitoring Status</p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
            alt="Analytics Dashboard"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}