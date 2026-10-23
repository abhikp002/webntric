import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Building2,
  Sparkles,
} from "lucide-react";
import { LOCATIONS_DATA, getLocationBySlug } from "@/data/locations";
import { buildMetadata, buildFaqJsonLd } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ResponsiveFigure } from "@/components/responsive-figure";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS_DATA.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {};
  }

  return buildMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/locations/${location.slug}`,
    keywords: [location.primaryKeyword, ...location.secondaryKeywords],
  });
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const locationServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: location.h1,
    description: location.metaDescription,
    url: `${SITE_CONFIG.url}/locations/${location.slug}`,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
    },
    areaServed: {
      "@type": "City",
      name: location.city,
    },
  };

  return (
    <div className="bg-background">
      <JsonLd
        data={[
          locationServiceSchema,
          buildFaqJsonLd(
            location.faqs.map((f, idx) => ({
              id: `${location.slug}-faq-${idx}`,
              category: "General & Scoping",
              question: f.question,
              answer: f.answer,
            }))
          ),
        ]}
      />

      {/* 1. HERO */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border">
        <div className="container-editorial space-y-6">
          <Breadcrumbs
            items={[
              { name: "Locations", path: "/locations" },
              { name: location.city, path: `/locations/${location.slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider font-semibold">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                {location.city} • {location.regionLabel}
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.12]">
                {location.h1}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {location.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/contact?location=${location.slug}`}
                  className="apple-pill-primary px-6 py-3.5 min-h-[48px] text-sm sm:text-base"
                >
                  Discuss Your {location.city} Project
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href="#city-services"
                  className="apple-pill-secondary px-5 py-3.5 min-h-[48px] bg-surface text-foreground border border-border hover:border-primary/40 text-sm sm:text-base"
                >
                  Explore Services in {location.city}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src={location.heroImage}
                alt={location.heroImageAlt}
                width={1200}
                height={800}
                aspectRatio="16/10"
                priority
                sizes="(max-width: 1023px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOCAL COMMERCIAL CONTEXT & HUBS */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Operational Reality in {location.city}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {location.localBusinessContext.heading}
            </h2>
            {location.localBusinessContext.paragraphs.map((para) => (
              <p
                key={para}
                className="text-sm sm:text-base text-muted-foreground leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>

          <aside className="lg:col-span-5 bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              <Building2 className="w-4 h-4" aria-hidden="true" />
              <span>Commercial & Industrial Corridors We Support</span>
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Key business districts across {location.city}
            </h3>
            <ul className="space-y-2.5 pt-1">
              {location.localBusinessContext.keyCommercialHubs.map((hub) => (
                <li
                  key={hub}
                  className="flex items-start gap-2.5 text-sm text-foreground"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{hub}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* 3. CORE SERVICES FOR THIS CITY */}
      <section
        id="city-services"
        className="section-padding border-b border-border bg-background scroll-mt-20"
      >
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Capabilities in {location.city}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Software, offline POS, websites, and growth services for{" "}
              {location.city} businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {location.coreServicesForCity.map((svc) => (
              <article
                key={svc.title}
                className="apple-card p-6 flex flex-col justify-between gap-5 h-full"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-foreground">
                    <Link
                      href={svc.href}
                      className="hover:text-primary transition-colors"
                    >
                      {svc.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {svc.description}
                  </p>
                  <div className="p-3.5 rounded-xl bg-surface-muted/70 border border-border text-xs text-foreground">
                    <strong className="font-semibold text-primary block mb-1">
                      {location.city} Use Case:
                    </strong>
                    {svc.localUseCase}
                  </div>
                </div>

                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline pt-3 border-t border-border"
                >
                  Explore {svc.title}
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES SERVED + WHY CHOOSE WEBNTRIC */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-14">
          <div className="space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Sector Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Key industries we serve in {location.city}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {location.industriesServedInCity.map((ind) => (
                <Link
                  key={ind.href}
                  href={ind.href}
                  className="apple-card p-6 flex flex-col justify-between gap-3 group"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ind.localContext}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                    View {ind.name} architecture
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-6 sm:p-10 space-y-6">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                Why Partner With Webntric
              </span>
              <h2 className="text-2xl font-bold text-foreground">
                Why businesses in {location.city} choose Webntric Software
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {location.whyChooseWebntricInCity.map((reason) => (
                <div
                  key={reason.title}
                  className="p-5 rounded-xl bg-surface-muted/60 border border-border space-y-2"
                >
                  <h3 className="text-base font-bold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS & OTHER LOCATIONS */}
      <section className="section-padding bg-background">
        <div className="container-editorial space-y-14">
          <div className="space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Common Questions — {location.city}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Frequently asked questions about working with us in{" "}
                {location.city}
              </h2>
            </div>

            <FaqAccordion
              items={location.faqs.map((f, idx) => ({
                id: `${location.slug}-faq-${idx}`,
                category: "getting-started",
                question: f.question,
                answer: f.answer,
              }))}
            />
          </div>

          {/* Other Locations Strip */}
          <div className="pt-8 border-t border-border space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
              Explore Other Cities We Serve
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {LOCATIONS_DATA.filter((l) => l.slug !== location.slug).map(
                (other) => (
                  <Link
                    key={other.slug}
                    href={`/locations/${other.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-4 py-2 text-xs sm:text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    <MapPin
                      className="w-3.5 h-3.5 text-primary"
                      aria-hidden="true"
                    />
                    <span>Software & Web Development in {other.city}</span>
                  </Link>
                )
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-surface border border-border rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Ready to discuss your project in {location.city}?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Share your current workflow bottleneck or website goal, and a
                senior engineer will respond within one business day with a
                practical starting roadmap.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href={`/contact?location=${location.slug}`}
                className="apple-pill-primary px-6 py-3.5 min-h-[48px] text-sm font-semibold"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="apple-pill-secondary px-5 py-3.5 min-h-[48px] bg-surface-muted text-foreground border border-border text-sm font-semibold"
              >
                Browse All 13 Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
