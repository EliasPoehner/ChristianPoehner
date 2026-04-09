import Link from "next/link";

export default function KontaktTeaser() {
  return (
    <section className="bg-[#1a3a5c] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
          Sie haben eine Frage oder ein Anliegen?
        </h2>
        <p className="mt-3 text-neutral-300">
          Ich freue mich auf Ihre Nachricht – direkt, persönlich, ohne Umwege.
        </p>
        <Link href="/kontakt" className="mt-8 inline-flex btn-primary bg-[#c8971e] hover:bg-[#e0b040]">
          Jetzt Kontakt aufnehmen
        </Link>
      </div>
    </section>
  );
}
