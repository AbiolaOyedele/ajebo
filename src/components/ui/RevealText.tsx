"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Fragment } from "react";
import { cn } from "@/utils/cn";

type TextTag = "h1" | "h2" | "h3" | "p" | "span";

interface RevealTextProps {
  text: string;
  /** Substring of `text` whose words take `accentClassName`. */
  accent?: string;
  accentClassName?: string;
  as?: TextTag;
  id?: string;
  className?: string;
  /** Seconds before the first word starts moving. */
  delay?: number;
}

interface Word {
  text: string;
  accented: boolean;
}

/** Splits on spaces, marking the words that overlap the accent phrase. */
function splitWords(text: string, accent?: string): Word[] {
  const start = accent ? text.indexOf(accent) : -1;
  const end = start >= 0 && accent ? start + accent.length : -1;
  const words: Word[] = [];
  let offset = 0;

  for (const chunk of text.split(" ")) {
    if (chunk.length > 0) {
      words.push({
        text: chunk,
        accented: start >= 0 && offset < end && offset + chunk.length > start,
      });
    }
    offset += chunk.length + 1;
  }

  return words;
}

const WORD: Variants = {
  hidden: { y: "110%" },
  shown: { y: "0%", transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Display type that rises into place a word at a time as the block scrolls in.
 *
 * Each word sits in its own clipping mask so it appears to lift from behind the
 * line rather than fading in. The mask needs more room than the heading's tight
 * leading gives it, hence the padding — and the matching negative margin pulls
 * the line box back to where it would have been, so line spacing is unchanged.
 *
 * The split is decorative: the whole string is announced once from an `sr-only`
 * copy and the animated words are hidden from assistive tech, so a screen reader
 * reads a sentence rather than a list of words.
 */
export function RevealText({
  text,
  accent,
  accentClassName = "text-orange",
  as = "h2",
  id,
  className,
  delay = 0,
}: RevealTextProps) {
  const reduceMotion = useReducedMotion();
  const words = splitWords(text, accent);

  const spans = words.map((word, index) => (
    <Fragment key={`${word.text}-${index}`}>
      <span className="-my-[0.18em] inline-block overflow-hidden py-[0.18em] align-bottom">
        <motion.span
          variants={reduceMotion ? undefined : WORD}
          className={cn("inline-block", word.accented && accentClassName)}
        >
          {word.text}
        </motion.span>
      </span>
      {index < words.length - 1 ? " " : null}
    </Fragment>
  ));

  if (reduceMotion) {
    const Plain = as;
    return (
      <Plain id={id} className={className}>
        <span className="sr-only">{text}</span>
        <span aria-hidden>{spans}</span>
      </Plain>
    );
  }

  const Component = motion[as];

  return (
    <Component
      // Framer Motion server-renders the hidden transform on every word, so the
      // <noscript> override in the root layout has to be able to find them.
      data-reveal=""
      id={id}
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.055, delayChildren: delay }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden>{spans}</span>
    </Component>
  );
}
