import Link from "next/link";
import { standpunkte } from "@/content/standpunkte";

export default function StandpunkteTeaser() {
  const preview = standpunkte.slice(0, 3);

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16">

        <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
          <div>
            <h2 className="font-extrabold text-4xl text-primary mb-4 tracking-tight" style={{ fontFamily: "var(--font-headline)" }}>
              Meine Standpunkte
            </h2>
            <p className="text-on-surface-muted max-w-xl">
              Klare Haltungen zu den Themen, die Landshut bewegen.
            </p>
          </div>
          <Link
            href="/standpunkte"
            className="hidden md:inline-flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors text-sm"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Alle Standpunkte
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Großes Highlight-Card */}
          <div className="md:col-span-2 md:row-span-2 bg-primary rounded-2xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "rgba(0, 107, 95, 0.15)", filter: "blur(60px)", marginRight: "-4rem", marginTop: "-4rem" }} />
            <div className="relative z-10">
              <span className="bg-secondary text-on-secondary px-3 py-1 rounded text-xs font-bold uppercase tracking-wider inline-block mb-6">
                Fokus
              </span>
              <h3 className="font-bold text-2xl text-on-primary mb-4" style={{ fontFamily: "var(--font-headline)" }}>
                {preview[0].frage}
              </h3>
              <p className="text-on-primary/70 leading-relaxed text-sm line-clamp-4">
                {preview[0].antwort}
              </p>
            </div>
            <Link
              href="/standpunkte"
              className="relative z-10 mt-8 inline-flex items-center gap-2 text-secondary font-bold text-sm hover:gap-3 transition-all"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Weiterlesen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Weitere Karten */}
          {preview.slice(1).map((sp) => (
            <div key={sp.id} className="md:col-span-2 bg-surface-low p-8 rounded-2xl flex flex-col gap-4 hover:bg-surface-container transition-colors">
              <h3 className="font-bold text-xl text-primary" style={{ fontFamily: "var(--font-headline)" }}>
                {sp.frage}
              </h3>
              <p className="text-on-surface-muted text-sm leading-relaxed line-clamp-3">
                {sp.antwort}
              </p>
              <Link
                href="/standpunkte"
                className="text-secondary font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Lesen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link href="/standpunkte" className="btn-outline px-6 py-3 text-sm">
            Alle Standpunkte ansehen
          </Link>
        </div>

      </div>
    </section>
  );
}
