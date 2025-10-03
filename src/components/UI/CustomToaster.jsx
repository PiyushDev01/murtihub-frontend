import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useTheme } from '../../contexts/ThemeContext';

const CustomToaster = () => {
  const { isDarkMode } = useTheme();

  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: '',
        duration: 4000,
        style: {
          background: isDarkMode ? '#374151' : '#ffffff',
          color: isDarkMode ? '#f9fafb' : '#111827',
          border: isDarkMode ? '1px solid #4b5563' : '1px solid #e5e7eb',
          borderRadius: '0.75rem',
          boxShadow: isDarkMode 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
            : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          fontSize: '14px',
          fontWeight: '500',
          padding: '12px 16px',
          maxWidth: '400px',
        },
        // Default options for specific types
        success: {
          duration: 3000,
          style: {
            background: isDarkMode ? '#065f46' : '#ecfdf5',
            color: isDarkMode ? '#6ee7b7' : '#047857',
            border: isDarkMode ? '1px solid #10b981' : '1px solid #a7f3d0',
          },
          iconTheme: {
            primary: '#10b981',
            secondary: isDarkMode ? '#065f46' : '#ecfdf5',
          },
        },
        error: {
          duration: 5000,
          style: {
            background: isDarkMode ? '#7f1d1d' : '#fef2f2',
            color: isDarkMode ? '#fca5a5' : '#dc2626',
            border: isDarkMode ? '1px solid #ef4444' : '1px solid #fecaca',
          },
          iconTheme: {
            primary: '#ef4444',
            secondary: isDarkMode ? '#7f1d1d' : '#fef2f2',
          },
        },
        loading: {
          style: {
            background: isDarkMode ? '#1f2937' : '#f9fafb',
            color: isDarkMode ? '#d1d5db' : '#4b5563',
            border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
          },
        },
        custom: {
          style: {
            background: isDarkMode ? '#312e81' : '#ede9fe',
            color: isDarkMode ? '#c4b5fd' : '#6d28d9',
            border: isDarkMode ? '1px solid #6366f1' : '1px solid #c4b5fd',
          },
        },
      }}
    />
  );
};

export default CustomToaster;