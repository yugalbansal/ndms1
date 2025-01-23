import React, { useState } from 'react';
import { AlertTriangle, Droplets, Mountain, Wind, Flame, Cloud, Navigation, Package, MessageSquare } from 'lucide-react';
import DisasterCard from './components/DisasterCard';
import ChatBot from './components/ChatBot';
import Header from './components/Header';
import FloodPage from './components/FloodPage';
function App() {
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
      image: 'https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2023/11/APTOPIX_Nepal_Earthquake_23309471089452-scaled.jpg?size=*:900'
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
      image: 'https://cdn.who.int/media/images/default-source/health-and-climate-change/fire-fighters-at-forest-fire-c-quarrie-photography.tmb-1920v.jpg?sfvrsn=8b60f828_4'
    },
    {
      title: 'Landslides',
      icon: <Mountain className="w-8 h-8" />,
      description: 'Seismic activity monitoring',
      riskLevel: 'moderate',
      image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/15/full/1721033885-7643.jpg'
    },
    {
      title: 'Thunderstorm',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Storm surge warnings',
      riskLevel: 'high',
      image: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28'
    }
  ];

  const resources = [
    {
      title: 'Evacuation Plans',
      icon: <Navigation className="w-8 h-8" />,
      description: 'Download evacuation routes and shelters',
      link: '#'
    },
    {
      title: 'Emergency Kits',
      icon: <Package className="w-8 h-8" />,
      description: 'Essential items for disaster survival',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
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
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {resource.icon}
                  <h3 className="text-xl font-semibold ml-3">{resource.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </a>
              </div>
            ))}
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
    </div>
  );
}

export default App;