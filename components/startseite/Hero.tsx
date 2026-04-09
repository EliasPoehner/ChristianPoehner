import Image from "next/image";
import Link from "next/link";
import { meta } from "@/content/meta";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#c8971e]">
              {meta.role} · {meta.city}
            </p>
            <h1
              className="mb-4 font-serif text-4xl font-bold leading-tight text-[#1a3a5c] sm:text-5xl lg:text-6xl"
            >
              {meta.name}
            </h1>
            <p className="mb-4 text-xl font-light text-neutral-600 sm:text-2xl">
              {meta.tagline}
            </p>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-neutral-600 lg:text-lg">
              Aufgewachsen im Rottal, verwurzelt in Landshut. Als Gründer, Familienvater
              und Ehrenamtlicher bringe ich frischen Wind in die Lokalpolitik –
              für ein Landshut, das mehr kann.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link href="/stadtrat" className="btn-primary w-full sm:w-auto">
                Meine Arbeit als Stadtrat
              </Link>
              <Link href="/kontakt" className="btn-outline w-full sm:w-auto">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>

          {/* Bild */}
          <div className="relative flex-shrink-0">
            <div className="relative h-72 w-56 overflow-hidden rounded-2xl shadow-xl sm:h-96 sm:w-72 lg:h-[460px] lg:w-[340px]">
              <Image
                src="/images/christian-poehner.png"
                alt="Christian Pöhner, Stadtrat Landshut"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 340px"
              />
            </div>
            {/* Akzent-Dekoration */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-[#c8971e]/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
