"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Rocket,
  Globe,
  Cpu,
  WifiOff,
  TrendingUp,
  Search,
  Share2,
  Wrench,
} from "lucide-react";
import { HOME_STAGE_SELECTOR_OPTIONS } from "@/data/business-stages";
import { trackEvent } from "@/lib/analytics";

const STAGE_ICONS: Record<string, typeof Rocket> = {
  "starting-new-business": Rocket,
  "need-professional-website": Globe,
  "digitize-manual-operations": Cpu,
  "need-offline-billing-inventory": WifiOff,
  "need-more-leads-customers": TrendingUp,
  "need-better-search-visibility": Search,
  "need-social-media-content": Share2,
  "need-ongoing-maintenance-support": Wrench,
};

export function BusinessStageSelector() {
  const [selectedId, setSelectedId] = useState<string>(
    HOME_STAGE_SELECTOR_OPTIONS[0].id
  );

  const activeOption =
    HOME_STAGE_SELECTOR_OPTIONS.find((opt) => opt.id === selectedId) ||
    HOME_STAGE_SELECTOR_OPTIONS[0];

  const ActiveIcon = STAGE_ICONS[activeOption.id] || Compass;

  const handleSelect = (
    id: string,
    label: string,
    recommendedService: string
  ) => {
    setSelectedId(id);
    trackEvent({
      name: "service_recommendation_selected",
      stage_option: id,
      stage_label: label,
      recommended_service: recommendedService,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
      {/* Left column: 8 situation buttons with consistent iconography */}
      <div
        className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5"
        role="tablist"
        aria-label="Select your current business need"
      >
        {HOME_STAGE_SELECTOR_OPTIONS.map((option) => {
          const isSelected = option.id === activeOption.id;
          const IconComponent = STAGE_ICONS[option.id] || Compass;

          return (
            <button
              key={option.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`stage-panel-${option.id}`}
              id={`stage-tab-${option.id}`}
              onClick={() =>
                handleSelect(
                  option.id,
                  option.label,
                  option.recommendedFirstService.name
                )
              }
              className={`w-full text-left px-4 py-3.5 rounded-lg border transition-colors flex items-center justify-between gap-3 cursor-pointer ${
                isSelected
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-surface text-foreground border-border hover:border-primary/40 hover:bg-surface-muted"
              }`}
            >
              <div className="flex items-start gap-3 min-w-0">
                <div
                  className={`mt-0.5 p-2 rounded-md shrink-0 ${
                    isSelected
                      ? "bg-primary-foreground/15 text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <IconComponent className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span
                    className={`block text-[11px] font-mono uppercase tracking-wider mb-0.5 ${
                      isSelected
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {option.shortTag}
                  </span>
                  <span className="font-semibold text-sm sm:text-base block leading-snug">
                    {option.label}
                  </span>
                </div>
              </div>
              <ArrowRight
                className={`w-4 h-4 shrink-0 transition-transform ${
                  isSelected
                    ? "text-primary-foreground translate-x-0.5"
                    : "text-muted-foreground"
                }`}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>

      {/* Right column: tailored recommendation card */}
      <div
        role="tabpanel"
        id={`stage-panel-${activeOption.id}`}
        aria-labelledby={`stage-tab-${activeOption.id}`}
        className="lg:col-span-7 bg-surface border border-border rounded-xl p-5 sm:p-8 shadow-sm"
      >
        <div className="flex items-start justify-between gap-4 pb-5 mb-6 border-b border-border">
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
              <ActiveIcon className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-1">
                Diagnostic Guidance — {activeOption.shortTag}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                {activeOption.label}
              </h3>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-surface-muted border border-border">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                Likely Challenge
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {activeOption.likelyChallenge}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-surface-muted border border-border">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                Why This Happens
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {activeOption.whyItHappens}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-lg bg-primary/5 border border-primary/20">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Recommended First Step
              </span>
              <Link
                href={activeOption.recommendedFirstService.href}
                onClick={() =>
                  trackEvent({
                    name: "service_card_click",
                    service_name: activeOption.recommendedFirstService.name,
                    source: "home_stage_selector",
                  })
                }
                className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                Read service overview
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
            <h4 className="text-lg font-bold text-foreground mb-1.5">
              <Link
                href={activeOption.recommendedFirstService.href}
                className="hover:text-primary transition-colors"
              >
                {activeOption.recommendedFirstService.name}
              </Link>
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {activeOption.recommendedFirstService.summary}
            </p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2.5">
              Related Capabilities & Guides
            </p>
            <div className="flex flex-wrap gap-2">
              {activeOption.relatedServices.map((rel) => (
                <Link
                  key={rel.href}
                  href={rel.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-surface-muted text-foreground border border-border hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <CheckCircle2
                    className="w-3.5 h-3.5 text-primary shrink-0"
                    aria-hidden="true"
                  />
                  {rel.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-5 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
              <strong className="text-foreground font-semibold">
                Suggested next step:{" "}
              </strong>
              {activeOption.suggestedNextStep}
            </p>
            <Link
              href={activeOption.ctaHref}
              onClick={() =>
                trackEvent({
                  name: "cta_click",
                  cta_label: activeOption.ctaLabel,
                  cta_location: "home_stage_selector",
                })
              }
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors shrink-0"
            >
              {activeOption.ctaLabel}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
