import React, { Suspense } from "react";
import { Metadata } from "next";
import { Sparkles, PackageCheck, Award, ShieldCheck } from "lucide-react";
import ProductsGrid from "@/components/sections/ProductsGrid";

export const metadata: Metadata = {
  title: "Nos Produits & Catalogue Gourmand | TOFFIA — CNL Caramel",
  description:
    "Explorez notre gamme d'exception : crèmes caramel, crèmes de pistache, noisettes, pâtes à tartiner, nappages et formats professionnels TOFFIA.",
  openGraph: {
    title: "Catalogue Produits TOFFIA — Caramels & Pâtes Gourmandes",
    description:
      "La référence algérienne du caramel artisanal et des préparations pâtissières professionnelles.",
    images: [
      {
        url: "/caramel2.png",
        width: 1200,
        height: 630,
        alt: "Catalogue Produits TOFFIA",
      },
    ],
  },
};

export default function ProductsPage() {
  return (
    <main className="flex-1 flex flex-col w-full bg-cream">
      {/* Page Header Banner */}
      <section className="relative pt-12 pb-14 lg:pt-20 lg:pb-16 bg-gradient-to-b from-caramel-100/50 via-caramel-50/30 to-cream border-b border-caramel-gold/15 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-caramel-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel-100 border border-caramel-gold/30 text-xs font-semibold uppercase tracking-wider text-caramel-900 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-caramel-gold" />
            <span>Catalogue Officiel TOFFIA</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-caramel-900 leading-tight mb-4">
            Nos Produits
          </h1>

          <p className="text-base sm:text-xl text-caramel-900/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Une gamme complète de caramels, crèmes onctueuses et pâtes gourmandes,
            façonnées pour le plaisir familial et l'exigence des chefs pâtissiers.
          </p>

          {/* Quick value badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-bold text-caramel-900/80 pt-4 border-t border-caramel-gold/20 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-caramel-gold" />
              <span>Cuisson Artisanale</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-caramel-gold" />
              <span>Ingrédients Sélectionnés</span>
            </div>
            <div className="flex items-center gap-2">
              <PackageCheck className="w-4 h-4 text-caramel-gold" />
              <span>Formats Particuliers & Pro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filterable Products Grid */}
      <Suspense
        fallback={
          <div className="py-20 text-center text-caramel-700 font-semibold">
            Chargement du catalogue...
          </div>
        }
      >
        <ProductsGrid />
      </Suspense>
    </main>
  );
}
