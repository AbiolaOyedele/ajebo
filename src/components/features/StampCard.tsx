"use client";

import { Check, Flame } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/cn";

const TOTAL_SLOTS = 10;

/**
 * Ten-slot loyalty card. Tapping a slot previews what the card looks like at
 * that point in the run. A toy, but it makes the reward maths tangible.
 */
export function StampCard() {
  const [collected, setCollected] = useState(7);
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

          return (
            <li key={slot}>
              <button
                type="button"
                onClick={() => setCollected(slot)}
                aria-pressed={filled}
                aria-label={
                  isFinal
                    ? "Preview the card with all ten stamps collected, which earns a free meal"
                    : `Preview the card with ${slot} of ${TOTAL_SLOTS} stamps collected`
                }
                className={cn(
                  "flex aspect-square w-full min-w-11 items-center justify-center rounded-full border-2 transition-all duration-200",
                  filled
                    ? isFinal
                      ? "border-maroon bg-maroon text-white"
                      : "border-orange bg-orange text-white"
                    : "border-dashed border-maroon/30 text-maroon/50 hover:border-orange",
                )}
              >
                {filled ? (
                  isFinal ? (
                    <Flame size={18} aria-hidden />
                  ) : (
                    <Check size={18} aria-hidden />
                  )
                ) : (
                  <span aria-hidden className="font-display text-sm font-black">
                    {slot}
                  </span>
                )}
              </button>
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
