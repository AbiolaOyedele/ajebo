import { CategoryStrip } from "./CategoryStrip";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { ScrollFade } from "@/components/ui/ScrollFade";
import { RotatingWord } from "@/components/ui/RotatingWord";
import { HERO_WORDS, SITE } from "@/data/site";

/**
 * Hero on the maroon band. The rotating word carries the brand orange.
 */
export function Hero() {
  return (
    <section id="home" className="band-cream relative pt-32 pb-12 md:pt-44 md:pb-16">
      <ScrollFade className="shell flex flex-col items-center gap-7 text-center md:gap-9">
        <h1 className="font-display text-[clamp(2.9rem,8.2vw,7.4rem)] leading-[0.86] text-maroon uppercase">
          {/* The swapping word is decorative motion; the phrase is announced once in full. */}
          <span className="sr-only">Every meal feels like home.</span>
          <span aria-hidden className="block">
            {/* The two fixed lines lift in a word at a time; the roller waits for
                them so it does not start swapping mid-entrance. */}
            <RevealText as="span" text="Every meal" className="block" delay={0.08} />
            <RevealText as="span" text="feels like" className="block" delay={0.24} />
            {/* The roller takes its own line so its width can change without
                nudging the words above it. */}
            <RotatingWord words={HERO_WORDS} suffix="." className="text-orange" />
          </span>
        </h1>

        <Reveal delay={0.5} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <LinkButton href={SITE.appStoreUrl} external variant="primary" size="lg">
            Download the app
          </LinkButton>
          <LinkButton href={SITE.orderOnlineUrl} external variant="outline-dark" size="lg">
            Order online
          </LinkButton>
        </Reveal>
      </ScrollFade>

      <div className="mt-12 md:mt-16">
        <CategoryStrip />
      </div>
    </section>
  );
}
