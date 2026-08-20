"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { LinkButton } from "@/components/ui/Button";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { SITE } from "@/data/site";
import { formatNaira } from "@/utils/format";

interface OrderPanelProps {
  dishName: string;
  unitPrice: number;
  /** This dish's own page on the ordering platform. */
  orderUrl: string;
}

/**
 * Quantity + running total + hand-off to this dish on the ordering platform.
 * Checkout lives there, so the panel sizes the order and sends the visitor
 * straight to the right product page.
 */
export function OrderPanel({ dishName, unitPrice, orderUrl }: OrderPanelProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-4 rounded-card bg-cream p-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <QuantityStepper label={dishName} initial={1} onChange={setQuantity} />
        <p className="font-body text-sm text-maroon/70">
          Total{" "}
          <span className="font-display text-xl font-black text-maroon/70 tabular-nums">
            {formatNaira(unitPrice * quantity)}
          </span>
        </p>
      </div>

      <LinkButton
        href={orderUrl}
        external
        variant="primary"
        size="lg"
        fullWidth
        iconRight={<ArrowUpRight size={18} aria-hidden />}
      >
        Order now
      </LinkButton>

      <p className="text-xs text-maroon/70">
        Checkout happens in the AjeboChops app or on our ordering page, where your{" "}
        {SITE.firstOrderDiscount} first-order discount applies there.
      </p>
    </div>
  );
}
