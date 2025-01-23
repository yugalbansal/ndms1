import React from 'react';
import { useParams } from 'react-router-dom';
import { AlertTriangle, Droplets, Mountain, Wind, Flame, Cloud, AlertCircle, ArrowRight } from 'lucide-react';

function DisasterDetails() {
  const { type } = useParams();

  const getDisasterInfo = () => {
    switch (type?.toLowerCase()) {
      case 'floods':
        return {
          title: 'Flood Information',
          icon: <Droplets className="w-12 h-12 text-blue-600" />,
          description: 'Real-time monitoring of water levels and flood risks in your area.',
          currentStatus: 'Moderate Risk',
          statusColor: 'bg-yellow-100 text-yellow-800',
          details: [
            'Current water level: 2.5m above normal',
            'Expected rainfall: 150mm in next 24 hours',
            'Affected areas: Riverside, Downtown',
            'Evacuation status: Standby'
          ],
          safetyTips: [
            'Move to higher ground immediately if flooding occurs',
            'Do not walk or drive through flood waters',
            'Keep emergency supplies ready',
            'Monitor local news and weather updates'
          ]
        };
      case 'earthquakes':
        return {
          title: 'Earthquake Information',
          icon: <AlertTriangle className="w-12 h-12 text-blue-600" />,
          description: 'Seismic activity monitoring and earthquake preparedness information.',
          currentStatus: 'Low Risk',
          statusColor: 'bg-green-100 text-green-800',
          details: [
            'Recent activity: Minor tremors detected',
            'Magnitude range: 2.0-3.0',
            'Depth: 10km',
            'Affected areas: None currently'
          ],
          safetyTips: [
            'Drop, Cover, and Hold On during shaking',
            'Stay away from windows and exterior walls',
            'Have an emergency kit ready',
            'Know your building\'s safe spots'
          ]
        };
      // Add cases for other disaster types...
      default:
        return {
          title: 'Disaster Information',
          icon: <AlertCircle className="w-12 h-12 text-blue-600" />,
          description: 'Information not available.',
          currentStatus: 'Unknown',
          statusColor: 'bg-gray-100 text-gray-800',
          details: [],
          safetyTips: []
        };
    }
  };

  const disasterInfo = getDisasterInfo();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            {disasterInfo.icon}
            <div className="ml-4">
              <h1 className="text-3xl font-bold">{disasterInfo.title}</h1>
              <p className="text-gray-600">{disasterInfo.description}</p>
            </div>
          </div>

          <div className="mb-8">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${disasterInfo.statusColor}`}>
              Current Status: {disasterInfo.currentStatus}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Current Conditions</h2>
              <ul className="space-y-3">
                {disasterInfo.details.map((detail, index) => (
                  <li key={index} className="flex items-center">
                    <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Safety Tips</h2>
              <ul className="space-y-3">
                {disasterInfo.safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-blue-600 mr-2" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            View Live Updates
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
            Download Safety Guide
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisasterDetails;