import AboutHead from "../pages/aboutpages/abouthead";
import AboutProcess from "../pages/aboutpages/aboutprocess";
import HeaderSection from "../customComponents/headerSection";
import CTA from "../customComponents/cta";

export default function About() {
  return (
    <>
      {/* Replaces Helmet + Header */}
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