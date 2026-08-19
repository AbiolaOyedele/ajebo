import type { Category, CategoryId, Dish, FilterId } from "@/types/menu";

/**
 * The AjeboChops catalog.
 *
 * Every item, price and description below is transcribed from the brand's live
 * ordering platform (ajebochops.daash.restaurant) — nothing here is invented.
 * Prices are the platform's "From" figures, which are the base price before
 * size or side options are chosen.
 */
export const CATEGORIES: readonly Category[] = [
  { id: "rice-bowl", label: "Rice Bowl", fullLabel: "Rice Bowl", accent: "orange" },
  { id: "pasta-bowl", label: "Pasta Bowl", fullLabel: "Pasta Bowl", accent: "cream" },
  { id: "proteins", label: "Proteins", fullLabel: "Proteins", accent: "orange" },
  { id: "breakfast", label: "Breakfast", fullLabel: "Breakfast", accent: "cream" },
  { id: "chop-life", label: "Chop Life", fullLabel: "Chop Life Bowl", accent: "orange" },
  { id: "extras", label: "Extras", fullLabel: "Extras", accent: "cream" },
  { id: "drinks", label: "Drinks", fullLabel: "Drinks", accent: "orange" },
  { id: "light-bites", label: "Light Bites", fullLabel: "Light Bites", accent: "cream" },
  { id: "puff-puff", label: "Puff Puff", fullLabel: "Gourmet Puff Puff", accent: "orange" },
  { id: "coffee", label: "Hot Drinks", fullLabel: "Coffee & Hot Drinks", accent: "cream" },
] as const;

export const FILTERS: readonly { id: FilterId; label: string }[] = [
  { id: "featured", label: "Featured" },
  ...CATEGORIES.map((c) => ({ id: c.id as FilterId, label: c.label })),
] as const;

