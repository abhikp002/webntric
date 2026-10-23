"use client";

import { useEffect, useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animate } from "animejs";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AppleScrollSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function AppleScrollSection({
  id,
  className = "",
  children,
}: AppleScrollSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate section header block
      const headers = el.querySelectorAll(".apple-reveal-header");
      if (headers.length > 0) {
        gsap.fromTo(
          headers,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 84%",
              once: true,
            },
          }
        );
      }

      // Stagger animate bento cards inside the section
      const cards = el.querySelectorAll(".apple-card");
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 32, scale: 0.985 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.68,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id={id} ref={sectionRef} className={className}>
      {children}
    </section>
  );
}

interface AppleBentoCardProps {
  className?: string;
  children: ReactNode;
}

export function AppleBentoCard({
  className = "",
  children,
}: AppleBentoCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseEnter = () => {
    const el = cardRef.current;
    if (!el) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const badge = el.querySelector(".apple-card-badge");
    if (badge) {
      animate(badge, {
        scale: [1, 1.07, 1],
        duration: 420,
        ease: "outBack(1.7)",
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className={`apple-card ${className}`}
    >
      {children}
    </motion.div>
  );
}
