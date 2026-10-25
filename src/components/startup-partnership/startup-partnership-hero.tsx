"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { STARTUP_HERO_CONTENT } from "@/data/startup-partnership";
import { ResponsiveFigure } from "@/components/responsive-figure";
import { trackEvent } from "@/lib/analytics";

export function StartupPartnershipHero() {
  return (
    <section className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-border overflow-hidden bg-gradient-to-b from-primary/[0.03] via-background to-background">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              <span>{STARTUP_HERO_CONTENT.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.12]">
              {STARTUP_HERO_CONTENT.h1}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {STARTUP_HERO_CONTENT.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={STARTUP_HERO_CONTENT.primaryCtaHref}
                onClick={() =>
                  trackEvent("cta_clicked", {
                    location: "startup_hero",
                    label: STARTUP_HERO_CONTENT.primaryCtaLabel,
                  })
                }
                className="apple-pill-primary px-6 py-3.5 text-sm sm:text-base font-semibold inline-flex items-center justify-center gap-2"
              >
                {STARTUP_HERO_CONTENT.primaryCtaLabel}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={STARTUP_HERO_CONTENT.secondaryCtaHref}
                className="apple-pill-secondary px-5 py-3.5 text-sm sm:text-base font-medium inline-flex items-center justify-center gap-2"
              >
                {STARTUP_HERO_CONTENT.secondaryCtaLabel}
              </a>
            </div>

            <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-surface border border-border text-xs text-muted-foreground leading-relaxed">
              <ShieldAlert className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <span>{STARTUP_HERO_CONTENT.reassuranceNote}</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl bg-card">
              <ResponsiveFigure
                src="/images/startups/startup-hero-planning.webp"
                alt="Founders and software engineers reviewing wireframes and product architecture on laptops"
                width={1200}
                height={800}
                aspectRatio="16/10"
                priority
                sizes="(max-width: 1023px) 100vw, 520px"
              />
              <div className="p-4 sm:p-5 bg-card/95 border-t border-border space-y-1">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                  Practical Technology Partnership
                </div>
                <div className="text-sm font-medium text-foreground">
                  Build only what is needed to validate the customer problem.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
