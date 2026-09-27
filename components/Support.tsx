import { CoffeeIcon } from "./CoffeeIcon";
import { links } from "@/lib/links";
import type { HomeContent } from "@/lib/content";

/**
 * "Buy me a coffee" section. The QR shown inside the app points at this site, so the ask has to be
 * findable without hunting through the footer.
 */
export function Support({ c }: { c: HomeContent }) {
  return (
    <section id="cafe" className="mx-auto max-w-3xl scroll-mt-12 px-6 pb-16">
      <div className="rounded-2xl border border-brand-green/25 bg-brand-green/5 p-8 text-center">
        <CoffeeIcon className="mx-auto h-10 w-10 text-brand-green" />
        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{c.supportTitle}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-light/80">
          {c.supportBody}
        </p>
        <a
          href={links.kofi}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-brand-darker transition hover:brightness-110"
        >
          <CoffeeIcon className="h-4 w-4" />
          {c.supportCta}
        </a>
        <p className="mt-4 text-xs text-brand-gray">{c.supportNote}</p>
      </div>
    </section>
  );
}
