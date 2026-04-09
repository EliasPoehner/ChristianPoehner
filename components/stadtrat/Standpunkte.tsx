import { standpunkte } from "@/content/standpunkte";

export default function Standpunkte() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#c8971e]">
            Klare Worte
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#1a3a5c] sm:text-4xl">
            Standpunkte
          </h2>
          <p className="mt-3 text-neutral-600">
            Was ich denke – direkt und ohne Politsprech.
          </p>
        </div>

        <div className="space-y-3">
          {standpunkte.map((sp) => (
            <details
              key={sp.id}
              className="group rounded-xl border border-neutral-200 bg-neutral-50 open:bg-white open:shadow-sm transition-all duration-200"
            >
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-neutral-800 list-none hover:text-[#1a3a5c]">
                <span>{sp.frage}</span>
                <svg
                  className="ml-4 h-4 w-4 flex-shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 pt-2">
                <p className="text-sm leading-relaxed text-neutral-600">{sp.antwort}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
