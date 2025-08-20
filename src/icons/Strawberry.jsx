export default function Strawberry({ className = "" }) {
  return (
    <svg
      viewBox="0 0 96 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Strawberry"
    >
      {/* leaves */}
      <path
        d="M48 18c7-10 20-10 25 0-7 0-12 4-13 9-3-5-7-8-12-9z"
        fill="#bbf7d0" /* green-200 */
        stroke="#86efac"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M48 18c-7-10-20-10-25 0 7 0 12 4 13 9 3-5 7-8 12-9z"
        fill="#bbf7d0"
        stroke="#86efac"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* body */}
      <path
        d="M48 30c-20 0-30 12-30 26 0 19 16 34 30 44 14-10 30-25 30-44 0-14-10-26-30-26z"
        fill="#fecdd3" /* rose-200 */
        stroke="#fda4af"
        strokeWidth="2"
      />
      {/* seeds */}
      {Array.from({ length: 18 }).map((_, i) => {
        const rows = [
          { y: 48, xs: [30, 42, 54, 66] },
          { y: 60, xs: [26, 38, 50, 62, 74] },
          { y: 72, xs: [30, 42, 54, 66] },
          { y: 84, xs: [36, 48, 60] },
        ];
        const flat = rows.flatMap((r) => r.xs.map((x) => ({ x, y: r.y })));
        const { x, y } = flat[i] || { x: -100, y: -100 };
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="3"
            ry="4.2"
            fill="#fde68a"
            stroke="#fcd34d"
          />
        );
      })}
    </svg>
  );
}
