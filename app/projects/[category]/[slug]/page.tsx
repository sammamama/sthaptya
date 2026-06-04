import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProjectGallery from "@/components/ProjectGallery";
import projects from "@/public/projects/projects.json";

export function generateStaticParams() {
  return projects.map((p) => ({
    category: p.categorySlug,
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const project = projects.find(
    (p) => p.categorySlug === category && p.slug === slug
  );
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Sthaptya Architects`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const project = projects.find(
    (p) => p.categorySlug === category && p.slug === slug
  );

  if (!project) notFound();

  const heroImages = project.images.slice(0, 5);

  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen pt-20 pb-16">
        {/* Back link + Title */}
        <div className="px-6 lg:px-16 mb-6">
          <a
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors mb-4"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back to Projects
          </a>
          <h1 className="font-sans text-3xl font-bold text-pure-white md:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <span className="inline-block mt-3 liquid-glass rounded-full px-4 py-1.5 text-sm font-medium text-white/80">
            {project.category}
          </span>
        </div>

        {/* Airbnb-style image grid */}
        <div className="px-6 lg:px-16 mb-10">
          <div className="relative grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 rounded-2xl overflow-hidden max-h-[70vh]">
            {/* Hero image — large left */}
            <div className="md:col-span-2 md:row-span-2">
              <img
                src={heroImages[0]}
                alt={project.title}
                className="h-full w-full object-cover cursor-pointer hover:brightness-90 transition-all"
              />
            </div>
            {/* 4 smaller images — right grid */}
            {heroImages.slice(1, 5).map((src, i) => (
              <div key={i}>
                <img
                  src={src}
                  alt={`${project.title} — ${i + 2}`}
                  className="h-full w-full object-cover cursor-pointer hover:brightness-90 transition-all"
                />
              </div>
            ))}
            {/* Show all photos button */}
            <ProjectGallery images={project.images} title={project.title} />
          </div>
        </div>

        {/* Description */}
        <div className="px-6 lg:px-16 max-w-3xl">
          <h2 className="font-sans text-xl font-semibold text-pure-white mb-4">
            About this project
          </h2>
          <p className="font-display text-base text-white/70 leading-relaxed">
            {project.description}
          </p>
        </div>
      </main>
    </>
  );
}
