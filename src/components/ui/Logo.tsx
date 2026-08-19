import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface LogoProps {
  className?: string;
  asLink?: boolean;
  size?: "sm" | "md" | "lg";
}

/* The supplied mark is 1163x833; these heights keep that ratio intact. */
const SIZES = {
  sm: { h: 44, w: 61 },
  md: { h: 60, w: 84 },
  lg: { h: 132, w: 184 },
} as const;

/** The AjeboChops brand mark, as supplied. */
export function Logo({ className, asLink = true, size = "md" }: LogoProps) {
  const { h, w } = SIZES[size];

  const mark = (
    <Image
      src="/ajebochops-logo.png"
      alt="AjeboChops"
      width={w}
      height={h}
      priority
      className="h-auto w-auto"
      style={{ height: h, width: "auto" }}
    />
  );

  if (!asLink) {
    return <span className={cn("inline-block", className)}>{mark}</span>;
  }

  return (
    <Link href="/" aria-label="AjeboChops — home" className={cn("shrink-0 leading-none", className)}>
      {mark}
    </Link>
  );
}
