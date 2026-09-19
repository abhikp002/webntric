"use client";

import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Dynamic SVG Icon matching the user's design */}
      <svg
        viewBox="0 0 160 120"
        className="h-10 w-auto text-foreground stroke-current fill-none shrink-0"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Upward Sloped Trend Line */}
        <path d="M 35 70 L 60 40 L 75 55 L 115 15" />
        
        {/* Arrowhead */}
        <path d="M 98 15 L 115 15 L 115 32" strokeWidth="6" />

        {/* Three Vertical Bars underneath */}
        <line x1="35" y1="90" x2="35" y2="120" />
        <line x1="75" y1="90" x2="75" y2="120" />
        <line x1="115" y1="60" x2="115" y2="120" />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col text-left">
          <span className="text-lg font-black tracking-widest text-foreground font-sans leading-none uppercase">
            Webntric
          </span>
          <span className="text-[9px] font-bold tracking-[0.38em] text-muted-foreground font-serif uppercase mt-1 leading-none">
            Software
          </span>
        </div>
      )}
    </div>
  );
}
