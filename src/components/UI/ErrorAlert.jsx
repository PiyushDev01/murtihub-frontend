import React from 'react';

const ErrorAlert = ({ title, message, details }) => {
  return (
    <div className="bg-red-500 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-4 backdrop-blur-sm">
      <div className="flex items-center mb-2">
        <span className="text-red-400 text-lg mr-2">❌</span>
        <h3 className="text-red-300 font-semibold">{title}</h3>
      </div>
      {message && (
        <p className="text-red-200 mb-2">{message}</p>
      )}
      {details && (
        <div className="bg-red-900 bg-opacity-50 rounded p-3 mt-3">
          <h4 className="text-red-300 font-medium mb-1">Error Details:</h4>
          <p className="text-red-200 text-sm font-mono">{details}</p>
        </div>
      )}
    </div>
  );
};

export default ErrorAlert;