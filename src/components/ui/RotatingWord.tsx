"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

interface RotatingWordProps {
  words: readonly string[];
  /** Milliseconds each word holds before rolling to the next. */
  interval?: number;
  /** Appended to every word so the punctuation travels with it. */
  suffix?: string;
  className?: string;
}

/**
 * Vertical roller for the hero's closing word.
 *
 * The words are stacked in a column inside a one-line window and the column is
 * translated by one line per step. Two things differ from the usual fixed-height
 * roller:
 *
 * - The step is `1em`, not a fixed `rem`. The hero headline is fluid
 *   (`clamp(2.9rem, 8.2vw, 7.4rem)`), so a fixed step would drift out of
 *   register with the type at most viewport widths.
 * - Every word carries the trailing punctuation, and the column sizes itself to
 *   the widest word. That keeps the window a constant width, so the line never
 *   jitters as short and long words cycle through.
 *
 * The roller is decorative: the Hero announces the full phrase once via an
 * `sr-only` line, and this element is hidden from assistive tech. Visitors who
 * prefer reduced motion see the first word, held still.
 */
export function RotatingWord({
  words,
  interval = 2400,
  suffix = "",
  className,
}: RotatingWordProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || words.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [reduceMotion, words.length, interval]);

  return (
    <span
      aria-hidden
      className={cn("inline-block h-[1em] overflow-hidden align-bottom", className)}
    >
      <span
        className="flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
        style={{ transform: `translateY(-${index}em)` }}
      >
        {words.map((word) => (
          <span key={word} className="flex h-[1em] items-center justify-center leading-none">
            {word}
            {suffix}
          </span>
        ))}
      </span>
    </span>
  );
}
