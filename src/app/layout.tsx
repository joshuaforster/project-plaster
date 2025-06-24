import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import GoogleAds from "./customComponents/Tags/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lambert & Wright",
  description: "Bespoke Property Renovations in the Midlands",
  icons: {
    icon: [
      { url: "/images/Favicon/L&Wicon.png" },
      { url: "/images/Favicon/L&Wicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/images/Favicon/L&Wicon.png",
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
        <GoogleAds />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}