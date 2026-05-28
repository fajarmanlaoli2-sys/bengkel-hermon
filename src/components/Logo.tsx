import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  darkMode?: boolean;
}

export default function Logo({ className = '', size = 120, darkMode = true }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
      id="bengkel-hermon-svg-logo"
    >
      {/* Background or subtle glow if needed */}
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Container Group */}
      <g>
        {/* TOP GEAR CHAIN (SPROCKET) */}
        <path
          d="M 120,160 
             C 140,110 190,70 250,70 
             C 310,70 360,110 380,160
             M 120,160 L 105,175 M 145,130 L 140,110 M 180,95 L 185,75 M 225,75 L 225,55 M 275,75 L 275,55 M 320,95 L 315,75 M 355,130 L 360,110 M 380,160 L 395,175"
          stroke="#e11d48"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        {/* Additional Top Sprocket Inner Arc */}
        <path
          d="M 140,175 A 110,110 0 0,1 360,175"
          stroke="#e11d48"
          strokeWidth="4"
          fill="none"
          strokeDasharray="6 6"
        />

        {/* BOTTOM GEAR CHAIN (SPROCKET) */}
        <path
          d="M 120,340 
             C 140,390 190,430 250,430 
             C 310,430 360,390 380,340
             M 120,340 L 105,325 M 145,370 L 140,390 M 180,405 L 185,425 M 225,425 L 225,445 M 275,425 L 275,445 M 320,405 L 315,425 M 355,370 L 360,390 M 380,340 L 395,325"
          stroke="#e11d48"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 140,325 A 110,110 0 0,0 360,325"
          stroke="#e11d48"
          strokeWidth="4"
          fill="none"
          strokeDasharray="6 6"
        />

        {/* --- DUAL ANGLED PISTONS BACKGROUND --- */}
        {/* LEFT PISTON (45 deg angle upwards left) */}
        <g transform="translate(160, 160) rotate(-45)">
          {/* Piston Head */}
          <path
            d="M -45,-50 H 45 V 20 H -45 Z"
            fill={darkMode ? '#0a0a0a' : '#fff'}
            stroke="#e11d48"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          {/* Piston Grooves */}
          <line x1="-35" y1="-35" x2="35" y2="-35" stroke="#e11d48" strokeWidth="4" />
          <line x1="-35" y1="-23" x2="35" y2="-23" stroke="#e11d48" strokeWidth="4" />
          <line x1="-35" y1="-11" x2="35" y2="-11" stroke="#e11d48" strokeWidth="4" />
          {/* Wrist Pin Circle */}
          <circle cx="0" cy="0" r="10" fill="none" stroke="#e11d48" strokeWidth="6" />
          {/* Connecting Rod */}
          <path
            d="M -12,20 L -8,110 A 18,18 0 0,0 8,110 L 12,20 Z"
            fill={darkMode ? '#0a0a0a' : '#fff'}
            stroke="#e11d48"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          {/* Cap bolt circle */}
          <circle cx="0" cy="110" r="6" fill="#e11d48" />
        </g>

        {/* RIGHT PISTON (45 deg angle upwards right) */}
        <g transform="translate(340, 160) rotate(45)">
          {/* Piston Head */}
          <path
            d="M -45,-50 H 45 V 20 H -45 Z"
            fill={darkMode ? '#0a0a0a' : '#fff'}
            stroke="#e11d48"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          {/* Piston Grooves */}
          <line x1="-35" y1="-35" x2="35" y2="-35" stroke="#e11d48" strokeWidth="4" />
          <line x1="-35" y1="-23" x2="35" y2="-23" stroke="#e11d48" strokeWidth="4" />
          <line x1="-35" y1="-11" x2="35" y2="-11" stroke="#e11d48" strokeWidth="4" />
          {/* Wrist Pin Circle */}
          <circle cx="0" cy="0" r="10" fill="none" stroke="#e11d48" strokeWidth="6" />
          {/* Connecting Rod */}
          <path
            d="M -12,20 L -8,110 A 18,18 0 0,0 8,110 L 12,20 Z"
            fill={darkMode ? '#0a0a0a' : '#fff'}
            stroke="#e11d48"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          {/* Cap bolt circle */}
          <circle cx="0" cy="110" r="6" fill="#e11d48" />
        </g>

        {/* --- SOUTHERN DUAL REVERSE PISTON RODS --- */}
        {/* Bottom Left Connecting Rod cap */}
        <g transform="translate(150, 335) rotate(-135)">
          <path
            d="M -10,0 L -6,65 A 15,15 0 0,0 6,65 L 10,0 Z"
            fill={darkMode ? '#0a0a0a' : '#fff'}
            stroke="#e11d48"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <circle cx="0" cy="65" r="8" fill="none" stroke="#e11d48" strokeWidth="6" />
        </g>
        {/* Bottom Right Connecting Rod cap */}
        <g transform="translate(350, 335) rotate(135)">
          <path
            d="M -10,0 L -6,65 A 15,15 0 0,0 6,65 L 10,0 Z"
            fill={darkMode ? '#0a0a0a' : '#fff'}
            stroke="#e11d48"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <circle cx="0" cy="65" r="8" fill="none" stroke="#e11d48" strokeWidth="6" />
        </g>

        {/* CROSSED WRENCH & SCREWDRIVER IN CENTER (TOP PORTION) */}
        <g transform="translate(250, 150)">
          {/* Wrench (diagonal 45 deg) */}
          <g transform="rotate(35)">
            <rect x="-6" y="-45" width="12" height="90" fill="#e11d48" rx="3" />
            {/* Top Jaw */}
            <circle cx="0" cy="-45" r="16" fill="#e11d48" />
            <path d="M -8,-58 L 0,-47 L 8,-58 Z" fill={darkMode ? '#0a0a0a' : '#fff'} />
            {/* Bottom Jaw */}
            <circle cx="0" cy="45" r="16" fill="#e11d48" />
            <path d="M -8,58 L 0,47 L 8,58 Z" fill={darkMode ? '#0a0a0a' : '#fff'} />
          </g>

          {/* Screwdriver (diagonal -45 deg) */}
          <g transform="rotate(-35)">
            {/* Handle */}
            <path d="M -10,12 H 10 V 50 C 10,56 6,60 0,60 C -6,60 -10,56 -10,50 Z" fill="#e11d48" />
            <line x1="0" y1="12" x2="0" y2="50" stroke={darkMode ? '#0a0a0a' : '#fff'} strokeWidth="4" />
            {/* Shaft */}
            <rect x="-3" y="-55" width="6" height="70" fill="#e11d48" />
            {/* Blade flat tip */}
            <path d="M -6,-55 H 6 L 3,-62 H -3 Z" fill="#e11d48" />
          </g>
        </g>

        {/* --- FRONT HORIZONTAL BANNER --- */}
        <g>
          {/* Banner Box Backdrop */}
          <path
            d="M 15,225 L 250,185 L 485,225 L 485,305 L 250,345 L 15,305 Z"
            fill={darkMode ? '#0a0a0a' : '#fff'}
            stroke="#e11d48"
            strokeWidth="12"
            strokeLinejoin="miter"
          />

          {/* Banner inner border */}
          <path
            d="M 23,231 L 250,194 L 477,231 L 477,299 L 250,336 L 23,299 Z"
            fill="none"
            stroke="#e11d48"
            strokeWidth="2"
            strokeLinejoin="miter"
          />

          {/* TEXT: BENGKEL */}
          <text
            x="250"
            y="225"
            textAnchor="middle"
            fill="#e11d48"
            fontFamily="'Outfit', 'Plus Jakarta Sans', sans-serif"
            fontWeight="900"
            fontSize="18"
            letterSpacing="0.45em"
          >
            BENGKEL
          </text>

          {/* TEXT: HERMON */}
          <text
            x="251"
            y="292"
            textAnchor="middle"
            fill="#e11d48"
            fontFamily="'Outfit', 'Plus Jakarta Sans', sans-serif"
            fontWeight="950"
            fontSize="64"
            letterSpacing="0.05em"
          >
            HERMON
          </text>
        </g>

        {/* --- LOWER TEXT: SERVICE --- */}
        <text
          x="250"
          y="386"
          textAnchor="middle"
          fill="#e11d48"
          fontFamily="'Outfit', 'Plus Jakarta Sans', sans-serif"
          fontWeight="900"
          fontSize="14"
          letterSpacing="0.4em"
        >
          SERVICE
        </text>
      </g>
    </svg>
  );
}