export const DISHES: readonly Dish[] = [
  // ---- Rice Bowl -----------------------------------------------------------
  {
    slug: "fusion-fried-rice",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=694bdae6b5a0e16eff2f1824&product=fusion-fried-rice",
    name: "Fusion Fried Rice",
    category: "rice-bowl",
    description: "Served with plantain or coleslaw.",
    price: 8500,
    featured: true,
    accent: "orange",
  },
  {
    slug: "island-shrimp-coconut-rice",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=694bdb39e8b756c895b03e45&product=island-shrimp-coconut-rice",
    name: "Island Shrimp Coconut Rice",
    category: "rice-bowl",
    description: "Served with plantain or coleslaw.",
    price: 9500,
    featured: true,
    accent: "cream",
  },
  {
    slug: "obas-native-rice",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=694bdb8bb5a0e16eff2f20ce&product=oba%27s-native-rice",
    name: "Oba's Native Rice",
    category: "rice-bowl",
    description: "Served with plantain or coleslaw.",
    price: 7000,
    featured: false,
    accent: "orange",
  },
  {
    slug: "prime-ministers-jollof",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=694bda89b5a0e16eff2f0c86&product=prime-minister%27s-jollof",
    name: "Prime Minister's Jollof",
    category: "rice-bowl",
    description: "Served with either plantain or coleslaw.",
    price: 8000,
    featured: true,
    accent: "cream",
  },

  // ---- Pasta Bowl ----------------------------------------------------------
  {
    slug: "ajebo-creamy-pasta",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=694bdbd5b5a0e16eff2f26ce&product=ajebo-creamy-pasta",
    name: "Ajebo Creamy Pasta",
    category: "pasta-bowl",
    description: "Served with chicken and mushroom.",
    price: 9000,
    featured: false,
    accent: "orange",
  },
  {
    slug: "billionaires-penne-pasta",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=694bddfee8b756c895b06c36&product=billionare%27s-penne-pasta",
    name: "Billionare's Penne Pasta",
    category: "pasta-bowl",
    description: "Served with chicken and sausage.",
    price: 8000,
    featured: true,
    accent: "cream",
  },
  {
    slug: "ikoyi-creme-de-tomate",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=694bdc05e8b756c895b052da&product=ikoyi-creme-de-tomate",
    name: "Ikoyi Creme De Tomate",
    category: "pasta-bowl",
    description: "Served with steak cubes.",
    price: 8500,
    featured: false,
    accent: "orange",
  },
  {
    slug: "paparazzi-jollof-spaghetti",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=694bdc60e8b756c895b0564c&product=paparazzi-jollof-spaghetti",
    name: "Paparazzi Jollof Spaghetti",
    category: "pasta-bowl",
    description: "Served with grilled chicken slices.",
    price: 7500,
    featured: false,
    accent: "cream",
  },

  // ---- Proteins ------------------------------------------------------------
  {
    slug: "croaker-fish",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=694be04ae8b756c895b09257&product=croaker-fish",
    name: "Croaker Fish",
    category: "proteins",
    description: "Fried croaker fish tossed in peppered sauce.",
    price: 4000,
    featured: false,
    accent: "orange",
  },
  {
    slug: "peppered-asun",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=694bdfd4b5a0e16eff2f6b5a&product=peppered-asun",
    name: "Peppered Asun",
    category: "proteins",
    description: "Peppered asun.",
    price: 4000,
    featured: true,
    accent: "cream",
  },
  {
    slug: "peppered-beef",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=694bde7ce8b756c895b07510&product=peppered-beef",
    name: "Peppered Beef",
    category: "proteins",
    description: "Fried beef coated in peppered sauce.",
    price: 2000,
    featured: false,
    accent: "orange",
  },
  {
    slug: "peppered-chicken",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=694be015e8b756c895b08ec5&product=peppered-chicken",
    name: "Peppered Chicken",
    category: "proteins",
    description: "Fried chicken tossed in peppered sauce.",
    price: 3000,
    featured: true,
    accent: "cream",
  },
  {
    slug: "spicy-grilled-turkey",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=694bde4eb5a0e16eff2f4e13&product=spicy-grilled-turkey",
    name: "Spicy Grilled Turkey",
    category: "proteins",
    description: "Spicy grilled turkey coated in pepper sauce.",
    price: 3500,
    featured: false,
    accent: "orange",
  },

  // ---- Breakfast -----------------------------------------------------------
  {
    slug: "all-american",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a5fe9a4be657f79b0443e11&product=all-american",
    name: "All American",
    category: "breakfast",
    description: "The American breakfast plate.",
    price: 8500,
    featured: false,
    accent: "cream",
  },
  {
    slug: "full-english",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a5fed89be657f79b044434f&product=full-english",
    name: "Full English",
    category: "breakfast",
    description:
      "Toast, served with sides of eggs, sausage, bacon rashers, garlic and herb mushrooms, baked beans, grilled tomatoes and butter.",
    price: 9500,
    featured: false,
    accent: "orange",
  },
  {
    slug: "naija-breakfast",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a5fee55be657f79b04443ae&product=naija-breakfast",
    name: "Naija Breakfast",
    category: "breakfast",
    description:
      "Rich Nigerian all inclusive variety breakfast of champions. Contains a portion of boiled yam, sweet potatoes and plantain, and a side of fish and egg sauce.",
    price: 7000,
    featured: true,
    accent: "cream",
  },

  // ---- Chop Life Bowl ------------------------------------------------------
  {
    slug: "2l-billionaire-penne-pasta",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a07968e7a77dc40d38e6bd9&product=2l-billionaire-penne-pasta",
    name: "2L Billionaire Penne Pasta",
    category: "chop-life",
    description:
      "2L bowl of indulgent penne pasta made with rich sauces and premium flavors.",
    price: 25000,
    featured: false,
    accent: "orange",
  },
  {
    slug: "2l-fusion-fried-rice",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a0797167a77dc40d38e78b2&product=2l-fusion-fried-rice",
    name: "2L Fusion Fried Rice",
    category: "chop-life",
    description:
      "2L bowl of flavor-packed fried rice mixed with colorful veggies and a tasty blend of seasonings.",
    price: 29000,
    featured: false,
    accent: "cream",
  },
  {
    slug: "2l-island-shrimp-coconut-rice",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a1ee3ec677447a99843f995&product=2l-island-shrimp-coconut-rice",
    name: "2L Island Shrimp Coconut Rice",
    category: "chop-life",
    description:
      "2L bowl creamy coconut rice infused with island flavors and topped with juicy shrimp.",
    price: 30000,
    featured: true,
    accent: "orange",
  },
  {
    slug: "2l-obas-native-rice",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a07987a09fa8a206da02afa&product=2l-oba%27s-native-rice",
    name: "2L Oba's Native Rice",
    category: "chop-life",
    description:
      "2L bowl of traditional native rice cooked in a rich local sauce with authentic Nigerian flavors.",
    price: 24500,
    featured: false,
    accent: "cream",
  },
  {
    slug: "2l-paparazzi-jollof-spaghetti",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a07996009fa8a206da045b5&product=2l-paparazzi-jollof-spaghetti",
    name: "2L Paparazzi Jollof Spaghetti",
    category: "chop-life",
    description:
      "2L bowl of spaghetti cooked in flavorful jollof sauce with a delicious spicy twist.",
    price: 25000,
    featured: false,
    accent: "orange",
  },
  {
    slug: "2l-prime-ministers-jollof",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a0797ab09fa8a206da015e6&product=2l-prime-minister%27s-jollof",
    name: "2L Prime Minister's Jollof",
    category: "chop-life",
    description:
      "2L bowl of rich and smoky party-style jollof rice cooked with bold spices and deep flavor.",
    price: 28500,
    featured: true,
    accent: "cream",
  },

  // ---- Extras --------------------------------------------------------------
  {
    slug: "egg-sauce",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a0a42e47a77dc40d3de84a7&product=egg-sauce",
    name: "Egg Sauce",
    category: "extras",
    description: "Extra bowl of flavorful egg sauce.",
    price: 2500,
    featured: false,
    accent: "orange",
  },
  {
    slug: "fish-sauce",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a0a431509fa8a206defc63f&product=fish-sauce",
    name: "Fish Sauce",
    category: "extras",
    description: "Extra bowl of flavorful fish sauce.",
    price: 2500,
    featured: false,
    accent: "cream",
  },

  // ---- Drinks --------------------------------------------------------------
  {
    slug: "coca-cola",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6966487dadace905730265d9&product=coca-cola",
    name: "Coca Cola",
    category: "drinks",
    description: "50cl Coca Cola drink.",
    price: 800,
    featured: false,
    accent: "orange",
  },
  {
    slug: "fanta",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6966489e2672f4f26253d0bc&product=fanta",
    name: "Fanta",
    category: "drinks",
    description: "50cl Fanta drink.",
    price: 800,
    featured: false,
    accent: "cream",
  },
  {
    slug: "malt",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=696648cbadace9057302692c&product=malt",
    name: "Malt",
    category: "drinks",
    description: "Canned malt.",
    price: 1200,
    featured: false,
    accent: "orange",
  },
  {
    slug: "sprite",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=698a05a1f94f687f762c9a30&product=sprite",
    name: "Sprite",
    category: "drinks",
    description: "Sprite.",
    price: 800,
    featured: false,
    accent: "cream",
  },
  {
    slug: "water",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=696648f22672f4f26253d750&product=water",
    name: "Water",
    category: "drinks",
    description: "Bottle water.",
    price: 600,
    featured: false,
    accent: "orange",
  },

  // ---- Light Bites ---------------------------------------------------------
  {
    slug: "beef-skewers",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a5fef0cbe657f79b044450e&product=beef-skewers",
    name: "Beef Skewers",
    category: "light-bites",
    description:
      "Tender beef steak chunks marinated and grilled to perfection in a rich and spicy herb blend, layered with a mix of grilled sweet peppers and onions.",
    price: 5500,
    featured: false,
    accent: "cream",
  },
  {
    slug: "beef-sliders",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a5ff018be657f79b04446b2&product=beef-sliders",
    name: "Beef Sliders",
    category: "light-bites",
    description:
      "Juicy beef patties topped with american cheese, caramelized onions, fresh lettuce and our special house burger sauce nestled in soft brioche buns.",
    price: 5500,
    featured: true,
    accent: "orange",
  },

  // ---- Gourmet Puff Puff ---------------------------------------------------
  {
    slug: "cinnamon-sugar-puff-puff",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a5ff274be657f79b044487f&product=cinnamon-sugar-puff-puff",
    name: "Cinnamon Sugar Puff Puff",
    category: "puff-puff",
    description:
      "Super soft and fluffy deep fried golden clouds of dough coated in cinnamon powder.",
    price: 4500,
    featured: false,
    accent: "cream",
  },
  {
    slug: "classic-puff-puff",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a5ff216be657f79b044483a&product=classic-puff-puff",
    name: "Classic Puff Puff",
    category: "puff-puff",
    description: "Super soft and fluffy deep fried golden clouds of dough.",
    price: 3000,
    featured: false,
    accent: "orange",
  },
  {
    slug: "crushed-oreo-puff-puff",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a5ff3d5be657f79b0444918&product=crushed-oreo-puff-pufff",
    name: "Crushed Oreo Puff Pufff",
    category: "puff-puff",
    description:
      "Super soft and fluffy deep fried golden clouds of dough drenched in your favorite chocolate syrup and oreo.",
    price: 4500,
    featured: false,
    accent: "cream",
  },
  {
    slug: "nutella-puff-puff",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a5ff2e2be657f79b04448c0&product=nutella-puff-puff",
    name: "Nutella Puff Puff",
    category: "puff-puff",
    description:
      "Super soft and fluffy deep fried golden clouds of dough drenched in your favorite Nutella butter.",
    price: 4500,
    featured: true,
    accent: "orange",
  },

  // ---- Coffee & Hot Drinks -------------------------------------------------
  {
    slug: "cappuccino",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a607878be657f79b044a273&product=cappuccino",
    name: "Cappuccino",
    category: "coffee",
    description: "Hot cappuccino drink.",
    price: 4500,
    featured: false,
    accent: "cream",
  },
  {
    slug: "latte",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a6078eebe657f79b044a32f&product=latte",
    name: "Latte",
    category: "coffee",
    description: "Hot latte drink.",
    price: 4500,
    featured: false,
    accent: "orange",
  },
  {
    slug: "milo-hot-chocolate",
    orderUrl:
      "https://ajebochops.daash.restaurant/?productId=6a607977be657f79b044a38a&product=milo-hot-chocolate",
    name: "Milo Hot Chocolate",
    category: "coffee",
    description: "Milo hot chocolate drink topped with whipped cream.",
    price: 2500,
    featured: true,
    accent: "cream",
  },
] as const;

export function getCategory(id: CategoryId): Category {
  const found = CATEGORIES.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown menu category: ${id}`);
  return found;
}

export function getDish(slug: string): Dish | undefined {
  return DISHES.find((d) => d.slug === slug);
}

export function filterDishes(filter: FilterId): Dish[] {
  if (filter === "featured") return DISHES.filter((d) => d.featured);
  return DISHES.filter((d) => d.category === filter);
}
