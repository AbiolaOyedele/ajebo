import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "outline-light" | "outline-dark" | "dark" | "light";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-orange text-white hover:bg-orange-dark",
  // For maroon grounds
  "outline-light": "border-2 border-white/70 text-white hover:bg-cream hover:text-maroon",
  // For cream grounds
  "outline-dark": "border-2 border-maroon/40 text-maroon hover:bg-maroon hover:text-white",
  dark: "bg-maroon text-white hover:bg-maroon-2",
  light: "bg-cream text-maroon hover:bg-cream/90",
};

/* Reference measures button padding at 14px 30px with a 12px radius; min-h keeps
   every control at or above the 44px touch target. */
const SIZES: Record<Size, string> = {
  md: "min-h-11 px-6 py-3 text-lg",
  lg: "min-h-[3.25rem] px-[30px] py-[14px] text-2xl",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

function classes({ variant = "primary", size = "lg", fullWidth, className }: BaseProps) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-btn font-display",
    "transition-colors duration-150 ease-out",
    VARIANTS[variant],
    SIZES[size],
    fullWidth && "w-full",
    className,
  );
}

function Inner({ iconLeft, children, iconRight }: BaseProps) {
  return (
    <>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </>
  );
}

type LinkButtonProps = BaseProps & { href: string; external?: boolean };

export function LinkButton(props: LinkButtonProps) {
  const { href, external, ...rest } = props;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes(props)}>
        <Inner {...rest} />
      </a>
    );
  }

  return (
    <Link href={href} className={classes(props)}>
      <Inner {...rest} />
    </Link>
  );
}

type ActionButtonProps = BaseProps & Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  variant,
  size,
  fullWidth,
  className,
  children,
  iconLeft,
  iconRight,
  ...buttonProps
}: ActionButtonProps) {
  const base = { variant, size, fullWidth, className, children, iconLeft, iconRight };
  return (
    <button type="button" {...buttonProps} className={classes(base)}>
      <Inner {...base} />
    </button>
  );
}
