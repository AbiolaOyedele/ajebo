import { SITE } from "@/data/site";
import { cn } from "@/utils/cn";

interface StoreBadgesProps {
  tone?: "light" | "dark";
  className?: string;
}

function Badge({
  href,
  tone,
  kicker,
  name,
  children,
}: {
  href: string;
  tone: "light" | "dark";
  kicker: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-12 items-center gap-3 rounded-btn border px-4 py-2.5 transition-colors duration-150",
        tone === "light"
          ? "border-white/30 bg-white/5 text-white hover:border-white/70 hover:bg-white/10"
          : "border-white/20 bg-maroon text-white hover:bg-maroon-2",
      )}
    >
      <span aria-hidden className="shrink-0">
        {children}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[0.6rem] tracking-wide uppercase opacity-70">{kicker}</span>
        <span className="font-body text-sm font-bold">{name}</span>
      </span>
    </a>
  );
}

/** App Store and Google Play links with inline brand glyphs. */
export function StoreBadges({ tone = "light", className }: StoreBadgesProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Badge href={SITE.appStoreUrl} tone={tone} kicker="Download on the" name="App Store">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.36 12.7c.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.61-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.75-.78-2.87-.76-1.48.02-2.84.86-3.6 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.25 2.75 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.7.71 2.87.69 1.19-.02 1.94-1.08 2.66-2.14.84-1.23 1.19-2.42 1.21-2.48-.03-.01-2.32-.89-2.34-3.5zM14.2 5.4c.6-.74 1.01-1.76.9-2.78-.87.04-1.93.58-2.56 1.31-.56.65-1.06 1.7-.93 2.7.97.07 1.97-.49 2.59-1.23z" />
        </svg>
      </Badge>
      <Badge href={SITE.playStoreUrl} tone={tone} kicker="Get it on" name="Google Play">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.6 2.3c-.24.26-.38.65-.38 1.16v17.08c0 .51.14.9.38 1.16l.06.06 9.57-9.57v-.22L3.66 2.4l-.06-.1zM16.9 15.5l-3.19-3.19v-.22l3.2-3.2.07.05 3.78 2.15c1.08.61 1.08 1.62 0 2.24l-3.78 2.15-.08.02zM16.02 16.4l-3.27-3.27-9.63 9.63c.36.38.94.42 1.6.05l11.3-6.41zM16.02 7.7 4.72 1.29c-.66-.38-1.24-.33-1.6.05l9.63 9.62L16.02 7.7z" />
        </svg>
      </Badge>
    </div>
  );
}
