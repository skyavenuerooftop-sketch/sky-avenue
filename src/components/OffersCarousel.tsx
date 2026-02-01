// components/OffersCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
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
  intervalMs?: number; // auto-swap interval in ms (default 2s)
}

export default function OffersCarousel({
  offers,
  intervalMs = 2000
}: OffersCarouselProps) {
  // If there are no offers, render nothing (before any hooks)
  if (!offers || offers.length === 0) return null;

  const total = offers.length;
  const hasMultiple = total > 1;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const current = offers[index];

  // Auto-rotation
  useEffect(() => {
    if (!hasMultiple || paused) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, intervalMs);

    return () => clearInterval(id);
  }, [hasMultiple, paused, intervalMs, total]);

  const goNext = () => {
    if (!hasMultiple) return;
    setIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    if (!hasMultiple) return;
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const goTo = (i: number) => {
    if (!hasMultiple) return;
    setIndex(i);
  };

  function handleDragEnd(info: PanInfo) {
    if (!hasMultiple) {
      setPaused(false);
      return;
    }

    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;

    const swipeDistanceThreshold = 50; // px
    const swipeVelocityThreshold = 300; // px/s

    const isSwipe =
      Math.abs(offsetX) > swipeDistanceThreshold ||
      Math.abs(velocityX) > swipeVelocityThreshold;

    if (!isSwipe) {
      setPaused(false);
      return;
    }

    // Swipe left => next, swipe right => prev
    if (offsetX < 0) {
      goNext();
    } else {
      goPrev();
    }

    setPaused(false);
  }

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
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setPaused(true)}
          onDragEnd={(_, info) => handleDragEnd(info)}
        >
          <OfferCard
            title={current.title}
            description={current.description}
            badge={current.badge ?? undefined}
            endsAt={current.endsAt ?? undefined}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator & manual tap selection */}
      {hasMultiple && (
        <div className="mt-3 flex justify-center gap-1">
          {offers.map((offer, i) => {
            const active = i === index;
            return (
              <button
                key={offer.id}
                type="button"
                onClick={() => goTo(i)}
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