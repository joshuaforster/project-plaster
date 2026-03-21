import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about plastering, re-skimming, drying times, insurance and areas covered in Norwich, Norfolk and Suffolk.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
