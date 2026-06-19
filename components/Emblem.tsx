// The app's brand emblem (a stylized football), drawn from the same vector path
// used by the Android launcher icon, so the web matches the app exactly.
export function Emblem({ className }: { className?: string }) {
  const ball =
    "M54,39 L68.27,49.36 L62.82,66.14 L45.18,66.14 L39.73,49.36 Z " +
    "M54,25 L68.27,14.64 L62.82,-2.14 L45.18,-2.14 L39.73,14.64 Z " +
    "M26.42,45.05 L20.97,28.27 L3.33,28.27 L-2.12,45.05 L12.15,55.41 Z " +
    "M36.96,77.46 L19.32,77.46 L13.87,94.24 L28.14,104.6 L42.41,94.24 Z " +
    "M71.04,77.46 L65.59,94.24 L79.86,104.6 L94.13,94.24 L88.68,77.46 Z " +
    "M81.58,45.05 L95.85,55.41 L110.12,45.05 L104.67,28.27 L87.03,28.27 Z " +
    "M54,39 L54,25 M39.73,49.36 L26.42,45.05 M45.18,66.14 L36.96,77.46 " +
    "M62.82,66.14 L71.04,77.46 M68.27,49.36 L81.58,45.05";
  return (
    <svg viewBox="0 0 108 108" className={className} role="img" aria-label="Easy Xtream Football">
      <defs>
        <clipPath id="ballClip">
          <circle cx="54" cy="54" r="52" />
        </clipPath>
      </defs>
      <circle cx="54" cy="54" r="54" fill="#39D353" />
      <g
        clipPath="url(#ballClip)"
        fill="none"
        stroke="#06210E"
        strokeWidth={2.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={ball} />
      </g>
    </svg>
  );
}
