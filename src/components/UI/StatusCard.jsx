import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const StatusCard = ({ title, status, description, icon }) => {
  const { isDarkMode } = useTheme();
  
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'live':
      case 'running':
      case 'healthy':
        return 'bg-green-500';
      case 'pending':
      case 'loading':
        return 'bg-yellow-500';
      case 'failed':
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'live':
      case 'running':
      case 'healthy':
        return '✅';
      case 'pending':
      case 'loading':
        return '⏳';
      case 'failed':
      case 'error':
        return '❌';
      default:
        return '⚪';
    }
  };

  return (
    <div className={`
      backdrop-blur-sm rounded-lg p-4 border transition-all duration-300
      ${isDarkMode 
        ? 'bg-dark-surface bg-opacity-30 border-dark-accent border-opacity-20' 
        : 'bg-white bg-opacity-10 border-white border-opacity-20'
      }
    `}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {icon && <span className="text-lg">{icon}</span>}
          <h3 className={`
            font-semibold transition-colors duration-300
            ${isDarkMode ? 'text-dark-text' : 'text-white'}
          `}>
            {title}
          </h3>
        </div>
        <span className="text-lg">{getStatusIcon(status)}</span>
      </div>
      <div className="flex items-center space-x-2 mb-1">
        <div className={`w-2 h-2 rounded-full ${getStatusColor(status)}`}></div>
        <span className={`
          font-medium transition-colors duration-300
          ${isDarkMode ? 'text-dark-text' : 'text-white'}
        `}>
          {status}
        </span>
      </div>
      {description && (
        <p className={`
          text-sm transition-colors duration-300
          ${isDarkMode ? 'text-gray-300' : 'text-gray-200'}
        `}>
          {description}
        </p>
      )}
    </div>
  );
};

export default StatusCard;