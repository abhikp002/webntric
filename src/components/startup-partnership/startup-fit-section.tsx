import React from "react";
import { CheckCircle2, XCircle, HeartHandshake, AlertCircle } from "lucide-react";
import {
  STARTUP_EMPATHY_CONTENT,
  WHO_THIS_IS_FOR,
  WHO_THIS_IS_NOT_FOR,
} from "@/data/startup-partnership";
import { ResponsiveFigure } from "@/components/responsive-figure";

export function StartupFitSection() {
  return (
    <section className="section-padding border-b border-border bg-surface-muted/30">
      <div className="container-editorial space-y-16">
        {/* EMPATHY / EMOTIONAL CONNECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider font-semibold">
              <HeartHandshake className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Realities of Building Early</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              {STARTUP_EMPATHY_CONTENT.heading}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {STARTUP_EMPATHY_CONTENT.intro}
            </p>
            <div className="space-y-3.5 pt-2">
              {STARTUP_EMPATHY_CONTENT.challenges.map((c, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-card border border-border space-y-1">
                  <div className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {c.title}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-3.5">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs text-foreground font-medium leading-relaxed">
              {STARTUP_EMPATHY_CONTENT.closingStatement}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
              <ResponsiveFigure
                src="/images/startups/startup-prototype-review.webp"
                alt="Startup team reviewing product workflows on laptops"
                width={1200}
                height={800}
                aspectRatio="16/10"
                sizes="(max-width: 1023px) 100vw, 560px"
              />
              <div className="p-4 bg-card border-t border-border text-xs text-muted-foreground">
                <strong className="text-foreground">Empathy First:</strong> We believe in founders who understand their customer problem intimately and are ready to put in the work.
              </div>
            </div>
          </div>
        </div>

        {/* WHO THIS IS FOR vs. NOT FOR */}
        <div className="space-y-8 pt-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              Mutual Fit Criteria
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              We are interested in founders who are ready to build seriously.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              We are not looking only for polished pitch decks. We are looking for founders who understand the problem deeply and are willing to do the work required to solve it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* WHO THIS IS FOR */}
            <div className="rounded-2xl border border-primary/30 bg-card p-6 sm:p-8 space-y-5 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-bold text-lg">
                <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                <h3>Who this collaboration is designed for</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {WHO_THIS_IS_FOR.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WHO THIS MAY NOT BE FOR */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5 shadow-sm">
              <div className="flex items-center gap-2 text-muted-foreground font-bold text-lg">
                <AlertCircle className="w-5 h-5 text-amber-500" aria-hidden="true" />
                <h3>Who this opportunity may not fit</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {WHO_THIS_IS_NOT_FOR.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-amber-500/80 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-xs text-muted-foreground pt-2 border-t border-border">
                Clear expectations protect both your precious time and our engineering bandwidth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
