import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Terminal,
  Users,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ResponsiveFigure } from "@/components/responsive-figure";

export const metadata: Metadata = buildMetadata({
  title:
    "About Webntric Software | Technology & Digital Growth Partner",
  description:
    "Learn how Webntric Software builds dependable websites, offline Windows software, custom billing systems, and digital growth engines.",
  path: "/about",
  keywords: [
    "about Webntric Software",
    "software development company",
    "custom business software and digital agency",
  ],
});

const PRINCIPLES = [
  {
    title: "Solve the operational bottleneck first",
    description:
      "Before proposing a framework or marketing campaign, we study where your daily operation loses time or trust—whether that is a slow billing counter, a confusing website, or manual stock registers.",
  },
  {
    title: "Right-size technology to real working conditions",
    description:
      "In many retail counters, wholesale godowns, and clinics, internet connectivity fluctuates. Where offline speed matters, we build native Windows desktop systems; where multi-branch cloud access matters, we engineer resilient web and mobile apps.",
  },
  {
    title: "Keep engineering and customer growth connected",
    description:
      "A fast website is more effective when paired with sound technical SEO, and paid lead generation works best when enquiries flow directly into a clean follow-up workflow.",
  },
  {
    title: "Speak plainly and document every scope",
    description:
      "We do not hide behind buzzwords. Every project begins with a written scope document detailing what is included, how milestones work, and what you will own upon completion.",
  },
];

const DELIVERY_STANDARDS = [
  "Written requirement & milestone sign-off before coding starts",
  "Version-controlled source code and structured database migrations",
  "Keyboard-first UI ergonomics for high-volume billing and data-entry staff",
  "Sub-2-second mobile page load targets and WCAG 2.2 AA accessibility discipline",
  "Automated local and cloud database backup routines",
  "Direct post-launch engineering support without middleman ticket queues",
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border">
        <div className="container-editorial space-y-6">
          <Breadcrumbs items={[{ name: "About Webntric", path: "/about" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                About Webntric Software
              </span>
              <h1 className="font-bold text-foreground tracking-tight">
                A practical technology and digital growth partner built for
                long-term business reliability.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Webntric Software works with founders, business owners, and
                institutional leaders who want dependable software, credible
                websites, and measurable customer acquisition—without agency
                hype.
              </p>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/team/webntric-engineering-collaboration.webp"
                alt="Software engineers collaborating on system architecture and code review at a shared workstation"
                width={1000}
                height={680}
                aspectRatio="16/10"
                priority
                sizes="(max-width: 1023px) 100vw, 480px"
                caption="Engineering and digital strategy under one roof."
                creditCreator="Christina @ wocintechchat.com"
                creditSourceUrl="https://unsplash.com/photos/two-women-looking-at-the-code-at-laptop-glRqyWJgUeY"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE EXIST & HOW WE DIFFER */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Our Perspective
            </span>
            <h2 className="font-bold text-foreground">
              Why we bring software engineering, offline systems, and digital
              growth under one roof.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Most businesses are forced to choose between two disconnected
              vendors: a design agency that builds a surface-level website with
              no understanding of billing or inventory operations, or a software
              vendor that delivers a rigid utility with zero attention to
              usability and customer acquisition.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Webntric Software bridges both worlds. Our team engineers custom
              business software—including native offline Windows POS and
              inventory applications, multi-role web portals, and mobile
              apps—while also building the high-trust websites, search
              foundations, and digital marketing systems that bring customers
              through your door.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Whether we are helping a traditional wholesale business move from
              handwritten registers to barcode billing, or helping a growing
              company launch a custom web platform, our goal is simple: build
              tools your staff actually enjoy using and systems your customers
              immediately trust.
            </p>
          </div>

          <aside className="lg:col-span-5 bg-surface border border-border rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2 pb-4 border-b border-border">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Registered Office Address
              </span>
              <h3 className="text-lg font-bold text-foreground">
                Engineering & Strategy Headquarters
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {SITE_CONFIG.address.full}
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Terminal
                  className="w-4 h-4 text-primary shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <strong className="text-foreground block">
                    Full-Stack Engineering
                  </strong>
                  <span className="text-muted-foreground text-xs">
                    Next.js, React, TypeScript, Node.js, C# / .NET, Flutter,
                    PostgreSQL, MS SQL Server, SQLite
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users
                  className="w-4 h-4 text-primary shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <strong className="text-foreground block">
                    Direct Senior Collaboration
                  </strong>
                  <span className="text-muted-foreground text-xs">
                    You communicate directly with the engineers and strategists
                    responsible for your project.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck
                  className="w-4 h-4 text-primary shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <strong className="text-foreground block">
                    Long-Term Accountability
                  </strong>
                  <span className="text-muted-foreground text-xs">
                    Structured onboarding, encrypted backups, and ongoing
                    maintenance plans after go-live.
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* OPERATING PRINCIPLES */}
      <section className="section-padding border-b border-border bg-background">
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              Operating Principles
            </span>
            <h2 className="font-bold text-foreground">
              How we make technical and commercial decisions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLES.map((item, idx) => (
              <div
                key={item.title}
                className="bg-surface border border-border rounded-xl p-6 space-y-2.5 h-full"
              >
                <span className="text-xs font-mono font-bold text-primary">
                  PRINCIPLE 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING & DELIVERY STANDARDS */}
      <section className="section-padding bg-surface-muted/40">
        <div className="container-editorial space-y-12">
          <div className="bg-surface border border-border rounded-xl p-6 sm:p-8 space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Quality & Governance
              </span>
              <h2 className="font-bold text-foreground">
                Our baseline engineering and delivery standards
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DELIVERY_STANDARDS.map((std) => (
                <div
                  key={std}
                  className="p-4 rounded-lg bg-surface-muted border border-border flex items-start gap-2.5 text-sm text-foreground"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{std}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-surface border border-border rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="font-bold text-foreground">
                Start a conversation with our team.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Whether you want to modernize internal billing and inventory,
                launch a credible website, or improve customer acquisition, we
                are ready to listen.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg bg-surface-muted text-foreground border border-border text-sm font-semibold hover:bg-background transition-colors"
              >
                See How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
