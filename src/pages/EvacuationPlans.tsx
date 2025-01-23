import React from 'react';
import { MapPin, Navigation, Home, Building2, Car } from 'lucide-react';

function EvacuationPlans() {
  const evacuationRoutes = [
    {
      zone: 'Zone A - Riverside District',
      routes: [
        'Exit via Main Street Bridge to Highland Shelter',
        'Alternative: Use River Road to Memorial Center'
      ],
      shelter: 'Highland Community Center',
      capacity: '500 people',
      facilities: ['Medical Station', 'Food & Water', 'Emergency Power']
    },
    {
      zone: 'Zone B - Downtown Area',
      routes: [
        'North on 5th Avenue to Central Shelter',
        'Alternative: West on Park Road to Sports Complex'
      ],
      shelter: 'Central High School',
      capacity: '750 people',
      facilities: ['Medical Station', 'Food & Water', 'Emergency Power', 'Pet Area']
    },
    {
      zone: 'Zone C - Eastern District',
      routes: [
        'East on Harbor Drive to East Shelter',
        'Alternative: South on Beach Road to Recreation Center'
      ],
      shelter: 'Eastern Recreation Center',
      capacity: '300 people',
      facilities: ['Medical Station', 'Food & Water']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold mb-6">Evacuation Plans</h1>
          <p className="text-gray-600 mb-8">
            Know your evacuation routes and nearest emergency shelters. Always follow official instructions during an emergency.
          </p>

          <div className="space-y-8">
            {evacuationRoutes.map((zone, index) => (
              <div key={index} className="border-b pb-8 last:border-b-0">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold">{zone.zone}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-3 flex items-center">
                      <Navigation className="w-5 h-5 text-blue-600 mr-2" />
                      Primary Routes
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      {zone.routes.map((route, idx) => (
                        <li key={idx} className="flex items-start">
                          <Car className="w-4 h-4 text-gray-400 mr-2 mt-1" />
                          {route}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3 flex items-center">
                      <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                      Emergency Shelter
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-center">
                        <Home className="w-4 h-4 text-gray-400 mr-2" />
                        {zone.shelter}
                      </p>
                      <p>Capacity: {zone.capacity}</p>
                      <div>
                        <p className="font-medium mb-1">Available Facilities:</p>
                        <ul className="list-disc list-inside pl-4">
                          {zone.facilities.map((facility, idx) => (
                            <li key={idx}>{facility}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Download Evacuation Map
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
            Print Instructions
          </button>
        </div>
      </div>
    </div>
  );
}

export default EvacuationPlans;