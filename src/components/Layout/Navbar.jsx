import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconSparkles, IconCurrencyDollar, IconBrain, IconUsers, IconBook, IconArrowRight } from '@tabler/icons-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import ThemeToggle from '../UI/ThemeToggle';
import UserProfile from '../Auth/UserProfile';
import AuthModal from '../Auth/AuthModal';
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode } = useTheme();
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className={`
          navbar-container  rounded-[2rem] md:rounded-full px-6 py-3 transition-all duration-300
          ${isDarkMode ? 'navbar-dark' : 'navbar-light'}
        `}>
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex items-center flex-1">
              <Link 
                to="/" 
                className="flex items-center space-x-2 group"
              >
                {/* <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                  ${isDarkMode ? 'logo-gradient-dark' : 'logo-gradient-light'}
                `}>
                  <IconSparkles className="w-5 h-5 text-white" />
                </div> */}
                <span className={`
                  text-lg font-bold transition-colors duration-300
                  ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}
                `}>
                  MurtiHub
                </span>
              </Link>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-2 flex-1 justify-center">
              <Link 
                to="/features" 
                className={`
                  nav-link flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium 
                  ${isDarkMode ? 'nav-link-dark' : 'nav-link-light'}
                  ${isActiveRoute('/features') ? (isDarkMode ? 'nav-link-active-dark' : 'nav-link-active-light') : ''}
                `}
              >
                <span>Features</span>
              </Link>
              
              <Link 
                to="/demo-bots" 
                className={`
                  nav-link flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium 
                  ${isDarkMode ? 'nav-link-dark' : 'nav-link-light'}
                  ${isActiveRoute('/demo-bots') ? (isDarkMode ? 'nav-link-active-dark' : 'nav-link-active-light') : ''}
                `}
              >
                <span>Demo Bots</span>
              </Link>
              
              <Link 
                to="/pricing" 
                className={`
                  nav-link flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium 
                  ${isDarkMode ? 'nav-link-dark' : 'nav-link-light'}
                  ${isActiveRoute('/pricing') ? (isDarkMode ? 'nav-link-active-dark' : 'nav-link-active-light') : ''}
                `}
              >
                <span>Pricing</span>
              </Link>
              
              <Link 
                to="/contact" 
                className={`
                  nav-link flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium 
                  ${isDarkMode ? 'nav-link-dark' : 'nav-link-light'}
                  ${isActiveRoute('/contact') ? (isDarkMode ? 'nav-link-active-dark' : 'nav-link-active-light') : ''}
                `}
              >
                <span>Contact</span>
              </Link>
            </div>

            {/* Theme Toggle & Auth/User Profile */}
            <div className="hidden md:flex items-center space-x-3 flex-1 justify-end">
              <ThemeToggle />
              
              {user ? (
                <UserProfile />
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className={`
                    learn-more-btn flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold text-white
                    ${isDarkMode ? 'learn-more-dark' : 'learn-more-light'}
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M2 12h12.88"></path>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.65 8.65L16 12l-3.35 3.35"></path>
                  </svg>
                  <span>Sign In</span>
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`
                  p-2 rounded-full transition-all duration-300
                  ${isDarkMode ? 'text-gray-100 hover:bg-purple-500/20' : 'text-gray-900 hover:bg-purple-500/20'}
                `}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className={`
              mobile-menu md:hidden mt-4 pt-4 rounded-2xl -mx-2 px-4 pb-4
              ${isDarkMode ? 'mobile-menu-dark' : 'mobile-menu-light'}
            `}>
              <div className="flex flex-col space-y-2">
                <Link 
                  to="/features" 
                  className={`
                    nav-link flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium 
                    ${isDarkMode ? 'nav-link-dark' : 'nav-link-light'}
                    ${isActiveRoute('/features') ? (isDarkMode ? 'nav-link-active-dark' : 'nav-link-active-light') : ''}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconBrain className="w-4 h-4" />
                  <span>Features</span>
                </Link>
                
                <Link 
                  to="/demo-bots" 
                  className={`
                    nav-link flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium 
                    ${isDarkMode ? 'nav-link-dark' : 'nav-link-light'}
                    ${isActiveRoute('/demo-bots') ? (isDarkMode ? 'nav-link-active-dark' : 'nav-link-active-light') : ''}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconUsers className="w-4 h-4" />
                  <span>Demo Bots</span>
                </Link>
                
                <Link 
                  to="/pricing" 
                  className={`
                    nav-link flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium 
                    ${isDarkMode ? 'nav-link-dark' : 'nav-link-light'}
                    ${isActiveRoute('/pricing') ? (isDarkMode ? 'nav-link-active-dark' : 'nav-link-active-light') : ''}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconCurrencyDollar className="w-4 h-4" />
                  <span>Pricing</span>
                </Link>
                
                <Link 
                  to="/contact" 
                  className={`
                    nav-link flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium 
                    ${isDarkMode ? 'nav-link-dark' : 'nav-link-light'}
                    ${isActiveRoute('/contact') ? (isDarkMode ? 'nav-link-active-dark' : 'nav-link-active-light') : ''}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconBook className="w-4 h-4" />
                  <span>Contact</span>
                </Link>

                <div className="flex items-center justify-between pt-4">
                  <ThemeToggle />
                  
                  {user ? (
                    <UserProfile />
                  ) : (
                    <button
                      onClick={() => {
                        setIsAuthModalOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className={`
                        learn-more-btn flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold text-white
                        ${isDarkMode ? 'learn-more-dark' : 'learn-more-light'}
                      `}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M2 12h12.88"></path>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.65 8.65L16 12l-3.35 3.35"></path>
                      </svg>
                      <span>Sign In</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;

