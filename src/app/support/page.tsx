import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  DatabaseBackup,
  ShieldAlert,
  Wrench,
  Clock,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ResponsiveFigure } from "@/components/responsive-figure";

export const metadata: Metadata = buildMetadata({
  title:
    "Support, Maintenance & Post-Launch Continuity | Webntric Software",
  description:
    "Explore Webntric Software's post-launch support, database backup architecture, security patching, staff training, and ongoing maintenance plans.",
  path: "/support",
  keywords: [
    "software maintenance and website support",
    "annual maintenance contract software",
    "post launch software support Webntric",
  ],
});

const SUPPORT_PILLARS = [
  {
    title: "Post-Launch Stabilization Window",
    description:
      "Every new website, mobile app, or custom software build includes a dedicated post-launch stabilization window where we resolve any edge-case bugs, printer calibration issues, or staff questions at no extra cost.",
  },
  {
    title: "Automated Local & Cloud Backups",
    description:
      "For cloud web apps, we configure automated daily database snapshots. For offline Windows desktop systems, we configure automatic local secondary-drive backups plus one-click external USB or encrypted cloud backup.",
  },
  {
    title: "Proactive Security & Dependency Patching",
    description:
      "Web frameworks, SSL certificates, payment APIs, and server operating systems require regular updates. We test and apply security patches on staging before rolling them to production.",
  },
  {
    title: "Staff Onboarding & Handover Guides",
    description:
      "When your business hires a new billing operator, receptionist, or manager, we provide clear walkthrough guides and refresher sessions so your operations never stall.",
  },
];

const RESPONSE_TIERS = [
  {
    priority: "Priority 1 — Critical Operational Halt",
    examples:
      "Production website unreachable, POS counter billing blocked, or database connection failure.",
    targetResponse: "Immediate investigation during business hours",
    resolutionPath:
      "Direct senior engineer diagnosis, rollback or hotfix deployment, and root-cause verification.",
  },
  {
    priority: "Priority 2 — Partial Feature or Workflow Issue",
    examples:
      "Specific report export error, thermal receipt alignment issue, or form notification delay.",
    targetResponse: "Within 4–8 business hours",
    resolutionPath:
      "Reproduced on staging, patched, and deployed without disrupting live counter/web operations.",
  },
  {
    priority: "Priority 3 — Content Updates & Minor Enhancements",
    examples:
      "Adding a new service page, updating pricing tables, creating a new staff login, or minor UI tweaks.",
    targetResponse: "Within 1–2 business days",
    resolutionPath:
      "Scheduled in your regular maintenance allocation with preview confirmation.",
  },
];

export default function SupportPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border">
        <div className="container-editorial space-y-6">
          <Breadcrumbs
            items={[{ name: "Support & Maintenance", path: "/support" }]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Long-Term Partnership & Continuity
              </span>
              <h1 className="font-bold text-foreground tracking-tight">
                Software and websites are living operational assets. We stay
                accountable after launch.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                The biggest fear business owners have when hiring a technology
                company is being abandoned after the final invoice is paid. At
                Webntric Software, launch day is the start of our operational
                support relationship.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/contact?service=website-maintenance-and-support"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
                >
                  Request Support or AMC Plan
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg bg-surface text-foreground border border-border text-sm font-semibold hover:bg-surface-muted transition-colors"
                >
                  Call Support: {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/home/webntric-technical-support-partner.webp"
                alt="Engineer providing responsive remote technical support and system monitoring at a workstation"
                width={1000}
                height={680}
                aspectRatio="16/10"
                priority
                sizes="(max-width: 1023px) 100vw, 480px"
                caption="Proactive backups, SSL/server health checks, and direct senior engineering support."
                creditCreator="Austin Distel"
                creditSourceUrl="https://unsplash.com/photos/man-wearing-white-top-using-macbook-21GWwco-JBQ"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 SUPPORT PILLARS */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
              Core Continuity Standards
            </span>
            <h2 className="font-bold text-foreground">
              How we protect your daily operations after go-live.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUPPORT_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bg-surface border border-border rounded-xl p-6 space-y-2.5 h-full"
              >
                <span className="text-xs font-mono font-bold text-primary">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSE TIERS */}
      <section className="section-padding border-b border-border bg-background">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              Support Prioritization
            </span>
            <h2 className="font-bold text-foreground">
              How we prioritize and resolve support requests.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {RESPONSE_TIERS.map((tier) => (
              <div
                key={tier.priority}
                className="bg-surface border border-border rounded-xl p-6 space-y-4 flex flex-col justify-between h-full"
              >
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-foreground">
                    {tier.priority}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Examples: </strong>
                    {tier.examples}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Resolution: </strong>
                    {tier.resolutionPath}
                  </p>
                </div>
                <div className="pt-3 border-t border-border">
                  <span className="block text-[11px] font-mono uppercase text-primary font-semibold">
                    Target Response Window
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {tier.targetResponse}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXISTING SYSTEM AUDIT & RESCUE */}
      <section className="section-padding bg-surface-muted/40">
        <div className="container-editorial space-y-8">
          <div className="bg-surface border border-border rounded-xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-semibold">
                <DatabaseBackup className="w-4 h-4" aria-hidden="true" />
                <span>System Takeover & Stabilization</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Have an existing website or software built by a previous vendor?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Before recommending a rebuild, we perform a technical codebase
                and database audit. If the existing architecture is clean and
                maintainable, we can onboard it into a Webntric Maintenance &
                Support plan, set up proper backups, and fix outstanding bugs.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2
                    className="w-4 h-4 text-primary"
                    aria-hidden="true"
                  />
                  Codebase & Security Audit
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2
                    className="w-4 h-4 text-primary"
                    aria-hidden="true"
                  />
                  Automated Backup Setup
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldAlert
                    className="w-4 h-4 text-primary"
                    aria-hidden="true"
                  />
                  Honest Rebuild-vs-Repair Advice
                </span>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/contact?service=website-maintenance-and-support"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
              >
                Request an Existing System Audit
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services/website-maintenance-and-support"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg bg-surface-muted text-foreground border border-border text-sm font-semibold hover:bg-background transition-colors"
              >
                View Maintenance Service Scope
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
