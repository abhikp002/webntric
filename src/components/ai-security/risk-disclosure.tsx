import { AlertTriangle } from "lucide-react";

export function RiskDisclosure({
  eyebrow = "Transparent Limitations & Risk Disclosure",
  heading,
  subtitle,
  items,
  calloutQuote,
}: {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  items: { title: string; explanation: string }[];
  calloutQuote?: string;
}) {
  return (
    <div className="bg-surface border border-border rounded-2xl p-6 sm:p-10 space-y-8">
      <div className="max-w-3xl space-y-2.5">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-warning">
          <AlertTriangle className="w-4 h-4" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="font-bold text-foreground">{heading}</h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      </div>

      {calloutQuote && (
        <blockquote className="p-5 rounded-xl bg-surface-muted border-l-4 border-primary text-sm sm:text-base font-medium text-foreground leading-relaxed">
          “{calloutQuote}”
        </blockquote>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="p-5 rounded-xl bg-surface-muted border border-border space-y-1.5"
          >
            <h3 className="text-sm sm:text-base font-bold text-foreground">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {item.explanation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
