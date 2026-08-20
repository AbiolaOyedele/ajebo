"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
  /** The finished figure, e.g. "5,000+", "4.9★", "30min". */
  value: string;
  className?: string;
}

interface Parsed {
  prefix: string;
  target: number;
  decimals: number;
  grouped: boolean;
  suffix: string;
}

/** Pulls the number out of a display figure, keeping whatever wraps it. */
function parse(value: string): Parsed | null {
  const match = /^(\D*)([\d,]+(?:\.\d+)?)(.*)$/.exec(value);
  if (!match) return null;

  const [, prefix = "", digits = "", suffix = ""] = match;
  const plain = digits.replace(/,/g, "");
  const target = Number(plain);
  if (!Number.isFinite(target)) return null;

  return {
    prefix,
    target,
    decimals: plain.split(".")[1]?.length ?? 0,
    grouped: digits.includes(","),
    suffix,
  };
}

/** Rebuilds the figure around an in-progress number. */
function formatValue(parsed: Parsed, n: number): string {
  const fixed = n.toFixed(parsed.decimals);
  const body = parsed.grouped
    ? Number(fixed).toLocaleString("en-US", {
        minimumFractionDigits: parsed.decimals,
        maximumFractionDigits: parsed.decimals,
      })
    : fixed;
  return `${parsed.prefix}${body}${parsed.suffix}`;
}

/**
 * Counts a figure up from zero the first time it scrolls into view.
 *
 * React only ever renders the finished figure, so there is nothing to mismatch
 * on hydration and the number is real content without JavaScript. The tick is
 * written straight to the text node instead of through state — sixty renders a
 * second per tile would be a lot of React for something the compositor never
 * sees anyway.
 *
 * It drops back to zero on mount only while still off screen, so the reset is
 * never visible. A figure with no number in it, or a visitor who has asked for
 * reduced motion, simply gets the string.
 */
export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    const node = ref.current;
    const parsed = parse(value);
    if (!node || !parsed || reduceMotion) return;

    if (!inView) {
      node.textContent = formatValue(parsed, 0);
      return;
    }

    const controls = animate(0, parsed.target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (n) => {
        node.textContent = formatValue(parsed, n);
      },
      // Land on the authored string so any rounding drift cannot show.
      onComplete: () => {
        node.textContent = value;
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
