import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Share2, Compass, Heart, Users, Sparkles, MessageCircle, RefreshCw, Layers } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedText from "@/components/animated-text";

export const metadata: Metadata = {
  title: "Social Media Management & Brand Growth | Webntric Software",
  description: "Webntric Software designs creative content planning, reels production, multi-channel strategy, and active community moderation to build brand trust.",
  alternates: {
    canonical: "https://webntric.com/services/social-media-management",
  },
};

const socialSpecs = [
  { title: "Multi-Channel Strategy", desc: "Coordinating consistent brand stories across LinkedIn, Instagram, X, Facebook, and YouTube.", icon: Compass },
  { title: "Asset Creative Design", desc: "Developing custom brand typography, graphical layouts, banners, carousel slides, and templates.", icon: Layers },
  { title: "Short-Form Reels/Video", desc: "Editing premium reels, shorts, and TikTok videos with clean caption tracks and music loops.", icon: Sparkles },
  { title: "Community Moderation", desc: "Replying to direct client queries, comments, and tags to keep channels active and professional.", icon: Users },
  { title: "Growth Analytics", desc: "Evaluating reach, impressions, audience demographic shifts, and click-through rates.", icon: Share2 },
  { title: "Campaign Scheduling", desc: "Mapping content calendars, pre-approving posts, and deploying scheduling tools.", icon: RefreshCw },
];

export default function SocialMediaManagement() {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Management Services",
    "provider": {
      "@type": "Organization",
      "name": "Webntric Software",
      "url": "https://webntric.com"
    },
    "description": "Creative social media management services including content planning, brand positioning, and video editing.",
    "areaServed": "Worldwide"
  };

  return (
    <div className="overflow-hidden">
      {/* Dynamic SEO JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Page Hero */}
      <section className="relative pt-32 pb-16 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
          <ScrollReveal direction="down">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">Services &mdash; Social Media</span>
          </ScrollReveal>
          <AnimatedText
            text="Build a Brand People Remember."
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We design and coordinate high-quality social media content calendars that build brand credibility, educate customers, and drive organic product inquiry.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all shadow-lg shadow-primary/20"
            >
              Grow My Social Brand
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid of features and simulated feed */}
      <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Specifications */}
        <div className="lg:col-span-7 space-y-10">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Our Social Capabilities</h2>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              We build brand equity by pairing aesthetic graphic design with consistent content deployment schedules.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialSpecs.map((spec) => (
              <div key={spec.title} className="flex gap-4">
                <div className="p-2.5 rounded-xl bg-secondary text-primary h-fit">
                  <spec.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{spec.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{spec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simulated Social Feed Mockup */}
        <div className="lg:col-span-5 flex justify-center">
          <ScrollReveal direction="left" className="w-full max-w-[340px]">
            <div className="bg-card border border-border rounded-3xl p-5 shadow-xl space-y-4 select-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 rounded-full blur-xl"></div>
              {/* Profile Bar */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-md">
                    W
                  </div>
                  <div>
                    <div className="text-xs font-bold">Webntric Software</div>
                    <div className="text-[9px] text-muted-foreground">@webntric_software</div>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Follow</span>
              </div>

              {/* Simulated Post Image area */}
              <div className="aspect-square bg-secondary rounded-2xl flex flex-col justify-between p-6 border border-border/50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent)]"></div>
                <div className="flex justify-between items-start z-10">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Tech Insights</span>
                  <Sparkles className="h-4.5 w-4.5 text-indigo-400" />
                </div>
                <div className="z-10">
                  <h4 className="text-sm font-extrabold tracking-tight">Why React Server Components Change Everything</h4>
                  <p className="text-[9px] text-zinc-400 mt-1">Read our tech strategy log.</p>
                </div>
              </div>

              {/* Social interaction buttons */}
              <div className="flex justify-between items-center text-zinc-400 text-xs px-1 border-b border-border/50 pb-3">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1 hover:text-rose-500 transition-colors cursor-pointer">
                    <Heart className="h-4 w-4 fill-rose-500/10 hover:fill-rose-500" /> 1.2k
                  </span>
                  <span className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                    <MessageCircle className="h-4 w-4" /> 84
                  </span>
                </div>
                <Share2 className="h-4 w-4 hover:text-indigo-400 transition-colors cursor-pointer" />
              </div>

              {/* Caption */}
              <div className="text-[10px] leading-relaxed text-foreground/80 px-1">
                <span className="font-bold mr-1">webntric_software</span>
                React Server Components optimize page loads by shifting heavy dependencies to the edge server. Less JS = better user experience. 🚀 #webdev #reactjs
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SEO Core Content Section */}
      <section className="py-20 bg-card border-t border-border px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
              Multi-Channel Brand Positioning & Community Growth
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Establishing a professional presence across major channels is essential to generate brand authority. We build consistent content plans targeting LinkedIn, Instagram, and X, highlighting your business expertise, product details, and company values.
            </p>
          </ScrollReveal>

          <ScrollReveal className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Creative Content Calendars & Reels Editing
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              We design structured content calendars, mapping assets, copy tags, and publishing times. Our creative team designs premium graphical templates, sliding carousels, and formats short-form vertical reels to maximize reach and keep your community engaged.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
