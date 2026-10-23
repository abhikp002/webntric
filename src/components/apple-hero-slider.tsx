"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Terminal,
  MonitorCheck,
  TrendingUp,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { animate, stagger } from "animejs";

export interface HeroSlide {
  id: string;
  eyebrow: string;
  tabLabel: string;
  headline: string;
  subtitle: string;
  imageSrc: string;
  mobileImageSrc?: string;
  imageAlt: string;
  imageCaption: string;
  creditCreator?: string;
  creditSourceUrl?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "engineering-partner",
    eyebrow: "Webntric Software • Engineering & Digital Growth",
    tabLabel: "Overview",
    headline: "Practical Software and Websites Built for Growth",
    subtitle:
      "We help startups, local enterprises, and growing organizations replace manual bottlenecks with dependable custom software, offline Windows billing systems, fast web & mobile apps, and search-led growth.",
    imageSrc: "/images/home/webntric-business-technology-team.webp",
    mobileImageSrc: "/images/home/webntric-business-technology-team-mobile.webp",
    imageAlt:
      "Software engineers and business consultants reviewing digital architecture and operational workflows at a table",
    imageCaption:
      "Human-led discovery and engineering: we map your counter, field, and online workflows before writing code.",
    creditCreator: "Christina @ wocintechchat.com",
    creditSourceUrl:
      "https://unsplash.com/photos/three-women-looking-at-the-laptop-6Dv3pe-JnSg",
    primaryCta: {
      label: "Discuss Your Project",
      href: "/contact",
    },
    secondaryCta: {
      label: "Find Your Starting Point",
      href: "#find-your-starting-point",
    },
    metrics: [
      { label: "Capabilities", value: "13 Core Services" },
      { label: "Architecture", value: "Cloud + Offline Windows" },
      { label: "Governance", value: "Written Scope First" },
    ],
  },
  {
    id: "offline-windows-pos",
    eyebrow: "Offline Windows Desktop & GST Billing",
    tabLabel: "Offline POS & Billing",
    headline: "Offline Billing and Inventory That Never Stops",
    subtitle:
      "Engineered for high-volume retail counters, wholesale mandis, pharmacies, and clinics. Generate thermal or A4 GST invoices in under 4 seconds with 100% local SQLite/SQL Server reliability.",
    imageSrc: "/images/services/retail-pos-counter-operation.webp",
    imageAlt:
      "Store operator processing a customer transaction at a retail point-of-sale counter",
    imageCaption:
      "Keyboard-first Windows desktop POS with barcode scanning, multi-godown stock, and encrypted cloud sync.",
    creditCreator: "Blake Wisz",
    creditSourceUrl: "https://unsplash.com/photos/1556742049-0cfed4f6a45d",
    primaryCta: {
      label: "Explore Offline Windows Software",
      href: "/services/offline-windows-software",
    },
    secondaryCta: {
      label: "See Billing & Inventory Scope",
      href: "/services/billing-and-inventory-software",
    },
    metrics: [
      { label: "Internet Dependency", value: "0% Required at Counter" },
      { label: "Invoice Speed", value: "< 4s Keyboard Flow" },
      { label: "Hardware", value: "Thermal, A4 & Barcode Ready" },
    ],
  },
  {
    id: "websites-and-webapps",
    eyebrow: "High-Trust Websites & Web Applications",
    tabLabel: "Websites & Portals",
    headline: "High-Performance Websites and Portals Built to Convert",
    subtitle:
      "We build custom Next.js websites, customer portals, and Android/iOS mobile applications engineered for sub-2-second mobile load times, clear positioning, and frictionless enquiry capture.",
    imageSrc: "/images/home/outcome-credibility-websites-apps.webp",
    imageAlt:
      "Responsive website and mobile application interface preview showing Core Web Vitals speed and clean inquiry capture",
    imageCaption:
      "Custom-engineered web and mobile platforms—never bloated, slow, generic templates.",
    primaryCta: {
      label: "Explore Website Development",
      href: "/services/website-development",
    },
    secondaryCta: {
      label: "Explore Web & Mobile Apps",
      href: "/services/web-application-development",
    },
    metrics: [
      { label: "Mobile Performance", value: "95+ Core Web Vitals" },
      { label: "Responsive Range", value: "320px to 2560px+" },
      { label: "Ownership", value: "100% Code & Domain Handover" },
    ],
  },
  {
    id: "custom-erp-operations",
    eyebrow: "Custom Business Software & Automation",
    tabLabel: "Custom ERP",
    headline: "Custom Business Software Shaped Around Your Team",
    subtitle:
      "From multi-branch distributor order portals and school fee installment systems to manufacturing BOM trackers, we build role-based internal software that matches how your team actually works.",
    imageSrc: "/images/home/outcome-efficiency-offline-pos-erp.webp",
    imageAlt:
      "Offline Windows GST billing and multi-godown inventory dashboard with keyboard shortcuts and local SQLite sync",
    imageCaption:
      "Role-based dashboards for owners, branch managers, godown keepers, and field staff.",
    primaryCta: {
      label: "Explore Custom Business Software",
      href: "/services/custom-business-software",
    },
    secondaryCta: {
      label: "Inspect System Blueprints",
      href: "/work",
    },
    metrics: [
      { label: "Access Control", value: "Granular Staff Roles" },
      { label: "Data Safety", value: "Automated Local + Cloud Backups" },
      { label: "Onboarding", value: "Hands-On Staff Training" },
    ],
  },
  {
    id: "search-and-growth",
    eyebrow: "SEO, Content Systems & Lead Generation",
    tabLabel: "SEO & Growth",
    headline: "Turn Search Intent Into Qualified Customer Leads",
    subtitle:
      "Stop wasting budget on vanity clicks. We combine technical SEO, local Google Business Profile authority, structured social media content, and conversion landing pages to grow your pipeline.",
    imageSrc: "/images/services/seo-analytics-review-meeting.webp",
    imageAlt:
      "Analyst reviewing search performance and website conversion data on a laptop",
    imageCaption:
      "Transparent monthly reporting tied to real phone calls, WhatsApp leads, and form submissions.",
    creditCreator: "Campaign Creators",
    creditSourceUrl:
      "https://unsplash.com/photos/person-using-macbook-pro-1542744173-05336fcc7ad4",
    primaryCta: {
      label: "Explore SEO & Search Growth",
      href: "/services/seo-services",
    },
    secondaryCta: {
      label: "Explore Lead Generation",
      href: "/services/lead-generation",
    },
    metrics: [
      { label: "Acquisition Focus", value: "High-Intent Search & Local SEO" },
      { label: "Attribution", value: "Call, WhatsApp & Form Tracking" },
      { label: "Content System", value: "Human-Led Authority" },
    ],
  },
];

