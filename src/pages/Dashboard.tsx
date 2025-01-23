import React, { useState } from 'react';
import { AlertTriangle, Droplets, Mountain, Wind, Flame, Cloud, MessageSquare, Navigation, Package } from 'lucide-react';
import DisasterCard from '../components/DisasterCard';
import ChatBot from '../components/ChatBot';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [showChat, setShowChat] = useState(false);

  const disasters = [
    {
      title: 'Floods',
      icon: <Droplets className="w-8 h-8" />,
      description: 'Real-time flood risk assessment',
      riskLevel: 'moderate',
      image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5'
    },
    {
      title: 'Earthquakes',
      icon: <AlertTriangle className="w-8 h-8" />,
      description: 'Seismic activity monitoring',
      riskLevel: 'low',
      image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2024-01/240117-japan-earthquake-05-aa-1b5d87.jpg'
    },
    {
      title: 'Hurricanes',
      icon: <Wind className="w-8 h-8" />,
      description: 'Storm surge warnings',
      riskLevel: 'high',
      image: 'https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75'
    },
    {
      title: 'Forest Fire',
      icon: <Flame className="w-8 h-8" />,
      description: 'Real-time Forest fire risk assessment',
      riskLevel: 'extreme',
      image: 'https://media.licdn.com/dms/image/v2/C4E12AQEuUMB2nOekWA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1628366906958?e=2147483647&v=beta&t=TBPXEz-uQiuiomWn8z7ZF6_DW-k1L8vcOQjBDQxJ4oI'
    },
    {
      title: 'Landslides',
      icon: <Mountain className="w-8 h-8" />,
      description: 'Seismic activity monitoring',
      riskLevel: 'moderate',
      image: 'https://www.abhibus.com/blog/wp-content/uploads/2023/06/Safety-Tips-and-Precautions-During-landslide-1-696x464.jpg'
    },
    {
      title: 'Thunderstorm',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Storm surge warnings',
      riskLevel: 'high',
      image: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28'
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Active Monitoring</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disasters.map((disaster, index) => (
            <DisasterCard key={index} {...disaster} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Emergency Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Navigation className="w-8 h-8" />
              <h3 className="text-xl font-semibold ml-3">Evacuation Plans</h3>
            </div>
            <p className="text-gray-600 mb-4">Download evacuation routes and shelters</p>
            <Link
              to="/evacuation-plans"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Package className="w-8 h-8" />
              <h3 className="text-xl font-semibold ml-3">Emergency Kits</h3>
            </div>
            <p className="text-gray-600 mb-4">Essential items for disaster survival</p>
            <Link
              to="/emergency-kits"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {showChat && <ChatBot onClose={() => setShowChat(false)} />}
    </main>
  );
}

export default Dashboard;