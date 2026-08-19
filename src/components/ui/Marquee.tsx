import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop. Longer = slower. */
  duration?: number;
  pauseOnHover?: boolean;
  className?: string;
  /** Spacing between repeated items. */
  gapClassName?: string;
}

/**
 * Seamless infinite horizontal scroll.
 *
 * The track holds two identical copies of `children` and translates by exactly
 * -50%, so the loop point is invisible. The duplicate is `aria-hidden` and the
 * whole track pauses under `prefers-reduced-motion` (handled in globals.css).
 */
export function Marquee({
  children,
  duration = 40,
  pauseOnHover = true,
  className,
  gapClassName = "gap-4 md:gap-6",
}: MarqueeProps) {
  return (
    <div
      className={cn("group relative w-full overflow-hidden", className)}
      // The track is decorative motion; the content itself stays readable.
      data-marquee=""
    >
      <div
        className={cn(
          "flex w-max animate-[marquee_var(--marquee-duration)_linear_infinite] will-change-transform",
          gapClassName,
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className={cn("flex shrink-0 items-stretch", gapClassName)}>{children}</div>
        <div className={cn("flex shrink-0 items-stretch", gapClassName)} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
