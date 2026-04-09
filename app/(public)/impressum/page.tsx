import type { Metadata } from "next";
import { meta } from "@/content/meta";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Website von Christian Pöhner, Stadtrat in Landshut.",
  alternates: { canonical: "/impressum" },
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-3xl font-bold text-[#1a3a5c]">Impressum</h1>
        <p className="mt-2 text-sm text-neutral-500">Angaben gemäß § 5 TMG</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-neutral-700">
          <section>
            <h2 className="font-serif text-lg font-semibold text-[#1a3a5c]">Verantwortlich</h2>
            <address className="mt-2 not-italic">
              <strong>{meta.name}</strong><br />
              {meta.address.street}<br />
              {meta.address.zip} {meta.address.city}
            </address>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-[#1a3a5c]">Kontakt</h2>
            <p className="mt-2">
              E-Mail:{" "}
              <a href={`mailto:${meta.email}`} className="hover:text-[#1a3a5c] underline">
                {meta.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-[#1a3a5c]">
              Redaktionell verantwortlich
            </h2>
            <p className="mt-2">{meta.name}, {meta.address.street}, {meta.address.zip} {meta.address.city}</p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-[#1a3a5c]">
              Technische Umsetzung
            </h2>
            <p className="mt-2">
              <a
                href={meta.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1a3a5c] underline"
              >
                {meta.company}
              </a>
              , {meta.address.street}, {meta.address.zip} {meta.address.city}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-[#1a3a5c]">
              Haftungsausschluss
            </h2>
            <div className="mt-2 space-y-3">
              <p>
                <strong>Haftung für Inhalte:</strong> Die Inhalte dieser Website wurden mit größter
                Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                kann jedoch keine Gewähr übernommen werden.
              </p>
              <p>
                <strong>Haftung für Links:</strong> Diese Website enthält Links zu externen Websites.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
                Zum Zeitpunkt der Verlinkung wurden keine Rechtsverstöße festgestellt.
              </p>
              <p>
                <strong>Urheberrecht:</strong> Die auf dieser Website enthaltenen Inhalte unterliegen
                dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung bedürfen
                der schriftlichen Genehmigung.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-[#1a3a5c]">
              Online-Streitbeilegung
            </h2>
            <p className="mt-2">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#1a3a5c]"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
