import type { Metadata } from "next";
import KontaktForm from "@/components/kontakt/KontaktForm";
import { meta } from "@/content/meta";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Schreiben Sie Christian Pöhner eine Nachricht – direkt, persönlich und ohne Umwege.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#c8971e]">
            Schreiben Sie mir
          </p>
          <h1 className="font-serif text-3xl font-bold text-[#1a3a5c] sm:text-4xl">
            Kontakt
          </h1>
          <p className="mt-3 text-neutral-600">
            Haben Sie ein Anliegen, eine Frage oder möchten Sie einfach Ihre Meinung teilen?
            Ich freue mich auf Ihre Nachricht.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Formular */}
          <div className="flex-1">
            <KontaktForm />
          </div>

          {/* Kontaktinfos */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-base font-semibold text-[#1a3a5c]">
                  Direkter Kontakt
                </h2>
                <a
                  href={`mailto:${meta.email}`}
                  className="mt-2 block text-sm text-neutral-600 hover:text-[#1a3a5c] transition-colors"
                >
                  {meta.email}
                </a>
              </div>

              <div>
                <h2 className="font-serif text-base font-semibold text-[#1a3a5c]">
                  Social Media
                </h2>
                <div className="mt-2 space-y-2">
                  <a
                    href={meta.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-neutral-600 hover:text-[#1a3a5c] transition-colors"
                  >
                    Instagram {meta.social.instagram.handle}
                  </a>
                  <a
                    href={meta.social.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-neutral-600 hover:text-[#1a3a5c] transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>

              <div className="rounded-xl bg-neutral-50 p-4 text-xs text-neutral-500 leading-relaxed">
                Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet
                und nicht gespeichert oder weitergegeben.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
