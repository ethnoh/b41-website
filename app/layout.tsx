import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Solutions for Logistics Operations | B41 — Based on AI",
  description:
    "Automate logistics operations with custom AI systems. Reduce manual work by 70%, eliminate errors, and scale without hiring more people.",
  keywords:
    "AI automation, logistics automation, operations automation, AI systems, document automation, OCR, invoice processing",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "AI Solutions for Logistics Operations | B41",
    description: "Custom AI systems that automate repetitive logistics tasks.",
    type: "website",
    url: "https://b41.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
