import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Megaphone, Target, BarChart2, TrendingUp, Users, Award } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedText from "@/components/animated-text";
import { SEODashboardMockup } from "@/components/mockups";

export const metadata: Metadata = {
  title: "Digital Marketing & PPC Campaign Services | Webntric Software",
  description: "Webntric Software designs ROI-driven digital marketing campaigns. Google Ads, Facebook lead campaigns, paid media strategy, and conversion rate optimization (CRO).",
  alternates: {
    canonical: "https://webntric.com/services/digital-marketing",
  },
};

const marketingCaps = [
  { title: "Google Ads (PPC)", desc: "Keyword-focused paid campaigns targeting ready-to-buy search queries, minimizing cost-per-click CPC.", icon: Target },
  { title: "Meta Lead Campaigns", desc: "Interactive social lead forms, creative reels-based advertising sequences, and pixel retargeting.", icon: Megaphone },
  { title: "Conversion Optimization", desc: "Analyzing landing page route behaviors, refining call-to-actions, and streamlining checkout funnels.", icon: TrendingUp },
  { title: "Analytics & Dashboarding", desc: "Setting up Google Analytics (GA4), heatmaps, and custom marketing dashboards tracking client cost-per-lead.", icon: BarChart2 },
  { title: "Social Content Planning", desc: "Writing creative social narratives, planning calendars, and building community brand loyalty.", icon: Users },
  { title: "Content Strategy", desc: "Publishing expert corporate articles, email newsletters, and brochures designed to retain customers.", icon: Award },
];

export default function DigitalMarketing() {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "Webntric Software",
      "url": "https://webntric.com"
    },
    "description": "ROI-focused digital marketing and PPC campaign optimization services including Google Ads and Conversion Rate Optimization.",
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
            <span className="text-xs uppercase tracking-wider text-primary font-bold">Services &mdash; Digital Marketing</span>
          </ScrollReveal>
          <AnimatedText
            text="Turn Digital Visibility Into Business Growth."
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We design and execute data-driven advertising campaigns that capture leads, optimize acquisition budgets, and scale company revenues.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all shadow-lg shadow-primary/20"
            >
              Start Your Campaign
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid of specifications and mockup */}
      <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Specifications */}
        <div className="lg:col-span-7 space-y-10">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Our Marketing Approach</h2>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              We focus purely on ROI, eliminating vanity metrics like likes and shares to prioritize concrete business inquiries.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketingCaps.map((cap) => (
              <div key={cap.title} className="flex gap-4">
                <div className="p-2.5 rounded-xl bg-secondary text-primary h-fit">
                  <cap.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{cap.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mockup Display */}
        <div className="lg:col-span-5 flex justify-center">
          <ScrollReveal direction="left">
            <SEODashboardMockup />
          </ScrollReveal>
        </div>
      </section>

      {/* SEO Core Content Section */}
      <section className="py-20 bg-card border-t border-border px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
              Conversion Rate Optimization (CRO) & Data Analytics
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Generating clicks is only the first step. Our marketing strategy focuses on Conversion Rate Optimization (CRO) to ensure that the traffic landing on your site converts into active inquiries and product sales. We set up detailed tracking parameters using Google Analytics (GA4) and visitor heatmaps to understand user flow and resolve friction points.
            </p>
          </ScrollReveal>

          <ScrollReveal className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Search Engine Marketing & Paid Ad Optimization
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              We design, write, and audit Google Ads paid search campaigns using transactional, high-intent keywords. By carefully refining match types, setting up negative keyword lists, and optimizing bidding rules, we minimize your cost-per-click (CPC) and focus your budget entirely on active lead generation.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
