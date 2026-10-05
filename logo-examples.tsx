import * as React from "react";

/**
 * EAS Logo Examples
 * Choose one style and customize colors/dimensions to match your brand
 */

// ============================================================================
// 1. MINIMALIST: Three stacked rounded rectangles (E-A-S)
// ============================================================================
export function EASLogoMinimalist({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* E - top bar */}
      <rect x="15" y="15" width="70" height="18" rx="4" fill="currentColor" />

      {/* A - middle bar (wider/bolder) */}
      <rect x="15" y="40" width="70" height="20" rx="4" fill="currentColor" opacity="0.8" />

      {/* S - bottom bar (smaller) */}
      <rect x="15" y="65" width="70" height="16" rx="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

// ============================================================================
// 2. GEOMETRIC: Interlocking E, A, S letters (angular style)
// ============================================================================
export function EASLogoGeometric({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* E - made from lines */}
      <line x1="20" y1="20" x2="20" y2="100" stroke="currentColor" strokeWidth="6" />
      <line x1="20" y1="20" x2="50" y2="20" stroke="currentColor" strokeWidth="6" />
      <line x1="20" y1="55" x2="45" y2="55" stroke="currentColor" strokeWidth="6" />
      <line x1="20" y1="100" x2="50" y2="100" stroke="currentColor" strokeWidth="6" />

      {/* A - triangle with crossbar */}
      <path d="M 60 20 L 80 100 M 75 20 L 95 100 M 65 55 L 90 55" stroke="currentColor" strokeWidth="6" />

      {/* S - curved path */}
      <path
        d="M 110 25 Q 100 20 90 25 Q 85 30 90 35 Q 100 40 110 45 Q 100 50 90 55 Q 85 60 90 65 Q 100 70 110 75"
        stroke="currentColor"
        strokeWidth="6"
        fill="none"
      />
    </svg>
  );
}

// ============================================================================
// 3. MODERN BADGE: E-A-S in a hexagon or shield
// ============================================================================
export function EASLogoBadge({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Hexagon outer shape */}
      <path
        d="M 50 5 L 95 28 L 95 72 L 50 95 L 5 72 L 5 28 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.1"
      />

      {/* Inner hexagon (accent) */}
      <path
        d="M 50 15 L 85 35 L 85 65 L 50 85 L 15 65 L 15 35 Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Text EAS centered */}
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontSize="28"
        fontWeight="900"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        EAS
      </text>
    </svg>
  );
}

// ============================================================================
// 4. PLAYFUL: Rounded, bubbly EAS (friendly vibe)
// ============================================================================
export function EASLogoBubble({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* E bubble */}
      <circle cx="30" cy="60" r="20" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.1" />
      <text
        x="30"
        y="70"
        textAnchor="middle"
        fontSize="20"
        fontWeight="900"
        fill="currentColor"
        fontFamily="system-ui"
      >
        E
      </text>

      {/* A bubble (larger/centered) */}
      <circle cx="60" cy="45" r="25" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.15" />
      <text
        x="60"
        y="58"
        textAnchor="middle"
        fontSize="24"
        fontWeight="900"
        fill="currentColor"
        fontFamily="system-ui"
      >
        A
      </text>

      {/* S bubble */}
      <circle cx="90" cy="60" r="20" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.1" />
      <text
        x="90"
        y="70"
        textAnchor="middle"
        fontSize="20"
        fontWeight="900"
        fill="currentColor"
        fontFamily="system-ui"
      >
        S
      </text>
    </svg>
  );
}

