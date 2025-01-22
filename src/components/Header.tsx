import React from 'react';
import { Shield } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="w-10 h-10 text-blue-600" />
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-gray-900">National Disaster Management</h1>
              <p className="text-sm text-gray-600">Protecting Communities Through Early Warning</p>
            </div>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Dashboard</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Alerts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Resources</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;