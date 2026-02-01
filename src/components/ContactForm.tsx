// "use client";

// import { useState } from "react";

// type Mode = "reservation" | "general";

// type FormData = {
//   mode: Mode;
//   name: string;
//   phone: string;
//   email: string;
//   date: string;
//   time: string;
//   guests: string;
//   message: string;
// };

// type Errors = Partial<Record<keyof FormData, string>>;

// export default function ContactForm() {
//   const [mode, setMode] = useState<Mode>("reservation");
//   const [data, setData] = useState<FormData>({
//     mode: "reservation",
//     name: "",
//     phone: "",
//     email: "",
//     date: "",
//     time: "",
//     guests: "2",
//     message: ""
//   });
//   const [errors, setErrors] = useState<Errors>({});
//   const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
//     "idle"
//   );

//   function handleModeChange(newMode: Mode) {
//     setMode(newMode);
//     setData((prev) => ({ ...prev, mode: newMode }));
//     setErrors({});
//     setStatus("idle");
//   }

//   function handleChange(
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name as keyof FormData]) {
//       setErrors((prev) => ({ ...prev, [name]: undefined }));
//     }
//   }

//   function validate(values: FormData): Errors {
//     const newErrors: Errors = {};

//     if (!values.name.trim()) newErrors.name = "Name is required.";

//     if (values.mode === "reservation") {
//       if (!values.phone.trim()) newErrors.phone = "Phone is required.";
//       if (!values.date) newErrors.date = "Date is required.";
//       if (!values.time) newErrors.time = "Time is required.";
//       const guestsNum = Number(values.guests);
//       if (!guestsNum || guestsNum < 1) {
//         newErrors.guests = "Please enter at least 1 guest.";
//       }
//     } else {
//       if (!values.email.trim()) newErrors.email = "Email is required.";
//       if (!values.message.trim()) newErrors.message = "Message is required.";
//     }

//     return newErrors;
//   }

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     const validationErrors = validate(data);
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length > 0) return;

//     try {
//       setStatus("submitting");

//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           mode,
//           name: data.name,
//           phone: data.phone || undefined,
//           email: data.email || undefined,
//           date: data.date || undefined,
//           time: data.time || undefined,
//           guests: data.guests ? Number(data.guests) : undefined,
//           message: data.message || ""
//         })
//       });

//       if (!res.ok) throw new Error("Request failed");

//       setStatus("success");
//       // Optionally reset:
//       // setData({ ...data, phone: "", email: "", date: "", time: "", guests: "2", message: "" });
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//     }
//   }

//   const isSubmitting = status === "submitting";

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="card-surface space-y-4 p-5 sm:p-6"
//       id="reservation"
//       aria-label="Contact and reservation form"
//     >
//       {/* Mode toggle */}
//       <div className="inline-flex rounded-full bg-slate-900/70 p-1 text-xs font-medium">
//         <button
//           type="button"
//           onClick={() => handleModeChange("reservation")}
//           className={`rounded-full px-4 py-1.5 transition-colors ${
//             mode === "reservation"
//               ? "bg-gold text-navy-950"
//               : "text-slate-300 hover:bg-slate-800/80"
//           }`}
//         >
//           Reserve a Table
//         </button>
//         <button
//           type="button"
//           onClick={() => handleModeChange("general")}
//           className={`rounded-full px-4 py-1.5 transition-colors ${
//             mode === "general"
//               ? "bg-gold text-navy-950"
//               : "text-slate-300 hover:bg-slate-800/80"
//           }`}
//         >
//           Quick Message
//         </button>
//       </div>

//       <div>
//         <h2 className="heading-3 text-xl">
//           {mode === "reservation" ? "Reserve a Table" : "Contact SKY AVENUE"}
//         </h2>
//         <p className="mt-1 text-sm text-muted">
//           {mode === "reservation"
//             ? "Share your preferred date and time, and we’ll confirm your rooftop experience shortly."
//             : "Ask about events, menu, or any other query and we’ll get back to you soon."}
//         </p>
//       </div>

//       {/* Common fields */}
//       <div className="grid gap-4 sm:grid-cols-2">
//         <div className="space-y-1 sm:col-span-2">
//           <label
//             htmlFor="name"
//             className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
//           >
//             Full Name
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             value={data.name}
//             onChange={handleChange}
//             className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
//           />
//           {errors.name && (
//             <p className="text-xs text-red-400">{errors.name}</p>
//           )}
//         </div>

//         <div className="space-y-1">
//           <label
//             htmlFor="phone"
//             className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
//           >
//             Phone {mode === "reservation" && <span className="text-red-400">*</span>}
//           </label>
//           <input
//             id="phone"
//             name="phone"
//             type="tel"
//             value={data.phone}
//             onChange={handleChange}
//             className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
//           />
//           {errors.phone && (
//             <p className="text-xs text-red-400">{errors.phone}</p>
//           )}
//         </div>

