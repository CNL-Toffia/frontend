"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sparkles,
  ChefHat,
} from "lucide-react";
import { recipes } from "@/data/recipes";

export interface RecipesCarouselProps {
  className?: string;
}

// Fallback visual mapping for recipe cards using the authentic public image set
const recipeImageMap: string[] = [
  "/caramel2.png",
  "/caramel4.png",
  "/caramel3.png",
  "/caramel1.png",
  "/caramel2.png",
];

export default function RecipesCarousel({ className }: RecipesCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setMaxScroll(Math.max(0, scrollWidth - offsetWidth));
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const amount = 340;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={`py-20 lg:py-28 bg-caramel-50/70 border-t border-caramel-gold/15 relative overflow-hidden ${className || ""
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-caramel-100 border border-caramel-gold/30 text-xs font-semibold uppercase tracking-wider text-caramel-900 mb-3">
              <ChefHat className="w-3.5 h-3.5 text-caramel-gold" />
              <span>Inspirations Pâtissières</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-caramel-900 leading-tight">
              Un caramel qui inspire les professionnels
            </h2>
            <p className="text-base sm:text-lg text-caramel-900/75 max-w-xl mt-3 leading-relaxed">
              De l'atelier artisanal aux cuisines gastronomiques, découvrez
              comment nos produits subliment chaque création.
            </p>
          </div>

          {/* Desktop Carousel Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-cream border border-caramel-gold/30 text-caramel-900 hover:bg-caramel-gold hover:text-caramel-900 flex items-center justify-center shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-caramel-gold"
              aria-label="Recette précédente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-cream border border-caramel-gold/30 text-caramel-900 hover:bg-caramel-gold hover:text-caramel-900 flex items-center justify-center shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-caramel-gold"
              aria-label="Recette suivante"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container with native smooth swipe & desktop fallback */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {recipes.map((recipe, index) => {
            const displayImage =
              recipeImageMap[index % recipeImageMap.length] || "/caramel2.png";

            return (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-[280px] sm:w-[320px] lg:w-[340px] flex-shrink-0 snap-start group"
              >
                <div className="h-full rounded-3xl bg-cream border-2 border-caramel-gold/25 shadow-warm hover:shadow-warm-lg p-5 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-1.5 overflow-hidden">
                  <div>
                    {/* Visual with Badge */}
                    <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-caramel-900/5 mb-4">
                      <Image
                        src={displayImage}
                        alt={recipe.title}
                        fill
                        sizes="(max-width: 768px) 280px, 340px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-cream/90 text-caramel-900 text-[10px] font-bold backdrop-blur-sm flex items-center gap-1">
                        <Clock className="w-3 h-3 text-caramel-gold" />
                        <span>{recipe.prepTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-lg text-caramel-900 leading-snug group-hover:text-caramel-700 transition-colors line-clamp-2">
                      {recipe.title}
                    </h3>

                    {/* Product Used */}
                    <p className="text-xs font-semibold text-caramel-gold mt-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{recipe.productUsed}</span>
                    </p>

                    {/* Description */}
                    <p className="text-xs text-caramel-900/75 leading-relaxed mt-2 line-clamp-2">
                      {recipe.description}
                    </p>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="pt-4 mt-4 border-t border-caramel-gold/15">
                    <Link
                      href="/recettes"
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-caramel-900 hover:text-caramel-700 transition-colors"
                    >
                      <span>Découvrir l'inspiration</span>
                      <ArrowRight className="w-3.5 h-3.5 text-caramel-gold group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA to all recipes */}
        <div className="mt-12 text-center">
          <Link
            href="/recettes"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cream border-2 border-caramel-gold/40 text-caramel-900 font-bold text-sm shadow-sm hover:border-caramel-gold hover:bg-caramel-100/60 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Voir toutes les recettes & inspirations</span>
            <ArrowRight className="w-4 h-4 text-caramel-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
