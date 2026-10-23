"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight, Linkedin, Facebook } from "lucide-react";
import Logo from "./logo";
import {
  SITE_CONFIG,
  SERVICE_NAV_GROUPS,
  INDUSTRY_NAV_ITEMS,
  BUSINESS_STAGE_NAV_ITEMS,
} from "@/data/site-config";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  const allServices = SERVICE_NAV_GROUPS.flatMap((g) => g.items);

  return (
    <footer className="w-full bg-card border-t border-border mt-auto">
      <div className="container-editorial py-12 sm:py-16 md:py-20">
        {/* Top Row: Brand & Contact Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-border">
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block" aria-label="Webntric Software — Home">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
              We begin by understanding how your business operates, explain technical choices in plain language, and stay available after launch for maintenance, security, and growth.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() =>
                  trackEvent("cta_clicked", {
                    location: "footer_top",
                    label: "Discuss your business",
                  })
                }
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Discuss your business requirement
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="pt-1 flex items-center gap-2.5">
              <span className="text-xs font-mono font-semibold uppercase text-muted-foreground">
                Follow Us:
              </span>
              <a
                href="https://www.linkedin.com/company/webntric"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("cta_clicked", { label: "linkedin_profile", location: "footer" })
                }
                aria-label="Webntric on LinkedIn"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary border border-border text-xs font-medium text-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5 text-[#0077b5]" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/webntric"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("cta_clicked", { label: "facebook_profile", location: "footer" })
                }
                aria-label="Webntric on Facebook"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary border border-border text-xs font-medium text-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Facebook className="h-3.5 w-3.5 text-[#1877f2]" aria-hidden="true" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-secondary/50 border border-border rounded-xl p-6">
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
                Direct Contact
              </h2>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-start gap-2.5">
                  <Phone
                    className="h-4 w-4 text-primary shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <a
                      href={SITE_CONFIG.phoneHref}
                      onClick={() =>
                        trackEvent("phone_clicked", { location: "footer" })
                      }
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <p className="text-xs text-muted-foreground">
                      Phone & WhatsApp enquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail
                    className="h-4 w-4 text-primary shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      onClick={() =>
                        trackEvent("email_clicked", { location: "footer" })
                      }
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <p className="text-xs text-muted-foreground">
                      Project scopes, documents & support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
                Location & Hours
              </h2>
              <div className="space-y-2.5 text-sm text-muted-foreground">
                <div className="flex items-start gap-2.5">
                  <MapPin
                    className="h-4 w-4 text-primary shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span>{SITE_CONFIG.address.formatted}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock
                    className="h-4 w-4 text-primary shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span>{SITE_CONFIG.businessHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Row: Comprehensive Link Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-14">
          {/* Services (5 cols) */}
          <div className="lg:col-span-5">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground mb-4">
              Services
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {allServices.map((svc) => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries (3 cols) */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground mb-4">
              Industries
            </h2>
            <ul className="space-y-2.5 text-sm">
              {INDUSTRY_NAV_ITEMS.map((ind) => (
                <li key={ind.href}>
                  <Link
                    href={ind.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {ind.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Stages (2 cols) */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground mb-4">
              Business Stages
            </h2>
            <ul className="space-y-2.5 text-sm">
              {BUSINESS_STAGE_NAV_ITEMS.map((stage) => (
                <li key={stage.href}>
                  <Link
                    href={stage.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {stage.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Governance (2 cols) */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground mb-4">
              Company
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Webntric
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Work & Blueprints
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Support & Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Insights & Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Locations We Serve
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li className="pt-2 border-t border-border">
                <a
                  href="https://vidyasetu.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-xs text-primary hover:underline"
                >
                  <span>VidyaSetu (SaaS ERP)</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li className="pt-2 border-t border-border flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/webntric"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5 text-[#0077b5]" aria-hidden="true" />
                  LinkedIn
                </a>
                <span className="text-border">•</span>
                <a
                  href="https://www.facebook.com/webntric"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="h-3.5 w-3.5 text-[#1877f2]" aria-hidden="true" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Locations SEO Directory Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground shrink-0">
            Locations We Serve:
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <Link
              href="/locations/gorakhpur"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Gorakhpur
            </Link>
            <Link
              href="/locations/noida"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Noida
            </Link>
            <Link
              href="/locations/delhi"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Delhi
            </Link>
            <Link
              href="/locations/lucknow"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Lucknow
            </Link>
            <Link
              href="/locations/gurugram"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Gurugram
            </Link>
            <Link
              href="/locations"
              className="font-semibold text-primary hover:underline"
            >
              All Locations →
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Sitemap */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-primary transition-colors"
            >
              Disclaimer
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-primary transition-colors font-mono"
            >
              Sitemap
            </Link>
            <span className="text-border hidden sm:inline">|</span>
            <a
              href="https://www.linkedin.com/company/webntric"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Webntric on LinkedIn"
              className="hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <Linkedin className="h-3.5 w-3.5 text-[#0077b5]" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.facebook.com/webntric"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Webntric on Facebook"
              className="hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <Facebook className="h-3.5 w-3.5 text-[#1877f2]" aria-hidden="true" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