//         <div className="space-y-1">
//           <label
//             htmlFor="email"
//             className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
//           >
//             Email {mode === "general" && <span className="text-red-400">*</span>}
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             value={data.email}
//             onChange={handleChange}
//             className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
//           />
//           {errors.email && (
//             <p className="text-xs text-red-400">{errors.email}</p>
//           )}
//         </div>
//       </div>

//       {/* Reservation-only fields */}
//       {mode === "reservation" && (
//         <div className="grid gap-4 sm:grid-cols-3">
//           <div className="space-y-1">
//             <label
//               htmlFor="date"
//               className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
//             >
//               Date
//             </label>
//             <input
//               id="date"
//               name="date"
//               type="date"
//               value={data.date}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
//             />
//             {errors.date && (
//               <p className="text-xs text-red-400">{errors.date}</p>
//             )}
//           </div>
//           <div className="space-y-1">
//             <label
//               htmlFor="time"
//               className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
//             >
//               Time
//             </label>
//             <input
//               id="time"
//               name="time"
//               type="time"
//               value={data.time}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
//             />
//             {errors.time && (
//               <p className="text-xs text-red-400">{errors.time}</p>
//             )}
//           </div>
//           <div className="space-y-1">
//             <label
//               htmlFor="guests"
//               className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
//             >
//               Guests
//             </label>
//             <input
//               id="guests"
//               name="guests"
//               type="number"
//               min={1}
//               value={data.guests}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
//             />
//             {errors.guests && (
//               <p className="text-xs text-red-400">{errors.guests}</p>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Message / Notes */}
//       <div className="space-y-1">
//         <label
//           htmlFor="message"
//           className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
//         >
//           {mode === "reservation" ? "Notes / Special Requests" : "Message"}
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           rows={mode === "reservation" ? 3 : 4}
//           value={data.message}
//           onChange={handleChange}
//           className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
//           placeholder={
//             mode === "reservation"
//               ? "Occasion, dietary needs, seating preference..."
//               : "Ask about events, menu, or any other query..."
//           }
//         />
//         {errors.message && (
//           <p className="text-xs text-red-400">{errors.message}</p>
//         )}
//       </div>

//       {/* Submit */}
//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="inline-flex w-full items-center justify-center rounded-full bg-gold px-4 py-2.5 text-sm font-medium text-navy-950 shadow-soft hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-80"
//       >
//         {isSubmitting
//           ? "Submitting..."
//           : mode === "reservation"
//           ? "Submit Reservation Request"
//           : "Send Message"}
//       </button>

//       <div className="min-h-[1.5rem] text-xs" aria-live="polite">
//         {status === "success" && (
//           <p className="text-emerald-400">
//             Thank you. We&apos;ve received your{" "}
//             {mode === "reservation" ? "reservation request" : "message"} and
//             will get back to you shortly.
//           </p>
//         )}
//         {status === "error" && (
//           <p className="text-red-400">
//             Something went wrong. Please try again or call us directly.
//           </p>
//         )}
//       </div>
//     </form>
//   );
// }



// components/ContactForm.tsx
"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

export default function ContactForm() {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(values: FormData): Errors {
    const newErrors: Errors = {};
    if (!values.name.trim()) newErrors.name = "Name is required.";
    if (!values.email.trim()) newErrors.email = "Email is required.";
    if (!values.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      setStatus("submitting");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      // Optional: reset form
      // setData({ name: "", email: "", phone: "", message: "" });
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
      id="reservation" // keep id so existing anchor links still work
      aria-label="Contact form"
    >
      <h2 className="heading-3 text-xl">Send us a message</h2>
      <p className="text-sm text-muted">
        Ask us anything about events, menu, bookings or special requests and
        we&apos;ll get back to you shortly.
      </p>

      <div className="space-y-1">
        <label
          htmlFor="name"
          className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={data.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
        />
        {errors.name && (
          <p className="text-xs text-red-400">{errors.name}</p>
        )}
      </div>

      <div className="space-y-1">
        <label
          htmlFor="email"
          className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
        />
        {errors.email && (
          <p className="text-xs text-red-400">{errors.email}</p>
        )}
      </div>

      <div className="space-y-1">
        <label
          htmlFor="phone"
          className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
        >
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={data.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
        />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={data.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-gold"
          placeholder="Share your query, event details or any request..."
        />
        {errors.message && (
          <p className="text-xs text-red-400">{errors.message}</p>
        )}
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
            Thank you. We&apos;ve received your message and will get back to you
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