// components/OffersCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OfferCard from "./OfferCard";

export type OffersCarouselItem = {
  id: string;
  title: string;
  description: string;
  badge?: string | null;
  endsAt?: string | null;
};

interface OffersCarouselProps {
  offers: OffersCarouselItem[];
  intervalMs?: number; // default 2 seconds
}

export default function OffersCarousel({
  offers,
  intervalMs = 2000
}: OffersCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (offers.length <= 1 || paused) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [offers.length, intervalMs, paused]);

  if (!offers.length) return null;

  const current = offers[index];

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full"
        >
          {/* OfferCard will now naturally stretch to this width */}
          <OfferCard
            title={current.title}
            description={current.description}
            badge={current.badge ?? undefined}
            endsAt={current.endsAt ?? undefined}
          />
        </motion.div>
      </AnimatePresence>

      {offers.length > 1 && (
        <div className="mt-3 flex justify-center gap-1">
          {offers.map((offer, i) => {
            const active = i === index;
            return (
              <button
                key={offer.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  active ? "bg-gold" : "bg-slate-600"
                }`}
                aria-label={`Show offer ${i + 1}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}