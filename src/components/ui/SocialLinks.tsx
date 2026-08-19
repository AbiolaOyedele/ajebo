import { SITE } from "@/data/site";
import { cn } from "@/utils/cn";

const ICONS = {
  instagram: (
    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 3.14A6.66 6.66 0 1 0 18.66 12 6.66 6.66 0 0 0 12 5.34zm0 10.98A4.32 4.32 0 1 1 16.32 12 4.32 4.32 0 0 1 12 16.32zm6.92-11.2a1.56 1.56 0 1 1-1.56-1.55 1.56 1.56 0 0 1 1.56 1.55z" />
  ),
  x: <path d="M17.53 3h3.02l-6.6 7.54L21.75 21h-5.9l-4.62-6.04L5.94 21H2.92l7.06-8.07L2.5 3h6.05l4.18 5.52zm-1.06 16.2h1.67L7.6 4.7H5.8z" />,
  tiktok: (
    <path d="M16.5 3c.36 2.3 1.65 3.68 3.88 3.83v2.6c-1.29.13-2.42-.29-3.73-1.08v4.78c0 6.07-6.62 7.97-9.28 3.62-1.71-2.8-.66-7.72 4.84-7.92v2.74c-.42.07-.87.18-1.28.32-1.23.42-1.93 1.2-1.73 2.57.37 2.63 5.2 3.41 4.8-1.73V3.01h2.5z" />
  ),
} as const;

interface SocialLinksProps {
  className?: string;
  tone?: "light" | "dark";
}

export function SocialLinks({ className, tone = "light" }: SocialLinksProps) {
  const links = [
    { key: "instagram" as const, label: "Instagram", href: SITE.social.instagram },
    { key: "x" as const, label: "X (Twitter)", href: SITE.social.x },
    { key: "tiktok" as const, label: "TikTok", href: SITE.social.tiktok },
  ];

  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {links.map(({ key, label, href }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`AjeboChops on ${label}`}
            className={cn(
              "flex size-11 items-center justify-center rounded-full border transition-colors duration-150",
              tone === "light"
                ? "border-white/30 text-white hover:border-orange hover:bg-orange hover:text-white"
                : "border-maroon/20 text-ink hover:border-orange hover:bg-orange hover:text-white",
            )}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              {ICONS[key]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
