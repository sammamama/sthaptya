import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import blogs from "@/public/blogs/blogs.json";

export const metadata: Metadata = {
  title: "Blogs — Sushil Sharma Associates",
  description: "Insights on Himalayan architecture, construction techniques, and modern design.",
};

export default function BlogsPage() {
  return (
    <div className="relative min-h-screen bg-neutral-100">
      <Navbar variant="light" />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16">
        <a
          href="/"
          className="sticky top-20 z-50 inline-flex items-center gap-1 text-sm text-black/60 hover:text-black transition-colors mb-4 bg-white/70 backdrop-blur-sm rounded-full px-3 py-1.5 border border-black/10 w-fit"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to Home
        </a>
        <h1 className="font-sans text-4xl font-bold text-black mb-12 md:text-5xl">
          Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="group block rounded-2xl overflow-hidden border border-black/10 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h2 className="font-sans text-lg font-bold text-black leading-tight mb-2 group-hover:text-maroon transition-colors">
                  {blog.title}
                </h2>
                <p className="font-display text-sm text-black/60 line-clamp-2">
                  {blog.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
