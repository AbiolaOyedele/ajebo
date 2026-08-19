import { RewardsScreen } from "./RewardsScreen";
import { StampCard } from "./StampCard";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { REWARD_FEATURES } from "@/data/site";

export function RewardsSection() {
  return (
    <section id="rewards" className="band-cream section-y scroll-mt-32">
      <div className="shell flex flex-col gap-14">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-[2.35rem] leading-[0.95] font-black text-maroon text-balance uppercase sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Earn rewards with <span className="text-orange">every order</span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-maroon/70 text-pretty">
            Every order earns you points. Stack them up, then shop with your points — free meals,
            free drinks, free delivery.
          </p>
        </Reveal>

        <ul className="grid gap-4 md:grid-cols-3">
          {REWARD_FEATURES.map((feature, index) => (
            <Reveal as="li" key={feature.title} delay={index * 0.08}>
              <article className="flex h-full flex-col gap-3 rounded-card bg-white p-6 ring-1 ring-maroon/10 sm:p-7">
                <span className="font-display text-lg text-maroon uppercase">{feature.detail}</span>
                <h3 className="font-display text-2xl leading-none font-black text-maroon uppercase">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-maroon/70 text-pretty">{feature.body}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <Reveal className="flex justify-center lg:justify-start">
            <PhoneFrame label="AjeboChops app rewards screen showing free-meal progress, points balance and the rewards store">
              <RewardsScreen />
            </PhoneFrame>
          </Reveal>

          <Reveal delay={0.1}>
            <StampCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
