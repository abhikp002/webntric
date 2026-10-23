import { CheckCircle2, Users, Wrench } from "lucide-react";
import { SHARED_RESPONSIBILITY_MODEL } from "@/data/security-services";

export function ResponsibilitySplit() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl space-y-2.5">
        <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
          Practical Shared-Responsibility Model
        </div>
        <h2 className="font-bold text-foreground">
          {SHARED_RESPONSIBILITY_MODEL.heading}
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {SHARED_RESPONSIBILITY_MODEL.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                Engineering & Operations Partner
              </div>
              <h3 className="text-lg font-bold text-foreground">
                What Webntric Handles
              </h3>
            </div>
          </div>

          <ul className="space-y-2.5 pt-2">
            {SHARED_RESPONSIBILITY_MODEL.webntricResponsibilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed"
              >
                <CheckCircle2
                  className="w-4 h-4 text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary text-foreground flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                Internal Account & Team Hygiene
              </div>
              <h3 className="text-lg font-bold text-foreground">
                What Your Business Team Owns
              </h3>
            </div>
          </div>

          <ul className="space-y-2.5 pt-2">
            {SHARED_RESPONSIBILITY_MODEL.clientResponsibilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed"
              >
                <CheckCircle2
                  className="w-4 h-4 text-success shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
