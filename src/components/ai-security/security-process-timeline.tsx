import { CheckCircle2 } from "lucide-react";
import type { AIProcessStage } from "@/data/ai-services";

export function SecurityProcessTimeline({
  stages,
  eyebrow = "9-Stage Implementation Process",
  heading = "How we take an idea from workflow discovery to monitored production",
  subtitle = "A disciplined step-by-step lifecycle that prevents rushed releases and unverified assumptions.",
}: {
  stages: AIProcessStage[];
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl space-y-2.5">
        <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </div>
        <h2 className="font-bold text-foreground">{heading}</h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {stages.map((stage) => (
          <div
            key={stage.step}
            className="apple-card p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                  Step {stage.step}
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  {stage.name}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                {stage.step}. {stage.name} — {stage.summary}
              </h3>
              <ul className="space-y-1.5 pt-1">
                {stage.activities.map((act) => (
                  <li
                    key={act}
                    className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                  >
                    <CheckCircle2
                      className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-border">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                Stage Output
              </div>
              <div className="text-xs font-semibold text-foreground mt-0.5">
                {stage.deliverable}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
