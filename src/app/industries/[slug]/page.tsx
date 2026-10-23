import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, HelpCircle } from "lucide-react";
import { INDUSTRIES_DATA, getIndustryBySlug } from "@/data/industries";
import { getIndustryVisual } from "@content/industries";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ResponsiveFigure } from "@/components/responsive-figure";

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES_DATA.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) {
    return {};
  }

  return buildMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
    keywords: [
      industry.primaryKeyword,
      `${industry.title} software solutions`,
      `${industry.title} website and digital marketing`,
      "Webntric Software",
    ],
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const visual = getIndustryVisual(industry);

  return (
    <div className="bg-background">
      {/* 1. HERO */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border">
        <div className="container-editorial space-y-6">
          <Breadcrumbs
            items={[
              { name: "Industries", path: "/industries" },
              { name: industry.title, path: `/industries/${industry.slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider font-semibold">
                Industry Focus: {industry.shortLabel}
              </span>
              <h1 className="font-bold text-foreground tracking-tight">
                {industry.h1}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {industry.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href={`/contact?industry=${industry.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm sm:text-base font-semibold hover:bg-primary-hover transition-colors"
                >
                  Discuss Your {industry.shortLabel} Project
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href="#suitable-services"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg bg-surface text-foreground border border-border text-sm sm:text-base font-semibold hover:bg-surface-muted transition-colors"
                >
                  See Recommended Solutions
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src={visual.src}
                alt={visual.alt}
                width={1200}
                height={750}
                aspectRatio="16/10"
                priority
                sizes="(max-width: 1023px) 100vw, 500px"
                caption={visual.caption}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OPERATIONAL PROBLEMS & CUSTOMER EXPECTATIONS */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Sector Bottlenecks
            </span>
            <h2 className="font-bold text-foreground">
              Real operational challenges in {industry.title}.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.operationalProblems.map((prob, idx) => (
              <div
                key={prob.title}
                className="bg-surface border border-border rounded-xl p-6 space-y-2.5 h-full"
              >
                <span className="text-xs font-mono font-bold text-primary">
                  BOTTLENECK 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {prob.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prob.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Customer expectations */}
          <div className="bg-surface border border-border rounded-xl p-6 sm:p-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Modern Buyer & User Expectations
            </span>
            <h3 className="text-xl font-bold text-foreground">
              What your customers, patients, or buyers expect today
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {industry.customerExpectations.map((exp) => (
                <div
                  key={exp}
                  className="p-4 rounded-lg bg-surface-muted border border-border flex items-start gap-2.5 text-sm text-foreground"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{exp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY NEEDS & TRADEOFFS */}
      <section className="section-padding border-b border-border bg-background">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
              Architectural Guidance
            </span>
            <h2 className="font-bold text-foreground">
              {industry.technologyNeedsAndTradeoffs.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.technologyNeedsAndTradeoffs.points.map((pt) => (
              <div
                key={pt.label}
                className="bg-surface border border-border rounded-xl p-6 space-y-2.5 h-full"
              >
                <h3 className="text-base font-bold text-foreground">
                  {pt.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pt.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SUITABLE WEBNTRIC SERVICES + OBJECTION ADDRESSED */}
      <section
        id="suitable-services"
        className="section-padding border-b border-border bg-surface-muted/40 scroll-mt-20"
      >
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Recommended Capabilities
            </span>
            <h2 className="font-bold text-foreground">
              How Webntric supports {industry.title} businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.suitableServices.map((svc) => (
              <div
                key={svc.href}
                className="bg-surface border border-border rounded-xl p-6 flex flex-col justify-between gap-4 hover:border-primary/40 transition-colors h-full"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {svc.href.startsWith("http") ? (
                      <a
                        href={svc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                      >
                        {svc.name}
                        <span className="text-xs text-primary font-normal">↗</span>
                      </a>
                    ) : (
                      <Link
                        href={svc.href}
                        className="hover:text-primary transition-colors"
                      >
                        {svc.name}
                      </Link>
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {svc.howItHelps}
                  </p>
                </div>
                {svc.href.startsWith("http") ? (
                  <a
                    href={svc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline pt-3 border-t border-border"
                  >
                    Visit {svc.name}
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline pt-3 border-t border-border"
                  >
                    Explore {svc.name}
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Objection Addressed */}
          <div className="bg-surface border border-border rounded-xl p-6 sm:p-8 space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
              Common Practical Concern
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              {industry.objectionAddressed.question}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {industry.objectionAddressed.answer}
            </p>
          </div>

          {/* Related Stages + CTA */}
          <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-2xl font-bold text-foreground">
                Talk to us about your {industry.title.toLowerCase()} operation.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Tell us what is slowing your team down or what you want to
                launch next. We will recommend a clear, right-sized scope.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-mono uppercase text-muted-foreground">
                  Related business stages:
                </span>
                {industry.relatedStages.map((stg) => (
                  <Link
                    key={stg.href}
                    href={stg.href}
                    className="px-2.5 py-1 rounded text-xs font-medium bg-surface-muted border border-border text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {stg.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href={`/contact?industry=${industry.slug}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/industries"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg bg-surface-muted text-foreground border border-border text-sm font-semibold hover:bg-background transition-colors"
              >
                All Industries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
