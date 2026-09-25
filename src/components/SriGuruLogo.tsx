import React from 'react';

interface SriGuruLogoProps {
  className?: string;
  size?: number | string;
}

/**
 * Exact vector replica of the Sri Guru Clinic & Hospital logo:
 * - Dual-color medical cross (Deep Medical Teal / Petrol #007791 and Soft Seafoam / Jade #62B8AA)
 * - Stylized stethoscope integrated seamlessly into the cross arms
 * - Earpieces and chestpiece/bell forming an empathetic, modern clinical emblem
 */
export const SriGuruLogo: React.FC<SriGuruLogoProps> = ({ className = "w-10 h-10", size }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="Sri Guru Clinic Logo"
    >
      <defs>
        {/* Subtle shadow filter for high-end rendering */}
        <filter id="soft-glow" x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Cross Structure & Stethoscope Assembly */}
      <g filter="url(#soft-glow)">
        {/* 1. Upper Vertical Arm of Cross (Deep Teal) */}
        <path
          d="M 210 250 L 210 135 C 210 100, 290 100, 290 135 L 290 250"
          stroke="#057896"
          strokeWidth="42"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 2. Lower Vertical Arm of Cross (Soft Seafoam / Jade) */}
        <path
          d="M 210 250 L 210 365 C 210 400, 290 400, 290 365 L 290 250"
          stroke="#55B5A6"
          strokeWidth="42"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 3. Left Horizontal Arm of Cross (Soft Seafoam / Jade) */}
        <path
          d="M 250 290 L 135 290 C 100 290, 100 210, 135 210 L 250 210"
          stroke="#55B5A6"
          strokeWidth="42"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 4. Right Horizontal Arm of Cross (Deep Teal) */}
        <path
          d="M 250 210 L 365 210 C 400 210, 400 290, 365 290 L 250 290"
          stroke="#057896"
          strokeWidth="42"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 5. Stethoscope Tubing & Curves */}
        {/* Stethoscope Left Earpiece & Binaural Arc */}
        {/* Left ear tip */}
        <circle cx="140" cy="142" r="14" fill="#55B5A6" />
        {/* Right ear tip */}
        <circle cx="168" cy="132" r="14" fill="#55B5A6" />
        
        {/* Binaural metal tube arc */}
        <path
          d="M 140 152 C 122 178, 142 225, 178 225 C 196 225, 202 188, 172 142"
          stroke="#55B5A6"
          strokeWidth="15"
          strokeLinecap="round"
          fill="none"
        />

        {/* Y-junction and flexible stethoscope tube looping across and into right side */}
        <path
          d="M 178 228 C 190 255, 230 265, 275 262 C 320 258, 385 305, 345 365 C 310 405, 260 300, 305 260"
          stroke="#55B5A6"
          strokeWidth="15"
          strokeLinecap="round"
          fill="none"
        />

        {/* Stethoscope Chest Piece / Diaphragm on the right */}
        <circle cx="300" cy="254" r="22" fill="#55B5A6" />
      </g>
    </svg>
  );
};
