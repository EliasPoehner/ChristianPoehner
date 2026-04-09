export interface Wert {
  id: string;
  titel: string;
  beschreibung: string;
}

export const werte: Wert[] = [
  {
    id: "stadtentwicklung",
    titel: "Nachhaltige Stadtentwicklung",
    beschreibung:
      "Landshut zukunftsfähig gestalten – mit Blick auf Umwelt, Lebensqualität und smarte Infrastruktur.",
  },
  {
    id: "digitalisierung",
    titel: "Digitalisierung",
    beschreibung:
      "Verwaltung modernisieren, digitale Angebote für Bürger ausbauen und Landshut als attraktiven Wirtschaftsstandort stärken.",
  },
  {
    id: "freizeit",
    titel: "Freizeit & Kultur",
    beschreibung:
      "Ein lebendiges Landshut braucht Räume für Begegnung, Kultur und Sport – für alle Generationen.",
  },
  {
    id: "stadtteile",
    titel: "Attraktive Stadtteile",
    beschreibung:
      "Alle Stadtteile verdienen Aufmerksamkeit – nicht nur die Innenstadt.",
  },
  {
    id: "zusammenhalt",
    titel: "Sozialer Zusammenhalt",
    beschreibung:
      "Gemeinsam statt gegeneinander. Engagement für Familien, Ehrenamt und ein solidarisches Miteinander.",
  },
  {
    id: "transparenz",
    titel: "Transparenz",
    beschreibung:
      "Politische Entscheidungen müssen nachvollziehbar und ehrlich kommuniziert werden.",
  },
];
