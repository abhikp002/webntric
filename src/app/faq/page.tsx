import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata, buildFaqJsonLd } from "@/lib/seo";
import { CORE_FAQS } from "@/data/faqs";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { ResponsiveFigure } from "@/components/responsive-figure";

export const metadata: Metadata = buildMetadata({
  title:
    "Frequently Asked Questions | Scoping, Offline Software & SEO | Webntric",
  description:
    "Straightforward answers to 15 common questions about Webntric Software's websites, offline Windows software, billing systems, SEO, timelines, NDAs, and support.",
  path: "/faq",
  keywords: [
    "software development FAQ",
    "offline Windows software questions",
    "website and SEO questions Webntric",
  ],
});

export default function FaqPage() {
  return (
    <div className="bg-background">
      <JsonLd data={buildFaqJsonLd(CORE_FAQS)} />

      {/* HERO */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border">
        <div className="container-editorial space-y-6">
          <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                15 Core Objection-Handling Answers
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.14]">
                Clear answers before you commit time or budget.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We believe in answering practical questions upfront—from how
                offline Windows software works without internet to how we scope
                projects, handle revisions, and support your team after launch.
              </p>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/home/webntric-consultant-explaining-solution.webp"
                alt="Technology consultant answering project scoping, timeline, and software ownership questions"
                width={1200}
                height={800}
                aspectRatio="16/10"
                priority
                sizes="(max-width: 1023px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDION WITH CATEGORY FILTERS */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial">
          <FaqAccordion items={CORE_FAQS} showCategoryFilter />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="bg-surface border border-border rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Still Have a Question?
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Ask our team directly—no sales pressure.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Send us your specific operational question or workflow
                requirement, and a senior team member will reply within 1
                business day.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors shrink-0"
            >
              Ask a Question
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
