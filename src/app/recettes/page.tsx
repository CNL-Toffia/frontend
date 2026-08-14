import React from "react";
import { Metadata } from "next";
import { ChefHat, Sparkles, Utensils, Heart } from "lucide-react";
import RecipesGrid from "@/components/sections/RecipesGrid";

export const metadata: Metadata = {
  title: "Recettes & Inspirations Pâtissières",
  description:
    "Découvrez des recettes gourmandes sublimées par le caramel TOFFIA. Tartes, choux, entremets et desserts créatifs avec nos crèmes et nappages artisanaux.",
  openGraph: {
    title: "Recettes & Inspirations | TOFFIA — CNL Caramel",
    description:
      "Inspirations pâtissières d'exception avec les caramels et crèmes TOFFIA.",
    url: "https://toffiacaramel-dz.com/recettes",
    images: [
      {
        url: "/caramel3.png",
        width: 1200,
        height: 630,
        alt: "Recettes TOFFIA",
      },
    ],
  },
  alternates: {
    canonical: "https://toffiacaramel-dz.com/recettes",
  },
};

export default function RecipesPage() {
  return (
    <main className="flex-1 flex flex-col w-full bg-cream">
      {/* Page Header Banner */}
      <section className="relative pt-12 pb-14 lg:pt-20 lg:pb-16 bg-gradient-to-b from-caramel-100/50 via-caramel-50/30 to-cream overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-caramel-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel-100 border border-caramel-gold/30 text-xs font-semibold uppercase tracking-wider text-caramel-900 mb-4 shadow-sm">
            <ChefHat className="w-4 h-4 text-caramel-gold" />
            <span>Laboratoire & Créations Gourmandes</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-caramel-900 leading-tight mb-4">
            Recettes & Inspirations
          </h1>

          <p className="text-base sm:text-xl text-caramel-900/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Découvrez comment chefs pâtissiers et amateurs éclairés subliment
            leurs tartes, choux, entremets et desserts avec les caramels TOFFIA.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-bold text-caramel-900/80 pt-4 border-t border-caramel-gold/20 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-caramel-gold" />
              <span>Textures Testées en Laboratoire</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-caramel-gold" />
              <span>Tenue Parfaite au Froid</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-royal-500" />
              <span>100% Gourmandise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Teasers & Full Grid */}
      <RecipesGrid />
    </main>
  );
}
