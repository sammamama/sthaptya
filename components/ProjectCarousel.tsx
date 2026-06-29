"use client";

import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  slug?: string;
  category: string;
  categorySlug?: string;
  description: string;
  image: string;
  images?: string[];
}

function truncateWords(text: string, max: number) {
  const words = text.trim().split(/\s+/);
  if (words.length <= max) return text;
  return words.slice(0, max).join(" ") + "...";
}

export default function ProjectCarousel({
  projects,
  showInfo = false,
}: {
  projects: Project[];
  showInfo?: boolean;
}) {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeId, setActiveId] = useState<number | null>(null);
  const didDrag = useRef(false);

  const scrollBy = (dir: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    didDrag.current = false;
    setStartX(e.clientX);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 5) didDrag.current = true;
    scrollRef.current.scrollLeft = scrollLeft - dx;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (activeId === null) return;
    const onDocPointerDown = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest("[data-pc-card]");
      const id = card ? Number(card.getAttribute("data-pc-card")) : null;
      // Tapping anything that isn't the currently-active card dismisses it.
      if (id !== activeId) setActiveId(null);
    };
    document.addEventListener("pointerdown", onDocPointerDown);
    return () => document.removeEventListener("pointerdown", onDocPointerDown);
  }, [activeId]);

  const handleClick = (e: React.MouseEvent, id: number) => {
    if (didDrag.current) {
      e.preventDefault();
      return;
    }
    // On touch devices (no hover), first tap reveals the info overlay,
    // second tap on the now-active card follows the link.
    if (
      !showInfo &&
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none)").matches &&
      activeId !== id
    ) {
      e.preventDefault();
      setActiveId(id);
    }
  };

  return (
  <div className="relative w-full">
      <ul
        ref={scrollRef}
        role="group"
        aria-roledescription="carousel"
        className="flex gap-5 list-none p-0 m-0 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing scroll-smooth snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {projects.map((project, i) => (
          <li
            key={project.id}
            data-pc-card={project.id}
            className="group flex-shrink-0 snap-start w-[280px] sm:w-[340px] lg:w-[400px]"
            aria-posinset={i + 1}
            aria-setsize={projects.length}
          >
            <a href="/projects" onClick={(e) => handleClick(e, project.id)} className="block">
              <div className="relative overflow-hidden rounded-xl h-[210px] sm:h-[255px] lg:h-[300px]">
                <img
                  draggable={false}
                  src={project.image}
                  alt={project.title}
                  className={`h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-[0.3] group-focus-within:scale-105 group-focus-within:brightness-[0.3] ${activeId === project.id ? "scale-105 brightness-[0.3]" : ""}`}
                />
                {!showInfo && (
                  <div className={`absolute inset-0 flex flex-col justify-end p-5 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 ${activeId === project.id ? "opacity-100 translate-y-0" : ""}`}>
                    <span className="font-body text-xs uppercase tracking-widest text-white/60 mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-sans text-lg font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-display text-sm text-white/70 mt-2">
                      {truncateWords(project.description, 50)}
                    </p>
                  </div>
                )}
              </div>

              {showInfo && (
                <div className="mt-3">
                  <span className="font-body text-xs uppercase tracking-widest text-black/50">
                    {project.category}
                  </span>
                  <h3 className="font-sans text-lg font-bold text-black leading-tight mt-1">
                    {project.title}
                  </h3>
                  <p className="font-display text-sm text-black/60 mt-1">
                    {truncateWords(project.description, 50)}
                  </p>
                </div>
              )}
            </a>
          </li>
        ))}
      </ul>

      <nav className="flex justify-center gap-3 mt-6">
        <button
          onClick={() => scrollBy(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-black/5 backdrop-blur-sm text-black cursor-pointer hover:bg-black/10 transition-colors"
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => scrollBy(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-black/5 backdrop-blur-sm text-black cursor-pointer hover:bg-black/10 transition-colors"
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </nav>
    </div>
  );
}
