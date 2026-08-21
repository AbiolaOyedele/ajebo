"use client";

import { Check, Gift } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/utils/cn";

const TOTAL_SLOTS = 10;

/** Enough to feel like a press without the card jumping about. */
const PRESS = { scale: 0.9 };
const SETTLE = { type: "spring", stiffness: 520, damping: 26 } as const;

/**
 * Ten-slot loyalty card. Tapping a slot previews what the card looks like at
 * that point in the run. A toy, but it makes the reward maths tangible.
 *
 * The tenth slot always shows the gift rather than a number, filled or not: it
 * is the prize, not another stamp, and the app's own rewards screen marks it the
 * same way.
 */
export function StampCard() {
  const [collected, setCollected] = useState(7);
  const reduceMotion = useReducedMotion();
  const complete = collected === TOTAL_SLOTS;

  return (
    <div className="flex flex-col gap-5 rounded-card bg-white p-6 ring-1 ring-maroon/10 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-2xl leading-none font-black text-maroon uppercase">
          Your stamp card
        </h3>
        <p className="font-body text-sm font-semibold text-maroon/70 tabular-nums">
          {collected} / {TOTAL_SLOTS}
        </p>
      </div>

      <ul className="grid grid-cols-5 gap-2 sm:gap-3">
        {Array.from({ length: TOTAL_SLOTS }, (_, index) => {
          const slot = index + 1;
          const filled = slot <= collected;
          const isFinal = slot === TOTAL_SLOTS;
          const pops = filled && !reduceMotion;

          return (
            <li key={slot}>
              <motion.button
                type="button"
                onClick={() => setCollected(slot)}
                aria-pressed={filled}
                aria-label={
                  isFinal
                    ? "Preview the card with all ten stamps collected, which earns a free meal"
                    : `Preview the card with ${slot} of ${TOTAL_SLOTS} stamps collected`
                }
                whileTap={reduceMotion ? undefined : PRESS}
                transition={SETTLE}
                className={cn(
                  // Colours stay on a CSS transition; only the transform is
                  // Framer's, so the two never animate the same property.
                  "flex aspect-square w-full min-w-11 items-center justify-center rounded-full border-2 transition-colors duration-200",
                  filled
                    ? isFinal
                      ? "border-maroon bg-maroon text-white"
                      : "border-orange bg-orange text-white"
                    : "border-dashed border-maroon/30 text-maroon/50 hover:border-orange",
                )}
              >
                <motion.span
                  // Re-keying on the filled state is what makes this fire once,
                  // as the slot flips, rather than on every render.
                  key={filled ? "on" : "off"}
                  className="flex items-center justify-center"
                  // Only a stamp landing gets the pop. Clearing one back to a
                  // number should not animate: it is not an event, and starting
                  // an unfilled slot at 0.4 would leave it shrunken if the frame
                  // loop never ran, which is what happens in a background tab.
                  initial={pops ? { scale: 0.4, opacity: 0 } : false}
                  animate={pops ? { scale: 1, opacity: 1 } : undefined}
                  transition={
                    pops
                      ? // A slight cascade, so filling nine slots at once reads
                        // as the card stamping itself rather than one flash.
                        { ...SETTLE, delay: index * 0.025 }
                      : undefined
                  }
                >
                  {isFinal ? (
                    <Gift size={18} aria-hidden />
                  ) : filled ? (
                    <Check size={18} aria-hidden />
                  ) : (
                    <span aria-hidden className="font-display text-sm font-black">
                      {slot}
                    </span>
                  )}
                </motion.span>
              </motion.button>
            </li>
          );
        })}
      </ul>

      <p aria-live="polite" className="font-body text-sm text-maroon/70">
        {complete
          ? "Free meal earned. Redeem it on your next order."
          : `${TOTAL_SLOTS - collected} more ${TOTAL_SLOTS - collected === 1 ? "order" : "orders"} and the next plate is on us.`}
      </p>
      <p className="font-body text-xs text-maroon/70">Tap a stamp to preview.</p>
    </div>
  );
}
