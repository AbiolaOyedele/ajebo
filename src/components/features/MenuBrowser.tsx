"use client";

import { useMemo, useState } from "react";
import { CategoryFilterPills } from "./CategoryFilterPills";
import { DishCard } from "./DishCard";
import { filterDishes } from "@/data/menu";
import type { Dish, FilterId } from "@/types/menu";

interface MenuBrowserProps {
  /** Slug to leave out of the list — used on dish pages so a dish never lists itself. */
  excludeSlug?: string;
  initialFilter?: FilterId;
}

/**
 * Category pills over the dish list. Filtering is entirely client-side — the
 * catalog ships with the page, so there is no fetch to wait on.
 *
 * On phones the list is a swipeable row rather than a tall column: the largest
 * filtered set is twelve dishes, which is a long way to scroll past on a small
 * screen. From `md` up it lays out as a grid. Pagination is gone with it — at
 * twelve items maximum a desktop grid is only four rows.
 */
export function MenuBrowser({ excludeSlug, initialFilter = "featured" }: MenuBrowserProps) {
  const [filter, setFilter] = useState<FilterId>(initialFilter);

  const dishes: Dish[] = useMemo(() => {
    const all = filterDishes(filter);
    return excludeSlug ? all.filter((d) => d.slug !== excludeSlug) : all;
  }, [filter, excludeSlug]);

  return (
    <div className="flex flex-col gap-6">
      <CategoryFilterPills
        active={filter}
        onChange={setFilter}
        label="Filter the menu by category"
      />

      {dishes.length === 0 ? (
        <p className="rounded-card border border-dashed border-white/20 p-10 text-center text-white/70">
          Nothing in this category yet. Try another one — the kitchen is always adding more.
        </p>
      ) : (
        <>
          <ul className="swipe-row">
            {dishes.map((dish) => (
              <li key={dish.slug} className="h-full">
                <DishCard dish={dish} />
              </li>
            ))}
          </ul>
          <p className="font-body text-xs text-white/50 md:hidden" aria-live="polite">
            Swipe for more — {dishes.length}{" "}
            {dishes.length === 1 ? "dish" : "dishes"}
          </p>
        </>
      )}
    </div>
  );
}
