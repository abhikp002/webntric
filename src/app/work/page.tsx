import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { WorkFilterGrid } from "@/components/work-filter-grid";
import { ResponsiveFigure } from "@/components/responsive-figure";

export const metadata: Metadata = buildMetadata({
  title:
    "Work, System Blueprints & Capabilities Showcase | Webntric Software",
  description:
    "Explore Webntric Software's representative system architectures across offline Windows POS billing, web & mobile applications, multi-branch inventory, and SEO.",
  path: "/work",
  keywords: [
    "software development portfolio and system blueprints",
    "offline POS billing architecture",
    "custom ERP and web application examples",
    "Webntric Software work",
  ],
});

export default function WorkPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border">
        <div className="container-editorial space-y-6">
          <Breadcrumbs
            items={[{ name: "Work & Capabilities", path: "/work" }]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                  Production System Blueprints
                </span>
                <h1 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.14]">
                  How we architect websites, offline desktop software, and growth
                  systems.
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Explore six representative system architectures engineered around
                  real operational bottlenecks—from zero-latency offline Windows POS
                  counters and multi-godown stock engines to patient-friendly
                  healthcare websites and Android field apps.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border flex items-start gap-3">
                <ShieldCheck
                  className="w-5 h-5 text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold">
                    Confidentiality & Transparency Note:{" "}
                  </strong>
                  Because internal billing ledgers, wholesale rate lists, and
                  custom ERP workflows contain proprietary operational data, we
                  present these capabilities as detailed architectural blueprints
                  rather than exposing private client records. Live walkthroughs can
                  be arranged during a discovery call.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/work/work-hero.webp"
                alt="Enterprise software dashboard and operational system architecture displayed on a workstation"
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

      {/* FILTERABLE BLUEPRINTS */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial">
          <WorkFilterGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="bg-surface border border-border rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Request a Custom Walkthrough
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Want to see how a similar system would work for your business?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Tell us about your counter, office, or customer acquisition
                workflow, and we will walk you through the right architecture.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors shrink-0"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
