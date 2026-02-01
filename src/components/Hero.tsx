"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "./CTAButton";
import { WHATSAPP_ORDER_URL } from "@/src/lib/config";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-rooftop.jpg" // TODO: add your hero image
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
          className="max-w-2xl"
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
              Reserve a Table
            </CTAButton>
          </div> */}

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span>⭐ 4.8 / 5 rating</span>
            <span>•</span>
            <span>Best Rooftop Restaurant in Your City</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}