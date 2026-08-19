import { Bike, CupSoda, IceCreamCone, Tag } from "lucide-react";
import { REWARD_TIERS } from "@/data/site";
import { ACCENT_BG, ACCENT_ON } from "@/utils/accent";

const TIER_ICONS = {
  "free-drink": CupSoda,
  "free-delivery": Bike,
  "500-off": Tag,
  "free-dessert": IceCreamCone,
} as const;

/** Static mock of the in-app Rewards screen. */
export function RewardsScreen() {
  return (
    <div aria-hidden className="flex flex-col gap-4 p-4 pt-3 text-ink">
      <div className="rounded-2xl bg-maroon p-4 text-white">
        <p className="font-body text-[0.6rem] tracking-widest text-white/50 uppercase">
          Free meal progress
        </p>
        <div className="mt-2 flex items-end justify-between">
          <p className="font-display text-2xl leading-none font-black">7 / 10</p>
          <p className="font-body text-[0.65rem] text-white/60">3 orders to go</p>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/15">
          <div className="h-full w-[70%] rounded-full bg-orange" />
        </div>
      </div>

      <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3">
        <div>
          <p className="font-display text-xl leading-none font-black">1,240</p>
          <p className="font-body text-[0.6rem] tracking-wide text-ink uppercase">Points</p>
        </div>
        <span className="rounded-full bg-maroon px-3 py-1 font-body text-[0.6rem] font-bold text-white uppercase">
          Keep going
        </span>
      </div>

      <p className="font-body text-[0.6rem] font-bold tracking-widest text-ink uppercase">
        Rewards store
      </p>

      <ul className="flex flex-col gap-2">
        {REWARD_TIERS.map((tier) => {
          const Icon = TIER_ICONS[tier.id as keyof typeof TIER_ICONS] ?? Tag;
          return (
          <li
            key={tier.id}
            className="flex items-center justify-between rounded-xl border border-maroon/10 bg-white px-3 py-2.5"
          >
            <span className="flex min-w-0 flex-1 items-center gap-2.5">
              <span
                className={`flex size-7 items-center justify-center rounded-full ${ACCENT_BG[tier.accent]} ${ACCENT_ON[tier.accent]}`}
              >
                <Icon size={13} />
              </span>
              <span className="truncate font-body text-[0.68rem] font-semibold">{tier.name}</span>
            </span>
            <span className="shrink-0 pl-2 font-display text-[0.7rem] font-black text-maroon">
              {tier.points}pts
            </span>
          </li>
          );
        })}
      </ul>
    </div>
  );
}
