# Firebase Google Authentication Integration

This document explains how Firebase Google Authentication has been integrated into the MurtiHub frontend application.

## 🔧 Setup

### 1. Firebase Configuration
The Firebase configuration is set up in `src/config/firebase.js` with your provided credentials:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyAikzDUTzxlowelXdIfdwxiOfwxYp8L60s",
  authDomain: "murtihub-project.firebaseapp.com",
  databaseURL: "https://murtihub-project-default-rtdb.firebaseio.com",
  projectId: "murtihub-project",
  storageBucket: "murtihub-project.firebasestorage.app",
  messagingSenderId: "879550389987",
  appId: "1:879550389987:web:884abb0abcb0e4d067efd6",
  measurementId: "G-NVHPDKG6JQ"
};
```

### 2. Dependencies
The application uses the following Firebase SDK packages:
- `firebase` (v12.3.0) - Already installed in your project
- `firebase/auth` - For authentication
- `firebase/analytics` - For analytics

## 📁 File Structure

```
src/
├── config/
│   └── firebase.js              # Firebase configuration and initialization
├── contexts/
│   ├── AuthContext.jsx          # Authentication context provider
│   └── ThemeContext.jsx         # Existing theme context
├── components/
│   └── Auth/
│       ├── AuthModal.jsx        # Sign-in/Sign-up modal
│       ├── UserProfile.jsx      # User profile dropdown
│       └── ProtectedRoute.jsx   # Protected route wrapper
├── hooks/
│   └── useAuthState.js          # Custom authentication hook
└── pages/
    └── Dashboard.jsx            # Protected dashboard page
```

## 🚀 Features Implemented

### 1. Authentication Methods
- **Google Sign-In**: One-click authentication with Google
- **Email/Password**: Traditional email and password authentication
- **Sign Up**: New user registration with email/password

### 2. Authentication Context
The `AuthContext` provides:
- `user`: Current authenticated user object
- `loading`: Authentication state loading indicator
- `signInWithGoogle()`: Google authentication method
- `signInWithEmail(email, password)`: Email sign-in method
- `signUpWithEmail(email, password)`: Email registration method
- `signOut()`: Sign out method

### 3. UI Components

#### AuthModal
- Modal dialog for sign-in/sign-up
- Toggle between sign-in and sign-up modes
- Google sign-in button with branded styling
- Form validation and error handling

#### UserProfile
- User avatar and name display
- Dropdown menu with dashboard link and sign-out option
- Automatic avatar generation for users without profile photos

#### ProtectedRoute
- Wrapper component for pages requiring authentication
- Redirects unauthenticated users to sign-in
- Customizable fallback content

### 4. Navigation Integration
The navbar automatically shows:
- **For unauthenticated users**: Sign In button and Get Started link
- **For authenticated users**: User profile dropdown with dashboard access

## 🔒 Security Features

1. **Firebase Security Rules**: Ensure your Firebase project has appropriate security rules
2. **Email Verification**: Users can verify their email addresses
3. **Error Handling**: Comprehensive error handling for authentication failures
4. **Secure Token Management**: Firebase handles token refresh automatically

## 📱 Usage Examples

### Using Authentication in Components

```jsx
import { useAuth } from '../contexts/AuthContext';

function MyComponent() {
  const { user, signInWithGoogle, signOut } = useAuth();

  if (user) {
    return (
      <div>
        <p>Welcome, {user.displayName}!</p>
        <button onClick={signOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <button onClick={signInWithGoogle}>
      Sign In with Google
    </button>
  );
}
```

### Creating Protected Routes

```jsx
import ProtectedRoute from '../components/Auth/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
}
```

### Checking Authentication State

```jsx
import { useAuthState } from '../hooks/useAuthState';

function MyComponent() {
  const { isAuthenticated, user, loading } = useAuthState();

  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      {isAuthenticated ? (
        <p>Signed in as {user.email}</p>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
}
```

## 🎨 Styling

The authentication components use:
- **Tailwind CSS**: For responsive design and dark mode support
- **Dark Mode**: Full dark mode compatibility
- **Responsive Design**: Mobile-friendly layouts
- **Consistent Theming**: Matches your existing design system

## 🔧 Firebase Console Setup Required

To complete the setup, ensure the following in your Firebase Console:

### 1. Authentication Setup
1. Go to Firebase Console → Authentication → Sign-in method
2. Enable **Google** sign-in provider
3. Enable **Email/Password** sign-in provider
4. Add your domain to authorized domains

### 2. Google OAuth Setup
1. In Google Cloud Console, ensure OAuth consent screen is configured
2. Add authorized JavaScript origins:
   - `http://localhost:5173` (development)
   - Your production domain
3. Add authorized redirect URIs:
   - `http://localhost:5173` (development)
   - Your production domain

### 3. Security Rules (if using Firestore)
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 🚀 Getting Started

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Test authentication**:
   - Click "Sign In" in the navbar
   - Try both Google and email/password sign-in
   - Visit `/dashboard` to see the protected route

3. **Customize as needed**:
   - Modify `AuthModal.jsx` for custom styling
   - Add additional authentication providers
   - Implement user profile management

## 🔍 Troubleshooting

### Common Issues:

1. **"Auth domain not found"**: Ensure your domain is added to Firebase authorized domains
2. **Google sign-in popup blocked**: Check browser popup settings
3. **CORS errors**: Verify authorized JavaScript origins in Google Cloud Console

### Debug Tools:
- Check browser console for detailed error messages
- Use Firebase Authentication debug mode
- Verify network requests in browser dev tools

## 📚 Additional Resources

- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)

---

Your Firebase Google Authentication is now fully integrated and ready to use! 🎉