export default function TransparenzBox() {
  return (
    <section className="bg-surface-white py-14 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div
          className="rounded-2xl p-8"
          style={{
            background: "rgba(118, 244, 224, 0.12)",
            boxShadow: "0 12px 32px rgba(24, 28, 32, 0.04)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg"
              style={{ background: "rgba(118, 244, 224, 0.35)", color: "#006b5f" }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h2
                className="font-bold text-xl text-primary mb-3"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Transparenz ist mir wichtig
              </h2>
              <div className="space-y-2 text-sm leading-relaxed text-on-surface-muted">
                <p>
                  Ich bin Mitglied und Vorstand bei{" "}
                  <strong className="text-on-surface">ZUKUNFT Landshut e.V.</strong>,
                  einer Wählergemeinschaft für ein lebenswertes Landshut.
                </p>
                <p>
                  Beruflich führe ich die{" "}
                  <strong className="text-on-surface">PZ Systeme</strong>,
                  ein IT-Unternehmen mit Sitz in Landshut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
