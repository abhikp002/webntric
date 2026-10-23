"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FAQ_CATEGORIES, type FAQItem } from "@/data/faqs";
import { trackEvent } from "@/lib/analytics";

interface FaqAccordionProps {
  items: FAQItem[];
  showCategoryFilter?: boolean;
}

export function FaqAccordion({
  items,
  showCategoryFilter = false,
}: FaqAccordionProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | FAQItem["category"]
  >("all");

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-8">
      {showCategoryFilter && (
        <div
          className="flex flex-wrap gap-2 pb-4 border-b border-border"
          role="group"
          aria-label="Filter frequently asked questions by topic"
        >
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-colors ${
              selectedCategory === "all"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-surface text-foreground border-border hover:bg-surface-muted"
            }`}
          >
            All Questions ({items.length})
          </button>
          {FAQ_CATEGORIES.map((cat) => {
            const count = items.filter((i) => i.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-surface text-foreground border-border hover:bg-surface-muted"
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>
      )}

      <div className="divide-y divide-border border border-border rounded-xl bg-surface overflow-hidden">
        {filteredItems.map((faq, idx) => (
          <details
            key={faq.id || idx}
            className="group"
            onToggle={(e) => {
              if ((e.currentTarget as HTMLDetailsElement).open) {
                trackEvent({
                  name: "faq_opened",
                  question: faq.question,
                });
              }
            }}
          >
            <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-base sm:text-lg text-foreground hover:bg-surface-muted/60 transition-colors select-none">
              <span>{faq.question}</span>
              <ChevronDown
                className="w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 group-open:rotate-180 group-open:text-primary"
                aria-hidden="true"
              />
            </summary>
            <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3">
              <p>{faq.answer}</p>
              {faq.relatedLink && (
                <div>
                  <Link
                    href={faq.relatedLink.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:underline"
                  >
                    {faq.relatedLink.label}
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
