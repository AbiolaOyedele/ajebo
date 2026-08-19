import { Star } from "lucide-react";
import type { Testimonial } from "@/types/content";

/** Bordered quote card used inside the reviews marquee. */
export function TestimonialCard({ quote, name, location, rating }: Testimonial) {
  return (
    <figure className="flex w-[19rem] shrink-0 flex-col gap-4 rounded-card border border-maroon/10 bg-cream p-6 sm:w-[23rem] sm:p-7">
      <div className="flex gap-1" aria-label={`Rated ${rating} out of 5`}>
        {Array.from({ length: rating }, (_, i) => (
          <Star key={i} size={16} className="fill-orange text-orange" aria-hidden />
        ))}
      </div>
      <blockquote className="font-display text-lg leading-tight font-black text-maroon/70 text-balance uppercase sm:text-xl">
        “{quote}”
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        <span
          aria-hidden
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-orange font-display text-sm font-black text-white"
        >
          {name.charAt(0)}
        </span>
        <span className="flex flex-col leading-tight">
          <span className="font-body text-sm font-bold text-maroon/70">{name}</span>
          <span className="font-body text-xs text-maroon/70">{location}</span>
        </span>
      </figcaption>
    </figure>
  );
}
