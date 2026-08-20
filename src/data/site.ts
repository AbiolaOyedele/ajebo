import type { Accent } from "@/types/menu";

export const SITE = {
  name: "AjeboChops",
  legalName: "AjeboChops Ltd.",
  tagline: "Authentic Nigerian cuisine, delivered with fire, flavour and soul.",
  description:
    "Authentic Nigerian cuisine from our kitchen to your door. Jollof, native rice, asun, gourmet puff puff and more, hot in 30 to 50 minutes across Lagos.",
  url: "https://www.ajebochops.com",
  email: "support@ajebochops.com",
  altEmail: "ajebochops@gmail.com",
  address: "3 Dr Adewale Oshin Street, Lekki Phase 1, Lagos, Nigeria",
  hours: "Monday – Sunday, 9:00 AM – 1:00 AM",
  /** The same window in schema.org form. Keep it in step with `hours`. */
  hoursSchema: "Mo-Su 09:00-01:00",
  phone: "+234 707 063 5617",
  appStoreUrl:
    "https://apps.apple.com/ng/app/ajebo-chops-food-delivery/id6761935648",
  playStoreUrl: "https://play.google.com/store/search?q=ajebo%20chops",
  orderOnlineUrl: "https://ajebochops.daash.restaurant/0",
  social: {
    instagram: "https://www.instagram.com/ajebochops",
    x: "https://x.com/ajebochops",
    tiktok: "https://www.tiktok.com/@ajebochops",
  },
  firstOrderDiscount: "₦2,500",
  deliveryWindow: "30 to 50",
} as const;

/**
 * Real captures of the AjeboChops app, shown in the hero handsets. These are
 * the shipped screens rather than mocked-up markup, so the hero shows what the
 * visitor actually downloads.
 */
export const APP_SCREENS: readonly { src: string; label: string }[] = [
  { src: "/app/screen-welcome.jpg", label: "the sign-in screen" },
  { src: "/app/screen-rewards.jpg", label: "the rewards screen and free meal progress" },
  { src: "/app/screen-home.jpg", label: "the home screen, with today's picks" },
];

/** The word that swaps in and out of the hero headline. */
export const HERO_WORDS = ["home", "goodness", "points", "family"] as const;

export const NAV_LINKS = [
  { label: "Menu", href: "/#menu" },
  { label: "Rewards", href: "/#rewards" },
  { label: "Chop life", href: "/#chop-life" },
  { label: "About", href: "/#about" },
  { label: "Find us", href: "/#find-us" },
] as const;

export const STAT_TILES: readonly {
  value: string;
  label: string;
  accent: Accent;
}[] = [
  { value: "5,000+", label: "Happy customers", accent: "orange" },
  { value: "4.9★", label: "App Store rating", accent: "cream" },
  { value: "30min", label: "Average delivery", accent: "orange" },
  { value: "100%", label: "Cooked to order", accent: "cream" },
];

export const PROCESS_STEPS = [
  {
    step: "Step 1",
    title: "Pick your chops",
    body: "Browse the full kitchen in the app, load up your bowl and check out in three taps.",
    tag: "Browse",
    accent: "orange" as Accent,
  },
  {
    step: "Step 2",
    title: "We cook it fresh",
    body: "Nothing sits under a lamp. Your order goes on the fire the moment it lands.",
    tag: "Cook",
    accent: "cream" as Accent,
  },
  {
    step: "Step 3",
    title: "Eat like family",
    body: "Hot at your door in 30 to 50 minutes. Gather round. No plate left behind.",
    tag: "Enjoy",
    accent: "orange" as Accent,
  },
] as const;

export const TICKER_ITEMS = [
  "₦2,500 off your first order, every new Ajebo Baby",
  "Stamp it up: 1 stamp per order, every 10th meal free",
  "Points pay: 1 point for every ₦1,000 you spend",
  "Chop life: 2L party bowls that feed the whole compound",
] as const;

export const REWARD_FEATURES = [
  {
    title: "Food Stamps",
    detail: "1 stamp per order",
    body: "Every single order drops a stamp on your card. No minimum spend, no small print.",
    accent: "cream" as Accent,
  },
  {
    title: "Loyalty Points",
    detail: "1pt / ₦1,000 spent",
    body: "Points stack quietly in the background, then buy you drinks, delivery and desserts.",
    accent: "orange" as Accent,
  },
  {
    title: "Free Meal",
    detail: "Every 10th order",
    body: "Fill the card and the tenth plate is on the house. Then the card resets and you go again.",
    accent: "cream" as Accent,
  },
] as const;



