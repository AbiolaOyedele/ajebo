import { Clock, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { SITE } from "@/data/site";

const QUICK_LINKS = [
  { label: "Menu", href: "/#menu" },
  { label: "Rewards", href: "/#rewards" },
  { label: "Chop Life", href: "/#chop-life" },
  { label: "About", href: "/#about" },
  { label: "Find us", href: "/#find-us" },
];

const LEGAL_LINKS = [
  { label: "Contact Us", href: "/contact" },
  { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h3 className="font-body text-xs font-bold tracking-[0.18em] text-orange uppercase">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex min-h-11 items-center font-body text-sm text-white/70 transition-colors duration-150 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-maroon text-white">
      <div className="shell flex flex-col gap-14 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-white/70 text-pretty">
              {SITE.tagline}
            </p>
            <SocialLinks />
          </div>

          <Column title="Quick links" links={QUICK_LINKS} />
          <Column title="Support & Legal" links={LEGAL_LINKS} />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h3 className="font-display text-3xl leading-none uppercase sm:text-4xl">
              Never miss a <span className="text-orange">drop</span>
            </h3>
            <p className="max-w-md text-sm text-white/70 text-pretty">
              New dishes, points boosts and Friday specials, straight to your inbox. No spam, ever.
            </p>
            <NewsletterForm />
            <div>
              <h4 className="font-body text-xs font-bold tracking-[0.18em] text-orange uppercase">
                Get the app
              </h4>
              <StoreBadges className="mt-3" />
            </div>
          </div>

          <div id="find-us" className="flex scroll-mt-28 flex-col gap-5">
            <h3 className="font-display text-3xl leading-none uppercase sm:text-4xl">
              Come say hi
            </h3>

            {/* Stylised locator rather than a paid maps embed. */}
            <div
              className="relative h-44 overflow-hidden rounded-card bg-cream sm:h-52"
              role="img"
              aria-label={`Approximate location of AjeboChops: ${SITE.address}`}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-cream) 1px, transparent 1px), linear-gradient(90deg, var(--color-cream) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                  maskImage: "radial-gradient(circle at 50% 45%, black, transparent 78%)",
                }}
              />
              <div
                aria-hidden
                className="absolute top-1/2 left-1/2 h-1.5 w-2/3 -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-full bg-orange/25"
              />
              <span
                aria-hidden
                className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange text-white shadow-lg"
              >
                <MapPin size={20} />
              </span>
              <p className="absolute right-3 bottom-3 font-body text-[0.65rem] text-white/40">
                Illustrative map — Lekki Phase 1, Lagos
              </p>
            </div>

            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} aria-hidden className="mt-0.5 shrink-0 text-orange" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} aria-hidden className="mt-0.5 shrink-0 text-orange" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex min-h-11 items-center transition-colors duration-150 hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} aria-hidden className="mt-0.5 shrink-0 text-orange" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Oversized wordmark closing the page out, set in the brand display face. */}
      <div aria-hidden className="overflow-hidden">
        <p className="shell py-8 text-center font-display text-[13vw] leading-[0.85] whitespace-nowrap text-white select-none md:py-12">
          Ajebo<span className="text-orange">Chops</span>
        </p>
      </div>

      <div className="border-white/10">
        <div className="shell flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-body text-xs text-white/50">
            © {new Date().getFullYear()} {SITE.legalName} All rights reserved.
          </p>
          <p className="font-body text-xs text-white/50">
            Made in Lagos, with fire, flavour and soul.
          </p>
        </div>
      </div>
    </footer>
  );
}
