import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DISH_PHOTO } from "@/data/images";
import { filterDishes } from "@/data/menu";
import { formatNaira } from "@/utils/format";

/**
 * The Chop Life 2L bowls — the party-size end of the menu.
 *
 * These are the real "Chop Life Bowl" items and prices from the ordering
 * platform, not invented catering packages.
 */
export function ChopLifeSection() {
  const bowls = filterDishes("chop-life");

  return (
    <section id="chop-life" className="band-deep rounded-top section-y scroll-mt-32">
      <div className="shell flex flex-col gap-12 md:gap-16">
        <SectionHeading
          title="Feed the whole compound."
          subtitle="Two-litre bowls built for owambe, office lunch and everything in between. One bowl, plenty plates."
        />

        <ul className="swipe-row md:grid-cols-2 lg:grid-cols-3">
          {bowls.map((bowl, index) => {
            const photo = DISH_PHOTO[bowl.slug];
            return (
              <Reveal as="li" key={bowl.slug} delay={index * 0.06}>
                <article className="flex h-full flex-col overflow-hidden rounded-card bg-maroon-2">
                  <div className="relative aspect-[16/11] w-full overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                      className="object-cover"
                    />
                  </div>

                  <div
                    className="flex flex-1 flex-col gap-3 bg-cream p-6 text-maroon sm:p-7"
                  >
                    <h3 className="font-display text-2xl leading-[1.05] uppercase">{bowl.name}</h3>
                    <p className="font-body text-sm leading-5 opacity-80">{bowl.description}</p>
                    <p className="font-display text-2xl">{formatNaira(bowl.price)}</p>
                    <a
                      href={bowl.orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex min-h-11 items-center justify-center rounded-btn bg-maroon px-5 font-display text-lg text-white transition-colors duration-150 hover:bg-orange"
                    >
                      Order now
                      <span className="sr-only"> — {bowl.name} on the AjeboChops ordering site</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>

        <p className="-mt-6 text-center font-body text-xs text-white/50 md:hidden">
          Swipe for more — {bowls.length} party bowls
        </p>

        <Reveal className="flex flex-col items-center gap-5 rounded-card bg-cream p-8 text-center sm:p-12">
          <h3 className="font-display text-3xl leading-none text-maroon uppercase sm:text-4xl">
            Planning something bigger?
          </h3>
          <p className="max-w-lg font-body text-sm leading-6 text-maroon/70 text-pretty sm:text-base">
            Birthdays, corporate lunches, church programmes — tell us the headcount and we will build
            the spread around it.
          </p>
          <LinkButton href="/contact" variant="primary" size="lg">
            Talk to the kitchen
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}
