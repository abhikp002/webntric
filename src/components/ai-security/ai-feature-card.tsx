import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldAlert, ArrowRight } from "lucide-react";
import type { AIUseCase } from "@/data/ai-services";

export function AIFeatureCard({ useCase }: { useCase: AIUseCase }) {
  return (
    <article
      id={useCase.slug}
      className="apple-card bg-surface border border-border rounded-2xl overflow-hidden flex flex-col justify-between scroll-mt-24"
    >
      <div>
        <div className="relative aspect-[16/10] w-full bg-surface-muted border-b border-border overflow-hidden">
          <Image
            src={useCase.image}
            alt={useCase.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-background/90 backdrop-blur-md text-foreground border border-border">
              {useCase.shortLabel}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-7 space-y-5">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              {useCase.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground font-semibold">Problem: </strong>
              {useCase.problem}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground font-semibold">How we build it: </strong>
              {useCase.solution}
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
              Practical Use Cases
            </div>
            <div className="flex flex-wrap gap-1.5">
              {useCase.suitableFor.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-md bg-surface-muted border border-border text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-border">
            <div className="space-y-2">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                What We Deliver
              </div>
              <ul className="space-y-1.5">
                {useCase.deliverables.map((del) => (
                  <li
                    key={del}
                    className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                  >
                    <CheckCircle2
                      className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
                Required Safeguards
              </div>
              <ul className="space-y-1.5">
                {useCase.safeguards.map((sg) => (
                  <li
                    key={sg}
                    className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                  >
                    <CheckCircle2
                      className="w-3.5 h-3.5 text-success shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{sg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-surface-muted border-t border-border space-y-3">
        <div className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
          <ShieldAlert
            className="w-4 h-4 text-primary shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <span>{useCase.honestNote}</span>
        </div>
        <div className="pt-1">
          <Link
            href={`/contact?service=generative-ai-applications&challenge=${useCase.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            Discuss {useCase.shortLabel} for your workflow
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
