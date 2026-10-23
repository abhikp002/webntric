import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import {
  INSIGHT_ARTICLES,
  SOCIAL_CONTENT_TEMPLATES,
  getInsightVisual,
} from "@content/blog";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ResponsiveFigure } from "@/components/responsive-figure";

export const metadata: Metadata = buildMetadata({
  title:
    "Insights, Practical Guides & Business Software Resources | Webntric",
  description:
    "Practical decision guides on offline vs. cloud billing software, website conversion architecture, technical SEO, and custom ERP planning for modern businesses.",
  path: "/insights",
  keywords: [
    "business software guides",
    "offline vs cloud billing software guide",
    "website and SEO insights Webntric",
  ],
});

export default function InsightsPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border">
        <div className="container-editorial space-y-6">
          <Breadcrumbs
            items={[{ name: "Insights & Resources", path: "/insights" }]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Editorial Guides & Frameworks
              </span>
              <h1 className="font-bold text-foreground tracking-tight">
                Practical engineering and growth guides for business owners.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Written by our engineering and strategy team to help you make
                informed decisions about offline vs. cloud software, website
                credibility, custom automation, and sustainable search growth.
              </p>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/insights/insights-hero.webp"
                alt="Technology strategist preparing practical software architecture and digital growth guides on a laptop"
                width={1200}
                height={800}
                aspectRatio="16/10"
                priority
                sizes="(max-width: 1023px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              In-Depth Decision Guides
            </span>
            <h2 className="font-bold text-foreground mt-1">
              Featured articles & technical comparisons
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {INSIGHT_ARTICLES.map((article) => {
              const visual = getInsightVisual(article);
              return (
                <article
                  key={article.slug}
                  className="bg-surface border border-border rounded-xl overflow-hidden flex flex-col justify-between shadow-sm hover:border-primary/40 transition-colors h-full"
                >
                  <div>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="block relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-surface-muted"
                    >
                      <Image
                        src={visual.src}
                        alt={visual.alt}
                        width={1200}
                        height={675}
                        sizes="(max-width: 1023px) 100vw, 580px"
                        className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
                      />
                    </Link>

                    <div className="p-6 sm:p-8 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                        <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary font-semibold uppercase">
                          {article.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                          {article.readingTime} • Updated {article.updatedAt}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
                        <Link
                          href={`/insights/${article.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="pt-3 border-t border-border space-y-2">
                        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                          Key Takeaways
                        </p>
                        <ul className="space-y-1.5">
                          {article.keyTakeaways.slice(0, 2).map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2 text-xs text-foreground"
                            >
                              <CheckCircle2
                                className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 sm:px-8 py-4 border-t border-border bg-surface-muted/40 flex items-center justify-between gap-4">
                    <span className="text-xs text-muted-foreground">
                      By {article.author.name}
                    </span>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                    >
                      Read full guide
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* REUSABLE SOCIAL CONTENT FRAMEWORKS */}
      <section className="section-padding border-b border-border bg-background">
        <div className="container-editorial space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                Practical Content System
              </span>
              <h2 className="font-bold text-foreground">
                8 human-written social media content templates for B2B & local
                trust.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Good business social media is built on helpful education,
                transparent operations, and answering buyer objections—not loud
                promotional flyers. Use or adapt these 8 structures.
              </p>
              <div className="pt-1">
                <Link
                  href="/services/social-media-content-creation"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Explore Social Media Content Service
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/social/webntric-social-content-calendar-system.webp"
                alt="Structured 8-pillar social media editorial calendar showing educational carousels, workflow walkthroughs, and local proof"
                width={1200}
                height={750}
                aspectRatio="16/10"
                sizes="(max-width: 1023px) 100vw, 480px"
                caption="8 repeatable B2B & local service post archetypes designed around buyer questions."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOCIAL_CONTENT_TEMPLATES.map((tpl) => (
              <div
                key={tpl.id}
                className="bg-surface border border-border rounded-xl p-6 space-y-4 h-full flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono uppercase text-primary font-semibold">
                      {tpl.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {tpl.recommendedPlatforms.map((plat) => (
                        <span
                          key={plat}
                          className="px-2 py-0.5 rounded text-[11px] bg-surface-muted border border-border text-muted-foreground"
                        >
                          {plat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {tpl.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">When to use: </strong>
                    {tpl.whenToUse}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-surface-muted border border-border text-xs text-foreground whitespace-pre-line font-sans leading-relaxed">
                  {tpl.exampleCopy}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
