import { useAuth } from '../contexts/AuthContext';

export const useAuthState = () => {
  const { user, userProfile, loading } = useAuth();
  
  return {
    isAuthenticated: !!user,
    user,
    userProfile,
    loading,
    isAnonymous: !user
  };
};