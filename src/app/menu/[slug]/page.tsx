import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MenuBrowser } from "@/components/features/MenuBrowser";
import { OrderPanel } from "@/components/features/OrderPanel";
import Image from "next/image";
import { DISH_PHOTO } from "@/data/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DISHES, getCategory, getDish } from "@/data/menu";
import { SITE } from "@/data/site";
import { ACCENT_BG } from "@/utils/accent";
import { formatNaira } from "@/utils/format";

export function generateStaticParams() {
  return DISHES.map((dish) => ({ slug: dish.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/menu/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const dish = getDish(slug);

  if (!dish) return { title: "Dish not found" };

  const photo = DISH_PHOTO[dish.slug];

  return {
    title: dish.name,
    description: dish.description,
    alternates: { canonical: `/menu/${dish.slug}` },
    openGraph: {
      title: `${dish.name} · ${SITE.name}`,
      description: dish.description,
      type: "article",
      url: `/menu/${dish.slug}`,
      // Without this the page inherits nothing: an openGraph block with no
      // images replaces the layout's card rather than extending it.
      images: photo ? [{ url: photo.src, alt: photo.alt }] : undefined,
    },
  };
}

export default async function DishPage({ params }: PageProps<"/menu/[slug]">) {
  const { slug } = await params;
  const dish = getDish(slug);

  if (!dish) notFound();

  const category = getCategory(dish.category);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MenuItem",
            name: dish.name,
            description: dish.description,
            image: DISH_PHOTO[dish.slug] ? `${SITE.url}${DISH_PHOTO[dish.slug].src}` : undefined,
            offers: {
              "@type": "Offer",
              price: dish.price,
              priceCurrency: "NGN",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      <section className="bg-maroon pt-28 pb-10 md:pt-40 md:pb-14">
        <div className="shell flex flex-col gap-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 font-body text-sm text-white/70">
              <li>
                <Link href="/" className="transition-colors duration-150 hover:text-white/70">
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight size={14} />
              </li>
              <li>
                <Link href="/#menu" className="transition-colors duration-150 hover:text-white/70">
                  Menu
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight size={14} />
              </li>
              <li aria-current="page" className="font-semibold text-orange">
                {dish.name}
              </li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div
              className={`relative aspect-square w-full overflow-hidden rounded-card ${ACCENT_BG[dish.accent]}`}
            >
              <Image
                src={DISH_PHOTO[dish.slug].src}
                alt={DISH_PHOTO[dish.slug].alt}
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-5">
              <span className="font-body text-xs tracking-[0.2em] text-white/60 uppercase">
                {category.fullLabel}
              </span>

              <h1 className="font-display text-[2.25rem] leading-[0.95] font-black text-white text-balance uppercase sm:text-5xl lg:text-6xl">
                {dish.name}
              </h1>

              <p className="max-w-xl font-body text-base leading-relaxed text-white/75 text-pretty">
                {dish.description}
              </p>

              <p className="font-display text-4xl leading-none font-black text-orange sm:text-5xl">
                {formatNaira(dish.price)}
              </p>

              <OrderPanel dishName={dish.name} unitPrice={dish.price} orderUrl={dish.orderUrl} />

              <p className="text-xs leading-relaxed text-white/70">
                Our kitchen handles peanuts, shellfish, dairy, eggs and gluten. If you have a serious
                allergy,{" "}
                <Link href="/contact" className="font-semibold text-white underline">
                  talk to us
                </Link>{" "}
                before ordering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band-deep rounded-top section-y">
        <div className="shell flex flex-col gap-12">
          <SectionHeading
            title="More from the kitchen"
            subtitle="Same fire, different plate. Add another to the order."
          />
          <MenuBrowser excludeSlug={dish.slug} initialFilter={dish.category} />
        </div>
      </section>
    </>
  );
}
