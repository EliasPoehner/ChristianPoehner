"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { meta } from "@/content/meta";

const navLinks = [
  { href: "/stadtrat", label: "Über mich" },
  { href: "/standpunkte", label: "Standpunkte" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 shadow-sm"
      style={{ background: "rgba(247, 249, 254, 0.75)", backdropFilter: "blur(24px)" }}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 h-20 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline font-extrabold text-xl tracking-tight text-primary hover:text-secondary transition-colors duration-200"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {meta.nameShort}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                pathname === link.href
                  ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                  : "text-on-surface-muted hover:text-primary hover:bg-surface-low"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="btn-primary text-sm px-5 py-2.5"
          >
            Mitmachen
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-on-surface-muted hover:bg-surface-low hover:text-primary md:hidden transition-colors"
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
        <nav className="bg-surface-white/95 backdrop-blur-sm px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-secondary font-bold"
                  : "text-on-surface-muted hover:text-primary"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="btn-primary mt-3 w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Mitmachen
          </Link>
        </nav>
      )}
    </header>
  );
}
