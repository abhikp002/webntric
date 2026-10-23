import { CheckCircle2, Info } from "lucide-react";
import type { SecurityControl } from "@/data/security-services";

const STATUS_BADGE_MAP: Record<
  SecurityControl["status"],
  { label: string; className: string }
> = {
  available: {
    label: "Core Engineering Control",
    className: "bg-success/10 text-success border-success/30",
  },
  optional: {
    label: "Scoped by Application / Plan",
    className: "bg-primary/10 text-primary border-primary/30",
  },
  "requires-confirmation": {
    label: "Hosting & Support Plan Dependent",
    className: "bg-warning/10 text-warning border-warning/30",
  },
};

export function SecurityControlCard({ control }: { control: SecurityControl }) {
  const badge = STATUS_BADGE_MAP[control.status];

  return (
    <article
      id={control.slug}
      className="apple-card bg-surface border border-border rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 scroll-mt-24"
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border ${badge.className}`}
          >
            {badge.label}
          </span>
          {control.frequency && (
            <span className="text-xs text-muted-foreground font-mono">
              {control.frequency}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-foreground">
            {control.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {control.description}
          </p>
        </div>

        <div className="space-y-2 pt-2 border-t border-border">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
            Controls & Implementation Scope
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            {control.scope.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
              >
                <CheckCircle2
                  className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-border">
        {control.dependsOn && control.dependsOn.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Depends on:</span>
            {control.dependsOn.map((dep) => (
              <span
                key={dep}
                className="px-2 py-0.5 rounded bg-surface-muted border border-border text-[11px]"
              >
                {dep}
              </span>
            ))}
          </div>
        )}

        <div className="p-3.5 rounded-xl bg-surface-muted border border-border flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
          <Info
            className="w-4 h-4 text-primary shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <span>{control.precisionNote}</span>
        </div>
      </div>
    </article>
  );
}
