import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css';

const HomePage = lazy(() => import('./components/HomePage'));
const DataViewerPage = lazy(() => import('./components/DataViewerPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const FAQPage = lazy(() => import('./components/FAQPage'));
const ServicesPage = lazy(() => import('./components/ServicesPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/viewer">Data Viewer</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <main>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/viewer" element={<DataViewerPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/services/*" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
