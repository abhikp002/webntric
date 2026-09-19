"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Code } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedText from "@/components/animated-text";

export default function NotFound() {
  return (
    <div className="flex-grow flex items-center justify-center pt-28 pb-16 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] md:blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="max-w-md mx-auto text-center space-y-6 relative z-10">
        <ScrollReveal direction="down">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border text-xs font-semibold text-primary w-fit mx-auto">
            <Sparkles className="h-3.5 w-3.5" /> 404 Error
          </div>
        </ScrollReveal>

        <AnimatedText
          text="Page Not Found"
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
        />

        <ScrollReveal delay={0.2}>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            The page route you requested does not exist or has been relocated to another directory configuration.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all shadow-lg shadow-primary/20"
          >
            <ArrowLeft className="h-4 w-4" /> Return to Homepage
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
