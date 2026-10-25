import React from "react";
import {
  Globe,
  Layers,
  Rocket,
  Layout,
  Smartphone,
  Server,
  UserCheck,
  Cpu,
  ShoppingBag,
  Receipt,
  Sparkles,
  Shield,
  BarChart3,
  CheckCircle,
  LucideIcon,
  CheckCircle2,
} from "lucide-react";
import {
  WHAT_WE_HELP_BUILD_CARDS,
  INITIAL_SUPPORT_ACTIVITIES,
  StartupBuildCard,
} from "@/data/startup-partnership";
import { ResponsiveFigure } from "@/components/responsive-figure";

const ICON_MAP: Record<string, LucideIcon> = {
  Globe,
  Layers,
  Rocket,
  Layout,
  Smartphone,
  Server,
  UserCheck,
  Cpu,
  ShoppingBag,
  Receipt,
  Sparkles,
  Shield,
  BarChart3,
  CheckCircle,
};

export function StartupSupportCards() {
  return (
    <section id="what-we-build" className="section-padding border-b border-border bg-background">
      <div className="container-editorial space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Engineering Scope
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground">
            What can we help you build?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            We focus on building the leanest, most reliable version of your digital product so you can test customer workflows before committing heavy capital.
          </p>
        </div>

        {/* 14 BUILD CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_WE_HELP_BUILD_CARDS.map((card) => {
            const Icon = ICON_MAP[card.iconName] || Rocket;
            return (
              <div
                key={card.id}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 sm:p-6 hover:border-primary/40 transition-colors shadow-sm space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-secondary text-muted-foreground">
                      {card.stage}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {card.objective}
                  </p>
                </div>

                <div className="pt-3 border-t border-border space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-foreground">Possible deliverable: </span>
                    <span className="text-muted-foreground">{card.deliverable}</span>
                  </div>
                  <div className="text-muted-foreground/80">
                    <span className="font-semibold text-foreground/80">Excluded: </span>
                    <span>{card.notIncluded}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* INITIAL SUPPORT ACTIVITIES CHECKLIST */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                Where Support Begins
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Where our initial technology support may begin
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Before writing code, we work collaboratively to understand your operational context and streamline what needs to be created.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {INITIAL_SUPPORT_ACTIVITIES.map((act, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-lg bg-surface border border-border text-xs text-muted-foreground italic">
                The actual scope depends on the project, its feasibility, the information available, Webntric’s capacity, and the mutually agreed plan.
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-border shadow-md">
                <ResponsiveFigure
                  src="/images/startups/startup-wireframe-session.webp"
                  alt="Product designers and developers mapping out wireframe sketches"
                  width={1200}
                  height={800}
                  aspectRatio="16/10"
                  sizes="(max-width: 1023px) 100vw, 480px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
