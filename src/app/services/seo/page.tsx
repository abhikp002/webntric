import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, FileCode, Settings, BarChart, Globe, Zap } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedText from "@/components/animated-text";
import { SEODashboardMockup } from "@/components/mockups";

export const metadata: Metadata = {
  title: "Technical SEO Services & Organic Search Rankings | Webntric Software",
  description: "Webntric Software provides professional technical SEO services. Audits, keyword research, on-page optimization, robots/sitemaps configuration, and speed improvements.",
  alternates: {
    canonical: "https://webntric.com/services/seo",
  },
};

const seoPillars = [
  { title: "Technical SEO Audits", desc: "Optimizing sitemaps, robots.txt, canonical page configurations, redirect routes, and repairing Search Console crawl errors.", icon: Settings },
  { title: "On-Page Metadata", desc: "Structuring unique title tags, descriptive metas, H1-H3 headers, alt text, and semantic HTML5.", icon: FileCode },
  { title: "Keyword Research", desc: "Mapping competitor search traffic and identifying high-volume, transactional keywords matching your services.", icon: Search },
  { title: "Local SEO Citations", desc: "Claiming business profiles, managing reviews, structuring local schemas, and building geographical citations.", icon: Globe },
  { title: "Page Speed Refactoring", desc: "Minimizing assets, sizing images, deferring script loads, and passing Google Core Web Vitals.", icon: Zap },
  { title: "Performance Reports", desc: "Tracking keyword rank gains, organic impressions, click-through rates CTR, and indexing status monthly.", icon: BarChart },
];

export default function SEOOptimization() {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Technical SEO Optimization Services",
    "provider": {
      "@type": "Organization",
      "name": "Webntric Software",
      "url": "https://webntric.com"
    },
    "description": "Professional technical, on-page, and local SEO services to improve organic search engine rankings and site speed.",
    "areaServed": "Worldwide"
  };

  return (
    <div className="overflow-hidden">
      {/* Dynamic SEO JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Page Hero */}
      <section className="relative pt-32 pb-16 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
          <ScrollReveal direction="down">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">Services &mdash; SEO</span>
          </ScrollReveal>
          <AnimatedText
            text="Get Found. Get Clicked. Get Growing."
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We construct clean, technical SEO frameworks that rank higher on search engines and channel continuous organic leads to your services.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all shadow-lg shadow-primary/20"
            >
              Improve My Rankings
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid of features and mockup */}
      <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Mockup Display */}
        <div className="lg:col-span-5 flex justify-center lg:order-last">
          <ScrollReveal direction="right">
            <SEODashboardMockup />
          </ScrollReveal>
        </div>

        {/* Specifications */}
        <div className="lg:col-span-7 space-y-10">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Our SEO Infrastructure</h2>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              We implement comprehensive technical optimization targeting long-term search relevance.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seoPillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-4">
                <div className="p-2.5 rounded-xl bg-secondary text-primary h-fit">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{pillar.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Core Content Section */}
      <section className="py-20 bg-card border-t border-border px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
              Search Engine Rankings Optimization & Technical Auditing
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              To rank on modern search engines, a website must pass technical crawl requirements. We perform full website audits, analyzing sitemap schemas, robots directives, canonical tags, and duplicate route configurations. By correcting indexing issues in Google Search Console, we guarantee your site pages are found by crawlers instantly.
            </p>
          </ScrollReveal>

          <ScrollReveal className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              On-Page Semantic HTML & JSON-LD Structured Schema
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              We organize your page hierarchies using semantic HTML5 elements. By writing descriptive meta tags, unique titles, and structured JSON-LD schemas (such as Organization, WebSite, and LocalBusiness specifications), we give search engines clear context regarding your digital products.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
