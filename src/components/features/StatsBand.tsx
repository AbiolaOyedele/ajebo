import { Reveal } from "@/components/ui/Reveal";
import { StatTile } from "@/components/ui/StatTile";
import { STAT_TILES } from "@/data/site";

/**
 * The four trust figures. On phones they run as one swipeable line rather than
 * four stacked tiles; from `md` up they sit four across.
 */
export function StatsBand() {
  return (
    <section aria-label="AjeboChops by the numbers" className="band-deep section-y-b">
      <div className="shell flex flex-col gap-3">
        <ul className="swipe-row is-compact md:grid-cols-4">
          {STAT_TILES.map((tile, index) => (
            <Reveal as="li" key={tile.label} delay={index * 0.06}>
              <StatTile {...tile} />
            </Reveal>
          ))}
        </ul>
        <p className="text-center font-body text-xs text-white/50 md:hidden">Swipe for more</p>
      </div>
    </section>
  );
}
