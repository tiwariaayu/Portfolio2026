export const ClickMeArrow = ({ className }) => (
  <svg
    width="160"
    height="60"
    viewBox="0 0 160 60"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ff4d6d" />
        <stop offset="100%" stopColor="#e9204f" />
      </linearGradient>

      <marker
        id="arrowhead"
        markerWidth="6"
        markerHeight="6"
        refX="5.2"
        refY="3"
        orient="auto"
        markerUnits="strokeWidth"
      >
        <path
          d="M0 0 L5 3 L0 6"
          fill="none"
          stroke="#e9204f"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </marker>
    </defs>

    <path
      d="M40 32 Q 80 10 122 22"
      stroke="url(#arrowGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="6 4"
      fill="none"
      markerEnd="url(#arrowhead)"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-20"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </path>
    
    <text 
      x="5" 
      y="28" 
      fill="#e9204f" 
      style={{ fontFamily: 'var(--font-caveat)' }} 
      fontSize="18" 
      fontWeight="bold" 
      transform="rotate(-15 20 20)"
    >
      click me!
    </text>
  </svg>
);
