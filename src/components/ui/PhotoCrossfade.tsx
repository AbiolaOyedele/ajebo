"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Photo } from "@/data/images";

interface PhotoCrossfadeProps {
  photos: readonly Photo[];
  /** Passed straight to next/image so each slot requests the right size. */
  sizes: string;
  /** Seconds each photo holds before the next one fades in. */
  interval?: number;
}

/**
 * Cycles a set of photos in the same frame. Only the first photo carries alt
 * text, so to a screen reader this is one image, not a slideshow of three, and
 * the cycle stops entirely when the visitor has asked for reduced motion.
 */
export function PhotoCrossfade({ photos, sizes, interval = 4 }: PhotoCrossfadeProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const first = photos[0];

  useEffect(() => {
    if (reduceMotion || photos.length < 2) return;
    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % photos.length),
      interval * 1000,
    );
    return () => window.clearInterval(id);
  }, [interval, photos.length, reduceMotion]);

  if (!first) return null;

  if (reduceMotion || photos.length < 2) {
    return <Image src={first.src} alt={first.alt} fill sizes={sizes} className="object-cover" />;
  }

  const active = photos[index] ?? first;

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={active.src}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Image
          src={active.src}
          alt={active.src === first.src ? first.alt : ""}
          aria-hidden={active.src === first.src ? undefined : true}
          fill
          sizes={sizes}
          className="object-cover"
          priority={false}
        />
      </motion.div>
    </AnimatePresence>
  );
}
