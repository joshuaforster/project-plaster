import Link from 'next/link';

const navigation = {
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
    { name: 'Email jack@projectplaster.co.uk', href: 'mailto:jack@projectplaster.co.uk' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1F24] text-white border-t border-[#E5E5E5] font-roboto">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-20 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Project Plaster
            </h2>
            <p className="mt-6 text-sm text-white max-w-sm leading-relaxed">
              Professional plastering across Norfolk & Suffolk.
              Smooth finish. Done properly.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Navigation
                </h3>
                <ul aria-label="Footer navigation" className="mt-6 space-y-3">
                  {navigation.nav.map((item) => (
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
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Legal
                </h3>
                <ul aria-label="Legal pages" className="mt-6 space-y-3">
                  {navigation.legal.map((item) => (
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
                  Contact
                </h3>
                <ul aria-label="Contact links" className="mt-6 space-y-3">
                  {navigation.contact.map((item) => (
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
        </div>

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
