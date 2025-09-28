import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconSparkles, IconCurrencyDollar, IconBrain, IconUsers, IconBook, IconArrowRight } from '@tabler/icons-react';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../UI/ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
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
            <div className="hidden md:flex items-center space-x-2">
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

            {/* Theme Toggle & Learn More Button */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />
              
              <Link 
                to="/get-started"
                className={`
                  learn-more-btn flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold text-white
                  ${isDarkMode ? 'learn-more-dark' : 'learn-more-light'}
                `}
              >
                <span>Get Started</span>
                {/* <IconArrowRight className="w-4 h-4" /> */}
              </Link>
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
                  <Link 
                    to="/get-started"
                    className={`
                      learn-more-btn flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold text-white
                      ${isDarkMode ? 'learn-more-dark' : 'learn-more-light'}
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Get Started</span>
                    <IconArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

