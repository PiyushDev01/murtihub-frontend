import toast from 'react-hot-toast';

// Common toast notification patterns
export const toastUtils = {
  // Success notifications
  success: {
    auth: (message = 'Authentication successful!') => 
      toast.success(message, { icon: '🎉' }),
    
    save: (message = 'Saved successfully!') => 
      toast.success(message, { icon: '💾' }),
    
    update: (message = 'Updated successfully!') => 
      toast.success(message, { icon: '✨' }),
    
    delete: (message = 'Deleted successfully!') => 
      toast.success(message, { icon: '🗑️' }),
    
    copy: (message = 'Copied to clipboard!') => 
      toast.success(message, { icon: '📋', duration: 2000 }),
    
    welcome: (name = 'User') => 
      toast.success(`Welcome back, ${name}!`, { icon: '👋' }),
  },

  // Error notifications
  error: {
    auth: (message = 'Authentication failed') => 
      toast.error(message, { icon: '🔒' }),
    
    network: (message = 'Network error. Please check your connection.') => 
      toast.error(message, { icon: '🌐', duration: 6000 }),
    
    validation: (message = 'Please check your input') => 
      toast.error(message, { icon: '⚠️' }),
    
    permission: (message = 'You don\'t have permission to perform this action') => 
      toast.error(message, { icon: '🚫' }),
    
    generic: (message = 'Something went wrong. Please try again.') => 
      toast.error(message, { icon: '❌' }),
  },

  // Loading notifications
  loading: {
    auth: (message = 'Authenticating...') => 
      toast.loading(message),
    
    save: (message = 'Saving...') => 
      toast.loading(message),
    
    load: (message = 'Loading...') => 
      toast.loading(message),
    
    process: (message = 'Processing...') => 
      toast.loading(message),
  },

  // Information notifications
  info: {
    offline: () => 
      toast('You\'re offline. Some features may not work.', { 
        icon: '📡',
        duration: 6000 
      }),
    
    update: (message = 'New update available!') => 
      toast(message, { icon: '🆕' }),
    
    reminder: (message) => 
      toast(message, { icon: '⏰' }),
  },

  // Custom notifications
  custom: {
    promise: (promise, messages) => {
      return toast.promise(promise, {
        loading: messages.loading || 'Loading...',
        success: messages.success || 'Success!',
        error: messages.error || 'Error occurred',
      });
    },

    dismissAll: () => toast.dismiss(),

    // Themed notifications
    feature: (message) => 
      toast(message, { 
        icon: '✨',
        style: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
        }
      }),
  }
};

// Firebase Auth error code to user-friendly message mapping
export const getAuthErrorMessage = (errorCode) => {
  const errorMessages = {
    'auth/user-not-found': 'No account found with this email address',
    'auth/wrong-password': 'Incorrect password',
    'auth/email-already-in-use': 'An account with this email already exists',
    'auth/weak-password': 'Password should be at least 6 characters long',
    'auth/invalid-email': 'Please enter a valid email address',
    'auth/user-disabled': 'This account has been disabled',
    'auth/too-many-requests': 'Too many failed attempts. Please try again later',
    'auth/network-request-failed': 'Network error. Please check your connection',
    'auth/popup-closed-by-user': 'Sign-in popup was closed',
    'auth/popup-blocked': 'Sign-in popup was blocked by browser',
    'auth/cancelled-popup-request': 'Sign-in was cancelled',
    'auth/account-exists-with-different-credential': 'Account exists with different sign-in method',
    'auth/invalid-credential': 'Invalid credentials provided',
    'auth/operation-not-allowed': 'This sign-in method is not enabled',
    'auth/requires-recent-login': 'Please sign out and sign in again to continue',
  };

  return errorMessages[errorCode] || 'An unexpected error occurred';
};

// Database error messages
export const getDatabaseErrorMessage = (error) => {
  if (error.code === 'PERMISSION_DENIED') {
    return 'You don\'t have permission to access this data';
  }
  if (error.code === 'NETWORK_ERROR') {
    return 'Network error. Please check your connection';
  }
  if (error.code === 'UNAVAILABLE') {
    return 'Service temporarily unavailable. Please try again';
  }
  return 'Database error occurred. Please try again';
};

export default toastUtils;