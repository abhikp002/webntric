"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Search } from "lucide-react";
import { STARTUP_FAQS, StartupFaqItem } from "@/data/startup-partnership";
import { trackEvent } from "@/lib/analytics";

export function StartupFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredFaqs = STARTUP_FAQS.filter((faq) => {
    const matchesCategory =
      filterCategory === "all" || faq.category === filterCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index: number, question: string) => {
    const next = openIndex === index ? null : index;
    setOpenIndex(next);
    if (next !== null) {
      trackEvent("faq_opened", {
        location: "startup_partnership",
        label: question,
      });
    }
  };

  return (
    <section id="faq" className="section-padding border-b border-border bg-background">
      <div className="container-editorial space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider font-semibold">
            <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Questions & Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Everything you need to know about Webntric’s selective startup technology support initiative, costs, ownership, and process.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search startup questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-border bg-surface text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex items-center gap-1.5 flex-wrap justify-center text-xs font-medium">
            <button
              type="button"
              onClick={() => setFilterCategory("all")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filterCategory === "all"
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              All ({STARTUP_FAQS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("offer")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filterCategory === "offer"
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              Support Offer
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("ownership")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filterCategory === "ownership"
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              Ownership & IP
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("process")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filterCategory === "process"
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              Evaluation & Process
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground text-sm">
              No matching questions found. You can email your specific question directly to <a href="mailto:info@webntric.com" className="text-primary underline">info@webntric.com</a>.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-card overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx, faq.question)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 text-muted-foreground ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
