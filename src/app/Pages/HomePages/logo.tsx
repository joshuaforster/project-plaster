const logos = [
  {
    webp: "images/logos/labc-logo-66a385c679fe9.webp",
    alt: "LABC Logo"
  },
  {
    webp: "images/logos/labc2023-66a385c5f1295.webp",
    alt: "LABC 2023"
  },
];

export default function Logo() {
  return (
    <section className="bg-white">
      <div className="py-12 mx-auto max-w-screen-xl px-6 lg:px-8">
        <h2 className="text-xl  text-gray-900 font-semibold leading-8 capitalize text-customBlue">
          Regional Winner of the LABC Award for Building Excellence and design
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-900 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 mt-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <picture>
                <source srcSet={logo.webp} type="image/webp" />
                <img
                  className="h-24 w-full max-w-xs object-contain"
                  src={logo.webp}
                  alt={logo.alt}
                  aria-label={logo.alt}
                  loading="lazy"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
