import React from 'react';
import { Bell, Settings } from 'lucide-react';

function Alerts() {
  const alerts = [
    {
      type: 'Flood Warning',
      location: 'Riverside District',
      severity: 'high',
      time: '2 hours ago',
      message: 'Rising water levels detected. Prepare for possible evacuation.'
    },
    {
      type: 'Fire Alert',
      location: 'Northern Forest Region',
      severity: 'extreme',
      time: '30 minutes ago',
      message: 'Forest fire spreading rapidly. Stay clear of affected areas.'
    },
    {
      type: 'Storm Advisory',
      location: 'Coastal Area',
      severity: 'moderate',
      time: '1 hour ago',
      message: 'Strong winds and heavy rain expected in the next 24 hours.'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'moderate': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'extreme': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Active Alerts</h1>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          <Settings className="w-4 h-4" />
          <span>Alert Settings</span>
        </button>
      </div>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Bell className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold">{alert.type}</h2>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(alert.severity)}`}>
                {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600"><strong>Location:</strong> {alert.location}</p>
              <p className="text-gray-600"><strong>Time:</strong> {alert.time}</p>
              <p className="text-gray-700">{alert.message}</p>
            </div>
            <div className="mt-4 flex justify-end space-x-4">
              <button className="text-blue-600 hover:text-blue-800">
                View Details
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Take Action
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alerts;