import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code, Cpu, Database, Flame, Globe, Layers, Layout, Lock, Settings } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedText from "@/components/animated-text";

export const metadata: Metadata = {
  title: "Custom Web Development Services | Next.js & React | Webntric Software",
  description: "Webntric Software designs and builds premium, high-performance web applications, corporate websites, e-commerce storefronts, and API integrations with Next.js, React, Laravel, and Python.",
  alternates: {
    canonical: "https://webntric.com/services/web-development",
  },
};

const serviceCapabilities = [
  { title: "Custom Web Applications", desc: "Complex business software running inside the browser with secure authentication, state synching, and modern database queries.", icon: Cpu },
  { title: "Enterprise Websites", desc: "Highly structured corporate websites designed to build brand authority, rank on Google, and acquire customer leads.", icon: Globe },
  { title: "E-Commerce Engines", desc: "Fast-loading online storefronts integrated with modern billing gateways, custom inventory catalogs, and automated invoicing.", icon: Layout },
  { title: "CMS Integrations", desc: "Headless content management interfaces (Sanity, Strapi, Contentful) giving your team editing access without breaking structural code.", icon: Layers },
  { title: "API Integrations", desc: "Linking internal databases and software with external APIs (Stripe, HubSpot, Salesforce, custom endpoints) securely.", icon: Settings },
  { title: "Performance Auditing", desc: "Refactoring slow, legacy React websites to reach 95+ performance scores, clean bundles, and pass Core Web Vitals.", icon: Flame },
];

export default function WebDevelopment() {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Web Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Webntric Software",
      "url": "https://webntric.com"
    },
    "description": "Premium Next.js, React, Laravel, and Python web development services focusing on page performance, security, and search rankings.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js Web App Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Corporate Websites"
          }
        }
      ]
    }
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
            <span className="text-xs uppercase tracking-wider text-primary font-bold">Services &mdash; Web Dev</span>
          </ScrollReveal>
          <AnimatedText
            text="Web Development That Performs."
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We engineer high-performance web products that rank higher on search engines, load instantly, and drive customer conversion funnels. Built on clean Next.js, React, and strict TypeScript.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all shadow-lg shadow-primary/20"
            >
              Build Your Website
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Breakdown */}
      <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Our Web Capabilities</h2>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              We design and implement custom architectures matching your business goals.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCapabilities.map((cap, index) => (
            <ScrollReveal
              key={cap.title}
              direction="up"
              delay={index * 0.05}
              className="p-8 bg-card border border-border rounded-3xl hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <cap.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mt-6 group-hover:text-primary transition-colors">
                {cap.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {cap.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SEO Core Content Section */}
      <section className="py-20 bg-card border-t border-border px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
              Custom Web Architectures Focused on Speed and Scaling
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              At Webntric Software, we understand that page load times directly impact search rankings and customer retention. A website that takes longer than two seconds to load results in lost traffic and higher bounce rates. That is why we avoid template builders like WordPress or Wix, choosing instead to write raw, compiled code using Next.js and React JS.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Our engineering team configures Server-Side Rendering (SSR) and Static Site Generation (SSG) to pre-render pages directly on edge networks. This means search engine crawlers can index your content instantly, boosting your organic search queries, while human visitors receive a lightning-fast user experience.
            </p>
          </ScrollReveal>

          <ScrollReveal className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Secure Backend Systems: Laravel, Python, and .NET
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              For complex web portals requiring secure user registration, automated email queues, and advanced data processing, we develop robust backends in Laravel and Python. These frameworks provide secure routing middleware, SQL injection protection, and easy integration with PostgreSQL and MongoDB databases, ensuring your business records remain safe.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech Stack Focus */}
      <section className="py-16 bg-secondary/20 border-y border-border px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Architecture</span>
            <h2 className="text-3xl font-extrabold tracking-tight mt-2">Modern Technology Stack</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              We select robust, future-ready libraries that optimize server-side rendering, minimize JavaScript compile size, and guarantee extreme security.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                <Code className="h-4.5 w-4.5 text-primary" /> React & Next.js
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                <Database className="h-4.5 w-4.5 text-indigo-400" /> PostgreSQL & Prisma
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                <Layers className="h-4.5 w-4.5 text-violet-400" /> Tailwind CSS v4
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                <Lock className="h-4.5 w-4.5 text-emerald-400" /> TypeScript Typing
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Development Technologies</h3>
              <div className="flex flex-wrap gap-2.5">
                {["React JS", "Next.JS", "Laravel", "Python", ".NET", "MongoDB", "MySQL", "PostgreSQL"].map((tech) => (
                  <span key={tech} className="px-3.5 py-1.5 bg-secondary text-xs font-semibold rounded-full border border-border text-foreground hover:border-primary/50 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" className="flex justify-center">
            {/* Visual tech layout panel */}
            <div className="w-full max-w-[450px] p-6 bg-card border border-border rounded-3xl shadow-lg relative overflow-hidden font-mono text-xs text-muted-foreground">
              <div className="flex justify-between items-center pb-3 border-b border-border/50 mb-4">
                <span>next.config.ts</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              </div>
              <pre className="overflow-x-auto text-[10px] md:text-xs">
                <code>
{`import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;`}
                </code>
              </pre>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
