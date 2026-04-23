const saulen = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Smart City",
    text: "Bürgernahe Verwaltung durch digitale Prozesse. Dienstleistungen der Stadt müssen einfach, sicher und jederzeit zugänglich sein.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Lokale Wirtschaft",
    text: "Als Gründer von PZ Systeme kenne ich die Herausforderungen. Ich stehe für unbürokratische Unterstützung, faire Rahmenbedingungen und kurze Wege.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Soziales Miteinander",
    text: "Mehr niedrigschwellige Angebote, offene Treffpunkte für alle Generationen und echte Unterstützung für das Ehrenamt, das Landshut zusammenhält.",
  },
];

export default function ShortIntro() {
  return (
    <section className="bg-surface py-12 md:py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl">

        <div className="mb-8 md:mb-16">
          <h2
            className="font-extrabold text-3xl md:text-4xl text-primary mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Drei Säulen für unsere Zukunft
          </h2>
          <div className="h-1.5 w-24 rounded-full bg-secondary" />
        </div>

        {/* Mobile: vertikale Card-Liste mit linkem Border-Akzent */}
        <div className="md:hidden space-y-4">
          {saulen.map((s) => (
            <div
              key={s.title}
              className="bg-surface-white p-5 rounded-2xl flex gap-4 border-l-4 border-secondary"
              style={{ boxShadow: "0 8px 24px rgba(4,22,39,0.04)" }}
            >
              <div
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl text-on-secondary-container"
                style={{ background: "rgba(118, 244, 224, 0.35)" }}
              >
                {s.icon}
              </div>
              <div>
                <h3
                  className="font-bold text-lg text-primary mb-1"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-on-surface-muted leading-relaxed">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 3-spaltige Grid-Karten */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {saulen.map((s) => (
            <div
              key={s.title}
              className="bg-surface-low p-10 rounded-xl flex flex-col gap-6 transition-all duration-300 hover:-translate-y-2"
              style={{ boxShadow: "0 12px 32px rgba(24, 28, 32, 0.04)" }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-lg text-on-secondary-container"
                style={{ background: "rgba(118, 244, 224, 0.35)" }}
              >
                {s.icon}
              </div>
              <h3
                className="font-bold text-2xl text-primary"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                {s.title}
              </h3>
              <p className="text-on-surface-muted leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
