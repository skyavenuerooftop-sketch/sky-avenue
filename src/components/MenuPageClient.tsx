// components/MenuPageClient.tsx
"use client";

import { useState } from "react";
import OfferCard from "./OfferCard";
import MenuCard from "./MenuCard";
import {
  menuItems,
  menuCategories,
  type MenuCategoryId
} from "@/src/lib/menuData";

type FilterId = "all" | "veg" | "non-veg";

type OfferDisplay = {
  id: string;
  title: string;
  description: string;
  badge?: string | null;
  endsAt?: string | null;
};

interface MenuPageClientProps {
  offers: OfferDisplay[];
}

function getItemsByCategory(category: MenuCategoryId, filter: FilterId) {
  let items = menuItems.filter((item) => item.category === category);
  if (filter === "veg") items = items.filter((i) => i.isVeg);
  if (filter === "non-veg") items = items.filter((i) => !i.isVeg);
  return items;
}

export default function MenuPageClient({ offers }: MenuPageClientProps) {
  const [filter, setFilter] = useState<FilterId>("all");

  return (
    <div className="section section-padding">
      <header className="max-w-2xl">
        <h1 className="heading-1 text-4xl sm:text-5xl">Our Menu</h1>
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          From handcrafted mocktails and gourmet starters to wood-fired pizza,
          pastas, Indian & Chinese mains, SKY AVENUE offers a full rooftop
          dining menu for every mood.
        </p>
      </header>

      {/* CURRENT OFFERS SECTION (Dynamic from Firebase) */}
      {offers.length > 0 && (
        <section className="mt-8">
          <h2 className="heading-3 text-2xl">Current Offers</h2>
          <p className="mt-2 text-sm text-slate-300">
            Enjoy these limited-time rooftop offers alongside our full menu.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {offers.map((offer) => (
              <OfferCard
                key={offer.id}
                title={offer.title}
                description={offer.description}
                badge={offer.badge ?? undefined}
                endsAt={offer.endsAt ?? undefined}
              />
            ))}
          </div>
        </section>
      )}

      {/* FILTER + CATEGORY NAV */}
      <nav className="mt-8 flex flex-wrap items-center gap-3">
        {/* All / Veg / Non-Veg filter (pure client-side) */}
        <div
          className="inline-flex rounded-full bg-slate-900/70 p-1 text-xs font-medium"
          aria-label="Filter menu by dietary preference"
        >
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-1.5 transition-colors ${
              filter === "all"
                ? "bg-gold text-navy-950"
                : "text-slate-300 hover:bg-slate-800/80"
            }`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setFilter("veg")}
            className={`rounded-full px-4 py-1.5 transition-colors ${
              filter === "veg"
                ? "bg-gold text-navy-950"
                : "text-slate-300 hover:bg-slate-800/80"
            }`}
          >
            Veg
          </button>
          <button
            type="button"
            onClick={() => setFilter("non-veg")}
            className={`rounded-full px-4 py-1.5 transition-colors ${
              filter === "non-veg"
                ? "bg-gold text-navy-950"
                : "text-slate-300 hover:bg-slate-800/80"
            }`}
          >
            Non-Veg
          </button>
        </div>

        {/* Category quick navigation */}
        <nav
          className="mt-3 flex w-full gap-2 overflow-x-auto text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300 sm:mt-0"
          aria-label="Jump to menu sections"
        >
          {menuCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="whitespace-nowrap rounded-full border border-slate-700 px-3 py-1 hover:border-gold hover:text-gold"
            >
              {cat.label}
            </a>
          ))}
        </nav>
      </nav>

      {/* MENU SECTIONS */}
      <div id="menu" className="mt-10 space-y-12">
        {menuCategories.map((cat) => {
          const items = getItemsByCategory(cat.id, filter);
          if (!items.length) return null;

          return (
            <section
              key={cat.id}
              id={cat.id}
              className="scroll-mt-24"
            >
              <h2 className="heading-3 text-2xl">{cat.label}</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}