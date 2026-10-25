import React from "react";
import { CheckCircle2, Compass } from "lucide-react";
import { STARTUP_STAGE_CATEGORIES } from "@/data/startup-partnership";

export function StartupStageSelector() {
  return (
    <section className="section-padding border-b border-border bg-surface-muted/30">
      <div className="container-editorial space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider font-semibold">
            <Compass className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Maturity Readiness</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Where does your startup stand today?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Whether you are outlining your first customer interview notes or running an active product that needs better code, we adapt our technical focus to your current stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STARTUP_STAGE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 sm:p-6 shadow-sm space-y-4 hover:border-primary/40 transition-colors"
            >
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-primary/10 text-primary">
                  {cat.title}
                </span>

                <div className="text-sm font-bold text-foreground leading-snug">
                  {cat.tagline}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cat.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-border space-y-2">
                <div className="text-[11px] font-mono font-semibold uppercase text-muted-foreground">
                  Possible Webntric Help:
                </div>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  {cat.helpPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-xs text-muted-foreground">
          Idea-stage startups are not automatically rejected or accepted. We evaluate every submission on its own merits, problem clarity, and founder dedication.
        </div>
      </div>
    </section>
  );
}
