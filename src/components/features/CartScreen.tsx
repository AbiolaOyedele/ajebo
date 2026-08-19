import { Bell, Home, MoreHorizontal, Receipt, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { DISH_PHOTO } from "@/data/images";
import { formatNaira } from "@/utils/format";

const LINE_ITEMS = [
  // Real dishes at their real prices, so the mock cart never quotes a wrong figure.
  { slug: "prime-ministers-jollof", name: "Prime Minister's Jollof", note: "extra plantain", qty: 2, price: 16000 },
  { slug: "peppered-asun", name: "Peppered Asun", note: "no onions", qty: 1, price: 4000 },
  { slug: "nutella-puff-puff", name: "Nutella Puff Puff", note: "6 pieces", qty: 1, price: 4500 },
];

const TOTAL = LINE_ITEMS.reduce((sum, item) => sum + item.price, 0);

/** Static mock of the in-app cart screen. */
export function CartScreen() {
  return (
    <div aria-hidden className="flex flex-col text-maroon">
      <div className="flex flex-col gap-3 p-4 pt-3">
        <p className="font-display text-lg leading-none font-black uppercase">My Cart</p>

        <ul className="flex flex-col gap-2.5">
          {LINE_ITEMS.map((item) => (
            <li key={item.slug} className="flex items-center gap-3 rounded-xl bg-white p-2">
              <span className="relative size-11 shrink-0 overflow-hidden rounded-lg">
                <Image src={DISH_PHOTO[item.slug].src} alt="" fill sizes="44px" className="object-cover" />
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="truncate font-body text-[0.7rem] font-bold">{item.name}</span>
                <span className="truncate font-body text-[0.6rem] text-maroon">{item.note}</span>
              </span>
              <span className="flex flex-col items-end gap-1">
                <span className="font-display text-[0.7rem] font-black text-maroon">
                  {formatNaira(item.price)}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-maroon px-2 py-0.5 text-[0.6rem] font-bold text-white">
                  <span>−</span>
                  <span className="tabular-nums">{item.qty}</span>
                  <span>+</span>
                </span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-1 flex items-center justify-between rounded-xl bg-maroon px-3 py-2.5 text-white">
          <span className="flex flex-col">
            <span className="font-body text-[0.55rem] tracking-wide text-white/50 uppercase">
              Total order
            </span>
            <span className="font-display text-base leading-none font-black">
              {formatNaira(TOTAL)}
            </span>
          </span>
          <span className="rounded-full bg-maroon px-4 py-1.5 font-body text-[0.65rem] font-bold text-white uppercase">
            Checkout
          </span>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between px-5 py-3 text-maroon">
        {[Home, Receipt, ShoppingBag, Bell, MoreHorizontal].map((Icon, index) => (
          <Icon key={index} size={15} className={index === 2 ? "text-orange" : undefined} />
        ))}
      </div>
    </div>
  );
}
