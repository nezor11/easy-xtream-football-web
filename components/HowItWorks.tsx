import type { HomeContent } from "@/lib/content";

export function HowItWorks({ c }: { c: HomeContent }) {
  return (
    <section className="border-y border-white/5 bg-brand-surface/30">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">{c.howTitle}</h2>
        <ol className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
          {c.howSteps.map((step, i) => (
            <li key={i} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/15 text-lg font-bold text-brand-green">
                {i + 1}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-light/80">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
