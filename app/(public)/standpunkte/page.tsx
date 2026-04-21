import type { Metadata } from "next";
import StandpunkteHero from "@/components/standpunkte/StandpunkteHero";
import StandpunkteThemen from "@/components/standpunkte/StandpunkteThemen";
import StandpunkteQA from "@/components/standpunkte/StandpunkteQA";
import KontaktTeaser from "@/components/stadtrat/KontaktTeaser";

export const metadata: Metadata = {
  title: "Standpunkte",
  description:
    "Die politischen Standpunkte von Christian Pöhner – Stadtrat in Landshut. Digitalisierung, Stadtentwicklung, Transparenz und mehr.",
  alternates: { canonical: "/standpunkte" },
};

export default function StandpunktePage() {
  return (
    <>
      <StandpunkteHero />
      <StandpunkteThemen />
      <StandpunkteQA />
      <KontaktTeaser />
    </>
  );
}
