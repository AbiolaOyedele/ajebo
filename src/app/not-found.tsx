import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-maroon py-24">
      <div className="shell flex flex-col items-center gap-6 text-center">
        <p className="font-display text-[6rem] leading-none font-black text-orange sm:text-[9rem]">
          404
        </p>
        <h1 className="font-display text-3xl leading-none font-black text-white uppercase sm:text-5xl">
          This plate is empty
        </h1>
        <p className="max-w-md text-base text-white/70 text-pretty">
          We could not find that page. The kitchen is still open though — head back and pick
          something hot.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/" variant="primary" size="lg">
            Back home
          </LinkButton>
          <LinkButton href="/#menu" variant="outline-light" size="lg">
            See the menu
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
