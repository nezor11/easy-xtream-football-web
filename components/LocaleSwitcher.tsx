import Link from "next/link";
import { locales, localeNames, type Locale } from "@/lib/i18n";

export function LocaleSwitcher({ current }: { current: Locale }) {
  return (
    <nav aria-label="Language" className="flex items-center gap-1 text-sm">
      {locales.map((loc) => {
        const active = loc === current;
        return (
          <Link
            key={loc}
            href={`/${loc}`}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "rounded-md bg-brand-green/15 px-2.5 py-1 font-semibold text-brand-green"
                : "rounded-md px-2.5 py-1 text-brand-gray hover:text-brand-light"
            }
          >
            {localeNames[loc]}
          </Link>
        );
      })}
    </nav>
  );
}
