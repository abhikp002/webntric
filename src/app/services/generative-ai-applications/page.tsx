import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Sparkles,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import {
  buildMetadata,
  buildServiceJsonLd,
  buildFaqJsonLd,
} from "@/lib/seo";
import {
  AI_HERO_CONTENT,
  AI_PROBLEMS_SECTION,
  AI_USE_CASES,
  AI_IMPLEMENTATION_PROCESS,
  AI_TECHNOLOGY_SECTION,
  AI_LIMITATIONS_SECTION,
  AI_ILLUSTRATIVE_USE_CASES,
  AI_FAQS,
} from "@/data/ai-services";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { ResponsiveFigure } from "@/components/responsive-figure";
import { AIFeatureCard } from "@/components/ai-security/ai-feature-card";
import { AIUseCaseSelector } from "@/components/ai-security/ai-use-case-selector";
import { AIWorkflowDiagram } from "@/components/ai-security/ai-workflow-diagram";
import { AITrustSection } from "@/components/ai-security/ai-trust-section";
import { SecurityProcessTimeline } from "@/components/ai-security/security-process-timeline";
import { ServiceComparison } from "@/components/ai-security/service-comparison";
import { RiskDisclosure } from "@/components/ai-security/risk-disclosure";
import { AIFAQ } from "@/components/ai-security/ai-faq";
import { RelatedServices } from "@/components/ai-security/related-services";
import { TrustCardsStrip } from "@/components/ai-security/trust-cards-strip";

export const metadata: Metadata = buildMetadata({
  title: "Generative AI Applications for Business | Webntric Software",
  description:
    "Build practical generative AI applications for customer support, internal knowledge, document processing, automation, and business workflows with Webntric.",
  path: "/services/generative-ai-applications",
  keywords: [
    "generative AI applications for business",
    "AI knowledge assistants and RAG",
    "AI document processing and invoice extraction",
    "custom business AI integration",
    "human-in-the-loop AI workflows",
  ],
});

export default function GenerativeAiApplicationsPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: "Generative AI Applications for Business",
    description:
      "Practical generative AI applications for customer support, internal knowledge assistants, document processing, business workflow automation, and semantic search with human oversight.",
    path: "/services/generative-ai-applications",
    category: "Generative AI & Business Automation",
  });

  const faqJsonLd = buildFaqJsonLd(AI_FAQS);

  return (
    <div className="bg-background">
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* 1. HERO SECTION */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-border bg-surface">
        <div className="container-editorial space-y-8">
          <Breadcrumbs
            items={[
              { name: "Services", path: "/services" },
              {
                name: "Generative AI Applications",
                path: "/services/generative-ai-applications",
              },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{AI_HERO_CONTENT.primaryMessage}</span>
              </div>

              <h1 className="font-bold tracking-tight text-foreground">
                {AI_HERO_CONTENT.h1}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {AI_HERO_CONTENT.subtitle}
              </p>

              <div className="p-4 rounded-xl bg-surface-muted border border-border text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Our stance on AI: </strong>
                AI should solve a real operational bottleneck—not be added just because it is popular. Every system we build includes permission controls, source grounding, human review gates, and clear fallback behavior.
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                <Link
                  href={AI_HERO_CONTENT.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
                >
                  {AI_HERO_CONTENT.primaryCta.label}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href={AI_HERO_CONTENT.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg bg-surface-muted text-foreground border border-border text-sm font-semibold hover:bg-background transition-colors"
                >
                  {AI_HERO_CONTENT.secondaryCta.label}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ResponsiveFigure
                src={AI_HERO_CONTENT.heroImage}
                alt={AI_HERO_CONTENT.heroAlt}
                aspectRatio="16/10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. AI PROBLEM SECTION & HONEST DECISION STATEMENT */}
      <section
        id="where-ai-helps"
        className="section-padding border-b border-border scroll-mt-20"
      >
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              Operational Problem Discovery
            </div>
            <h2 className="font-bold text-foreground">
              {AI_PROBLEMS_SECTION.heading}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {AI_PROBLEMS_SECTION.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AI_PROBLEMS_SECTION.problems.map((prob, index) => (
              <div
                key={prob.title}
                className="apple-card p-5 rounded-xl bg-surface border border-border space-y-2"
              >
                <div className="text-xs font-mono font-bold text-primary">
                  0{index + 1}
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {prob.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {prob.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Decision Statement Callout */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border-2 border-primary/25 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>Honest Engineering Advice</span>
            </div>
            <blockquote className="text-lg sm:text-xl font-bold text-foreground leading-snug">
              “{AI_PROBLEMS_SECTION.decisionStatement}”
            </blockquote>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl">
              {AI_PROBLEMS_SECTION.decisionSubtext}
            </p>
          </div>

          {/* Interactive Selector & Workflow Diagram */}
          <AIUseCaseSelector useCases={AI_USE_CASES} />
          <AIWorkflowDiagram />
        </div>
      </section>

      {/* 3. AI SERVICES CARDS (6 DISTINCT CAPABILITIES) */}
      <section
        id="ai-services-grid"
        className="section-padding bg-surface border-b border-border scroll-mt-20"
      >
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              Generative AI Capabilities
            </div>
            <h2 className="font-bold text-foreground">
              Six practical AI service areas—each designed with validation and human control
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every application we build is scoped around a clear operational workflow, grounded in approved data sources, and paired with human review where accuracy matters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {AI_USE_CASES.map((uc) => (
              <AIFeatureCard key={uc.slug} useCase={uc} />
            ))}
          </div>

          <ServiceComparison />
        </div>
      </section>

      {/* 4. 9-STAGE AI IMPLEMENTATION PROCESS */}
      <section
        id="ai-implementation-process"
        className="section-padding border-b border-border scroll-mt-20"
      >
        <div className="container-editorial">
          <SecurityProcessTimeline
            stages={AI_IMPLEMENTATION_PROCESS}
            eyebrow="9-Stage AI Implementation Process"
            heading="How we take an AI opportunity from discovery to monitored operation"
            subtitle="We never jump straight to writing prompts. We assess feasibility, prepare source documents, design human review screens, test failure scenarios, and pilot with real users before launch."
          />
        </div>
      </section>

      {/* 5. AI TRUST AND SAFETY SECTION */}
      <AITrustSection />

      {/* 6. AI TECHNOLOGY SECTION */}
      <section
        id="ai-technology"
        className="section-padding border-b border-border scroll-mt-20"
      >
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              Architecture & Model Selection
            </div>
            <h2 className="font-bold text-foreground">
              {AI_TECHNOLOGY_SECTION.heading}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {AI_TECHNOLOGY_SECTION.intro}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-border space-y-4">
            <div className="text-sm font-semibold text-foreground">
              {AI_TECHNOLOGY_SECTION.selectionCriteriaIntro}
            </div>
            <div className="flex flex-wrap gap-2">
              {AI_TECHNOLOGY_SECTION.selectionCriteria.map((crit) => (
                <span
                  key={crit}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-muted border border-border text-xs font-semibold text-foreground"
                >
                  <CheckCircle2
                    className="w-3.5 h-3.5 text-primary"
                    aria-hidden="true"
                  />
                  {crit}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {AI_TECHNOLOGY_SECTION.technologies.map((tech) => (
              <div
                key={tech.technology}
                className="apple-card p-6 rounded-2xl bg-surface border border-border space-y-3"
              >
                <h3 className="text-base font-bold text-foreground">
                  {tech.technology}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Business purpose: </strong>
                  {tech.businessPurpose}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border">
                  <strong className="text-primary">When we use it: </strong>
                  {tech.whenUsed}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AI LIMITATIONS SECTION */}
      <section
        id="ai-limitations"
        className="section-padding bg-surface border-b border-border scroll-mt-20"
      >
        <div className="container-editorial">
          <RiskDisclosure
            eyebrow="Transparent AI Limitations"
            heading={AI_LIMITATIONS_SECTION.heading}
            subtitle={AI_LIMITATIONS_SECTION.subtitle}
            items={AI_LIMITATIONS_SECTION.limitations}
            calloutQuote="AI outputs are treated as suggestions or assisted results unless the workflow has been specifically validated for automated action."
          />
        </div>
      </section>

      {/* 8. ILLUSTRATIVE EXAMPLE USE CASES (HONEST LABELLING) */}
      <section
        id="example-use-cases"
        className="section-padding border-b border-border scroll-mt-20"
      >
        <div className="container-editorial space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono font-semibold text-primary">
              <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Illustrative Architecture Scenarios</span>
            </div>
            <h2 className="font-bold text-foreground">
              Example AI workflow blueprints (illustrative scenarios)
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              The following scenarios are clearly labelled as illustrative engineering blueprints showing how we structure problem definition, retrieval, human review, security controls, and limitations. They are not presented as named client endorsements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {AI_ILLUSTRATIVE_USE_CASES.map((scenario) => (
              <div
                key={scenario.id}
                className="bg-surface border border-border rounded-2xl p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-surface-muted border border-border text-muted-foreground">
                    {scenario.badge}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    {scenario.title}
                  </h3>

                  <div className="space-y-2.5 text-xs text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Business problem: </strong>
                      {scenario.businessProblem}
                    </p>
                    <p>
                      <strong className="text-foreground">Existing process: </strong>
                      {scenario.existingProcess}
                    </p>
                    <p>
                      <strong className="text-foreground">AI solution: </strong>
                      {scenario.aiSolution}
                    </p>
                    <p>
                      <strong className="text-primary">Human review process: </strong>
                      {scenario.humanReviewProcess}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-border">
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-foreground">
                      Technologies & Security Controls
                    </div>
                    <ul className="space-y-1">
                      {scenario.securityControls.map((ctrl) => (
                        <li
                          key={ctrl}
                          className="flex items-start gap-1.5 text-xs text-muted-foreground"
                        >
                          <ShieldCheck
                            className="w-3.5 h-3.5 text-success shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{ctrl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-border space-y-2 text-xs">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Expected outcome type: </strong>
                    {scenario.expectedOutcome}
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-warning">Known limitation: </strong>
                    {scenario.limitations}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. AI FAQ SECTION */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="container-editorial">
          <AIFAQ />
        </div>
      </section>

      {/* 10. RELATED SERVICES, TRUST STRIP & FINAL CTA */}
      <section className="section-padding">
        <div className="container-editorial space-y-12">
          <RelatedServices
            heading="Connect Generative AI with your core digital systems"
            services={[
              {
                name: "Custom Business Software",
                href: "/services/custom-business-software",
                description:
                  "Build the structured database, approval workflows, and role permissions that AI assistants plug into.",
              },
              {
                name: "Business Automation Consulting",
                href: "/services/business-automation-consulting",
                description:
                  "Audit manual operations to decide what needs rule-based automation vs. generative AI.",
              },
              {
                name: "Website & Data Security",
                href: "/services/website-data-security",
                description:
                  "Protect applications and business data with RBAC, HTTPS, automated backups, and tested deployments.",
              },
              {
                name: "Web Application Development",
                href: "/services/web-application-development",
                description:
                  "Browser-based customer portals, dashboards, and internal tools built for speed and clarity.",
              },
            ]}
            stages={[
              { name: "Startups", href: "/businesses/startups" },
              { name: "Local Businesses", href: "/businesses/local-businesses" },
              { name: "Growing Businesses", href: "/businesses/growing-businesses" },
              {
                name: "Established Organizations",
                href: "/businesses/established-businesses",
              },
            ]}
          />

          <TrustCardsStrip />

          <div className="bg-surface border border-border rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="font-bold text-foreground">
                Have a specific workflow in mind? Let’s evaluate whether AI is the right fit.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Tell us what your team spends too much time reading, searching, or re-typing. We will give you an honest assessment—whether the best answer is a grounded AI assistant, simpler automation, or custom software.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact?service=generative-ai-applications"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors"
              >
                Discuss an AI Application
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services/website-data-security"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg bg-surface-muted text-foreground border border-border text-sm font-semibold hover:bg-background transition-colors"
              >
                Explore Security & Reliability
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
