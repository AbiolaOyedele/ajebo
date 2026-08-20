import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/ui/Marquee";
import { CATEGORIES } from "@/data/menu";
import { CATEGORY_PHOTO } from "@/data/images";
import { ACCENT_BG, ACCENT_ON } from "@/utils/accent";
import { cn } from "@/utils/cn";

/** Drinks are not a craving to browse by, so they stay out of the hero line-up. */
const HERO_CATEGORIES = CATEGORIES.filter((c) => c.id !== "drinks");

/**
 * Continuously scrolling category tiles.
 *
 * Proportions follow the reference (a colour card holding an inset photo at a
 * 279:322 ratio with the label on the coloured ground beneath), scaled up 50%.
 * Padding and radii stay absolute, since percentages would resolve against the
 * marquee track rather than the tile.
 */
export function CategoryStrip() {
  const tiles = HERO_CATEGORIES.map((category) => {
    const photo = CATEGORY_PHOTO[category.id];

    return (
      <Link
        key={category.id}
        href="/#menu"
        aria-label={`Browse ${category.fullLabel} on the menu`}
        className={cn(
          "group flex shrink-0 flex-col overflow-hidden",
          "w-[15.75rem] p-[10px] sm:w-[21rem] sm:p-[13px] lg:w-[28.5rem] lg:p-[18px]",
          // Concentric with the photo below: 16−10=6, 22−13=9, 30−18=12.
          "rounded-[16px] sm:rounded-[22px] lg:rounded-[30px]",
          ACCENT_BG[category.accent],
        )}
      >
        <div className="relative aspect-[279/322] w-full shrink-0 overflow-hidden rounded-[6px] sm:rounded-[9px] lg:rounded-[12px]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 252px, (max-width: 1024px) 336px, 456px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <p
          className={cn(
            "flex flex-1 items-center justify-center pt-[0.3em] text-center font-display leading-[1.15]",
            "text-[2rem] sm:text-[2.7rem] lg:text-[3.6rem]",
            ACCENT_ON[category.accent],
          )}
        >
          {category.label}
        </p>
      </Link>
    );
  });

  return (
    <Marquee duration={75} gapClassName="gap-1.5 sm:gap-2">
      {tiles}
    </Marquee>
  );
}
