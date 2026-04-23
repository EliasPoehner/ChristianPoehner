import Image from "next/image";

export default function UeberMich() {
  return (
    <>
      {/* Hero Editorial Section */}
      <section
        className="relative overflow-hidden bg-surface pt-16 pb-12"
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
      <section className="py-24 bg-primary text-on-primary">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="text-6xl text-secondary mb-8 font-serif leading-none select-none">
            &ldquo;
          </div>
          <blockquote className="font-headline text-2xl md:text-3xl font-bold leading-snug mb-10 italic">
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
      <section className="py-24 bg-surface-low">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Der Unternehmer */}
            <div className="md:col-span-2 bg-surface-white p-10 rounded-xl shadow-sm flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 aspect-square rounded-lg overflow-hidden shrink-0 relative">
                <Image
                  src="/images/GesichtsPortrait.jpg"
                  alt="Christian Pöhner"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
              <div>
                <h3 className="font-headline font-bold text-2xl text-primary mb-4">
                  Der Unternehmer
                </h3>
                <p className="text-on-surface-muted leading-relaxed">
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
            <div className="bg-secondary text-on-secondary p-10 rounded-xl shadow-sm flex flex-col justify-between">
              <span className="text-4xl mb-6 select-none">👨‍👩‍👧‍👦</span>
              <div>
                <h3 className="font-headline font-bold text-2xl mb-4">
                  Der Familienvater
                </h3>
                <p className="text-on-secondary/80 leading-relaxed">
                  Als Vater von drei Kindern weiß ich, worauf es wirklich
                  ankommt: gute Schulen, sichere Stadtteile, eine lebendige
                  Gemeinschaft. Mein politisches Engagement ist mein
                  Versprechen an die nächste Generation.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="md:col-span-3 bg-surface-highest p-10 rounded-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <h3 className="font-headline font-bold text-3xl text-primary mb-6">
                  Meine Vision für Landshut
                </h3>
                <p className="text-on-surface-muted text-lg leading-relaxed mb-8">
                  Eine Stadt, die ihre Bürgerinnen und Bürger ernst nimmt.
                  Transparente Entscheidungen, moderne Verwaltung und echte
                  Bürgerbeteiligung. Kein leeres Versprechen – sondern ein Plan,
                  den wir gemeinsam umsetzen.
                </p>
                <div className="flex flex-wrap gap-6">
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
              {/* decorative background text */}
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
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-20">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Mein Weg
            </p>
            <h2 className="font-headline font-extrabold text-4xl text-primary mb-4">
              Werdegang
            </h2>
            <p className="text-on-surface-muted">
              Vom Rottal bis in den Landshuter Stadtrat.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line – fades at top and bottom */}
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
                  {/* Left column */}
                  <div className="w-5/12 pr-10 hidden md:flex md:items-center md:justify-end">
                    {item.align === "right" ? periodLabel : card}
                  </div>

                  {/* Dot */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-surface z-10 ${item.accent}`} />

                  {/* Right column */}
                  <div className="w-full md:w-5/12 md:pl-10 pl-10">
                    {/* Mobile: period always above card */}
                    <div className="md:hidden text-xs font-bold tracking-widest text-on-surface-muted uppercase mb-2">
                      {item.period}
                    </div>
                    {/* Desktop: show card or period label depending on alignment */}
                    <div className="hidden md:block">
                      {item.align === "right" ? card : periodLabel}
                    </div>
                    {/* Mobile: always show card */}
                    <div className="md:hidden">{card}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ehrenamt */}
      <section className="py-16 bg-surface-low border-t border-outline-variant/30">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Ehrenamt
            </p>
            <h2 className="font-headline font-extrabold text-3xl text-primary">
              Engagement über die Politik hinaus
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
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
