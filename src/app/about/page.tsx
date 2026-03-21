import type { Metadata } from "next";
import AboutHead from "../Pages/AboutPages/AboutHead";
import AboutProcess from "../Pages/AboutPages/AboutProcess";
import HeaderSection from "../customComponents/headerSection";
import CTA from "../customComponents/cta";
import { getPageContent } from "@/lib/contentful/queries";
import { getCopyText } from "@/lib/contentful/copy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Project Plaster, a Norwich-based plastering team serving Norfolk and Suffolk with tidy, reliable workmanship.",
  alternates: {
    canonical: "/about",
  },
};

export const revalidate = 300;

export default async function About() {
  const pageContent = await getPageContent("about");
  const aboutCopy = pageContent?.copy;
  const headerTitle = getCopyText(aboutCopy, "header.title", "About");
  const headerImage = getCopyText(aboutCopy, "header.imageUrl", "/images/jack2.webp");

  return (
    <>
      <HeaderSection
        image={headerImage}
        title={headerTitle}
        copy={aboutCopy}
        copyPath="header"
      />

      <AboutHead copy={aboutCopy} />
      <AboutProcess copy={aboutCopy} />
      <CTA copy={aboutCopy} copyPath="cta" />
    </>
  );
}
