
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 70" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9e77bd" />
          <stop offset="50%" stopColor="#63489a" />
          <stop offset="100%" stopColor="#333795" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <g filter="url(#glow)">
        {/* Head */}
        <circle cx="50" cy="15" r="10" fill="url(#logo-grad)" />
        {/* Left Wing */}
        <path 
          d="M48 45 L5 15 C25 15 42 30 48 45 Z" 
          fill="url(#logo-grad)" 
        />
        {/* Right Wing */}
        <path 
          d="M52 45 L95 15 C75 15 58 30 52 45 Z" 
          fill="url(#logo-grad)" 
        />
      </g>
    </svg>
  );
};

export default Logo;
