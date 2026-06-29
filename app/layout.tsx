import type { Metadata } from "next";
import { Inter, Josefin_Sans, Instrument_Serif, Barlow } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
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
  title: "Sthaptya Architects",
  description: "Architects from the Himalayas",
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
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
