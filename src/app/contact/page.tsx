import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { buildMetadata, buildContactPageJsonLd } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { ResponsiveFigure } from "@/components/responsive-figure";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = buildMetadata({
  title:
    "Contact Webntric Software | Discuss Your Software, Website or Growth Project",
  description:
    "Speak with Webntric Software about custom business software, offline Windows billing systems, websites, mobile apps, or SEO.",
  path: "/contact",
  keywords: [
    "contact Webntric Software",
    "software company consultation",
    "website and billing software consultation",
  ],
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{
    service?: string;
    stage?: string;
    challenge?: string;
  }>;
}) {
  const resolvedParams = await searchParams;

  return (
    <div className="bg-background">
      <JsonLd data={buildContactPageJsonLd()} />

      {/* HERO */}
      <section className="pt-8 pb-10 sm:pt-12 sm:pb-14 border-b border-border">
        <div className="container-editorial space-y-6">
          <Breadcrumbs items={[{ name: "Contact Us", path: "/contact" }]} />

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Start a Practical Conversation
            </span>
            <h1 className="font-bold text-foreground tracking-tight">
              Tell us about your business challenge or project goal.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              You do not need a formal technical specification before reaching
              out. Share what is slowing your team down or what you want to
              launch, and a senior member of our team will respond within 1
              business day.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + DIRECT CONTACT DETAILS */}
      <section className="section-padding bg-surface-muted/40">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Form */}
          <div className="lg:col-span-7 xl:col-span-8">
            <ContactForm
              initialService={resolvedParams.service}
              initialStage={resolvedParams.stage}
              initialChallenge={resolvedParams.challenge}
            />
          </div>

          {/* Right: Direct Contact Channels, Scoping Photo & What Happens Next */}
          <aside className="lg:col-span-5 xl:col-span-4 space-y-6">
            <ResponsiveFigure
              src="/images/team/webntric-project-scoping-session.webp"
              alt="Consultant taking structured notes while discussing project requirements at a desk"
              width={1000}
              height={680}
              aspectRatio="16/10"
              sizes="(max-width: 1023px) 100vw, 420px"
              caption="Every enquiry is reviewed directly by a senior engineer or strategist—never an automated bot."
              creditCreator="Rodeo Project Management Software"
              creditSourceUrl="https://unsplash.com/photos/person-writing-on-white-paper-near-macbook-pro-on-table-nE2HV5AUXFo"
            />

            <div className="bg-surface border border-border rounded-xl p-6 space-y-5 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Direct Contact Channels
              </span>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone
                    className="w-4 h-4 text-primary shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="block text-xs font-mono uppercase text-muted-foreground">
                      Phone
                    </span>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare
                    className="w-4 h-4 text-primary shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="block text-xs font-mono uppercase text-muted-foreground">
                      WhatsApp Business
                    </span>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                        "Hello Webntric Software, I would like to discuss a project requirement."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:underline"
                    >
                      Message on WhatsApp →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail
                    className="w-4 h-4 text-primary shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="block text-xs font-mono uppercase text-muted-foreground">
                      Email
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-semibold text-foreground hover:text-primary transition-colors break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-border">
                  <MapPin
                    className="w-4 h-4 text-primary shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="block text-xs font-mono uppercase text-muted-foreground">
                      Office Location
                    </span>
                    <p className="text-foreground font-medium leading-relaxed">
                      {SITE_CONFIG.name}
                      <br />
                      {SITE_CONFIG.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-border">
                  <Clock
                    className="w-4 h-4 text-primary shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="block text-xs font-mono uppercase text-muted-foreground">
                      Response Expectation
                    </span>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {SITE_CONFIG.responseExpectation} (
                      {SITE_CONFIG.businessHours})
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6 space-y-3">
              <h2 className="text-base font-bold text-foreground">
                What happens after you submit?
              </h2>
              <ol className="space-y-2.5 text-xs sm:text-sm text-muted-foreground list-decimal list-inside">
                <li>
                  <strong className="text-foreground">Senior Review:</strong> An
                  engineer or strategist reads your note (no automated sales
                  drip).
                </li>
                <li>
                  <strong className="text-foreground">
                    Discovery Call / Meet:
                  </strong>{" "}
                  We schedule a 20-minute phone, video, or in-person discussion
                  to clarify your workflow.
                </li>
                <li>
                  <strong className="text-foreground">Written Scope:</strong>{" "}
                  You receive a clear written recommendation with options,
                  milestones, and transparent pricing.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
