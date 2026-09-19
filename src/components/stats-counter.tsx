"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function StatsCounter({
  value,
  suffix = "",
  label,
  duration = 2,
}: StatsCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-2xl text-center shadow-sm">
      <span ref={ref} className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
        {count}
        {suffix}
      </span>
      <span className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider mt-2.5">
        {label}
      </span>
    </div>
  );
}
