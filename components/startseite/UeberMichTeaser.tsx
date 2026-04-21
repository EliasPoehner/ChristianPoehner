import Image from "next/image";
import Link from "next/link";

export default function UeberMichTeaser() {
  return (
    <section className="py-24 bg-surface-highest/30">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

        {/* Bild – links */}
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/ChristianPoehner-BuntesHemd.jpg"
                alt="Christian Pöhner"
                fill
                className="object-cover object-top grayscale opacity-80"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            {/* Stat-Card */}
            <div className="absolute -bottom-8 -right-6 bg-surface-white p-6 rounded-xl shadow-lg border border-outline-variant/10 max-w-[240px]">
              <p className="font-extrabold text-4xl text-secondary mb-1" style={{ fontFamily: "var(--font-headline)" }}>
                PZ Systeme
              </p>
              <p className="text-sm font-semibold text-on-surface-muted">
                Gegründetes IT-Unternehmen in Landshut
              </p>
            </div>
          </div>
        </div>

        {/* Text – rechts */}
        <div className="md:col-span-7 order-1 md:order-2 flex flex-col gap-6">
          <span className="font-bold text-secondary text-xs uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-headline)" }}>
            Werdegang
          </span>
          <h2 className="font-extrabold text-4xl text-primary leading-tight" style={{ fontFamily: "var(--font-headline)" }}>
            Zwischen Büro und Rathaus-Sitzung.
          </h2>
          <p className="text-lg text-on-surface-muted leading-relaxed">
            Schreiner, Soldat, Informatiker – mein Weg war alles andere als
            gradlinig. Heute leite ich PZ Systeme und sitze im Landshuter
            Stadtrat. Diese praktische Erfahrung bringe ich in die Politik ein:
            Effizienz, technisches Verständnis und den Mut, Dinge neu zu
            denken.
          </p>
          <p className="text-lg text-on-surface-muted leading-relaxed">
            Für mich ist Landshut wie ein komplexes System – es braucht die
            richtige Architektur, um für alle Bürgerinnen und Bürger optimal zu
            funktionieren.
          </p>
          <div className="pt-4">
            <Link href="/stadtrat" className="btn-secondary px-8 py-3.5">
              Mehr über mich
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
