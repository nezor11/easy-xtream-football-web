import { Emblem } from "./Emblem";
import { links } from "@/lib/links";
import type { HomeContent } from "@/lib/content";

export function Hero({ c }: { c: HomeContent }) {
  return (
    <header className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-16 pt-20 text-center sm:pt-28">
        <Emblem className="h-24 w-24 drop-shadow-[0_0_24px_rgba(57,211,83,0.25)] sm:h-28 sm:w-28" />
        <p className="mt-6 text-sm font-medium uppercase tracking-widest text-brand-green">
          {c.tagline}
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">
          {c.heroTitle}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-light/80 sm:text-lg">
          {c.heroBody}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-brand-darker transition hover:brightness-110"
          >
            {c.ctaGithub}
          </a>
          <a
            href={links.privacy}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-brand-gray/40 px-6 py-3 text-sm font-semibold text-brand-light transition hover:border-brand-light"
          >
            {c.ctaPrivacy}
          </a>
        </div>
      </div>
    </header>
  );
}
