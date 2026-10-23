import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import {
  BUSINESS_STAGES_DATA,
  getBusinessStageBySlug,
} from "@/data/business-stages";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ResponsiveFigure } from "@/components/responsive-figure";

export const dynamicParams = false;

export function generateStaticParams() {
  return BUSINESS_STAGES_DATA.map((stage) => ({
    slug: stage.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stage = getBusinessStageBySlug(slug);
  if (!stage) {
    return {};
  }

  return buildMetadata({
    title: stage.metaTitle,
    description: stage.metaDescription,
    path: `/businesses/${stage.slug}`,
    keywords: [
      stage.primaryKeyword,
      `${stage.title} software solutions`,
      "Webntric Software",
    ],
  });
}

export default async function BusinessStageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stage = getBusinessStageBySlug(slug);

  if (!stage) {
    notFound();
  }

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border">
        <div className="container-editorial space-y-6">
          <Breadcrumbs
            items={[
              { name: "Businesses We Help", path: "/businesses" },
              { name: stage.title, path: `/businesses/${stage.slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider font-semibold">
                Business Stage Roadmap — {stage.shortLabel}
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.14]">
                {stage.h1}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {stage.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/contact?stage=${stage.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground text-sm sm:text-base font-semibold hover:bg-primary-hover transition-colors"
                >
                  Discuss Your {stage.title} Plan
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href="#priorities"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-surface text-foreground border border-border text-sm sm:text-base font-semibold hover:bg-surface-muted transition-colors"
                >
                  See What to Prioritize First
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src={`/images/businesses/${stage.slug}.webp`}
                alt={`${stage.h1} — technology and software roadmap`}
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

      {/* WHO THIS IS FOR & CORE PROBLEM */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-surface border border-border rounded-xl p-6 sm:p-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Who This Roadmap Fits
              </span>
              <h2 className="text-xl font-bold text-foreground">
                Who we built this guide for
              </h2>
              <ul className="space-y-3">
                {stage.whoThisIsFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-foreground leading-relaxed"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 bg-surface border border-border rounded-xl p-6 sm:p-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                The Core Challenge
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                {stage.coreProblem.heading}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {stage.coreProblem.description}
              </p>
              <div className="pt-3 border-t border-border space-y-2.5">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Common Symptoms at This Stage
                </p>
                <ul className="space-y-2">
                  {stage.coreProblem.symptoms.map((sym) => (
                    <li
                      key={sym}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO PRIORITIZE FIRST + WHAT TO AVOID NOW */}
      <section
        id="priorities"
        className="section-padding border-b border-border bg-background scroll-mt-20"
      >
        <div className="container-editorial space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Practical Sequencing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              What to prioritize first—and what to avoid right now.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stage.whatToPrioritizeFirst.map((prio) => (
              <div
                key={prio.step}
                className="bg-surface border border-border rounded-xl p-6 space-y-3"
              >
                <span className="inline-block text-xs font-mono font-bold text-primary px-2.5 py-0.5 rounded bg-primary/10">
                  PRIORITY {prio.step}
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {prio.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prio.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-surface-muted border border-border rounded-xl p-6 sm:p-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-warning font-semibold">
              Budget & Time Protection
            </span>
            <h3 className="text-xl font-bold text-foreground">
              What to avoid at this stage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stage.whatToAvoidNow.map((avoid) => (
                <div
                  key={avoid}
                  className="p-4 rounded-lg bg-surface border border-border flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <XCircle
                    className="w-4 h-4 text-warning shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{avoid}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMENDED SERVICES + OBJECTION ADDRESSED + CTA */}
      <section className="section-padding bg-surface-muted/40">
        <div className="container-editorial space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Recommended Webntric services for {stage.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stage.recommendedServices.map((svc) => (
                <div
                  key={svc.href}
                  className="bg-surface border border-border rounded-xl p-6 flex flex-col justify-between gap-4 hover:border-primary/40 transition-colors"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      <Link
                        href={svc.href}
                        className="hover:text-primary transition-colors"
                      >
                        {svc.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {svc.reason}
                    </p>
                  </div>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline pt-3 border-t border-border"
                  >
                    Explore {svc.name}
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Objection Addressed */}
          <div className="bg-surface border border-border rounded-xl p-6 sm:p-8 space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
              Common Question at This Stage
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              {stage.objectionAddressed.question}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {stage.objectionAddressed.answer}
            </p>
          </div>

          {/* CTA */}
          <div className="bg-surface border border-border rounded-2xl p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-2xl font-bold text-foreground">
                Ready to discuss your next step?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Share where your business stands today, and we will help you
                define a sensible, focused starting scope.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-mono uppercase text-muted-foreground">
                  Relevant sectors:
                </span>
                {stage.relatedIndustries.map((ind) => (
                  <Link
                    key={ind.href}
                    href={ind.href}
                    className="px-2.5 py-1 rounded text-xs font-medium bg-surface-muted border border-border text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {ind.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href={`/contact?stage=${stage.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/businesses"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-surface-muted text-foreground border border-border text-sm font-semibold hover:bg-background transition-colors"
              >
                All Business Stages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
