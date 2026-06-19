import { Emblem } from "./Emblem";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { links } from "@/lib/links";
import type { HomeContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function Footer({ c, locale }: { c: HomeContent; locale: Locale }) {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-12 text-center">
        <div className="flex items-center gap-3">
          <Emblem className="h-8 w-8" />
          <span className="font-semibold">Easy Xtream Football</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <a className="text-brand-light/80 hover:text-brand-green" href={links.github} target="_blank" rel="noopener noreferrer">
            {c.footerSource}
          </a>
          <a className="text-brand-light/80 hover:text-brand-green" href={links.privacy} target="_blank" rel="noopener noreferrer">
            {c.footerPrivacy}
          </a>
          <a className="text-brand-light/80 hover:text-brand-green" href={links.kofi} target="_blank" rel="noopener noreferrer">
            ☕ {c.footerSupport}
          </a>
        </div>
        <LocaleSwitcher current={locale} />
        <p className="text-xs text-brand-gray">{c.footerRights}</p>
      </div>
    </footer>
  );
}
