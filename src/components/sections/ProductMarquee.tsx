"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, BookOpen, Utensils } from "lucide-react";
import { products } from "@/data/products";

export interface ProductMarqueeProps {
  className?: string;
}

export default function ProductMarquee({ className }: ProductMarqueeProps) {
  // Duplicate product array 3 times for a flawless, glitch-free continuous loop
  const marqueeItems = [...products, ...products, ...products];

  return (
    <section
      className={`py-20 lg:py-28 bg-cream border-t border-caramel-gold/15 relative overflow-hidden z-10 ${
        className || ""
      }`}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel-100/90 border border-caramel-gold/30 text-xs font-bold uppercase tracking-wider text-caramel-900 mb-4 shadow-sm">
          <Sparkles className="w-4 h-4 text-caramel-gold" />
          <span>Sélection Signature</span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-caramel-900 tracking-tight mb-4">
          Nos Créations & Spécialités
        </h2>

        <p className="text-base sm:text-lg text-caramel-900/80 max-w-2xl mx-auto leading-relaxed">
          Découvrez la diversité de nos gammes artisanales, élaborées avec des
          ingrédients nobles au cœur de Blida.
        </p>
      </div>

      {/* Infinite Horizontal Scrolling Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Soft edge gradient fades for elegant infinite blend */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-cream to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-cream to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex items-center gap-6 sm:gap-8 w-max cursor-grab active:cursor-grabbing"
          animate={{
            x: ["0%", "-33.333%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 28,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {marqueeItems.map((product, index) => (
            <Link
              key={`${product.id}-${index}`}
              href={`/produits?categorie=${product.category}`}
              className="group relative flex-shrink-0 w-64 sm:w-72 bg-cream rounded-3xl border-2 border-caramel-gold/25 shadow-warm hover:shadow-warm-lg hover:border-caramel-gold/60 p-4 transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
            >
              {/* Top Category Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-caramel-700 bg-caramel-100/90 px-2.5 py-1 rounded-full">
                  {product.categoryLabel}
                </span>
                {product.tag && (
                  <span className="text-[10px] font-bold text-royal-red bg-royal-red/10 px-2 py-0.5 rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Product Visual */}
              <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden bg-caramel-900/5 my-1">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="300px"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Product Name & Format */}
              <div className="mt-3 pt-2 border-t border-caramel-gold/15 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-caramel-900 group-hover:text-caramel-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-caramel-700/80 mt-0.5">
                    {product.sizes.join(" · ")}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-caramel-100 group-hover:bg-caramel-gold text-caramel-900 flex items-center justify-center transition-colors flex-shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Dual Call-to-Action Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/produits"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-caramel-gold via-caramel-500 to-caramel-700 text-caramel-900 font-bold text-sm sm:text-base shadow-warm hover:shadow-warm-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Voir tous nos produits</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/recettes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-cream hover:bg-caramel-100 text-caramel-900 font-bold text-sm sm:text-base border border-caramel-gold/40 shadow-sm hover:border-caramel-gold transition-all duration-200"
          >
            <Utensils className="w-4 h-4 text-caramel-gold" />
            <span>Découvrir nos recettes</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
