'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: "FAQ's", path: '/faq' },
    { name: 'Contact', path: '/contact', isPrimary: true },
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1A1F24] text-[#EDEDED] border-b border-[#2E3337]">
      <nav className="px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between mx-auto max-w-screen-xl">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center text-[#EDEDED] font-bold text-xl tracking-wide uppercase"
            onClick={handleLinkClick}
          >
            Project&nbsp;Plaster
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={handleLinkClick}
                className={`text-sm uppercase font-light transition-colors duration-300 px-3 py-2 ${
                  link.isPrimary
                    ? 'bg-[#D7BFA4] text-[#1A1F24] hover:bg-[#C5AB8E]'
                    : pathname === link.path
                    ? 'text-[#D7BFA4]'
                    : 'text-[#EDEDED] hover:text-[#D7BFA4]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex flex-col items-center justify-center p-2 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
            >
              <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-[#2E3337]">
            <ul className="flex flex-col space-y-1 pt-4">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    onClick={handleLinkClick}
                    className={`block text-sm uppercase py-2 px-3 transition duration-200 ${
                      pathname === link.path
                        ? 'text-[#D7BFA4]'
                        : 'text-[#EDEDED] hover:text-[#D7BFA4]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* HAMBURGER STYLES */}
      <style>{`
        .hamburger {
          width: 24px;
          height: 18px;
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
        .hamburger .line:nth-child(2) { top: 8px; }
        .hamburger .line:nth-child(3) { top: 16px; }

        .hamburger.open .line:nth-child(1) {
          transform: rotate(45deg);
          top: 8px;
        }
        .hamburger.open .line:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open .line:nth-child(3) {
          transform: rotate(-45deg);
          top: 8px;
        }
      `}</style>
    </header>
  );
}