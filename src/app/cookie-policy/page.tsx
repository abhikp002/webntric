import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy | Webntric Software",
  description:
    "Learn how Webntric Software uses essential preferences and analytics cookies on webntric.com and how you can manage your browser preferences.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <div className="bg-background py-10 sm:py-16">
      <div className="container-editorial max-w-4xl space-y-8">
        <Breadcrumbs
          items={[{ name: "Cookie Policy", path: "/cookie-policy" }]}
        />

        <div className="p-4 rounded-lg bg-surface-muted border border-border text-xs text-muted-foreground">
          <strong className="text-foreground">
            Pre-Publication Legal Review Notice:{" "}
          </strong>
          This Cookie Policy describes technical storage and analytics usage on{" "}
          {SITE_CONFIG.url} and should be reviewed by legal counsel if
          additional third-party marketing pixels are added in the future.
        </div>

        <header className="space-y-2 pb-6 border-b border-border">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Cookie Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: October 2026 • {SITE_CONFIG.name}
          </p>
        </header>

        <div className="space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              1. How We Use Cookies & Local Storage
            </h2>
            <p>
              {SITE_CONFIG.url} uses a minimal set of browser storage mechanisms
              and analytics cookies to ensure reliable website operation and to
              understand which pages are most helpful to visitors:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">
                  Visual Theme Preference (Local Storage):
                </strong>{" "}
                Stores your preferred light or dark display mode (`theme`) so
                pages remain comfortable to read across visits.
              </li>
              <li>
                <strong className="text-foreground">
                  Performance & Analytics (Google Tag Manager):
                </strong>{" "}
                Configured via container `{SITE_CONFIG.gtmId}` to measure
                aggregate page visits, navigation usage, and enquiry conversion
                steps.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">
              2. Managing or Disabling Cookies
            </h2>
            <p>
              You can clear or block cookies at any time through your web
              browser settings. Blocking analytics cookies will not prevent you
              from reading any page on {SITE_CONFIG.url} or submitting our
              contact form.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
