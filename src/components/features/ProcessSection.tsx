import Image from "next/image";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SCENE } from "@/data/images";
import { PROCESS_STEPS } from "@/data/site";

const STEP_PHOTOS = [SCENE.step1, SCENE.step2, SCENE.step3];

export function ProcessSection() {
  return (
    <section aria-labelledby="process-heading" className="band-deep section-y-b">
      <div className="shell flex flex-col gap-10 md:gap-14">
        <SectionHeading
          id="process-heading"
          title="Browse then order"
          subtitle="Scroll through everything we've got cooking."
        />

        <ol className="flex flex-col gap-4">
          {PROCESS_STEPS.map((step, index) => {
            const photo = STEP_PHOTOS[index];
            return (
              <Reveal as="li" key={step.step} delay={index * 0.06}>
                <article className="relative min-h-[22rem] overflow-hidden rounded-card sm:min-h-[26rem] lg:min-h-[32rem]">
                  <Parallax>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 92vw, 90vw"
                      className="object-cover"
                    />
                  </Parallax>
                  {/*
                    Scrim is confined to the lower half where the copy sits, so the
                    dish above it stays fully visible.
                  */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-maroon via-maroon/85 to-transparent"
                  />
                  <div className="relative flex min-h-[22rem] flex-col justify-end gap-3 p-6 sm:min-h-[26rem] sm:p-10 lg:min-h-[32rem]">
                    <span className="font-body text-xs tracking-[0.2em] text-white/80 uppercase">
                      {step.step}
                    </span>
                    <h3 className="max-w-xl font-display text-3xl leading-[0.95] text-white text-balance uppercase sm:text-4xl lg:text-5xl">
                      {step.title}
                    </h3>
                    <p className="max-w-md font-body text-sm leading-6 text-white/90 text-pretty sm:text-base">
                      {step.body}
                    </p>
                    <span className="font-display text-xl text-orange uppercase">{step.tag}</span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
