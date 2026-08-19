"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { CategoryFilterPills } from "./CategoryFilterPills";
import { DishCard } from "./DishCard";
import { filterDishes } from "@/data/menu";
import type { Dish, FilterId } from "@/types/menu";
import { cn } from "@/utils/cn";

interface MenuBrowserProps {
  /** Slug to leave out of the grid — used on dish pages so a dish never lists itself. */
  excludeSlug?: string;
  pageSize?: number;
  initialFilter?: FilterId;
}

/**
 * Category pills over a paginated dish grid. Filtering and paging are entirely
 * client-side — the catalog ships with the page, so there is no fetch to wait on.
 */
export function MenuBrowser({
  excludeSlug,
  pageSize = 9,
  initialFilter = "featured",
}: MenuBrowserProps) {
  const [filter, setFilter] = useState<FilterId>(initialFilter);
  const [page, setPage] = useState(0);

  const dishes: Dish[] = useMemo(() => {
    const all = filterDishes(filter);
    return excludeSlug ? all.filter((d) => d.slug !== excludeSlug) : all;
  }, [filter, excludeSlug]);

  const pageCount = Math.max(1, Math.ceil(dishes.length / pageSize));
  const safePage = Math.min(page, pageCount - 1);
  const visible = dishes.slice(safePage * pageSize, safePage * pageSize + pageSize);

  const changeFilter = (next: FilterId) => {
    setFilter(next);
    setPage(0);
  };

  const arrow =
    "flex size-12 items-center justify-center rounded-full bg-maroon-2 text-white ring-1 ring-white/25 transition-colors duration-150 hover:bg-orange disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-maroon-2";

  return (
    <div className="flex flex-col gap-8">
      <CategoryFilterPills active={filter} onChange={changeFilter} label="Filter the menu by category" />

      {visible.length === 0 ? (
        <p className="rounded-card border border-dashed border-white/20 p-10 text-center text-white/70">
          Nothing in this category yet. Try another one — the kitchen is always adding more.
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((dish) => (
            <li key={dish.slug} className="h-full">
              <DishCard dish={dish} />
            </li>
          ))}
        </ul>
      )}

      {pageCount > 1 ? (
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            className={cn(arrow)}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={safePage === 0}
            aria-label="Show previous dishes"
          >
            <ArrowLeft size={20} aria-hidden />
          </button>
          <p aria-live="polite" className="font-body text-sm font-semibold text-white/70 tabular-nums">
            {safePage + 1} / {pageCount}
          </p>
          <button
            type="button"
            className={cn(arrow)}
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={safePage >= pageCount - 1}
            aria-label="Show more dishes"
          >
            <ArrowRight size={20} aria-hidden />
          </button>
        </div>
      ) : null}
    </div>
  );
}
