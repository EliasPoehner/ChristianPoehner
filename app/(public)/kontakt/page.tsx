import type { Metadata } from "next";
import KontaktForm from "@/components/kontakt/KontaktForm";
import { meta } from "@/content/meta";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Schreiben Sie Christian Pöhner eine Nachricht – direkt, persönlich und ohne Umwege.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Subtiles Grid-Muster im Hintergrund */}
      <div className="absolute inset-0 grid-pattern pointer-events-none hidden md:block" />

      {/* ── Mobile Hero ── */}
      <div className="md:hidden px-6 pt-8 pb-6 relative overflow-hidden bg-surface">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="relative z-10">
          {/* Horizontale Linie + Badge */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-2 w-8 rounded-full bg-secondary" />
            <span
              className="font-bold text-secondary text-xs uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Direkter Draht
            </span>
          </div>
          <h1
            className="font-extrabold text-4xl text-primary tracking-tight leading-tight mb-3"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Lassen Sie uns{" "}
            <span className="text-secondary">gemeinsam</span>{" "}
            reden.
          </h1>
          <p className="text-on-surface-muted text-sm leading-relaxed">
            Ich bin für Sie erreichbar – schreiben Sie mir direkt.
          </p>
        </div>
      </div>

      {/* ── Mobile Kontakt-Karten ── */}
      <div className="md:hidden px-6 pb-6 space-y-3">
        {/* Adresse */}
        <div
          className="flex items-center gap-4 p-5 rounded-2xl bg-surface-white"
          style={{ boxShadow: "0 8px 24px rgba(4,22,39,0.04)" }}
        >
          <div
            className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl"
            style={{ background: "rgba(118,244,224,0.3)" }}
          >
            <svg className="w-6 h-6 text-on-secondary-container" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-on-surface-muted uppercase tracking-widest mb-0.5">Adresse</p>
            <p className="text-sm font-semibold text-on-surface">ZUKUNFT Landshut e.V.</p>
            <p className="text-xs text-on-surface-muted">{meta.address.street}, {meta.address.zip} {meta.address.city}</p>
          </div>
        </div>

        {/* E-Mail */}
        <a
          href={`mailto:${meta.email}`}
          className="flex items-center gap-4 p-5 rounded-2xl bg-surface-white transition-all duration-200 active:scale-[0.98]"
          style={{ boxShadow: "0 8px 24px rgba(4,22,39,0.04)" }}
        >
          <div
            className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl"
            style={{ background: "rgba(118,244,224,0.3)" }}
          >
            <svg className="w-6 h-6 text-on-secondary-container" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-on-surface-muted uppercase tracking-widest mb-0.5">E-Mail</p>
            <p className="text-sm font-semibold text-secondary">{meta.email}</p>
          </div>
        </a>
      </div>

      {/* ── Mobile Formular (dunkler Container) ── */}
      <div
        className="md:hidden mx-4 mb-6 p-6 rounded-3xl relative overflow-hidden"
        style={{ background: "#041627" }}
      >
        {/* Dekorative Blur-Elemente */}
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
          style={{ background: "rgba(0,107,95,0.15)", filter: "blur(40px)" }}
        />
        <div
          className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full pointer-events-none"
          style={{ background: "rgba(118,244,224,0.08)", filter: "blur(40px)" }}
        />
        <div className="relative z-10">
          <h2
            className="font-bold text-xl text-white mb-6"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Schreiben Sie mir direkt
          </h2>
          <KontaktForm dark />
        </div>
      </div>

      {/* ── Mobile Social Hub ── */}
      <div className="md:hidden px-6 pb-8">
        <p
          className="text-xs font-semibold uppercase tracking-widest text-on-surface-muted mb-4"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          Folgen Sie mir
        </p>
        <div className="flex gap-3">
          {[
            {
              href: meta.social.linkedin.url,
              label: "LinkedIn",
              icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              href: meta.social.instagram.url,
              label: "Instagram",
              icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              ),
            },
            {
              href: meta.social.facebook.url,
              label: "Facebook",
              icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              ),
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-white shadow-sm text-primary transition-all duration-200 hover:bg-secondary hover:text-on-secondary active:scale-90"
              style={{ boxShadow: "0 4px 12px rgba(4,22,39,0.08)" }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Desktop Layout ── */}
      <div className="hidden md:block pt-12 pb-24 relative">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative">

          {/* Headline-Bereich */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-4">
              <span
                className="font-bold text-secondary text-sm uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Direkter Draht
              </span>
              <div className="h-px w-10 bg-outline-variant/40" />
            </div>
            <h1
              className="font-extrabold text-5xl md:text-7xl text-primary tracking-tight max-w-4xl leading-tight"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Lassen Sie uns{" "}
              <span className="text-secondary">gemeinsam</span>{" "}
              reden.
            </h1>
          </div>

          {/* Haupt-Grid: Formular (7-col) + Infos (5-col) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Formular-Karte */}
            <div className="lg:col-span-7">
              <div
                className="bg-surface-white p-8 md:p-10 rounded-2xl"
                style={{ boxShadow: "0 12px 32px rgba(24,28,32,0.06)" }}
              >
                <h2
                  className="font-bold text-2xl text-primary mb-8"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  Schreiben Sie mir direkt
                </h2>
                <KontaktForm />
              </div>
            </div>

            {/* Rechte Spalte: Adresse + Karte + Social */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* Adresse */}
              <div>
                <h3
                  className="font-bold text-lg text-primary mb-4 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Kontaktadresse
                </h3>
                <div className="bg-surface-low p-5 rounded-xl space-y-4">
                  <div className="flex gap-4">
                    <svg className="w-5 h-5 text-on-surface-muted flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                    <div>
                      <p className="font-bold text-on-surface text-sm">ZUKUNFT Landshut e.V.</p>
                      <p className="text-on-surface-muted text-sm">
                        {meta.address.street}<br />
                        {meta.address.zip} {meta.address.city}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <svg className="w-5 h-5 text-on-surface-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <a href={`mailto:${meta.email}`} className="text-sm text-secondary hover:underline">
                      {meta.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Karte-Platzhalter → Google Maps */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(meta.address.street + ", " + meta.address.zip + " " + meta.address.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden relative"
                style={{ minHeight: "180px" }}
              >
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-300"
                  style={{ background: "#e5e8ed" }}
                >
                  <svg
                    className="w-10 h-10 transition-colors duration-300 group-hover:text-secondary"
                    style={{ color: "#74777d" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-muted group-hover:text-secondary transition-colors">
                    In Google Maps öffnen
                  </span>
                </div>
                <div
                  className="absolute bottom-3 left-3 px-3 py-1 rounded text-xs font-bold uppercase tracking-tight text-on-primary"
                  style={{ background: "#041627", fontFamily: "var(--font-headline)" }}
                >
                  Landshut
                </div>
              </a>

              {/* Social-Media Dark-Karte */}
              <div
                className="p-7 rounded-2xl relative overflow-hidden text-on-primary"
                style={{ background: "#041627" }}
              >
                <div
                  className="absolute -right-10 -bottom-10 opacity-[0.06] pointer-events-none"
                  style={{ fontSize: "160px", lineHeight: 1 }}
                >
                  ✦
                </div>
                <div className="relative z-10">
                  <h3
                    className="font-bold text-base text-on-primary mb-2"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    Folgen Sie mir
                  </h3>
                  <p className="text-sm mb-6" style={{ color: "#8192a7" }}>
                    Aktuelle Einblicke aus dem Stadtrat – direkt von mir.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={meta.social.linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/20"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href={meta.social.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/20"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Instagram
                    </a>
                    <a
                      href={meta.social.facebook.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/20"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
