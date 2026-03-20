import type { Metadata } from "next";
import AboutHead from "../Pages/AboutPages/AboutHead";
import AboutProcess from "../Pages/AboutPages/AboutProcess";
import HeaderSection from "../customComponents/headerSection";
import CTA from "../customComponents/cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Project Plaster, a Norwich-based plastering team serving Norfolk and Suffolk with tidy, reliable workmanship.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <>
      <HeaderSection
        image="/images/jack2.webp"
        title="About"
      />

      <AboutHead />
      <AboutProcess />
      <CTA />
    </>
  );
}
