import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  title: ReactNode;
  subtitle?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
}

/**
 * Eyebrow + display heading + supporting line.
 * Reference H2: Phudu 900, 64px / 62px line-height, sentence case, maroon.
 */
export function SectionHeading({
  title,
  subtitle,
  tone = "light",
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <h2
        className={cn(
          "font-display text-[2.5rem] leading-[0.96] text-balance uppercase",
          "sm:text-5xl md:text-[3.5rem] lg:text-[4rem]",
          tone === "light" ? "text-orange" : "text-maroon",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "max-w-xl font-body text-sm leading-6 text-pretty md:text-base",
            tone === "light" ? "text-white/70" : "text-maroon/70",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
