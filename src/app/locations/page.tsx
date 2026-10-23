import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { LOCATIONS_DATA } from "@/data/locations";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ResponsiveFigure } from "@/components/responsive-figure";

export const metadata: Metadata = buildMetadata({
  title:
    "Locations We Serve | Gorakhpur, Noida, Delhi, Lucknow & Gurugram | Webntric",
  description:
    "Explore Webntric Software's dedicated software development, offline Windows POS billing, website development, and SEO services across Gorakhpur, Noida, Delhi, Lucknow, and Gurugram.",
  path: "/locations",
  keywords: [
    "software company Gorakhpur Noida Delhi Lucknow Gurugram",
    "website development company locations",
    "offline POS and custom ERP software partner",
    "Webntric Software locations",
  ],
});

export default function LocationsPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border">
        <div className="container-editorial space-y-6">
          <Breadcrumbs
            items={[{ name: "Locations We Serve", path: "/locations" }]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Regional & Metro Engineering Coverage • 5 Key Cities
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.12]">
                Software engineering, offline POS systems, and digital growth
                tailored to your city.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Whether you operate a retail counter or hospital in Gorakhpur, a
                growing institution in Lucknow, a wholesale distribution hub in
                Delhi, or a technology enterprise in Noida or Gurugram, explore
                how our team supports businesses in your city.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {LOCATIONS_DATA.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-border px-3.5 py-1.5 text-xs sm:text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    <span>{loc.city}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/home/webntric-business-technology-team.webp"
                alt="Webntric Software engineering and digital strategy team supporting businesses across key commercial hubs"
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

      {/* CITY CARDS GRID */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              City-Specific Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Select your city to explore tailored software and growth solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {LOCATIONS_DATA.map((loc) => (
              <article
                key={loc.slug}
                className="apple-card overflow-hidden flex flex-col justify-between h-full"
              >
                <div>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="block relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-surface-muted"
                  >
                    <Image
                      src={loc.heroImage}
                      alt={loc.heroImageAlt}
                      width={1200}
                      height={800}
                      sizes="(max-width: 1023px) 100vw, 560px"
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
                    />
                  </Link>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                        {loc.city}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {loc.regionLabel}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground">
                      <Link
                        href={`/locations/${loc.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {loc.h1}
                      </Link>
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {loc.shortTagline}
                    </p>

                    <div className="pt-3 border-t border-border space-y-2">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Commercial Corridors Served in {loc.city}
                      </p>
                      <ul className="space-y-1.5">
                        {loc.localBusinessContext.keyCommercialHubs
                          .slice(0, 3)
                          .map((hub) => (
                            <li
                              key={hub}
                              className="flex items-start gap-2 text-xs sm:text-sm text-foreground"
                            >
                              <CheckCircle2
                                className="w-4 h-4 text-primary shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{hub}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-4 border-t border-border bg-surface-muted/40 flex items-center justify-between gap-4">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Explore {loc.city} solutions
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href={`/contact?location=${loc.slug}`}
                    className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Discuss a project in {loc.city} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
