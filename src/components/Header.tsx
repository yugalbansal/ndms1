import React from 'react';
import { Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Shield className="w-10 h-10 text-blue-600" />
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-gray-900">National Disaster Management</h1>
              <p className="text-sm text-gray-600">Protecting Communities Through Early Warning</p>
            </div>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className={isActive('/')}>Dashboard</Link></li>
              <li><Link to="/alerts" className={isActive('/alerts')}>Alerts</Link></li>
              <li><Link to="/resources" className={isActive('/resources')}>Resources</Link></li>
              <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;