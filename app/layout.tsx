import "./globals.css";
import type { ReactNode } from "react";

// Pass-through root layout: the per-locale layout under app/[locale] owns the
// <html lang> so each language renders with the correct lang attribute.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
