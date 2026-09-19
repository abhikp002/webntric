"use client";

import React from "react";
import { Compass, Lightbulb, PenTool, Code, CheckCircle, Rocket, ShieldCheck, Heart, Sparkles, TrendingUp, Cpu, Layers } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedText from "@/components/animated-text";

const valuesList = [
  {
    title: "Innovation First",
    desc: "We continuously adapt to the latest tech frameworks, selecting optimized configurations that ensure speed and safety.",
    icon: Lightbulb,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Uncompromising Quality",
    desc: "We write clean, production-ready code with absolute attention to detail, styling grids, and accessibility benchmarks.",
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Absolute Transparency",
    desc: "No developer jargon or hidden costs. We present clear project workflows, milestones, and daily tracking lists.",
    icon: Compass,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Business-Driven Focus",
    desc: "We build features that solve real bottlenecks, improve customer conversion funnel metrics, and generate real growth.",
    icon: TrendingUp,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

const processSteps = [
  {
    num: "01",
    phase: "Discover",
    title: "Deep Dive Research",
    desc: "We study your business operations, target demographics, and product limitations to establish clear goals.",
    icon: Compass,
  },
  {
    num: "02",
    phase: "Strategize",
    title: "Architecture & Tech Selection",
    desc: "We map page route structures, database relations, SEO indexes, and select appropriate libraries.",
    icon: Layers,
  },
  {
    num: "03",
    phase: "Design",
    title: "High-Fidelity UI/UX Layouts",
    desc: "We craft custom design systems, responsive palettes, micro-animations, and accessible user journeys.",
    icon: PenTool,
  },
  {
    num: "04",
    phase: "Develop",
    title: "Clean Production Engineering",
    desc: "We write strict TypeScript, perform modular component nesting, and build lightning-fast web applications.",
    icon: Code,
  },
  {
    num: "05",
    phase: "Test",
    title: "QA Auditing",
    desc: "We audit core web vitals, execute cross-browser responsiveness checks, and evaluate security rules.",
    icon: CheckCircle,
  },
  {
    num: "06",
    phase: "Launch",
    title: "Safe Server Deployment",
    desc: "We set up build pipelines, structure DNS rules, launch sitemaps, and deploy to modern edge-servers.",
    icon: Rocket,
  },
  {
    num: "07",
    phase: "Grow",
    title: "Continuous Partnership",
    desc: "We run monthly maintenance patches, analyze ranking trends, and support backend expansion.",
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
          <ScrollReveal direction="down">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">About Us</span>
          </ScrollReveal>
          <AnimatedText
            text="Technology Built With Purpose."
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Webntric Software is a specialized software development company. We design and engineer corporate web platforms, mobile apps, offline business databases, and SEO structures focused on business results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Who We Are & Beliefs */}
        <div className="lg:col-span-7 space-y-10">
          <ScrollReveal className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Founded on the belief that digital platforms should be beautiful, secure, and fast, Webntric Software delivers premium custom software. We do not work with cheap templates or bloated codebase layouts. Every project is built from the ground up, utilizing modern software patterns.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Our engineering team is composed of multidisciplinary specialists in React architectures, native mobile platforms, offline databases, and search visibility. We are committed to building long-term technology partnerships.
            </p>
          </ScrollReveal>

          <ScrollReveal className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">What We Believe</h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              We believe a company's website or application is its primary asset. It must communicate trust instantly. We design elegant typography structures, maintain strict contrast compliance, and optimize layout transitions to elevate your company above template-based competition.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column: Mission & Vision */}
        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal className="p-8 bg-card border border-border rounded-3xl glow-indigo space-y-4">
            <Heart className="h-8 w-8 text-primary" />
            <h3 className="text-lg font-bold">Our Mission</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To empower companies to work smarter, capture wider audiences, and sustain business scale by providing production-ready custom technology solutions and data-driven marketing.
            </p>
          </ScrollReveal>

          <ScrollReveal className="p-8 bg-card border border-border rounded-3xl glow-violet space-y-4" delay={0.1}>
            <Cpu className="h-8 w-8 text-indigo-400" />
            <h3 className="text-lg font-bold">Our Vision</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To become a globally recognized digital engineering partner, establishing the benchmark for design craftsmanship, technical optimization, and transparent corporate reliability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-secondary/15 border-y border-border px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">Our Culture</span>
            <h2 className="text-3xl font-extrabold tracking-tight mt-2">Why Choose Webntric</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuesList.map((val, index) => (
              <ScrollReveal
                key={val.title}
                direction="up"
                delay={index * 0.05}
                className="p-6 bg-card border border-border rounded-2xl flex flex-col justify-between hover:shadow-md transition-all group"
              >
                <div>
                  <div className={`p-3 rounded-xl ${val.bg} ${val.color} w-fit group-hover:scale-105 transition-transform`}>
                    <val.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mt-5">{val.title}</h3>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-20">
            <ScrollReveal>
              <span className="text-xs uppercase tracking-wider text-primary font-bold">Workflow</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-foreground">
                Our Proven Process
              </h2>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                A structured, transparent roadmap from initial audit to post-launch optimization.
              </p>
            </ScrollReveal>
          </div>

          {/* Interactive timeline list */}
          <div className="relative border-l border-border/80 ml-4 md:ml-12 space-y-16">
            {processSteps.map((step, index) => (
              <ScrollReveal
                key={step.phase}
                direction="left"
                delay={index * 0.05}
                className="relative pl-10 md:pl-16 group"
              >
                {/* Timeline Circle Bullet */}
                <div className="absolute left-[-17px] top-1.5 w-8 h-8 rounded-full border-2 border-border bg-background group-hover:border-primary group-hover:bg-primary/5 transition-all flex items-center justify-center text-xs font-bold text-muted-foreground group-hover:text-primary z-10">
                  {step.num}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                  <div className="lg:col-span-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {step.phase}
                    </span>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mt-1">
                      {step.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
