import { werte } from "@/content/werte";

const icons: Record<string, string> = {
  stadtentwicklung: "🌱",
  digitalisierung: "💻",
  freizeit: "🎭",
  stadtteile: "🏘️",
  zusammenhalt: "🤝",
  transparenz: "👁️",
};

export default function WerteZiele() {
  return (
    <section className="bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#c8971e]">
            Meine Themen
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#1a3a5c] sm:text-4xl">
            Werte & Ziele
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-neutral-600">
            Diese Themen treiben mich an – für ein Landshut, das alle Bürgerinnen und Bürger mitnimmt.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {werte.map((wert) => (
            <div key={wert.id} className="card">
              <span className="text-3xl" aria-hidden="true">
                {icons[wert.id] ?? "•"}
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-[#1a3a5c]">
                {wert.titel}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {wert.beschreibung}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
