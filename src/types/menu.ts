/** Colour tokens used to fill dish cards, category tiles and stat tiles. */
export type Accent = "orange" | "cream";

export type CategoryId =
  | "rice-bowl"
  | "pasta-bowl"
  | "proteins"
  | "breakfast"
  | "chop-life"
  | "extras"
  | "drinks"
  | "light-bites"
  | "puff-puff"
  | "coffee";

/** "featured" is a curated view rather than a real category on the dish record. */
export type FilterId = "featured" | CategoryId;

export interface Category {
  id: CategoryId;
  /** Label shown on filter pills and category tiles. */
  label: string;
  /** Longer label used on dish detail pages and card meta rows. */
  fullLabel: string;
  accent: Accent;
}

export interface Dish {
  slug: string;
  name: string;
  category: CategoryId;
  /** Menu-card and detail-page copy, taken from the live AjeboChops menu. */
  description: string;
  /** Naira, as a whole number. Formatted for display by `formatNaira`. */
  price: number;
  featured: boolean;
  accent: Accent;
  /** Deep link to this exact item on the AjeboChops ordering platform. */
  orderUrl: string;
}
