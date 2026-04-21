import Image from "next/image";
import Link from "next/link";
import { meta } from "@/content/meta";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-white min-h-[870px] flex items-center">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="absolute inset-0 blueprint-lines pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-screen-xl px-6 lg:px-16 w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text */}
          <div className="lg:col-span-7 flex flex-col items-start gap-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-secondary-container/30 text-on-secondary-container" style={{ fontFamily: "var(--font-headline)" }}>
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {meta.role} · {meta.city}
            </div>

            <h1 className="font-extrabold text-5xl lg:text-7xl leading-tight tracking-tight text-primary" style={{ fontFamily: "var(--font-headline)" }}>
              Innovation für{" "}
              <br />
              <span className="text-secondary">unsere Heimat.</span>
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed text-on-surface-muted max-w-xl">
              Unternehmerische Erfahrung trifft auf kommunales Engagement.
              Als Gründer, Familienvater und Stadtrat gestalte ich Landshut mit
              Weitsicht und Bodenhaftung.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/stadtrat" className="btn-primary px-8 py-4 text-base gap-2">
                Über mich
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/standpunkte" className="btn-outline px-8 py-4 text-base">
                Meine Standpunkte
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative h-80 w-64 sm:h-[420px] sm:w-80 lg:h-[520px] lg:w-[400px] overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/images/christian-poehner.png"
                  alt="Christian Pöhner, Stadtrat Landshut"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 400px"
                />
              </div>
              {/* Dekorative Elemente */}
              <div className="absolute -bottom-5 -right-5 w-56 h-56 rounded-xl -z-10" style={{ border: "2px solid rgba(0, 107, 95, 0.2)" }} />
              <div className="absolute -top-5 -left-5 w-32 h-32 rounded-full -z-10" style={{ background: "rgba(118, 244, 224, 0.2)", filter: "blur(40px)" }} />
              {/* Stat-Card */}
              <div className="absolute -bottom-6 -left-6 bg-surface-white p-5 rounded-xl shadow-xl border border-outline-variant/20 z-10 hidden sm:block">
                <p className="font-extrabold text-3xl text-secondary mb-1" style={{ fontFamily: "var(--font-headline)" }}>
                  Seit 2026
                </p>
                <p className="text-xs font-semibold text-on-surface-muted">im Landshuter Stadtrat</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
