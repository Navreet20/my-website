import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Lazy load components
const HomePage = lazy(() => import('./components/HomePage'));
const DataViewerPage = lazy(() => import('./components/DataViewerPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const FAQPage = lazy(() => import('./components/FAQPage'));
const ServicesPage = lazy(() => import('./components/ServicesPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md">
          <ul className="flex space-x-6 p-4">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/viewer" className="hover:text-blue-500">Data Viewer</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            <li><Link to="/faq" className="hover:text-blue-500">FAQ</Link></li>
            <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
        </nav>

        <main className="container mx-auto py-6">
          <Suspense fallback={
            <div className="flex justify-center items-center h-64">
              <div className="text-gray-600">Loading...</div>
            </div>
          }>
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