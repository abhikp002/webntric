import React from "react";
import { CheckCircle2, FileText, Scale, AlertTriangle } from "lucide-react";
import {
  TECHNOLOGY_OFFER_DETAILS,
  FUTURE_PARTNERSHIP_NOTICE,
} from "@/data/startup-partnership";

export function FuturePartnershipNotice() {
  return (
    <section className="section-padding border-b border-border bg-surface-muted/20">
      <div className="container-editorial space-y-16">
        {/* THE TECHNOLOGY SUPPORT OFFER */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              Clear Boundaries
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {TECHNOLOGY_OFFER_DETAILS.heading}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {TECHNOLOGY_OFFER_DETAILS.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* What Webntric provides */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" />
                What Webntric’s Development Support Covers
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                {TECHNOLOGY_OFFER_DETAILS.whatWebntricProvides.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Separate third-party costs */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" aria-hidden="true" />
                External & Third-Party Expenses (Paid Separately)
              </h3>
              <p className="text-xs text-muted-foreground">
                {TECHNOLOGY_OFFER_DETAILS.separateCostsNotice}
              </p>
              <div className="space-y-2 pt-1 text-xs">
                {TECHNOLOGY_OFFER_DETAILS.thirdPartyCostsList.map((cost, idx) => (
                  <div key={idx} className="p-2 rounded bg-surface border border-border flex justify-between items-center gap-2">
                    <span className="font-semibold text-foreground">{cost.item}</span>
                    <span className="text-muted-foreground text-[11px] text-right">{cost.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FUTURE FORMAL PARTNERSHIP (Subtle, Smaller Treatment) */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5 shadow-sm">
          <div className="flex items-center gap-2.5">
            <Scale className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
            <h3 className="text-lg font-bold text-foreground">
              {FUTURE_PARTNERSHIP_NOTICE.heading}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {FUTURE_PARTNERSHIP_NOTICE.body}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-muted-foreground">
            {FUTURE_PARTNERSHIP_NOTICE.governancePoints.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <FileText className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-border text-[11px] text-muted-foreground">
            Per Startup India guidelines, founder and technology partner arrangements should address ownership, responsibilities, and operational commitments through formal legal documentation prior to corporate restructuring.
          </div>
        </div>
      </div>
    </section>
  );
}
