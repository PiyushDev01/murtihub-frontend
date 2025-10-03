import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import ProtectedRoute from '../components/Auth/ProtectedRoute';
import UserProfileManager from '../components/User/UserProfileManager';
import { ProfileImage } from '../utils/profileImageUtils';

const Dashboard = () => {
  const { user, userProfile } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen pb-8 bg-gray-50 dark:bg-gray-900 pt-24 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Welcome Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <ProfileImage
                user={user}
                userProfile={userProfile}
                size="w-24 h-24"
                className="mx-auto mb-4"
              />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome, {userProfile?.firstName || userProfile?.displayName || user?.displayName || user?.email?.split('@')[0]}!
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                You're successfully signed in to MurtiHub
              </p>
              {userProfile?.lastLoginAt && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Last login: {new Date(userProfile.lastLoginAt).toLocaleString()}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-3xl">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Account Info
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Email: {userProfile?.email || user?.email}
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Provider: {userProfile?.provider || user?.providerData?.[0]?.providerId || 'Email'}
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Verified: {userProfile?.emailVerified || user?.emailVerified ? 'Yes' : 'No'}
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Status: {userProfile?.isActive ? 'Active' : 'Inactive'}
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-3xl">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                  Subscription
                </h3>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Plan: {userProfile?.subscription?.plan || 'Free'}
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Features: {userProfile?.subscription?.features?.join(', ') || 'Basic'}
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Priority support
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-3xl">
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  Preferences
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Notifications: {userProfile?.preferences?.notifications ? 'Enabled' : 'Disabled'}
                </p>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Language: {userProfile?.preferences?.language || 'English'}
                </p>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Member since: {userProfile?.createdAt ? new Date(userProfile.createdAt).toLocaleDateString() : 'Today'}
                </p>
              </div>
            </div>
          </div>

          {/* User Profile Manager */}
          <UserProfileManager />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;