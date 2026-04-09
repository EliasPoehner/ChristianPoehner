import type { Metadata } from "next";
import { meta } from "@/content/meta";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Website von Christian Pöhner.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-3xl font-bold text-[#1a3a5c]">Datenschutzerklärung</h1>
        <p className="mt-2 text-sm text-neutral-500">Stand: April 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-neutral-700">
          <section>
            <h2 className="font-serif text-lg font-semibold text-[#1a3a5c]">
              1. Verantwortlicher
            </h2>
            <address className="mt-2 not-italic">
              {meta.name}<br />
              {meta.address.street}<br />
              {meta.address.zip} {meta.address.city}<br />
              E-Mail:{" "}
              <a href={`mailto:${meta.email}`} className="underline hover:text-[#1a3a5c]">
                {meta.email}
              </a>
            </address>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-[#1a3a5c]">
              2. Allgemeine Hinweise
            </h2>
            <p className="mt-2">
              Diese Website verzichtet bewusst auf Tracking-Tools, Cookies zur Nutzungsverfolgung,
              eingebettete Social-Media-Inhalte und Google Analytics. Es werden keine
              Nutzungsprofile erstellt.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-[#1a3a5c]">
              3. Server-Logfiles
            </h2>
            <p className="mt-2">
              Beim Aufruf dieser Website werden automatisch folgende Daten vom Server erfasst:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>IP-Adresse (anonymisiert)</li>
              <li>Datum und Uhrzeit des Abrufs</li>
              <li>Aufgerufene URL</li>
              <li>Verwendeter Browser und Betriebssystem</li>
            </ul>
            <p className="mt-2">
              Diese Daten werden ausschließlich zur technischen Absicherung des Betriebs verwendet
              und nach spätestens 7 Tagen gelöscht. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-[#1a3a5c]">
              4. Kontaktformular
            </h2>
            <p className="mt-2">
              Wenn Sie das Kontaktformular nutzen, werden die von Ihnen eingegebenen Daten
              (Name, E-Mail, Betreff, Nachricht) per E-Mail an mich weitergeleitet und
              <strong> nicht in einer Datenbank gespeichert</strong>.
            </p>
            <p className="mt-2">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw.
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
              Ihre Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-[#1a3a5c]">
              5. Schriftarten (Google Fonts)
            </h2>
            <p className="mt-2">
              Diese Website verwendet Google Fonts – jedoch werden die Schriftdateien
              <strong> beim Build-Vorgang</strong> auf den eigenen Server geladen. Beim Aufruf
              der Website findet <strong>keine Verbindung zu Google-Servern</strong> statt.
              Es werden keine Daten an Google übermittelt.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-[#1a3a5c]">
              6. Externe Links (Social Media)
            </h2>
            <p className="mt-2">
              Diese Website enthält Links zu Instagram und Facebook. Durch Klicken auf diese Links
              verlassen Sie diese Website. Beim Aufruf der verlinkten Seiten gelten die
              Datenschutzbestimmungen der jeweiligen Anbieter. Es werden keine Social-Media-Widgets
              oder Tracking-Pixel eingebettet.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-[#1a3a5c]">
              7. Ihre Rechte
            </h2>
            <p className="mt-2">Sie haben gemäß DSGVO das Recht auf:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Widerspruch (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>
            <p className="mt-2">
              Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
              <a href={`mailto:${meta.email}`} className="underline hover:text-[#1a3a5c]">
                {meta.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-[#1a3a5c]">
              8. Zuständige Aufsichtsbehörde
            </h2>
            <p className="mt-2">
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
              Promenade 27, 91522 Ansbach<br />
              <a
                href="https://www.lda.bayern.de"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#1a3a5c]"
              >
                www.lda.bayern.de
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
