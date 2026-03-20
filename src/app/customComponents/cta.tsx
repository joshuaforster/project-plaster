import Button from "./buttons";

export default function CTA() {
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
            Need a plasterer?
          </h2>

          <p className="relative mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white">
            Send us a couple of photos and we’ll get back to you with a quote.
            Covering Norwich, Norfolk & Suffolk.
          </p>

          <div className="relative mt-10 flex items-center justify-center gap-x-6">
            <Button to="/contact" variant="primary" size="large">
              Get A Quote
            </Button>

            <Button to="/about" variant="tertiary" size="large">
              About us <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
