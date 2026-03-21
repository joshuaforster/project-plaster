import type { Metadata } from "next";
import Hero from "./Pages/HomePages/Hero";
import Steps from "./Pages/HomePages/steps";
import Assurance from "./Pages/HomePages/Assurance";
import Location from "./Pages/HomePages/Location";
import HomeGallery from "./Pages/HomePages/homegallery";
import { getPageContent } from "@/lib/contentful/queries";
import { getCopyText } from "@/lib/contentful/copy";

const homeDescription =
  "Project Plaster provides plastering, re-skimming and plaster repairs in Norwich, Norfolk and Suffolk. Contact us for a free quote.";

export const metadata: Metadata = {
  title: "Plasterer in Norwich, Norfolk and Suffolk",
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
};

export const revalidate = 300;

export default async function Home() {
  const pageContent = await getPageContent("home");
  const homeCopy = pageContent?.copy;
  const schemaDescription =
    pageContent?.seoDescription ||
    getCopyText(homeCopy, "seo.localBusinessDescription", homeDescription);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Project Plaster",
    image: "https://projectplaster.co.uk/images/project-plaster.webp",
    url: "https://projectplaster.co.uk",
    email: "jack@projectplaster.com",
    telephone: "+44 7946 057841",
    areaServed: ["Norwich", "Norfolk", "Suffolk"],
    description: schemaDescription,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero copy={homeCopy} />
      <Steps copy={homeCopy} />
      <HomeGallery copy={homeCopy} />
      <Assurance copy={homeCopy} />
      <Location copy={homeCopy} />
    </div>
  );
}
