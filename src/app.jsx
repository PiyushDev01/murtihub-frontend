import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import CustomToaster from './components/UI/CustomToaster';
import Home from './pages/Home';
import Features from './pages/Features';
import DemoBots from './pages/DemoBots';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/demo-bots" element={<DemoBots />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/get-started" element={<Contact />} />
            </Routes>
          </Layout>
          <CustomToaster />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
