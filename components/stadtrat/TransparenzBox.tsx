export default function TransparenzBox() {
  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-[#c8971e]/30 bg-[#c8971e]/5 p-8">
          <div className="flex items-start gap-4">
            <span className="text-3xl" aria-hidden="true">🔍</span>
            <div>
              <h2 className="font-serif text-xl font-bold text-[#1a3a5c]">
                Transparenz ist mir wichtig
              </h2>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-600">
                <p>
                  Ich sitze als unabhängiger Stadtrat im Stadtrat Landshut. Mein Mandat ist{" "}
                  <strong className="text-neutral-800">ehrenamtlich</strong> – ich erhalte dafür keine Vergütung.
                </p>
                <p>
                  Ich bin Mitglied und Vorstand bei <strong className="text-neutral-800">ZUKUNFT Landshut e.V.</strong>,
                  einer überparteilichen Bürgerinitiative für ein lebenswertes Landshut.
                </p>
                <p>
                  Beruflich führe ich die <strong className="text-neutral-800">PZ Systeme</strong>,
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
