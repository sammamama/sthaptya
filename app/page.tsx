import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectCarousel from "@/components/ProjectCarousel";
import projects from "@/public/projects/projects.json";

export default function Home() {
  return (
    <div className="relative bg-cover bg-center md:bg-fixed" style={{ backgroundImage: "url('/page-bg.webp')" }}>
      <Navbar />
      <div className="relative" style={{ zIndex: 50 }}>
        <HeroSection />
      </div>
      <div className="sticky top-0" style={{ zIndex: 10 }}>
        <FeaturesSection />
        <section className="relative py-24 px-8 lg:px-16">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-sans text-3xl font-bold text-black md:text-4xl">
              Our Projects
            </h2>
            <a
              href="/projects"
              className="liquid-glass border rounded-full px-5 py-2 text-sm font-medium text-black/90 hover:text-black transition-colors"
            >
              View All
            </a>
          </div>
          <ProjectCarousel projects={projects} />
        </section>
      </div>
    </div>
  );
}
