"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const searchParams = useSearchParams();
  const router = useRouter();
  const from = searchParams.get("from") || "/admin";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setStatus("submitting");
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      router.push(from);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="card-surface max-w-sm w-full p-6 space-y-4"
      >
        <h1 className="font-display text-xl text-white">Admin Login</h1>
        <p className="text-xs text-slate-400">
          Enter the admin password to manage offers and website content.
        </p>
        <div className="space-y-1">
          <label
            htmlFor="password"
            className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
          />
        </div>
        {status === "error" && (
          <p className="text-xs text-red-400">
            Invalid password. Please try again.
          </p>
        )}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center rounded-full bg-gold px-4 py-2.5 text-sm font-medium text-navy-950 shadow-soft hover:bg-amber-300 disabled:opacity-75"
        >
          {status === "submitting" ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}