import Button from "./buttons";
import { getCopyText, type CopyPayload } from "@/lib/contentful/copy";

interface CTAProps {
  copy?: CopyPayload;
  copyPath?: string;
}

export default function CTA({ copy, copyPath = "cta" }: CTAProps) {
  const heading = getCopyText(copy, `${copyPath}.heading`, "Need plastering work?");
  const body = getCopyText(
    copy,
    `${copyPath}.body`,
    "Send a few photos and we will get back to you with a quote. We cover Norwich, Norfolk and Suffolk.",
  );
  const primaryLabel = getCopyText(copy, `${copyPath}.primaryLabel`, "Get A Quote");
  const primaryHref = getCopyText(copy, `${copyPath}.primaryHref`, "/contact");
  const secondaryLabel = getCopyText(copy, `${copyPath}.secondaryLabel`, "About us");
  const secondaryHref = getCopyText(copy, `${copyPath}.secondaryHref`, "/about");

  return (
    <section className="bg-[#F5F5F4]" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          className="relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl sm:px-16 sm:rounded-none"
          style={{
            backgroundImage: "url('/images/jack1.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <h2
            id="cta-heading"
            className="relative mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl leading-tight"
          >
            {heading}
          </h2>

          <p className="relative mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white">
            {body}
          </p>

          <div className="relative mt-10 flex items-center justify-center gap-x-6">
            <Button to={primaryHref} variant="primary" size="large">
              {primaryLabel}
            </Button>

            <Button to={secondaryHref} variant="tertiary" size="large">
              {secondaryLabel} <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
