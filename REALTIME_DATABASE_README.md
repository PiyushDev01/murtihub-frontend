# Firebase Realtime Database Integration - User Information Storage

This document explains how Firebase Realtime Database has been integrated to store and manage user basic information in real-time.

## 🔧 Database Structure

### User Data Schema
```javascript
users: {
  [userId]: {
    // Basic Info
    uid: "user-unique-id",
    email: "user@example.com",
    displayName: "John Doe",
    firstName: "John",
    lastName: "Doe",
    photoURL: "https://...",
    phoneNumber: "+1234567890",
    
    // Authentication Info
    provider: "google.com" | "password",
    emailVerified: true,
    
    // Timestamps
    createdAt: 1696320000000,
    lastLoginAt: 1696320000000,
    lastActivityAt: 1696320000000,
    
    // Status
    isActive: true,
    
    // User Preferences
    preferences: {
      notifications: true,
      darkMode: false,
      language: "en"
    },
    
    // Subscription Info
    subscription: {
      plan: "free" | "premium" | "enterprise",
      startDate: 1696320000000,
      endDate: null,
      features: ["basic", "advanced"]
    }
  }
}
```

## 📁 New Files Created

### 1. Services
- `src/services/userService.js` - Database operations for user data

### 2. Components
- `src/components/User/UserProfileManager.jsx` - Profile management component

### 3. Hooks
- `src/hooks/useUserDatabase.js` - Custom hook for user database operations

### 4. Updated Files
- `src/config/firebase.js` - Added Realtime Database initialization
- `src/contexts/AuthContext.jsx` - Integrated with user database operations
- `src/pages/Dashboard.jsx` - Shows real-time user profile data
- `src/hooks/useAuthState.js` - Added userProfile to hook

## 🚀 Key Features

### 1. Automatic User Profile Creation
- Creates user profile automatically on first login
- Updates profile data on subsequent logins
- Stores provider-specific information

### 2. Real-time Updates
- Real-time synchronization of user data across all devices
- Automatic UI updates when profile changes
- Live activity tracking

### 3. User Profile Management
- Edit personal information (name, phone, etc.)
- Update preferences (notifications, language, theme)
- View account statistics and subscription info

### 4. Activity Tracking
- Last login timestamp
- Last activity tracking
- Session management

## 🎯 Database Operations

### Core Functions in `userService.js`:

```javascript
// Create or update user profile
createUserProfile(userId, userData)

// Get user profile
getUserProfile(userId)

// Update specific profile fields
updateUserProfile(userId, updates)

// Update user preferences
updateUserPreferences(userId, preferences)

// Real-time subscription
subscribeToUserProfile(userId, callback)

// Activity tracking
updateUserActivity(userId)
```

### Example Usage:

```javascript
import { useAuth } from '../contexts/AuthContext';
import { useUserDatabase } from '../hooks/useUserDatabase';

function MyComponent() {
  const { user, userProfile } = useAuth();
  const { updateProfile, loading, error } = useUserDatabase();

  const handleUpdateProfile = async () => {
    try {
      await updateProfile({
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '+1234567890'
      });
      console.log('Profile updated successfully!');
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <div>
      <h1>Welcome, {userProfile?.firstName}!</h1>
      <p>Email: {userProfile?.email}</p>
      <p>Last Login: {new Date(userProfile?.lastLoginAt).toLocaleString()}</p>
      
      <button onClick={handleUpdateProfile} disabled={loading}>
        {loading ? 'Updating...' : 'Update Profile'}
      </button>
    </div>
  );
}
```

## 🔒 Security Rules

Add these rules to your Firebase Realtime Database:

```json
{
  "rules": {
    "users": {
      "$userId": {
        ".read": "$userId === auth.uid",
        ".write": "$userId === auth.uid",
        ".validate": "newData.hasChildren(['uid', 'email'])",
        "uid": {
          ".validate": "newData.val() === auth.uid"
        },
        "email": {
          ".validate": "newData.val() === auth.token.email"
        }
      }
    }
  }
}
```

## 📱 Component Integration

### Dashboard Integration
The dashboard now shows:
- Real-time user profile information
- Subscription status and features
- User preferences and settings
- Activity timestamps
- Profile editing capabilities

### Profile Manager Features
- ✅ Edit display name and contact info
- ✅ Update user preferences
- ✅ Real-time validation and error handling
- ✅ Loading states and success messages
- ✅ Dark mode support

## 🎨 UI Features

### Real-time Updates
- Profile changes reflect immediately across all components
- Activity status updates automatically
- Subscription and preference changes sync in real-time

### Form Validation
- Client-side validation for all form fields
- Error handling with user-friendly messages
- Success notifications for successful updates

### Responsive Design
- Mobile-friendly profile management
- Grid layouts that adapt to screen size
- Consistent styling with existing theme

## 🔧 Database Configuration

### Firebase Console Setup:
1. **Enable Realtime Database**:
   - Go to Firebase Console → Realtime Database
   - Click "Create Database"
   - Choose "Start in test mode" or configure security rules

2. **Configure Security Rules**:
   - Update rules to allow authenticated users to read/write their own data
   - Implement field-level validation

3. **Set Database URL**:
   - Your database URL: `https://murtihub-project-default-rtdb.firebaseio.com`
   - Already configured in `firebase.js`

## 📊 Data Flow

1. **User Signs In** → Authentication triggered
2. **AuthContext** → Detects auth state change
3. **userService** → Creates/updates user profile in database
4. **Real-time Listener** → Subscribes to profile changes
5. **UI Components** → Automatically update with new data

## 🚀 Getting Started

1. **Test the Integration**:
   ```bash
   npm run dev
   ```

2. **Sign in and check**:
   - Sign in with Google or email
   - Visit `/dashboard` to see your profile
   - Try editing your profile information
   - Check Firebase Console to see the data

3. **Monitor Real-time Updates**:
   - Open multiple browser tabs
   - Update profile in one tab
   - See changes reflect in other tabs instantly

## 🔍 Debugging

### Check Database Connection:
```javascript
import { database } from './config/firebase';
import { ref, get } from 'firebase/database';

// Test database connection
const testConnection = async () => {
  try {
    const testRef = ref(database, '.info/connected');
    const snapshot = await get(testRef);
    console.log('Database connected:', snapshot.val());
  } catch (error) {
    console.error('Database connection error:', error);
  }
};
```

### Common Issues:
1. **Permission Denied**: Check security rules
2. **Data Not Syncing**: Verify user is authenticated
3. **Stale Data**: Ensure real-time listeners are properly set up

## 📈 Performance Optimizations

1. **Efficient Queries**: Only fetch necessary user data
2. **Real-time Subscriptions**: Properly cleanup listeners
3. **Caching**: User profile cached in AuthContext
4. **Batched Updates**: Multiple field updates in single operation

## 🔮 Future Enhancements

- [ ] User avatar upload functionality
- [ ] Social media profile linking
- [ ] Privacy settings management
- [ ] Data export functionality
- [ ] Admin user management panel

---

Your Firebase Realtime Database integration is now complete! 🎉

Users' basic information is automatically stored and synchronized in real-time across all devices and sessions.