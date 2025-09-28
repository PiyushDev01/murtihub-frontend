import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import StatusCard from '../components/UI/StatusCard';
import Button from '../components/UI/Button';
import ErrorAlert from '../components/UI/ErrorAlert';

const Home = () => {
  const { isDarkMode } = useTheme();
  const [apiStatus, setApiStatus] = useState('checking...');
  const [apiConnection, setApiConnection] = useState(null);
  const [performanceTest, setPerformanceTest] = useState(null);

  useEffect(() => {
    // Simulate API status check
    setTimeout(() => {
      setApiStatus('Healthy & Responsive');
    }, 100);
  }, []);

  const handleTestConnection = () => {
    setApiConnection('testing...');
    // Simulate API connection test
    setTimeout(() => {
      setApiConnection('failed');
    }, 2000);
  };

  const handlePerformanceTest = () => {
    setPerformanceTest('testing...');
    // Simulate performance test
    setTimeout(() => {
      setPerformanceTest('completed');
    }, 3000);
  };

  return (
    <div className={`
      min-h-screen py-28 transition-all duration-300 relative overflow-hidden flex items-center justify-center
      ${isDarkMode ? 'hero-gradient-dark' : 'hero-gradient-light'}
    `}>
      {/* Background Stars/Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-yellow-300 rounded-full opacity-80 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-purple-300 rounded-full opacity-70 animate-pulse delay-2000"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-3000"></div>
        <div className="absolute bottom-48 right-20 w-2 h-2 bg-blue-300 rounded-full opacity-60 animate-pulse delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        {/* Tagline */}
        <div className="mb-8">
          <span className={`inline-block px-6 py-2 rounded-full text-sm font-medium backdrop-blur-sm border ${
            isDarkMode 
              ? 'text-white bg-white bg-opacity-20 border-white border-opacity-30' 
              : 'text-purple-700 bg-purple-100 bg-opacity-60 border-purple-300 border-opacity-40'
          }`}>
            Unlock Your Potential
          </span>
        </div>

        {/* Hero Title */}
        <div className="mb-8">
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            <span className="blur-text-word">AI</span>{' '}
            <span className="blur-text-word">Agentic</span>{' '}
            <span className="blur-text-word text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Bots</span>{' '}
            <span className="blur-text-word text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Platform</span>
          </h1>
          
          <p className={`text-sm md:text-xl max-w-3xl font-light mx-auto leading-relaxed ${
            isDarkMode ? 'text-white text-opacity-90' : 'text-gray-600'
          }`}>
            {/* Deploy intelligent AI agents with plug-and-play simplicity. <br /> */}
            Scale your business with autonomous bots that work 24/7.
          </p>
        </div>

        {/* Main CTA Button */}
        <div className="mb-12">
          <button 
            className="cta-button"
            onClick={handleTestConnection}
            disabled={apiConnection === 'testing...'}
          >
            {apiConnection === 'testing...' ? 'Testing API...' : 'Test Connection'}
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Secondary Actions */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button 
            className={`boton-elegante ${!isDarkMode ? 'light' : ''}`}
            onClick={handlePerformanceTest}
            disabled={performanceTest === 'testing...'}
          >
            <span className="relative z-10">
              {performanceTest === 'testing...' ? 'Running Test...' : 'Performance Test'}
            </span>
          </button>
          
          <button 
            className={`boton-elegante ${!isDarkMode ? 'light' : ''}`}
            onClick={() => window.location.href = '/demo-bots'}
          >
            <span className="relative z-10"> Try Demo Bots</span>
          </button>
        </div>

        {/* Status Information - Compact */}
        {apiStatus !== 'checking...' && (
          <div className="max-w-2xl mx-auto">
            <div className={`backdrop-blur-lg rounded-2xl p-6 border ${
              isDarkMode 
                ? 'bg-white bg-opacity-10 border-white border-opacity-20' 
                : 'bg-white bg-opacity-40 border-purple-200 border-opacity-40'
            }`}>
              <div className="flex items-center justify-center mb-4">
                <span className="text-green-500 text-xl mr-2">✅</span>
                <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Platform Status: {apiStatus}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-green-500 font-semibold">Frontend</div>
                  <div className={`${isDarkMode ? 'text-white opacity-80' : 'text-gray-600'}`}>Active</div>
                </div>
                <div className="text-center">
                  <div className="text-green-500 font-semibold">API</div>
                  <div className={`${isDarkMode ? 'text-white opacity-80' : 'text-gray-600'}`}>Running</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-500 font-semibold">Demo Bots</div>
                  <div className={`${isDarkMode ? 'text-white opacity-80' : 'text-gray-600'}`}>2 Available</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error Display */}
        {apiConnection === 'failed' && (
          <div className="mt-8 max-w-md mx-auto">
            <div className={`backdrop-blur-sm rounded-lg p-4 border ${
              isDarkMode 
                ? 'bg-red-500 bg-opacity-20 border-red-400 border-opacity-30' 
                : 'bg-red-100 bg-opacity-60 border-red-300 border-opacity-50'
            }`}>
              <div className={`flex items-center ${isDarkMode ? 'text-red-200' : 'text-red-600'}`}>
                <span className="mr-2">❌</span>
                <span className="font-medium">Connection Test Failed</span>
              </div>
            </div>
          </div>
        )}

        {performanceTest === 'completed' && (
          <div className="mt-8 max-w-md mx-auto">
            <div className={`backdrop-blur-sm rounded-lg p-4 border ${
              isDarkMode 
                ? 'bg-green-500 bg-opacity-20 border-green-400 border-opacity-30' 
                : 'bg-green-100 bg-opacity-60 border-green-300 border-opacity-50'
            }`}>
              <div className={`flex items-center ${isDarkMode ? 'text-green-200' : 'text-green-600'}`}>
                <span className="mr-2">✅</span>
                <span className="font-medium">Performance Test Completed</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;