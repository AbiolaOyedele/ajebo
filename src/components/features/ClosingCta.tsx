import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { SITE } from "@/data/site";

/** Full-bleed orange closing band. */
export function ClosingCta() {
  return (
    <section aria-labelledby="closing-cta-heading" className="bg-maroon section-y">
      <Reveal className="shell flex flex-col items-center gap-6 text-center">
        <RevealText
          id="closing-cta-heading"
          text="Are you an Ajebo Baby?"
          accent="Ajebo Baby?"
          className="font-display text-[2.5rem] leading-[0.92] font-black text-white text-balance uppercase sm:text-6xl lg:text-7xl"
        />

        <p className="max-w-xl text-base leading-relaxed text-white/75 text-pretty md:text-lg">
          Download the app or order from the website. Your first stamp starts counting from day one.
        </p>

        <p className="rounded-full bg-orange px-6 py-2.5 font-display text-2xl text-white uppercase">
          {SITE.firstOrderDiscount} off your first order
        </p>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <LinkButton href={SITE.appStoreUrl} external variant="primary" size="lg">
            Download the app
          </LinkButton>
          <LinkButton
            href={SITE.orderOnlineUrl}
            external
            variant="outline-light"
            size="lg"
          >
            Order online
          </LinkButton>
        </div>

        <StoreBadges className="justify-center" />
      </Reveal>
    </section>
  );
}
