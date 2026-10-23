import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer | Webntric Software",
  description:
    "Important information regarding representative system blueprints, software scoping, and search/marketing performance variables on webntric.com.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <div className="bg-background py-10 sm:py-16">
      <div className="container-editorial max-w-4xl space-y-8">
        <Breadcrumbs items={[{ name: "Disclaimer", path: "/disclaimer" }]} />

        <div className="p-4 rounded-lg bg-surface-muted border border-border text-xs text-muted-foreground">
          <strong className="text-foreground">
            Pre-Publication Legal Review Notice:{" "}
          </strong>
          This disclaimer outlines commercial and technical boundaries for
          website content and should be reviewed by legal counsel prior to
          formal publication.
        </div>

        <header className="space-y-2 pb-6 border-b border-border">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Website & Commercial Disclaimer
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: October 2026 • {SITE_CONFIG.name}
          </p>
        </header>

        <div className="space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              1. Representative System Blueprints
            </h2>
            <p>
              To protect client confidentiality and proprietary operational data,
              the system diagrams and workflow examples presented on our Work and
              Services pages illustrate representative architectural patterns
              engineered by {SITE_CONFIG.name}. Specific screens, database
              fields, and hardware integrations for your business are defined in
              your project&apos;s written Statement of Work.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              2. Search Engine Optimization & Paid Media Variables
            </h2>
            <p>
              While we apply rigorous technical SEO, local search optimization,
              and paid campaign management standards, search engine algorithms,
              competitor bidding, and market demand are controlled by third
              parties. Accordingly, {SITE_CONFIG.name} does not make artificial
              guarantees of specific search engine ranking positions or fixed
              return-on-ad-spend (ROAS) figures.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              3. Accounting & Statutory Compliance Verification
            </h2>
            <p>
              Custom billing, invoicing, and GST report exports built by{" "}
              {SITE_CONFIG.name} are configured according to the tax rates and
              rules confirmed by the client during onboarding. Clients should
              verify final statutory filings with their Chartered Accountant or
              tax advisor.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
