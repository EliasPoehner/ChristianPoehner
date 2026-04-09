import type { Metadata } from "next";
import UeberMich from "@/components/stadtrat/UeberMich";
import WerteZiele from "@/components/stadtrat/WerteZiele";
import Standpunkte from "@/components/stadtrat/Standpunkte";
import SocialMedia from "@/components/stadtrat/SocialMedia";
import TransparenzBox from "@/components/stadtrat/TransparenzBox";
import KontaktTeaser from "@/components/stadtrat/KontaktTeaser";

export const metadata: Metadata = {
  title: "Stadtrat",
  description:
    "Erfahren Sie mehr über Christian Pöhners Arbeit als Stadtrat in Landshut – seine Werte, Standpunkte und sein Engagement für die Stadt.",
  alternates: { canonical: "/stadtrat" },
};

export default function StadtratPage() {
  return (
    <>
      <UeberMich />
      <WerteZiele />
      <Standpunkte />
      <SocialMedia />
      <TransparenzBox />
      <KontaktTeaser />
    </>
  );
}
