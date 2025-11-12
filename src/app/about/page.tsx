import AboutHead from "../Pages/AboutPages/AboutHead";
import AboutProcess from "../Pages/AboutPages/AboutProcess";
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