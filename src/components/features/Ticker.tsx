import { Marquee } from "@/components/ui/Marquee";
import { TICKER_ITEMS } from "@/data/site";

/** Full-bleed promotional band between sections. */
export function Ticker() {
  const items = TICKER_ITEMS.map((item) => (
    <span
      key={item}
      className="flex shrink-0 items-center gap-6 font-display text-3xl tracking-wide whitespace-nowrap text-white uppercase sm:text-4xl lg:text-5xl"
    >
      {item}
      <span aria-hidden className="text-white/50">
        ✦
      </span>
    </span>
  ));

  return (
    <div className="bg-orange py-6 md:py-9">
      <Marquee duration={55} gapClassName="gap-10 md:gap-16" pauseOnHover={false}>
        {items}
      </Marquee>
    </div>
  );
}
