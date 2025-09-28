import React from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative flex items-center justify-center w-10 h-10 rounded-full
        transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 
        // focus:ring-purple-500 focus:ring-opacity-50 bg-transparent
        ${className}
      `}
      aria-label="Toggle theme"
    >
      {/* Light mode icon */}
      <IconSun 
        className={`
          w-5 h-5 transition-all duration-300 transform
          ${isDarkMode 
            ? 'opacity-0 scale-75 rotate-90 text-gray-400' 
            : 'opacity-100 scale-100 rotate-0 text-slate-500'
          }
        `}
        style={{
          position: isDarkMode ? 'absolute' : 'static'
        }}
      />
      
      {/* Dark mode icon */}
      <IconMoon 
        className={`
          w-5 h-5 transition-all duration-300 transform
          ${isDarkMode 
            ? 'opacity-100 scale-100 rotate-0 text-slate-200' 
            : 'opacity-0 scale-75 -rotate-90 text-gray-400'
          }
        `}
        style={{
          position: !isDarkMode ? 'absolute' : 'static'
        }}
      />
    </button>
  );
};

export default ThemeToggle;