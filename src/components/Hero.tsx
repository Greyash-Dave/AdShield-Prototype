import React from 'react';
import { ShieldCheck, AlertTriangle, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Protect Yourself from Malicious Ads
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Advanced AI-powered protection against social media scams and fraudulent advertisements
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50">
              Start Scanning
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
                title: "Real-time Protection",
                description: "Continuous monitoring of social media ads for potential threats"
              },
              {
                icon: <AlertTriangle className="h-8 w-8 text-teal-500" />,
                title: "Instant Alerts",
                description: "Immediate notifications when suspicious activities are detected"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-blue-400" />,
                title: "Trend Analysis",
                description: "Advanced analytics to identify emerging scam patterns"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}