import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';

function ServicesPage() {
  const location = useLocation();
  
  return (
    <div className="page">
      <h2>Our Services</h2>
      
      <div className="services-layout">
        <nav className="services-nav">
          <Link to="/services/web" className={location.pathname === '/services/web' ? 'active' : ''}>
            Web Development
          </Link>
          <Link to="/services/mobile" className={location.pathname === '/services/mobile' ? 'active' : ''}>
            Mobile Development
          </Link>
          <Link to="/services/consulting" className={location.pathname === '/services/consulting' ? 'active' : ''}>
            Consulting
          </Link>
        </nav>
        
        <div className="services-content">
          <Routes>
            <Route path="web" element={<WebDevelopment />} />
            <Route path="mobile" element={<MobileDevelopment />} />
            <Route path="consulting" element={<Consulting />} />
            <Route
              index
              element={
                <div>Please select a service from the menu to learn more.</div>
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
      <h3>Web Development Services</h3>
      <p>We offer comprehensive web development solutions including:</p>
      <ul>
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
      <h3>Mobile Development Services</h3>
      <p>Our mobile development expertise includes:</p>
      <ul>
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
      <h3>Consulting Services</h3>
      <p>Our consulting services help businesses:</p>
      <ul>
        <li>Technical architecture planning</li>
        <li>Digital transformation strategy</li>
        <li>Technology stack selection</li>
        <li>Performance optimization</li>
      </ul>
    </div>
  );
}

export default ServicesPage;