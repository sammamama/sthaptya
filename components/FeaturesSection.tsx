"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const INTERIOR_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_2wz19UwQVw85l2M9dxCWfoUPw1S/hf_20260601_080328_7a0d3adb-a310-4261-8206-49bf25f40280.mp4";

const MODELLING_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_2wz19UwQVw85l2M9dxCWfoUPw1S/hf_20260601_080649_e4454722-00d5-48ba-aa40-25da686a6cc9.mp4";

const CONSTRUCTION_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_2wz19UwQVw85l2M9dxCWfoUPw1S/hf_20260601_081233_2c41e526-7f75-4054-a302-e4adcaf68a49.mp4";

const PLANNING_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_2wz19UwQVw85l2M9dxCWfoUPw1S/hf_20260601_084226_64063034-111a-404a-94a3-b7838634bb4f.mp4";

const STATS = [
  { label: "Planned Houses", value: 1000, suffix: "+" },
  { label: "Designed Houses", value: 100, suffix: "+" },
  { label: "Government Projects", value: 50, suffix: "+" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = performance.now();
    let raf: number;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-sans text-2xl font-bold text-white">
      {display}{suffix}
    </span>
  );
}

export default function FeaturesSection() {
  const helpedRef = useRef<HTMLDivElement>(null);
  // Triggers once the "Helped" block scrolls into view — on mobile that's
  // right after the user crosses "What you get" (the two stack vertically).
  const helpedInView = useInView(helpedRef, { once: true, amount: 0.2 });

  return (
    <section className="relative w-full py-20 px-10 md:px-8 lg:px-16 overflow-x-clip">
      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-12">
        <div>
          <div className="rounded-2xl border border-black/10 bg-black/5 backdrop-blur-sm p-6 md:p-4">
            <h2 className="font-sans text-3xl font-bold text-neutral-800 mb-4">
              What you get
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-4">
              <div className="relative rounded-xl border border-black/10 bg-black/5 h-48 overflow-hidden">
                <video
                  src={INTERIOR_VIDEO}
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ width: 320, height: 192 }}
                />
                <span className="absolute bottom-3 left-3 font-sans text-sm font-semibold text-white">
                  Interior Design
                </span>
              </div>
              <div className="relative rounded-xl border border-black/10 bg-black/5 h-48 overflow-hidden">
                <video
                  src={MODELLING_VIDEO}
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ width: 320, height: 192 }}
                />
                <span className="absolute bottom-3 left-3 font-sans text-sm font-semibold text-white">
                  3D Modelling
                </span>
              </div>
              <div className="relative rounded-xl border border-black/10 bg-black/5 h-48 overflow-hidden">
                <video
                  src={CONSTRUCTION_VIDEO}
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ width: 320, height: 192 }}
                />
                <span className="absolute bottom-3 left-3 font-sans text-sm font-semibold text-white">
                  Construction
                </span>
              </div>
              <div className="relative md:col-span-3 rounded-xl border border-black/10 bg-black/5 h-48 overflow-hidden">
                <video
                  src={PLANNING_VIDEO}
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 font-sans text-sm font-semibold text-black">
                  Architectural Planning
                </span>
              </div>
            </div>
          </div>
        </div>

        <div ref={helpedRef}>
          <div className="rounded-2xl border border-black/10 bg-maroon backdrop-blur-sm p-4 flex flex-col gap-4">
            <h2 className="font-sans text-3xl font-bold text-white">
              Helped
            </h2>
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-black/10 bg-black/5 px-5 py-4 flex items-center justify-between"
              >
                <span className="font-display italic text-white/70">{stat.label}</span>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.img
        src="/helped.png"
        alt=""
        aria-hidden="true"
        initial={{ y: "100%", opacity: 0 }}
        animate={helpedInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute right-0 translate-y-[-85%] md:-translate-y-1/2 h-[130%] w-auto object-contain will-change-transform pointer-events-none z-0"
        style={{ maskImage: "linear-gradient(to left, black 40%, transparent 100%)", WebkitMaskImage: "linear-gradient(to left, black 40%, transparent 100%)" }}
      />
    </section>
  );
}
