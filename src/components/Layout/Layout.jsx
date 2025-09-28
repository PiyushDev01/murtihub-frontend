import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Add padding-top to account for fixed navbar, except on home page */}
      <main className={`flex-grow ${!isHomePage ? '' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;