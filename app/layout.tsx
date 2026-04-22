import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Christian Pöhner – Stadtrat Landshut",
    template: "%s | Christian Pöhner",
  },
  description:
    "Christian Pöhner ist Stadtrat in Landshut (Niederbayern). Hier finden Sie seine politischen Standpunkte, Kontaktdaten und mehr.",
  metadataBase: new URL("https://poehner.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Christian Pöhner",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${jakarta.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
