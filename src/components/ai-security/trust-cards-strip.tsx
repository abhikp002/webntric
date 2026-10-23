import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { HOMEPAGE_TRUST_CARDS } from "@/data/security-services";

export function TrustCardsStrip({
  heading = "Engineering & Operational Safeguards Built Into Our Work",
  compact = false,
}: {
  heading?: string;
  compact?: boolean;
}) {
  return (
    <div className="space-y-4">
      {!compact && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
            {heading}
          </div>
          <Link
            href="/services/website-data-security"
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
          >
            How our security & backup controls work
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5">
        {HOMEPAGE_TRUST_CARDS.map((card) => (
          <Link
            key={card.id}
            href={card.href}
            className="apple-card p-4 rounded-xl bg-surface border border-border flex flex-col justify-between gap-3 group"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  {card.title}
                </span>
                <ShieldCheck
                  className="w-4 h-4 text-primary shrink-0"
                  aria-hidden="true"
                />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {card.summary}
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
              {card.linkLabel}
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
