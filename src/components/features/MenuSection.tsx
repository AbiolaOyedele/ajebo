import { ArrowRight } from "lucide-react";
import { MenuBrowser } from "./MenuBrowser";
import { LinkButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/data/site";

export function MenuSection() {
  return (
    <section id="menu" className="band-deep rounded-top section-y scroll-mt-32">
      <div className="shell flex flex-col gap-12">
        <SectionHeading
          title="Pick your craving"
          subtitle="Order straight from the app or browse what's cooking. Thirty-eight dishes, ten categories, one kitchen."
        />

        <MenuBrowser />

        <div className="flex justify-center">
          <LinkButton
            href={SITE.orderOnlineUrl}
            external
            variant="primary"
            size="lg"
            iconRight={<ArrowRight size={18} aria-hidden />}
          >
            Order on the app
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
