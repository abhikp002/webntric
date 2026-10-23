import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Terminal,
  Wrench,
  Clock,
  FileCheck2,
  Lock,
  Phone,
  Mail,
} from "lucide-react";
import { buildMetadata, buildFaqJsonLd } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site-config";
import { OUTCOME_CATEGORIES, SERVICES_DATA } from "@/data/services";
import { INDUSTRIES_DATA } from "@/data/industries";
import { CORE_FAQS } from "@/data/faqs";
import { BusinessStageSelector } from "@/components/business-stage-selector";
import { WorkFilterGrid } from "@/components/work-filter-grid";
import { FaqAccordion } from "@/components/faq-accordion";
import { ResponsiveFigure } from "@/components/responsive-figure";
import { AppleHeroSlider } from "@/components/apple-hero-slider";
import {
  AppleScrollSection,
  AppleBentoCard,
} from "@/components/apple-motion-sections";
import { AIWorkflowDiagram } from "@/components/ai-security/ai-workflow-diagram";
import { TrustCardsStrip } from "@/components/ai-security/trust-cards-strip";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = buildMetadata({
  title:
    "Webntric Software | Custom Software, Websites & Digital Growth Partner",
  description:
    "Webntric Software builds credible websites, offline Windows & custom billing software, mobile apps, and search-led growth systems for modern businesses.",
  path: "/",
  keywords: [
    "software development and digital growth company",
    "custom business software",
    "offline Windows billing software",
    "website development company",
    "Webntric Software",
  ],
});

const OUTCOME_PILLAR_VISUALS: Record<
  string,
  { src: string; alt: string; caption: string }
> = {
  "establish-credibility": {
    src: "/images/home/outcome-credibility-websites-apps.webp",
    alt: "Responsive website and mobile application interface preview showing Core Web Vitals speed and clean inquiry capture",
    caption:
      "Credible web & mobile interfaces engineered for fast mobile loading and clear buyer conversion.",
  },
  "run-operations": {
    src: "/images/home/outcome-efficiency-offline-pos-erp.webp",
    alt: "Offline Windows GST billing and multi-godown inventory dashboard with keyboard shortcuts and local SQLite sync",
    caption:
      "Zero-internet offline Windows POS, GST billing, and custom multi-branch ERP systems built for high-volume counters.",
  },
  "reach-customers": {
    src: "/images/home/outcome-reach-customers-seo-growth.webp",
    alt: "Search engine visibility, Google Business Profile ranking, and lead generation funnel analytics dashboard",
    caption:
      "Search-first SEO, social media authority, and high-intent lead generation funnels tracked to real enquiries.",
  },
  "keep-improving": {
    src: "/images/home/outcome-keep-improving-maintenance.webp",
    alt: "Proactive maintenance dashboard showing automated encrypted backups, SSL health checks, and workflow automation",
    caption:
      "Scheduled encrypted backups, uptime monitoring, security patching, and practical digital transformation consulting.",
  },
};

