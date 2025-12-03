import axios from 'axios';

// Base URL for your Django backend
const API_BASE_URL = 'http://localhost:8000/api';

// Create axios instance with default settings
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests automatically (if user is logged in)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Authentication API calls
export const authAPI = {
  // Register new user
  register: (userData) => api.post('/auth/register/', userData),
  
  // Login user
  login: (credentials) => api.post('/auth/login/', credentials),
  
  // Get user profile
  getProfile: () => api.get('/auth/profile/'),
  
  // Update user profile
  updateProfile: (userData) => api.put('/auth/profile/', userData),
};

export default api;