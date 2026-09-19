"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Code, Smartphone, Monitor, Megaphone, Search, Share2, CheckCircle2, Star, Sparkles, TrendingUp, HelpCircle, MessageSquare, Server } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedText from "@/components/animated-text";
import StatsCounter from "@/components/stats-counter";

const capabilitiesList = [
  { name: "Web Development", icon: Code, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "Mobile Applications", icon: Smartphone, color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { name: "Desktop Software", icon: Monitor, color: "text-violet-500", bg: "bg-violet-500/10" },
  { name: "Digital Marketing", icon: Megaphone, color: "text-pink-500", bg: "bg-pink-500/10" },
  { name: "SEO Audits", icon: Search, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { name: "Social Media", icon: Share2, color: "text-amber-500", bg: "bg-amber-500/10" },
];

const featuredServices = [
  {
    num: "01",
    title: "Web Development",
    desc: "Modern, scalable, responsive websites and enterprise web applications.",
    href: "/services/web-development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    num: "02",
    title: "Mobile App Development",
    desc: "Native and cross-platform Android and iOS applications built for user experience.",
    href: "/services/mobile-app-development",
    icon: Smartphone,
    color: "from-indigo-500 to-blue-500",
  },
  {
    num: "03",
    title: "Offline Windows Software",
    desc: "Reliable, high-performance desktop software for offline business workflows.",
    href: "/services/offline-windows-software",
    icon: Monitor,
    color: "from-violet-500 to-indigo-500",
  },
  {
    num: "04",
    title: "Digital Marketing",
    desc: "Data-driven strategy, paid media, and lead generation focused on business ROI.",
    href: "/services/digital-marketing",
    icon: Megaphone,
    color: "from-pink-500 to-rose-500",
  },
  {
    num: "05",
    title: "SEO Optimization",
    desc: "Technical audits, keyword research, on-page optimization, and traffic growth.",
    href: "/services/seo",
    icon: Search,
    color: "from-emerald-500 to-teal-500",
  },
  {
    num: "06",
    title: "Social Media Management",
    desc: "Brand building, community engagement, and creative storytelling across social feeds.",
    href: "/services/social-media-management",
    icon: Share2,
    color: "from-amber-500 to-orange-500",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-primary/10 blur-[80px] md:blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full bg-accent/10 blur-[80px] md:blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
          {/* Subtle Grid Backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <ScrollReveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border text-xs font-semibold text-primary w-fit">
                <Sparkles className="h-3.5 w-3.5" /> High-Performance Tech Agency
              </div>
            </ScrollReveal>

            <AnimatedText
              text="We Build Digital Experiences That Move Businesses Forward."
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground"
            />

            <ScrollReveal delay={0.3}>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Webntric Software creates high-performance websites, mobile applications, offline business desktop software, and growth marketing campaigns designed to help businesses grow in a digital-first world.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="flex flex-wrap gap-4 mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/35 focus:outline-none"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-secondary border border-border text-foreground font-semibold hover:bg-secondary/80 transition-colors focus:outline-none"
              >
                Explore Our Services
              </Link>
            </ScrollReveal>
          </div>

          {/* Hero Visual Mockup */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <ScrollReveal direction="left" delay={0.4} className="w-full">
              <div className="relative mx-auto max-w-[500px] lg:max-w-none w-full flex items-center justify-center">
                <img
                  src="/hero-illustration.png"
                  alt="Webntric CMS Technology Illustration"
                  className="w-full h-auto object-contain max-h-[420px]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CAPABILITIES / TRUSTED SECTION */}
      <section className="py-16 bg-secondary/20 border-y border-border px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-xs uppercase tracking-wider text-primary font-bold">Capabilities</h2>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-2 text-foreground">
              From Ideas to Digital Products
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {capabilitiesList.map((cap, index) => (
              <ScrollReveal
                key={cap.name}
                direction="up"
                delay={index * 0.05}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-2xl hover:shadow-md hover:border-primary/30 transition-all group cursor-default"
              >
                <div className={`p-2.5 rounded-xl ${cap.bg} ${cap.color} group-hover:scale-115 transition-transform`}>
                  <cap.icon className="h-5 w-5" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                  {cap.name}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Stats count and design column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:order-last">
            <ScrollReveal direction="right" className="col-span-2">
              <div className="p-6 bg-card border border-border rounded-2xl flex flex-col justify-between h-40 shadow-sm relative overflow-hidden group">
                <div className="absolute right-[-10%] top-[-10%] w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors"></div>
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-500" />
                  ))}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mt-2">Rated 4.9/5 by Clients</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Evaluated across major enterprise platforms for speed, security, and project delivery.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <StatsCounter value={99} suffix="%" label="Success Rate" />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <StatsCounter value={100} suffix="+" label="Launched Sites" />
            </ScrollReveal>
          </div>

          {/* Text and story column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <ScrollReveal>
              <span className="text-xs uppercase tracking-wider text-primary font-bold">About Webntric</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-foreground">
                Technology With Purpose
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-base text-muted-foreground leading-relaxed">
                At Webntric Software, we believe technology should be a multiplier for your business, not a bottleneck. We bridge the gap between creative UI/UX design and raw backend performance.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mt-4">
                Whether you need a custom-built React app, a high-converting marketing campaign, or a secure offline billing system, our engineers write production-ready code aligned with modern engineering standards.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-indigo-500 transition-colors group"
              >
                More About Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICES SHOWCASE SECTION */}
      <section className="py-20 md:py-28 bg-secondary/10 border-t border-border px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-xs uppercase tracking-wider text-primary font-bold">Our Digital Expertise</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-foreground">
                Services Built for Performance
              </h2>
              <p className="text-muted-foreground mt-4 text-sm md:text-base leading-relaxed">
                From core app development to digital expansion and local database architectures.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((svc, index) => (
              <ScrollReveal
                key={svc.title}
                direction="up"
                delay={index * 0.05}
                className="group flex flex-col justify-between p-8 bg-card border border-border hover:border-primary/50 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent Background Glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${svc.color} opacity-5 blur-2xl group-hover:opacity-20 transition-opacity`}></div>

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold text-muted-foreground/60">{svc.num}</span>
                    <div className={`p-3 rounded-2xl bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm`}>
                      <svc.icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/50">
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-primary transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK MATRIX SECTION */}
      <section className="py-20 md:py-28 bg-card border-t border-border px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-xs uppercase tracking-wider text-primary font-bold">Tech Stack</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-foreground">
                Our Technology Matrix
              </h2>
              <p className="text-muted-foreground mt-4 text-sm md:text-base leading-relaxed">
                We select premium, high-performance tech stacks aligned with modern development standards.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { name: "React JS / Next.js", category: "Web Frontend" },
              { name: "Laravel / Python", category: "Web Backend" },
              { name: "Flutter / React Native", category: "Mobile Apps" },
              { name: ".NET / Visual Basic .NET", category: "Offline Desktop" },
              { name: "PostgreSQL / MySQL", category: "Relational DB" },
              { name: "MongoDB", category: "NoSQL DB" },
              { name: "MS SQL Server", category: "Enterprise DB" },
              { name: "Firebase", category: "Real-time backend" },
            ].map((tech, index) => (
              <ScrollReveal
                key={tech.name}
                direction="up"
                delay={index * 0.05}
                className="p-6 bg-secondary/20 border border-border rounded-2xl flex flex-col justify-between hover:border-primary/40 hover:shadow-xs transition-all group"
              >
                <div className="text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider">{tech.category}</div>
                <div className="text-sm font-bold text-foreground mt-3 group-hover:text-primary transition-colors">{tech.name}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS SECTION */}
      <section className="py-20 md:py-28 bg-secondary/10 border-t border-border px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-xs uppercase tracking-wider text-primary font-bold">Reviews</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-foreground">
                Client Success Stories
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Anurag Mehta",
                quote: "Webntric Software transformed our legacy billing register into a high-performance web portal. Their Next.js and React expertise is second to none."
              },
              {
                name: "Zhāng Wěi",
                quote: "Our inventory software required absolute offline reliability. Webntric delivered a secure .NET desktop database that synced flawlessly with no data loss."
              },
              {
                name: "Elena Rostova",
                quote: "Their technical SEO strategy pushed our search query visibility by 140% in just three months. They mapped our keyword paths and tags perfectly."
              }
            ].map((test, index) => (
              <ScrollReveal
                key={test.name}
                direction="up"
                delay={index * 0.05}
                className="p-8 bg-card border border-border rounded-3xl flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden"
              >
                <div>
                  <div className="flex gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50">
                  <div className="text-xs font-bold text-foreground">{test.name}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 md:py-28 bg-card border-t border-border px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-xs uppercase tracking-wider text-primary font-bold">Answers</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-foreground">
                Frequently Asked Questions
              </h2>
            </ScrollReveal>
          </div>

          <div className="space-y-4">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQAccordion() {
  const faqs = [
    {
      q: "Can your desktop software work completely offline?",
      a: "Yes, our Windows software systems are engineered using local C# engines and SQLite or local PostgreSQL databases. They require no internet connection to process transactions, inventory, or student files, and can optionally sync to the cloud when a connection is restored."
    },
    {
      q: "Do you build native or cross-platform mobile apps?",
      a: "We engineer both native iOS/Android (using Swift & Kotlin) and cross-platform mobile applications (using Flutter and React Native), depending on your performance specifications and timeline."
    },
    {
      q: "What is your project development methodology?",
      a: "We follow a 7-phase transparent workflow: Discover, Strategize, Design, Develop, Test, Deploy, and Support. You receive daily log lists and direct communication channels with our engineering team."
    },
    {
      q: "Do you offer ongoing post-launch maintenance?",
      a: "Yes, we provide customizable support agreements covering security patches, dependency updates, server tracking, and page optimization audits."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx} className="bg-secondary/20 border border-border rounded-2xl overflow-hidden transition-all duration-300">
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full text-left p-6 font-bold text-sm md:text-base flex justify-between items-center cursor-pointer select-none"
            >
              <span>{faq.q}</span>
              <span className="text-primary font-semibold text-lg">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-xs md:text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
