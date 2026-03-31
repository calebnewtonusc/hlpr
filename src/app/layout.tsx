import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hlpr.vercel.app"),
  title: "HLPR — Community Care, Activated",
  description:
    "HLPR connects those who need support with those who can give it — powered by trust, relationship, and the spirit of the church. Starting with LA wildfire relief.",
  keywords: [
    "community care",
    "wildfire relief",
    "LA fires",
    "church community",
    "volunteer",
    "disaster relief",
    "mutual aid",
  ],
  openGraph: {
    title: "HLPR — Community Care, Activated",
    description:
      "Real help from real people. Starting with LA wildfire relief.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HLPR — Community Care Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HLPR — Community Care, Activated",
    description:
      "Real help from real people. Starting with LA wildfire relief.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="antialiased font-sans">{children}  <Analytics />
</body>
    </html>
  );
}
