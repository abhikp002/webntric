import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata, buildFaqJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { STARTUP_FAQS } from "@/data/startup-partnership";

// Interactive Components
import { StartupPartnershipHero } from "@/components/startup-partnership/startup-partnership-hero";
import { StartupFitSection } from "@/components/startup-partnership/startup-fit-section";
import { StartupSupportCards } from "@/components/startup-partnership/startup-support-cards";
import { StartupStageSelector } from "@/components/startup-partnership/startup-stage-selector";
import { FounderExpectations } from "@/components/startup-partnership/founder-expectations";
import { StartupSelectionProcess } from "@/components/startup-partnership/startup-selection-process";
import { FuturePartnershipNotice } from "@/components/startup-partnership/future-partnership-notice";
import { StartupTransparencyGrid } from "@/components/startup-partnership/startup-transparency-grid";
import { StartupApplicationForm } from "@/components/startup-partnership/startup-application-form";
import { StartupFaq } from "@/components/startup-partnership/startup-faq";

export const metadata: Metadata = buildMetadata({
  title:
    "Startup Technology Partner Without Initial Development Charges | Webntric",
  description:
    "Webntric may help selected startups build an MVP, website, application, or software without standard initial development charges. Apply to discuss your idea and technology needs.",
  path: "/startup-technology-partner",
  keywords: [
    "startup technology partner",
    "technology partner without initial development charges",
    "startup MVP development",
    "early stage startup technical support",
    "webntric startup collaboration",
    "MVP development for founders",
    "software partnership for startups",
  ],
});

export default function StartupTechnologyPartnerPage() {
  const faqJsonLd = buildFaqJsonLd(
    STARTUP_FAQS.map((f) => ({
      question: f.question,
      answer: f.answer,
    }))
  );

  return (
    <div className="bg-background">
      <JsonLd data={faqJsonLd} />

      {/* Breadcrumb Navigation */}
      <div className="border-b border-border bg-surface-muted/30">
        <div className="container-editorial py-3">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "For Startups", path: "/startup-technology-partner" },
            ]}
          />
        </div>
      </div>

      {/* 1. Hero Section */}
      <StartupPartnershipHero />

      {/* 2. Emotional Connection & Who This Is For vs Not For */}
      <StartupFitSection />

      {/* 3. What Webntric May Help Build & Support Activities */}
      <StartupSupportCards />

      {/* 4. Startup Maturity Readiness Stages */}
      <StartupStageSelector />

      {/* 5. Founder Expectations & Mutual Contribution */}
      <FounderExpectations />

      {/* 6. Selection Process (6 Steps) */}
      <StartupSelectionProcess />

      {/* 7. Technology Offer Details & Future Partnership Advisory */}
      <FuturePartnershipNotice />

      {/* 8. Transparency Comparison (It means vs. It does not mean) */}
      <StartupTransparencyGrid />

      {/* 9. Application Form */}
      <StartupApplicationForm />

      {/* 10. Frequently Asked Questions */}
      <StartupFaq />

      {/* 11. "Not ready for this program?" Consultation Strip */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              Alternative Engagement Options
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Not ready for this collaboration program?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If your venture already has development budget or you prefer a standard fixed-scope commercial engagement with guaranteed delivery schedules, explore our standard services or discuss a commercial project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <Link
              href="/services/website-development"
              className="p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors space-y-1 group"
            >
              <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                Website Development
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">
                Fast, professional corporate portals and lead-generation websites.
              </p>
            </Link>

            <Link
              href="/services/web-application-development"
              className="p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors space-y-1 group"
            >
              <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                Custom Web Applications
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">
                Scalable cloud portals, customer dashboards, and internal tooling.
              </p>
            </Link>

            <Link
              href="/services/mobile-app-development"
              className="p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors space-y-1 group"
            >
              <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                Mobile Applications
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">
                Cross-platform Android & iOS apps with reliable offline-first sync.
              </p>
            </Link>

            <Link
              href="/contact"
              className="p-4 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors space-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="text-sm font-semibold text-primary">
                  Standard Commercial Consultation
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                  Book a direct scope discussion for traditional client-agency delivery.
                </p>
              </div>
              <div className="text-xs font-semibold text-primary inline-flex items-center gap-1 pt-2">
                Contact Webntric <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
