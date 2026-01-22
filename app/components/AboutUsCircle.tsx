// components/CircularBadge.jsx
'use client';

import React from 'react';

const CircularBadge = () => {
  return (
    <div 
      className="relative w-36 h-36 cursor-pointer group"
    >
      {/* Main circular badge with gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[#2d7a6e] to-[#7ed957] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 shadow-2xl">
        
        {/* Rotating text */}
        <div className="absolute w-full h-full animate-spin-slow">
          {['M', 'o', 'r', 'e', ' ', 'A', 'b', 'o', 'u', 't', ' ', 'U', 's', ' ', '★', ' ', 'M', 'o', 'r', 'e', ' ', 'A', 'b', 'o', 'u', 't', ' ', 'U', 's', ' ', '★'].map(
            (char, index) => (
              <span
                key={index}
                className="absolute left-1/2 text-xs font-bold text-[#1a4d44]"
                style={{
                  top: '5px',
                  transformOrigin: '0 65px',
                  transform: `rotate(${index * 12}deg)`,
                }}
              >
                {char}
              </span>
            )
          )}
        </div>

        {/* Center white circle */}
        <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center z-10">
          {/* Arrow icon */}
          <div className="relative">
            {/* Arrow shaft */}
            <div 
              className="absolute w-6 h-[3px] bg-[#2d7a6e] origin-left"
              style={{
                transform: 'rotate(-45deg)',
                left: '-2px',
                top: '9px'
              }}
            />
            {/* Arrow head */}
            <div 
              className="w-5 h-5 border-l-[3px] border-b-[3px] border-[#2d7a6e]"
              style={{
                transform: 'rotate(-45deg) translateX(2px)'
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CircularBadge;