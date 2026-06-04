"use client";

import { useState } from "react";

export default function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <div className="fixed inset-0 z-[200] bg-black overflow-y-auto">
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-sm">
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-white text-sm font-medium hover:text-white/70 transition-colors"
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
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black shadow-lg hover:bg-white/90 transition-colors"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
      Show all photos
    </button>
  );
}
