"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { meta } from "@/content/meta";

const navLinks = [
  { href: "/stadtrat", label: "Über mich" },
  { href: "/standpunkte", label: "Standpunkte" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 w-full z-50 bg-slate-50/70 backdrop-blur-2xl shadow-sm">
      <div className="flex justify-between items-center px-8 md:px-16 h-20 w-full max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline font-extrabold text-xl tracking-tighter text-slate-950"
        >
          <span className="hidden md:inline">{meta.nameShort}</span>
          <span className="md:hidden">{meta.nameMobile}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm transition-all ${
                pathname === link.href
                  ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                  : "text-slate-600 hover:text-slate-950 font-medium"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mitmachen Button – always visible */}
        <Link
          href="/kontakt"
          className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-headline font-bold text-sm hover:scale-95 active:scale-90 transition-transform"
        >
          Mitmachen
        </Link>
      </div>
    </header>
  );
}
