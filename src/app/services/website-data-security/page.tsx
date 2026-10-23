import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ShieldAlert,
  Lock,
} from "lucide-react";
import {
  buildMetadata,
  buildServiceJsonLd,
  buildFaqJsonLd,
} from "@/lib/seo";
import {
  SECURITY_HERO_CONTENT,
  SECURITY_PROBLEMS_SECTION,
  SECURITY_CONTROLS,
  SECURITY_PRINCIPLES,
  OWASP_AWARENESS_NOTE,
  SECURITY_PLAN_CONFIG,
  SECURITY_FAQS,
} from "@/data/security-services";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { ResponsiveFigure } from "@/components/responsive-figure";
import { SecurityControlCard } from "@/components/ai-security/security-control-card";
import { BackupLifecycle } from "@/components/ai-security/backup-lifecycle";
import { DeploymentChecklist } from "@/components/ai-security/deployment-checklist";
import { ResponsibilitySplit } from "@/components/ai-security/responsibility-split";
import { SecurityFAQ } from "@/components/ai-security/security-faq";
import { RelatedServices } from "@/components/ai-security/related-services";
import { TrustCardsStrip } from "@/components/ai-security/trust-cards-strip";

export const metadata: Metadata = buildMetadata({
  title: "Website and Data Security Services | Webntric Software",
  description:
    "Protect your website, software, and business data with HTTPS, secure development, automated backups, tested deployments, monitoring, and ongoing support.",
  path: "/services/website-data-security",
  keywords: [
    "website and data security services",
    "automated website and database backups",
    "secure web application development OWASP",
    "SSL HTTPS configuration and security headers",
    "secure software deployment and release testing",
  ],
});

