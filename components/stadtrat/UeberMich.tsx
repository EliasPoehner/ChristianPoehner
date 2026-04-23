import Image from "next/image";

export default function UeberMich() {
  return (
    <>
      {/* ── Mobile Hero: Portrait mit Gradient-Overlay ── */}
      <div className="md:hidden px-4 pt-4 pb-0">
        <div className="relative overflow-hidden rounded-3xl shadow-xl" style={{ aspectRatio: "4/5" }}>
          <Image
            src="/images/christian-poehner.png"
            alt="Christian Pöhner, Stadtrat Landshut"
            fill
            className="object-cover object-top"
            priority
            sizes="calc(100vw - 32px)"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span
              className="inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-3 bg-secondary text-on-secondary"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Stadtrat · Unternehmer · Bürger
            </span>
            <h1
              className="font-extrabold text-4xl text-white leading-tight"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Aus dem Rottal –<br />
              <span style={{ color: "#76f4e0" }}>für Landshut.</span>
            </h1>
          </div>
        </div>
      </div>

      {/* ── Mobile Bio-Text ── */}
      <div className="md:hidden px-6 py-8">
        <p className="text-on-surface-muted text-base leading-relaxed mb-6">
          Schreiner, Soldat, Informatiker, Unternehmer, Vater – und seit
          2026 Stadtrat. Mein Weg hat mich gelehrt, was es bedeutet, etwas
          aufzubauen. Diese Erfahrung bringe ich täglich in meine Arbeit
          für Landshut ein.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Unternehmer", "Familienvater", "Ehrenamtlicher", "Stadtrat"].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface-container px-4 py-1.5 text-xs font-semibold text-on-surface-muted border border-outline-variant/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Desktop Hero ── */}
      <section
        className="hidden md:block relative overflow-hidden bg-surface pt-16 pb-12"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(196,198,205,0.15) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="md:col-span-7 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/30 text-secondary font-bold text-xs rounded-full mb-6 tracking-widest uppercase">
              Stadtrat · Unternehmer · Bürger
            </div>
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-primary leading-tight mb-8">
              Aus dem Rottal –{" "}
              <span className="text-secondary">für Landshut.</span>
            </h1>
            <p className="text-on-surface-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Schreiner, Soldat, Informatiker, Unternehmer, Vater – und seit
              2026 Stadtrat. Mein Weg hat mich gelehrt, was es bedeutet, etwas
              aufzubauen. Diese Erfahrung bringe ich täglich in meine Arbeit
              für Landshut ein.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Unternehmer",
                "Familienvater",
                "Ehrenamtlicher",
                "Stadtrat",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface-container px-4 py-1.5 text-xs font-semibold text-on-surface-muted border border-outline-variant/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl rotate-2 bg-surface-highest">
              <Image
                src="/images/christian-poehner.png"
                alt="Christian Pöhner, Stadtrat Landshut"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-white p-5 rounded-xl shadow-xl max-w-xs -rotate-1 border border-outline-variant/20 z-10">
              <p className="font-headline font-bold text-primary text-sm mb-1">
                „Landshut kann mehr –
              </p>
              <p className="text-xs text-on-surface-muted">
                und ich kämpfe dafür."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pullquote Section */}
      <section className="py-16 md:py-24 bg-primary text-on-primary">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="text-6xl text-secondary mb-6 md:mb-8 font-serif leading-none select-none">
            &ldquo;
          </div>
          <blockquote className="font-headline text-xl md:text-3xl font-bold leading-snug mb-8 md:mb-10 italic">
            Ich sehe Politik nicht als Selbstzweck. Sie muss dort ankommen, wo
            das Leben stattfindet – in unseren Stadtteilen, Schulen und
            Betrieben.
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="h-1 w-16 bg-secondary mb-4 rounded-full" />
            <p className="font-bold tracking-widest uppercase text-sm opacity-80">
              Christian Pöhner · Stadtrat Landshut
            </p>
          </div>
        </div>
      </section>

      {/* Bento Content Modules */}
      <section className="py-12 md:py-24 bg-surface-low">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Der Unternehmer */}
            <div className="md:col-span-2 bg-surface-white p-6 md:p-10 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-start border-l-4 border-secondary md:border-l-0">
              <div className="w-24 h-24 md:w-full md:aspect-square md:h-auto rounded-xl overflow-hidden shrink-0 relative">
                <Image
                  src="/images/GesichtsPortrait.jpg"
                  alt="Christian Pöhner"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 96px, 20vw"
                />
              </div>
              <div>
                <h3 className="font-headline font-bold text-xl md:text-2xl text-primary mb-3 md:mb-4">
                  Der Unternehmer
                </h3>
                <p className="text-on-surface-muted leading-relaxed text-sm md:text-base">
                  Nach Ausbildung zum Schreiner und sechs Jahren Bundeswehr
                  schlug ich eine neue Richtung ein: Umschulung zum
                  Fachinformatiker, dann die Gründung von{" "}
                  <strong className="text-on-surface">PZ Systeme</strong>. Heute
                  weiß ich: Strukturen, Verlässlichkeit und der Mut zur
                  Veränderung – das sind keine politischen Schlagworte, das ist
                  gelebte Praxis.
                </p>
              </div>
            </div>

            {/* Der Familienvater */}
            <div className="bg-secondary text-on-secondary p-6 md:p-10 rounded-2xl shadow-sm flex flex-col justify-between">
              <span className="text-4xl mb-4 md:mb-6 select-none">👨‍👩‍👧‍👦</span>
              <div>
                <h3 className="font-headline font-bold text-xl md:text-2xl mb-3 md:mb-4">
                  Der Familienvater
                </h3>
                <p className="text-on-secondary/80 leading-relaxed text-sm md:text-base">
                  Als Vater von drei Kindern weiß ich, worauf es wirklich
                  ankommt: gute Schulen, sichere Stadtteile, eine lebendige
                  Gemeinschaft. Mein politisches Engagement ist mein
                  Versprechen an die nächste Generation.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="md:col-span-3 bg-surface-highest p-6 md:p-10 rounded-2xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <h3 className="font-headline font-bold text-2xl md:text-3xl text-primary mb-4 md:mb-6">
                  Meine Vision für Landshut
                </h3>
                <p className="text-on-surface-muted text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  Eine Stadt, die ihre Bürgerinnen und Bürger ernst nimmt.
                  Transparente Entscheidungen, moderne Verwaltung und echte
                  Bürgerbeteiligung. Kein leeres Versprechen – sondern ein Plan,
                  den wir gemeinsam umsetzen.
                </p>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  {[
                    "Digitale Verwaltung",
                    "Bürgerbeteiligung",
                    "Soziales Miteinander",
                    "Nachhaltige Stadtentwicklung",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-secondary font-bold text-sm"
                    >
                      <svg
                        className="w-5 h-5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute right-8 top-1/2 -translate-y-1/2 font-headline font-extrabold text-[10rem] leading-none text-primary/5 select-none hidden md:block"
              >
                LA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline – Werdegang */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Mein Weg
            </p>
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-primary mb-4">
              Werdegang
            </h2>
            <p className="text-on-surface-muted">
              Vom Rottal bis in den Landshuter Stadtrat.
            </p>
          </div>

          {/* Mobile Timeline: Flex-Layout für exakte Ausrichtung */}
          <div className="md:hidden relative">
            {/* Connector-Linie: zentriert in der 40px Dot-Spalte (Mitte = 20px) */}
            <div
              className="absolute top-5 bottom-5 w-0.5"
              style={{
                left: "19px",
                background: "linear-gradient(to bottom, transparent 0%, rgba(196,198,205,0.45) 8%, rgba(196,198,205,0.45) 92%, transparent 100%)",
              }}
            />
            {[
              {
                period: "Bis 2000",
                title: "Schreiner & Bundeswehr",
                desc: "Ausbildung zum Schreiner im Rottal, anschließend sechs Jahre Dienst bei der Bundeswehr. Teamarbeit, Disziplin und Verantwortung wurden zur zweiten Natur.",
                active: false,
              },
              {
                period: "2000 – 2010",
                title: "Fachinformatiker",
                desc: "Umschulung zum Fachinformatiker – eine bewusste Entscheidung für die Zukunft. Erste Erfahrungen in der IT-Branche und die Grundlage für den nächsten Schritt.",
                active: false,
              },
              {
                period: "2010 – Heute",
                title: "Geschäftsführer PZ Systeme",
                desc: "Gründung und Aufbau des eigenen IT-Unternehmens PZ Systeme – bis heute. Verlässlicher Partner für Unternehmen in der Region, von Infrastruktur bis IT-Security.",
                active: true,
              },
              {
                period: "2026 – Heute",
                title: "Stadtrat Landshut",
                desc: "Wahl in den Landshuter Stadtrat – parallel zur Unternehmensführung. Engagement für digitale Verwaltung, soziales Miteinander und nachhaltige Stadtentwicklung.",
                active: true,
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 mb-8 last:mb-0">
                {/* Dot-Spalte: w-10 = 40px, Dot zentriert → Mitte bei 20px */}
                <div className="flex-shrink-0 w-10 flex justify-center pt-1">
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-[3px] border-surface relative z-10 ${item.active ? "bg-secondary" : "bg-outline-variant"}`}
                  />
                </div>
                {/* Inhalt */}
                <div className="flex-1">
                  <span
                    className="text-xs font-bold tracking-widest uppercase mb-1 block"
                    style={{ color: item.active ? "#006b5f" : "#74777d" }}
                  >
                    {item.period}
                  </span>
                  <h4 className="font-headline font-bold text-lg text-primary mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-on-surface-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Timeline: mittig mit alternierend links/rechts */}
          <div className="hidden md:block relative">
            <div
              className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, transparent 0%, #c4c6cd66 12%, #c4c6cd66 88%, transparent 100%)" }}
            />

            {[
              {
                period: "Bis 2000",
                title: "Schreiner & Bundeswehr",
                desc: "Ausbildung zum Schreiner im Rottal, anschließend sechs Jahre Dienst bei der Bundeswehr. Teamarbeit, Disziplin und Verantwortung wurden zur zweiten Natur.",
                align: "right" as const,
                accent: "bg-secondary",
              },
              {
                period: "2000 – 2010",
                title: "Fachinformatiker",
                desc: "Umschulung zum Fachinformatiker – eine bewusste Entscheidung für die Zukunft. Erste Erfahrungen in der IT-Branche und die Grundlage für den nächsten Schritt.",
                align: "left" as const,
                accent: "bg-primary-container",
              },
              {
                period: "2010 – Heute",
                title: "Geschäftsführer PZ Systeme",
                desc: "Gründung und Aufbau des eigenen IT-Unternehmens PZ Systeme – bis heute. Verlässlicher Partner für Unternehmen in der Region, von Infrastruktur bis IT-Security.",
                align: "right" as const,
                accent: "bg-secondary",
              },
              {
                period: "2026 – Heute",
                title: "Stadtrat Landshut",
                desc: "Wahl in den Landshuter Stadtrat – parallel zur Unternehmensführung. Engagement für digitale Verwaltung, soziales Miteinander und nachhaltige Stadtentwicklung.",
                align: "left" as const,
                accent: "bg-primary",
              },
            ].map((item, i) => {
              const card = (
                <div className="rounded-xl p-5 shadow-sm bg-surface-white border border-outline-variant/30">
                  <h4 className="font-headline font-bold text-lg text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-on-surface-muted">
                    {item.desc}
                  </p>
                </div>
              );

              const periodLabel = (
                <span className="text-xs font-bold tracking-widest text-on-surface-muted uppercase">
                  {item.period}
                </span>
              );

              return (
                <div key={i} className="relative flex justify-between items-center mb-16 w-full">
                  <div className="w-5/12 pr-10 flex items-center justify-end">
                    {item.align === "right" ? periodLabel : card}
                  </div>
                  <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-surface z-10 ${item.accent}`} />
                  <div className="w-5/12 pl-10">
                    {item.align === "right" ? card : periodLabel}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ehrenamt */}
      <section className="py-12 md:py-16 bg-surface-low border-t border-outline-variant/30">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">
          <div className="text-center mb-10 md:mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Ehrenamt
            </p>
            <h2 className="font-headline font-extrabold text-2xl md:text-3xl text-primary">
              Engagement über die Politik hinaus
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: "🤝",
                title: "ZUKUNFT Landshut e.V.",
                desc: "Vorstandsmitglied des gemeinnützigen Vereins, der sich für die Zukunft der Stadt und ihrer Bürger einsetzt.",
              },
              {
                icon: "⚖️",
                title: "Ehrenamtlicher Richter",
                desc: "Als Schöffe bringe ich Bürgerperspektive in den Rechtsstaat ein – Gerechtigkeit ist keine Abstraktion.",
              },
              {
                icon: "⚽",
                title: "Jugendfußballtrainer",
                desc: "Langjähriger Trainer im Jugendfußball – Teamgeist und Fairplay beginnen auf dem Sportplatz.",
              },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-4xl mb-4 select-none">{item.icon}</div>
                <h3 className="font-headline font-bold text-base text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-on-surface-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
