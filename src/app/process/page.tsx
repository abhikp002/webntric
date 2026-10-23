import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, Lock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ResponsiveFigure } from "@/components/responsive-figure";

export const metadata: Metadata = buildMetadata({
  title:
    "How We Work | Software & Website Delivery Process | Webntric Software",
  description:
    "See how Webntric Software scopes, engineers, tests, deploys, and supports custom business software, offline Windows applications, websites, and growth campaigns.",
  path: "/process",
  keywords: [
    "software development process",
    "custom software scoping and delivery",
    "how Webntric Software works",
  ],
});

const DETAILED_STAGES = [
  {
    number: "01",
    title: "Understand the Business & Workflow",
    duration: "1–3 Days",
    summary:
      "We start by listening to how your business actually operates today—where orders arrive, how bills or quotations are prepared, where staff get stuck, and how customers find you.",
    webntricHandles: [
      "Structured discovery call or in-person workflow review",
      "Review of your existing website, paper registers, or spreadsheets",
      "Honest build-vs-buy recommendation so you only build what adds value",
    ],
    clientProvides: [
      "20–30 minutes to walk us through your daily workflow and pain points",
      "Sample bill formats, register pages, or existing brand materials (if any)",
    ],
    tangibleOutput: "Initial Discovery Notes & Recommended Direction",
  },
  {
    number: "02",
    title: "Define the Written Scope & Milestones",
    duration: "2–5 Days",
    summary:
      "Before any code is written, we translate your requirement into a clear, jargon-free scope document so both teams agree on exact features, timelines, and budget.",
    webntricHandles: [
      "Feature-by-feature scope breakdown (Phase 1 essentials vs. Phase 2 enhancements)",
      "Database schema, offline/cloud architecture choice, and role permissions plan",
      "Milestone schedule with clear review checkpoints",
    ],
    clientProvides: [
      "Review and confirmation of the written scope document",
      "Mutual Non-Disclosure Agreement (NDA) signature where sensitive data is involved",
    ],
    tangibleOutput: "Signed Written Scope, Architecture Plan & Milestone Schedule",
  },
  {
    number: "03",
    title: "Design & Engineering",
    duration: "2–8 Weeks (Scope Dependent)",
    summary:
      "Our engineers design clean, uncluttered interfaces and build the underlying application, database, or website with weekly staging demos.",
    webntricHandles: [
      "UI wireframes focused on speed, readability, and keyboard ergonomics",
      "Frontend, backend, mobile, or Windows .NET desktop development",
      "Regular staging links or screen-share walkthroughs so you see real progress",
    ],
    clientProvides: [
      "Feedback at scheduled milestone demos",
      "Confirmation of tax rates, product categories, or service details",
    ],
    tangibleOutput: "Working Staging Build / Installable Desktop Preview",
  },
  {
    number: "04",
    title: "Review, Hardware & Edge-Case Testing",
    duration: "3–7 Days",
    summary:
      "We test the system under realistic conditions—including slow mobile networks, barcode scanners, thermal/A4 printers, and role permission boundaries.",
    webntricHandles: [
      "Cross-device responsiveness, Core Web Vitals, and accessibility checks",
      "Database validation, calculation accuracy, and printer/scanner integration tests",
      "Structured revision rounds included in your scope",
    ],
    clientProvides: [
      "Hands-on testing with 1–2 team members using real sample entries",
      "Consolidated feedback for final polish before go-live",
    ],
    tangibleOutput: "Verified, Production-Ready Release Candidate",
  },
  {
    number: "05",
    title: "Launch, Data Setup & Staff Training",
    duration: "1–3 Days",
    summary:
      "We manage the production cutover carefully and train your counter, office, or field staff so day one runs smoothly.",
    webntricHandles: [
      "Domain, DNS, SSL, cloud server, or local Windows machine installation",
      "Configuration of automated local and encrypted cloud backups",
      "Practical, plain-language training sessions for your operators and admins",
    ],
    clientProvides: [
      "Availability of key staff members for the onboarding walkthrough",
    ],
    tangibleOutput: "Live Production System, Backup Verification & Admin Credentials",
  },
  {
    number: "06",
    title: "Post-Launch Support & Continuous Improvement",
    duration: "Ongoing Partnership",
    summary:
      "Once your system is in daily use, we stay available for technical support, security updates, SEO/marketing execution, and phase-two enhancements.",
    webntricHandles: [
      "Direct post-launch stabilization support",
      "Scheduled security patching, uptime monitoring, and backup health checks",
      "Monthly search, content, or lead-generation reporting (for growth clients)",
    ],
    clientProvides: [
      "Real-world feedback as your transaction volume and team grow",
    ],
    tangibleOutput: "Long-Term Operational Stability & Iterative Growth",
  },
];

