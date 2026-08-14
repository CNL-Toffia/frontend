import React from "react";
import { Metadata } from "next";
import ProductsGrid from "@/components/sections/ProductsGrid";

export const metadata: Metadata = {
  title: "Nos Produits & Catalogue Gourmand | TOFFIA — CNL Caramel",
  description:
    "Explorez notre gamme d'exception : crèmes caramel, crèmes de pistache, noisettes, pâtes à tartiner, nappages et formats professionnels TOFFIA à Blida.",
  openGraph: {
    title: "Nos Produits & Catalogue Gourmand | TOFFIA — CNL Caramel",
    description:
      "La référence algérienne du caramel artisanal et des préparations pâtissières professionnelles.",
    url: "https://toffiacaramel-dz.com/produits",
    images: [
      {
        url: "/caramel2.png",
        width: 1200,
        height: 630,
        alt: "Catalogue Produits TOFFIA",
      },
    ],
  },
  alternates: {
    canonical: "https://toffiacaramel-dz.com/produits",
  },
};

export default function ProductsPage() {
  return (
    <main className="flex-1 flex flex-col w-full">
      {/* Editorial Page Header */}
      <section className="relative pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-caramel-dark leading-[1.1] tracking-tight mb-6">
            Nos Produits
          </h1>

          <p className="text-lg md:text-xl text-caramel-dark/80 leading-relaxed max-w-2xl mx-auto">
            Découvrez notre collection de caramels artisanaux, crèmes onctueuses
            et pâtes gourmandes, façonnées pour le plaisir familial et
            l&apos;exigence des chefs pâtissiers.
          </p>
        </div>
      </section>

      {/* Gold Separator */}
      <div className="w-11/12 max-w-5xl mx-auto border-t border-caramel-gold/20 mb-16" />

      {/* Products by Category */}
      <ProductsGrid />
    </main>
  );
}
