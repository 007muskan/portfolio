export default function Flower({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Flower"
    >
      {/* petals */}
      <g fill="#fce7f3" stroke="#f9a8d4" strokeWidth="2">
        <circle cx="60" cy="26" r="18" />
        <circle cx="92" cy="46" r="18" />
        <circle cx="84" cy="82" r="18" />
        <circle cx="36" cy="82" r="18" />
        <circle cx="28" cy="46" r="18" />
      </g>
      {/* center */}
      <circle
        cx="60"
        cy="58"
        r="16"
        fill="#fde68a"
        stroke="#facc15"
        strokeWidth="2"
      />
      {/* leaf */}
      <path
        d="M62 98c14 8 30 4 38-8-14-4-27 0-38 8z"
        fill="#c7f9cc"
        stroke="#86efac"
        strokeWidth="2"
      />
    </svg>
  );
}
