// Utility functions for formatting and validation

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const formatApiError = (error) => {
  if (typeof error === 'string') return error;
  if (error.message) return error.message;
  if (error.error) return error.error;
  return 'An unexpected error occurred';
};

export const getStatusColor = (status) => {
  const statusLower = status.toLowerCase();
  
  if (statusLower.includes('live') || statusLower.includes('healthy') || statusLower.includes('running')) {
    return 'green';
  }
  if (statusLower.includes('pending') || statusLower.includes('loading') || statusLower.includes('checking')) {
    return 'yellow';
  }
  if (statusLower.includes('failed') || statusLower.includes('error') || statusLower.includes('offline')) {
    return 'red';
  }
  
  return 'gray';
};