export default function ProcessPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border">
        <div className="container-editorial space-y-6">
          <Breadcrumbs items={[{ name: "How We Work", path: "/process" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                6-Stage Delivery Governance
              </span>
              <h1 className="font-bold text-foreground tracking-tight">
                A transparent, milestone-driven process with no surprises.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Software and website projects fail when expectations are left
                vague. We follow a structured six-stage process so you always
                know what is being built, what we need from your team, and when
                each milestone will be delivered.
              </p>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src="/images/home/webntric-project-discovery-meeting.webp"
                alt="Project team reviewing scope documents and workflow milestones on a laptop during a discovery meeting"
                width={1000}
                height={680}
                aspectRatio="16/10"
                priority
                sizes="(max-width: 1023px) 100vw, 480px"
                caption="Every project begins with a written scope document and clear milestone checkpoints."
                creditCreator="Headway"
                creditSourceUrl="https://unsplash.com/photos/1517245386807-bb43f82c33c4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6 STAGES */}
      <section className="section-padding border-b border-border bg-surface-muted/40">
        <div className="container-editorial space-y-8">
          {DETAILED_STAGES.map((stage) => (
            <article
              key={stage.number}
              className="bg-surface border border-border rounded-xl p-6 sm:p-8 space-y-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-xs font-mono font-bold">
                    STAGE {stage.number}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    {stage.title}
                  </h2>
                </div>
                <span className="text-xs font-mono text-muted-foreground px-3 py-1 rounded bg-surface-muted border border-border">
                  Typical Window: {stage.duration}
                </span>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {stage.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-lg bg-surface-muted border border-border space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                    What Webntric Handles
                  </h3>
                  <ul className="space-y-2">
                    {stage.webntricHandles.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs sm:text-sm text-foreground"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-primary shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-lg bg-surface-muted border border-border space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                    What We Need From Your Team
                  </h3>
                  <ul className="space-y-2">
                    {stage.clientProvides.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm">
                <FileCheck2
                  className="w-4 h-4 text-success shrink-0"
                  aria-hidden="true"
                />
                <span className="text-muted-foreground">
                  <strong className="text-foreground font-semibold">
                    Milestone Output:{" "}
                  </strong>
                  {stage.tangibleOutput}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GOVERNANCE & CONFIDENTIALITY */}
      <section className="section-padding bg-background">
        <div className="container-editorial space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-border rounded-xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-semibold">
                <FileCheck2 className="w-4 h-4" aria-hidden="true" />
                <span>Revisions & Scope Changes</span>
              </div>
              <h2 className="text-xl font-bold text-foreground">
                How we handle feedback and new ideas mid-project
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every milestone includes structured review and refinement rounds
                within the agreed scope. If a new business requirement emerges
                mid-project, we document its impact on timeline and budget in
                writing before building it—so you always remain in control of
                both launch date and cost.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-semibold">
                <Lock className="w-4 h-4" aria-hidden="true" />
                <span>Data Ownership & Confidentiality</span>
              </div>
              <h2 className="text-xl font-bold text-foreground">
                You own your business data, domain, and deliverables
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We sign mutual Non-Disclosure Agreements (NDAs) upon request,
                restrict staging access to authorized engineers, and ensure your
                domain name, database records, and custom deliverables belong to
                your organization upon project completion.
              </p>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="font-bold text-foreground">
                Ready for Stage 01? Let&apos;s understand your requirement.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Share a brief note about your business challenge and we will
                schedule a straightforward discovery conversation.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors shrink-0"
            >
              Start With a Discovery Call
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
