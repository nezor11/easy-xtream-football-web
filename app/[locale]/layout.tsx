import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHome } from "@/lib/content";
import { locales, isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/links";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : defaultLocale) as Locale;
  const c = getHome(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    // favicon.ico is picked up automatically from app/; only the touch icon needs declaring.
    icons: { apple: "/icon-512.png" },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      type: "website",
      url: `/${locale}`,
      locale,
      images: [{ url: "/og.png", width: 1024, height: 500, alt: "Easy Xtream Football" }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
