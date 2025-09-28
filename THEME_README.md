# MurtiHub - Light & Dark Theme System

## Theme Features

✅ **Automatic Theme Detection**: Detects user's system preference on first visit
✅ **Manual Toggle**: Theme toggle button in the navigation bar  
✅ **Persistent Storage**: Remembers user's theme preference in localStorage
✅ **Smooth Transitions**: 300ms transitions between light and dark modes
✅ **Complete Coverage**: All components and pages support both themes

## Theme Colors (Based on Your Design)

### Light Mode
- **Background**: White (#FFFFFF)
- **Surface**: Light Gray (#F8F9FA)
- **Text**: Dark (#1A1A1A)
- **Accent**: Purple (#8B5CF6)
- **Secondary**: Blue (#6366F1)

### Dark Mode  
- **Background**: Dark Blue/Black (#0F172A)
- **Surface**: Dark Surface (#1E293B)
- **Text**: Light (#F8FAFC)
- **Accent**: Bright Purple (#A855F7)
- **Secondary**: Blue (#6366F1)

## How to Use

### Theme Context
```jsx
import { useTheme } from './contexts/ThemeContext';

const MyComponent = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <div className={isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};
```

### Theme-Aware Styling
Components automatically adapt using:
- Conditional classes based on `isDarkMode`
- CSS transitions for smooth theme switching
- Custom utilities in `index.css`

## Components Updated

- ✅ **App.jsx**: Wrapped with ThemeProvider
- ✅ **Navbar**: Theme toggle button + theme-aware styling
- ✅ **Home**: Dynamic gradient backgrounds
- ✅ **StatusCard**: Theme-aware colors and backgrounds
- ✅ **ThemeToggle**: Custom toggle with smooth animations

## Live Preview

Your app is running at:
- **Local**: http://localhost:3001/
- **Network**: http://192.168.29.149:3001/

Click the theme toggle button (☀️🌙) in the navigation bar to switch between light and dark modes!