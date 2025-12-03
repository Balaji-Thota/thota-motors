import { createContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

// Create the context
export const AuthContext = createContext();

// Provider component that wraps your app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app load
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      // Token exists, fetch user profile
      fetchUserProfile();
    } else {
      setLoading(false);
    }
  }, []);

  // Fetch user profile from backend
  const fetchUserProfile = async () => {
    try {
      const { data } = await authAPI.getProfile();
      setUser(data);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      // Token might be expired, clear it
      logout();
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      const { data } = await authAPI.login({ email, password });
      
      // Store tokens in localStorage
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      
      // Fetch and set user data
      await fetchUserProfile();
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Login failed' 
      };
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      const { data } = await authAPI.register(userData);
      
      // Store tokens (backend returns them after registration)
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      
      // Set user data
      setUser(data.user);
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data || 'Registration failed' 
      };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUser(null);
  };

  // Values available to all components
  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user, // true if user exists
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};