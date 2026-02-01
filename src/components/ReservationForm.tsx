"use client";

import { useState } from "react";

type ReservationFormData = {
  fullName: string;
  date: string;
  time: string;
  guests: string;
  phone: string;
  notes: string;
};

type Errors = Partial<Record<keyof ReservationFormData, string>>;

export default function ReservationForm() {
  const [data, setData] = useState<ReservationFormData>({
    fullName: "",
    date: "",
    time: "",
    guests: "2",
    phone: "",
    notes: ""
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  function validate(values: ReservationFormData): Errors {
    const newErrors: Errors = {};
    if (!values.fullName.trim()) newErrors.fullName = "Name is required.";
    if (!values.date) newErrors.date = "Date is required.";
    if (!values.time) newErrors.time = "Time is required.";
    if (!values.phone.trim()) newErrors.phone = "Phone number is required.";
    const guestsNum = Number(values.guests);
    if (!guestsNum || guestsNum < 1)
      newErrors.guests = "Please enter at least 1 guest.";
    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    if (submitted) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setStatus("submitting");
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          guests: Number(data.guests)
        })
      });

      if (!res.ok) {
        throw new Error("Reservation request failed");
      }

      setStatus("success");
      // Optional: reset fields
      // setData({ fullName: "", date: "", time: "", guests: "2", phone: "", notes: "" });
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
      id="reservation"
    >
      <h2 className="heading-3 text-xl">Reserve a Table</h2>
      <p className="text-sm text-muted">
        Share your preferred date and time, and we&apos;ll confirm your rooftop
        experience shortly.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label
            htmlFor="fullName"
            className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={data.fullName}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
          />
          {errors.fullName && (
            <p className="text-xs text-red-400">{errors.fullName}</p>
          )}
        </div>
        <div className="space-y-1">
          <label
            htmlFor="phone"
            className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={data.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
          />
          {errors.phone && (
            <p className="text-xs text-red-400">{errors.phone}</p>
          )}
        </div>
        <div className="space-y-1">
          <label
            htmlFor="date"
            className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
          >
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={data.date}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
          />
          {errors.date && <p className="text-xs text-red-400">{errors.date}</p>}
        </div>
        <div className="space-y-1">
          <label
            htmlFor="time"
            className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
          >
            Time
          </label>
          <input
            id="time"
            name="time"
            type="time"
            value={data.time}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
          />
          {errors.time && <p className="text-xs text-red-400">{errors.time}</p>}
        </div>
        <div className="space-y-1">
          <label
            htmlFor="guests"
            className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
          >
            Guests
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            value={data.guests}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
          />
          {errors.guests && (
            <p className="text-xs text-red-400">{errors.guests}</p>
          )}
        </div>
      </div>
      <div className="space-y-1">
        <label
          htmlFor="notes"
          className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
        >
          Notes / Special Requests
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={data.notes}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
          placeholder="Occasion, dietary needs, seating preference..."
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-gold px-4 py-2.5 text-sm font-medium text-navy-950 shadow-soft hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-80"
      >
        {isSubmitting ? "Submitting..." : "Submit Reservation"}
      </button>
      <div className="min-h-[1.5rem] text-xs" aria-live="polite">
        {status === "success" && (
          <p className="text-emerald-400">
            Thank you. We&apos;ve received your request and will confirm
            shortly.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400">
            Something went wrong. Please try again or call us directly.
          </p>
        )}
      </div>
    </form>
  );
}