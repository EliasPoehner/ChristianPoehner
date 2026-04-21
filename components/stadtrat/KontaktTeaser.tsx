import Link from "next/link";

export default function KontaktTeaser() {
  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="mx-auto max-w-screen-xl">
        <div
          className="rounded-3xl p-10 md:p-16 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a2b3c 0%, #041627 100%)" }}
        >
          {/* Glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: "rgba(0,107,95,0.12)", filter: "blur(100px)", marginRight: "-4rem", marginTop: "-4rem" }}
          />

          <div className="relative z-10 max-w-2xl">
            <h2
              className="font-extrabold text-3xl md:text-4xl text-on-primary mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Sie haben eine Frage oder ein Anliegen?
            </h2>
            <p className="text-on-primary/70 text-lg leading-relaxed mb-8">
              Ich freue mich auf Ihre Nachricht – direkt, persönlich, ohne Umwege.
            </p>
            <Link href="/kontakt" className="btn-secondary px-8 py-4 text-base">
              Jetzt Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
