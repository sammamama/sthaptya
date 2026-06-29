"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const heroImages = images.slice(0, 5);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";

    const lenis = (window as unknown as Record<string, unknown>).__lenis as
      | { stop: () => void; start: () => void }
      | undefined;
    lenis?.stop();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const el = modalRef.current;
    if (el) {
      const stopWheel = (e: WheelEvent) => e.stopPropagation();
      const stopTouch = (e: TouchEvent) => e.stopPropagation();
      el.addEventListener("wheel", stopWheel, { passive: false });
      el.addEventListener("touchmove", stopTouch, { passive: false });
      return () => {
        document.body.style.overflow = "";
        lenis?.start();
        el.removeEventListener("wheel", stopWheel);
        el.removeEventListener("touchmove", stopTouch);
        document.removeEventListener("keydown", onKeyDown);
      };
    }

    return () => {
      document.body.style.overflow = "";
      lenis?.start();
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="relative grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 rounded-2xl overflow-hidden max-h-[70vh] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="md:col-span-2 md:row-span-2">
          <img
            src={heroImages[0]}
            alt={title}
            className="h-full w-full object-cover hover:brightness-90 transition-all"
          />
        </div>
        {heroImages.slice(1, 5).map((src, i) => (
          <div key={i}>
            <img
              src={src}
              alt={`${title} — ${i + 2}`}
              className="h-full w-full object-cover hover:brightness-90 transition-all"
            />
          </div>
        ))}
        <button
          className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black shadow-lg hover:bg-white/90 transition-colors cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>
          Show all photos
        </button>
      </div>

      {mounted && isOpen && createPortal(
        <div ref={modalRef} className="fixed inset-0 z-[9999] bg-black overflow-y-auto overscroll-contain">
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-sm">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-white text-sm font-medium hover:text-white/70 transition-colors cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Close
            </button>
            <span className="font-sans text-sm text-white/60">
              {images.length} photos
            </span>
          </div>
          <div className="max-w-4xl mx-auto px-4 pb-16 space-y-2">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${title} — photo ${i + 1}`}
                className="w-full rounded-lg object-cover"
              />
            ))}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
