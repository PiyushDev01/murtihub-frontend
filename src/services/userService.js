import { ref, set, get, update, onValue, off } from 'firebase/database';
import toast from 'react-hot-toast';
import { database } from '../config/firebase';

// Create or update user profile in Realtime Database
export const createUserProfile = async (userId, userData) => {
  try {
    const userRef = ref(database, `users/${userId}`);
    const userSnapshot = await get(userRef);
    
    const profileData = {
      uid: userId,
      email: userData.email,
      displayName: userData.displayName || userData.email?.split('@')[0] || 'User',
      photoURL: userData.photoURL || (userSnapshot.exists() ? userSnapshot.val().photoURL : null),
      provider: userData.providerData?.[0]?.providerId || 'email',
      emailVerified: userData.emailVerified || false,
      createdAt: userSnapshot.exists() ? userSnapshot.val().createdAt : Date.now(),
      lastLoginAt: Date.now(),
      isActive: true,
      // Additional user info
      firstName: userData.displayName?.split(' ')[0] || '',
      lastName: userData.displayName?.split(' ').slice(1).join(' ') || '',
      phoneNumber: userData.phoneNumber || null,
      preferences: userSnapshot.exists() ? userSnapshot.val().preferences : {
        notifications: true,
        darkMode: false,
        language: 'en'
      },
      // Platform specific data
      subscription: userSnapshot.exists() ? userSnapshot.val().subscription : {
        plan: 'free',
        startDate: Date.now(),
        endDate: null,
        features: ['basic']
      }
    };

    await set(userRef, profileData);
    return profileData;
  } catch (error) {
    console.error('Error creating/updating user profile:', error);
    toast.error('Failed to save user profile. Please try again.');
    throw error;
  }
};

// Get user profile from Realtime Database
export const getUserProfile = async (userId) => {
  try {
    const userRef = ref(database, `users/${userId}`);
    const snapshot = await get(userRef);
    
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting user profile:', error);
    toast.error('Failed to load user profile. Please refresh the page.');
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (userId, updates) => {
  try {
    const userRef = ref(database, `users/${userId}`);
    const updateData = {
      ...updates,
      lastLoginAt: Date.now()
    };
    
    await update(userRef, updateData);
    return updateData;
  } catch (error) {
    console.error('Error updating user profile:', error);
    toast.error('Failed to update profile. Please try again.');
    throw error;
  }
};

// Listen to user profile changes in real-time
export const subscribeToUserProfile = (userId, callback) => {
  const userRef = ref(database, `users/${userId}`);
  
  const unsubscribe = onValue(userRef, (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.val());
    } else {
      callback(null);
    }
  });
  
  return unsubscribe;
};

// Unsubscribe from user profile changes
export const unsubscribeFromUserProfile = (userId, callback) => {
  const userRef = ref(database, `users/${userId}`);
  off(userRef, 'value', callback);
};

// Update user last activity
export const updateUserActivity = async (userId) => {
  try {
    const userRef = ref(database, `users/${userId}/lastActivityAt`);
    await set(userRef, Date.now());
  } catch (error) {
    console.error('Error updating user activity:', error);
  }
};

// Update user preferences
export const updateUserPreferences = async (userId, preferences) => {
  try {
    const userRef = ref(database, `users/${userId}/preferences`);
    await update(userRef, preferences);
  } catch (error) {
    console.error('Error updating user preferences:', error);
    toast.error('Failed to update preferences. Please try again.');
    throw error;
  }
};

// Get all users (admin function)
export const getAllUsers = async () => {
  try {
    const usersRef = ref(database, 'users');
    const snapshot = await get(usersRef);
    
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return {};
    }
  } catch (error) {
    console.error('Error getting all users:', error);
    throw error;
  }
};

// Delete user profile
export const deleteUserProfile = async (userId) => {
  try {
    const userRef = ref(database, `users/${userId}`);
    await set(userRef, null);
    toast.success('User profile deleted successfully.');
  } catch (error) {
    console.error('Error deleting user profile:', error);
    toast.error('Failed to delete user profile. Please try again.');
    throw error;
  }
};