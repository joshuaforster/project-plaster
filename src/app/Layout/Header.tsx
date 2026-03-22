'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getCopyObjectArray, getCopyText, type CopyPayload } from '@/lib/contentful/copy';

interface NavLink {
  name: string;
  path: string;
  isPrimary?: boolean;
}

const defaultNavigationLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: "FAQ's", path: '/faq' },
  { name: 'Contact', path: '/contact', isPrimary: true },
];

interface HeaderProps {
  copy?: CopyPayload;
}

function toBoolean(value: unknown, fallback = false): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

function getNavigation(copy?: CopyPayload): NavLink[] {
  const items: NavLink[] = [];
  for (const item of getCopyObjectArray(copy, 'header.navigation')) {
    const name = typeof item.name === 'string' ? item.name.trim() : '';
    const path = typeof item.path === 'string' ? item.path.trim() : '';
    if (!name || !path) {
      continue;
    }

    items.push({
      name,
      path,
      isPrimary: toBoolean(item.isPrimary),
    });
  }

  return items.length ? items : defaultNavigationLinks;
}

function getPhoneHref(phone: string): string {
  return `tel:${phone.replace(/\s+/g, '')}`;
}

export default function Header({ copy }: HeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navigationLinks = getNavigation(copy);
  const openMenuLabel = getCopyText(copy, 'header.mobile.openAria', 'Open navigation menu');
  const closeMenuLabel = getCopyText(copy, 'header.mobile.closeAria', 'Close navigation menu');
  const navAriaLabel = getCopyText(copy, 'header.ariaLabel', 'Primary');
  const phoneLabel = getCopyText(copy, 'header.contactBar.phoneLabel', 'Call');
  const phoneValue = getCopyText(copy, 'header.contactBar.phoneValue', '07946 057841');
  const emailLabel = getCopyText(copy, 'header.contactBar.emailLabel', 'Email');
  const emailValue = getCopyText(copy, 'header.contactBar.emailValue', 'jack@projectplaster.com');

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#212F41] text-[#EDEDED]">
      <div className="border-b border-[#32465F] bg-[#101821]">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-x-6 gap-y-1.5 px-4 py-2.5 text-sm font-bold text-[#F3F4F6] lg:justify-end lg:px-6">
          <a
            href={getPhoneHref(phoneValue)}
            className="transition-colors hover:text-[#D7BFA4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7BFA4]"
          >
            {phoneLabel}: {phoneValue}
          </a>
          <a
            href={`mailto:${emailValue}`}
            className="transition-colors hover:text-[#D7BFA4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7BFA4]"
          >
            {emailLabel}: {emailValue}
          </a>
        </div>
      </div>
      <nav aria-label={navAriaLabel} className="px-4 py-2 lg:px-6">
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
                        ? 'inline-flex h-10 items-center rounded-sm border border-[#D7BFA4] bg-[#D7BFA4] px-4 font-semibold text-[#1A1F24] shadow-sm hover:bg-[#C5AB8E] hover:border-[#C5AB8E]'
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
              aria-label={isMobileMenuOpen ? closeMenuLabel : openMenuLabel}
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
