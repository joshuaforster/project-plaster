export default function SingleReview({ name, text, location }: { name: string; text: string; location?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="w-full h-[1px] bg-[#323D40]"></div>
      <div className="py-8 mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-none">
          <figure className="mt-10">
            <blockquote className="text-left text-md text-gray-900">
              <p>
                “{text}”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">{name}</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                {location ? <div className="text-gray-600">{location}</div> : ''}
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#323D40]"></div>
    </section>
  );
}