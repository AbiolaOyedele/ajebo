"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, SITE } from "@/data/site";
import { cn } from "@/utils/cn";

/**
 * Floating header bar.
 *
 * The reference does not run a full-bleed header — it floats a maroon rounded
 * bar 30px down and inset from both edges, with nav links left, the wordmark
 * centred and an outlined CTA right. Below `lg` the links collapse into a
 * hamburger overlay, which traps focus and closes on Escape.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  // Close on route change — covers browser back/forward as well as link clicks.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || active === toggleRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [open, close]);

  const navLink =
    "font-display text-lg font-medium text-white/85 transition-colors duration-150 hover:text-orange lg:text-xl";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 md:top-[30px]">
      <div className="shell">
        <div className="pointer-events-auto rounded-btn bg-maroon px-5 py-4 ring-1 ring-white/25 md:px-6">
          <div className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
            {/* Left: desktop nav, mobile logo */}
            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-center gap-4 xl:gap-5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={navLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>


            {/* Wordmark: left on mobile, centred once the nav appears */}
            <span className="flex lg:justify-center">
              <Logo size="sm" className="lg:hidden" />
              <Logo size="md" className="hidden lg:block" />
            </span>

            {/* Right: CTA + hamburger */}
            <div className="flex items-center justify-end gap-3">
              <a
                href={SITE.orderOnlineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden min-h-11 items-center rounded-btn border border-white/70 px-6 font-display text-lg font-medium text-white transition-colors duration-150 hover:bg-cream hover:text-maroon sm:inline-flex lg:text-xl"
              >
                Order now
              </a>

              <button
                ref={toggleRef}
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="site-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="flex size-11 items-center justify-center rounded-full border border-white/50 text-white transition-colors duration-150 hover:bg-cream hover:text-maroon lg:hidden"
              >
                {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
              </button>
            </div>
          </div>

          {/* Mobile overlay, inside the bar so it shares its rounded shape */}
          <div
            id="site-menu"
            ref={panelRef}
            hidden={!open}
            className={cn("pointer-events-auto mt-4 pt-4 lg:hidden")}
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className="flex min-h-13 items-center font-display text-2xl font-medium text-white transition-colors duration-150 hover:text-orange"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href={SITE.orderOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-3 flex min-h-13 w-full items-center justify-center rounded-btn bg-orange px-6 font-display text-xl font-semibold text-white transition-colors duration-150 hover:bg-orange-dark"
            >
              Order now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
