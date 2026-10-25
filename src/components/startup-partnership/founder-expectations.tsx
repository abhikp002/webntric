import React from "react";
import { Handshake, ShieldAlert } from "lucide-react";
import { FOUNDER_EXPECTATIONS } from "@/data/startup-partnership";

export function FounderExpectations() {
  return (
    <section className="section-padding border-b border-border bg-surface-muted/30">
      <div className="container-editorial space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider font-semibold">
            <Handshake className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Shared Commitment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            This works only when both sides contribute.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            A technology partnership is not a hands-off delegation. We write and test the code, while you drive the customer discovery, operational testing, and commercial execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDER_EXPECTATIONS.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border bg-card p-5 space-y-2.5 shadow-sm hover:border-primary/30 transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-primary/10 text-primary font-mono text-xs font-bold flex items-center justify-center">
                0{idx + 1}
              </div>
              <h3 className="text-sm font-bold text-foreground">
                {exp.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 sm:p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-foreground leading-relaxed">
            “Technology can help bring an idea to life, but the founder remains responsible for understanding the market, customers, operations, compliance, and business execution.”
          </p>
        </div>
      </div>
    </section>
  );
}
