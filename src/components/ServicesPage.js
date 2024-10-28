import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';

function ServicesPage() {
  const location = useLocation();
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Our Services</h2>
      
      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <nav className="space-y-2">
            <Link 
              to="/services/web"
              className={`block p-2 rounded ${
                location.pathname === '/services/web' 
                  ? 'bg-blue-500 text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              Web Development
            </Link>
            <Link 
              to="/services/mobile"
              className={`block p-2 rounded ${
                location.pathname === '/services/mobile' 
                  ? 'bg-blue-500 text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              Mobile Development
            </Link>
            <Link 
              to="/services/consulting"
              className={`block p-2 rounded ${
                location.pathname === '/services/consulting' 
                  ? 'bg-blue-500 text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              Consulting
            </Link>
          </nav>
        </div>
        
        <div className="md:col-span-3">
          <Routes>
            <Route path="web" element={<WebDevelopment />} />
            <Route path="mobile" element={<MobileDevelopment />} />
            <Route path="consulting" element={<Consulting />} />
            <Route 
              index 
              element={
                <div className="text-gray-600">
                  Please select a service from the menu to learn more.
                </div>
              } 
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function WebDevelopment() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Web Development Services</h3>
      <p className="text-gray-700 mb-4">
        We offer comprehensive web development solutions including:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Custom website development</li>
        <li>E-commerce solutions</li>
        <li>Web application development</li>
        <li>CMS implementation</li>
      </ul>
    </div>
  );
}

function MobileDevelopment() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Mobile Development Services</h3>
      <p className="text-gray-700 mb-4">
        Our mobile development expertise includes:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>iOS app development</li>
        <li>Android app development</li>
        <li>Cross-platform solutions</li>
        <li>Mobile app maintenance</li>
      </ul>
    </div>
  );
}

function Consulting() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Consulting Services</h3>
      <p className="text-gray-700 mb-4">
        Our consulting services help businesses:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Technical architecture planning</li>
        <li>Digital transformation strategy</li>
        <li>Technology stack selection</li>
        <li>Performance optimization</li>
      </ul>
    </div>
  );
}
export default ServicesPage;
