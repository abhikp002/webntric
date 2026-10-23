import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS_STAGES_DATA } from "@/data/business-stages";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BusinessStageSelector } from "@/components/business-stage-selector";
import { ResponsiveFigure } from "@/components/responsive-figure";

export const metadata: Metadata = buildMetadata({
  title:
    "Technology & Growth Roadmaps by Business Stage | Webntric Software",
  description:
    "Whether you are launching a startup, running a local shop or clinic, scaling a growing company, or digitizing a traditional business, see what to prioritize first.",
  path: "/businesses",
  keywords: [
    "software solutions by business stage",
    "startup and small business technology partner",
    "digitize traditional business",
    "Webntric Software business stages",
  ],
});

export default function BusinessesPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border">
        <div className="container-editorial space-y-6">
          <Breadcrumbs
            items={[{ name: "Businesses We Help", path: "/businesses" }]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Right-Sized Roadmaps • 5 Business Stages
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight">
                The right digital step depends on where your business stands
                today.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                An early-stage founder testing an idea, a local store needing fast
                counter billing, a 40-person company outgrowing spreadsheets, and
                a multi-branch enterprise should not be sold the same package.
                Explore the roadmap built for your stage.
              </p>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/businesses/businesses-hero.webp"
                alt="Technology consultants and founders mapping stage-appropriate software and growth priorities"
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

      {/* 5 BUSINESS STAGES CARDS */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {BUSINESS_STAGES_DATA.map((stage, index) => (
              <article
                key={stage.slug}
                className="apple-card overflow-hidden flex flex-col justify-between h-full"
              >
                <div>
                  <Link
                    href={`/businesses/${stage.slug}`}
                    className="block relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-surface-muted"
                  >
                    <Image
                      src={`/images/businesses/${stage.slug}.webp`}
                      alt={`${stage.title} technology and software roadmap`}
                      width={1200}
                      height={800}
                      sizes="(max-width: 1023px) 100vw, 560px"
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
                    />
                  </Link>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                        Stage 0{index + 1} — {stage.shortLabel}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground">
                      <Link
                        href={`/businesses/${stage.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {stage.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {stage.subtitle}
                    </p>

                    <div className="pt-3 border-t border-border space-y-2">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Who This Roadmap Is For
                      </p>
                      <ul className="space-y-1.5">
                        {stage.whoThisIsFor.slice(0, 3).map((who) => (
                          <li
                            key={who}
                            className="flex items-start gap-2 text-xs sm:text-sm text-foreground"
                          >
                            <CheckCircle2
                              className="w-4 h-4 text-primary shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{who}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                        Recommended Services
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {stage.recommendedServices.map((svc) => (
                          <span
                            key={svc.href}
                            className="px-2.5 py-1 rounded text-xs bg-surface-muted border border-border text-foreground"
                          >
                            {svc.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-4 border-t border-border bg-surface-muted/40 flex items-center justify-between gap-4">
                  <Link
                    href={`/businesses/${stage.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Read {stage.title} roadmap
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href={`/contact?stage=${stage.slug}`}
                    className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Discuss this stage →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE DIAGNOSTIC */}
      <section className="section-padding bg-background">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Interactive Diagnostic
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Match your immediate bottleneck to a practical starting step.
            </h2>
          </div>

          <BusinessStageSelector />
        </div>
      </section>
    </div>
  );
}
