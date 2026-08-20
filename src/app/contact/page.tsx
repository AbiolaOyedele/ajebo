import { Clock, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/features/ContactForm";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach the ${SITE.name} team about order issues, delivery questions, catering and partnerships. Lekki Phase 1, Lagos.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="band-deep pt-28 pb-14 md:pt-40 md:pb-24">
      <div className="shell flex flex-col gap-12">
        <header className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-display text-[2.35rem] leading-[0.95] font-black text-white/70 text-balance uppercase sm:text-5xl md:text-6xl">
            Talk to the kitchen
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/70 text-pretty">
            Order gone wrong, catering to plan, or an idea worth cooking on? We read every message.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-8 rounded-card bg-maroon p-7 text-white sm:p-9">
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-2xl leading-none font-black uppercase">
                Contact information
              </h2>
              <p className="text-sm text-white/60">Monday to Sunday, we are on.</p>
            </div>

            <ul className="flex flex-col gap-5 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} aria-hidden className="mt-0.5 shrink-0 text-orange" />
                <span className="flex flex-col gap-1">
                  <a href={`mailto:${SITE.email}`} className="hover:text-orange">
                    {SITE.email}
                  </a>
                  <a href={`mailto:${SITE.altEmail}`} className="text-white/60 hover:text-orange">
                    {SITE.altEmail}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} aria-hidden className="mt-0.5 shrink-0 text-orange" />
                <span className="text-white/80">{SITE.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} aria-hidden className="mt-0.5 shrink-0 text-orange" />
                <span className="text-white/80">{SITE.hours}</span>
              </li>
            </ul>

            <div className="mt-auto flex flex-col gap-3">
              <h3 className="font-body text-xs font-bold tracking-[0.18em] text-orange uppercase">
                Follow us
              </h3>
              <SocialLinks />
            </div>
          </div>

          <div className="rounded-card bg-maroon-2 p-7 ring-1 ring-white/20 sm:p-9">
            <h2 className="font-display text-2xl leading-none font-black text-white/70 uppercase">
              Send a message
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
