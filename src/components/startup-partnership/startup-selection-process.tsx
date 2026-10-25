import React from "react";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { SELECTION_PROCESS_STEPS } from "@/data/startup-partnership";
import { ResponsiveFigure } from "@/components/responsive-figure";

export function StartupSelectionProcess() {
  return (
    <section id="how-it-works" className="section-padding border-b border-border bg-background">
      <div className="container-editorial space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Step-By-Step Workflow
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground">
            How the selection process works
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            We follow a transparent, phased evaluation so both founders and engineers understand every step before code is written.
          </p>
        </div>

        {/* 6-STEP TIMELINE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SELECTION_PROCESS_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm space-y-4 hover:border-primary/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-mono font-bold text-sm flex items-center justify-center">
                    {step.stepNumber}
                  </div>
                  <span className="text-[11px] font-mono uppercase text-muted-foreground">
                    Phase {step.stepNumber} of 6
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border text-xs text-primary font-medium flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>{step.keyDeliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* PROMINENT DISCLAIMER NOTE */}
        <div className="rounded-xl border border-border bg-surface p-5 text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-mono uppercase font-bold text-muted-foreground tracking-wider">
            Important Clarity
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            “Submitting the form does not create a partnership, confidentiality obligation, investment relationship, equity arrangement, or commitment by either party.”
          </p>
        </div>
      </div>
    </section>
  );
}
