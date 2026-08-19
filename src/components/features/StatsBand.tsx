import { Reveal } from "@/components/ui/Reveal";
import { StatTile } from "@/components/ui/StatTile";
import { STAT_TILES } from "@/data/site";

export function StatsBand() {
  return (
    <section aria-label="AjeboChops by the numbers" className="band-deep section-y-b">
      <ul className="shell grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STAT_TILES.map((tile, index) => (
          <Reveal as="li" key={tile.label} delay={index * 0.06}>
            <StatTile {...tile} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
