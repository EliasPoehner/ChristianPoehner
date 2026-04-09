const stationen = [
  { label: "Aufgewachsen im Rottal", icon: "🌿" },
  { label: "Schreiner · Bundeswehr · Fachinformatiker", icon: "🎓" },
  { label: "Gründer von PZ Systeme", icon: "💼" },
  { label: "Familienvater von drei Kindern", icon: "👨‍👩‍👧‍👦" },
  { label: "Stadtrat in Landshut", icon: "🏛️" },
];

export default function ShortIntro() {
  return (
    <section className="bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl font-bold text-[#1a3a5c] sm:text-3xl">
            Wer ich bin
          </h2>
          <p className="mt-3 text-neutral-600">
            Ein Landshuter mit Bodenhaftung – und dem Blick nach vorne.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stationen.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm"
            >
              <span className="text-xl" aria-hidden="true">{s.icon}</span>
              <span className="text-sm font-medium text-neutral-700">{s.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-base leading-relaxed text-neutral-600 max-w-2xl mx-auto">
          Ich bin kein Politiker aus dem Lehrbuch – sondern jemand, der anpackt.
          Als Unternehmer, Ehrenamtlicher und Vater weiß ich, was Landshut braucht.
          Mein Ziel: eine Stadt, die für alle funktioniert.
        </p>
      </div>
    </section>
  );
}
