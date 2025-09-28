import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">MurtiHub</h3>
            <p className="text-gray-400 text-sm mb-4">
              AI Agentic Bots Platform - Deploy intelligent AI agents with plug-and-play simplicity.
            </p>
            <p className="text-gray-400 text-xs">
              © 2025 MurtiHub. All rights reserved.
            </p>
          </div>

          {/* Product Links */}
          <div className="col-span-1">
            <h4 className="text-md font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/demo-bots" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Demo Bots
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-1">
            <h4 className="text-md font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  System Status
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Built with ❤️ for the future of AI automation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;