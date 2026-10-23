import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { OUTCOME_CATEGORIES, SERVICES_DATA } from "@/data/services";
import { BUSINESS_STAGES_DATA } from "@/data/business-stages";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ResponsiveFigure } from "@/components/responsive-figure";

export const metadata: Metadata = buildMetadata({
  title:
    "Software Development, Generative AI, Security & Digital Growth Services | Webntric Software",
  description:
    "Explore Webntric Software's 15 core services: website & web app development, generative AI applications, website & data security, offline Windows software, billing & inventory systems, mobile apps, and SEO.",
  path: "/services",
  keywords: [
    "custom software and digital marketing services",
    "generative AI applications and website security",
    "website development and billing software services",
    "offline Windows software development",
    "Webntric Software services",
  ],
});

const DECISION_MATRIX = [
  {
    situation: "Launching a new company or upgrading an outdated web presence",
    startWith: "Website Development",
    startHref: "/services/website-development",
    pairWith: "SEO Services",
    pairHref: "/services/seo-services",
    avoidNow: "Multi-module custom ERP before validating customer enquiries",
  },
  {
    situation: "Counter billing freezes or stock registers never match godown",
    startWith: "Offline Windows Software or Billing & Inventory",
    startHref: "/services/billing-and-inventory-software",
    pairWith: "Business Automation Consulting",
    pairHref: "/services/business-automation-consulting",
    avoidNow: "Browser-only cloud tools if your shop/depot has unstable internet",
  },
  {
    situation: "Multi-role staff workflows, dealer portals, or customer logins",
    startWith: "Web Application Development",
    startHref: "/services/web-application-development",
    pairWith: "Website, Application & Data Security",
    pairHref: "/services/website-data-security",
    avoidNow: "Forcing complex multi-branch permissions into shared spreadsheets",
  },
  {
    situation: "Searching SOPs, triaging leads, or summarizing unstructured documents",
    startWith: "Generative AI Applications",
    startHref: "/services/generative-ai-applications",
    pairWith: "Custom Business Software",
    pairHref: "/services/custom-business-software",
    avoidNow: "Using an ungrounded chatbot for deterministic calculations or unreviewed external actions",
  },
  {
    situation: "Protecting customer records, automating backups, and hardening releases",
    startWith: "Website, Application & Data Security",
    startHref: "/services/website-data-security",
    pairWith: "Website Maintenance & Support",
    pairHref: "/services/website-maintenance-and-support",
    avoidNow: "Assuming an SSL padlock alone protects your database or guarantees backup recovery",
  },
  {
    situation: "Need steadier local or B2B customer enquiries",
    startWith: "SEO Services & Lead Generation",
    startHref: "/services/lead-generation",
    pairWith: "Digital Marketing (Search & Meta Ads)",
    pairHref: "/services/digital-marketing",
    avoidNow: "Running paid ads to a slow homepage with no clear enquiry path",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border">
        <div className="container-editorial space-y-6">
          <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                15 Engineering, AI, Security & Growth Capabilities
              </span>
              <h1 className="font-bold text-foreground tracking-tight">
                Technology and growth services organized around business
                outcomes.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Every service we offer is designed to solve a concrete
                operational or commercial problem—whether that is making a
                strong first impression online, speeding up daily counter
                billing without internet dependency, building grounded AI
                workflows, or protecting business data and backups.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
                >
                  Discuss Your Requirement
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href="#decision-guide"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg bg-surface text-foreground border border-border text-sm font-semibold hover:bg-surface-muted transition-colors"
                >
                  Compare Which Service Comes First
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/home/webntric-consultant-explaining-solution.webp"
                alt="Technology consultant walking through software scope and operational workflows with a colleague at a desk"
                width={1000}
                height={680}
                aspectRatio="16/10"
                priority
                sizes="(max-width: 1023px) 100vw, 480px"
                caption="15 engineering, AI, security, and digital growth services grouped around 4 practical commercial outcomes."
                creditCreator="Christina @ wocintechchat.com"
                creditSourceUrl="https://unsplash.com/photos/two-women-talking-while-sitting-near-table-LQ1t-8Ms5PY"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 OUTCOME PILLARS */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-14">
          {OUTCOME_CATEGORIES.map((category, index) => {
            const services = SERVICES_DATA.filter(
              (svc) => svc.outcomeCategory === category.id
            );

            return (
              <div
                key={category.id}
                className="bg-surface border border-border rounded-xl p-5 sm:p-8 space-y-8 shadow-sm"
              >
                <div className="pb-6 border-b border-border flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                      Outcome Category 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                      {category.title}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {category.subtitle}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-md bg-surface-muted p-4 rounded-lg border border-border">
                    <strong className="text-foreground font-semibold">
                      Why it matters:{" "}
                    </strong>
                    {category.problemStatement}
                  </p>
                </div>

                <div
                  className={
                    services.length === 1
                      ? "grid grid-cols-1 gap-6"
                      : "grid grid-cols-1 md:grid-cols-2 gap-6"
                  }
                >
                  {services.map((service) => (
                    <article
                      key={service.slug}
                      className={`apple-card bg-surface-muted/60 overflow-hidden h-full ${
                        services.length === 1
                          ? "grid grid-cols-1 lg:grid-cols-12 items-stretch"
                          : "flex flex-col justify-between"
                      }`}
                    >
                      <div
                        className={
                          services.length === 1 ? "lg:col-span-7 flex flex-col justify-between" : ""
                        }
                      >
                        {services.length !== 1 && (
                          <Link
                            href={`/services/${service.slug}`}
                            className="block relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-surface"
                          >
                            <Image
                              src={`/images/services/${service.slug}-hero.webp`}
                              alt={`${service.title} architecture and deliverable preview`}
                              width={1200}
                              height={750}
                              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 560px"
                              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
                            />
                          </Link>
                        )}

                        <div className="p-5 sm:p-6 space-y-4">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-xl font-bold text-foreground">
                              <Link
                                href={`/services/${service.slug}`}
                                className="hover:text-primary transition-colors"
                              >
                                {service.title}
                              </Link>
                            </h3>
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.shortSummary}
                          </p>

                          <div className="space-y-2 pt-2 border-t border-border text-xs sm:text-sm">
                            <p className="text-muted-foreground">
                              <strong className="text-foreground font-semibold">
                                Problem solved:{" "}
                              </strong>
                              {service.problemAddressed}
                            </p>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground font-semibold">
                                Best-fit customer:{" "}
                              </strong>
                              {service.bestFitCustomer}
                            </p>
                            <p className="text-muted-foreground">
                              <strong className="text-foreground font-semibold">
                                Expected outcome:{" "}
                              </strong>
                              {service.expectedOutcomeType}
                            </p>
                          </div>

                          <div className="pt-2">
                            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                              Key Deliverables
                            </p>
                            <ul className="space-y-1.5">
                              {service.expectedDeliverables
                                .slice(0, 3)
                                .map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-2 text-xs text-foreground"
                                  >
                                    <CheckCircle2
                                      className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5"
                                      aria-hidden="true"
                                    />
                                    <span>{item}</span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>

                        <div className="px-5 sm:px-6 py-4 border-t border-border bg-surface flex items-center justify-between gap-4">
                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                          >
                            Read full {service.title} guide
                            <ArrowRight
                              className="w-4 h-4"
                              aria-hidden="true"
                            />
                          </Link>
                          <Link
                            href={`/contact?service=${service.slug}`}
                            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0"
                          >
                            Request scope →
                          </Link>
                        </div>
                      </div>

                      {services.length === 1 && (
                        <Link
                          href={`/services/${service.slug}`}
                          className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto min-h-[240px] w-full overflow-hidden border-t lg:border-t-0 lg:border-l border-border bg-surface"
                        >
                          <Image
                            src={`/images/services/${service.slug}-hero.webp`}
                            alt={`${service.title} architecture and deliverable preview`}
                            width={1200}
                            height={750}
                            sizes="(max-width: 1023px) 100vw, 480px"
                            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
                          />
                        </Link>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICE SELECTION DECISION MATRIX (Responsive Cards on Mobile + Table on Desktop) */}
      <section
        id="decision-guide"
        className="section-padding border-b border-border bg-background scroll-mt-20"
      >
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              <Compass className="w-3.5 h-3.5" aria-hidden="true" />
              Practical Sequencing Guide
            </span>
            <h2 className="font-bold text-foreground">
              How to decide which service should come first.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Trying to build everything at once stretches budgets and overwhelms
              staff. Use this guide to see how we sequence digital investments.
            </p>
          </div>

          {/* Mobile/Tablet Stacked Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
            {DECISION_MATRIX.map((row) => (
              <div
                key={row.situation}
                className="p-5 rounded-xl bg-surface border border-border space-y-3"
              >
                <p className="text-sm font-bold text-foreground">
                  {row.situation}
                </p>
                <div className="space-y-2 text-xs pt-2 border-t border-border">
                  <p>
                    <span className="font-mono uppercase text-muted-foreground block">
                      Recommended Phase 1:
                    </span>
                    <Link
                      href={row.startHref}
                      className="font-semibold text-primary hover:underline text-sm"
                    >
                      {row.startWith}
                    </Link>
                  </p>
                  <p>
                    <span className="font-mono uppercase text-muted-foreground block">
                      Natural Phase 2:
                    </span>
                    <Link
                      href={row.pairHref}
                      className="font-medium text-foreground hover:text-primary"
                    >
                      {row.pairWith}
                    </Link>
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-mono uppercase text-muted-foreground block">
                      Avoid Early On:
                    </span>
                    {row.avoidNow}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Comparison Table */}
          <div className="hidden lg:block overflow-x-auto border border-border rounded-xl bg-surface">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-surface-muted border-b border-border text-xs font-mono uppercase text-muted-foreground">
                  <th className="p-4 font-semibold">Your Current Situation</th>
                  <th className="p-4 font-semibold">Recommended Phase 1</th>
                  <th className="p-4 font-semibold">Natural Phase 2</th>
                  <th className="p-4 font-semibold">What to Avoid Early On</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {DECISION_MATRIX.map((row) => (
                  <tr key={row.situation} className="align-top">
                    <td className="p-4 font-medium text-foreground">
                      {row.situation}
                    </td>
                    <td className="p-4">
                      <Link
                        href={row.startHref}
                        className="font-semibold text-primary hover:underline"
                      >
                        {row.startWith}
                      </Link>
                    </td>
                    <td className="p-4">
                      <Link
                        href={row.pairHref}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {row.pairWith}
                      </Link>
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {row.avoidNow}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EXPLORE BY BUSINESS STAGE */}
      <section className="section-padding bg-surface-muted/50">
        <div className="container-editorial space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Tailored By Business Stage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
                Prefer to browse by your company stage?
              </h2>
            </div>
            <Link
              href="/businesses"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              View all 5 business stage guides
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BUSINESS_STAGES_DATA.map((stage) => (
              <Link
                key={stage.slug}
                href={`/businesses/${stage.slug}`}
                className="p-5 rounded-xl bg-surface border border-border hover:border-primary/40 transition-colors flex flex-col justify-between gap-4 group h-full"
              >
                <div>
                  <span className="text-[11px] font-mono uppercase text-primary font-semibold">
                    {stage.shortLabel}
                  </span>
                  <h3 className="text-base font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 line-clamp-3">
                    {stage.subtitle}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Read roadmap
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
