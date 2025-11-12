'use client';

import React from 'react';
import Link from 'next/link';
import { services } from '../Data/serviceData';

// Helper to generate clean slugs
const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const navigation = {
  nav: [
    { name: 'Home', href: '/', ariaLabel: 'Go to the Home page' },
    { name: 'About', href: '/about', ariaLabel: 'Learn more about Project Plaster' },
    { name: 'Services', href: '/services', ariaLabel: 'View our plastering services' },
    { name: 'Gallery', href: '/gallery', ariaLabel: 'See our previous plastering work' },
    { name: "FAQ's", href: '/faq', ariaLabel: 'Read frequently asked questions about plastering' },
    { name: 'Contact', href: '/contact', ariaLabel: 'Get in touch for a free quote' },
  ],

  contact: [
    { name: 'Call Jack on 07946 057841', href: 'tel:07946057841', ariaLabel: 'Call Jack on 07946 057841' },
    { name: 'Email jack@projectplaster.com', href: 'mailto:jack@projectplaster.com', ariaLabel: 'Email Jack at projectplaster.com' },
  ],

  services: services.map(service => ({
    name: `${service.title.charAt(0).toUpperCase() + service.title.slice(1).toLowerCase()}`,
    href: `/services/${slugify(service.title)}`,
    ariaLabel: `Learn more about ${service.title}`,
  })),

  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy', ariaLabel: 'Read our Privacy Policy' },
    { name: 'Terms & Conditions', href: '/terms', ariaLabel: 'Read our Terms and Conditions' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1F24] text-white border-t border-[#E5E5E5] font-roboto">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-20 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* LOGO + INTRO */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              ProjectPlaster
            </h2>
            <p className="mt-6 text-sm text-white max-w-sm leading-relaxed">
              Professional plastering across Norfolk & Suffolk.  
              Smooth finish. Done properly.
            </p>
          </div>

          {/* LINKS */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {/* Navigation + Services */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Navigation
                </h3>
                <ul className="mt-6 space-y-3">
                  {navigation.nav.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        aria-label={item.ariaLabel}
                        className="text-sm text-white hover:text-[#D7BFA4] transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Services
                </h3>
                <ul className="mt-6 space-y-3">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        aria-label={item.ariaLabel}
                        className="text-sm text-white hover:text-[#D7BFA4] transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Legal + Contact */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-6 space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        aria-label={item.ariaLabel}
                        className="text-sm text-white hover:text-[#D7BFA4] transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Contact
                </h3>
                <ul className="mt-6 space-y-3">
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        aria-label={item.ariaLabel}
                        className="text-sm text-white hover:text-[#D7BFA4] transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BASE */}
        <div className="mt-12 border-t border-[#2E3337] pt-8">
          <p className="text-xs text-white leading-5">
            &copy; {currentYear} Project Plaster. All rights reserved.
          </p>
          <p className="text-xs text-white leading-5 mt-2">
            Based in Norwich — proudly serving Norfolk & Suffolk.
          </p>
        </div>
      </div>
    </footer>
  );
}