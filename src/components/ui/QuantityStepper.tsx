"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/cn";

interface QuantityStepperProps {
  min?: number;
  max?: number;
  initial?: number;
  label: string;
  className?: string;
  onChange?: (value: number) => void;
}

/** Dark pill with − / count / + controls. Never drops below `min`. */
export function QuantityStepper({
  min = 1,
  max = 20,
  initial = 1,
  label,
  className,
  onChange,
}: QuantityStepperProps) {
  const [quantity, setQuantity] = useState(initial);

  const update = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next));
    setQuantity(clamped);
    onChange?.(clamped);
  };

  const control =
    "flex size-11 items-center justify-center rounded-full text-white transition-colors duration-150 hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-35";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-maroon p-1.5",
        className,
      )}
    >
      <button
        type="button"
        className={control}
        onClick={() => update(quantity - 1)}
        disabled={quantity <= min}
        aria-label={`Decrease ${label} quantity`}
      >
        <Minus size={18} aria-hidden />
      </button>
      <output
        aria-label={`${label} quantity`}
        className="min-w-10 text-center font-display text-lg font-black text-white tabular-nums"
      >
        {quantity}
      </output>
      <button
        type="button"
        className={control}
        onClick={() => update(quantity + 1)}
        disabled={quantity >= max}
        aria-label={`Increase ${label} quantity`}
      >
        <Plus size={18} aria-hidden />
      </button>
    </div>
  );
}
