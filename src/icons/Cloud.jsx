export default function Cloud({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cloud"
    >
      {/* soft outline */}
      <path
        d="M26 56c-8 0-14-6-14-14s6-14 14-14c2.4 0 4.7.5 6.8 1.5C35 21 44 14 54.7 14 69 14 80.6 26 81.1 40.2c1.8-.8 3.9-1.2 6-1.2 8.4 0 15.3 6.7 15.3 15s-6.9 15-15.3 15H26z"
        fill="#dbeafe" /* blue-100 */
        stroke="#c7ddf8"
        strokeWidth="2"
      />
      {/* sparkle */}
      <circle cx="88" cy="27" r="2" fill="#fbcfe8" />
      <circle cx="34" cy="24" r="1.8" fill="#fde68a" />
    </svg>
  );
}
