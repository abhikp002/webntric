"use client";

import React from "react";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedText from "@/components/animated-text";

export default function PrivacyPolicy() {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="relative pt-32 pb-12 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-4">
          <ScrollReveal direction="down">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">Legal</span>
          </ScrollReveal>
          <AnimatedText
            text="Privacy Policy"
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
            <h2 className="text-lg font-bold text-foreground">1. Information Collection</h2>
            <p>
              We collect information you provide directly to Webntric Software through our project intake forms, email correspondence, or direct phone inquiries. This may include your full name, business email, phone number, company name, and details regarding your software project requirements.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">2. Use of Information</h2>
            <p>
              The information we collect is utilized strictly to evaluate your software requirements, compile custom pricing quotes, communicate project milestones, and provide customer support services. We do not sell or lease user information to third-party ad networks.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">3. Local Storage and Cookies</h2>
            <p>
              Our website uses basic local storage settings to remember your website display theme preference (light/dark mode). We do not load heavy third-party tracking scripts.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">4. Code and Data Security</h2>
            <p>
              We prioritize data security. All corporate website inquiries are processed through secure client-side connections. If your business requires offline data management or local Windows database software, your records are stored entirely on your local site installations with no external server transmission.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">5. Contact Information</h2>
            <p>
              If you have any questions regarding our Privacy Policy or data security practices, please contact our legal counsel at <a href="mailto:privacy@webntric.com" className="text-primary font-semibold hover:underline">privacy@webntric.com</a>.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
