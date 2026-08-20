"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { PhoneFrame } from "./PhoneFrame";
import { cn } from "@/utils/cn";

export interface PhoneScreen {
  src: string;
  /** Describes the screen, e.g. "the menu, listing rice and pasta bowls". */
  label: string;
}

interface PhoneCarouselProps {
  screens: readonly PhoneScreen[];
  /** Milliseconds each screen holds before the stack advances. */
  interval?: number;
  className?: string;
}

/**
 * Where a phone sits, given how far it is from the active one.
 *
 * Every phone is pinned to the stage's centre line, so each x carries the -50%
 * that centres it plus its own step out from there. Keeping the centring inside
 * the animated transform means one property owns horizontal position — a
 * `-translate-x-1/2` utility would sit in a second, separately-composed
 * property and make the maths here a half-truth.
 */
function placement(offset: number) {
  const step = (out: number) => `${-50 + out}%`;

  if (offset === 0) return { x: step(0), scale: 1, rotate: 0, opacity: 1, zIndex: 30 };
  if (Math.abs(offset) === 1) {
    return {
      x: step(offset > 0 ? 62 : -62),
      scale: 0.78,
      rotate: offset > 0 ? 7 : -7,
      opacity: 0.6,
      zIndex: 20,
    };
  }
  // Far enough back to be out of play — parked and faded so it has somewhere to
  // animate in from when it becomes a neighbour.
  return {
    x: step(offset > 0 ? 84 : -84),
    scale: 0.62,
    rotate: offset > 0 ? 10 : -10,
    opacity: 0,
    zIndex: 10,
  };
}

/** Shortest signed distance from `active` to `index` around the ring. */
function ringOffset(index: number, active: number, length: number): number {
  const forward = (index - active + length) % length;
  return forward > length / 2 ? forward - length : forward;
}

const PHONE_WIDTH = "w-[17.5rem] sm:w-[19.5rem] lg:w-[21.5rem]";

/**
 * How much of the handset the stage shows. A full frame at these widths runs
 * 36–44rem tall, which is more vertical space than the hero can spare, so the
 * stage stops short and the phones run out of the bottom of it.
 */
const STAGE_HEIGHT = "h-[21rem] sm:h-[24rem] lg:h-[27rem]";

/**
 * A shallow stack of handsets showing real captures of the AjeboChops app, with
 * the front one swapping on a timer.
 *
 * The handsets are cut off at the bottom rather than shown whole: at full
 * height they dominate the hero on every screen size. They hang from the top of
 * the stage and the stage clips them, so the crop lands at the same point on
 * each one.
 *
 * Sideways they are deliberately not clipped — the neighbours bleed past the
 * stage toward the screen edges, which is what makes the stack read as deep.
 * The hero section clips that, so nothing widens the page.
 *
 * The stack is decorative — it carries no control of its own, so it pauses on
 * hover and on keyboard focus and holds completely still for a visitor who has
 * asked for reduced motion.
 */
export function PhoneCarousel({ screens, interval = 3600, className }: PhoneCarouselProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || paused || screens.length < 2) return;
    const id = window.setInterval(
      () => setActive((current) => (current + 1) % screens.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [interval, paused, reduceMotion, screens.length]);

  return (
    <div
      className={cn("flex w-full flex-col items-center", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className={cn("relative w-full overflow-y-clip", STAGE_HEIGHT)}>
        {screens.map((screen, index) => {
          const offset = ringOffset(index, active, screens.length);
          const spot = placement(offset);
          const isActive = offset === 0;

          return (
            <motion.div
              key={screen.src}
              className="absolute top-0 left-1/2"
              style={{ zIndex: spot.zIndex }}
              initial={false}
              animate={
                reduceMotion
                  ? { x: spot.x, scale: spot.scale, rotate: 0, opacity: spot.opacity }
                  : { x: spot.x, scale: spot.scale, rotate: spot.rotate, opacity: spot.opacity }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
              }
            >
              <PhoneFrame
                bare
                widthClassName={PHONE_WIDTH}
                label={`The AjeboChops app showing ${screen.label}`}
                className={cn(!isActive && "pointer-events-none")}
              >
                <Image
                  src={screen.src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 312px, 344px"
                  className="object-cover"
                  priority={index === 0}
                />
              </PhoneFrame>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
