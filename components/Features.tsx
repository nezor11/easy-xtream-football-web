import type { HomeContent } from "@/lib/content";

export function Features({ c }: { c: HomeContent }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">{c.featuresTitle}</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {c.features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-white/5 bg-brand-surface/60 p-6 transition hover:border-brand-green/40"
          >
            <h3 className="text-lg font-semibold text-brand-green">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-light/75">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
