import Image from "next/image";

export default function UeberMich() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Bild */}
          <div className="relative flex-shrink-0">
            <div className="relative h-72 w-56 overflow-hidden rounded-2xl shadow-lg sm:h-80 sm:w-64">
              <Image
                src="/images/christian-poehner.png"
                alt="Christian Pöhner"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 224px, 256px"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl bg-[#c8971e]/15" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#c8971e]">
              Über mich
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#1a3a5c] sm:text-4xl">
              Vom Rottal nach Landshut
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600">
              <p>
                Ich bin Christian Pöhner – aufgewachsen im Rottal, seit Jahren in Landshut zuhause.
                Mein Weg war alles andere als geradlinig: Ausbildung zum Schreiner, sechs Jahre Bundeswehr,
                dann Umschulung zum Fachinformatiker und schließlich die Gründung meines eigenen Unternehmens
                <strong className="text-neutral-800"> PZ Systeme</strong>.
              </p>
              <p>
                Heute bin ich Familienvater von drei Kindern und engagiere mich in zahlreichen
                Ehrenämtern – als Vorstand bei ZUKUNFT Landshut e.V., als ehemaliger Jugendfußballtrainer
                und ehrenamtlicher Richter. Mir ist wichtig, dass Politik nicht im Elfenbeinturm
                stattfindet, sondern dort, wo das Leben passiert.
              </p>
              <p>
                Als Stadtrat bringe ich die Perspektive eines Unternehmers, eines Vaters und eines
                Menschen mit, der weiß, was es bedeutet, sich etwas aufzubauen.{" "}
                <strong className="text-neutral-800">Landshut kann mehr – und ich kämpfe dafür.</strong>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Unternehmer", "Familienvater", "Ehrenamtlicher", "Stadtrat"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-4 py-1.5 text-xs font-medium text-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
