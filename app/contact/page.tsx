import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sushil Sharma Associates — architects and planners in Shimla, Himachal Pradesh.",
};

const MAPS_URL =
  "https://www.google.com/maps/place/Sushil+Sharma+associates/@31.0915974,77.1453518,13z/data=!4m10!1m2!2m1!1sSunbreeze+Building+Sanjauli+Chowk+Near+Gurudwara+Sanjauli+Shimla+Himachal+Pradesh+171006+India!3m6!1s0x390579c325e56c09:0x85adba729dd0378c!8m2!3d31.1031715!4d77.192363!15sCl5TdW5icmVlemUgQnVpbGRpbmcgU2FuamF1bGkgQ2hvd2sgTmVhciBHdXJ1ZHdhcmEgU2FuamF1bGkgU2hpbWxhIEhpbWFjaGFsIFByYWRlc2ggMTcxMDA2IEluZGlhWmAiXnN1bmJyZWV6ZSBidWlsZGluZyBzYW5qYXVsaSBjaG93ayBuZWFyIGd1cnVkd2FyYSBzYW5qYXVsaSBzaGltbGEgaGltYWNoYWwgcHJhZGVzaCAxNzEwMDYgaW5kaWGSARZhcmNoaXRlY3RzX2Fzc29jaWF0aW9umgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5MT1RkUWMzaG5SUkFC4AEA-gEFCKwEEEY!16s%2Fg%2F11r10j341h?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-neutral-100">
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <Navbar variant="light" />

      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
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
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Info cards */}
            <div className="flex flex-col gap-6">
              {/* Address */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-black/10 bg-white p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon/10">
                    <svg className="text-maroon" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx={12} cy={10} r={3} />
                    </svg>
                  </div>
                  <h2 className="font-sans text-lg font-bold text-black">Office Address</h2>
                </div>
                <p className="font-display text-sm text-black/70 leading-relaxed">
                  Sunbreeze Building, Sanjauli Chowk,
                  <br />
                  Near Gurudwara, Sanjauli,
                  <br />
                  Shimla, Himachal Pradesh 171006, India
                </p>
                <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-maroon group-hover:underline">
                  Open in Google Maps
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:ssashimla@gmail.com"
                className="group rounded-2xl border border-black/10 bg-white p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon/10">
                    <svg className="text-maroon" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <h2 className="font-sans text-lg font-bold text-black">Email</h2>
                </div>
                <p className="font-display text-sm text-black/70">ssashimla@gmail.com</p>
              </a>

              {/* Phone */}
              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon/10">
                    <svg className="text-maroon" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <h2 className="font-sans text-lg font-bold text-black">Phone</h2>
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:01772843555" className="font-display text-sm text-black/70 hover:text-maroon transition-colors w-fit">0177 2843555</a>
                  <a href="tel:7018815510" className="font-display text-sm text-black/70 hover:text-maroon transition-colors w-fit">7018815510</a>
                </div>
              </div>

              {/* CTA */}
              <a
                href="/book"
                className="flex items-center justify-center gap-2 rounded-2xl bg-maroon px-6 py-4 text-white font-sans font-semibold hover:bg-dark-red transition-colors"
              >
                Book a Meeting
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl border border-black/10 overflow-hidden h-[400px] md:h-full md:min-h-[500px]">
              <iframe
                title="Sushil Sharma Associates office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3417.7!2d77.1734!3d31.1048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSunbreeze+Building+Sanjauli+Shimla!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
