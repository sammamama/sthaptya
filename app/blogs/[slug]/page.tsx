import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import blogs from "@/public/blogs/blogs.json";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Blog Not Found" };
  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  return (
    <div className="relative min-h-screen bg-neutral-100">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blogs", href: "/blogs" },
          { name: blog.title, href: `/blogs/${blog.slug}` },
        ]}
      />
      <Navbar variant="light" />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16">
        <article className="max-w-3xl mx-auto">
          <a
            href="/blogs"
            className="sticky top-20 z-50 inline-flex items-center gap-1 text-sm text-black/60 hover:text-black transition-colors mb-6 bg-white/70 backdrop-blur-sm rounded-full px-3 py-1.5 border border-black/10 w-fit"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back to Blogs
          </a>

          <h1 className="font-sans text-3xl font-bold text-black mb-6 md:text-4xl lg:text-5xl">
            {blog.title}
          </h1>

          <div className="rounded-2xl overflow-hidden mb-10">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          <div className="space-y-6">
            {blog.content.map((para, i) => (
              <p key={i} className="font-display text-base text-black/75 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
