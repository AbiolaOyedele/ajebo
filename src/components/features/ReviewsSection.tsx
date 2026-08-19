import { Marquee } from "@/components/ui/Marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";

export function ReviewsSection() {
  const cards = TESTIMONIALS.map((testimonial) => (
    <TestimonialCard key={testimonial.id} {...testimonial} />
  ));

  return (
    <section id="reviews" className="band-deep rounded-top section-y scroll-mt-32">
      <div className="shell">
        <SectionHeading
          title="Real talk"
          subtitle="Ajebo Babies say it better than we can. Here is what lands in our inbox."
          className="mb-12"
        />
      </div>

      <Marquee duration={60}>{cards}</Marquee>
    </section>
  );
}
