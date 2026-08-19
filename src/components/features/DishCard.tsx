import Image from "next/image";
import Link from "next/link";
import { DISH_PHOTO } from "@/data/images";
import type { Dish } from "@/types/menu";
import { formatNaira } from "@/utils/format";

interface DishCardProps {
  dish: Dish;
}

/**
 * Menu grid card — identical in construction to the Chop Life cards: photo flush
 * to the card's top edges, cream information block beneath. The photo and name
 * link to this site's dish page; "Order now" goes straight to the item on the
 * ordering platform.
 */
export function DishCard({ dish }: DishCardProps) {
  const photo = DISH_PHOTO[dish.slug];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card bg-maroon-2">
      <Link
        href={`/menu/${dish.slug}`}
        className="relative block aspect-[16/11] w-full overflow-hidden"
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
          className="object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-3 bg-cream p-6 text-maroon sm:p-7">
        <h3 className="font-display text-2xl leading-[1.05] uppercase">
          <Link href={`/menu/${dish.slug}`} className="hover:text-orange">
            {dish.name}
          </Link>
        </h3>
        <p className="font-body text-sm leading-5 opacity-80">{dish.description}</p>
        <p className="font-display text-2xl">{formatNaira(dish.price)}</p>
        <a
          href={dish.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex min-h-11 items-center justify-center rounded-btn bg-maroon px-5 font-display text-lg text-white transition-colors duration-150 hover:bg-orange"
        >
          Order now
          <span className="sr-only"> — {dish.name} on the AjeboChops ordering site</span>
        </a>
      </div>
    </article>
  );
}
