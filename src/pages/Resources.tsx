import React from 'react';
import { FileText, Package, MapPin, Phone, Book, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

function Resources() {
  const resources = [
    {
      title: 'Evacuation Plans',
      icon: <MapPin className="w-8 h-8" />,
      description: 'Access detailed evacuation routes and emergency shelter locations.',
      link: '/evacuation-plans'
    },
    {
      title: 'Emergency Kits',
      icon: <Package className="w-8 h-8" />,
      description: 'Essential supplies and items recommended for disaster preparedness.',
      link: '/emergency-kits'
    },
    {
      title: 'Safety Guidelines',
      icon: <FileText className="w-8 h-8" />,
      description: 'Comprehensive safety protocols for different types of disasters.',
      link: '/safety-guidelines'
    },
    {
      title: 'Emergency Contacts',
      icon: <Phone className="w-8 h-8" />,
      description: 'Important phone numbers and contact information for emergency services.',
      link: '/emergency-contacts'
    },
    {
      title: 'Training Materials',
      icon: <Book className="w-8 h-8" />,
      description: 'Educational resources for disaster preparedness and response.',
      link: '/training'
    },
    {
      title: 'Video Tutorials',
      icon: <Video className="w-8 h-8" />,
      description: 'Step-by-step video guides for emergency procedures.',
      link: '/tutorials'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Emergency Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Link
            key={index}
            to={resource.link}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-4">
              <div className="text-blue-600">{resource.icon}</div>
              <h2 className="text-xl font-semibold ml-3">{resource.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <span className="text-blue-600 font-medium">Learn More →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Resources;