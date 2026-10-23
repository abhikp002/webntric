import { ShieldCheck, AlertCircle } from "lucide-react";
import { AI_TRUST_SAFETY_SECTION } from "@/data/ai-services";

export function AITrustSection() {
  return (
    <section
      id="ai-trust-safety"
      className="section-padding bg-surface border-b border-border scroll-mt-20"
    >
      <div className="container-editorial space-y-10">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Responsible AI & Operational Safeguards
          </div>
          <h2 className="font-bold text-foreground">
            {AI_TRUST_SAFETY_SECTION.heading}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            {AI_TRUST_SAFETY_SECTION.subtitle}
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-primary/5 border border-primary/25 flex items-start gap-3.5">
          <AlertCircle
            className="w-5 h-5 text-primary shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div className="space-y-1">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              Core Engineering Principle
            </div>
            <p className="text-sm sm:text-base font-semibold text-foreground leading-relaxed">
              “{AI_TRUST_SAFETY_SECTION.corePolicy}”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AI_TRUST_SAFETY_SECTION.controls.map((control) => (
            <div
              key={control.title}
              className="apple-card p-5 rounded-xl bg-surface-muted border border-border space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-primary">
                  {control.category}
                </span>
                <ShieldCheck
                  className="w-4 h-4 text-primary shrink-0"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-base font-bold text-foreground">
                {control.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {control.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
