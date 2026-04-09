import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#c8971e]">404</p>
      <h1 className="mt-3 font-serif text-3xl font-bold text-[#1a3a5c]">Seite nicht gefunden</h1>
      <p className="mt-3 text-neutral-600">
        Die gesuchte Seite existiert leider nicht.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Zur Startseite
      </Link>
    </div>
  );
}
