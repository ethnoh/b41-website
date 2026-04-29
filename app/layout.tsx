import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopContactBar from "@/components/TopContactBar";
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
    "Automate logistics operations with custom AI systems. Reduce manual work by 70%, eliminate errors, and scale without hiring more people. AI automation for freight, supply chain, and document processing.",
  keywords:
    "AI automation, logistics automation, operations automation, AI systems, document automation, OCR, invoice processing, freight automation, logistics AI, supply chain automation, ERP integration, TMS automation, AI chatbot logistics, workflow automation, intelligent document processing",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  verification: {
    google: "HvHdVEuEApLQ-pVYNEcmA3rfh2yOquHunQUEZweNDP4",
  },
  alternates: {
    canonical: "https://b41.ai",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "AI Solutions for Logistics Operations | B41",
    description:
      "Custom AI systems that automate repetitive logistics tasks. Reduce manual work by 70% and scale your operations.",
    url: "https://b41.ai",
    siteName: "B41 — Based on AI",
    images: [
      {
        url: "https://b41.ai/assets/logo.svg",
        width: 1200,
        height: 630,
        alt: "B41 - AI Solutions for Logistics",
        type: "image/svg+xml",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions for Logistics Operations | B41",
    description:
      "Automate logistics with AI. Reduce manual work by 70%, eliminate errors, scale without hiring.",
    images: ["https://b41.ai/assets/logo.svg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "B41 — Based on AI",
  url: "https://b41.ai",
  logo: "https://b41.ai/assets/logo.svg",
  description: "AI automation solutions for logistics operations",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "sales@b41.ai",
    url: "https://b41.ai/#contact",
  },
  sameAs: [
    "https://www.linkedin.com/in/edgars-jubelis-35ab9b339",
    "https://t.me/ethnoh",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riga",
    addressRegion: "Latvia",
    addressCountry: "LV",
  },
  areaServed: ["Worldwide"],
  knowsAbout: [
    "AI Automation",
    "Logistics",
    "Document Processing",
    "Supply Chain",
    "ERP Integration",
    "OCR",
    "Freight Automation",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "B41",
  image: "https://b41.ai/assets/logo.svg",
  description: "AI solutions for logistics automation",
  url: "https://b41.ai",
  email: "sales@b41.ai",
  priceRange: "$$",
  areaServed: "Worldwide",
  serviceType: "AI Automation Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">
        <TopContactBar />
        <Navbar />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
