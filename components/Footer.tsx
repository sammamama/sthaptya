export default function Footer() {
  return (
    <footer className="relative py-16 px-3 sm:px-5 lg:px-8">
      <div className="liquid-glass rounded-3xl border border-white/15 p-8 sm:p-10 md:p-12 mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full">
                <img
                  src="/logo.webp"
                  alt="Sthaptya Architects logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-sans text-xl font-bold text-white">
                Sthaptya
              </span>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              Architecture rooted in the hills — designing spaces that breathe
              with the landscape.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-white/40">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: "Blogs", href: "/blogs" },
                { label: "Book a Meeting", href: "/book" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-white/70 transition-colors hover:text-white w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-white/40">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 shrink-0 text-white/50"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <p className="font-body text-sm text-white/70 leading-relaxed">
                  1st Floor, Sunbreeze Building,
                  <br />
                  Opposite Gurudwara, Sanjauli
                  <br />
                  Shimla &ndash; 06
                </p>
              </div>

              <a
                href="mailto:ssashimla@gmail.com"
                className="flex items-center gap-3 font-body text-sm text-white/70 transition-colors hover:text-white w-fit"
              >
                <svg
                  className="shrink-0 text-white/50"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width={20} height={16} x={2} y={4} rx={2} />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                ssashimla@gmail.com
              </a>

              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 shrink-0 text-white/50"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <p className="font-body text-sm text-white/70 leading-relaxed">
                  <a href="tel:01772843555" className="transition-colors hover:text-white">0177 2843555</a>
                  <br />
                  <a href="tel:7018815510" className="transition-colors hover:text-white">7018815510</a>
                  <br />
                  <a href="tel:9816043555" className="transition-colors hover:text-white">9816043555</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/40">
            &copy; {new Date().getFullYear()} Sthaptya Architects. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/40">
            Shimla, Himachal Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}
