"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Recipe } from "@/data/recipes";

export interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
}

export default function RecipeCard({
  recipe,
  className = "",
}: RecipeCardProps) {
  const t = useTranslations("recipesPage");
  const locale = useLocale();
  const isAr = locale === "ar";
  const [isExpanded, setIsExpanded] = useState(false);

  const title = isAr && recipe.title_ar ? recipe.title_ar : recipe.title;
  const description =
    isAr && recipe.description_ar ? recipe.description_ar : recipe.description;
  const ingredients =
    isAr && recipe.ingredients_ar ? recipe.ingredients_ar : recipe.ingredients;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col ${className}`}
    >
      {/* Image Container */}
      <div className="overflow-hidden rounded-xl aspect-[4/5] relative mb-5">
        <Image
          src={recipe.image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Clickable Title + Chevron */}
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="flex items-start justify-between gap-3 text-left rtl:text-right w-full cursor-pointer"
      >
        <h3 className="text-xl font-bold text-caramel-dark leading-snug font-display">
          {title}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-caramel-gold flex-shrink-0 mt-1 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Description */}
      {description && (
        <p className="text-sm text-caramel-dark/65 leading-relaxed mt-2 text-left rtl:text-right">
          {description}
        </p>
      )}

      {/* Expandable Ingredients Accordion */}
      <AnimatePresence initial={false}>
        {isExpanded && ingredients && ingredients.length > 0 && (
          <motion.div
            key="ingredients"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-3 border-t border-caramel-gold/15 text-left rtl:text-right">
              <span className="text-[11px] font-bold uppercase tracking-widest text-caramel-gold mb-2 block">
                {t("ingredients")}
              </span>
              <ul className="space-y-1.5">
                {ingredients.map((ingredient, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-caramel-dark/70 leading-relaxed flex items-baseline gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-caramel-gold/50 flex-shrink-0 mt-[7px]" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
