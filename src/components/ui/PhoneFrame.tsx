import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
  /** Describes the mocked-up screen for assistive tech. */
  label: string;
}

/**
 * Handset mockup.
 *
 * Bezel, hardware buttons, Dynamic Island, screen glare and home indicator are
 * adapted from the cinematic-hero iPhone mockup. The proportions are the
 * original 280x580, expressed as an aspect ratio so the frame scales down on
 * small screens instead of overflowing.
 */
export function PhoneFrame({ children, className, label }: PhoneFrameProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "iphone-bezel relative aspect-[280/580] w-[15rem] shrink-0 rounded-[3rem] sm:w-[17.5rem]",
        className,
      )}
    >
      {/* Physical hardware buttons: silent switch, volume pair, side button */}
      <span aria-hidden className="hardware-btn absolute top-[21%] -left-[3px] z-0 h-[4.3%] w-[3px] rounded-l-md" />
      <span aria-hidden className="hardware-btn absolute top-[27.5%] -left-[3px] z-0 h-[7.8%] w-[3px] rounded-l-md" />
      <span aria-hidden className="hardware-btn absolute top-[38%] -left-[3px] z-0 h-[7.8%] w-[3px] rounded-l-md" />
      <span aria-hidden className="hardware-btn absolute top-[29%] -right-[3px] z-0 h-[12%] w-[3px] -scale-x-100 rounded-r-md" />

      {/* Screen */}
      <div className="absolute inset-[7px] overflow-hidden rounded-[2.5rem] bg-white">
        {/* Dynamic Island */}
        <div
          aria-hidden
          className="absolute top-[5px] left-1/2 z-50 flex h-[28px] w-[100px] -translate-x-1/2 items-center justify-end rounded-full bg-black px-3"
        >
          <span className="size-1.5 rounded-full bg-orange" />
        </div>

        <div className="h-full overflow-hidden pt-10">{children}</div>

        {/* Home indicator */}
        <span
          aria-hidden
          className="absolute bottom-2 left-1/2 z-40 h-[4px] w-[120px] -translate-x-1/2 rounded-full bg-maroon/25"
        />
      </div>
    </div>
  );
}
