'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavLink {
  name: string;
  path: string;
  isPrimary?: boolean;
}

const navigationLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: "FAQ's", path: '/faq' },
  { name: 'Contact', path: '/contact', isPrimary: true },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#212F41] text-[#EDEDED]">
      <nav aria-label="Primary" className="px-4 py-2 lg:px-6">
        <div className="flex items-center justify-between mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center" onClick={handleLinkClick}>
            <Image
              src="/images/FINAL LOGO.png"
              width={150}
              height={60}
              alt="Project Plaster"
              className="h-auto w-auto"
              priority
            />
          </Link>

          <ul className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={handleLinkClick}
                    aria-current={isActive ? 'page' : undefined}
                    className={`rounded-sm px-2 py-1 text-sm font-light uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7BFA4] ${
                      link.isPrimary
                        ? 'bg-[#D7BFA4] text-[#1A1F24] hover:bg-[#C5AB8E]'
                        : isActive
                        ? 'text-[#D7BFA4]'
                        : 'text-[#EDEDED] hover:text-[#D7BFA4]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex flex-col items-center justify-center rounded-sm p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7BFA4]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden mt-2 border-t border-[#2E3337]">
            <ul className="flex flex-col space-y-0.5 pt-2">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={handleLinkClick}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block rounded-sm px-3 py-1.5 text-sm uppercase transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7BFA4] ${
                      isActive
                        ? 'text-[#D7BFA4]'
                        : 'text-[#EDEDED] hover:text-[#D7BFA4]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>

      <style>{`
        .hamburger {
          width: 22px;
          height: 16px;
          position: relative;
        }
        .hamburger .line {
          width: 100%;
          height: 2px;
          background-color: #EDEDED;
          position: absolute;
          left: 0;
          transition: all 0.3s ease;
        }
        .hamburger .line:nth-child(1) { top: 0; }
        .hamburger .line:nth-child(2) { top: 7px; }
        .hamburger .line:nth-child(3) { top: 14px; }
        .hamburger.open .line:nth-child(1) {
          transform: rotate(45deg);
          top: 7px;
        }
        .hamburger.open .line:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open .line:nth-child(3) {
          transform: rotate(-45deg);
          top: 7px;
        }
      `}</style>
    </header>
  );
}
