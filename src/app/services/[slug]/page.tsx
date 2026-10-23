import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Layers,
  Wrench,
  Cpu,
  FileCheck2,
} from "lucide-react";
import { SERVICES_DATA, getServiceBySlug } from "@/data/services";
import { getServiceVisuals } from "@content/services";
import { SOCIAL_CONTENT_TEMPLATES } from "@/data/insights";
import { buildMetadata, buildServiceJsonLd, buildFaqJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ResponsiveFigure } from "@/components/responsive-figure";
import { JsonLd } from "@/components/json-ld";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES_DATA.filter(
    (service) =>
      service.slug !== "generative-ai-applications" &&
      service.slug !== "website-data-security"
  ).map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return {};
  }

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [
      service.primaryKeyword,
      `${service.title} services`,
      `${service.title} company`,
      "Webntric Software",
    ],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const visuals = getServiceVisuals(service);

  const serviceJsonLd = buildServiceJsonLd({
    name: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    category: service.outcomeCategory,
  });

  const faqJsonLd = buildFaqJsonLd(service.faqs);

  return (
    <div className="bg-background">
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* 1. HERO SECTION + VISUAL 1 (HERO VISUAL) */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border">
        <div className="container-editorial space-y-6">
          <Breadcrumbs
            items={[
              { name: "Services", path: "/services" },
              { name: service.title, path: `/services/${service.slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider font-semibold">
                <span>Outcome Pillar: {service.outcomeCategory}</span>
              </div>

              <h1 className="font-bold text-foreground tracking-tight">
                {service.h1}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {service.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-2">
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm sm:text-base font-semibold hover:bg-primary-hover transition-colors"
                >
                  Discuss {service.title}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href="#what-we-deliver"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg bg-surface text-foreground border border-border text-sm sm:text-base font-semibold hover:bg-surface-muted transition-colors"
                >
                  See Deliverables & Scope
                </a>
              </div>

              {/* Summary At-A-Glance Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border text-xs sm:text-sm">
                <div className="p-3.5 rounded-lg bg-surface border border-border">
                  <span className="block text-[11px] font-mono uppercase text-muted-foreground mb-1">
                    Primary Problem Addressed
                  </span>
                  <p className="text-foreground font-medium leading-snug">
                    {service.problemAddressed}
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-surface border border-border">
                  <span className="block text-[11px] font-mono uppercase text-muted-foreground mb-1">
                    Best-Fit Customer
                  </span>
                  <p className="text-foreground font-medium leading-snug">
                    {service.bestFitCustomer}
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-surface border border-border">
                  <span className="block text-[11px] font-mono uppercase text-muted-foreground mb-1">
                    Expected Outcome
                  </span>
                  <p className="text-foreground font-medium leading-snug">
                    {service.expectedOutcomeType}
                  </p>
                </div>
              </div>
            </div>

            {/* VISUAL 1: Primary Service Hero Visual */}
            <aside className="lg:col-span-5">
              <ResponsiveFigure
                src={visuals.hero.src}
                alt={visuals.hero.alt}
                width={1200}
                height={750}
                aspectRatio="16/10"
                priority
                sizes="(max-width: 1023px) 100vw, 500px"
                caption={visuals.hero.caption}
              />
            </aside>
          </div>
        </div>
      </section>

      {/* 2. THE BUSINESS PROBLEM IT SOLVES + VISUAL 2 (PROBLEM CONTEXT) + 3. WHO THIS IS FOR */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                The Operational Problem
              </span>
              <h2 className="font-bold text-foreground">
                {service.detailedProblem.heading}
              </h2>
              <div className="space-y-4">
                {service.detailedProblem.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* VISUAL 2: Problem-Context Visual */}
            <div className="lg:col-span-5">
              <ResponsiveFigure
                src={visuals.problem.src}
                alt={visuals.problem.alt}
                width={1200}
                height={750}
                aspectRatio="16/10"
                sizes="(max-width: 1023px) 100vw, 480px"
                caption={visuals.problem.caption}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Who this is for */}
            <div className="bg-surface border border-border rounded-xl p-6 sm:p-8 space-y-4 h-full">
              <span className="text-xs font-mono uppercase tracking-wider text-success font-semibold">
                Right Fit Assessment
              </span>
              <h3 className="text-xl font-bold text-foreground">
                Who {service.title} is built for
              </h3>
              <ul className="space-y-3">
                {service.whoItIsFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-foreground leading-relaxed"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-success shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who may not need it yet */}
            <div className="bg-surface border border-border rounded-xl p-6 sm:p-8 space-y-4 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-warning font-semibold">
                  Honest Scope Filter
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  Who may not need this service yet
                </h3>
                <ul className="space-y-3">
                  {service.whoMayNotNeedItYet.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                    >
                      <XCircle
                        className="w-4 h-4 text-warning shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-muted-foreground pt-3 border-t border-border">
                Not sure if your business is ready for this step?{" "}
                <Link
                  href="/contact"
                  className="text-primary font-semibold hover:underline"
                >
                  Ask our team for an honest recommendation.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WEBNTRIC DELIVERS + VISUAL 3 (SOLUTION/DELIVERABLE VISUAL) + 5. RECOMMENDED FEATURES */}
      <section
        id="what-we-deliver"
        className="section-padding border-b border-border bg-background scroll-mt-20"
      >
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                Core Engineering & Execution
              </span>
              <h2 className="font-bold text-foreground">
                What Webntric delivers in {service.title}.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every engagement produces tangible, documented deliverables built
                around your daily workflow and customer conversion goals.
              </p>
            </div>

            {/* VISUAL 3: Solution / Deliverable Visual */}
            <div className="lg:col-span-5">
              <ResponsiveFigure
                src={visuals.deliverable.src}
                alt={visuals.deliverable.alt}
                width={1200}
                height={750}
                aspectRatio="16/10"
                sizes="(max-width: 1023px) 100vw, 480px"
                caption={visuals.deliverable.caption}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.whatWebntricDelivers.map((deliverable, idx) => (
              <div
                key={deliverable.title}
                className="bg-surface border border-border rounded-xl p-6 space-y-2.5 h-full"
              >
                <span className="text-xs font-mono font-bold text-primary">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {deliverable.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {deliverable.description}
                </p>
              </div>
            ))}
          </div>

          {/* Recommended features / scope options */}
          <div className="bg-surface-muted border border-border rounded-xl p-6 sm:p-8 space-y-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Modular Scope Options
              </span>
              <h3 className="text-xl font-bold text-foreground mt-1">
                Common features and workflows included in this scope
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {service.recommendedFeatures.map((feat) => (
                <div
                  key={feat}
                  className="p-3.5 rounded-lg bg-surface border border-border flex items-start gap-2.5 text-sm text-foreground"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION FOR SOCIAL MEDIA CONTENT CREATION: 8 TEMPLATES + VISUAL */}
      {service.slug === "social-media-content-creation" && (
        <section className="section-padding border-b border-border bg-surface-muted/40">
          <div className="container-editorial space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                  Practical Content System
                </span>
                <h2 className="font-bold text-foreground">
                  8 reusable social content structures we use for business trust.
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Instead of random festival graphics or generic motivational
                  quotes, we structure social media posts around real buyer
                  questions, operational proof, and local credibility.
                </p>
              </div>
              <div className="lg:col-span-5">
                <ResponsiveFigure
                  src="/images/social/webntric-social-content-calendar-system.webp"
                  alt="Structured 8-pillar social media editorial calendar showing educational carousels, workflow walkthroughs, and local proof"
                  width={1200}
                  height={750}
                  aspectRatio="16/10"
                  sizes="(max-width: 1023px) 100vw, 480px"
                  caption="Monthly content matrix balancing authority education, product walkthroughs, and conversion prompts."
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
      )}

      {/* 6. TYPICAL PROJECT STAGES + VISUAL 4 (PROCESS/WORKFLOW VISUAL) + 7. TECHNOLOGY CHOICES */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-14">
          {/* Project Stages */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                  Execution Sequence
                </span>
                <h2 className="font-bold text-foreground">
                  Typical project stages from discovery to handover
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Every milestone is reviewed with your team on a live staging
                  environment or counter test build before moving to the next
                  stage.
                </p>
              </div>

              {/* VISUAL 4: Process / Workflow Visual */}
              <div className="lg:col-span-5">
                <ResponsiveFigure
                  src={visuals.workflow.src}
                  alt={visuals.workflow.alt}
                  width={1200}
                  height={750}
                  aspectRatio="16/10"
                  sizes="(max-width: 1023px) 100vw, 480px"
                  caption={visuals.workflow.caption}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.projectStages.map((stg) => (
                <div
                  key={stg.stage}
                  className="bg-surface border border-border rounded-xl p-5 space-y-2.5 h-full"
                >
                  <span className="inline-block text-xs font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10">
                    STAGE {stg.stage}
                  </span>
                  <h3 className="text-base font-bold text-foreground">
                    {stg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {stg.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Architecture Choices */}
          <div className="bg-surface border border-border rounded-xl p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
                Practical Stack Selection
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Technology choices explained in business terms
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.technologyChoices.map((item) => (
                <div
                  key={item.tech}
                  className="p-4 rounded-lg bg-surface-muted border border-border space-y-1.5 h-full"
                >
                  <h3 className="text-sm font-mono font-bold text-foreground">
                    {item.tech}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.whenWeUseIt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 8. Integrations + 9. Expected Deliverables + 10. Post-Launch Support */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-surface border border-border rounded-xl p-6 space-y-4 h-full">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Integrations & Inputs
              </span>
              <h3 className="text-lg font-bold text-foreground">
                Integrations & dependencies
              </h3>
              <ul className="space-y-2.5">
                {service.integrationsAndDependencies.map((dep) => (
                  <li
                    key={dep}
                    className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{dep}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6 space-y-4 h-full">
              <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                <FileCheck2 className="w-3.5 h-3.5" aria-hidden="true" />
                Tangible Handover
              </span>
              <h3 className="text-lg font-bold text-foreground">
                Expected deliverables
              </h3>
              <ul className="space-y-2.5">
                {service.expectedDeliverables.map((del) => (
                  <li
                    key={del}
                    className="flex items-start gap-2 text-xs sm:text-sm text-foreground"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-success shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                  <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
                  Long-Term Care
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  Post-launch maintenance & support
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.postLaunchSupport}
                </p>
              </div>
              <Link
                href="/support"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline pt-3 border-t border-border"
              >
                See our full support standards
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SERVICE FAQs */}
      <section className="section-padding border-b border-border bg-background">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Common Questions
            </span>
            <h2 className="font-bold text-foreground">
              Frequently asked questions about {service.title}
            </h2>
          </div>

          <div className="divide-y divide-border border border-border rounded-xl bg-surface overflow-hidden">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="p-6 space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. INTERNAL CROSS-LINKS + 13. CTA WITH VISUAL 5 (SUPPORTING CTA VISUAL) */}
      <section className="section-padding bg-surface-muted/50">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface border border-border rounded-xl p-6 space-y-3">
              <span className="text-xs font-mono uppercase text-muted-foreground">
                Complementary Capabilities
              </span>
              <h3 className="text-base font-bold text-foreground">
                Related Services
              </h3>
              <ul className="space-y-2">
                {service.relatedServices.map((rel) => (
                  <li key={rel.href}>
                    <Link
                      href={rel.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      {rel.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6 space-y-3">
              <span className="text-xs font-mono uppercase text-muted-foreground">
                Sector Workflows
              </span>
              <h3 className="text-base font-bold text-foreground">
                Industries Using This Service
              </h3>
              <ul className="space-y-2">
                {service.relatedIndustries.map((ind) => (
                  <li key={ind.href}>
                    <Link
                      href={ind.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      {ind.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6 space-y-3">
              <span className="text-xs font-mono uppercase text-muted-foreground">
                Stage Guides
              </span>
              <h3 className="text-base font-bold text-foreground">
                Relevant Business Stages
              </h3>
              <ul className="space-y-2">
                {service.relatedStages.map((stg) => (
                  <li key={stg.href}>
                    <Link
                      href={stg.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      {stg.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Conversion CTA Banner with VISUAL 5 */}
          <div className="bg-surface border border-border rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Next Step
              </span>
              <h2 className="font-bold text-foreground">
                Ready to scope {service.title} for your business?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                Share your current workflow or goal. We will review your note
                and respond within 1 business day with a clear, practical path
                forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
                >
                  Discuss {service.title}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg bg-surface-muted text-foreground border border-border text-sm font-semibold hover:bg-background transition-colors"
                >
                  All Services
                </Link>
              </div>
            </div>

            {/* VISUAL 5: Supporting CTA Image */}
            <div className="lg:col-span-5">
              <ResponsiveFigure
                src={visuals.supportingCta.src}
                alt={visuals.supportingCta.alt}
                width={1000}
                height={680}
                aspectRatio="16/10"
                sizes="(max-width: 1023px) 100vw, 440px"
                caption={visuals.supportingCta.caption}
                creditCreator={visuals.supportingCta.creditCreator}
                creditSourceUrl={visuals.supportingCta.creditSourceUrl}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
