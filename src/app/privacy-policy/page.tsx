import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Webntric Software",
  description:
    "Read how Webntric Software collects, uses, and protects your business and contact information when you enquire about our software and digital services.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background py-10 sm:py-16">
      <div className="container-editorial max-w-4xl space-y-8">
        <Breadcrumbs
          items={[{ name: "Privacy Policy", path: "/privacy-policy" }]}
        />

        <div className="p-4 rounded-lg bg-surface-muted border border-border text-xs text-muted-foreground">
          <strong className="text-foreground">
            Pre-Publication Legal Review Notice:{" "}
          </strong>
          This policy outlines Webntric Software&apos;s data handling practices
          and should be reviewed by qualified legal counsel prior to formal
          regulatory filings.
        </div>

        <header className="space-y-2 pb-6 border-b border-border">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: October 2026 • Effective for {SITE_CONFIG.url}
          </p>
        </header>

        <div className="space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              1. Who We Are & Scope of This Policy
            </h2>
            <p>
              {SITE_CONFIG.name} (&ldquo;Webntric,&rdquo; &ldquo;we,&rdquo;
              &ldquo;our,&rdquo; or &ldquo;us&rdquo;), located at{" "}
              {SITE_CONFIG.address.full}, respects the privacy of visitors and
              prospective clients using {SITE_CONFIG.url}. This Privacy Policy
              explains what information we collect when you browse our website
              or submit a project enquiry, how we use it, and how we protect it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">
                  Enquiry & Contact Details:
                </strong>{" "}
                When you submit our contact form, email us, or message us via
                WhatsApp, we collect your name, business/organization name,
                email address, phone number, business stage, and project
                description.
              </li>
              <li>
                <strong className="text-foreground">
                  Usage & Technical Telemetry:
                </strong>{" "}
                We use Google Tag Manager ({SITE_CONFIG.gtmId}) to measure
                aggregate page views, navigation interactions, and form
                completion events so we can improve site clarity and speed.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              3. How We Use Your Information
            </h2>
            <p>We use the information you provide strictly to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Review your project requirement and respond to your enquiry
              </li>
              <li>
                Prepare written project scopes, technical recommendations, or
                service agreements requested by you
              </li>
              <li>
                Maintain the security, performance, and reliability of our
                website
              </li>
            </ul>
            <p>
              <strong className="text-foreground">
                We do not sell, rent, or trade your personal or business contact
                details to third-party lead brokers or marketing lists.
              </strong>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              4. Client Operational Data & Non-Disclosure
            </h2>
            <p>
              Where prospective or active clients share operational spreadsheets,
              sample invoices, or database records for software scoping or
              migration, those records are treated as strictly confidential and
              are governed by our project Non-Disclosure Agreement (NDA) and
              service contract.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              5. Data Retention & Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of any
              personal contact details you have submitted through our website by
              contacting us at{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-primary font-medium hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              6. Contact Information
            </h2>
            <p>
              For any privacy-related questions, please contact:{" "}
              <strong className="text-foreground">{SITE_CONFIG.name}</strong>,{" "}
              {SITE_CONFIG.address.full} • Email:{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-primary font-medium hover:underline"
              >
                {SITE_CONFIG.email}
              </a>{" "}
              • Phone: {SITE_CONFIG.phoneDisplay}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
