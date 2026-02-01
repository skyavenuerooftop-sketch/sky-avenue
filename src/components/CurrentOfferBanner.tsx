"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

interface CurrentOfferBannerProps {
  title: string;
  description: string;
  endsAt?: string | null; // now OPTIONAL
}

function computeRemaining(end: Date | null) {
  if (!end) return "";
  const diff = end.getTime() - Date.now();
  if (diff <= 0) return "Offer ends soon";
  const totalMinutes = Math.floor(diff / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  if (days > 0) return `${days}d ${hours}h ${minutes}m left`;
  if (hours > 0) return `${hours}h ${minutes}m left`;
  return `${minutes} minutes left`;
}

export default function CurrentOfferBanner({
  title,
  description,
  endsAt
}: CurrentOfferBannerProps) {
  const [remaining, setRemaining] = useState<string>("");

  useEffect(() => {
    if (!endsAt) {
      setRemaining("");
      return;
    }

    const endDate = new Date(endsAt);
    setRemaining(computeRemaining(endDate));

    const id = setInterval(() => {
      setRemaining(computeRemaining(endDate));
    }, 60000); // update every minute

    return () => clearInterval(id);
  }, [endsAt]);

  return (
    <section aria-label="Current limited-time offer">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section mt-[-3rem] mb-6"
      >
        <div className="card-surface flex flex-col gap-4 border-l-4 border-gold px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Limited-Time Offer
            </p>
            <h2 className="mt-1 font-display text-lg text-white sm:text-xl">
              {title}
            </h2>
            <p className="mt-1 text-sm text-slate-300">{description}</p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            {endsAt && (
              <span
                className="inline-flex rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-100"
                aria-live="polite"
              >
                ⏳ {remaining || "Calculating time left..."}
              </span>
            )}
            <CTAButton href="/offers" variant="secondary">
              View Details
            </CTAButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}