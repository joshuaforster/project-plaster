import ContactClient from "./ContactClient";
import { getPageContent } from "@/lib/contentful/queries";

export const revalidate = 300;

export default async function ContactPage() {
  const pageContent = await getPageContent("contact");

  return <ContactClient copy={pageContent?.copy} />;
}
