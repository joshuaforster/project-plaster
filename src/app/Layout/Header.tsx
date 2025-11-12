'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import Image from "next/image";

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
    <header className="sticky top-0 bg-[#E4E4E3] shadow-lg z-50">
      <nav className="px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between mx-auto max-w-screen-xl">

          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleLinkClick}>
            {/* <Image
            src={image}
            alt="plastering project"
            fill
            className="object-cover"
            priority
          /> */}
          <p>Project Plaster</p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={handleLinkClick}
                className={`text-sm font-light uppercase transition duration-300 ${
                  link.isPrimary
                    ? 'text-white bg-[#323D40] px-4 py-2 rounded hover:bg-[#1f2a2b]'
                    : pathname === link.path
                    ? 'text-[#C58C49]' // active
                    : 'text-[#323D40]' // default
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden items-center flex">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex flex-col items-center justify-center p-2 rounded-lg focus:outline-none"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-gray-300">
            <ul className="flex flex-col space-y-2 pt-4">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    onClick={handleLinkClick}
                    className={`block text-sm font-light uppercase py-2 pr-4 pl-3 transition duration-300 border-b border-gray-300 ${
                      pathname === link.path ? 'text-[#C58C49]' : 'text-[#323D40]'
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

      {/* Hamburger Styles */}
      <style>{`
        .hamburger {
          width: 24px;
          height: 18px;
          position: relative;
        }

        .hamburger .line {
          width: 100%;
          height: 2px;
          background-color: #000;
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