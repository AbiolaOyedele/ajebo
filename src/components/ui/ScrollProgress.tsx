"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/**
 * Hairline along the top edge showing how far down the page the visitor is.
 *
 * It sits above the floating header but below the skip link, and it is purely
 * informational decoration, since the scrollbar already carries this meaning for
 * assistive tech, so it is hidden from it.
 */
export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-60 h-[3px] max-w-[100vw] origin-left bg-orange"
      style={{ scaleX: reduceMotion ? scrollYProgress : smoothed }}
    />
  );
}
