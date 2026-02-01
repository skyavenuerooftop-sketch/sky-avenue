"use client";

import { useState } from "react";

export default function QuickContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    try {
      setStatus("submitting");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      if (!res.ok) throw new Error("Contact request failed");

      setStatus("success");
      // Optional: reset
      // setName(""); setEmail(""); setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="card-surface space-y-4 p-5 sm:p-6"
      aria-label="Quick contact form"
    >
      <div className="space-y-1">
        <label
          htmlFor="contact-name"
          className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
        />
      </div>
      <div className="space-y-1">
        <label
          htmlFor="contact-email"
          className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
        />
      </div>
      <div className="space-y-1">
        <label
          htmlFor="contact-message"
          className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-gold px-4 py-2.5 text-sm font-medium text-navy-950 shadow-soft hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-80"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      <div className="min-h-[1.5rem] text-xs" aria-live="polite">
        {status === "success" && (
          <p className="text-emerald-400">
            Thank you. We&apos;ve received your message.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400">
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </form>
  );
}