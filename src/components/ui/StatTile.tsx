import type { Accent } from "@/types/menu";
import { ACCENT_BG, ACCENT_ON } from "@/utils/accent";
import { cn } from "@/utils/cn";

interface StatTileProps {
  value: string;
  label: string;
  accent: Accent;
}

/** Flat colour-block tile: oversized figure over a short label, centred. */
export function StatTile({ value, label, accent }: StatTileProps) {
  return (
    <div
      className={cn(
        "flex min-h-44 flex-col items-center justify-center gap-2 rounded-card p-6 text-center sm:min-h-52 sm:p-8",
        ACCENT_BG[accent],
        ACCENT_ON[accent],
      )}
    >
      <p className="font-display text-4xl leading-none uppercase sm:text-5xl lg:text-6xl">
        {value}
      </p>
      <p className="font-body text-xl font-bold opacity-90">{label}</p>
    </div>
  );
}