const PROBLEM_RECOGNITION_ITEMS = [
  {
    tag: "Credibility Gap",
    title: "Potential customers check your business online and hesitate",
    detail:
      "You run a reliable operation offline, but having no website—or an outdated, slow template—causes new buyers, referrals, and institutional partners to question your scale.",
    relatedLink: "/services/website-development",
    relatedLabel: "Website Development",
  },
  {
    tag: "Manual Bottlenecks",
    title: "Paper registers and disconnected spreadsheets slow down your staff",
    detail:
      "Approvals get lost in WhatsApp threads, stock counts between the godown and counter never match, and compiling a monthly summary takes days of manual re-typing.",
    relatedLink: "/services/custom-business-software",
    relatedLabel: "Custom Business Software",
  },
  {
    tag: "Offline Reliability",
    title: "Cloud billing tools freeze whenever internet connectivity drops",
    detail:
      "During peak rush hours at a retail counter, wholesale depot, clinic reception, or school fee desk, waiting on a slow browser tab creates queues and calculation errors.",
    relatedLink: "/services/offline-windows-software",
    relatedLabel: "Offline Windows Software",
  },
  {
    tag: "Unpredictable Enquiries",
    title: "You want steadier customer enquiries without wasted ad spend",
    detail:
      "Boosted social posts and generic marketing bring low-intent clicks instead of local or B2B buyers who are actively searching for your products and services.",
    relatedLink: "/services/seo-services",
    relatedLabel: "SEO & Lead Generation",
  },
  {
    tag: "Unclear Priorities",
    title: "You are unsure which technology investment should come first",
    detail:
      "Whether you are launching a startup or modernizing a family business, you want honest advice on what to build now and what can safely wait for phase two.",
    relatedLink: "/services/business-automation-consulting",
    relatedLabel: "Automation & Digital Consulting",
  },
  {
    tag: "Post-Launch Abandonment",
    title: "Past vendors disappeared once the final invoice was paid",
    detail:
      "Software and websites need security updates, backups, and adjustments as your business grows. You need an engineering partner who remains reachable after launch.",
    relatedLink: "/services/website-maintenance-and-support",
    relatedLabel: "Maintenance & Support",
  },
];

const WHY_WEBNTRIC_POINTS = [
  {
    title: "Business-first thinking before code",
    description:
      "We map your counter workflow, staff roles, and customer buying journey before recommending a technology stack. If a simpler solution solves your problem, we tell you upfront.",
  },
  {
    title: "Websites, offline software, and growth under one roof",
    description:
      "Most agencies only build marketing sites or only write backend code. We connect your public credibility, internal billing/ERP software, and customer acquisition into one coherent system.",
  },
  {
    title: "Practical solutions for real-world operating conditions",
    description:
      "From keyboard-driven offline Windows POS systems that run with zero internet dependency to sub-second Next.js web platforms, we engineer for real-world environments.",
  },
  {
    title: "Clear communication without technical jargon",
    description:
      "You speak directly with the engineers and strategists building your system. Every scope document is written in plain business language with transparent milestones.",
  },
  {
    title: "Custom scope matched to your business stage",
    description:
      "A startup validating an idea, a local clinic, and a multi-branch distributor have very different priorities. We right-size your architecture so you never pay for bloated features.",
  },
  {
    title: "Long-term support after launch",
    description:
      "Launch is the beginning of daily operations. We provide structured staff onboarding, encrypted backup routines, security patching, and responsive ongoing support.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand the Business",
    description:
      "We review your current workflow, customer bottlenecks, staff comfort level, and business goals in a structured discovery conversation.",
  },
  {
    step: "02",
    title: "Define the Right Scope",
    description:
      "You receive a written scope document detailing exact deliverables, milestones, technology choices, and what can wait for phase two.",
  },
  {
    step: "03",
    title: "Design & Build",
    description:
      "Our engineering team designs clean interfaces and builds your website, mobile app, or desktop software with regular staging previews.",
  },
  {
    step: "04",
    title: "Review & Test",
    description:
      "We test across real mobile devices, barcode/printer hardware, edge cases, and role permissions alongside your team before launch.",
  },
  {
    step: "05",
    title: "Launch & Train",
    description:
      "We handle production deployment, DNS/SSL setup, database backups, and hands-on training so your staff can operate with confidence.",
  },
  {
    step: "06",
    title: "Support & Improve",
    description:
      "We stay available for ongoing maintenance, SEO growth, performance monitoring, and phase-two feature upgrades as your business expands.",
  },
];

