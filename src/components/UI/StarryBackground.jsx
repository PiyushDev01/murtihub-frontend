import React from 'react';

const StarryBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Generate random stars */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        >
          <div className="w-1 h-1 bg-white opacity-60 rounded-full"></div>
        </div>
      ))}
      
      {/* Larger accent stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`accent-${i}`}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <div className="text-white opacity-40 text-xs">✨</div>
        </div>
      ))}
    </div>
  );
};

export default StarryBackground;