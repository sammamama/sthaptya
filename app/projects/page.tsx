import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProjectCarousel from "@/components/ProjectCarousel";
import projects from "@/public/projects/projects.json";

export const metadata: Metadata = {
  title: "Projects — Sthaptya Architects",
  description: "Explore our portfolio of architectural projects across hospitality, institutional, residential, commercial, and religious sectors.",
};

const SECTOR_ORDER = [
  "Hospitality",
  "Institutional",
  "Residential",
  "Group Housing",
  "Commercial",
  "Religious",
];

export default function ProjectsPage() {
  const grouped = SECTOR_ORDER.map((sector) => ({
    sector,
    items: projects.filter((p) => p.category === sector),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="relative min-h-screen">
      <Navbar variant="light" />
      <main className="min-h-screen pt-24 pb-16 px-0 md:px-8 lg:px-16">
        <a
          href="/"
          className="sticky top-20 z-50 inline-flex items-center gap-1 text-sm text-black/60 hover:text-black transition-colors mb-4 bg-white/70 backdrop-blur-sm rounded-full px-3 py-1.5 border border-black/10 w-fit ml-4 md:ml-0"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to Home
        </a>
        <h1 className="font-sans text-4xl font-bold text-black mb-16 md:text-5xl px-4 md:px-0">
          Our Projects
        </h1>
        {grouped.map((group, i) => (
          <section key={group.sector} className={`mb-16 px-0 md:px-8 lg:px-16 py-10 ${i % 2 === 1 ? "bg-neutral-200 rounded-lg" : ""}`}>
            <h2 className="font-sans text-2xl font-semibold text-black mb-8 md:text-3xl">
              {group.sector}
            </h2>
            <ProjectCarousel projects={group.items} showInfo />
          </section>
        ))}
      </main>
    </div>
  );
}
