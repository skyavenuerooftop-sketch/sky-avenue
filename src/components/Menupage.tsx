// "use client";

// import { useState, useMemo } from "react";
// import { createMetadata } from "@/src/lib/seo";
// import {
//   menuItems,
//   menuCategories,
//   type MenuCategoryId,
// } from "@/src/lib/menuData";
// import MenuCard from "@/src/components/MenuCard";

// export const metadata = createMetadata({
//   title: "Menu",
//   description:
//     "Explore SKY AVENUE's rooftop menu: mocktails, shakes, starters, pizza, pasta, Indian, Chinese, desserts and shisha.",
//   path: "/menu",
//   keywords: [
//     "Sky Avenue menu",
//     "veg non-veg menu",
//     "mocktails",
//     "tandoor",
//     "pizza",
//     "pasta",
//     "rooftop restaurant menu",
//   ],
// });

// type FilterId = "all" | "veg" | "non-veg";

// const filters: { id: FilterId; label: string }[] = [
//   { id: "all", label: "All" },
//   { id: "veg", label: "Veg" },
//   { id: "non-veg", label: "Non-Veg" },
// ];
// const ALWAYS_VISIBLE_CATEGORIES: MenuCategoryId[] = [
//   "mocktails",
//   "shakes",
//   "tea-coffee",
// ];

// function filterItemsByCategory(
//   category: MenuCategoryId,
//   filter: FilterId
// ) {
//   let items = menuItems.filter((item) => item.category === category);

//   // ✅ Drinks are neutral – ignore veg/non-veg filter
//   if (ALWAYS_VISIBLE_CATEGORIES.includes(category)) {
//     return items;
//   }

//   if (filter === "veg") {
//     items = items.filter((i) => i.isVeg);
//   }

//   if (filter === "non-veg") {
//     items = items.filter((i) => !i.isVeg);
//   }

//   return items;
// }


// export default function MenuPage() {
//   const [filter, setFilter] = useState<FilterId>("all");

//   /** ✅ Categories that actually have items for the active filter */
//   const visibleCategories = useMemo(() => {
//     return menuCategories
//       .map((cat) => ({
//         ...cat,
//         items: filterItemsByCategory(cat.id, filter),
//       }))
//       .filter((cat) => cat.items.length > 0);
//   }, [filter]);

//   return (
//     <div className="section section-padding">
//       <header className="max-w-2xl">
//         <h1 className="heading-1 text-4xl sm:text-5xl">Our Menu</h1>
//         <p className="mt-4 text-sm text-slate-300 sm:text-base">
//           From handcrafted mocktails and gourmet starters to wood-fired pizza,
//           pastas, Indian & Chinese mains, SKY AVENUE offers a full rooftop dining
//           menu for every mood.
//         </p>
//       </header>

//       {/* Veg / Non-Veg Filter */}
//       <div className="mt-8 flex flex-wrap items-center gap-3">
//         <div
//           className="inline-flex rounded-full bg-slate-900/70 p-1 text-xs font-medium"
//           role="tablist"
//         >
//           {filters.map((f) => {
//             const active = f.id === filter;
//             return (
//               <button
//                 key={f.id}
//                 type="button"
//                 onClick={() => setFilter(f.id)}
//                 className={`rounded-full px-4 py-1.5 transition-colors ${
//                   active
//                     ? "bg-gold text-navy-950"
//                     : "text-slate-300 hover:bg-slate-800/80"
//                 }`}
//               >
//                 {f.label}
//               </button>
//             );
//           })}
//         </div>

//         {/* ✅ Category nav – only valid categories */}
//         <nav
//           className="mt-3 flex w-full gap-2 overflow-x-auto text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300 sm:mt-0"
//           aria-label="Jump to menu sections"
//         >
//           {visibleCategories.map((cat) => (
//             <a
//               key={cat.id}
//               href={`#${cat.id}`}
//               className="whitespace-nowrap rounded-full border border-slate-700 px-3 py-1 hover:border-gold hover:text-gold"
//             >
//               {cat.label}
//             </a>
//           ))}
//         </nav>
//       </div>

//       {/* Categories & items */}
//       <div className="mt-10 space-y-12">
//         {visibleCategories.map((cat) => (
//           <section key={cat.id} id={cat.id}>
//             <h2 className="heading-3 text-2xl">{cat.label}</h2>
//             <div className="mt-5 grid gap-4 sm:grid-cols-2">
//               {cat.items.map((item) => (
//                 <MenuCard key={item.id} item={item} />
//               ))}
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }


// app/menu/page.tsx

// import { createMetadata } from "@/src/lib/seo";
// import MenuPageClient from "@/src/components/MenuPageClient";

// export const metadata = createMetadata({
//   title: "Menu",
//   description:
//     "Explore SKY AVENUE's rooftop menu: mocktails, shakes, starters, pizza, pasta, Indian, Chinese, desserts and shisha.",
//   path: "/menu",
//   keywords: [
//     "Sky Avenue menu",
//     "veg non-veg menu",
//     "mocktails",
//     "tandoor",
//     "pizza",
//     "pasta",
//     "rooftop restaurant menu",
//   ],
// });

// export default function MenuPage() {
//   return <MenuPageClient offers={[]} />;
// }


// app/menu/page.tsx

import { createMetadata } from "@/src/lib/seo";
import { getActiveOffers } from "@/src/lib/offersFirebase";
import MenuPageClient from "@/src/components/MenuPageClient";

export const metadata = createMetadata({
  title: "Menu",
  description:
    "Explore SKY AVENUE's rooftop menu: mocktails, shakes, starters, pizza, pasta, Indian, Chinese, desserts and shisha.",
  path: "/menu"
});

export const dynamic = "force-dynamic";

export default async function MenuPage() {
  const activeOffers = await getActiveOffers();

  const offersForClient = activeOffers.map((o) => ({
    id: o.id,
    title: o.title,
    description: o.description,
    badge: o.badge ?? null,
    endsAt: o.endsAt ? o.endsAt.toISOString() : null
  }));

  return <MenuPageClient offers={offersForClient} />;
}