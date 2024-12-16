import React from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';

export default function ScamAlerts() {
  const alerts = [
    {
      title: "Cryptocurrency Investment Scam",
      platform: "Facebook",
      timestamp: "2 hours ago",
      risk: "High",
    },
    {
      title: "Fake E-commerce Advertisement",
      platform: "Instagram",
      timestamp: "5 hours ago",
      risk: "Medium",
    },
    {
      title: "Phishing Campaign Detected",
      platform: "Twitter",
      timestamp: "1 day ago",
      risk: "High",
    }
  ];

  return (
    <section id="alerts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Scam Alerts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest threats detected by our system
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {alerts.map((alert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <AlertCircle className={`h-6 w-6 ${
                  alert.risk === 'High' ? 'text-red-500' : 'text-yellow-500'
                }`} />
                <span className="ml-2 text-sm font-medium text-gray-500">{alert.platform}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{alert.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{alert.timestamp}</span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  alert.risk === 'High' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {alert.risk} Risk
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="inline-flex items-center text-blue-600 hover:text-blue-700">
            View All Alerts
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}