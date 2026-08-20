import { AboutSection } from "@/components/features/AboutSection";
import { ChopLifeSection } from "@/components/features/ChopLifeSection";
import { ClosingCta } from "@/components/features/ClosingCta";
import { DownloadSection } from "@/components/features/DownloadSection";
import { EditorialSplit } from "@/components/features/EditorialSplit";
import { Hero } from "@/components/features/Hero";
import { MenuSection } from "@/components/features/MenuSection";
import { ProcessSection } from "@/components/features/ProcessSection";
import { ReviewsSection } from "@/components/features/ReviewsSection";
import { RewardsSection } from "@/components/features/RewardsSection";
import { StatsBand } from "@/components/features/StatsBand";
import { Ticker } from "@/components/features/Ticker";
import { SITE } from "@/data/site";

/** JSON-LD so search engines read the kitchen as a real, locatable restaurant. */
const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE.name,
  description: SITE.description,
  servesCuisine: "Nigerian",
  priceRange: "₦₦",
  url: SITE.url,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3 Dr Adewale Oshin Street",
    addressLocality: "Lekki Phase 1",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  openingHours: SITE.hoursSchema,
  telephone: SITE.phone,
  image: `${SITE.url}/og-card.png`,
  sameAs: [SITE.social.instagram, SITE.social.x, SITE.social.tiktok],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <Hero />
      <MenuSection />
      <StatsBand />
      <EditorialSplit />
      <ProcessSection />
      <Ticker />
      <RewardsSection />
      <ChopLifeSection />
      <AboutSection />
      <ReviewsSection />
      <DownloadSection />
      <ClosingCta />
    </>
  );
}