// ============================================================================
// 5. TECH/CORPORATE: Pixel or grid style
// ============================================================================
export function EASLogoTech({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  const s = 8; // square size
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* E - pixelated */}
      <rect x="10" y="15" width={s} height={s} fill="currentColor" />
      <rect x="18" y="15" width={s} height={s} fill="currentColor" />
      <rect x="10" y="25" width={s} height={s} fill="currentColor" />
      <rect x="18" y="25" width={s} height={s} fill="currentColor" />
      <rect x="10" y="35" width={s} height={s} fill="currentColor" />
      <rect x="10" y="45" width={s} height={s} fill="currentColor" />
      <rect x="18" y="45" width={s} height={s} fill="currentColor" />
      <rect x="10" y="55" width={s} height={s} fill="currentColor" />
      <rect x="18" y="55" width={s} height={s} fill="currentColor" />

      {/* A - pixelated */}
      <rect x="35" y="15" width={s} height={s} fill="currentColor" />
      <rect x="43" y="15" width={s} height={s} fill="currentColor" />
      <rect x="35" y="25" width={s} height={s} fill="currentColor" />
      <rect x="43" y="25" width={s} height={s} fill="currentColor" />
      <rect x="35" y="35" width={s} height={s} fill="currentColor" />
      <rect x="43" y="35" width={s} height={s} fill="currentColor" />
      <rect x="39" y="45" width={s} height={s} fill="currentColor" />
      <rect x="35" y="55" width={s} height={s} fill="currentColor" />
      <rect x="43" y="55" width={s} height={s} fill="currentColor" />

      {/* S - pixelated */}
      <rect x="60" y="15" width={s} height={s} fill="currentColor" />
      <rect x="68" y="15" width={s} height={s} fill="currentColor" />
      <rect x="60" y="25" width={s} height={s} fill="currentColor" />
      <rect x="60" y="35" width={s} height={s} fill="currentColor" />
      <rect x="68" y="35" width={s} height={s} fill="currentColor" />
      <rect x="68" y="45" width={s} height={s} fill="currentColor" />
      <rect x="68" y="55" width={s} height={s} fill="currentColor" />
      <rect x="60" y="55" width={s} height={s} fill="currentColor" />
    </svg>
  );
}

// ============================================================================
// 6. ELEGANT: Single flowing monogram (intertwined letters)
// ============================================================================
export function EASLogoMonogram({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" />

      {/* Inner circle */}
      <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" opacity="0.3" />

      {/* Stylized EAS monogram (flowing path) */}
      <path
        d="M 35 35 Q 50 40 65 35 Q 60 50 65 65 Q 50 60 35 65 Q 40 50 35 35"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center accent dot */}
      <circle cx="50" cy="50" r="3" fill="currentColor" />
    </svg>
  );
}

// ============================================================================
// USAGE EXAMPLE
// ============================================================================
export function LogoShowcase() {
  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl font-bold mb-8">EAS Logo Options</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center gap-2">
          <EASLogoMinimalist className="h-24 w-24 text-neutral-900" />
          <p className="text-sm font-semibold">Minimalist</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <EASLogoGeometric className="h-24 w-24 text-neutral-900" />
          <p className="text-sm font-semibold">Geometric</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <EASLogoBadge className="h-24 w-24 text-neutral-900" />
          <p className="text-sm font-semibold">Badge</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <EASLogoBubble className="h-24 w-24 text-neutral-900" />
          <p className="text-sm font-semibold">Bubble</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <EASLogoTech className="h-24 w-24 text-neutral-900" />
          <p className="text-sm font-semibold">Tech</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <EASLogoMonogram className="h-24 w-24 text-neutral-900" />
          <p className="text-sm font-semibold">Monogram</p>
        </div>
      </div>

      {/* Color variations */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Color Variations (Minimalist)</h2>
        <div className="flex gap-6 flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <EASLogoMinimalist className="h-16 w-16 text-blue-600" />
            <p className="text-xs">Blue</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <EASLogoMinimalist className="h-16 w-16 text-purple-600" />
            <p className="text-xs">Purple</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <EASLogoMinimalist className="h-16 w-16 text-green-600" />
            <p className="text-xs">Green</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <EASLogoMinimalist className="h-16 w-16 text-red-600" />
            <p className="text-xs">Red</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <EASLogoMinimalist className="h-16 w-16 text-neutral-900" />
            <p className="text-xs">Black</p>
          </div>
        </div>
      </div>
    </div>
  );
}
