"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  /**
   * How far the layer travels, as a percentage of its own height, across a full
   * pass through the viewport. Keep it under the 10% overhang below.
   */
  distance?: number;
}

/**
 * Drifts a photo against the scroll so the frame feels like a window onto
 * something larger.
 *
 * The moving layer is inset by -10% on every side, which makes it 120% of the
 * frame. That overhang is what the travel eats into, so the frame never shows a
 * bare edge. Only `transform` changes, so this stays on the compositor.
 *
 * Drop it inside a positioned, clipping frame and give the child `fill`.
 */
export function Parallax({ children, distance = 6 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${-distance}%`, `${distance}%`]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div className="absolute inset-[-10%]" style={reduceMotion ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  );
}
