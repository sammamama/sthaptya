import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProjectGallery from "@/components/ProjectGallery";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
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
    title: project.title,
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

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
          { name: project.title, href: `/projects/${project.categorySlug}/${project.slug}` },
        ]}
      />
      <Navbar variant="light" />
      <main className="bg-neutral-100 min-h-screen pt-20 pb-16">
        {/* Back link + Title */}
        <div className="px-6 lg:px-16 mb-6">
          <div className="flex items-center gap-4">
            <a
              href="/projects"
              className="sticky top-20 z-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/20 bg-white/70 backdrop-blur-sm text-black hover:bg-black/10 transition-colors"
              aria-label="Back to Projects"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </a>
            <h1 className="font-sans text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          </div>
          <span className="inline-block mt-3 ml-14 rounded-full border border-black/20 bg-black/5 px-4 py-1.5 text-sm font-medium text-black/80">
            {project.category}
          </span>
        </div>

        {/* Description */}
        <div className="px-6 lg:px-16 max-w-3xl mb-10">
          <p className="font-display text-base text-black/70 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Image grid — click any image to expand */}
        <div className="px-6 lg:px-16 mb-10">
          <ProjectGallery images={project.images} title={project.title} />
        </div>

      </main>
    </>
  );
}
