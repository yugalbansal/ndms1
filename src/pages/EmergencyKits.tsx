import React from 'react';
import { Package, Check, Info } from 'lucide-react';

function EmergencyKits() {
  const essentialItems = [
    {
      category: 'Water and Food',
      items: [
        'One gallon of water per person per day for at least three days',
        'Three-day supply of non-perishable food',
        'Manual can opener',
        'Basic utensils'
      ]
    },
    {
      category: 'Health and First Aid',
      items: [
        'First aid kit',
        'Prescription medications',
        'Pain relievers',
        'Emergency blankets',
        'Hand sanitizer and masks'
      ]
    },
    {
      category: 'Tools and Supplies',
      items: [
        'Flashlight and extra batteries',
        'Multi-tool or basic tools',
        'Emergency radio (hand-crank or battery-powered)',
        'Cell phone chargers and backup battery',
        'Matches in a waterproof container'
      ]
    },
    {
      category: 'Documents and Information',
      items: [
        'Copies of important documents',
        'Emergency contact information',
        'Area maps',
        'Insurance policies',
        'Identification documents'
      ]
    }
  ];

  const tips = [
    'Store items in airtight plastic bags',
    'Keep kit in a designated place and ready to go',
    'Check and update your kit every six months',
    'Consider unique needs of each family member'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Package className="w-10 h-10 text-blue-600" />
            <div className="ml-4">
              <h1 className="text-3xl font-bold">Emergency Kit Guide</h1>
              <p className="text-gray-600">Essential items for disaster preparedness</p>
            </div>
          </div>

          <div className="space-y-8">
            {essentialItems.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold mb-4">{section.category}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Info className="w-6 h-6 text-blue-600 mr-2" />
              Important Tips
            </h2>
            <ul className="space-y-2">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Download Checklist
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
            Find Local Suppliers
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmergencyKits;