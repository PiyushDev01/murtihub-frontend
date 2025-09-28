// Application constants

export const API_ENDPOINTS = {
  STATUS: '/api/status',
  HEALTH: '/api/health',
  BOTS: '/api/bots',
  CONTACT: '/api/contact',
  PERFORMANCE: '/api/performance'
};

export const DEMO_BOTS = {
  CUSTOMER_SUPPORT: 'customer-support',
  SALES_ASSISTANT: 'sales-assistant',
  CONTENT_CREATOR: 'content-creator',
  DATA_ANALYST: 'data-analyst'
};

export const ROUTES = {
  HOME: '/',
  FEATURES: '/features',
  DEMO_BOTS: '/demo-bots',
  PRICING: '/pricing',
  CONTACT: '/contact',
  GET_STARTED: '/get-started'
};

export const STATUS_TYPES = {
  LIVE: 'live',
  HEALTHY: 'healthy',
  RUNNING: 'running',
  PENDING: 'pending',
  LOADING: 'loading',
  CHECKING: 'checking',
  FAILED: 'failed',
  ERROR: 'error',
  OFFLINE: 'offline'
};

export const CONTACT_SUBJECTS = [
  { value: 'sales', label: 'Sales Inquiry' },
  { value: 'support', label: 'Technical Support' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'other', label: 'Other' }
];

export const COMPANY_INFO = {
  name: 'MurtiHub',
  domain: 'murtihub.co.in',
  email: 'support@murtihub.co.in',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 AI Street',
    city: 'Tech City',
    state: 'TC',
    zip: '12345'
  }
};