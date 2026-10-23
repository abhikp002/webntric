import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function RelatedServices({
  heading = "Connected Services & Growth Stages",
  services,
  stages,
}: {
  heading?: string;
  services: { name: string; href: string; description: string }[];
  stages?: { name: string; href: string }[];
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Integrated Ecosystem
          </div>
          <h2 className="font-bold text-foreground">{heading}</h2>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          View all Webntric services
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((svc) => (
          <Link
            key={svc.href}
            href={svc.href}
            className="apple-card p-5 rounded-xl bg-surface border border-border flex flex-col justify-between gap-4 group"
          >
            <div className="space-y-2">
              <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                {svc.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {svc.description}
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
              Explore service
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>

      {stages && stages.length > 0 && (
        <div className="pt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mr-2">
            Suitable for business stages:
          </span>
          {stages.map((st) => (
            <Link
              key={st.href}
              href={st.href}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-surface border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {st.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
