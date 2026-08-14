import React, { Suspense } from "react";
import { Metadata } from "next";
import { Mail, Sparkles, Phone, MapPin } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contactez-Nous",
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
      {/* Page Header Banner */}
      <section className="relative pt-12 pb-14 lg:pt-20 lg:pb-16 bg-gradient-to-b from-caramel-100/50 via-caramel-50/30 to-cream overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-caramel-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel-100 border border-caramel-gold/30 text-xs font-semibold uppercase tracking-wider text-caramel-900 mb-4 shadow-sm">
            <Mail className="w-4 h-4 text-caramel-gold" />
            <span>Espace Contact & Partenariats</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-caramel-900 leading-tight mb-4">
            Contactez-Nous
          </h1>

          <p className="text-base sm:text-xl text-caramel-900/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Vous êtes professionnel de la pâtisserie, restaurateur, distributeur
            ou simple amateur de gourmandise ? Notre équipe est à votre écoute.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-bold text-caramel-900/80 pt-4 border-t border-caramel-gold/20 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-caramel-gold" />
              <span>Réponse sous 24h ouvrées</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-caramel-gold" />
              <span>Siège à Blida, Algérie</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-caramel-gold" />
              <span>Devis Pro Personnalisés</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </main>
  );
}
