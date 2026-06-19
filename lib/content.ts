import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "./i18n";
import { defaultLocale } from "./i18n";

export type Feature = { title: string; body: string };

export type HomeContent = {
  /** SEO / <head> */
  metaTitle: string;
  metaDescription: string;
  /** Hero */
  tagline: string;
  heroTitle: string;
  heroBody: string;
  ctaGithub: string;
  ctaPrivacy: string;
  /** "Not included" disclaimer (IPTV policy) */
  noticeTitle: string;
  noticeBody: string;
  /** Features */
  featuresTitle: string;
  features: Feature[];
  /** How it works */
  howTitle: string;
  howSteps: string[];
  /** Privacy / open source */
  privacyTitle: string;
  privacyBody: string;
  /** Footer */
  footerSupport: string;
  footerSource: string;
  footerPrivacy: string;
  footerRights: string;
  /** Optional long-form markdown body */
  body: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getHome(locale: Locale): HomeContent {
  const file = path.join(CONTENT_DIR, locale, "home.md");
  const fallback = path.join(CONTENT_DIR, defaultLocale, "home.md");
  const raw = fs.readFileSync(fs.existsSync(file) ? file : fallback, "utf8");
  const { data, content } = matter(raw);
  return { ...(data as Omit<HomeContent, "body">), body: content.trim() };
}
