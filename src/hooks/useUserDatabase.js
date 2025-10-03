import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';
import { 
  updateUserProfile, 
  updateUserPreferences, 
  updateUserActivity,
  getUserProfile 
} from '../services/userService';

export const useUserDatabase = () => {
  const { user, userProfile } = useAuth();
  const [loading, setLoading] = useState(false);

  // Update user profile in database
  const updateProfile = async (updates) => {
    if (!user) {
      toast.error('You must be signed in to update your profile');
      throw new Error('User not authenticated');
    }

    setLoading(true);

    try {
      await updateUserProfile(user.uid, updates);
      return true;
    } catch (err) {
      // Error toast is handled in the service layer
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update user preferences
  const updatePreferences = async (preferences) => {
    if (!user) {
      toast.error('You must be signed in to update preferences');
      throw new Error('User not authenticated');
    }

    setLoading(true);

    try {
      await updateUserPreferences(user.uid, preferences);
      toast.success('Preferences updated successfully!', { icon: '⚙️' });
      return true;
    } catch (err) {
      // Error toast is handled in the service layer
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Track user activity
  const trackActivity = async () => {
    if (!user) return;

    try {
      await updateUserActivity(user.uid);
    } catch (err) {
      console.error('Error tracking user activity:', err);
    }
  };

  // Get fresh user profile data
  const refreshProfile = async () => {
    if (!user) {
      toast.error('You must be signed in to refresh profile');
      throw new Error('User not authenticated');
    }

    setLoading(true);

    try {
      const profile = await getUserProfile(user.uid);
      toast.success('Profile refreshed!', { icon: '🔄' });
      return profile;
    } catch (err) {
      // Error toast is handled in the service layer
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Track activity on component mount and focus
  useEffect(() => {
    if (user) {
      trackActivity();

      const handleFocus = () => trackActivity();
      window.addEventListener('focus', handleFocus);

      return () => {
        window.removeEventListener('focus', handleFocus);
      };
    }
  }, [user]);

  return {
    userProfile,
    loading,
    updateProfile,
    updatePreferences,
    trackActivity,
    refreshProfile
  };
};