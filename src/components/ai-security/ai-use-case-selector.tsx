"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import type { AIUseCase } from "@/data/ai-services";

export function AIUseCaseSelector({ useCases }: { useCases: AIUseCase[] }) {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    useCases[0]?.slug ?? "ai-chatbots"
  );

  const active =
    useCases.find((u) => u.slug === selectedSlug) ?? useCases[0];

  if (!active) return null;

  return (
    <div className="bg-surface border border-border rounded-2xl p-5 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-5">
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Interactive AI Opportunity Explorer
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground">
            Select a workflow to see how we design and safeguard it
          </h3>
        </div>
        <div
          role="tablist"
          aria-label="AI Use Case Categories"
          className="flex flex-wrap gap-2"
        >
          {useCases.map((uc) => {
            const isSelected = uc.slug === active.slug;
            return (
              <button
                key={uc.slug}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedSlug(uc.slug)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-surface-muted text-foreground hover:bg-secondary border border-border"
                }`}
              >
                {uc.shortLabel}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 space-y-4">
          <h4 className="text-base sm:text-lg font-bold text-foreground">
            {active.title}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {active.solution}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-surface-muted border border-border space-y-2">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                Key Deliverables
              </div>
              <ul className="space-y-1.5">
                {active.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs text-foreground"
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

            <div className="p-4 rounded-xl bg-surface-muted border border-border space-y-2">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
                Human Review & Safety Controls
              </div>
              <ul className="space-y-1.5">
                {active.safeguards.map((sg) => (
                  <li
                    key={sg}
                    className="flex items-start gap-2 text-xs text-foreground"
                  >
                    <ShieldCheck
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

        <div className="lg:col-span-5 p-5 rounded-xl bg-surface-muted border border-border space-y-4">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
            Operational Reality Check
          </div>
          <p className="text-xs sm:text-sm text-foreground leading-relaxed">
            {active.honestNote}
          </p>
          <div className="space-y-2">
            <div className="text-xs font-semibold text-muted-foreground">
              Suitable for:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {active.suitableFor.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href={`/services/generative-ai-applications#${active.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-colors"
            >
              Read full specification
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
            <Link
              href={`/contact?service=generative-ai-applications&challenge=${active.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-surface border border-border text-foreground text-xs font-semibold hover:bg-background transition-colors"
            >
              Discuss this use case
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
