import Link from "next/link";
import { Emblem } from "@/components/Emblem";
import { defaultLocale } from "@/lib/i18n";

// The root layout is a pass-through (each locale layout owns <html lang>), so
// this page must render its own <html>/<body> or Next serves a document
// without them. Bilingual copy because we don't know the visitor's locale here.
export default function NotFound() {
  return (
    <html lang={defaultLocale}>
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <Emblem className="h-16 w-16 opacity-80" />
          <p className="mt-6 text-sm font-medium uppercase tracking-widest text-brand-green">404</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Página no encontrada · Page not found
          </h1>
          <Link
            href={`/${defaultLocale}`}
            className="mt-8 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-brand-darker transition hover:brightness-110"
          >
            Volver al inicio · Back home
          </Link>
        </main>
      </body>
    </html>
  );
}
