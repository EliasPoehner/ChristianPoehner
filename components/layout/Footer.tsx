import Link from "next/link";
import { meta } from "@/content/meta";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-neutral-500">
            <Link href="/impressum" className="hover:text-[#1a3a5c] transition-colors duration-200">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-[#1a3a5c] transition-colors duration-200">
              Datenschutz
            </Link>
            <a
              href={meta.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1a3a5c] transition-colors duration-200"
            >
              {meta.company}
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-neutral-400">
            © {year} {meta.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