export default function WebsiteDataSecurityPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Website, Application, and Data Security Services",
    description:
      "Practical security controls, HTTPS configuration, OWASP-informed secure development, role-based access control, automated backups, pre/post-deployment verification, and ongoing maintenance.",
    path: "/services/website-data-security",
    category: "Website, Application & Data Security",
  });

  const faqJsonLd = buildFaqJsonLd(SECURITY_FAQS);

  return (
    <div className="bg-background">
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* 1. SECURITY PAGE HERO */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border bg-surface">
        <div className="container-editorial space-y-8">
          <Breadcrumbs
            items={[
              { name: "Services", path: "/services" },
              {
                name: "Website, Application & Data Security",
                path: "/services/website-data-security",
              },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{SECURITY_HERO_CONTENT.eyebrow}</span>
              </div>

              <h1 className="font-bold tracking-tight text-foreground">
                {SECURITY_HERO_CONTENT.h1}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {SECURITY_HERO_CONTENT.subtitle}
              </p>

              {/* Prominent Recommended Website Messaging */}
              <blockquote className="p-4 sm:p-5 rounded-xl bg-surface-muted border-l-4 border-primary text-xs sm:text-sm text-foreground font-medium leading-relaxed">
                “{SECURITY_HERO_CONTENT.distinctionQuote}”
              </blockquote>

              <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                <Link
                  href={SECURITY_HERO_CONTENT.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
                >
                  {SECURITY_HERO_CONTENT.primaryCta.label}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href={SECURITY_HERO_CONTENT.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg bg-surface-muted text-foreground border border-border text-sm font-semibold hover:bg-background transition-colors"
                >
                  {SECURITY_HERO_CONTENT.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src={SECURITY_HERO_CONTENT.heroImage}
                alt={SECURITY_HERO_CONTENT.heroAlt}
                aspectRatio="16/10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECURITY PROBLEM SECTION */}
      <section className="section-padding border-b border-border">
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              Practical Risk Recognition
            </div>
            <h2 className="font-bold text-foreground">
              {SECURITY_PROBLEMS_SECTION.heading}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {SECURITY_PROBLEMS_SECTION.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECURITY_PROBLEMS_SECTION.concerns.map((item, idx) => (
              <div
                key={item.title}
                className="apple-card p-5 rounded-xl bg-surface border border-border space-y-2"
              >
                <div className="text-xs font-mono font-bold text-primary">
                  Risk 0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECURITY SERVICES & CONTROLS */}
      <section
        id="security-services"
        className="section-padding bg-surface border-b border-border scroll-mt-20"
      >
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              Detailed Security & Reliability Controls
            </div>
            <h2 className="font-bold text-foreground">
              What we implement across transport, code, access, backups, and release pipelines
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We explain each control in plain business language—including what it protects against, what it depends on, and where its limits lie.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SECURITY_CONTROLS.map((control) => (
              <SecurityControlCard key={control.slug} control={control} />
            ))}
          </div>

          {/* Prominent Automated Backup Lifecycle */}
          <BackupLifecycle />
        </div>
      </section>

      {/* 4. PRE-DEPLOYMENT TESTING & POST-DEPLOYMENT VERIFICATION */}
      <section
        id="deployment-checklists"
        className="section-padding border-b border-border scroll-mt-20"
      >
        <div className="container-editorial space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                Release Engineering Discipline
              </div>
              <h2 className="font-bold text-foreground">
                Tested before release. Verified in production after release.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Many website and software failures happen during careless updates. We separate development, staging, and production environments and run explicit verification checklists before and immediately after every deployment.
              </p>
            </div>
            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/security/security-deployment-testing.webp"
                alt="Developer running pre-deployment verification, type checks, and staging tests before release"
                aspectRatio="16/10"
              />
            </div>
          </div>

          <DeploymentChecklist />
        </div>
      </section>

      {/* 5. SECURITY STANDARDS SECTION */}
      <section
        id="security-principles"
        className="section-padding bg-surface border-b border-border scroll-mt-20"
      >
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              Architectural Standards
            </div>
            <h2 className="font-bold text-foreground">
              Security principles we build around.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Rather than relying on marketing buzzwords, our engineers follow ten practical design principles when structuring databases, admin portals, and public websites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SECURITY_PRINCIPLES.map((prin, idx) => (
              <div
                key={prin.title}
                className="apple-card p-5 rounded-xl bg-surface-muted border border-border space-y-2"
              >
                <div className="text-xs font-mono font-bold text-primary">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {prin.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {prin.description}
                </p>
              </div>
            ))}
          </div>

          {/* OWASP Reference Callout */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-muted border border-border space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span>Security Awareness & Code Review Reference</span>
            </div>
            <h3 className="text-lg font-bold text-foreground">
              {OWASP_AWARENESS_NOTE.heading}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {OWASP_AWARENESS_NOTE.description}
            </p>
            <p className="text-xs text-muted-foreground italic pt-1">
              {OWASP_AWARENESS_NOTE.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* 6. SECURITY PACKAGES / SERVICE LEVELS */}
      <section
        id="security-packages"
        className="section-padding border-b border-border scroll-mt-20"
      >
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              Right-Sized Service Levels
            </div>
            <h2 className="font-bold text-foreground">
              Security, backup, and maintenance tiers structured around your system criticality
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              A brochure website and a multi-branch inventory ERP have different recovery and monitoring needs. We scope security and maintenance tiers transparently based on your hosting environment and operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SECURITY_PLAN_CONFIG.map((tier) => (
              <div
                key={tier.id}
                className="apple-card bg-surface border border-border rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                      Service Tier
                    </span>
                    <h3 className="text-xl font-bold text-foreground">
                      {tier.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {tier.tagline}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-surface-muted border border-border text-xs text-muted-foreground">
                    <strong className="text-foreground">Best suited for: </strong>
                    {tier.bestFor}
                  </div>

                  <ul className="space-y-3 pt-2 border-t border-border">
                    {tier.features.map((feat) => (
                      <li key={feat.label} className="space-y-0.5">
                        <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-foreground">
                          <CheckCircle2
                            className="w-4 h-4 text-primary shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{feat.label}</span>
                        </div>
                        <p className="text-xs text-muted-foreground pl-6 leading-relaxed">
                          {feat.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 pt-4 border-t border-border">
                  <div className="flex items-start gap-2 text-[11px] text-muted-foreground leading-relaxed">
                    <ShieldAlert
                      className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{tier.availabilityNote}</span>
                  </div>
                  <Link
                    href={`/contact?service=website-data-security&challenge=tier-${tier.id}`}
                    className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 rounded-lg bg-surface-muted hover:bg-primary hover:text-primary-foreground text-foreground border border-border text-xs font-semibold transition-colors"
                  >
                    Discuss {tier.name} Scope
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SHARED RESPONSIBILITY SPLIT */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="container-editorial">
          <ResponsibilitySplit />
        </div>
      </section>

      {/* 8. SECURITY FAQ */}
      <section className="section-padding border-b border-border">
        <div className="container-editorial">
          <SecurityFAQ />
        </div>
      </section>

      {/* 9. RELATED SERVICES, TRUST STRIP & FINAL CTA */}
      <section className="section-padding bg-surface">
        <div className="container-editorial space-y-12">
          <RelatedServices
            heading="Security & reliability integrated across every Webntric service"
            services={[
              {
                name: "Website Maintenance & Support",
                href: "/services/website-maintenance-and-support",
                description:
                  "Ongoing post-launch care, content updates, speed monitoring, and scheduled maintenance.",
              },
              {
                name: "Web Application Development",
                href: "/services/web-application-development",
                description:
                  "Customer portals and internal web systems engineered with role permissions and input validation.",
              },
              {
                name: "Offline Windows Software",
                href: "/services/offline-windows-software",
                description:
                  "Local desktop databases with encrypted off-site backup sync and operator role restrictions.",
              },
              {
                name: "Generative AI Applications",
                href: "/services/generative-ai-applications",
                description:
                  "AI assistants and document workflows built with privacy controls and human review gates.",
              },
            ]}
            stages={[
              { name: "Startups", href: "/businesses/startups" },
              { name: "Local Businesses", href: "/businesses/local-businesses" },
              { name: "Growing Businesses", href: "/businesses/growing-businesses" },
              {
                name: "Established Organizations",
                href: "/businesses/established-businesses",
              },
            ]}
          />

          <TrustCardsStrip compact />

          <div className="bg-surface-muted border border-border rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="font-bold text-foreground">
                Want an honest review of your website, application, or backup setup?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you want us to audit an existing site’s HTTPS, access controls, and backup reliability—or engineer a new application with security built in from day one—talk directly with our senior engineering team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact?service=website-data-security&challenge=security-review"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
              >
                Review My Website Security
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg bg-surface text-foreground border border-border text-sm font-semibold hover:bg-background transition-colors"
              >
                View Maintenance & Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
