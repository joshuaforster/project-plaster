import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import Header from "./layout/header";
import Footer from "./layout/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Plaster | Professional Plastering in Norwich, Norfolk & Suffolk",
  description:
    "Professional plastering, re-skimming and repair services across Norwich, Norfolk & Suffolk. Clean finish, no shortcuts. Get a free quote today.",
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
    title: "Project Plaster | Professional Plastering in Norwich, Norfolk & Suffolk",
    description:
      "Fresh plastering, re-skimming and repairs. Clean finish, done properly.",
    url: "https://projectplaster.co.uk",
    siteName: "Project Plaster",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Plastering project finish",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/images/Favicon/projectplaster.png" },
      { url: "/images/Favicon/projectplaster.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/images/Favicon/projectplaster.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

