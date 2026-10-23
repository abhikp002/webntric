import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { INDUSTRIES_DATA, getIndustryVisual } from "@content/industries";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ResponsiveFigure } from "@/components/responsive-figure";

export const metadata: Metadata = buildMetadata({
  title:
    "Industry-Specific Software, POS & Digital Solutions | Webntric Software",
  description:
    "Explore how Webntric Software builds websites, offline Windows POS billing, inventory systems, and digital growth engines tailored for 9 core industries.",
  path: "/industries",
  keywords: [
    "industry software solutions",
    "retail healthcare education manufacturing software",
    "custom POS and ERP by industry",
    "Webntric Software industries",
  ],
});

export default function IndustriesPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border">
        <div className="container-editorial space-y-6">
          <Breadcrumbs items={[{ name: "Industries", path: "/industries" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                9 Sector-Specific Blueprints
              </span>
              <h1 className="font-bold text-foreground tracking-tight">
                Software and growth systems shaped around how your sector actually
                operates.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                A retail counter during festival rush, a diagnostic clinic
                reception desk, a wholesale godown, and a multi-site construction
                firm each have distinct operational pressures. We engineer tools
                around your sector&apos;s daily workflows rather than forcing you
                into generic templates.
              </p>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/industries/industries-hero.webp"
                alt="Industrial and commercial operations workflow supported by custom business software"
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

      {/* 9 INDUSTRIES GRID */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((industry) => {
              const visual = getIndustryVisual(industry);
              return (
                <article
                  key={industry.slug}
                  className="apple-card overflow-hidden flex flex-col justify-between h-full"
                >
                  <div>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="block relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-surface-muted"
                    >
                      <Image
                        src={visual.src}
                        alt={visual.alt}
                        width={1200}
                        height={750}
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 420px"
                        className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
                      />
                    </Link>

                    <div className="p-5 sm:p-6 space-y-4">
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold">
                          {industry.shortLabel}
                        </span>
                        <h2 className="text-xl font-bold text-foreground mt-1">
                          <Link
                            href={`/industries/${industry.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {industry.title}
                          </Link>
                        </h2>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {industry.summary}
                      </p>

                      <div className="pt-3 border-t border-border space-y-2">
                        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                          Operational Challenges Solved
                        </p>
                        <ul className="space-y-1.5">
                          {industry.operationalProblems
                            .slice(0, 3)
                            .map((prob) => (
                              <li
                                key={prob.title}
                                className="flex items-start gap-2 text-xs text-foreground"
                              >
                                <CheckCircle2
                                  className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5"
                                  aria-hidden="true"
                                />
                                <span>{prob.title}</span>
                              </li>
                            ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                          Recommended Capabilities
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {industry.suitableServices.map((svc) => (
                            <span
                              key={svc.href}
                              className="px-2 py-0.5 rounded text-[11px] bg-surface-muted border border-border text-muted-foreground"
                            >
                              {svc.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 py-4 border-t border-border bg-surface-muted/40 flex items-center justify-between gap-3">
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                    >
                      Explore {industry.shortLabel} solutions
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="bg-surface border border-border rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Don&apos;t See Your Exact Sector?
              </span>
              <h2 className="font-bold text-foreground">
                We adapt our engineering around your specific operational rules.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Share how your business currently handles enquiries, billing, or
                internal records, and we will map a practical solution.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors shrink-0"
            >
              Discuss Your Workflow
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
