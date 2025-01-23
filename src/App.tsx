import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Alerts from './pages/Alerts';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import DisasterDetails from './pages/DisasterDetails';
import AlertSettings from './pages/AlertSettings';
import EvacuationPlans from './pages/EvacuationPlans';
import EmergencyKits from './pages/EmergencyKits';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/disaster/:type" element={<DisasterDetails />} />
        <Route path="/alert-settings/:type" element={<AlertSettings />} />
        <Route path="/evacuation-plans" element={<EvacuationPlans />} />
        <Route path="/emergency-kits" element={<EmergencyKits />} />
      </Routes>
    </div>
  );
}

export default App;