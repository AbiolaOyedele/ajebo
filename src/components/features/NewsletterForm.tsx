"use client";

import { Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { fieldErrors, newsletterSchema } from "@/lib/validation";

/**
 * Footer signup. There is no mailing-list backend wired up yet, so a valid
 * submission confirms locally — swap `onSubmit` for a real endpoint before launch.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = newsletterSchema.safeParse({ email });

    if (!parsed.success) {
      setError(fieldErrors(parsed.error).email ?? "Check your email address and try again.");
      setDone(false);
      return;
    }

    setError(null);
    setDone(true);
    setEmail("");
  };

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Mail
            size={18}
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-maroon/50"
          />
          <input
            id="newsletter-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (error) setError(null);
            }}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "newsletter-error" : undefined}
            className="min-h-[3.25rem] w-full rounded-btn border border-white/15 bg-white py-3 pr-4 pl-11 font-body text-sm text-maroon placeholder:text-maroon/50"
          />
        </div>
        <Button type="submit" variant="primary" size="lg" className="sm:px-8">
          Subscribe
        </Button>
      </div>

      {error ? (
        <p id="newsletter-error" role="alert" className="text-sm font-medium text-orange-dark">
          {error}
        </p>
      ) : null}

      {done ? (
        <p role="status" className="text-sm font-medium text-maroon">
          You are on the list. Watch your inbox for the next drop.
        </p>
      ) : null}
    </form>
  );
}
