import type { CategoryId } from "@/types/menu";

/**
 * Photography.
 *
 * Every dish shot is AjeboChops' own, taken from the brand's ordering platform
 * and served locally. They share a house style — the branded bowl on a flat
 * orange ground — which is why cards sit the photo on a colour block.
 */
export interface Photo {
  src: string;
  alt: string;
}

const dish = (file: string, alt: string): Photo => ({ src: `/dishes/${file}.jpg`, alt });

/** Shared phrasing — these photos genuinely all look like this. */
const bowl = (what: string) => `${what} in an AjeboChops branded bowl on an orange background`;

/** Tile photo for each category in the hero strip. */
export const CATEGORY_PHOTO: Record<CategoryId, Photo> = {
  "rice-bowl": dish("prime-ministers-jollof", bowl("A bowl of smoky party jollof rice")),
  "pasta-bowl": dish("billionaires-penne-pasta", bowl("Creamy penne pasta with chicken and sausage")),
  proteins: dish("peppered-chicken", bowl("Fried chicken tossed in peppered sauce")),
  breakfast: dish("full-english", "A full English breakfast tray on an orange background"),
  "chop-life": dish("2l-prime-ministers-jollof", bowl("A two-litre party bowl of smoky jollof rice")),
  extras: dish("egg-sauce", bowl("A side bowl of Nigerian egg sauce")),
  drinks: dish("coca-cola", "A chilled bottle of Coca Cola on an orange background"),
  "light-bites": dish("beef-sliders", bowl("Beef sliders in brioche buns")),
  "puff-puff": dish("nutella-puff-puff", bowl("Golden puff puff drenched in Nutella")),
  coffee: dish("latte", "A branded AjeboChops takeaway cup of latte"),
};

/** Per-dish photography. Every slug in the catalog is covered. */
export const DISH_PHOTO: Record<string, Photo> = {
  // Rice Bowl
  "fusion-fried-rice": dish("fusion-fried-rice", bowl("Nigerian fusion fried rice with vegetables")),
  "island-shrimp-coconut-rice": dish("island-shrimp-coconut-rice", bowl("Coconut rice topped with shrimp")),
  "obas-native-rice": dish("obas-native-rice", bowl("Palm oil native rice with smoked fish")),
  "prime-ministers-jollof": dish("prime-ministers-jollof", bowl("A bowl of smoky party jollof rice")),

  // Pasta Bowl
  "ajebo-creamy-pasta": dish("ajebo-creamy-pasta", bowl("Creamy pasta with chicken and mushroom")),
  "billionaires-penne-pasta": dish("billionaires-penne-pasta", bowl("Creamy penne pasta with chicken and sausage")),
  "ikoyi-creme-de-tomate": dish("ikoyi-creme-de-tomate", bowl("Creamy tomato pasta with steak cubes")),
  "paparazzi-jollof-spaghetti": dish("paparazzi-jollof-spaghetti", bowl("Jollof spaghetti with grilled chicken")),

  // Proteins
  "croaker-fish": dish("croaker-fish", bowl("Fried croaker fish in peppered sauce")),
  "peppered-asun": dish("peppered-asun", bowl("Peppered asun — spicy grilled goat meat")),
  "peppered-beef": dish("peppered-beef", bowl("Fried beef coated in peppered sauce")),
  "peppered-chicken": dish("peppered-chicken", bowl("Fried chicken tossed in peppered sauce")),
  "spicy-grilled-turkey": dish("spicy-grilled-turkey", bowl("Spicy grilled turkey in pepper sauce")),

  // Breakfast
  "all-american": dish("all-american", "An American breakfast tray of pancakes, eggs and bacon"),
  "full-english": dish("full-english", "A full English breakfast tray on an orange background"),
  "naija-breakfast": dish("naija-breakfast", "A Nigerian breakfast tray of yam, sweet potato and plantain with sauces"),

  // Chop Life Bowl
  "2l-billionaire-penne-pasta": dish("2l-billionaire-penne-pasta", bowl("A two-litre bowl of penne pasta")),
  "2l-fusion-fried-rice": dish("2l-fusion-fried-rice", bowl("A two-litre party bowl of fusion fried rice")),
  "2l-island-shrimp-coconut-rice": dish("2l-island-shrimp-coconut-rice", bowl("A two-litre bowl of coconut rice with shrimp")),
  "2l-obas-native-rice": dish("2l-obas-native-rice", bowl("A two-litre bowl of palm oil native rice")),
  "2l-paparazzi-jollof-spaghetti": dish("2l-paparazzi-jollof-spaghetti", bowl("A two-litre bowl of jollof spaghetti")),
  "2l-prime-ministers-jollof": dish("2l-prime-ministers-jollof", bowl("A two-litre party bowl of smoky jollof rice")),

  // Extras
  "egg-sauce": dish("egg-sauce", bowl("A side bowl of Nigerian egg sauce")),
  "fish-sauce": dish("fish-sauce", bowl("A side bowl of freshly made fish sauce")),

  // Drinks
  "coca-cola": dish("coca-cola", "A chilled bottle of Coca Cola on an orange background"),
  fanta: dish("fanta", "A chilled bottle of Fanta on an orange background"),
  malt: dish("malt", "A chilled can of Malta Guinness on an orange background"),
  sprite: dish("sprite", "A chilled bottle of Sprite on an orange background"),
  water: dish("water", "A chilled bottle of table water on an orange background"),

  // Light Bites
  "beef-skewers": dish("beef-skewers", bowl("Grilled beef skewers with peppers and onions")),
  "beef-sliders": dish("beef-sliders", bowl("Beef sliders in brioche buns")),

  // Gourmet Puff Puff
  "cinnamon-sugar-puff-puff": dish("cinnamon-sugar-puff-puff", bowl("Golden puff puff dusted with cinnamon sugar")),
  "classic-puff-puff": dish("classic-puff-puff", bowl("Classic golden puff puff")),
  "crushed-oreo-puff-puff": dish("crushed-oreo-puff-puff", bowl("Puff puff with chocolate syrup and crushed Oreo")),
  "nutella-puff-puff": dish("nutella-puff-puff", bowl("Golden puff puff drenched in Nutella")),

  // Coffee & Hot Drinks
  cappuccino: dish("cappuccino", "A branded AjeboChops cup of cappuccino"),
  latte: dish("latte", "A branded AjeboChops takeaway cup of latte"),
  "milo-hot-chocolate": dish("milo-hot-chocolate", "A branded AjeboChops cup of Milo topped with whipped cream"),
};

/** Editorial and section photography, drawn from the same shoot. */
export const SCENE = {
  editorialLeft: DISH_PHOTO["2l-prime-ministers-jollof"],
  editorialRight: DISH_PHOTO["peppered-asun"],
  step1: DISH_PHOTO["fusion-fried-rice"],
  step2: DISH_PHOTO["beef-skewers"],
  step3: DISH_PHOTO["2l-obas-native-rice"],
  aboutPeople: DISH_PHOTO["peppered-asun"],
  aboutBabies: DISH_PHOTO["nutella-puff-puff"],
  aboutCommunity: DISH_PHOTO["2l-fusion-fried-rice"],
  aboutKitchen: DISH_PHOTO["croaker-fish"],
  chopOffice: DISH_PHOTO["2l-prime-ministers-jollof"],
  chopOwambe: DISH_PHOTO["2l-obas-native-rice"],
  chopHouse: DISH_PHOTO["2l-paparazzi-jollof-spaghetti"],
  app: DISH_PHOTO["island-shrimp-coconut-rice"],
} as const;
