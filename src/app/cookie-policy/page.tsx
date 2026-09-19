import React from "react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedText from "@/components/animated-text";

export const metadata: Metadata = {
  title: "Cookie Policy | Webntric Software",
  description: "Webntric Software's cookie policy outlining how we use cookies and local storage to provide theme states and site navigation settings.",
  alternates: {
    canonical: "https://webntric.com/cookie-policy",
  },
};

export default function CookiePolicy() {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="relative pt-32 pb-12 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-4">
          <ScrollReveal direction="down">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">Legal</span>
          </ScrollReveal>
          <AnimatedText
            text="Cookie Policy"
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
            <h2 className="text-lg font-bold text-foreground">1. What are Cookies and Local Storage?</h2>
            <p>
              Cookies are small text documents stored on your browser profile. Local storage is a standard, modern browser API that allows sites to save configuration settings locally inside your browser cache.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">2. How We Use Browser Storage</h2>
            <p>
              Webntric Software uses local browser storage for one specific setting: to persist your dark/light theme preference. This is a functional utility config and does not gather private personal information.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">3. Analytics and Advertising Cookies</h2>
            <p>
              We do not inject third-party ad retargeting cookies or tracking tags on this website. Any future marketing metrics setups will rely on aggregated, anonymous statistics that conform to international privacy standards.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">4. Managing Your Preferences</h2>
            <p>
              You can clear your browser storage, disable local cookies, or block storage functions inside your browser configuration settings panel at any time. Please note that disabling browser storage may cause the dark/light mode toggle to reset on subsequent visits.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">5. Inquiries</h2>
            <p>
              For further questions regarding our cookie policy, please get in touch with our technical compliance team at <a href="mailto:info@webntric.com" className="text-primary font-semibold hover:underline">info@webntric.com</a>.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
