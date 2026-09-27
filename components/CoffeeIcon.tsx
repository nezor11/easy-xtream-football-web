/**
 * The same cup the app draws in its "buy me a coffee" card (Material's local_cafe), so the site and
 * the app show one consistent mark instead of the ☕ emoji, which each system paints differently.
 * Inherits the text colour via currentColor.
 */
export function CoffeeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      className={className}
    >
      <path d="M20,3H4v10c0,2.21 1.79,4 4,4h6c2.21,0 4,-1.79 4,-4v-3h2c1.11,0 2,-0.9 2,-2V5C22,3.89 21.11,3 20,3zM20,8h-2V5h2V8zM4,19h16v2H4V19z" />
    </svg>
  );
}
