// Utility functions for handling profile images
export const getProfileImageUrl = (user, userProfile) => {
  // Priority order: user.photoURL > userProfile.photoURL > generated avatar
  if (user?.photoURL) {
    return user.photoURL;
  }
  
  if (userProfile?.photoURL) {
    return userProfile.photoURL;
  }
  
  // Generate fallback avatar
  const name = userProfile?.displayName || user?.displayName || user?.email || 'User';
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=3b82f6&color=fff&size=128`;
};

export const getFallbackImageUrl = (user, userProfile) => {
  const name = userProfile?.displayName || user?.displayName || user?.email || 'User';
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6b7280&color=fff&size=128`;
};

// Component for profile image with error handling
import React, { useState } from 'react';

export const ProfileImage = ({ 
  user, 
  userProfile, 
  size = 'w-8 h-8', 
  className = '',
  showDebug = false 
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(getProfileImageUrl(user, userProfile));

  const handleImageError = (e) => {
    if (showDebug) {
      console.log('Profile image failed to load:', imageSrc);
      console.log('Error event:', e);
      console.log('User photoURL:', user?.photoURL);
      console.log('UserProfile photoURL:', userProfile?.photoURL);
      
      // Show toast in development for debugging
      if (process.env.NODE_ENV === 'development') {
        import('react-hot-toast').then(({ default: toast }) => {
          toast.error(`Profile image failed to load: ${imageSrc.substring(0, 50)}...`, {
            duration: 5000
          });
        });
      }
    }
    
    setImageError(true);
    setImageSrc(getFallbackImageUrl(user, userProfile));
  };

  const handleImageLoad = () => {
    if (showDebug) {
      console.log('Profile image loaded successfully:', imageSrc);
    }
    setImageError(false);
  };

  // Update image source when user data changes
  React.useEffect(() => {
    const newSrc = getProfileImageUrl(user, userProfile);
    if (newSrc !== imageSrc && !imageError) {
      setImageSrc(newSrc);
      setImageError(false);
    }
  }, [user, userProfile, imageSrc, imageError]);

  return (
    <img
      src={imageSrc}
      alt="Profile"
      className={`${size} rounded-full ${className}`}
      onError={handleImageError}
      onLoad={handleImageLoad}
      loading="lazy"
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
    />
  );
};

// Hook for profile image debugging
export const useProfileImageDebug = (user, userProfile) => {
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.group('Profile Image Debug');
      console.log('User object:', user);
      console.log('User photoURL:', user?.photoURL);
      console.log('UserProfile object:', userProfile);
      console.log('UserProfile photoURL:', userProfile?.photoURL);
      console.log('Final image URL:', getProfileImageUrl(user, userProfile));
      console.groupEnd();
    }
  }, [user, userProfile]);
};