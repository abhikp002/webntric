"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  staggerChildren?: number;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = "",
  staggerChildren = 0,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, disable transforms and only do a simple fade
  const actualDirection = shouldReduceMotion ? "none" : direction;
  const actualDistance = shouldReduceMotion ? 0 : distance;

  const getDirections = () => {
    switch (actualDirection) {
      case "up":
        return { y: actualDistance, x: 0 };
      case "down":
        return { y: -actualDistance, x: 0 };
      case "left":
        return { x: actualDistance, y: 0 };
      case "right":
        return { x: -actualDistance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getDirections();

  const variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] as const, // Premium easeOutExpo
        when: staggerChildren > 0 ? "beforeChildren" : undefined,
        staggerChildren: staggerChildren || undefined,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
