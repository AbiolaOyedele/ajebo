import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { PhotoCrossfade } from "@/components/ui/PhotoCrossfade";
import { PEOPLE_PHOTOS, SCENE } from "@/data/images";

/** `photos` cycles in place; a single-entry list simply sits still. */
const ABOUT_TILES = [
  { caption: "Our People", photos: PEOPLE_PHOTOS },
  { caption: "Ajebo Babies", photos: [SCENE.aboutBabies] },
  { caption: "Community", photos: [SCENE.aboutCommunity] },
  { caption: "Our Kitchen", photos: [SCENE.aboutKitchen] },
];

const TILE_SIZES = "(max-width: 640px) 45vw, (max-width: 1024px) 44vw, 22vw";

const ABOUT_STATS = [
  { value: "5,000+", label: "Happy customers" },
  { value: "4.9★", label: "App rating" },
  { value: "30min", label: "Avg delivery" },
];

export function AboutSection() {
  return (
    <section id="about" className="band-cream section-y scroll-mt-32">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ul className="grid grid-cols-2 gap-3 sm:gap-4">
            {ABOUT_TILES.map((tile) => (
              <li key={tile.caption}>
                <figure className="relative aspect-square overflow-hidden rounded-card">
                  <PhotoCrossfade photos={tile.photos} sizes={TILE_SIZES} />
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-maroon via-maroon/70 to-transparent"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-3 font-body text-xs font-bold tracking-[0.12em] text-white uppercase sm:p-4 sm:text-sm">
                    {tile.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6">
          <RevealText
            text="Built by community, served with love"
            accent="love"
            className="font-display text-[2.35rem] leading-[0.95] font-black text-maroon text-balance uppercase sm:text-5xl lg:text-[3.75rem]"
          />

          <p className="text-base leading-relaxed text-maroon/70 text-pretty">
            AjeboChops is more than a kitchen — it&apos;s a community. Women-led and family-driven, we
            bring together the people who cook, the people who deliver, and the people who gather
            around the table. Everyone has a seat here.
          </p>

          <p className="text-base leading-relaxed text-maroon/70 text-pretty">
            Every recipe carries a story — handed down through generations and perfected by the hands
            that raised us. When you order from AjeboChops, you&apos;re not just eating. You&apos;re
            joining a family.
          </p>

          <blockquote className="border-l-4 border-orange pl-5 font-display text-xl leading-tight font-black text-maroon italic uppercase sm:text-2xl">
            One kitchen. One community. One plate at a time.
          </blockquote>

          <ul className="grid grid-cols-3 gap-4 pt-6">
            {ABOUT_STATS.map((stat) => (
              <li key={stat.label} className="flex flex-col gap-1">
                <span className="font-display text-2xl leading-none font-black text-orange sm:text-3xl">
                  {stat.value}
                </span>
                <span className="font-body text-xs text-maroon/70 sm:text-sm">{stat.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
