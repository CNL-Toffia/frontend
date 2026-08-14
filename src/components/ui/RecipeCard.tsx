"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Sparkles, ChefHat, Check, X, ChevronDown } from "lucide-react";
import { Recipe } from "@/data/recipes";

export interface RecipeCardProps {
  recipe: Recipe;
  variant?: "grid" | "carousel";
  className?: string;
  onSelect?: (recipe: Recipe) => void;
}

export default function RecipeCard({
  recipe,
  className = "",
}: RecipeCardProps) {
  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group rounded-3xl bg-cream border-2 border-caramel-gold/25 shadow-warm hover:shadow-warm-lg hover:border-caramel-gold/60 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 overflow-hidden ${className}`}
    >
      <div>
        {/* Visual Frame with Badges */}
        <div className="relative h-56 w-full rounded-2xl overflow-hidden bg-caramel-900/5 mb-4">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Category Tag */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-caramel-900/90 text-cream text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm flex items-center gap-1.5">
            <ChefHat className="w-3.5 h-3.5 text-caramel-gold" />
            <span>{recipe.category}</span>
          </div>

          {/* Difficulty & Time Badges */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-lg bg-cream/95 text-caramel-900 text-[11px] font-bold backdrop-blur-sm shadow-sm flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-caramel-gold" />
              <span>{recipe.prepTime}</span>
            </span>

            <span className="px-2.5 py-1 rounded-lg bg-caramel-100 text-caramel-900 text-[11px] font-bold shadow-sm">
              {recipe.difficulty}
            </span>
          </div>
        </div>

        {/* Recipe Title */}
        <h3 className="font-display font-bold text-xl text-caramel-900 leading-snug group-hover:text-caramel-700 transition-colors">
          {recipe.title}
        </h3>

        {/* Product Used Tag */}
        <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-caramel-gold">
          <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
          <span>Ingrédient vedette : {recipe.productUsed}</span>
        </div>

        {/* Short Description */}
        <p className="text-xs text-caramel-900/75 leading-relaxed mt-2.5">
          {recipe.description}
        </p>

        {/* Expandable Ingredients Drawer */}
        <AnimatePresence>
          {showIngredients && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden mt-4 pt-3 border-t border-caramel-gold/20"
            >
              <h4 className="text-xs font-bold text-caramel-900 uppercase tracking-wider mb-2">
                Ingrédients nécessaires :
              </h4>
              <ul className="space-y-1.5">
                {recipe.ingredients.map((ing, i) => (
                  <li
                    key={i}
                    className="text-xs text-caramel-900/80 flex items-start gap-2"
                  >
                    <Check className="w-3.5 h-3.5 text-caramel-gold flex-shrink-0 mt-0.5" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card Action Button */}
      <div className="mt-5 pt-4 border-t border-caramel-gold/15 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setShowIngredients(!showIngredients)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-caramel-900 hover:text-caramel-700 transition-colors focus:outline-none"
        >
          <span>{showIngredients ? "Masquer les ingrédients" : "Voir les ingrédients"}</span>
          <ChevronDown
            className={`w-4 h-4 text-caramel-gold transition-transform duration-200 ${
              showIngredients ? "rotate-180" : ""
            }`}
          />
        </button>

        <span className="text-[11px] font-semibold text-caramel-700">
          Création TOFFIA
        </span>
      </div>
    </motion.article>
  );
}
