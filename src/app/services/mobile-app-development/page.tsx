import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Smartphone, Compass, ShieldAlert, Cpu, Bell, CheckCircle2, Apple, AppWindow } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedText from "@/components/animated-text";
import { PhoneMockup } from "@/components/mockups";

export const metadata: Metadata = {
  title: "Mobile App Development Services | iOS & Android | Webntric Software",
  description: "Webntric Software designs and builds premium native iOS, Android, and cross-platform mobile applications using Flutter, React Native, Firebase, and Swift.",
  alternates: {
    canonical: "https://webntric.com/services/mobile-app-development",
  },
};

const mobileSpecs = [
  { title: "Native iOS Engineering", desc: "Swift-based applications optimized for iOS devices, incorporating Apple Watch extensions and dynamic notification widgets.", icon: Apple },
  { title: "Native Android Engineering", desc: "Kotlin-based systems built for stability, targeting diverse device screen widths, and optimizing battery management profiles.", icon: Smartphone },
  { title: "Cross-Platform Frameworks", desc: "Flutter and React Native configurations to deploy high-fidelity mobile apps quickly from a single core codebase.", icon: AppWindow },
  { title: "Secure Local Cache", desc: "Offline-first databases (SQLite, Realm) that cache database changes locally and sync automatically when online.", icon: Cpu },
  { title: "Push Notification Hubs", desc: "Highly structured remote notifications (FCM, OneSignal) with custom action payloads to boost user engagement.", icon: Bell },
  { title: "Payment Systems", desc: "Safe integrations with Apple Pay, Google Pay, Stripe, and modern in-app subscription managers.", icon: ShieldAlert },
];

export default function MobileAppDevelopment() {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile Application Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Webntric Software",
      "url": "https://webntric.com"
    },
    "description": "Custom native and cross-platform iOS and Android mobile app engineering services using Flutter, React Native, and Firebase.",
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
            <span className="text-xs uppercase tracking-wider text-primary font-bold">Services &mdash; Mobile Apps</span>
          </ScrollReveal>
          <AnimatedText
            text="Mobile Experiences Built for the Real World."
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We design and construct high-performance iOS and Android applications. Native quality, smooth micro-gestures, and offline caching systems.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all shadow-lg shadow-primary/20"
            >
              Build Your App
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
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Our Mobile Capabilities</h2>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              We deliver complete mobile systems, starting from UX concepts to App Store and Google Play deployment.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mobileSpecs.map((spec) => (
              <div key={spec.title} className="flex gap-4">
                <div className="p-2.5 rounded-xl bg-secondary text-primary h-fit">
                  <spec.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{spec.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{spec.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border/50">
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Development Technologies</h3>
            <div className="flex flex-wrap gap-2.5">
              {["React Native", "Flutter", "Firebase", "Swift (iOS)", "Kotlin (Android)", "SQLite", "GraphQL"].map((tech) => (
                <span key={tech} className="px-3.5 py-1.5 bg-secondary text-xs font-semibold rounded-full border border-border text-foreground hover:border-primary/50 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mockup Display */}
        <div className="lg:col-span-5 flex justify-center">
          <ScrollReveal direction="left">
            <PhoneMockup />
          </ScrollReveal>
        </div>
      </section>

      {/* SEO Core Content Section */}
      <section className="py-20 bg-card border-t border-border px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
              Cross-Platform Mobile Engineering Built for Conversions
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              We design and construct high-performance iOS and Android applications. Native quality, smooth micro-gestures, and offline caching systems. Using frameworks like React Native and Flutter, we deploy cross-platform apps with shared logic files, saving your business time and development costs without compromising on visual smoothness.
            </p>
          </ScrollReveal>

          <ScrollReveal className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Offline Sync & Local Security Protocols
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Our mobile apps are engineered with an offline-first focus. We build background sync tasks and local SQLite databases so users can interact with dashboard data and invoicing options even when connections drop. When the device reconnects, changes sync smoothly to Firebase or custom REST databases.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
