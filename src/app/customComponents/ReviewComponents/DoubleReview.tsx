
export default function DoubleReview({nameOne, textOne, nameTwo, textTwo}: {nameOne: string; textOne: string; nameTwo: string; textTwo: string}) {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pr-8 lg:pb-0 xl:pr-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-md text-gray-900" style={{ lineHeight: '1.5' }}>
                <p>
                  &ldquo;{textOne}&ldquo;
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="text-base">
                  <div className="font-semibold text-gray-900">{nameOne}</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-md text-gray-900" style={{ lineHeight: '1.5' }}>
                <p>
                    &ldquo;{textTwo}&ldquo;
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="text-base">
                  <div className="font-semibold text-gray-900">{nameTwo}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

