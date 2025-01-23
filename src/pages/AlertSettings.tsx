import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bell, Smartphone, Mail, Volume2 } from 'lucide-react';

function AlertSettings() {
  const { type } = useParams();
  const [notifications, setNotifications] = useState({
    sms: true,
    email: true,
    push: true,
    sound: true,
  });

  const [threshold, setThreshold] = useState('moderate');
  const [frequency, setFrequency] = useState('immediate');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold mb-6">Alert Settings for {type}</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Notification Methods</h2>
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={notifications.sms}
                    onChange={(e) => setNotifications({ ...notifications, sms: e.target.checked })}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <Smartphone className="w-5 h-5 text-gray-500" />
                  <span>SMS Notifications</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={notifications.email}
                    onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <Mail className="w-5 h-5 text-gray-500" />
                  <span>Email Notifications</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={notifications.push}
                    onChange={(e) => setNotifications({ ...notifications, push: e.target.checked })}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <Bell className="w-5 h-5 text-gray-500" />
                  <span>Push Notifications</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={notifications.sound}
                    onChange={(e) => setNotifications({ ...notifications, sound: e.target.checked })}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <Volume2 className="w-5 h-5 text-gray-500" />
                  <span>Sound Alerts</span>
                </label>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Alert Threshold</h2>
              <select
                value={threshold}
                onChange={(e) => setThreshold(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="low">Low Risk Only</option>
                <option value="moderate">Moderate Risk and Above</option>
                <option value="high">High Risk and Above</option>
                <option value="extreme">Extreme Risk Only</option>
              </select>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Update Frequency</h2>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="immediate">Immediate</option>
                <option value="hourly">Hourly</option>
                <option value="daily">Daily Summary</option>
                <option value="weekly">Weekly Summary</option>
              </select>
            </div>

            <div className="pt-6">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertSettings;
