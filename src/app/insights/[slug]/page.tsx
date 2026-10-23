import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { INSIGHT_ARTICLES, getInsightBySlug } from "@/data/insights";
import { getInsightVisual } from "@content/blog";
import { buildMetadata, buildArticleJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ResponsiveFigure } from "@/components/responsive-figure";
import { JsonLd } from "@/components/json-ld";

export const dynamicParams = false;

export function generateStaticParams() {
  return INSIGHT_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) {
    return {};
  }

  return buildMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/insights/${article.slug}`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
    authors: [article.author.name],
    keywords: [article.primaryKeyword, "Webntric Software insights"],
  });
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  const visual = getInsightVisual(article);

  const articleJsonLd = buildArticleJsonLd({
    title: article.title,
    description: article.metaDescription,
    path: `/insights/${article.slug}`,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    authorName: article.author.name,
  });

  return (
    <div className="bg-background">
      <JsonLd data={articleJsonLd} />

      <article className="pt-8 pb-16 sm:pt-12 sm:pb-24">
        <div className="container-editorial max-w-4xl space-y-10">
          <Breadcrumbs
            items={[
              { name: "Insights", path: "/insights" },
              { name: article.title, path: `/insights/${article.slug}` },
            ]}
          />

          {/* Article Header */}
          <header className="space-y-4 pb-8 border-b border-border">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary font-semibold uppercase">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                {article.readingTime}
              </span>
              <span className="text-muted-foreground">
                Published{" "}
                <time dateTime={article.publishedAt}>
                  {article.publishedAt}
                </time>{" "}
                • Updated{" "}
                <time dateTime={article.updatedAt}>{article.updatedAt}</time>
              </span>
            </div>

            <h1 className="font-bold text-foreground tracking-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>

            <div className="pt-2 text-xs sm:text-sm text-muted-foreground">
              By{" "}
              <strong className="text-foreground font-semibold">
                {article.author.name}
              </strong>{" "}
              ({article.author.role})
            </div>
          </header>

          {/* Featured Editorial Architecture Diagram */}
          <ResponsiveFigure
            src={visual.src}
            alt={visual.alt}
            width={1200}
            height={675}
            aspectRatio="16/9"
            priority
            sizes="(max-width: 896px) 100vw, 840px"
            caption={visual.caption}
          />

          {/* Key Takeaways Box */}
          <div className="bg-surface border border-border rounded-xl p-6 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Executive Summary & Key Takeaways
            </span>
            <ul className="space-y-2.5">
              {article.keyTakeaways.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm sm:text-base text-foreground leading-relaxed"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-primary shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Sections */}
          <div className="space-y-10">
            {article.sections.map((sec) => (
              <section key={sec.heading} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  {sec.heading}
                </h2>
                <div className="space-y-4">
                  {sec.paragraphs.map((p) => (
                    <p
                      key={p}
                      className="text-base text-muted-foreground leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <ul className="space-y-2 pl-1 pt-1">
                    {sec.bulletPoints.map((bp) => (
                      <li
                        key={bp}
                        className="flex items-start gap-2.5 text-sm sm:text-base text-foreground leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Optional Comparison Table (Stacked Cards on Mobile + Table on Desktop) */}
          {article.comparisonTable && (
            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-bold text-foreground">
                {article.comparisonTable.caption}
              </h3>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-4 md:hidden">
                {article.comparisonTable.rows.map((row) => (
                  <div
                    key={row[0]}
                    className="p-4 rounded-xl bg-surface border border-border space-y-2 text-xs"
                  >
                    <p className="text-sm font-bold text-foreground">
                      {row[0]}
                    </p>
                    <div className="pt-2 border-t border-border space-y-1.5">
                      <p className="text-muted-foreground">
                        <strong className="text-foreground font-mono uppercase block text-[11px]">
                          {article.comparisonTable?.headers[1]}:
                        </strong>
                        {row[1]}
                      </p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground font-mono uppercase block text-[11px]">
                          {article.comparisonTable?.headers[2]}:
                        </strong>
                        {row[2]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tablet/Desktop Table */}
              <div className="hidden md:block overflow-x-auto border border-border rounded-xl bg-surface">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-surface-muted border-b border-border text-xs font-mono uppercase text-muted-foreground">
                      {article.comparisonTable.headers.map((header) => (
                        <th key={header} className="p-4 font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {article.comparisonTable.rows.map((row) => (
                      <tr key={row[0]} className="align-top">
                        <td className="p-4 font-semibold text-foreground">
                          {row[0]}
                        </td>
                        <td className="p-4 text-muted-foreground">{row[1]}</td>
                        <td className="p-4 text-muted-foreground">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Related Services & Industries + CTA */}
          <footer className="pt-10 border-t border-border space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface border border-border rounded-xl p-5 space-y-2.5">
                <span className="text-xs font-mono uppercase text-muted-foreground">
                  Related Capabilities
                </span>
                <ul className="space-y-2">
                  {article.relatedServices.map((svc) => (
                    <li key={svc.href}>
                      <Link
                        href={svc.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                      >
                        <ArrowRight
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                        />
                        {svc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface border border-border rounded-xl p-5 space-y-2.5">
                <span className="text-xs font-mono uppercase text-muted-foreground">
                  Related Sectors
                </span>
                <ul className="space-y-2">
                  {article.relatedIndustries.map((ind) => (
                    <li key={ind.href}>
                      <Link
                        href={ind.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                      >
                        <ArrowRight
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                        />
                        {ind.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  Want to apply this to your business?
                </h2>
                <p className="text-sm text-muted-foreground">
                  Talk directly with our engineering team about
                  your workflow or growth requirement.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors shrink-0"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
