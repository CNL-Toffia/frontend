import React, { Suspense } from "react";
import { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contactez-Nous | TOFFIA — CNL Caramel",
  description:
    "Contactez l'équipe commerciale de CNL Caramel à Blida pour vos commandes, devis professionnels, partenariats et toute demande d'information sur les produits TOFFIA.",
  openGraph: {
    title: "Contactez-Nous | TOFFIA — CNL Caramel",
    description:
      "Formulaire de contact et coordonnées directes de l'unité de production CNL Caramel à Blida, Algérie.",
    url: "https://toffiacaramel-dz.com/contact",
    images: [
      {
        url: "/caramel1.png",
        width: 1200,
        height: 630,
        alt: "Contact TOFFIA CNL Caramel",
      },
    ],
  },
  alternates: {
    canonical: "https://toffiacaramel-dz.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col w-full bg-cream">
      {/* Contact Form & Information */}
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </main>
  );
}
