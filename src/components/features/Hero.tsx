import { CategoryStrip } from "./CategoryStrip";
import { LinkButton } from "@/components/ui/Button";
import { PhoneCarousel } from "@/components/ui/PhoneCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { RotatingWord } from "@/components/ui/RotatingWord";
import { ScrollFade } from "@/components/ui/ScrollFade";
import { APP_SCREENS, HERO_WORDS, SITE } from "@/data/site";

/**
 * Copy and calls to action on the left, the app itself on the right, and the
 * top of the category strip showing beneath both.
 *
 * The columns stack on phones, copy first and centred. A single narrow column
 * of left-aligned display type leaves an awkward ragged edge. The headline's
 * text-align carries through to the rotating word on its own.
 *
 * The section clips, because the carousel's outer handsets are meant to run off
 * the edge.
 */
export function Hero() {
  // The header floats rather than sitting in the flow, so the top padding has to
  // clear it and then leave a gap on top of that. At the old 40 the headline
  // started 38px under the bar, which read as crowded.
  return (
    <section
      id="home"
      className="band-cream relative overflow-hidden pt-32 pb-10 md:pt-48 md:pb-14 lg:pt-56"
    >
      {/*
        `items-end` is what lands the handsets' crop line on the bottom of the
        call-to-action row: both columns are flush at the bottom, and the stack
        has nothing below it to push the crop up.
      */}
      <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-end lg:gap-8">
        <ScrollFade className="flex flex-col items-center gap-7 text-center lg:items-start lg:text-left">
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.88] text-maroon uppercase">
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

          <Reveal delay={0.44}>
            <p className="max-w-md font-body text-base leading-relaxed text-maroon/70 text-pretty md:text-lg">
              Jollof, native rice, asun and gourmet puff puff, at your door in{" "}
              {SITE.deliveryWindow} minutes.
            </p>
          </Reveal>

          <Reveal
            delay={0.54}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:justify-start"
          >
            <LinkButton href={SITE.appStoreUrl} external variant="primary" size="lg">
              Download the app
            </LinkButton>
            <LinkButton href={SITE.orderOnlineUrl} external variant="outline-dark" size="lg">
              Order online
            </LinkButton>
          </Reveal>
        </ScrollFade>

        <Reveal delay={0.2}>
          <PhoneCarousel screens={APP_SCREENS} />
        </Reveal>
      </div>

      <div className="mt-12 md:mt-16">
        <CategoryStrip />
      </div>
    </section>
  );
}
