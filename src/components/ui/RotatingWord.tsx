"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

interface RotatingWordProps {
  words: readonly string[];
  /** Milliseconds each word holds before the next one swaps in. */
  interval?: number;
  className?: string;
}

/**
 * Swaps through the hero's closing word. The full phrase is announced once to
 * screen readers rather than re-read on every swap, and visitors who prefer
 * reduced motion just see the first word.
 */
export function RotatingWord({ words, interval = 2400, className }: RotatingWordProps) {
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
    <span className={cn("relative inline-block", className)} aria-hidden>
      <span key={index} className="inline-block animate-[word-in_620ms_cubic-bezier(0.16,1,0.3,1)_both]">
        {words[index]}
      </span>
    </span>
  );
}
