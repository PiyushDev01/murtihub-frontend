import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const ProfileImageDebugger = () => {
  const { user, userProfile } = useAuth();

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg text-xs max-w-sm z-50">
      <h3 className="font-bold mb-2">Profile Image Debug</h3>
      <div className="space-y-1">
        <div>
          <strong>User photoURL:</strong> 
          <span className="ml-1 break-all">
            {user?.photoURL || 'null'}
          </span>
        </div>
        <div>
          <strong>UserProfile photoURL:</strong> 
          <span className="ml-1 break-all">
            {userProfile?.photoURL || 'null'}
          </span>
        </div>
        <div>
          <strong>User displayName:</strong> 
          <span className="ml-1">
            {user?.displayName || 'null'}
          </span>
        </div>
        <div>
          <strong>UserProfile displayName:</strong> 
          <span className="ml-1">
            {userProfile?.displayName || 'null'}
          </span>
        </div>
        <div>
          <strong>Provider:</strong> 
          <span className="ml-1">
            {user?.providerData?.[0]?.providerId || 'unknown'}
          </span>
        </div>
        <div>
          <strong>Email verified:</strong> 
          <span className="ml-1">
            {user?.emailVerified ? 'Yes' : 'No'}
          </span>
        </div>
      </div>
      
      {user?.photoURL && (
        <div className="mt-2">
          <strong>Image Test:</strong>
          <img 
            src={user.photoURL} 
            alt="Test" 
            className="w-8 h-8 rounded-full mt-1"
            onLoad={() => console.log('✓ Profile image loaded successfully')}
            onError={() => console.log('✗ Profile image failed to load')}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileImageDebugger;