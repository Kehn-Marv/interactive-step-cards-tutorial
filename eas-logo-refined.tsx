import * as React from "react";

/**
 * EAS Logo — Educational Agentic System
 * Refined designs that balance education, AI autonomy, and structured systems
 */

// ============================================================================
// 1. NEURAL BRAIN + CIRCUIT NODES (Premium)
// The "A" is a stylized brain with circuit nodes flowing through it
// ============================================================================
export function EASLogoNeural({
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
      {/* Main brain/A shape - left hemisphere */}
      <path
        d="M 35 20 Q 30 35 32 50 Q 30 65 40 75 L 50 75 Q 40 65 42 50 Q 40 35 35 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Main brain/A shape - right hemisphere */}
      <path
        d="M 65 20 Q 70 35 68 50 Q 70 65 60 75 L 50 75 Q 60 65 58 50 Q 60 35 65 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center bridge */}
      <line
        x1="45"
        y1="45"
        x2="55"
        y2="45"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Neural nodes - connecting dots */}
      <circle cx="35" cy="30" r="2.5" fill="currentColor" />
      <circle cx="50" cy="25" r="2.5" fill="currentColor" />
      <circle cx="65" cy="30" r="2.5" fill="currentColor" />

      <circle cx="30" cy="50" r="2.5" fill="currentColor" />
      <circle cx="50" cy="50" r="3" fill="currentColor" />
      <circle cx="70" cy="50" r="2.5" fill="currentColor" />

      <circle cx="35" cy="70" r="2.5" fill="currentColor" />
      <circle cx="50" cy="78" r="2.5" fill="currentColor" />
      <circle cx="65" cy="70" r="2.5" fill="currentColor" />

      {/* Connecting lines (flow/agency) */}
      <line x1="35" y1="30" x2="50" y2="25" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <line x1="50" y1="25" x2="65" y2="30" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <line x1="30" y1="50" x2="50" y2="50" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <line x1="50" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <line x1="35" y1="70" x2="50" y2="78" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <line x1="50" y1="78" x2="65" y2="70" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
    </svg>
  );
}

// ============================================================================
// 2. ASCENDING KNOWLEDGE STAIRCASE (Clean, Minimal)
// Three ascending bars representing growth/learning with a circuit overlay
// ============================================================================
export function EASLogoAscending({
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
      {/* Left bar (E - entry/education) */}
      <rect
        x="15"
        y="55"
        width="20"
        height="20"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line x1="20" y1="60" x2="30" y2="60" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="65" x2="28" y2="65" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="70" x2="30" y2="70" stroke="currentColor" strokeWidth="1.5" />

      {/* Middle bar (A - autonomous/agent) - taller */}
      <rect
        x="40"
        y="35"
        width="20"
        height="40"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="50" cy="45" r="2" fill="currentColor" />
      <circle cx="50" cy="55" r="2" fill="currentColor" />
      <circle cx="50" cy="65" r="2" fill="currentColor" />

      {/* Right bar (S - system/structure) - tallest */}
      <rect
        x="65"
        y="15"
        width="20"
        height="60"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line x1="70" y1="25" x2="80" y2="25" stroke="currentColor" strokeWidth="1.5" />
      <line x1="70" y1="35" x2="80" y2="35" stroke="currentColor" strokeWidth="1.5" />
      <line x1="70" y1="45" x2="80" y2="45" stroke="currentColor" strokeWidth="1.5" />
      <line x1="70" y1="55" x2="80" y2="55" stroke="currentColor" strokeWidth="1.5" />
      <line x1="70" y1="65" x2="80" y2="65" stroke="currentColor" strokeWidth="1.5" />

      {/* Connecting flow lines */}
      <path
        d="M 35 65 Q 38 55 40 45"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="2,2"
        opacity="0.5"
      />
      <path
        d="M 60 45 Q 63 35 65 25"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="2,2"
        opacity="0.5"
      />
    </svg>
  );
}

// ============================================================================
// 3. INTERCONNECTED NODES (Modern/Tech)
// E, A, S as three nodes in a system, connected by learning pathways
// ============================================================================
export function EASLogoNodes({
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
      {/* Connection paths (neural network feel) */}
      <path
        d="M 30 35 L 50 50 L 30 65"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 50 50 L 70 35 L 70 65"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 30 35 Q 50 25 70 35"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 30 65 Q 50 75 70 65"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />

      {/* E - Node (Education) */}
      <circle cx="30" cy="35" r="8" stroke="currentColor" strokeWidth="2" />
      <text
        x="30"
        y="40"
        textAnchor="middle"
        fontSize="12"
        fontWeight="900"
        fill="currentColor"
        fontFamily="system-ui"
      >
        E
      </text>

      {/* A - Node (Agent/Autonomous) - Center hub */}
      <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.08" />
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fontSize="14"
        fontWeight="900"
        fill="currentColor"
        fontFamily="system-ui"
      >
        A
      </text>

      {/* S - Node (System) */}
      <circle cx="70" cy="35" r="8" stroke="currentColor" strokeWidth="2" />
      <text
        x="70"
        y="40"
        textAnchor="middle"
        fontSize="12"
        fontWeight="900"
        fill="currentColor"
        fontFamily="system-ui"
      >
        S
      </text>

      {/* Bottom learning node */}
      <circle cx="50" cy="75" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="50" cy="75" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

// ============================================================================
// 4. FLOWING LEARNING PATH (Elegant)
// A single continuous path that forms an "A" and weaves through E and S
// ============================================================================
export function EASLogoFlowing({
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
      {/* Main flowing path - continuous education flow */}
      <path
        d="M 20 80 L 30 25 L 40 80 M 25 50 L 35 50"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* A - the apex/peak (knowledge pinnacle) */}
      <path
        d="M 45 20 L 55 75 L 65 20 M 48 50 L 62 50"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* S - flowing curve (system flow) */}
      <path
        d="M 75 30 Q 85 35 75 45 Q 65 55 75 65 Q 85 70 75 75"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Subtle gradient indicator dots */}
      <circle cx="30" cy="25" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="55" cy="20" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="75" cy="30" r="1.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

// ============================================================================
// 5. GRADIENT PYRAMID (Aspirational/Growth-oriented)
// Three layers representing progression: Education → Agent → System
// ============================================================================
export function EASLogoPyramid({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Bottom layer - S (System Foundation) */}
      <path
        d="M 15 85 L 85 85 L 75 110 L 25 110 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        opacity="0.1"
      />
      <text
        x="50"
        y="102"
        textAnchor="middle"
        fontSize="14"
        fontWeight="900"
        fill="currentColor"
        opacity="0.6"
        fontFamily="system-ui"
      >
        S
      </text>

      {/* Middle layer - A (Agent/Autonomous) */}
      <path
        d="M 25 55 L 75 55 L 65 85 L 35 85 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        opacity="0.15"
      />
      <text
        x="50"
        y="72"
        textAnchor="middle"
        fontSize="16"
        fontWeight="900"
        fill="currentColor"
        opacity="0.8"
        fontFamily="system-ui"
      >
        A
      </text>

      {/* Top layer - E (Education/Entry) */}
      <path
        d="M 35 15 L 65 15 L 55 55 L 45 55 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        opacity="0.2"
      />
      <text
        x="50"
        y="35"
        textAnchor="middle"
        fontSize="14"
        fontWeight="900"
        fill="currentColor"
        fontFamily="system-ui"
      >
        E
      </text>

      {/* Flow arrows connecting layers */}
      <path
        d="M 50 50 L 50 58"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M 50 82 L 50 87"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
        markerEnd="url(#arrowhead)"
      />

      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto"
        >
          <polygon points="0 0, 10 5, 0 10" fill="currentColor" opacity="0.4" />
        </marker>
      </defs>
    </svg>
  );
}

// ============================================================================
// 6. SYNERGISTIC CORE (Sophisticated)
// Three overlapping circles (Venn diagram style) with "A" in the center
// Represents integration of education, agency, and systems
// ============================================================================
export function EASLogoSynergistic({
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
      {/* Left circle - Education */}
      <circle
        cx="35"
        cy="50"
        r="28"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.7"
      />

      {/* Right circle - System */}
      <circle
        cx="65"
        cy="50"
        r="28"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.7"
      />

      {/* Top circle - Agency */}
      <circle
        cx="50"
        cy="32"
        r="28"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.7"
      />

      {/* Center core (where all three overlap) */}
      <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.5" />

      {/* Central A */}
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fontSize="20"
        fontWeight="900"
        fill="currentColor"
        fontFamily="system-ui"
      >
        A
      </text>

      {/* Labels around circles */}
      <text
        x="28"
        y="85"
        textAnchor="middle"
        fontSize="10"
        fill="currentColor"
        opacity="0.6"
        fontWeight="600"
        fontFamily="system-ui"
      >
        E
      </text>
      <text
        x="72"
        y="85"
        textAnchor="middle"
        fontSize="10"
        fill="currentColor"
        opacity="0.6"
        fontWeight="600"
        fontFamily="system-ui"
      >
        S
      </text>
      <text
        x="50"
        y="12"
        textAnchor="middle"
        fontSize="10"
        fill="currentColor"
        opacity="0.6"
        fontWeight="600"
        fontFamily="system-ui"
      >
        Agent
      </text>
    </svg>
  );
}

// ============================================================================
// SHOWCASE & COMPARISON
// ============================================================================
export function EASLogosShowcase() {
  const logos = [
    {
      name: "Neural Brain",
      subtitle: "AI + Learning symbiosis",
      Component: EASLogoNeural,
    },
    {
      name: "Ascending Path",
      subtitle: "Growth & progression",
      Component: EASLogoAscending,
    },
    {
      name: "Connected Nodes",
      subtitle: "Systems thinking",
      Component: EASLogoNodes,
    },
    {
      name: "Flowing Path",
      subtitle: "Continuous learning journey",
      Component: EASLogoFlowing,
    },
    {
      name: "Gradient Pyramid",
      subtitle: "Layered maturity",
      Component: EASLogoPyramid,
    },
    {
      name: "Synergistic Core",
      subtitle: "Integration & harmony",
      Component: EASLogoSynergistic,
    },
  ];

  return (
    <div className="p-12 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-2">
          EAS Logo System
        </h1>
        <p className="text-lg text-slate-600 mb-12">
          Educational Agentic System — Refined designs balancing learning,
          autonomy, and structure
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {logos.map(({ name, subtitle, Component }) => (
            <div
              key={name}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-400 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-center h-40 mb-6 bg-slate-50 rounded-lg">
                <Component className="h-32 w-32 text-slate-900" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{name}</h3>
              <p className="text-sm text-slate-500">{subtitle}</p>
            </div>
          ))}
        </div>

        {/* Color Variations */}
        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Color Palette (Neural Brain Variant)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Navy", color: "text-blue-900" },
              { name: "Electric Blue", color: "text-blue-500" },
              { name: "Slate", color: "text-slate-700" },
              { name: "Purple", color: "text-purple-600" },
              { name: "Emerald", color: "text-emerald-600" },
            ].map(({ name, color }) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <div className="h-24 w-24 bg-slate-50 rounded-lg flex items-center justify-center">
                  <EASLogoNeural className={`h-20 w-20 ${color}`} />
                </div>
                <p className="text-sm font-semibold text-slate-700">{name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Guide */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h3 className="text-lg font-bold text-blue-900 mb-4">
            Recommended: Neural Brain Logo
          </h3>
          <p className="text-blue-800 text-sm leading-relaxed">
            The Neural Brain design best captures the essence of EAS: the
            interconnected hemispheres represent the duality of education and
            autonomy, while the circuit nodes symbolize the systematic thinking
            required. Recommend using with navy or electric blue at 32px+, and
            the minimalist "Ascending Path" for small icon contexts (16-24px).
          </p>
        </div>
      </div>
    </div>
  );
}

export {
  EASLogoNeural,
  EASLogoAscending,
  EASLogoNodes,
  EASLogoFlowing,
  EASLogoPyramid,
  EASLogoSynergistic,
};
