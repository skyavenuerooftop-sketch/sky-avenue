// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "./CTAButton";
import { WHATSAPP_ORDER_URL } from "@/src/lib/config";
import OffersCarousel, { type OffersCarouselItem } from "./OffersCarousel";

type HeroOffer = OffersCarouselItem;

interface HeroProps {
  offers?: HeroOffer[];
}

export default function Hero({ offers = [] }: HeroProps) {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-rooftop.jpg"
          alt="SKY AVENUE rooftop dining overlooking the city skyline"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-navy-950/95" />
      </div>

      <div className="relative z-10 section section-padding flex min-h-[80vh] flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // widen the main content column so offer card can grow
          className="w-full max-w-5xl lg:max-w-6xl"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-skybrand">
            SKY AVENUE • Rooftop Restaurant
          </p>
          <h1 className="heading-1 mt-4">
            Elevate
            <span className="text-gold"> Your Dining</span> Experience.
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
            Escape above the city lights. Savor seasonal cuisine, handcrafted
            cocktails and panoramic skyline views at SKY AVENUE.
          </p>

          {/* <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTAButton href={WHATSAPP_ORDER_URL} target="_blank">
              Order Online
            </CTAButton>
            <CTAButton href="/contact#reservation" variant="secondary">
              Contact Us
            </CTAButton>
          </div> */}

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span>⭐ 4.8 / 5 rating</span>
            <span>•</span>
            <span>Best Rooftop Restaurant in Your City</span>
          </div>

          {/* Rotating offers inside hero */}
          {offers.length > 0 && (
            <div
              // much wider now: nearly full hero width
              className="mt-10 w-full max-w-5xl lg:max-w-6xl"
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Today&apos;s Offers
              </p>
              <OffersCarousel offers={offers} intervalMs={2000} />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}