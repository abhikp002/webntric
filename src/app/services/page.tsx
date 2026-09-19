"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code, Smartphone, Monitor, Megaphone, Search, Share2, Sparkles, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedText from "@/components/animated-text";

const servicesList = [
  {
    icon: Code,
    title: "Web Development",
    href: "/services/web-development",
    desc: "We build custom corporate websites, e-commerce stores, and high-performance Web Applications. Using React, Next.js, and TypeScript, our web apps load fast, achieve exceptional Core Web Vitals, and scale effortlessly.",
    features: ["Next.js & React frameworks", "CMS and API Integration", "Core Web Vitals Optimization", "E-commerce & Custom Portals"],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    desc: "Native iOS and Android application engineering alongside cross-platform Flutter solutions. We create immersive user interfaces, integrate local background sync APIs, push alerts, and secure biometric authentication.",
    features: ["iOS Swift & Android Kotlin", "Cross-Platform Flutter/React Native", "Offline-first Local Caching", "App Store & Google Play Deploy"],
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Monitor,
    title: "Offline Windows Software",
    desc: "Reliable desktop software designed to work perfectly without an internet connection. Excellent for invoicing, billing registers, institute administration, local hardware access, and offline data storage.",
    href: "/services/offline-windows-software",
    features: ["Custom .NET / C# Desktop Engines", "SQLite & PostgreSQL Local Databases", "Automated Local Backups", "Hardware/POS Printer Integrations"],
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    desc: "ROI-driven digital marketing campaigns. We set up, manage, and optimize Google Ads, paid social media ads, and content strategies focused on generating actual client leads rather than vanity views.",
    features: ["Google Ads & PPC Campaigns", "Meta Lead-Generation Ads", "Conversion Rate Optimization (CRO)", "Advanced Analytics Dashboarding"],
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    href: "/services/seo",
    desc: "Rank higher on Google searches and attract organic traffic. We conduct complete technical audits, keyword research, meta updates, structured JSON-LD schemes, and speed optimizations.",
    features: ["Technical SEO & Audits", "Keyword Mapping & Competitors", "Structured JSON-LD Schema", "High-Quality Local Citations"],
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    href: "/services/social-media-management",
    desc: "Creative social media management to build brand trust. We handle content planning, high-quality asset design, short-form video content creation, and active community engagement.",
    features: ["Multi-Channel Content Strategy", "Short-Form Video Production", "Custom Social Graphics & Reels", "Active Community Engagement"],
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export default function ServicesHub() {
  return (
    <div className="overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
          <ScrollReveal direction="down">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">What We Offer</span>
          </ScrollReveal>
          <AnimatedText
            text="Our Digital Expertise."
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We design and construct high-performance digital products. Explore our core services and select the right solutions to expand your business presence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Breakdown List */}
      <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="space-y-24">
          {servicesList.map((svc, index) => (
            <ScrollReveal
              key={svc.title}
              direction="up"
              delay={0.05}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-border/50 pb-16 last:border-0 last:pb-0"
            >
              {/* Text Area */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${svc.bg} ${svc.color}`}>
                    <svc.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                    {svc.title}
                  </h2>
                </div>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {svc.desc}
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  {svc.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs md:text-sm font-semibold text-foreground/80">
                      <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-secondary border border-border text-xs font-bold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                  >
                    View Service Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Graphical illustration space */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[400px] aspect-4/3 rounded-2xl bg-card border border-border flex items-center justify-center p-8 relative overflow-hidden shadow-sm hover:border-primary/30 transition-colors group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent)]"></div>
                  <div className="relative z-10 text-center flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center bg-primary/5 group-hover:scale-105 transition-transform duration-300">
                      <svc.icon className={`h-8 w-8 ${svc.color}`} />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-mono text-zinc-500 font-bold">WEBNTRIC CORE SVCS</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
