import React from "react";

interface SheshLogoProps {
  className?: string;
  inline?: boolean;
}

export function SheshLogo({ className = "", inline = false }: SheshLogoProps) {
  if (inline) {
    return (
      <span className="inline-flex items-center align-middle select-none" aria-label="SHESH">
        <svg
          viewBox="0 0 460 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`filter drop-shadow-[0_0_10px_rgba(103,232,249,0.35)] ${className || "h-4 w-auto"}`}
        >
          <defs>
            <linearGradient id="sheshGradInline" x1="0" y1="0" x2="460" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#F0FDFA" />
              <stop offset="100%" stopColor="#CFFAFE" />
            </linearGradient>
            <radialGradient id="starGlowInline" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="35%" stopColor="#67E8F9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* S 1 */}
          <path
            d="M 76 34 C 72 23, 56 20, 44 24 C 30 28, 26 40, 32 49 C 39 60, 68 62, 74 74 C 80 87, 68 98, 50 98 C 34 98, 24 90, 20 78"
            stroke="url(#sheshGradInline)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Star flare at first S top terminal */}
          <circle cx="76" cy="34" r="10" fill="url(#starGlowInline)" />
          <path d="M 76 25 Q 76 34 85 34 Q 76 34 76 43 Q 76 34 67 34 Q 76 34 76 25 Z" fill="#FFFFFF" />
          <circle cx="76" cy="34" r="1.5" fill="#FFFFFF" />

          {/* H 1 */}
          <path
            d="M 120 22 L 120 96 M 120 59 L 172 59 M 172 22 L 172 96"
            stroke="url(#sheshGradInline)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* E */}
          <path
            d="M 216 22 L 216 96 M 216 22 L 264 22 M 216 59 L 258 59 M 216 96 L 264 96"
            stroke="url(#sheshGradInline)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* S 2 */}
          <path
            d="M 354 34 C 350 23, 334 20, 322 24 C 308 28, 304 40, 310 49 C 317 60, 346 62, 352 74 C 358 87, 346 98, 328 98 C 312 98, 302 90, 298 78"
            stroke="url(#sheshGradInline)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* H 2 */}
          <path
            d="M 398 22 L 398 96 M 398 59 L 450 59 M 450 22 L 450 96"
            stroke="url(#sheshGradInline)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      aria-label="SHESH"
    >
      <svg
        viewBox="0 0 460 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[340px] sm:max-w-[420px] filter drop-shadow-[0_0_16px_rgba(103,232,249,0.38)] drop-shadow-[0_0_32px_rgba(56,189,248,0.20)]"
      >
        <defs>
          <linearGradient id="sheshGradHero" x1="0" y1="0" x2="460" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#F0FDFA" />
            <stop offset="85%" stopColor="#E0F2FE" />
            <stop offset="100%" stopColor="#BAE6FD" />
          </linearGradient>

          <radialGradient id="starGlowHero" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="35%" stopColor="#67E8F9" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#0284C7" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. FIRST 'S' */}
        <g>
          <path
            d="M 76 34 C 72 23, 56 20, 44 24 C 30 28, 26 40, 32 49 C 39 60, 68 62, 74 74 C 80 87, 68 98, 50 98 C 34 98, 24 90, 20 78"
            stroke="url(#sheshGradHero)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Subtle star flare at upper terminal */}
          <circle cx="76" cy="34" r="14" fill="url(#starGlowHero)" />
          <path d="M 76 21 Q 76 34 89 34 Q 76 34 76 47 Q 76 34 63 34 Q 76 34 76 21 Z" fill="#FFFFFF" />
          <path d="M 76 28 L 82 34 L 76 40 L 70 34 Z" fill="#BAE6FD" opacity="0.9" />
          <circle cx="76" cy="34" r="2" fill="#FFFFFF" />
        </g>

        {/* 2. 'H' */}
        <path
          d="M 120 22 L 120 96 M 120 59 L 172 59 M 172 22 L 172 96"
          stroke="url(#sheshGradHero)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 3. 'E' */}
        <path
          d="M 216 22 L 216 96 M 216 22 L 264 22 M 216 59 L 258 59 M 216 96 L 264 96"
          stroke="url(#sheshGradHero)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 4. SECOND 'S' */}
        <path
          d="M 354 34 C 350 23, 334 20, 322 24 C 308 28, 304 40, 310 49 C 317 60, 346 62, 352 74 C 358 87, 346 98, 328 98 C 312 98, 302 90, 298 78"
          stroke="url(#sheshGradHero)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 5. SECOND 'H' */}
        <path
          d="M 398 22 L 398 96 M 398 59 L 450 59 M 450 22 L 450 96"
          stroke="url(#sheshGradHero)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
