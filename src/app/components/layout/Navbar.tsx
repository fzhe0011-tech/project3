'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/works', label: 'Works' },
  { href: '/collections', label: 'Collections' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav
        className="relative mx-auto flex h-14 max-w-6xl items-center justify-between px-4"
        aria-label="Primary"
      >
        <Link href="/" className="select-none">
          <span className="font-serif text-3xl font-bold tracking-wide">
            Turner
          </span>
        </Link>

        <ul className="hidden gap-6 md:flex">
          {NAV.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group relative inline-flex items-center px-1 py-1 text-base font-medium transition-all duration-200 ease-out
                    hover:text-[#5c3b2a] hover:-translate-y-0.5
                    active:translate-y-[1px] active:scale-95
                    focus-visible:outline-none focus-visible:ring focus-visible:ring-[#5c3b2a]/40
                    ${isActive ? 'text-[#5c3b2a] font-semibold' : 'text-neutral-700'}`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-x-0 -bottom-0.5 block h-[2px] origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100
                      ${isActive ? 'scale-x-100' : ''}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-[#5c3b2a]/40 active:translate-y-[1px] transition"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="relative h-5 w-6">
            <span
              className={`absolute left-0 top-1 block h-0.5 w-6 bg-black transition-transform duration-300 ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 block h-0.5 w-6 bg-black transition-opacity duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-4 block h-0.5 w-6 bg-black transition-transform duration-300 ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>

        {open && (
          <div
            id="mobile-menu"
            className="absolute right-4 top-14 w-56 origin-top overflow-hidden rounded-xl border border-black/10 bg-white/95 shadow-xl backdrop-blur transition-all duration-200 md:hidden"
          >
            <ul className="py-1">
              {NAV.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + '/');
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-base transition-colors hover:bg-black/5 active:translate-y-[1px] focus-visible:outline-none focus-visible:ring focus-visible:ring-[#5c3b2a]/40
                        ${isActive ? 'text-[#5c3b2a] font-medium' : 'text-neutral-800'}`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}