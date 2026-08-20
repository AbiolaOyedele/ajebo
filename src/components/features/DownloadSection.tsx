import { Download, Star, Zap } from "lucide-react";
import { CartScreen } from "./CartScreen";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { SITE } from "@/data/site";

const TRUST_STATS = [
  { icon: Star, value: "4.9", label: "Rating" },
  { icon: Download, value: "5,000+", label: "Ajebo Babies" },
  { icon: Zap, value: "30–50", label: "Min delivery" },
];

export function DownloadSection() {
  return (
    <section id="download" className="band-deep section-y-b scroll-mt-32">
      <div className="shell grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
        <Reveal className="flex justify-center">
          <PhoneFrame label="AjeboChops app cart screen showing three dishes, the order total and a checkout button">
            <CartScreen />
          </PhoneFrame>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-start gap-5">

          <RevealText
            text="Order in 3 taps. Seriously."
            accent="3 taps."
            className="font-display text-[2.35rem] leading-[0.95] font-black text-white/70 text-balance uppercase sm:text-5xl lg:text-[3.75rem]"
          />

          <p className="max-w-xl text-base leading-relaxed text-white/70 text-pretty">
            Skip the browser. The app remembers your favourites, saves your addresses, tracks your
            stamps and drops flash deals straight into your pocket. Your first order gets{" "}
            <strong className="font-bold text-white/70">{SITE.firstOrderDiscount} off</strong>.
          </p>

          <StoreBadges tone="dark" />

          <ul className="mt-2 grid w-full max-w-md grid-cols-3 gap-4 pt-6">
            {TRUST_STATS.map(({ icon: Icon, value, label }) => (
              <li key={label} className="flex flex-col gap-1">
                <Icon size={18} aria-hidden className="text-orange" />
                <span className="font-display text-xl leading-none font-black text-white/70 sm:text-2xl">
                  {value}
                </span>
                <span className="font-body text-xs text-white/70">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
