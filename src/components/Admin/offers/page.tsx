"use client";

import { useEffect, useState } from "react";

type Offer = {
  id: string;
  title: string;
  description: string;
  badge?: string | null;
  startsAt?: string | null;  // ISO string from API
  endsAt?: string | null;    // ISO string from API
  isFeaturedOnHome: boolean;
  priority?: number | null;
  isActive: boolean;
};

type NewOfferForm = {
  title: string;
  description: string;
  badge: string;
  startsAt: string;
  endsAt: string;
  isFeaturedOnHome: boolean;
  priority: string;
  isActive: boolean;
};

export default function AdminOffersPage() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState<NewOfferForm>({
    title: "",
    description: "",
    badge: "",
    startsAt: "",
    endsAt: "",
    isFeaturedOnHome: false,
    priority: "",
    isActive: true
  });

  async function loadOffers() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/offers", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to load offers");
      const data: Offer[] = await res.json();
      setOffers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadOffers();
  }, []);

  function handleFormChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type, checked } = e.target as any;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.description.trim()) return;

    try {
      setSubmitting(true);

      await fetch("/api/admin/offers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title.trim(),
          description: form.description.trim(),
          badge: form.badge.trim() || undefined,
          startsAt: form.startsAt || undefined,
          endsAt: form.endsAt || undefined,
          isFeaturedOnHome: form.isFeaturedOnHome,
          priority: form.priority ? Number(form.priority) : undefined,
          isActive: form.isActive
        })
      });

      // Reset form
      setForm({
        title: "",
        description: "",
        badge: "",
        startsAt: "",
        endsAt: "",
        isFeaturedOnHome: false,
        priority: "",
        isActive: true
      });

      await loadOffers();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this offer? This cannot be undone.")) return;
    try {
      await fetch(`/api/admin/offers/${id}`, {
        method: "DELETE"
      });
      await loadOffers();
    } catch (err) {
      console.error(err);
    }
  }

  async function handleToggleActive(offer: Offer) {
    try {
      await fetch(`/api/admin/offers/${offer.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !offer.isActive })
      });
      await loadOffers();
    } catch (err) {
      console.error(err);
    }
  }

  async function handleToggleFeatured(offer: Offer) {
    try {
      await fetch(`/api/admin/offers/${offer.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isFeaturedOnHome: !offer.isFeaturedOnHome })
      });
      await loadOffers();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <h1 className="font-display text-2xl text-white">Offers Dashboard</h1>
        <p className="mt-1 text-sm text-slate-400">
          Create, activate or remove offers that appear on the public Offers
          page and the home page banner.
        </p>
      </section>

      {/* Create new offer */}
      <section className="card-surface p-5 space-y-4">
        <h2 className="font-display text-lg text-white">Create New Offer</h2>
        <form className="grid gap-4 md:grid-cols-2" onSubmit={handleCreate}>
          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
              Title
            </label>
            <input
              name="title"
              type="text"
              value={form.title}
              onChange={handleFormChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
              placeholder="e.g. Skyline Date Night – 3-Course Dinner for Two"
            />
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
              Description
            </label>
            <textarea
              name="description"
              rows={3}
              value={form.description}
              onChange={handleFormChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
              placeholder="Describe what the offer includes, timings, conditions, etc."
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
              Badge (optional)
            </label>
            <input
              name="badge"
              type="text"
              value={form.badge}
              onChange={handleFormChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
              placeholder="e.g. Daily, Limited, Weekends"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
              Priority (lower = higher)
            </label>
            <input
              name="priority"
              type="number"
              value={form.priority}
              onChange={handleFormChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
              placeholder="e.g. 1"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
              Starts At (optional)
            </label>
            <input
              name="startsAt"
              type="datetime-local"
              value={form.startsAt}
              onChange={handleFormChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
              Ends At (optional)
            </label>
            <input
              name="endsAt"
              type="datetime-local"
              value={form.endsAt}
              onChange={handleFormChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
            />
          </div>

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-xs text-slate-300">
              <input
                type="checkbox"
                name="isFeaturedOnHome"
                checked={form.isFeaturedOnHome}
                onChange={handleFormChange}
              />
              Featured on Home banner
            </label>
          </div>

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-xs text-slate-300">
              <input
                type="checkbox"
                name="isActive"
                checked={form.isActive}
                onChange={handleFormChange}
              />
              Active (visible on website)
            </label>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-full bg-gold px-4 py-2.5 text-sm font-medium text-navy-950 shadow-soft hover:bg-amber-300 disabled:opacity-75"
            >
              {submitting ? "Creating..." : "Create Offer"}
            </button>
          </div>
        </form>
      </section>

      {/* Offers list */}
      <section className="space-y-3">
        <h2 className="font-display text-lg text-white">Existing Offers</h2>
        {loading ? (
          <p className="text-sm text-slate-400">Loading offers...</p>
        ) : offers.length === 0 ? (
          <p className="text-sm text-slate-400">
            No offers yet. Create your first offer above.
          </p>
        ) : (
          <div className="space-y-3">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="card-surface flex flex-col gap-2 p-4 text-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-white">{offer.title}</p>
                    <p className="text-xs text-slate-300">
                      {offer.description}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.16em]">
                      {offer.badge && (
                        <span className="rounded-full bg-skybrand/15 px-3 py-0.5 text-skybrand">
                          {offer.badge}
                        </span>
                      )}
                      {offer.isFeaturedOnHome && (
                        <span className="rounded-full bg-gold/15 px-3 py-0.5 text-gold">
                          Home Banner
                        </span>
                      )}
                      {!offer.isActive && (
                        <span className="rounded-full bg-red-500/10 px-3 py-0.5 text-red-400">
                          Inactive
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 text-xs">
                    <button
                      onClick={() => handleToggleActive(offer)}
                      className="rounded-full border border-slate-700 px-3 py-1 text-slate-200 hover:border-gold hover:text-gold"
                    >
                      {offer.isActive ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      onClick={() => handleToggleFeatured(offer)}
                      className="rounded-full border border-slate-700 px-3 py-1 text-slate-200 hover:border-gold hover:text-gold"
                    >
                      {offer.isFeaturedOnHome
                        ? "Remove from Home"
                        : "Set as Home"}
                    </button>
                    <button
                      onClick={() => handleDelete(offer.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="text-xs text-slate-400">
                  {offer.startsAt && (
                    <span>
                      Starts: {new Date(offer.startsAt).toLocaleString()}{" "}
                    </span>
                  )}
                  {offer.endsAt && (
                    <span>
                      • Ends: {new Date(offer.endsAt).toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}