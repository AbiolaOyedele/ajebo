import type { Accent } from "./menu";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface RewardTier {
  id: string;
  name: string;
  points: number;
  accent: Accent;
}

export interface LegalSection {
  heading: string;
  /** Each paragraph may carry a bold lead-in label, e.g. "Order Information:". */
  paragraphs: { lead?: string; text: string }[];
}

export interface LegalPage {
  slug: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}
