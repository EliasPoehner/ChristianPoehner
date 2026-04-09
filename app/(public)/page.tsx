import type { Metadata } from "next";
import Hero from "@/components/startseite/Hero";
import ShortIntro from "@/components/startseite/ShortIntro";
import ContactLinks from "@/components/startseite/ContactLinks";
import { meta } from "@/content/meta";

export const metadata: Metadata = {
  title: "Christian Pöhner – Stadtrat Landshut",
  description:
    "Christian Pöhner ist Stadtrat in Landshut (Niederbayern). Frischer Wind für Landshut – als Unternehmer, Familienvater und Bürger.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: meta.name,
  jobTitle: "Stadtrat",
  worksFor: {
    "@type": "Organization",
    name: "Stadtrat Landshut",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Landshut",
      addressRegion: "Niederbayern",
      addressCountry: "DE",
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: meta.address.street,
    postalCode: meta.address.zip,
    addressLocality: meta.address.city,
    addressCountry: "DE",
  },
  email: meta.email,
  sameAs: [meta.social.instagram.url, meta.social.facebook.url],
  url: meta.siteUrl,
};

export default function Startseite() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ShortIntro />
      <ContactLinks />
    </>
  );
}
