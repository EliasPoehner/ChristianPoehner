"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/stadtrat", label: "Stadtrat" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-serif text-lg font-bold text-[#1a3a5c] hover:text-[#2a5080]"
        >
          Christian Pöhner
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#1a3a5c]"
                  : "text-neutral-600 hover:text-[#1a3a5c]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="border-t border-neutral-100 bg-white px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#1a3a5c]"
                  : "text-neutral-600 hover:text-[#1a3a5c]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
