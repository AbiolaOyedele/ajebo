import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/features/Footer";
import { Header } from "@/components/features/Header";
import { SITE } from "@/data/site";
import "./globals.css";

/** Organic Slowing — brand display face, single weight. */
const display = localFont({
  src: "../fonts/OrganicSlowing.ttf",
  variable: "--font-display-face",
  display: "swap",
  // The face has no bold cut, so let the browser synthesise nothing.
  weight: "400",
});

/** Lufga — brand text face. */
const body = localFont({
  src: [
    { path: "../fonts/Lufga-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/Lufga-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/Lufga-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../fonts/Lufga-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Nigerian food delivery Lagos",
    "jollof rice delivery",
    "AjeboChops",
    "Lekki food delivery",
    "party jollof",
    "puff puff Lagos",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    locale: "en_NG",
    images: [{ url: "/ajebochops-logo.png", width: 1163, height: 833, alt: "AjeboChops" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ["/ajebochops-logo.png"],
  },
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#972171",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-NG" className={`${display.variable} ${body.variable} h-full`}>
      <head>
        {/* Scroll reveals ship with an inline opacity:0; without JS they must not
            hide the page's content. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-btn focus:bg-orange focus:px-5 focus:py-3 focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