const SLIDE_DURATION_SEC = 6.5;

export function AppleHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const chipsContainerRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const currentSlide = HERO_SLIDES[activeIndex];

  const goToSlide = useCallback((index: number) => {
    const normalized =
      ((index % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length;
    setActiveIndex(normalized);
  }, []);

  const handleNext = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  // GSAP progress bar + auto-advance timer
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (tweenRef.current) {
      tweenRef.current.kill();
    }

    if (!progressBarRef.current) return;

    gsap.set(progressBarRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    if (!isPlaying || prefersReducedMotion) {
      return;
    }

    tweenRef.current = gsap.to(progressBarRef.current, {
      scaleX: 1,
      duration: SLIDE_DURATION_SEC,
      ease: "none",
      onComplete: () => {
        setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
      },
    });

    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, [activeIndex, isPlaying]);

  // Anime.js staggered entrance for metric chips on slide change
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !chipsContainerRef.current) return;

    const chipElements =
      chipsContainerRef.current.querySelectorAll(".hero-anime-chip");
    if (chipElements.length === 0) return;

    animate(chipElements, {
      opacity: [0, 1],
      translateY: [14, 0],
      scale: [0.96, 1],
      delay: stagger(90, { start: 120 }),
      duration: 620,
      ease: "outExpo",
    });
  }, [activeIndex]);

  const SLIDE_ICONS = [
    Sparkles,
    Terminal,
    MonitorCheck,
    Layers,
    TrendingUp,
  ];
  const ActiveIcon = SLIDE_ICONS[activeIndex % SLIDE_ICONS.length];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Webntric Software core capabilities showcase"
      className="relative overflow-hidden border-b border-border bg-background pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          handlePrev();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          handleNext();
        }
      }}
      onTouchStart={(e) => {
        touchStartXRef.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchStartXRef.current === null) return;
        const deltaX =
          (e.changedTouches[0]?.clientX ?? touchStartXRef.current) -
          touchStartXRef.current;
        if (Math.abs(deltaX) > 48) {
          if (deltaX < 0) handleNext();
          else handlePrev();
        }
        touchStartXRef.current = null;
      }}
    >
      {/* Subtle Apple ambient radial backdrop glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[520px] bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,113,227,0.11),transparent_70%)]"
      />

      <div className="container-editorial relative z-10">
        {/* Main Hero Slider Stage */}
        <div
          id={`hero-slide-panel-${currentSlide.id}`}
          role="region"
          aria-label="Hero capability showcase"
          aria-live="polite"
          className="relative rounded-[1.75rem] border border-border bg-surface shadow-[0_24px_60px_-15px_rgba(0,0,0,0.07)] overflow-hidden"
        >
          {/* Top GSAP Live Progress Line */}
          <div className="h-1 w-full bg-surface-muted overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full w-full bg-primary origin-left"
            />
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{
                  duration: 0.48,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Column: Apple Editorial Copy + CTAs + Anime.js Metric Chips */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                    <ActiveIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{currentSlide.eyebrow}</span>
                  </div>

                  {activeIndex === 0 ? (
                    <h1 className="font-semibold tracking-tight text-foreground">
                      {currentSlide.headline}
                    </h1>
                  ) : (
                    <h2 className="heading-hero font-semibold tracking-tight text-foreground">
                      {currentSlide.headline}
                    </h2>
                  )}

                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {currentSlide.subtitle}
                  </p>

                  {/* Apple Pill CTA Buttons */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-1">
                    <Link
                      href={currentSlide.primaryCta.href}
                      className="apple-pill-primary px-7 py-3.5 min-h-[48px] text-sm sm:text-base"
                    >
                      {currentSlide.primaryCta.label}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <Link
                      href={currentSlide.secondaryCta.href}
                      className="apple-pill-secondary px-6 py-3.5 min-h-[48px] bg-surface-muted text-foreground border border-border hover:border-primary/40 text-sm sm:text-base"
                    >
                      {currentSlide.secondaryCta.label}
                    </Link>
                  </div>

                  {/* Anime.js Staggered Telemetry Chips */}
                  <div
                    ref={chipsContainerRef}
                    className="pt-4 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-3"
                  >
                    {currentSlide.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="hero-anime-chip rounded-2xl bg-surface-muted/80 border border-border px-4 py-3 space-y-0.5"
                      >
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                          {metric.label}
                        </span>
                        <span className="block text-sm font-semibold text-foreground">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Full-Bleed Showcase Image Slide with Ken Burns Motion */}
                <div className="lg:col-span-6">
                  <figure className="group relative overflow-hidden rounded-2xl border border-border bg-surface-muted shadow-lg">
                    <motion.div
                      initial={{ scale: 1.04 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 1.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative aspect-[16/10] w-full overflow-hidden"
                    >
                      {currentSlide.mobileImageSrc ? (
                        <>
                          <Image
                            src={currentSlide.mobileImageSrc}
                            alt={currentSlide.imageAlt}
                            width={800}
                            height={600}
                            sizes="100vw"
                            priority={activeIndex === 0}
                            className="block sm:hidden h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                          <Image
                            src={currentSlide.imageSrc}
                            alt={currentSlide.imageAlt}
                            width={1200}
                            height={800}
                            sizes="(max-width: 1023px) 92vw, 640px"
                            priority={activeIndex === 0}
                            className="hidden sm:block h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                        </>
                      ) : (
                        <Image
                          src={currentSlide.imageSrc}
                          alt={currentSlide.imageAlt}
                          width={1200}
                          height={800}
                          sizes="(max-width: 1023px) 92vw, 640px"
                          priority={activeIndex === 0}
                          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      )}

                      {/* Floating Apple-style Frosted Glass Status Badge */}
                      <div className="apple-glass absolute top-3.5 left-3.5 rounded-full border border-border/80 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                        <span>{currentSlide.tabLabel}</span>
                      </div>
                    </motion.div>
                  </figure>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Trust Strip + Apple Progress Dots */}
          <div className="px-6 sm:px-10 lg:px-12 py-4 bg-surface-muted/60 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2
                  className="h-3.5 w-3.5 text-primary shrink-0"
                  aria-hidden="true"
                />
                <strong className="text-foreground font-medium">
                  Written Scope First
                </strong>{" "}
                — clear milestones before code
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2
                  className="h-3.5 w-3.5 text-primary shrink-0"
                  aria-hidden="true"
                />
                <strong className="text-foreground font-medium">
                  Online + Offline
                </strong>{" "}
                — Web, Mobile & Windows POS
              </span>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center gap-2.5 self-start md:self-auto">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-surface transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <div className="flex items-center gap-1.5 px-1">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}: ${s.tabLabel}`}
                    onClick={() => goToSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIndex
                        ? "w-7 bg-primary"
                        : "w-2 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-surface transition-colors cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
