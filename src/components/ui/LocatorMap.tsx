import { ArrowUpRight, MapPin } from "lucide-react";
import { SITE } from "@/data/site";
import { cn } from "@/utils/cn";

interface LocatorMapProps {
  className?: string;
}

/**
 * Where the kitchen is, as a stylised locator that opens the real map.
 *
 * Deliberately not a maps embed: an iframe here would pull a third-party script
 * and a few hundred kilobytes into the footer to show a rectangle almost nobody
 * pans. The panel gives the sense of place, and the whole thing is a link, so
 * anyone who actually wants directions gets a real map in one tap.
 *
 * Every mark on it is drawn in maroon on the cream panel. The previous version
 * drew its streets in cream on cream, which measured 1.0:1 and rendered as an
 * empty box.
 */
export function LocatorMap({ className }: LocatorMapProps) {
  return (
    <a
      href={SITE.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block h-48 overflow-hidden rounded-card bg-cream ring-1 ring-white/15",
        "transition-shadow duration-200 hover:ring-orange focus-visible:ring-orange sm:h-56",
        className,
      )}
    >
      {/* Street grid. Faint on purpose, but it has to actually be visible. */}
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(77,7,17,0.14) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(77,7,17,0.14) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* Two wider roads crossing near the pin, so the grid reads as a place. */}
      <span
        aria-hidden
        className="absolute top-1/2 left-0 h-3 w-full -translate-y-1/2 -rotate-6 bg-maroon/12"
      />
      <span aria-hidden className="absolute top-0 left-1/3 h-full w-2.5 rotate-3 bg-maroon/12" />

      {/* Pin, with a ring to pull the eye to it. */}
      <span aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/15" />
        <span className="relative flex size-12 items-center justify-center rounded-full bg-orange text-white ring-4 ring-cream">
          <MapPin size={22} />
        </span>
      </span>

      {/* Solid bar, so the address is legible over whatever sits behind it. */}
      <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-maroon px-4 py-3">
        <span className="min-w-0 font-body text-xs leading-tight text-white">
          <span className="block font-bold">{SITE.addressStreet}</span>
          <span className="block text-white/75">{SITE.addressArea}</span>
        </span>
        <span className="flex shrink-0 items-center gap-1 font-body text-xs font-bold text-orange">
          Open in Maps
          <ArrowUpRight size={14} aria-hidden />
        </span>
      </span>
    </a>
  );
}
