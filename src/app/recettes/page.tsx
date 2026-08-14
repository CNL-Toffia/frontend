import React from "react";
import { Metadata } from "next";
import RecipesGrid from "@/components/sections/RecipesGrid";

export const metadata: Metadata = {
  title: "Recettes & Inspirations Pâtissières | TOFFIA — CNL Caramel",
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
      {/* Editorial Page Header */}
      <section className="relative pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14 bg-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-caramel-dark leading-[1.1] tracking-tight mb-5">
            Recettes & Inspirations
          </h1>

          <p className="text-lg md:text-xl text-caramel-dark/80 leading-relaxed max-w-2xl mx-auto">
            Découvrez comment chefs pâtissiers et passionnés de gastronomie subliment
            leurs tartes, choux, entremets et créations avec les caramels et crèmes TOFFIA.
          </p>
        </div>
      </section>

      {/* Global Section Divider */}
      <div className="w-11/12 max-w-5xl mx-auto border-t border-caramel-gold/20 my-12" />

      {/* Minimalist Recipe Grid with Pagination */}
      <RecipesGrid />
    </main>
  );
}
