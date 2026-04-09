export interface Standpunkt {
  id: string;
  frage: string;
  antwort: string;
}

export const standpunkte: Standpunkt[] = [
  {
    id: "stadtentwicklung",
    frage: "Wie soll Landshut wachsen?",
    antwort:
      "Wachstum ja – aber nachhaltig. Wohnraum, Grünflächen und Infrastruktur müssen gemeinsam gedacht werden, nicht gegeneinander. Landshut braucht kluge Verdichtung statt unkontrolliertem Flächenfraß.",
  },
  {
    id: "digitalisierung",
    frage: "Was muss die Stadtverwaltung digital besser machen?",
    antwort:
      "Bürgerservices müssen endlich vollständig digital verfügbar sein. Behördengänge, die heute noch unnötig Zeit kosten, müssen online erledigt werden können. Als IT-Unternehmer weiß ich: Das ist kein Hexenwerk – es braucht nur den politischen Willen.",
  },
  {
    id: "freizeit",
    frage: "Was fehlt Landshut im Bereich Freizeit & Kultur?",
    antwort:
      "Mehr niedrigschwellige Angebote – bezahlbare Veranstaltungen, offene Treffpunkte für alle Generationen und mehr Unterstützung für das Ehrenamt, das Landshut wirklich zusammenhält.",
  },
  {
    id: "wirtschaft",
    frage: "Wie stärken wir lokale Unternehmen und Selbstständige?",
    antwort:
      "Als Gründer und Unternehmer weiß ich: Bürokratie kostet Zeit und Geld. Ich setze mich für unbürokratische Unterstützung, faire Rahmenbedingungen und kurze Entscheidungswege für Selbstständige und kleine Unternehmen ein.",
  },
  {
    id: "transparenz",
    frage: "Was läuft in der Lokalpolitik schief?",
    antwort:
      "Entscheidungen werden zu oft hinter verschlossenen Türen getroffen. Ich stehe für offene Kommunikation und echte Bürgerbeteiligung – nicht nur vor Wahlen. Wer Vertrauen will, muss Transparenz liefern.",
  },
];
