"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/offers", label: "Offers" },
  // { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <nav className="section flex h-16 items-center justify-between">
        {/* <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold to-skybrand text-sm font-bold text-navy-950 shadow-soft">
            SA
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg tracking-tight text-white">
              SKY AVENUE
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
              Rooftop Dining
            </span>
          </div>
        </Link> */}
        <Link href="/" className="flex items-center gap-3">
  <div className="flex items-center gap-2">
    <Image
  src="/skyevenuelogo.png"
  alt="SKY AVENUE Rooftop Restaurant logo"
  width={120}
  height={100}
  priority
  className="h-14 sm:h-16 md:h-20 w-auto"
/>

    {/* Keep text for better readability & SEO */}
    <div className="hidden flex-col leading-tight sm:flex">
      <span className="font-display text-l tracking-tight text-white">
        SKY AVENUE
      </span>
      <span className="text-[8px] uppercase tracking-[0.18em] text-slate-400">
        Rooftop Dining
      </span>
    </div>
  </div> 
</Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-5 text-sm text-slate-200">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors hover:text-gold ${
                      active ? "text-gold" : "text-slate-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* <Link
            href="/contact#reservation"
            className="rounded-full bg-gold px-4 py-2 text-sm font-medium text-navy-950 shadow-soft hover:bg-amber-300"
          >
            Reserve Table
          </Link> */}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-700 p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open main menu</span>
          <div className="flex h-4 w-4 flex-col justify-between">
            <span className="h-[2px] w-full rounded bg-slate-100"></span>
            <span className="h-[2px] w-full rounded bg-slate-100"></span>
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-800/60 bg-slate-950/95 md:hidden">
          <div className="section py-3">
            <ul className="flex flex-col gap-2 text-sm text-slate-200">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-2 py-2 hover:bg-slate-900 ${
                        active ? "text-gold" : "text-slate-200"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* <Link
              href="/contact#reservation"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-gold px-4 py-2 text-sm font-medium text-navy-950"
            >
              Reserve Table
            </Link> */}
          </div>
        </div>
      )}
    </header>
  );
}