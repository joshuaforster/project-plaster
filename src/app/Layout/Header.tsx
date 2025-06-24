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
    { name: 'Blog', path: '/blog' },
    { name: "FAQ's", path: '/faq' },
    { name: 'Brochure', path: '/Brochure/Lambert&Wright.pdf', isExternal: true },
    { name: 'Contact', path: '/contact', isPrimary: true },
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Replaces useLocation from react-router-dom

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-[#E4E4E3] shadow-lg z-50">
  <nav className="bg-[#E4E4E3] border-gray-200 px-4 lg:px-6 py-4">
    <div className="flex items-center justify-between mx-auto max-w-screen-xl">
      <Link href="/" className="flex items-center" onClick={handleLinkClick}>
        <picture>
          <source srcSet="/images/logos/logogrey-66a388691126f.webp" type="image/webp" />
          <img
            src="/images/logos/logogrey-66a388691126f.webp"
            className="h-14 sm:h-14"
            alt="Company Logo"
          />
        </picture>
      </Link>
      <div className="hidden lg:flex lg:items-center lg:space-x-8">
        <ul className="flex items-center space-x-8">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              {link.isExternal ? (
                <a
                  href={link.path}
                  className={`block text-sm font-light uppercase py-2 px-1 ${
                    link.isPrimary
                      ? 'text-white bg-[#323D40] px-4 py-2 rounded hover:bg-[#1f2a2b]'
                      : 'text-[#323D40]'
                  } transition duration-300`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  href={link.path}
                  className={`block text-sm font-light uppercase py-2 px-1 ${
                    link.isPrimary
                      ? 'hidden lg:block text-white bg-[#323D40] px-4 py-2 rounded hover:bg-[#1f2a2b]'
                      : pathname === link.path
                      ? 'text-[#C58C49]'
                      : 'text-[#323D40]'
                  } transition duration-300`}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex lg:hidden items-center">
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center p-2 text-sm text-[#323D40] rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu-2"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </button>
      </div>
    </div>

    {isMobileMenuOpen && (
      <div className="lg:hidden">
        <ul className="flex flex-col mt-4 space-y-2">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              {link.isExternal ? (
                <a
                  href={link.path}
                  className="block text-sm py-2 pr-4 pl-3 text-[#3B464B] font-light uppercase border-b border-gray-700 transition duration-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  href={link.path}
                  className={`block text-sm py-2 pr-4 pl-3 ${
                    link.isPrimary
                      ? 'text-[#3B464B]'
                      : pathname === link.path
                      ? 'text-[#C58C49]'
                      : 'text-[#3B464B]'
                  } font-light uppercase border-b border-gray-700 transition duration-300`}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    )}
  </nav>

  {/* CSS for hamburger animation */}
  <style>{`
    .hamburger {
      width: 24px;
      height: 18px;
      position: relative;
      display: inline-block;
      cursor: pointer;
    }

    .hamburger .line {
      width: 100%;
      height: 2px;
      background-color: #000;
      position: absolute;
      left: 0;
      transition: all 0.3s ease;
    }

    .hamburger .line:nth-child(1) {
      top: 0;
    }

    .hamburger .line:nth-child(2) {
      top: 8px;
    }

    .hamburger .line:nth-child(3) {
      top: 16px;
    }

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