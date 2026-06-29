"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

function ArrowUpRight({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const progress = useMotionValue(0);

  const measure = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    // Viewport-relative position works regardless of which element scrolls
    // (window, document, or a sticky/transformed ancestor) — key for iOS.
    const rect = el.getBoundingClientRect();
    // Travel = section height minus the pinned (sticky) height. Both are sized
    // in `svh`, which stays constant while iOS's browser bar collapses/expands.
    // Reading the sticky element's height (not window.innerHeight, which
    // fluctuates with the bar) keeps progress steady — no scroll jerk.
    const stickyH = stickyRef.current?.offsetHeight ?? window.innerHeight;
    const travel = el.offsetHeight - stickyH;
    const p = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0;
    progress.set(p);
  }, [progress]);

  useEffect(() => {
    // Persistent rAF sampling: independent of scroll events, so it survives
    // iOS momentum scrolling (where scroll events fire sparsely) and works
    // even when the real scroller isn't the window.
    let raf = 0;
    const loop = () => {
      measure();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [measure]);

  const bgScale = useTransform(progress, [0, 1], [1.4, 1]);
  const bgY = useTransform(progress, [0, 1], ["0%", "-10%"]);
  const holeScale = useTransform(progress, [0, 1], [1, 3]);
  const textY = useTransform(progress, [0, 1], ["0%", "-10%"]);
  const templeY = useTransform(progress, [0.05, 1], ["100%", "0%"]);
  const templeScale = useTransform(progress, [0.05, 1], [1, 1.3]);
  const hillY = useTransform(progress, [0.025, 1], ["100%", "0%"]);

  return (
    <section ref={containerRef} className="relative" style={{ height: "250svh" }}>
      <div ref={stickyRef} className="sticky top-0 w-full overflow-hidden" style={{ height: "100svh" }}>
        <motion.img
          src="/bg.webp"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover brightness-[0.9] select-none pointer-events-none"
          style={{ zIndex: 0, scale: bgScale, y: bgY }}
        />

        <motion.img
          src="/hill.webp"
          alt="Mountain landscape"
          draggable={false}
          className="absolute bottom-0 left-0 w-full brightness-80 object-cover object-top select-none pointer-events-none"
          style={{ zIndex: 10, y: hillY, height: "50svh" }}
        />

        <motion.img
          src="/temple.webp"
          alt="Himalayan temple"
          draggable={false}
          className="absolute bottom-0 right-[35%] object-contain select-none pointer-events-none"
          style={{ zIndex: 20, y: templeY, scale: templeScale, height: "70svh" }}
        />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ zIndex: 30, y: textY }}
        >
          <h1 className="font-sans text-5xl font-black tracking-tight text-neutral-200 text-center md:text-5xl lg:text-6xl">
            Sthaptya <span className="font-logo italic font-bold tracking-wide"><br /></span>
          </h1>
          <p className="font-display mt-3 text-xl italic text-neutral-100 text-center md:text-xl">
            Expert in Himalayan architecture
          </p>
          <div className="mt-8 flex gap-5">
            <a href="/projects" className="group relative h-12 overflow-hidden px-7 rounded-lg border border-white bg-white text-black text-base font-medium hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.6)] transition-shadow duration-200">
              <span className="flex h-12 items-center font-instrument italic transition-transform duration-300 ease-in-out group-hover:-translate-y-full">See Projects</span>
              <span className="flex h-12 items-center font-instrument italic transition-transform duration-300 ease-in-out group-hover:-translate-y-full">See Projects</span>
            </a>
            <a href="/book" className="group relative h-12 overflow-hidden px-7 rounded-lg border border-maroon bg-maroon text-white text-base font-medium hover:shadow-[4px_4px_0px_0px_rgba(128,0,32,0.6)] transition-shadow duration-200">
              <span className="flex h-12 items-center gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Book Meeting <ArrowUpRight size={18} /></span>
              <span className="flex h-12 items-center gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Book Meeting <ArrowUpRight size={18} /></span>
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" style={{ zIndex: 50 }}>
          <svg width="28" height="43" viewBox="0 0 79.37 122.88" fill="none" stroke="currentColor" strokeWidth="0" className="text-white">
            <path d="M50.2,121.63c6.71-1.85,12.72-5.44,17.51-10.23c7.19-7.19,11.65-17.11,11.65-28.03V39.68c0-10.92-4.46-20.84-11.65-28.03 C60.52,4.46,50.6,0,39.68,0C28.77,0,18.84,4.46,11.65,11.65C4.46,18.84,0,28.77,0,39.68v43.68c0,10.92,4.46,20.84,11.65,28.03 c5.59,5.59,12.82,9.53,20.89,11.01C37.42,123.3,45.7,122.87,50.2,121.63L50.2,121.63L50.2,121.63z M39.23,92.06 c4.15,0,7.55-3.4,7.55-7.55v-7.78c0-4.15-3.4-7.55-7.55-7.55c-4.15,0-7.55,3.4-7.55,7.55v7.78C31.68,88.66,35.07,92.06,39.23,92.06 L39.23,92.06z M61.08,104.77c-5.49,5.49-13.07,8.91-21.4,8.91c-8.33,0-15.9-3.41-21.4-8.91c-5.49-5.49-8.91-13.07-8.91-21.4V39.68 c0-8.33,3.41-15.9,8.91-21.4c5.49-5.49,13.07-8.91,21.4-8.91c8.33,0,15.9,3.41,21.4,8.91c5.49,5.49,8.91,13.07,8.91,21.4v43.68 C69.99,91.7,66.58,99.27,61.08,104.77L61.08,104.77L61.08,104.77z" fill="currentColor"/>
          </svg>
          <span className="font-body text-xs uppercase tracking-widest text-white/70">Scroll down</span>
        </div>

        <motion.img
          src="/hole.webp"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
          style={{ zIndex: 40, transformOrigin: "center center", scale: holeScale }}
        />
      </div>
    </section>
  );
}
