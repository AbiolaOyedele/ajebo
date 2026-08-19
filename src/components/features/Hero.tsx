import { CategoryStrip } from "./CategoryStrip";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RotatingWord } from "@/components/ui/RotatingWord";
import { HERO_WORDS, SITE } from "@/data/site";

/**
 * Hero on the maroon band. The rotating word carries the brand orange.
 */
export function Hero() {
  return (
    <section id="home" className="band-cream relative pt-32 pb-12 md:pt-44 md:pb-16">
      <div className="shell flex flex-col items-center gap-7 text-center md:gap-9">

        <Reveal delay={0.08}>
          <h1 className="font-display text-[clamp(2.9rem,8.2vw,7.4rem)] leading-[0.86] text-maroon uppercase">
            {/* The swapping word is decorative motion; the phrase is announced once in full. */}
            <span className="sr-only">Every meal feels like home.</span>
            <span aria-hidden className="block">
              <span className="block">Every meal</span>
              <span className="block">
                feels like{" "}
                <span className="text-orange">
                  <RotatingWord words={HERO_WORDS} />.
                </span>
              </span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.16} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <LinkButton href={SITE.appStoreUrl} external variant="primary" size="lg">
            Download the app
          </LinkButton>
          <LinkButton href={SITE.orderOnlineUrl} external variant="outline-dark" size="lg">
            Order online
          </LinkButton>
        </Reveal>
      </div>

      <div className="mt-12 md:mt-16">
        <CategoryStrip />
      </div>
    </section>
  );
}
