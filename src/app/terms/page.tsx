import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | Webntric Software",
  description:
    "Terms of Service governing access to the Webntric Software website and general engagement principles for software development and digital growth projects.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="bg-background py-10 sm:py-16">
      <div className="container-editorial max-w-4xl space-y-8">
        <Breadcrumbs items={[{ name: "Terms of Service", path: "/terms" }]} />

        <div className="p-4 rounded-lg bg-surface-muted border border-border text-xs text-muted-foreground">
          <strong className="text-foreground">
            Pre-Publication Legal Review Notice:{" "}
          </strong>
          These Website Terms of Service should be reviewed by Webntric
          Software&apos;s legal counsel prior to formal publication. Individual
          client projects are governed by signed Master Service Agreements (MSA)
          and Statements of Work (SOW).
        </div>

        <header className="space-y-2 pb-6 border-b border-border">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: October 2026 • {SITE_CONFIG.name}
          </p>
        </header>

        <div className="space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              1. Acceptance of Website Terms
            </h2>
            <p>
              By accessing and using {SITE_CONFIG.url}, you agree to comply with
              these Terms of Service. If you do not agree with any part of these
              terms, please discontinue use of the website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              2. Project Engagements & Written Scopes
            </h2>
            <p>
              Information presented on this website—including service
              descriptions, representative system blueprints, and educational
              guides—is provided to help prospective clients evaluate our
              capabilities. Formal software development, website engineering,
              maintenance, or digital marketing engagements begin only upon
              execution of a written Statement of Work (SOW) or service
              agreement signed by both parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              3. Intellectual Property & Ownership
            </h2>
            <p>
              All original content, layout architecture, and guides on{" "}
              {SITE_CONFIG.url} are the property of {SITE_CONFIG.name}. For
              contracted client projects, ownership of custom deliverables,
              domain names, and client business databases is governed by the
              signed client agreement upon completion of agreed milestone
              payments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              4. Third-Party Services & Infrastructure
            </h2>
            <p>
              Certain client solutions integrate with third-party platforms
              (such as cloud hosting providers, domain registrars, WhatsApp
              Business APIs, or advertising networks like Google Ads and Meta).
              Direct third-party usage fees and platform policies remain subject
              to the respective provider&apos;s terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms are governed by applicable commercial laws in the
              jurisdiction of our registered office. Questions regarding these terms may be
              directed to{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-primary font-medium hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
