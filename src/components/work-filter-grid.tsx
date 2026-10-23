"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Layers, Maximize2, X } from "lucide-react";
import {
  WORK_BLUEPRINTS,
  WORK_CATEGORIES,
  type WorkCategory,
  type WorkBlueprintItem,
} from "@/data/work";
import { trackEvent } from "@/lib/analytics";

interface WorkFilterGridProps {
  initialLimit?: number;
  showFullPageLink?: boolean;
}

export function WorkFilterGrid({
  initialLimit,
  showFullPageLink = false,
}: WorkFilterGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | WorkCategory>(
    "All"
  );
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const [enlargedItem, setEnlargedItem] = useState<WorkBlueprintItem | null>(
    null
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setEnlargedItem(null);
      }
    };
    if (enlargedItem) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [enlargedItem]);

  const industries = useMemo(() => {
    const unique = Array.from(
      new Set(WORK_BLUEPRINTS.map((item) => item.industry))
    );
    return ["All", ...unique];
  }, []);

  const filteredBlueprints = useMemo(() => {
    const list = WORK_BLUEPRINTS.filter((item) => {
      const matchesCat =
        selectedCategory === "All" ||
        item.category === selectedCategory ||
        item.secondaryCategories?.includes(selectedCategory);
      const matchesInd =
        selectedIndustry === "All" || item.industry === selectedIndustry;
      return matchesCat && matchesInd;
    });
    if (
      initialLimit &&
      selectedCategory === "All" &&
      selectedIndustry === "All"
    ) {
      return list.slice(0, initialLimit);
    }
    return list;
  }, [selectedCategory, selectedIndustry, initialLimit]);

  return (
    <div className="space-y-8">
      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
        <div
          className="flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter blueprints by capability category"
        >
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              trackEvent({
                name: "work_filter_selected",
                filter_type: "category",
                filter_value: "All",
              });
            }}
            className={`min-h-[40px] px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-medium border transition-colors cursor-pointer ${
              selectedCategory === "All"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-surface text-foreground border-border hover:bg-surface-muted"
            }`}
          >
            All Capabilities
          </button>
          {WORK_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setSelectedCategory(category);
                trackEvent({
                  name: "work_filter_selected",
                  filter_type: "category",
                  filter_value: category,
                });
              }}
              className={`min-h-[40px] px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-medium border transition-colors cursor-pointer ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-surface text-foreground border-border hover:bg-surface-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <label
            htmlFor="work-industry-filter"
            className="text-xs font-mono uppercase tracking-wider text-muted-foreground shrink-0"
          >
            Industry:
          </label>
          <select
            id="work-industry-filter"
            value={selectedIndustry}
            onChange={(e) => {
              setSelectedIndustry(e.target.value);
              trackEvent({
                name: "work_filter_selected",
                filter_type: "industry",
                filter_value: e.target.value,
              });
            }}
            className="min-h-[40px] w-full sm:w-auto px-3 py-1.5 rounded-md text-xs sm:text-sm bg-surface text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind === "All" ? "All Industries" : ind}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Grid */}
      {filteredBlueprints.length === 0 ? (
        <div className="p-8 rounded-xl bg-surface border border-border text-center">
          <p className="text-base font-medium text-foreground mb-2">
            No blueprints match the combined capability and industry filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSelectedIndustry("All");
            }}
            className="text-sm font-semibold text-primary hover:underline cursor-pointer"
          >
            Reset filters to view all system blueprints
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {filteredBlueprints.map((item) => {
            const imageSrc = `/images/work/${item.id}.webp`;
            return (
              <article
                key={item.id}
                className="apple-card overflow-hidden"
              >
                {/* Top metadata bar */}
                <div className="px-4 sm:px-6 py-3.5 bg-surface-muted border-b border-border flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                      <Layers className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      {item.projectTypeLabel}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-surface border border-border text-foreground">
                      {item.category}
                    </span>
                    <Link
                      href={item.industryHref}
                      className="px-2.5 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary hover:bg-primary/15 transition-colors"
                    >
                      {item.industry}
                    </Link>
                  </div>
                </div>

                <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Narrative & Deliverables */}
                  <div className="lg:col-span-7 space-y-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {item.title}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-surface-muted/60 border border-border">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                          Business Situation
                        </h4>
                        <p className="text-sm text-foreground leading-relaxed">
                          {item.businessSituation}
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-surface-muted/60 border border-border">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                          Operational Problem
                        </h4>
                        <p className="text-sm text-foreground leading-relaxed">
                          {item.problem}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                        What Webntric Engineered
                      </h4>
                      <ul className="space-y-2">
                        {item.whatWebntricBuilt.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-sm text-foreground"
                          >
                            <CheckCircle2
                              className="w-4 h-4 text-primary shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-1">
                        Expected Operational Outcome
                      </h4>
                      <p className="text-sm text-foreground leading-relaxed">
                        {item.expectedOperationalOutcome}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {item.technologiesUsed.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded text-xs font-mono bg-surface-muted border border-border text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={item.relatedServiceHref}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                      >
                        Explore {item.relatedServiceLabel}
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual System Screenshot + Flow Steps */}
                  <div className="lg:col-span-5 space-y-4">
                    <figure className="rounded-xl overflow-hidden border border-border bg-surface-muted">
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                          src={imageSrc}
                          alt={`Representative system interface and architecture blueprint for ${item.title}`}
                          width={1280}
                          height={800}
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="h-full w-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setEnlargedItem(item);
                            trackEvent("case_study_opened", {
                              label: item.title,
                              category: item.category,
                            });
                          }}
                          aria-label={`Enlarge blueprint preview for ${item.title}`}
                          className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background/95 border border-border text-xs font-semibold text-foreground hover:text-primary shadow-sm cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                          Inspect Blueprint
                        </button>
                      </div>
                    </figure>

                    <div className="bg-surface-muted border border-border rounded-xl p-4 space-y-2.5">
                      {item.blueprintDiagram.flowSteps.map((flow) => (
                        <div
                          key={flow.step}
                          className="p-3 rounded-lg bg-surface border border-border"
                        >
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-xs font-mono font-bold text-primary">
                              STEP {flow.step}
                            </span>
                            <span className="text-xs font-semibold text-foreground">
                              {flow.label}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {flow.detail}
                          </p>
                        </div>
                      ))}

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                        {item.blueprintDiagram.keyMetricsOrChecks.map(
                          (check) => (
                            <div
                              key={check.label}
                              className="p-2.5 rounded bg-surface border border-border"
                            >
                              <span className="block text-[10px] font-mono uppercase text-muted-foreground">
                                {check.label}
                              </span>
                              <span className="block text-xs font-semibold text-foreground mt-0.5">
                                {check.value}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Accessible Enlarged Blueprint Modal */}
      {enlargedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-blueprint-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-foreground/70 backdrop-blur-xs"
          onClick={() => setEnlargedItem(null)}
        >
          <div
            className="bg-surface border border-border rounded-2xl max-w-4xl w-full max-h-[90dvh] overflow-y-auto shadow-2xl p-4 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-3 border-b border-border">
              <div>
                <span className="text-xs font-mono uppercase text-primary font-semibold">
                  {enlargedItem.projectTypeLabel}
                </span>
                <h3
                  id="modal-blueprint-title"
                  className="text-lg sm:text-xl font-bold text-foreground"
                >
                  {enlargedItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setEnlargedItem(null)}
                aria-label="Close enlarged blueprint view"
                className="min-h-[40px] min-w-[40px] inline-flex items-center justify-center rounded-lg bg-surface-muted border border-border text-foreground hover:text-primary cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-border bg-surface-muted">
              <Image
                src={`/images/work/${enlargedItem.id}.webp`}
                alt={`Enlarged system blueprint for ${enlargedItem.title}`}
                width={1280}
                height={800}
                sizes="90vw"
                className="w-full h-auto"
              />
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground">
              <strong className="text-foreground">Expected Outcome: </strong>
              {enlargedItem.expectedOperationalOutcome}
            </p>
          </div>
        </div>
      )}

      {showFullPageLink && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
          <p className="text-xs text-muted-foreground">
            Note: Where client confidentiality applies, we present representative
            system blueprints showing the exact operational architecture we build.
          </p>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline shrink-0"
          >
            View all 6 system blueprints & architectures
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  );
}
