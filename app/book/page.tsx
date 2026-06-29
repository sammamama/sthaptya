import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Meeting",
  description: "Schedule a meeting with Sushil Sharma Associates to discuss your architectural project in Shimla and Himachal Pradesh.",
};

export default function BookPage() {
  return (
    <div className="relative min-h-screen bg-neutral-100">
      {/* Grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <Navbar variant="light" />

      <main className="flex min-h-screen items-center justify-center px-4 py-24">
        <div className="relative w-full max-w-lg overflow-hidden rounded-3xl">
          {/* Gradient — center bottom only */}
          <div className="absolute inset-0 -z-0">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[70%] w-[90%] rounded-full bg-maroon/50 blur-[100px]" />
            <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 h-[250px] w-[350px] rounded-full bg-crimson/40 blur-[80px]" />
          </div>
          <BookingForm />
        </div>
      </main>
    </div>
  );
}
