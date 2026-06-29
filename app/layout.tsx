import type { Metadata } from "next";
import { Inter, Josefin_Sans, Instrument_Serif, Barlow } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
import { OrganizationJsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sushilsharmaassociates.com"),
  title: {
    default: "Sushil Sharma Associates — Himalayan Architects & Planners",
    template: "%s — Sushil Sharma Associates",
  },
  description:
    "Architecture firm in Shimla specialising in hill construction, residential, hospitality, institutional, and commercial projects across Himachal Pradesh since 1997.",
  keywords: [
    "Sushil Sharma Associates",
    "architects Shimla",
    "Himachal Pradesh architecture",
    "hill construction",
    "Himalayan architects",
    "residential architecture Shimla",
    "hospitality architecture",
    "architecure",
    "Hospitality architecture",
    "School architecture",
    "Estate architecture",
    "Temple architecture",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Sushil Sharma Associates",
    title: "Sushil Sharma Associates — Himalayan Architects & Planners",
    description:
      "Architecture firm in Shimla specialising in hill construction, residential, hospitality, institutional, and commercial projects across Himachal Pradesh since 1997.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Sushil Sharma Associates" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sushil Sharma Associates — Himalayan Architects & Planners",
    description:
      "Architecture firm in Shimla specialising in hill construction across Himachal Pradesh since 1997.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${josefinSans.variable} ${instrumentSerif.variable} ${barlow.variable} antialiased`}
    >
      <body className="min-h-dvh bg-black text-white overflow-x-clip">
        <OrganizationJsonLd />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
