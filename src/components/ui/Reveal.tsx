"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds of stagger, for lists that should cascade in. */
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}

/**
 * Fade-and-rise on first scroll into view. Collapses to a plain wrapper when the
 * visitor has asked for reduced motion.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Component
      // Framer Motion server-renders `opacity: 0` inline, so without JS the
      // content would never appear. `data-reveal` lets the <noscript> block in
      // the root layout override it.
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </Component>
  );
}
