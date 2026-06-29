"use client";

import { useState } from "react";

function ArrowUpRight() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);
  const isLight = variant === "light";

  return (
    <nav
      className="fixed top-4 left-0 right-0 z-100 flex items-center justify-between px-8 lg:px-16"
    >
      {/* Left — Logo */}
      <div className="liquid-glass flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
        <img src="/logo.webp" alt="Sushil Sharma Associates logo" className="h-full w-full object-cover" />
      </div>

      {/* Center — Nav pill (desktop only) */}
      <div className={`hidden border md:block backdrop-blur-3xl rounded-full px-1.5 py-1.5 ${isLight ? "bg-white/70 border-black/10" : "bg-black/50"}`}>
        <div className="flex items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body px-3 py-2 text-sm font-medium transition-colors ${isLight ? "text-black hover:text-red-800" : "text-white hover:text-red-800"}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/book"
            className="ml-1 flex items-center gap-1 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            Book a Meeting
            <ArrowUpRight />
          </a>
        </div>
      </div>

      {/* Right — Spacer to balance logo (desktop only) */}
      <div className="hidden md:block h-12 w-12" aria-hidden="true" />

      {/* Right — Hamburger (mobile only) */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-2xl md:hidden ${isLight ? "bg-black/10 border border-black/20" : "liquid-glass"}`}
      >
        <svg className={isLight ? "text-black" : "text-neutral-100"} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {open ? (
            <>
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </>
          ) : (
            <>
              <path d="M3 6h18" />
              <path d="M3 12h18" />
              <path d="M3 18h18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile dropdown menu */}
      {open && (
        <div className={`absolute top-16 right-8 left-8 flex flex-col gap-1 rounded-2xl border backdrop-blur-3xl p-3 md:hidden ${isLight ? "bg-white/80 border-black/10" : "bg-black/70"}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-body rounded-xl px-4 py-3 text-base font-medium transition-colors ${isLight ? "text-black hover:bg-black/5" : "text-white hover:bg-white/10"}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/book"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center justify-center gap-1 whitespace-nowrap rounded-xl bg-white px-4 py-3 text-base font-medium text-black transition-opacity hover:opacity-90"
          >
            Book a Meeting
            <ArrowUpRight />
          </a>
        </div>
      )}
    </nav>
  );
}
