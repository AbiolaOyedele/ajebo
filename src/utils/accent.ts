import type { Accent } from "@/types/menu";

/**
 * Tile and card fills: brand orange alternating with a warm cream. Pure white
 * is not used as a fill because most light sections are already white, which
 * would leave the tile with no visible edge.
 * Tailwind only sees class names written out in full, so both are listed.
 */
export const ACCENT_BG: Record<Accent, string> = {
  orange: "bg-orange",
  // Hairline so a cream fill still has an edge when it sits on the cream band.
  cream: "bg-cream-2 ring-1 ring-maroon/15",
};

/** Text colour for each fill. */
export const ACCENT_ON: Record<Accent, string> = {
  orange: "text-white",
  cream: "text-maroon",
};
