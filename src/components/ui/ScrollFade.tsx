"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
}

/**
 * Settles a block back as it leaves the top of the screen — it drifts down a
 * little, shrinks a little and dims, so the section arriving underneath reads as
 * the thing in front.
 *
 * It never reaches zero opacity: the block is still on the page, and content
 * that vanishes entirely while partly visible is disorienting.
 */
export function ScrollFade({ children, className }: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 56]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduceMotion ? undefined : { opacity, y, scale }}
    >
      {children}
    </motion.div>
  );
}
