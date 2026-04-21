import type { Metadata } from "next";
import UeberMich from "@/components/stadtrat/UeberMich";
import KontaktTeaser from "@/components/stadtrat/KontaktTeaser";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Erfahren Sie mehr über Christian Pöhners Arbeit als Stadtrat in Landshut – seine Werte, Standpunkte und sein Engagement für die Stadt.",
  alternates: { canonical: "/stadtrat" },
};

export default function StadtratPage() {
  return (
    <>
      <UeberMich />
      <KontaktTeaser />
    </>
  );
}
