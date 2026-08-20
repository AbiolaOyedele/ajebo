import Image from "next/image";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { SCENE } from "@/data/images";

const PANELS = [
  { caption: "Cooked with fire", photo: SCENE.editorialLeft },
  { caption: "Served with soul", photo: SCENE.editorialRight },
];

export function EditorialSplit() {
  return (
    <section aria-label="Inside the AjeboChops kitchen" className="band-deep section-y-b">
      <div className="shell grid gap-4 md:grid-cols-2">
        {PANELS.map((panel, index) => (
          <Reveal key={panel.caption} delay={index * 0.1}>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-card sm:aspect-[3/2] md:aspect-[4/5]">
              <Parallax>
                <Image
                  src={panel.photo.src}
                  alt={panel.photo.alt}
                  fill
                  sizes="(max-width: 768px) 92vw, 46vw"
                  className="object-cover"
                />
              </Parallax>
              {/* Scrim covers only the caption band so the food stays visible. */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-maroon via-maroon/70 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-center">
                <RevealText
                  as="span"
                  text={panel.caption}
                  className="block font-display text-3xl leading-[0.95] text-white uppercase sm:text-4xl lg:text-5xl"
                />
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
