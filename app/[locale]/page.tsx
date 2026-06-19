import { getHome } from "@/lib/content";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

export default function Page({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : defaultLocale) as Locale;
  const c = getHome(locale);

  return (
    <main>
      <Hero c={c} />

      <section className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-brand-green/25 bg-brand-green/5 p-6 text-center">
          <h2 className="text-base font-semibold text-brand-green">{c.noticeTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-brand-light/75">{c.noticeBody}</p>
        </div>
      </section>

      <Features c={c} />
      <HowItWorks c={c} />

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{c.privacyTitle}</h2>
        <p className="mt-4 text-sm leading-relaxed text-brand-light/80">{c.privacyBody}</p>
        {c.body ? (
          <p className="mt-6 text-xs leading-relaxed text-brand-gray">{c.body}</p>
        ) : null}
      </section>

      <Footer c={c} locale={locale} />
    </main>
  );
}
