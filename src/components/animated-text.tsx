"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  el?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function AnimatedText({
  text,
  el: Wrapper = "h1",
  className = "",
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
      },
    },
  };

  if (shouldReduceMotion) {
    return <Wrapper className={className}>{text}</Wrapper>;
  }

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        aria-hidden="true"
        className="inline-block"
      >
        {words.map((word, wordIdx) => (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split("").map((char, charIdx) => (
              <motion.span
                key={charIdx}
                variants={childVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
