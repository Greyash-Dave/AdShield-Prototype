import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScamAlerts from './components/ScamAlerts';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ScamAlerts />
      <Dashboard />
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AdShield</h3>
              <p className="text-gray-400">Protecting users from malicious advertisements and social media scams.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#alerts" className="hover:text-white">Scam Alerts</a></li>
                <li><a href="#dashboard" className="hover:text-white">Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">support@adshield.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AdShield. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;