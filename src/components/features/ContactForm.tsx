"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { contactSchema, fieldErrors } from "@/lib/validation";
import { cn } from "@/utils/cn";

const SUBJECTS = [
  { value: "order-issue", label: "Order issue" },
  { value: "delivery-question", label: "Delivery question" },
  { value: "feedback", label: "Feedback" },
  { value: "partnership", label: "Partnership / Business" },
  { value: "general", label: "General enquiry" },
];

const FIELD =
  "min-h-12 w-full rounded-btn border bg-cream px-4 py-3 font-body text-sm text-maroon transition-colors duration-150 placeholder:text-maroon/50";

/**
 * Contact form with client-side validation.
 *
 * There is no mail backend in this build, so a valid submission confirms locally
 * and points at the support inbox. Wire it to a route handler (with server-side
 * re-validation and rate limiting) before launch.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = contactSchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    });

    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error));
      setSent(false);
      return;
    }

    setErrors({});
    setSent(true);
    event.currentTarget.reset();
  };

  const errorFor = (field: string) =>
    errors[field] ? (
      <p id={`${field}-error`} role="alert" className="text-sm font-medium text-orange">
        {errors[field]}
      </p>
    ) : null;

  const borderFor = (field: string) =>
    errors[field] ? "border-orange-dark" : "border-maroon/15 focus:border-orange";

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-body text-sm font-semibold text-white">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Adaeze Okafor"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(FIELD, borderFor("name"))}
          />
          {errorFor("name")}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-body text-sm font-semibold text-white">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(FIELD, borderFor("email"))}
          />
          {errorFor("email")}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="font-body text-sm font-semibold text-white">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          defaultValue=""
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={cn(FIELD, borderFor("subject"))}
        >
          <option value="" disabled>
            Choose a topic
          </option>
          {SUBJECTS.map((subject) => (
            <option key={subject.value} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </select>
        {errorFor("subject")}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-body text-sm font-semibold text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us what happened, or what you need."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(FIELD, borderFor("message"), "resize-y")}
        />
        {errorFor("message")}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          iconRight={<Send size={18} aria-hidden />}
        >
          Send message
        </Button>
        {sent ? (
          <p role="status" className="text-sm font-medium text-white">
            Thank you — your message is with the team. We reply within one working day.
          </p>
        ) : null}
      </div>
    </form>
  );
}
