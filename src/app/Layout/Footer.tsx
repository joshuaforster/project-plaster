import Link from 'next/link';
import Image from 'next/image';
import { getCopyObjectArray, getCopyText, type CopyPayload } from '@/lib/contentful/copy';

const defaultNavigation = {
  nav: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: "FAQ's", href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  contact: [
    { name: 'Call Jack on 07946 057841', href: 'tel:07946057841' },
    { name: 'Email jack@projectplaster.com', href: 'mailto:jack@projectplaster.com' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ],
};

interface FooterLink {
  name: string;
  href: string;
}

interface FooterProps {
  copy?: CopyPayload;
}

function parseLinks(copy: CopyPayload, path: string, fallback: FooterLink[]): FooterLink[] {
  const items = getCopyObjectArray(copy, path)
    .map((item) => {
      const name = typeof item.name === 'string' ? item.name.trim() : '';
      const href = typeof item.href === 'string' ? item.href.trim() : '';
      if (!name || !href) {
        return null;
      }

      return { name, href };
    })
    .filter((item): item is FooterLink => item !== null);

  return items.length ? items : fallback;
}

export default function Footer({ copy }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const brandName = getCopyText(copy, 'footer.brandName', 'Project Plaster');
  const brandDescription = getCopyText(
    copy,
    'footer.brandDescription',
    'Professional plastering across Norfolk & Suffolk. Clean preparation and a smooth finish.',
  );

  const navLinks = parseLinks(copy, 'footer.navigation', defaultNavigation.nav);
  const legalLinks = parseLinks(copy, 'footer.legalLinks', defaultNavigation.legal);
  const contactLinks = parseLinks(copy, 'footer.contactLinks', defaultNavigation.contact);

  const navHeading = getCopyText(copy, 'footer.headings.navigation', 'Navigation');
  const legalHeading = getCopyText(copy, 'footer.headings.legal', 'Legal');
  const contactHeading = getCopyText(copy, 'footer.headings.contact', 'Contact');
  const copyrightText = getCopyText(
    copy,
    'footer.bottom.copyright',
    `© ${currentYear} Project Plaster. All rights reserved.`,
  );
  const locationText = getCopyText(
    copy,
    'footer.bottom.location',
    'Based in Norwich, serving Norfolk & Suffolk.',
  );

  return (
    <footer className="bg-[#1A1F24] text-white border-t border-[#E5E5E5] font-roboto">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-1">
            <Link
              href="/"
              aria-label={brandName}
              className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7BFA4]"
            >
              <Image
                src="/images/FINAL LOGO.png"
                alt={brandName}
                width={210}
                height={72}
                className="h-auto w-44 sm:w-52"
              />
            </Link>
            <p className="mt-4 text-sm text-white leading-relaxed">
              {brandDescription}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:col-span-2 lg:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                {navHeading}
              </h3>
              <ul aria-label="Footer navigation" className="mt-6 space-y-3">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
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
                {legalHeading}
              </h3>
              <ul aria-label="Legal pages" className="mt-6 space-y-3">
                {legalLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
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
                {contactHeading}
              </h3>
              <ul aria-label="Contact links" className="mt-6 space-y-3">
                {contactLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
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

        <div className="mt-12 border-t border-[#2E3337] pt-8">
          <p className="text-xs text-white leading-5">
            {copyrightText}
          </p>
          <p className="text-xs text-white leading-5 mt-2">
            {locationText}
          </p>
        </div>
      </div>
    </footer>
  );
}
