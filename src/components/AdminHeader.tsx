"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminHeader() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    try {
      setLoading(true);
      await fetch("/api/admin/logout", { method: "POST" });
      // After cookie is cleared, send user to login
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <header className="border-b border-slate-800 bg-slate-900/80">
      <div className="max-w-5xl mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/admin" className="font-display text-lg text-white">
          SKY AVENUE Admin
        </Link>

        <div className="flex items-center gap-4 text-sm text-slate-300">
          <Link href="/admin/offers" className="hover:text-gold">
            Offers
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            disabled={loading}
            className="rounded-full border border-slate-700 px-3 py-1 text-xs hover:border-red-400 hover:text-red-400 disabled:opacity-60"
          >
            {loading ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </header>
  );
}