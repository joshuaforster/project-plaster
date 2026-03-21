import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { getPageContent } from "@/lib/contentful/queries";

const SITE_URL = "https://projectplaster.co.uk";
const SITE_NAME = "Project Plaster";
const DEFAULT_DESCRIPTION =
  "Professional plastering, re-skimming and repair services across Norwich, Norfolk and Suffolk.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Project Plaster | Professional Plastering in Norwich, Norfolk and Suffolk",
    template: "%s | Project Plaster",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "plastering Norwich",
    "plasterer Norfolk",
    "plastering Suffolk",
    "re-skimming Norwich",
    "wall plaster repairs",
    "ceiling plastering",
    "Project Plaster Norwich",
  ],
  openGraph: {
    title: "Project Plaster | Professional Plastering in Norwich, Norfolk and Suffolk",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/project-plaster.webp",
        width: 1200,
        height: 630,
        alt: "Project Plaster branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Plaster | Professional Plastering in Norwich, Norfolk and Suffolk",
    description: DEFAULT_DESCRIPTION,
    images: ["/images/project-plaster.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/images/project-plaster.webp", type: "image/webp" }],
    apple: "/images/project-plaster.webp",
  },
};

export const revalidate = 300;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalContent = await getPageContent("global");
  const globalCopy = globalContent?.copy;

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header copy={globalCopy} />
        <main id="main-content">{children}</main>
        <Footer copy={globalCopy} />
      </body>
    </html>
  );
}