export default function HomePage() {
  const homeFaqs = CORE_FAQS.filter((faq) => faq.showOnHome);

  return (
    <>
      <JsonLd data={buildFaqJsonLd(homeFaqs)} />

      {/* SECTION 2: APPLE-INSPIRED TRADITIONAL HERO SLIDER */}
      <AppleHeroSlider />

      {/* SECTION 3: PROBLEM RECOGNITION */}
      <AppleScrollSection className="section-padding border-b border-border bg-surface-muted/50">
        <div className="container-editorial space-y-12">
          <div className="apple-reveal-header grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Operational Reality
              </span>
              <h2 className="font-semibold text-foreground">
                We work with businesses facing real operational and growth
                bottlenecks.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Most business owners do not wake up wanting &ldquo;digital
                transformation.&rdquo; They want their counter billing to stop
                freezing, their staff to stop losing records, and qualified
                buyers to trust them when searching online.
              </p>
            </div>
            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/home/business-manual-records-challenge.webp"
                alt="Business operator reconciling printed ledger sheets alongside a laptop to resolve manual record bottlenecks"
                width={1000}
                height={680}
                aspectRatio="16/10"
                sizes="(max-width: 1023px) 100vw, 480px"
                caption="Replacing disconnected paper registers and fragile spreadsheets with unified daily software."
                creditCreator="Rodeo Project Management Software"
                creditSourceUrl="https://unsplash.com/photos/person-using-laptop-computer-bZD6EO4cx2U"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROBLEM_RECOGNITION_ITEMS.map((item) => (
              <AppleBentoCard
                key={item.title}
                className="p-6 flex flex-col justify-between gap-5 h-full"
              >
                <div className="space-y-3">
                  <span className="apple-card-badge inline-block text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                <Link
                  href={item.relatedLink}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline pt-3 border-t border-border"
                >
                  See how {item.relatedLabel} helps
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </AppleBentoCard>
            ))}
          </div>
        </div>
      </AppleScrollSection>

      {/* SECTION 4: INTERACTIVE BUSINESS STAGE / NEED SELECTOR */}
      <AppleScrollSection
        id="find-your-starting-point"
        className="section-padding border-b border-border bg-background scroll-mt-20"
      >
        <div className="container-editorial space-y-10">
          <div className="apple-reveal-header max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Interactive Diagnostic
            </span>
            <h2 className="font-semibold text-foreground">
              Not sure where to start? Select your current priority.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Choose the statement that best describes your situation right now
              to see the likely bottleneck, the most practical first step, and
              what you can safely defer.
            </p>
          </div>

          <BusinessStageSelector />
        </div>
      </AppleScrollSection>

      {/* SECTION 5: SERVICES BY BUSINESS OUTCOME */}
      <AppleScrollSection className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-14">
          <div className="apple-reveal-header flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                15 Core Capabilities • 4 Business Outcomes
              </span>
              <h2 className="font-semibold text-foreground">
                Services organized by what they achieve for your business.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Instead of overwhelming you with disconnected technical terms, we
                group our engineering and marketing services around four clear
                business outcomes.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline shrink-0"
            >
              Compare all 15 services in detail
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-12">
            {OUTCOME_CATEGORIES.map((category, idx) => {
              const categoryServices = SERVICES_DATA.filter(
                (svc) => svc.outcomeCategory === category.id
              );
              const pillarVisual = OUTCOME_PILLAR_VISUALS[category.id];
              const isSingleService = categoryServices.length === 1;
              const singleService = isSingleService ? categoryServices[0] : null;

              if (isSingleService && singleService) {
                return (
                  <div
                    key={category.id}
                    className="bg-surface border border-border rounded-[1.5rem] p-5 sm:p-8 shadow-xs"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                      {/* Left Column: Pillar 04 Header + Integrated Service Bento Card */}
                      <div className="lg:col-span-7 flex flex-col justify-between gap-5">
                        <div className="space-y-2">
                          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                            Outcome Pillar 0{idx + 1}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                            {category.title} —{" "}
                            <span className="font-normal text-muted-foreground">
                              {category.subtitle}
                            </span>
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {category.problemStatement}
                          </p>
                        </div>

                        <AppleBentoCard className="p-5 sm:p-6 bg-surface-muted/60 flex flex-col justify-between gap-4 flex-1">
                          <div className="space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <h4 className="text-base sm:text-lg font-semibold text-foreground">
                                <Link
                                  href={`/services/${singleService.slug}`}
                                  className="hover:text-primary transition-colors"
                                >
                                  {singleService.title}
                                </Link>
                              </h4>
                              <span className="apple-card-badge text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                                Ongoing SLA & Care
                              </span>
                            </div>

                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {singleService.shortSummary}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                              {singleService.whatWebntricDelivers
                                .slice(0, 4)
                                .map((deliverable) => (
                                  <div
                                    key={deliverable.title}
                                    className="p-3 rounded-xl bg-surface border border-border flex items-start gap-2"
                                  >
                                    <CheckCircle2
                                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                                      aria-hidden="true"
                                    />
                                    <span className="text-xs font-medium text-foreground leading-snug">
                                      {deliverable.title}
                                    </span>
                                  </div>
                                ))}
                            </div>

                            <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              <p className="text-muted-foreground">
                                <strong className="text-foreground font-semibold">
                                  Best fit:{" "}
                                </strong>
                                {singleService.bestFitCustomer}
                              </p>
                              <p className="text-muted-foreground">
                                <strong className="text-foreground font-semibold">
                                  Outcome:{" "}
                                </strong>
                                {singleService.expectedOutcomeType}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-border">
                            <Link
                              href={`/services/${singleService.slug}`}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                            >
                              Explore {singleService.title}
                              <ArrowRight
                                className="w-3.5 h-3.5"
                                aria-hidden="true"
                              />
                            </Link>
                            <Link
                              href="/support"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                            >
                              View Post-Launch Support & Continuity Model →
                            </Link>
                          </div>
                        </AppleBentoCard>
                      </div>

                      {/* Right Column: Visual + Continuity Highlights */}
                      {pillarVisual && (
                        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                          <ResponsiveFigure
                            src={pillarVisual.src}
                            alt={pillarVisual.alt}
                            width={1200}
                            height={750}
                            aspectRatio="16/10"
                            sizes="(max-width: 1023px) 100vw, 440px"
                          />
                          <div className="rounded-2xl bg-surface-muted/70 border border-border p-4 sm:p-5 space-y-2.5">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold block">
                              What Preventative Care Covers
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                              <li className="flex items-center gap-2">
                                <CheckCircle2
                                  className="w-3.5 h-3.5 text-primary shrink-0"
                                  aria-hidden="true"
                                />
                                <span>Encrypted off-site backups</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2
                                  className="w-3.5 h-3.5 text-primary shrink-0"
                                  aria-hidden="true"
                                />
                                <span>Security & dependency patching</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2
                                  className="w-3.5 h-3.5 text-primary shrink-0"
                                  aria-hidden="true"
                                />
                                <span>Uptime & SSL health checks</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2
                                  className="w-3.5 h-3.5 text-primary shrink-0"
                                  aria-hidden="true"
                                />
                                <span>Staff retraining & phase-2 upgrades</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={category.id}
                  className="bg-surface border border-border rounded-[1.5rem] p-5 sm:p-8 space-y-6 shadow-xs"
                >
                  <div className="pb-6 border-b border-border grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-7 space-y-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                        Outcome Pillar 0{idx + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        {category.title} —{" "}
                        <span className="font-normal text-muted-foreground">
                          {category.subtitle}
                        </span>
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                        {category.problemStatement}
                      </p>
                      <div className="pt-2 flex flex-wrap items-center gap-2">
                        {categoryServices.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={`/services/${svc.slug}`}
                            className="inline-flex items-center gap-1.5 rounded-full bg-surface-muted border border-border px-3 py-1 text-xs font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                          >
                            <span>{svc.title}</span>
                            <ArrowRight className="w-3 h-3" aria-hidden="true" />
                          </Link>
                        ))}
                      </div>
                    </div>
                    {pillarVisual && (
                      <div className="lg:col-span-5">
                        <ResponsiveFigure
                          src={pillarVisual.src}
                          alt={pillarVisual.alt}
                          width={1200}
                          height={750}
                          aspectRatio="16/10"
                          sizes="(max-width: 1023px) 100vw, 440px"
                        />
                      </div>
                    )}
                  </div>

                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 ${
                      categoryServices.length === 4
                        ? "lg:grid-cols-2"
                        : "lg:grid-cols-3"
                    } gap-5`}
                  >
                    {categoryServices.map((service) => (
                      <AppleBentoCard
                        key={service.slug}
                        className="p-5 bg-surface-muted/60 flex flex-col justify-between gap-4 h-full"
                      >
                        <div className="space-y-2.5">
                          <h4 className="text-base sm:text-lg font-semibold text-foreground">
                            <Link
                              href={`/services/${service.slug}`}
                              className="hover:text-primary transition-colors"
                            >
                              {service.title}
                            </Link>
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {service.shortSummary}
                          </p>
                          <div className="pt-2 space-y-1.5 text-xs">
                            <p className="text-muted-foreground">
                              <strong className="text-foreground font-semibold">
                                Best fit:{" "}
                              </strong>
                              {service.bestFitCustomer}
                            </p>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground font-semibold">
                                Outcome:{" "}
                              </strong>
                              {service.expectedOutcomeType}
                            </p>
                          </div>
                        </div>

                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline pt-3 border-t border-border"
                        >
                          Explore {service.title}
                          <ArrowRight
                            className="w-3.5 h-3.5"
                            aria-hidden="true"
                          />
                        </Link>
                      </AppleBentoCard>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AppleScrollSection>

      {/* SECTION 5B: GENERATIVE AI APPLICATIONS SECTION */}
      <AppleScrollSection className="section-padding border-b border-border bg-surface">
        <div className="container-editorial space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="apple-reveal-header lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Practical Generative AI Applications
              </span>
              <h2 className="font-semibold text-foreground">
                Use AI where it genuinely helps your business.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                From customer support to internal workflows, Webntric helps businesses identify practical opportunities for generative AI—then design, integrate, test, and maintain solutions that people can use with confidence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "AI customer support assistants",
                  "Internal knowledge assistants",
                  "Document and invoice processing",
                  "AI-powered search",
                  "Content and marketing workflows",
                  "Business process automation",
                  "AI integrations with existing software",
                  "Monitoring and human review",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-3 rounded-xl bg-surface-muted border border-border flex items-center gap-2.5 text-xs sm:text-sm font-medium text-foreground"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3.5">
                <Link
                  href="/services/generative-ai-applications"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
                >
                  Explore Generative AI
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact?service=generative-ai-applications"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg bg-surface-muted text-foreground border border-border text-sm font-semibold hover:bg-background transition-colors"
                >
                  Discuss an AI use case
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/ai/ai-hero-human-review.webp"
                alt="Business analyst and engineer reviewing AI-assisted workflow output on a desktop interface"
                aspectRatio="16/10"
              />
            </div>
          </div>

          <AIWorkflowDiagram />
        </div>
      </AppleScrollSection>

      {/* SECTION 5C: WEBSITE, APPLICATION & DATA SECURITY SECTION + TRUST CARDS */}
      <AppleScrollSection className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="apple-reveal-header lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Security, Backups & Release Reliability
              </span>
              <h2 className="font-semibold text-foreground">
                Built to work reliably. Protected at every stage.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Security is not a checkbox added at the end of a project. We use secure development practices, HTTPS, access controls, automated backups, deployment checks, and post-launch monitoring to help protect your website, application, and business data.
              </p>

              <blockquote className="p-4 rounded-xl bg-surface border-l-4 border-primary text-xs sm:text-sm font-medium text-foreground leading-relaxed">
                “HTTPS protects data in transit. Backups help recover from loss. Testing reduces deployment mistakes. Monitoring helps identify problems. Together, these controls create a more reliable digital system—but no single control eliminates every risk.”
              </blockquote>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {[
                  "SSL and HTTPS",
                  "Secure configuration",
                  "Access control",
                  "Authentication protection",
                  "Automated daily backups",
                  "Database backups",
                  "Backup retention",
                  "Restore testing",
                  "Pre-deployment testing",
                  "Post-deployment verification",
                  "Monitoring and maintenance",
                  "Incident and recovery planning",
                ].map((ctrl) => (
                  <div
                    key={ctrl}
                    className="p-2.5 rounded-lg bg-surface border border-border flex items-center gap-2 text-xs font-medium text-foreground"
                  >
                    <ShieldCheck
                      className="w-3.5 h-3.5 text-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span>{ctrl}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  href="/services/website-data-security"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
                >
                  Explore security and reliability
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/security/security-hero-operations.webp"
                alt="Engineering team reviewing application security checks, deployment status, and uptime monitoring"
                aspectRatio="16/10"
              />
            </div>
          </div>

          <TrustCardsStrip />
        </div>
      </AppleScrollSection>

      {/* SECTION 6: WHY WEBNTRIC + INDUSTRIES */}
      <AppleScrollSection className="section-padding border-b border-border bg-background">
        <div className="container-editorial space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="apple-reveal-header lg:col-span-5 space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Why Partner With Webntric
              </span>
              <h2 className="font-semibold text-foreground">
                Engineering discipline paired with commercial common sense.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                We do not sell trendy buzzwords or lock you into opaque systems.
                Our work is measured by whether your staff can operate faster,
                your records stay accurate, and your customers find it easier to
                do business with you.
              </p>

              <ResponsiveFigure
                src="/images/home/webntric-consultant-explaining-solution.webp"
                alt="Technology consultant walking through software scope and operational workflows with a colleague at a desk"
                width={1000}
                height={680}
                aspectRatio="16/10"
                sizes="(max-width: 1023px) 100vw, 480px"
                caption="Plain-language technical consultation focused on operational ROI rather than buzzwords."
                creditCreator="Christina @ wocintechchat.com"
                creditSourceUrl="https://unsplash.com/photos/two-women-talking-while-sitting-near-table-LQ1t-8Ms5PY"
              />

              <div className="pt-1 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Read about our engineering standards
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_WEBNTRIC_POINTS.map((point) => (
                <AppleBentoCard key={point.title} className="p-5 space-y-2 h-full">
                  <h3 className="text-base font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </AppleBentoCard>
              ))}
            </div>
          </div>

          {/* Industries strip */}
          <div className="pt-10 border-t border-border space-y-6">
            <div className="apple-reveal-header flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Sector-Specific Workflows
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-1">
                  Built around the daily realities of 9 core industries
                </h3>
              </div>
              <Link
                href="/industries"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Explore all industry solutions
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {INDUSTRIES_DATA.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="apple-card p-5 flex flex-col justify-between gap-3 group h-full"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {ind.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {ind.summary}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    View sector workflows
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </AppleScrollSection>

      {/* SECTION 7: HOW WE WORK */}
      <AppleScrollSection className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-12">
          <div className="apple-reveal-header grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Predictable Delivery
              </span>
              <h2 className="font-semibold text-foreground">
                How we take your project from first conversation to daily use.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Every engagement follows a six-stage delivery structure so you
                always know what is being built, when you will review it, and
                how your team will be supported.
              </p>
              <div className="pt-2">
                <Link
                  href="/process"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  See full delivery process & collaboration rules
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/home/webntric-project-discovery-meeting.webp"
                alt="Project team reviewing scope documents and workflow milestones on a laptop during a discovery meeting"
                width={1000}
                height={680}
                aspectRatio="16/10"
                sizes="(max-width: 1023px) 100vw, 480px"
                caption="Written milestones, interactive staging links, and hands-on staff training before launch."
                creditCreator="Headway"
                creditSourceUrl="https://unsplash.com/photos/1517245386807-bb43f82c33c4"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((item) => (
              <AppleBentoCard
                key={item.step}
                className="p-6 space-y-3 h-full relative"
              >
                <div className="flex items-center justify-between">
                  <span className="apple-card-badge inline-block text-xs font-mono font-bold text-primary px-2.5 py-1 rounded-full bg-primary/10">
                    STAGE {item.step}
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Milestone {item.step} / 06
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </AppleBentoCard>
            ))}
          </div>
        </div>
      </AppleScrollSection>

      {/* SECTION 8: PROOF / REPRESENTATIVE WORK BLUEPRINTS */}
      <AppleScrollSection className="section-padding border-b border-border bg-background">
        <div className="container-editorial space-y-10">
          <div className="apple-reveal-header max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              System Blueprints & Capabilities
            </span>
            <h2 className="font-semibold text-foreground">
              Representative architectures engineered for real business
              workflows.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Explore how we structure offline Windows billing software,
              multi-godown inventory platforms, high-speed service websites, and
              Android field applications. Filter by capability or industry below.
            </p>
          </div>

          <WorkFilterGrid initialLimit={3} showFullPageLink />

          {/* Featured SaaS Product Showcase */}
          <div className="pt-6">
            <AppleBentoCard className="p-6 sm:p-8 bg-gradient-to-br from-primary/5 via-card to-card border border-primary/20">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground font-mono text-xs uppercase font-semibold">
                      Our SaaS Product
                    </span>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      School ERP Platform
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    VidyaSetu — Smart, Real-Time School Management System
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Built by Webntric for school leaders and administrative teams. Track admissions, fee collection analytics, parent communication, attendance, and transport from one unified cloud dashboard.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <a
                    href="https://vidyasetu.pro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-pill-primary px-6 py-3 text-sm font-semibold inline-flex items-center justify-center gap-2"
                  >
                    Visit VidyaSetu.pro
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </AppleBentoCard>
          </div>
        </div>
      </AppleScrollSection>

      {/* SECTION 9 & 10: SUPPORT PROMISE + DELIVERY STANDARDS & TRANSPARENCY */}
      <AppleScrollSection className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Support & Long-Term Partnership Card */}
            <AppleBentoCard className="lg:col-span-6 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="apple-card-badge inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                  <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
                  Post-Launch Continuity
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
                  We stay accountable long after your launch day.
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  A website or custom software application is a living
                  operational tool. We provide structured post-launch maintenance
                  so your business never faces unpatched security risks, failed
                  backups, or unanswered support calls.
                </p>

                <ResponsiveFigure
                  src="/images/home/webntric-technical-support-partner.webp"
                  alt="Engineer providing responsive remote technical support and system monitoring at a workstation"
                  width={1000}
                  height={680}
                  aspectRatio="16/10"
                  sizes="(max-width: 1023px) 100vw, 520px"
                  caption="Direct post-launch engineering support, encrypted backups, and staff onboarding."
                  creditCreator="Austin Distel"
                  creditSourceUrl="https://unsplash.com/photos/man-wearing-white-top-using-macbook-21GWwco-JBQ"
                />

                <ul className="space-y-2.5 pt-2">
                  <li className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      Scheduled encrypted database & website backups (local +
                      cloud)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      Proactive SSL, domain, dependency, and server health
                      monitoring
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      Hands-on training for new counter or office staff members
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      Iterative feature improvements as your transaction volume
                      grows
                    </span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-border">
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Read our Support & Maintenance SLA standards
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </AppleBentoCard>

            {/* Delivery Standards, Confidentiality & Transparency Card */}
            <AppleBentoCard className="lg:col-span-6 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="apple-card-badge inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  Delivery Standards & Transparency
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
                  Clear ownership, written scopes, and strict confidentiality.
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Whether you are sharing internal pricing ledgers, proprietary
                  business workflows, or customer databases, we treat your
                  operational data and intellectual property with strict care.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-surface-muted border border-border space-y-1.5">
                    <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                      <FileCheck2
                        className="w-4 h-4 text-primary"
                        aria-hidden="true"
                      />
                      <span>Written Scope & Milestones</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Every project begins with a written feature list,
                      acceptance criteria, and milestone schedule.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-muted border border-border space-y-1.5">
                    <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                      <Lock
                        className="w-4 h-4 text-primary"
                        aria-hidden="true"
                      />
                      <span>NDA & Data Privacy</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Mutual Non-Disclosure Agreements available prior to
                      sharing sensitive operational records.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-muted border border-border space-y-1.5">
                    <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                      <Terminal
                        className="w-4 h-4 text-primary"
                        aria-hidden="true"
                      />
                      <span>Clean Code & Handover</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Version-controlled repositories, documented schemas, and
                      full ownership of your domain and data.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-muted border border-border space-y-1.5">
                    <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                      <Clock
                        className="w-4 h-4 text-primary"
                        aria-hidden="true"
                      />
                      <span>Responsive Turnaround</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      New project enquiries receive a direct response from a
                      senior team member within 1 business day.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <Link
                  href="/process"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Review how we scope and govern projects
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </AppleBentoCard>
          </div>
        </div>
      </AppleScrollSection>

      {/* SECTION 11: FAQ SECTION */}
      <AppleScrollSection className="section-padding border-b border-border bg-background">
        <div className="container-editorial space-y-10">
          <div className="apple-reveal-header flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Practical Answers
              </span>
              <h2 className="font-semibold text-foreground">
                Frequently asked questions before starting a project.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Straightforward answers on how we scope projects, build offline
                and cloud software, handle revisions, and support your team.
              </p>
            </div>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline shrink-0"
            >
              View all 15 frequently asked questions
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <FaqAccordion items={homeFaqs} />
        </div>
      </AppleScrollSection>

      {/* SECTION 12: FINAL CTA SECTION */}
      <AppleScrollSection className="section-padding bg-surface-muted">
        <div className="container-editorial">
          <div className="apple-card p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Start a Practical Conversation
              </span>
              <h2 className="font-semibold text-foreground">
                Tell us what is slowing your business down—or what you want to
                build next.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                You do not need a 40-page technical specification to talk with
                us. Share your business goals, and our senior engineering team will
                help you map the most sensible first step.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-1 text-sm text-muted-foreground">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors font-medium text-foreground"
                >
                  <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                  {SITE_CONFIG.phoneDisplay}
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors font-medium text-foreground"
                >
                  <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/contact"
                  className="apple-pill-primary px-7 py-3.5 min-h-[48px] text-sm sm:text-base text-center"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/services"
                  className="apple-pill-secondary px-6 py-3.5 min-h-[48px] bg-surface-muted text-foreground border border-border hover:border-primary/40 text-sm sm:text-base text-center"
                >
                  Explore All 13 Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/home/webntric-next-steps-consultation.webp"
                alt="Business and engineering team discussing project scope and next steps around a conference table"
                width={1000}
                height={680}
                aspectRatio="16/10"
                sizes="(max-width: 1023px) 100vw, 460px"
                caption="Every enquiry receives a direct response from a senior team member within one business day."
                creditCreator="Christina @ wocintechchat.com"
                creditSourceUrl="https://unsplash.com/photos/photo-of-people-sitting-beside-table-vzfgh3RAPzM"
              />
            </div>
          </div>
        </div>
      </AppleScrollSection>
    </>
  );
}
