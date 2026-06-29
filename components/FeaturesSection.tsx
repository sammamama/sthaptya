"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import MagneticButton from "@/components/MagneticButton";

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

function AutoPlayVideo({ src, className, style }: { src: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      disablePictureInPicture
      className={className}
      style={style}
    />
  );
}

export default function FeaturesSection() {
  const helpedRef = useRef<HTMLDivElement>(null);
  const helpedInView = useInView(helpedRef, { once: true, amount: 0.2 });

  return (
    <section className="relative w-full py-20 px-3 sm:px-5 lg:px-8 overflow-x-clip">
      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-12">
        <div>
          <div className="liquid-glass rounded-3xl border border-white/15 p-6 md:p-4">
            <h2 className="font-sans text-3xl font-bold text-neutral-100 mb-4">
              What you get
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-4">
              <div className="relative rounded-xl border border-black/10 bg-black/5 h-64 md:h-56 overflow-hidden">
                <AutoPlayVideo
                  src={INTERIOR_VIDEO}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 font-sans text-sm font-semibold text-white">
                  Interior Design
                </span>
              </div>
              <div className="relative rounded-xl border border-black/10 bg-black/5 h-64 md:h-56 overflow-hidden">
                <AutoPlayVideo
                  src={MODELLING_VIDEO}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 font-sans text-sm font-semibold text-white">
                  3D Modelling
                </span>
              </div>
              <div className="relative rounded-xl border border-black/10 bg-black/5 h-64 md:h-56 overflow-hidden">
                <AutoPlayVideo
                  src={CONSTRUCTION_VIDEO}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 font-sans text-sm font-semibold text-white">
                  Construction
                </span>
              </div>
              <div className="relative sm:col-span-2 md:col-span-3 rounded-xl border border-black/10 bg-black/5 h-64 md:h-56 overflow-hidden">
                <AutoPlayVideo
                  src={PLANNING_VIDEO}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 font-sans text-sm font-semibold text-black">
                  Architectural Planning
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6" ref={helpedRef}>
          <div className="relative overflow-hidden liquid-glass rounded-3xl border border-white/15 p-4 flex flex-col gap-4">
            <div className="absolute inset-0 bg-red-900/55" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.2]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
                backgroundSize: "200px 200px",
              }}
            />
            <h2 className="relative font-sans text-3xl font-bold text-white">
              Helped
            </h2>
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="relative rounded-xl border border-black/10 bg-black/5 px-5 py-4 flex items-center justify-between"
              >
                <span className="font-display italic text-white/70">{stat.label}</span>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-2xl flex-1">
            <div className="relative h-full px-4 py-6 flex flex-col items-center justify-center text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/55 to-black/55" />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.2]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
                  backgroundSize: "200px 200px",
                }}
              />
              <h3 className="relative font-sans text-2xl font-bold text-white mb-2">
                Work with us
              </h3>
              <p className="relative font-display text-white/70 text-sm mb-4">
                Let&apos;s bring your vision to life.
              </p>
              <MagneticButton
                href="/book"
                className="relative inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-black hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.6)]"
              >
                Book a Meeting
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
