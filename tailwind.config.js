/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      fontFamily: {
        sans: ['Alan Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      colors: {
        // Light mode colors
        light: {
          bg: '#FFFFFF',      // White background
          surface: '#F8F9FA', // Light gray surface
          text: '#1A1A1A',    // Dark text
          accent: '#8B5CF6',  // Purple accent
          secondary: '#6366F1' // Blue accent
        },
        // Dark mode colors
        dark: {
          bg: '#0F172A',      // Very dark blue/black
          surface: '#1E293B', // Dark surface
          text: '#F8FAFC',    // Light text
          accent: '#A855F7',  // Brighter purple
          secondary: '#6366F1' // Blue accent
        },
        coral: {
          500: '#FF6B6B',
          600: '#FF5252'
        },
        purple: {
          600: '#8B5CF6',
          700: '#7C3AED'
        }
      },
      backgroundImage: {
        'gradient-primary-light': 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #3B82F6 100%)',
        'gradient-primary-dark': 'linear-gradient(135deg, #A855F7 0%, #8B5CF6 50%, #6366F1 100%)',
        'gradient-text': 'linear-gradient(135deg, #8B5CF6, #3B82F6)',
        'gradient-card-1': 'linear-gradient(135deg, #10B981, #059669)',
        'gradient-card-2': 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
        'gradient-card-3': 'linear-gradient(135deg, #8B5CF6, #7C3AED)'
      },
      backdropBlur: {
        'xs': '2px'
      }
    },
  },
  plugins: [],
}