import { cn } from "@/utils/cn";
import { Reveal } from "./Reveal";
import { RevealText } from "./RevealText";

interface SectionHeadingProps {
  title: string;
  /** Substring of `title` carried in the brand orange. */
  accent?: string;
  subtitle?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
  /** Set when a section labels itself with `aria-labelledby`. */
  id?: string;
  className?: string;
}

/**
 * Display heading with a supporting line. The heading rises a word at a time as
 * the block scrolls in; the supporting line follows once the words have landed.
 */
export function SectionHeading({
  title,
  accent,
  subtitle,
  tone = "light",
  align = "center",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <RevealText
        as="h2"
        id={id}
        text={title}
        accent={accent}
        accentClassName={tone === "light" ? "text-white" : "text-orange"}
        className={cn(
          "font-display text-[2.5rem] leading-[0.96] text-balance uppercase",
          "sm:text-5xl md:text-[3.5rem] lg:text-[4rem]",
          tone === "light" ? "text-orange" : "text-maroon",
        )}
      />
      {subtitle ? (
        <Reveal delay={0.24}>
          <p
            className={cn(
              "max-w-xl font-body text-sm leading-6 text-pretty md:text-base",
              tone === "light" ? "text-white/70" : "text-maroon/70",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
