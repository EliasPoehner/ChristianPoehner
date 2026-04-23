// Inhalte aus content/werte.ts und content/standpunkte.ts

const ReviewBadge = () => (
  <span
    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold"
    style={{ background: "#fef3c7", color: "#92400e" }}
    title="Dieser Inhalt wurde noch nicht final abgestimmt und sollte überarbeitet werden."
  >
    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
    Bitte überarbeiten
  </span>
);

const CheckItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <svg
      className="w-5 h-5 flex-shrink-0 mt-0.5"
      style={{ color: "#006b5f" }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span className="text-on-surface font-medium text-sm">{text}</span>
  </li>
);

export default function StandpunkteThemen() {
  return (
    <section className="px-4 md:px-6 lg:px-12 max-w-screen-xl mx-auto pb-12 md:pb-20 space-y-6 md:space-y-8">

      {/* Reihe 1: Digitalisierung (groß, 7-col) + Visual (5-col) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Digitalisierung – Hauptkarte */}
        <div
          className="lg:col-span-7 p-6 md:p-10 rounded-2xl flex flex-col justify-between"
          style={{
            background: "#f1f4f9",
            borderLeft: "4px solid #006b5f",
            boxShadow: "0 12px 32px rgba(24,28,32,0.04)",
          }}
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div
                className="p-3 rounded-lg"
                style={{ background: "rgba(118, 244, 224, 0.35)" }}
              >
                <svg className="w-6 h-6" style={{ color: "#006b5f" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                </svg>
              </div>
              <h2
                className="font-extrabold text-2xl text-primary"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Digitalisierung der Verwaltung
              </h2>
            </div>

            <p className="text-on-surface-muted text-base leading-relaxed mb-6">
              Bürgerservices müssen endlich vollständig digital verfügbar sein. Behördengänge,
              die heute noch unnötig Zeit kosten, müssen online erledigt werden können.
              Als IT-Unternehmer weiß ich: Das ist kein Hexenwerk – es braucht nur den
              politischen Willen.
            </p>

            <ul className="space-y-3 mb-8">
              <CheckItem text="Online-Anträge für alle Bürgerdienste ohne Medienbruch" />
              <CheckItem text="Digitale Terminvergabe und transparente Bearbeitungszeiten" />
            </ul>
          </div>

          {/* Fortschrittsanzeige – muss noch überarbeitet werden */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-on-surface-muted font-bold uppercase tracking-wider">
                Umsetzungsstand im Stadtrat
              </p>
              <ReviewBadge />
            </div>
            <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: "#dfe3e8" }}>
              <div
                className="h-full rounded-full"
                style={{ width: "40%", background: "#006b5f", boxShadow: "0 0 12px rgba(0,107,95,0.4)" }}
              />
            </div>
            <p className="text-xs text-on-surface-muted mt-1">Prozentualer Wert muss noch angegeben werden</p>
          </div>
        </div>

        {/* Visual-Block */}
        <div
          className="hidden lg:flex lg:col-span-5 rounded-2xl overflow-hidden min-h-[240px] flex-col justify-end p-8 relative"
          style={{ background: "linear-gradient(135deg, #041627 0%, #006b5f 100%)" }}
        >
          <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <span
              className="text-xs font-bold uppercase tracking-widest mb-3 block"
              style={{ color: "#76f4e0", fontFamily: "var(--font-headline)" }}
            >
              Mein Hintergrund
            </span>
            <p className="text-on-primary font-medium leading-relaxed text-sm">
              Als Gründer von PZ Systeme bringe ich über 15 Jahre IT-Expertise direkt
              in die Kommunalpolitik.
            </p>
          </div>
        </div>
      </div>

      {/* Reihe 2: Visual (4-col) + Stadtentwicklung (8-col) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Visual-Block */}
        <div
          className="hidden lg:flex lg:col-span-4 rounded-2xl overflow-hidden min-h-[300px] flex-col justify-center items-center p-8 relative"
          style={{ background: "#ebeef3" }}
        >
          <svg className="w-20 h-20 opacity-20" style={{ color: "#041627" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <p className="text-on-surface-muted text-sm text-center mt-4 font-medium">Nachhaltige Stadtentwicklung</p>
        </div>

        {/* Stadtentwicklung */}
        <div
          className="lg:col-span-8 p-8 md:p-10 rounded-2xl"
          style={{ background: "rgba(223, 227, 232, 0.4)", boxShadow: "0 12px 32px rgba(24,28,32,0.04)" }}
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="p-3 rounded-lg" style={{ background: "rgba(118, 244, 224, 0.35)" }}>
              <svg className="w-6 h-6" style={{ color: "#006b5f" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <h2 className="font-extrabold text-2xl text-primary" style={{ fontFamily: "var(--font-headline)" }}>
              Nachhaltige Stadtentwicklung
            </h2>
          </div>

          <p className="text-on-surface-muted text-base leading-relaxed mb-6">
            Wachstum ja – aber nachhaltig. Wohnraum, Grünflächen und Infrastruktur
            müssen gemeinsam gedacht werden, nicht gegeneinander. Landshut braucht
            kluge Verdichtung statt unkontrolliertem Flächenfraß.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Smarte Verdichtung", text: "Wohnraum schaffen ohne Grünflächen zu opfern." },
              { title: "Alle Stadtteile", text: "Nicht nur die Innenstadt, sondern alle Stadtteile gleichermaßen stärken." },
            ].map((item) => (
              <div key={item.title} className="bg-surface-white p-4 rounded-xl" style={{ boxShadow: "0 4px 12px rgba(24,28,32,0.04)" }}>
                <p className="text-sm font-bold text-primary mb-1" style={{ fontFamily: "var(--font-headline)" }}>{item.title}</p>
                <p className="text-xs text-on-surface-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reihe 3: Transparenz – volle Breite */}
      <div
        className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
        style={{ background: "#ffffff", boxShadow: "0 12px 32px rgba(24,28,32,0.06)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start relative z-10">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-lg" style={{ background: "rgba(118, 244, 224, 0.35)" }}>
                <svg className="w-6 h-6" style={{ color: "#006b5f" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="font-extrabold text-2xl text-primary" style={{ fontFamily: "var(--font-headline)" }}>
                Transparenz & Bürgerbeteiligung
              </h2>
            </div>
            <p className="text-on-surface-muted text-base leading-relaxed mb-6">
              Entscheidungen werden zu oft hinter verschlossenen Türen getroffen.
              Ich stehe für offene Kommunikation und echte Bürgerbeteiligung –
              nicht nur vor Wahlen. Wer Vertrauen will, muss Transparenz liefern.
            </p>
            <ul className="space-y-3">
              <CheckItem text="Offene Kommunikation zu Stadtratsentscheidungen" />
              <CheckItem text="Echte Bürgerbeteiligung, nicht nur Schaufensterpolitik" />
              <CheckItem text="Klares Bekenntnis zu meinen eigenen Interessenkonflikten" />
            </ul>
          </div>

          {/* Status-Feature-Liste */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-xl" style={{ background: "#f7f9fe" }}>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-on-surface-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span className="font-medium text-sm">Transparenzbericht Stadtrat</span>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg" style={{ background: "#dcfce7", color: "#166534" }}>AKTIV</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl opacity-70" style={{ background: "#f7f9fe" }}>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-on-surface-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <span className="font-medium text-sm">Bürgerdialog-Format</span>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg" style={{ background: "#e5e8ed", color: "#44474c" }}>IN PLANUNG</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl opacity-50" style={{ background: "#f7f9fe" }}>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-on-surface-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                <span className="font-medium text-sm">Online-Abstimmungsplattform</span>
              </div>
              <div className="flex items-center gap-2">
                <ReviewBadge />
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg" style={{ background: "#e5e8ed", color: "#44474c" }}>IDEE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reihe 4: Wirtschaft + Freizeit & Kultur nebeneinander */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Wirtschaft */}
        <div
          className="p-8 rounded-2xl flex flex-col gap-5"
          style={{ background: "#f1f4f9", boxShadow: "0 12px 32px rgba(24,28,32,0.04)" }}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg" style={{ background: "rgba(118, 244, 224, 0.35)" }}>
              <svg className="w-6 h-6" style={{ color: "#006b5f" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
              </svg>
            </div>
            <h2 className="font-extrabold text-xl text-primary" style={{ fontFamily: "var(--font-headline)" }}>
              Lokale Wirtschaft
            </h2>
          </div>
          <p className="text-on-surface-muted text-sm leading-relaxed">
            Als Gründer und Unternehmer weiß ich: Bürokratie kostet Zeit und Geld.
            Ich setze mich für unbürokratische Unterstützung, faire Rahmenbedingungen
            und kurze Entscheidungswege für Selbstständige und kleine Unternehmen ein.
          </p>
          <ul className="space-y-2">
            <CheckItem text="Unbürokratische Unterstützung für Gründer und KMU" />
            <CheckItem text="Kurze Entscheidungswege in der Verwaltung" />
          </ul>
        </div>

        {/* Freizeit & Kultur */}
        <div
          className="p-8 rounded-2xl flex flex-col gap-5 text-on-primary relative overflow-hidden"
          style={{ background: "#006b5f" }}
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10 flex flex-col gap-5">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg" style={{ background: "rgba(255,255,255,0.15)" }}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
              </svg>
            </div>
            <h2 className="font-extrabold text-xl" style={{ fontFamily: "var(--font-headline)" }}>
              Freizeit & Kultur
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Mehr niedrigschwellige Angebote – bezahlbare Veranstaltungen, offene
              Treffpunkte für alle Generationen und mehr Unterstützung für das Ehrenamt,
              das Landshut wirklich zusammenhält.
            </p>
          </div>
        </div>
      </div>

      {/* Hinweis: Sozialer Zusammenhalt – braucht noch inhaltliche Ausarbeitung */}
      <div
        className="rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        style={{ background: "#f1f4f9", boxShadow: "0 12px 32px rgba(24,28,32,0.04)" }}
      >
        <div className="flex items-start gap-5">
          <div className="p-3 rounded-lg flex-shrink-0" style={{ background: "rgba(118, 244, 224, 0.35)" }}>
            <svg className="w-6 h-6" style={{ color: "#006b5f" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="font-extrabold text-xl text-primary" style={{ fontFamily: "var(--font-headline)" }}>
                Sozialer Zusammenhalt
              </h2>
              <ReviewBadge />
            </div>
            <p className="text-on-surface-muted text-sm leading-relaxed max-w-xl">
              Gemeinsam statt gegeneinander – Engagement für Familien, Ehrenamt und ein
              solidarisches Miteinander in Landshut.{" "}
              <em className="text-xs">Detaillierte Ausführung folgt – bitte überarbeiten.</em>
            </p>
          </div>
        </div>
        <span
          className="text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0"
          style={{ background: "#e5e8ed", color: "#44474c" }}
        >
          IN AUSARBEITUNG
        </span>
      </div>

    </section>
  );
}
