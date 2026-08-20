"use client";

import { useMemo, useState } from "react";
import { CategoryFilterPills } from "./CategoryFilterPills";
import { DishCard } from "./DishCard";
import { Button } from "@/components/ui/Button";
import { filterDishes } from "@/data/menu";
import type { Dish, FilterId } from "@/types/menu";

interface MenuBrowserProps {
  /** Slug to leave out of the list — used on dish pages so a dish never lists itself. */
  excludeSlug?: string;
  initialFilter?: FilterId;
}

/**
 * Two rows of dishes, and a button for the rest.
 *
 * `COLLAPSED` is two rows of the widest grid — three columns at `lg`. The
 * middle breakpoint lays out two columns, where the same six dishes would run
 * to three rows, so the last two are hidden there in CSS rather than by
 * rendering a different number: the count that is right depends on the column
 * count, and only the stylesheet knows that.
 */
const COLLAPSED = 6;

/** Hides the fifth and sixth card in the two-column range, keeping it to two rows. */
const TWO_ROW_CLAMP = "md:max-lg:[&>li:nth-child(n+5)]:hidden";

/**
 * Category pills over the dish list. Filtering is entirely client-side — the
 * catalog ships with the page, so there is no fetch to wait on.
 *
 * On phones the list is a swipeable row rather than a tall column. From `md` up
 * it lays out as a grid.
 */
export function MenuBrowser({ excludeSlug, initialFilter = "featured" }: MenuBrowserProps) {
  const [filter, setFilter] = useState<FilterId>(initialFilter);
  const [showAll, setShowAll] = useState(false);

  const dishes: Dish[] = useMemo(() => {
    const all = filterDishes(filter);
    return excludeSlug ? all.filter((d) => d.slug !== excludeSlug) : all;
  }, [filter, excludeSlug]);

  /** A new category starts collapsed again — otherwise the list silently grows. */
  function changeFilter(next: FilterId) {
    setFilter(next);
    setShowAll(false);
  }

  const visible = showAll ? dishes : dishes.slice(0, COLLAPSED);
  const hasMore = dishes.length > COLLAPSED;

  return (
    <div className="flex flex-col gap-6">
      <CategoryFilterPills
        active={filter}
        onChange={changeFilter}
        label="Filter the menu by category"
      />

      {dishes.length === 0 ? (
        <p className="rounded-card border border-dashed border-white/20 p-10 text-center text-white/70">
          Nothing in this category yet. Try another one — the kitchen is always adding more.
        </p>
      ) : (
        <>
          <ul
            id="menu-dishes"
            className={`swipe-row md:grid-cols-2 lg:grid-cols-3 ${showAll ? "" : TWO_ROW_CLAMP}`}
          >
            {visible.map((dish) => (
              <li key={dish.slug}>
                <DishCard dish={dish} />
              </li>
            ))}
          </ul>

          <p className="text-center font-body text-xs text-white/50 md:hidden" aria-live="polite">
            Swipe for more — {visible.length} {visible.length === 1 ? "dish" : "dishes"}
          </p>

          {hasMore ? (
            <div className="flex justify-center">
              <Button
                variant="outline-light"
                size="md"
                onClick={() => setShowAll((open) => !open)}
                aria-expanded={showAll}
                aria-controls="menu-dishes"
              >
                {showAll ? "Show fewer" : `Show all ${dishes.length} dishes`}
              </Button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
