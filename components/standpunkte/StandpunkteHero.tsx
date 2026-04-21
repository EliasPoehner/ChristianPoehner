export default function StandpunkteHero() {
  return (
    <section className="px-6 lg:px-12 max-w-screen-xl mx-auto py-12 lg:py-16">
      <div
        className="relative overflow-hidden rounded-2xl text-on-primary p-10 md:p-16 flex flex-col md:flex-row items-center gap-12"
        style={{ background: "linear-gradient(135deg, #041627 0%, #1a2b3c 100%)" }}
      >
        {/* Dekorativer Hintergrund-Icon */}
        <div className="hidden lg:block absolute right-10 bottom-0 opacity-[0.06]">
          <svg
            className="w-72 h-72"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
          </svg>
        </div>

        <div className="z-10 flex-1">
          {/* Badge */}
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: "#006b5f", color: "#ffffff", fontFamily: "var(--font-headline)" }}
          >
            Klare Worte
          </span>

          {/* Headline */}
          <h1
            className="font-extrabold text-4xl md:text-6xl mb-5 tracking-tight leading-tight text-on-primary"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Meine Standpunkte <br />
            <span style={{ color: "#76f4e0" }}>für Landshut.</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl font-medium leading-relaxed" style={{ color: "#8192a7" }}>
            Was ich denke – direkt und ohne Politsprech. Für eine Stadt, die ihre
            Chancen nutzt und alle Bürgerinnen und Bürger mitnimmt.
          </p>
        </div>
      </div>
    </section>
  );
}
