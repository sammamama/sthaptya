"use client";

import { useActionState } from "react";
import { submitBooking, type FormState } from "@/app/book/actions";

const initial: FormState = { success: false };

export default function BookingForm() {
  const [state, action, pending] = useActionState(submitBooking, initial);

  if (state.success) {
    return (
      <div className="rounded-3xl border border-black/10 bg-white/40 backdrop-blur-xl p-10 text-center">
        <svg
          className="mx-auto mb-4 text-green-600"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
        <h2 className="font-sans text-2xl font-bold text-black mb-2">
          Message Sent
        </h2>
        <p className="font-display text-black/60">
          We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      action={action}
      className="relative z-10 rounded-3xl border border-black/10 bg-white/40 backdrop-blur-xl p-6 sm:p-10 space-y-6"
    >
      <h2 className="font-sans text-2xl font-bold text-black mb-2">
        Book a Meeting
      </h2>
      <p className="font-display text-black/50 text-sm mb-6">
        Tell us about your project and we&apos;ll get in touch.
      </p>

      {state.error && (
        <div className="rounded-xl bg-red-500/10 border border-red-400/20 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-black/70 mb-1.5">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full rounded-xl border border-black/10 bg-white/50 backdrop-blur-sm px-4 py-3 text-black placeholder-black/30 outline-none focus:border-black/30 focus:ring-1 focus:ring-black/10 transition-colors"
            placeholder="John"
          />
          {state.fieldErrors?.firstName && (
            <p className="mt-1 text-xs text-red-600">{state.fieldErrors.firstName[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-black/70 mb-1.5">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full rounded-xl border border-black/10 bg-white/50 backdrop-blur-sm px-4 py-3 text-black placeholder-black/30 outline-none focus:border-black/30 focus:ring-1 focus:ring-black/10 transition-colors"
            placeholder="Doe"
          />
          {state.fieldErrors?.lastName && (
            <p className="mt-1 text-xs text-red-600">{state.fieldErrors.lastName[0]}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-black/10 bg-white/50 backdrop-blur-sm px-4 py-3 text-black placeholder-black/30 outline-none focus:border-black/30 focus:ring-1 focus:ring-black/10 transition-colors"
          placeholder="john@example.com"
        />
        {state.fieldErrors?.email && (
          <p className="mt-1 text-xs text-red-600">{state.fieldErrors.email[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-black/10 bg-white/50 backdrop-blur-sm px-4 py-3 text-black placeholder-black/30 outline-none focus:border-black/30 focus:ring-1 focus:ring-black/10 transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
        {state.fieldErrors?.message && (
          <p className="mt-1 text-xs text-red-600">{state.fieldErrors.message[0]}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-black py-3.5 text-base font-semibold text-white transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
