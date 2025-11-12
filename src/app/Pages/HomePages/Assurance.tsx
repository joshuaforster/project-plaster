'use client';

import Image from 'next/image';
import Button from '@/app/customComponents/buttons';
import { images } from '@/app/data/images';

const features = [
  { name: 'Full preparation', description: 'We protect surfaces, mask edges, and leave every room spotless.' },
  { name: 'Smooth finish guaranteed', description: 'Our plastering is always ready to paint — no sanding required.' },
  { name: 'Reliable and tidy', description: 'We arrive when we say we will and clean up properly before we leave.' },
];

export default function Assurance() {
  return (
    <section className="overflow-hidden bg-[#1A1F24] py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2 items-center">

          {/* --- TEXT SECTION --- */}
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Smooth finish.<br />
                <span className="text-[#D7BFA4]">Done properly.</span>
              </h2>

              <p className="mt-6 text-md leading-8 text-white">
                Professional plastering across <strong>Norwich, Norfolk & Suffolk</strong>.
                We prep properly, protect your space, and leave a clean finish that’s ready to paint.
              </p>

              {/* Features */}
              <dl className="mt-10 space-y-8 text-base leading-7 text-white max-w-xl">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="font-semibold text-[#D7BFA4]">
                      • {feature.name}
                    </dt>
                    <dd className="text-white">{feature.description}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <Button variant="primary" to="/contact">
                  Get A Free Quote
                </Button>
              </div>
            </div>
          </div>

          {/* --- IMAGE SECTION --- */}
          <div className="relative w-full h-80 sm:h-[500px] overflow-hidden shadow-xl ring-1 ring-black/40">
            <Image
              src={images[0]}
              alt="Plastering work example"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}