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
    <header
      className="sticky top-0 z-50 shadow-sm"
      style={{ background: "rgba(247, 249, 254, 0.75)", backdropFilter: "blur(24px)" }}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 h-16 md:h-20 lg:px-12">
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
          <Link href="/kontakt" className="btn-primary text-sm px-5 py-2.5">
            Mitmachen
          </Link>
        </nav>

        {/* Mobile Avatar – navigation via BottomNav */}
        <div
          className="flex items-center justify-center w-9 h-9 rounded-full md:hidden text-xs font-bold text-on-secondary select-none"
          style={{ background: "#006b5f" }}
          aria-hidden="true"
        >
          CP
        </div>
      </div>
    </header>
  );
}
