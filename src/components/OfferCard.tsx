"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface OfferCardProps {
  title: string;
  description: string;
  badge?: string;
  endsAt?: string; // ISO date string for countdown
}

function formatRemaining(end: Date | null) {
  if (!end) return "";
  const diff = end.getTime() - Date.now();
  if (diff <= 0) return "Ends soon";
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  return `${hours}h ${minutes}m left`;
}

export default function OfferCard({
  title,
  description,
  badge,
  endsAt
}: OfferCardProps) {
  const [remaining, setRemaining] = useState<string>("");

  useEffect(() => {
    if (!endsAt) return;
    const endDate = new Date(endsAt);
    setRemaining(formatRemaining(endDate));
    const id = setInterval(() => {
      setRemaining(formatRemaining(endDate));
    }, 60000);
    return () => clearInterval(id);
  }, [endsAt]);

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="card-surface relative flex flex-col gap-3 p-5"
    >
      {badge && (
        <span className="absolute right-4 top-4 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          {badge}
        </span>
      )}
      <h3 className="heading-3 text-xl">{title}</h3>
      <p className="text-sm text-slate-300">{description}</p>
      {endsAt && (
        <span className="mt-2 inline-flex items-center rounded-full bg-slate-900/70 px-3 py-1 text-xs text-slate-200">
          ⏳ {remaining}
        </span>
      )}
    </motion.article>
  );
}