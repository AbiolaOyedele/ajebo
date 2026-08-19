import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LEGAL_PAGES, getLegalPage } from "@/data/legal";

export function generateStaticParams() {
  return LEGAL_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/legal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegalPage(slug);

  if (!page) return { title: "Page not found" };

  return {
    title: page.title,
    description: page.intro,
    alternates: { canonical: `/legal/${page.slug}` },
  };
}

export default async function LegalPage({ params }: PageProps<"/legal/[slug]">) {
  const { slug } = await params;
  const page = getLegalPage(slug);

  if (!page) notFound();

  return (
    <article className="bg-maroon-2 pt-28 pb-14 md:pt-40 md:pb-24">
      <div className="shell flex flex-col gap-10">
        <header className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-display text-[2.35rem] leading-[0.95] font-black text-white/70 text-balance uppercase sm:text-5xl md:text-6xl">
            {page.title}.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/70 text-pretty">{page.intro}</p>
          <p className="font-body text-sm text-ink/80">Last updated: {page.lastUpdated}</p>
        </header>

        <ol className="mx-auto flex w-full max-w-3xl flex-col gap-4">
          {page.sections.map((section, index) => (
            <li key={section.heading} className="rounded-card bg-maroon-2/60 p-6 sm:p-8">
              <h2 className="font-display text-xl leading-tight font-black text-white/70 uppercase sm:text-2xl">
                {index + 1}. {section.heading}
              </h2>
              <div className="mt-4 flex flex-col gap-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.text} className="text-sm leading-relaxed text-white">
                    {paragraph.lead ? (
                      <strong className="font-bold text-white/70">{paragraph.lead} </strong>
                    ) : null}
                    {paragraph.text}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
