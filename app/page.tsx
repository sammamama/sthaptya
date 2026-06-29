import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectCarousel from "@/components/ProjectCarousel";
import projects from "@/public/projects/projects.json";

export default function Home() {
  return (
    <div className="relative bg-cover bg-center md:bg-fixed bg-neutral-100" >
      <Navbar />
      <div className="relative" style={{ zIndex: 50 }}>
        <HeroSection />
      </div>
      <div className="sticky top-0 bg-[url('/bg-rest2.webp')] bg-cover bg-center bg-fixed" style={{ zIndex: 10 }}>
        <FeaturesSection />
        <section className="rounded-t-4xl relative py-24 px-3 sm:px-5 lg:px-8">
          <div className="liquid-glass rounded-3xl border border-white/15 p-3 sm:p-5 md:p-6 mx-auto max-w-7xl">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-sans text-4xl font-bold text-white md:text-5xl">
                Our Projects
              </h2>
              <a
                href="/projects"
                className="liquid-glass border rounded-full px-5 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                View All
              </a>
            </div>
            <ProjectCarousel projects={projects} />
          </div>
        </section>
      </div>
    </div>
  );
}
