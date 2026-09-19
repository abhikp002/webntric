"use client";

import React from "react";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedText from "@/components/animated-text";

export default function TermsAndConditions() {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="relative pt-32 pb-12 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-4">
          <ScrollReveal direction="down">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">Legal</span>
          </ScrollReveal>
          <AnimatedText
            text="Terms & Conditions"
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-xs text-muted-foreground mt-2">
              Last updated: August 9, 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 max-w-3xl mx-auto">
        <ScrollReveal className="space-y-8 text-sm md:text-base text-muted-foreground leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">1. Terms of Agreement</h2>
            <p>
              By accessing this website, you agree to comply with these Terms & Conditions. If you do not agree, please exit the site. These terms govern your use of the services, media assets, and intake forms hosted on this domain.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">2. Services and Statements</h2>
            <p>
              Webntric Software designs custom software, websites, mobile applications, offline business systems, and digital campaigns. Custom software project delivery, specifications, pricing models, and maintenance terms are governed by individual Service Level Agreements SLA signed with clients.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">3. Intellectual Property</h2>
            <p>
              The code base, templates, graphics, animations, branding, and text contents of this website are the property of Webntric Software and are protected by international copyright laws. Any unauthorized replication of design patterns or code structures is strictly prohibited.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">4. Disclaimers</h2>
            <p>
              This website is provided &ldquo;as is&rdquo;. While we attempt to ensure page uptime and link routing are fully operational, we make no guarantees that website operations will be completely error-free or uninterrupted.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">5. Governing Law</h2>
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with local regulations, without regard to conflicts of law provisions.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
