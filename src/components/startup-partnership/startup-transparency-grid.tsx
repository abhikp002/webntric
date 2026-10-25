import React from "react";
import { Check, X, ShieldCheck } from "lucide-react";
import { TRANSPARENCY_COMPARISON } from "@/data/startup-partnership";

export function StartupTransparencyGrid() {
  return (
    <section className="section-padding border-b border-border bg-background">
      <div className="container-editorial space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Absolute Transparency</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {TRANSPARENCY_COMPARISON.heading}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {TRANSPARENCY_COMPARISON.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* IT MEANS */}
          <div className="rounded-2xl border border-primary/30 bg-card p-6 sm:p-8 space-y-5 shadow-sm">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              What This Opportunity Means
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {TRANSPARENCY_COMPARISON.itMeans.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* IT DOES NOT MEAN */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5 shadow-sm">
            <h3 className="text-lg font-bold text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-muted-foreground" />
              What This Opportunity Does NOT Mean
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {TRANSPARENCY_COMPARISON.itDoesNotMean.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary text-muted-foreground flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
