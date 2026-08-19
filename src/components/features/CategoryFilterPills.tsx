"use client";

import { FILTERS } from "@/data/menu";
import type { FilterId } from "@/types/menu";
import { cn } from "@/utils/cn";

interface CategoryFilterPillsProps {
  active: FilterId;
  onChange: (filter: FilterId) => void;
  /** Announced to screen readers, e.g. "Filter the menu". */
  label: string;
}

/**
 * Horizontally scrollable pill row. On narrow screens it scrolls instead of
 * wrapping into a tall stack, matching how the app presents categories.
 */
export function CategoryFilterPills({ active, onChange, label }: CategoryFilterPillsProps) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className="-mx-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0"
    >
      {FILTERS.map((filter) => {
        const isActive = filter.id === active;
        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.id)}
            className={cn(
              // Reference sets these in the display face at medium weight, 16px.
              "min-h-11 shrink-0 snap-start rounded-full px-5 font-display text-base font-medium whitespace-nowrap",
              "transition-colors duration-150",
              isActive
                ? "bg-cream text-maroon"
                : "bg-maroon-2 text-white ring-1 ring-white/20 hover:bg-maroon-2/70",
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
