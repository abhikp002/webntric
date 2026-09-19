import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Monitor, Database, ShieldAlert, Cpu, Sparkles, Printer, FileSpreadsheet, Lock } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedText from "@/components/animated-text";
import { DesktopMockup } from "@/components/mockups";

export const metadata: Metadata = {
  title: "Offline Windows Software Development | VB.NET & C# | Webntric Software",
  description: "Webntric Software designs and builds secure, high-performance offline desktop applications for Windows. Custom databases, invoicing registers, and local POS systems using Visual Basic .NET and MS SQL.",
  alternates: {
    canonical: "https://webntric.com/services/offline-windows-software",
  },
};

const desktopFeatures = [
  { title: "Invoicing & Billing Registry", desc: "Super-fast point of sale POS software integrated with physical thermal printers, tax tables, and barcode scanners.", icon: Printer },
  { title: "Local Database Storage", desc: "No internet lag. Written using SQLite or local PostgreSQL, storing tables, logs, and database structures safely on site.", icon: Database },
  { title: "Inventory Auditing Systems", desc: "Track stock quantities, low-stock notifications, supplier registers, and asset audits in real-time.", icon: Cpu },
  { title: "Custom Business Reporting", desc: "Compile local database data to export dynamic PDF reports, Excel spreadsheets, and visual charts.", icon: FileSpreadsheet },
  { title: "Role-Based Local Security", desc: "Encrypted sqlite registers, dynamic local security codes, and customized staff login hierarchies.", icon: Lock },
  { title: "Institute/School Management", desc: "Student registries, fee accounting, attendance logs, and staff files built into a single offline console.", icon: Monitor },
];

export default function OfflineWindowsSoftware() {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Offline Windows Software Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Webntric Software",
      "url": "https://webntric.com"
    },
    "description": "Secure, high-performance offline desktop applications for Windows using Visual Basic .NET, C#, and MS SQL Server.",
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
            <span className="text-xs uppercase tracking-wider text-primary font-bold">Services &mdash; Offline Desktop Software</span>
          </ScrollReveal>
          <AnimatedText
            text="Powerful Windows Software That Works Offline."
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Reliable, secure desktop applications designed to function perfectly without an active internet connection. High-performance databases, billing engines, and hardware configurations.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="pt-2">
            <div className="flex justify-center gap-4 text-xs font-semibold uppercase tracking-widest text-indigo-400">
              <span className="flex items-center gap-1"><Sparkles className="h-4 w-4" /> Reliable</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1"><Lock className="h-4 w-4" /> Secure</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1"><Database className="h-4 w-4" /> Offline-Ready</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all shadow-lg shadow-primary/20"
            >
              Start Your Desktop Project
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
            <DesktopMockup />
          </ScrollReveal>
        </div>

        {/* Specifications */}
        <div className="lg:col-span-7 space-y-10">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Our Offline Desktop Solutions</h2>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              We write compiled .NET, C#, and Visual Basic .NET desktop platforms optimized to run fast on local Windows hardware installations.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {desktopFeatures.map((feat) => (
              <div key={feat.title} className="flex gap-4">
                <div className="p-2.5 rounded-xl bg-secondary text-primary h-fit">
                  <feat.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{feat.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border/50">
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Development Technologies</h3>
            <div className="flex flex-wrap gap-2.5">
              {["Visual Basic .NET", "MS SQL Server", "C# .NET", "SQLite", "Local PostgreSQL", ".NET Framework v4.8+", "WPF / WinForms"].map((tech) => (
                <span key={tech} className="px-3.5 py-1.5 bg-secondary text-xs font-semibold rounded-full border border-border text-foreground hover:border-primary/50 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Core Content Section */}
      <section className="py-20 bg-card border-t border-border px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
              Enterprise Windows Desktop Application Engineering
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              For businesses that require absolute security, zero internet latency, and direct hardware control, we build native Windows desktop applications. Our offline systems are designed to operate perfectly without active network connections, protecting operations from internet outages or bandwidth bottlenecks.
            </p>
          </ScrollReveal>

          <ScrollReveal className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Local Databases & Hardware Interface Integrations
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              We integrate desktop software with physical hardware including barcode scanners, thermal receipt printers, and cash registers. Using Visual Basic .NET and C# alongside local MS SQL Server or SQLite databases, we ensure sub-millisecond database queries. All files are encrypted locally, providing complete data ownership and security.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
