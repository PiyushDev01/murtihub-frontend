import React, { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut as firebaseSignOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword 
} from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';
import { 
  createUserProfile, 
  getUserProfile, 
  updateUserActivity,
  subscribeToUserProfile,
  unsubscribeFromUserProfile 
} from '../services/userService';
import { toastUtils, getAuthErrorMessage } from '../utils/toastUtils';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let profileUnsubscribe = null;

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      
      if (firebaseUser) {
        try {
          // Create or update user profile in database
          const profile = await createUserProfile(firebaseUser.uid, firebaseUser);
          setUserProfile(profile);
          
          // Subscribe to real-time profile updates
          profileUnsubscribe = subscribeToUserProfile(firebaseUser.uid, (profileData) => {
            setUserProfile(profileData);
          });
          
          // Update user activity
          await updateUserActivity(firebaseUser.uid);
          
          // Show welcome toast for new sessions
          if (!loading) {
            toastUtils.success.welcome(profile.firstName || profile.displayName || 'User');
          }
        } catch (error) {
          console.error('Error handling user profile:', error);
          toastUtils.error.generic('Failed to load user profile. Please try refreshing the page.');
        }
      } else {
        // Clean up profile data when user signs out
        setUserProfile(null);
        if (profileUnsubscribe) {
          profileUnsubscribe();
          profileUnsubscribe = null;
        }
      }
      
      setLoading(false);
    });

    return () => {
      unsubscribe();
      if (profileUnsubscribe) {
        profileUnsubscribe();
      }
    };
  }, []);

  // Sign in with Google
  const signInWithGoogle = async () => {
    const toastId = toastUtils.loading.auth('Signing in with Google...');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success('Successfully signed in with Google!', { id: toastId, icon: '🎉' });
      return result.user;
    } catch (error) {
      console.error('Error signing in with Google:', error);
      const errorMessage = getAuthErrorMessage(error.code);
      toast.error(errorMessage, { id: toastId });
      throw error;
    }
  };

  // Sign in with email and password
  const signInWithEmail = async (email, password) => {
    const toastId = toastUtils.loading.auth('Signing in...');
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success('Successfully signed in!', { id: toastId, icon: '✅' });
      return result.user;
    } catch (error) {
      console.error('Error signing in with email:', error);
      const errorMessage = getAuthErrorMessage(error.code);
      toast.error(errorMessage, { id: toastId });
      throw error;
    }
  };

  // Sign up with email and password
  const signUpWithEmail = async (email, password) => {
    const toastId = toastUtils.loading.auth('Creating account...');
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Account created successfully!', { id: toastId, icon: '🎊' });
      return result.user;
    } catch (error) {
      console.error('Error signing up with email:', error);
      const errorMessage = getAuthErrorMessage(error.code);
      toast.error(errorMessage, { id: toastId });
      throw error;
    }
  };

  // Sign out
  const signOut = async () => {
    const toastId = toastUtils.loading.auth('Signing out...');
    try {
      await firebaseSignOut(auth);
      toast.success('Successfully signed out!', { id: toastId, icon: '👋' });
    } catch (error) {
      console.error('Error signing out:', error);
      toastUtils.error.auth('Failed to sign out. Please try again.');
      throw error;
    }
  };

  const value = {
    user,
    userProfile,
    loading,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};